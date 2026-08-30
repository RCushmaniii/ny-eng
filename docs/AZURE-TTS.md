# Azure Neural Text-to-Speech — Implementation & Handoff Guide

This document is the complete, portable spec for the Azure Neural TTS feature used on
NY English Teacher. Copy it (and the referenced source files) into any CushLabs repo
that needs high-quality pronunciation audio.

**Live reference implementation:** https://www.nyenglishteacher.com (course pages &
blog "speak" buttons).

**Which voices and accents exist, how to choose one, and the traps:**
[AZURE-TTS-VOICES.md](./AZURE-TTS-VOICES.md). Read it before hard-coding any voice name —
the whitelist below fails silently, and Azure's catalog moves.

---

## Architecture (3 layers)

```
Browser component  →  POST /api/tts/synthesize  →  Azure Cognitive Services Neural TTS
(AudioButton.tsx    (Vercel serverless fn,         (https://<region>.tts.speech
 or SpeakEnglish)    holds the secret key)          .microsoft.com)
```

**Core principle:** the Azure subscription key **never reaches the browser**. The
browser only talks to your own `/api/tts/synthesize` endpoint, which proxies to Azure
server-side. Putting the key client-side would let anyone drain the quota and run up
the bill.

Three pieces — copy whichever you need:

1. **Serverless proxy** (required) — `api/tts/synthesize.ts`
2. **React button** — `src/components/course/AudioButton.tsx`
3. **Vanilla-JS Astro component** — `src/components/blog/SpeakEnglish.astro`
   (auto-wires buttons to any `.speak-en` element; no React needed)

---

## 1. Environment variables

Two vars, both server-side secrets. **Never** prefix with `PUBLIC_` / `VITE_`.

| Variable | Required? | Example | Purpose |
|----------|-----------|---------|---------|
| `AZURE_TTS_KEY` | **Yes** | *(secret — Key 1)* | Subscription key, sent as `Ocp-Apim-Subscription-Key`. Missing → endpoint returns 500. |
| `AZURE_TTS_REGION` | Recommended | `eastus` | Region of the Speech resource. Defaults to `eastus` in code; **must match the actual resource region** or every call 4xx's. |

`AZURE_TTS_KEY2` (Azure's second key) is optional — Azure issues two keys so you can
rotate one while the other stays live. The app only reads `AZURE_TTS_KEY`.

Set both in the Vercel project env (Development + Preview + Production) **and** local
`.env.local`. The key comes from an Azure **Speech service** resource → **Keys and
Endpoint** blade. Free tier (F0) = 0.5M chars/month of neural TTS.

> **Secret hygiene:** never paste `.env` contents into chat, commit them, or echo
> values. To verify a key exists, check the key *name* only. If a key is ever exposed,
> regenerate it in Azure Portal → Speech resource → Keys and Endpoint.

---

## 2. The serverless proxy — `api/tts/synthesize.ts`

The heart of the feature. Vercel `@vercel/node` runtime.

```typescript
import type { VercelRequest, VercelResponse } from "@vercel/node";

const allowedOrigins = [
  "https://www.nyenglishteacher.com",
  "https://ny-eng.vercel.app",
  "http://localhost:4321",
  "http://localhost:4322",
  "http://localhost:3000",
];

// Default voices per language
const DEFAULT_VOICES: Record<string, string> = {
  en: "en-US-AvaNeural",
  es: "es-MX-DaliaNeural",
};

// Allowed voices (whitelist to prevent abuse)
const ALLOWED_VOICES = new Set([
  "en-US-AndrewNeural",
  "en-US-AvaNeural",
  "en-US-BrianNeural",
  "en-US-EmmaNeural",
  "en-US-JennyNeural",
  "en-US-GuyNeural",
  "es-MX-JorgeNeural",
  "es-MX-DaliaNeural",
]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || "";
  const corsOrigin = allowedOrigins.includes(origin) ? origin : "";

  if (corsOrigin) res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.AZURE_TTS_KEY;
  const region = process.env.AZURE_TTS_REGION || "eastus";
  if (!apiKey) {
    console.error("AZURE_TTS_KEY not configured");
    return res.status(500).json({ error: "TTS service not configured" });
  }

  const { text, voice, lang, phoneme } = req.body || {};
  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "Missing or invalid 'text' field" });
  }
  if (text.length > 500) {
    return res.status(400).json({ error: "Text exceeds 500 character limit" });
  }

  const cleanText = text
    .replace(/<[^>]*>/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .trim();
  if (!cleanText) return res.status(400).json({ error: "Text is empty after sanitization" });

  const language = lang === "es" ? "es" : "en";
  const selectedVoice = voice && ALLOWED_VOICES.has(voice)
    ? voice
    : DEFAULT_VOICES[language];

  const voiceLang = selectedVoice.split("-").slice(0, 2).join("-"); // "en-US"

  const escapedText = escapeXml(cleanText);
  const ipaRegex = /^[ -~À-ɏɐ-ʯ̀-ͯ -⁯.ˈˌːˑ]+$/;
  const textContent =
    phoneme && typeof phoneme === "string" && phoneme.length <= 100 && ipaRegex.test(phoneme)
      ? `<phoneme alphabet="ipa" ph="${escapeXml(phoneme)}">${escapedText}</phoneme>`
      : escapedText;

  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${voiceLang}">
  <voice name="${selectedVoice}">
    <prosody rate="0.9">${textContent}</prosody>
  </voice>
</speak>`;

  try {
    const ttsUrl = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;
    const response = await fetch(ttsUrl, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
        "User-Agent": "CushLabsTTS/1.0",
      },
      body: ssml,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Azure TTS error: ${response.status} ${errorText}`);
      return res.status(502).json({ error: "TTS synthesis failed" });
    }

    const audioBuffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.setHeader("Content-Length", audioBuffer.byteLength.toString());
    return res.status(200).send(Buffer.from(audioBuffer));
  } catch (err) {
    console.error("TTS error:", err);
    return res.status(500).json({ error: "Internal TTS error" });
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
```

### Request/response contract

- **Request:** `POST /api/tts/synthesize`, JSON body
  `{ text: string, voice?: string, lang?: "en" | "es", phoneme?: string }`
- **Response:** `audio/mpeg` (MP3) binary, cached 1h via `Cache-Control`.

### Azure call specifics that matter

- **Endpoint:** `https://<region>.tts.speech.microsoft.com/cognitiveservices/v1`
- **Auth:** `Ocp-Apim-Subscription-Key: <key>` header
- **Body:** SSML, `Content-Type: application/ssml+xml`
- **Output format:** `X-Microsoft-OutputFormat: audio-24khz-96kbitrate-mono-mp3`
- **`User-Agent` header is required** — Azure can reject requests without one.

---

## 3. Security / abuse hardening (keep all of these)

The proxy is a public endpoint hitting a paid API, so it ships with guardrails:

1. **CORS allowlist** — only your origins get `Access-Control-Allow-Origin`. Update
   `allowedOrigins` per repo.
2. **Voice whitelist** (`ALLOWED_VOICES`) — unknown voice silently falls back to default.
3. **500-char limit** — caps per-request cost.
4. **Input sanitization** — strips HTML tags + control chars before SSML.
5. **SSML injection prevention** — `escapeXml()` on all interpolated text; the IPA
   `phoneme` field is regex-validated (≤100 chars, IPA charset) before use.
6. **1-hour cache** — identical text returns cached audio, cutting Azure calls.

> **Rate limiting gap:** there's no Upstash limiter here yet — it leans on the char cap
> + CORS + caching. Per the CushLabs rate-limiting standard, if the new repo's endpoint
> is high-traffic or unauthenticated, add Upstash Redis sliding-window limiting keyed on
> IP/session.

---

## 4. Client option A — React `AudioButton.tsx`

Self-contained button: calls the proxy, plays MP3, **falls back to browser
`SpeechSynthesis`** if the proxy is down (e.g. `astro dev` with no serverless runtime),
caches blob URLs module-wide.

Props: `text` (required), `lang?: "en-US" | "es-MX"` (default `en-US`), `rate?`
(default 0.85; only affects browser fallback — server uses `prosody rate="0.9"`),
`size?: "sm" | "md" | "lg"`, `className?`, `label?`. Icons from `lucide-react`
(`Volume2` / `Loader2`). Copy `src/components/course/AudioButton.tsx` verbatim; only
the Tailwind classes are project-specific.

Core fetch logic:

```typescript
const ttsLang = lang.startsWith("es") ? "es" : "en";
const response = await fetch("/api/tts/synthesize", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text, lang: ttsLang }),
});
const blob = await response.blob();
const audioUrl = URL.createObjectURL(blob);   // cache this
new Audio(audioUrl).play();
```

## 5. Client option B — `SpeakEnglish.astro` (no React)

Drop-in Astro component. Include it once on a page, then any element with
`class="speak-en"` gets a speaker button appended automatically:

```html
<span class="speak-en">The shipment is pending customs clearance.</span>
```

Features: optional `data-say="..."` to speak different text than displayed; per-page
voice override via a `voice` prop; same audio cache + browser fallback; verbose
`console.log('[TTS] …')` tracing in DevTools. Source:
`src/components/blog/SpeakEnglish.astro`.

---

## 6. Voice reference

| Language | Whitelisted voices | Default |
|----------|--------------------|---------|
| English (en-US) | Andrew, Ava, Brian, Emma, Jenny, Guy (`en-US-*Neural`) | `en-US-AvaNeural` |
| English (en-GB) | Ryan, Thomas, Oliver, Alfie, Elliot, Ethan, Noah (male); Sonia, Libby, Abbi, Bella (female) | none — set per post via `ttsVoice` |
| Spanish (es-MX) | Jorge, Dalia (`es-MX-*Neural`) | `es-MX-DaliaNeural` |

`voiceLang` is derived from the voice name, so `en-GB-ThomasNeural` automatically emits
`xml:lang="en-GB"` — no extra wiring is needed to add an accent locale beyond the whitelist entry.

Full accent catalog, voice-family guidance, sample generation and the gotchas that cost time:
**[AZURE-TTS-VOICES.md](./AZURE-TTS-VOICES.md)**. List the live catalog with
`node --env-file=.env.local scripts/azure-list-voices.mjs en-GB`.

Azure ships **14 English locales**: en-AU, en-CA, en-GB, en-HK, en-IE, en-IN, en-KE, en-NG,
en-NZ, en-PH, en-SG, en-TZ, en-US, en-ZA. **There is no `en-CN`** — Azure has no
Chinese-accented English voice. The nearest available approximations are `en-HK`
(Cantonese-influenced) and `en-SG`. Verified against the live `voices/list` endpoint 2026-08-29.

ES default is **`es-MX-DaliaNeural`** (Mexican Spanish) — consistent with the CushLabs
Mexican-Professional-Spanish standard. **Do not** use `es-ES-*` (Iberian) voices. Add or
remove voices by editing `ALLOWED_VOICES` + `DEFAULT_VOICES`.

---

## 7. Fully-qualified URLs

### Runtime (the app calls these)

| URL | Used by | Notes |
|-----|---------|-------|
| `https://eastus.tts.speech.microsoft.com/cognitiveservices/v1` | Proxy → Azure synthesis | Region-templated. Swap `eastus` for your region. |
| `https://eastus.tts.speech.microsoft.com/cognitiveservices/voices/list` | (Optional) list voices | `GET` with the same key header. |
| `https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken` | (Optional) token auth | Only if switching from key auth to bearer tokens. Not used here. |

> All three are **region-templated**. Mismatched region is the #1 cause of `401`/`403`
> from an otherwise-valid key.

### CSP note

The browser never contacts Azure directly (only your own `/api/tts/synthesize`), so you
do **not** need `*.tts.speech.microsoft.com` in `connect-src`. Only add the API origin to
`connect-src` (in `vercel.json`) if it's called cross-origin.

### Setup / reference

| URL | Purpose |
|-----|---------|
| https://portal.azure.com/ | Create the Speech resource; get Key + Region |
| https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices | Deep-link to create a Speech service |
| https://speech.microsoft.com/portal | Speech Studio — preview voices, test SSML |
| https://learn.microsoft.com/azure/ai-services/speech-service/rest-text-to-speech | REST TTS reference |
| https://learn.microsoft.com/azure/ai-services/speech-service/language-support?tabs=tts | Full neural voice catalog |
| https://learn.microsoft.com/azure/ai-services/speech-service/speech-synthesis-markup | SSML reference |
| https://learn.microsoft.com/azure/ai-services/speech-service/speech-services-quotas-and-limits | Quotas / limits |

---

## 8. Setup checklist for a new repo

1. Create an Azure **Speech service** resource → copy Key 1 + Region.
2. Add `AZURE_TTS_KEY` and `AZURE_TTS_REGION` to Vercel env (all 3 environments) and
   local `.env.local`.
3. Copy `api/tts/synthesize.ts` → edit `allowedOrigins` for the new domains.
4. Copy the client component you need (`AudioButton.tsx` for React,
   `SpeakEnglish.astro` for vanilla) → adjust styling + voice whitelist.
5. If the endpoint will be high-traffic, add Upstash rate limiting.
6. Test: `astro dev` uses the **browser fallback** (no serverless fn locally unless you
   run `vercel dev`); only a real Vercel deploy / `vercel dev` exercises the Azure path.

### Host portability note

This assumes **Vercel** + the `@vercel/node` serverless runtime. The Azure call itself
is identical on any host — only the function wrapper changes:

- **Cloudflare Workers:** use `fetch(request)` / Hono handler signature.
- **Netlify:** use the Netlify Functions export shape.
- **Static-only host:** no serverless layer → you'd need a separate proxy service.
