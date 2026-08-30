/**
 * Vercel Serverless Function: Text-to-Speech
 *
 * Proxies Azure Cognitive Services Neural TTS.
 * Accepts text + optional voice, returns audio/mpeg.
 * API key stays server-side — never exposed to the browser.
 *
 * POST /api/tts/synthesize
 * Body: { text: string, voice?: string, lang?: "en" | "es", phoneme?: string, rate?: number }
 * Response: audio/mpeg binary
 *
 * The optional `phoneme` field accepts an IPA string that overrides how
 * Azure pronounces the text. Example: { text: "uncomfortable", phoneme: "ʌnˈkʌmf.tɚ.bəl" }
 * This wraps the text in an SSML <phoneme> tag server-side so the client
 * never needs to craft raw SSML.
 *
 * The optional `rate` field sets the SSML speaking rate. It defaults to
 * DEFAULT_RATE (0.9) — a deliberate slowdown for pronunciation practice, which
 * every page relied on before the field existed. Only pass a rate when a page
 * specifically wants a different pace; a higher-fidelity voice generally sounds
 * more natural at 1.0, because time-stretching a neural voice is what makes it
 * sound synthetic.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { enforceRateLimit, RATE_LIMITS } from "../_lib/rate-limit.js";

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

// Speaking rate. 0.9 is the long-standing default every speakable page was
// authored against — do not change it to suit one post; set `rate` on that post
// instead. The bounds keep a bad request from producing unusable audio.
const DEFAULT_RATE = 0.9;
const RATE_MIN = 0.5;
const RATE_MAX = 1.5;

/**
 * Brand pronunciations, applied to every request.
 *
 * Azure guesses a name's pronunciation from its spelling, and for "CushLabs"
 * it guesses wrong. IPA states the sounds outright, so the page can keep
 * spelling the company correctly while the audio says it correctly. Chosen by
 * listening, not by reading a chart: the vowel is the one in "cushion"
 * (U+028A), not the one in "hush".
 *
 * Keys are matched case-sensitively on word boundaries. Keep this list very
 * short and restricted to distinctive names — a common word here would change
 * how it is spoken everywhere on the site.
 */
const PRONUNCIATIONS: Record<string, string> = {
  // The vowel in "cushion" (U+028A), not the one in "hush". Chosen by ear from
  // generated samples, not from a chart. Written as \u escapes so that a future
  // encoding pass cannot silently alter it — the same failure that once turned
  // the quote-strip class in SpeakEnglish.astro into the wrong characters.
  CushLabs: "\u02C8k\u028A\u0283l\u00E6bz",
};

// Allowed voices (whitelist to prevent abuse)
const ALLOWED_VOICES = new Set([
  // English US
  "en-US-AndrewNeural",
  "en-US-AvaNeural",
  "en-US-BrianNeural",
  "en-US-EmmaNeural",
  "en-US-JennyNeural",
  "en-US-GuyNeural",
  // English GB — British accent practice pages.
  // Male: Thomas / Oliver / Alfie / Elliot / Ethan / Noah read younger than Ryan,
  // which is the flagship and the only male en-GB voice with prosody styles.
  "en-GB-RyanNeural",
  "en-GB-ThomasNeural",
  "en-GB-OliverNeural",
  "en-GB-AlfieNeural",
  "en-GB-ElliotNeural",
  "en-GB-EthanNeural",
  "en-GB-NoahNeural",
  // DragonHD tier — noticeably more natural than the standard neural voices.
  // The ":" means Microsoft versions this identifier and can move it, so if
  // audio on a page using it ever breaks, re-verify the name against
  // scripts/azure-list-voices.mjs before assuming the key or region is at fault.
  "en-GB-Ollie:DragonHDLatestNeural",
  "en-GB-Ada:DragonHDLatestNeural",
  "en-GB-SoniaNeural",
  "en-GB-LibbyNeural",
  "en-GB-AbbiNeural",
  "en-GB-BellaNeural",
  // Spanish MX
  "es-MX-JorgeNeural",
  "es-MX-DaliaNeural",
]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || "";
  const corsOrigin = allowedOrigins.includes(origin) ? origin : "";

  // CORS headers
  if (corsOrigin) {
    res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limit before touching Azure TTS — every call past here is billable.
  if (await enforceRateLimit(req, res, RATE_LIMITS.ttsSynthesize)) return;

  const apiKey = process.env.AZURE_TTS_KEY;
  const region = process.env.AZURE_TTS_REGION || "eastus";

  if (!apiKey) {
    console.error("AZURE_TTS_KEY not configured");
    return res.status(500).json({ error: "TTS service not configured" });
  }

  const { text, voice, lang, phoneme, rate } = req.body || {};

  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "Missing or invalid 'text' field" });
  }

  // Limit text length to prevent abuse (500 chars is generous for pronunciation snippets)
  if (text.length > 500) {
    return res.status(400).json({ error: "Text exceeds 500 character limit" });
  }

  // Sanitize text — strip HTML tags and control characters
  const cleanText = text
    .replace(/<[^>]*>/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .trim();

  if (!cleanText) {
    return res.status(400).json({ error: "Text is empty after sanitization" });
  }

  // Determine voice
  const language = lang === "es" ? "es" : "en";
  const selectedVoice = voice && ALLOWED_VOICES.has(voice) ? voice : DEFAULT_VOICES[language];

  // Extract language tag from voice name (e.g., "en-US" from "en-US-AndrewNeural")
  const voiceLang = selectedVoice.split("-").slice(0, 2).join("-");

  // Build SSML content — optionally wrap in <phoneme> for pronunciation override
  const escapedText = escapeXml(cleanText);
  const ipaRegex = /^[\u0020-\u007E\u00C0-\u024F\u0250-\u02AF\u0300-\u036F\u2000-\u206F.ˈˌːˑ]+$/;
  const textContent =
    phoneme && typeof phoneme === "string" && phoneme.length <= 100 && ipaRegex.test(phoneme)
      ? // An explicit per-request phoneme covers the whole text, so the lexicon
        // is skipped here: nesting <phoneme> inside <phoneme> is invalid SSML.
        `<phoneme alphabet="ipa" ph="${escapeXml(phoneme)}">${escapedText}</phoneme>`
      : applyPronunciations(escapedText);

  // Rate is interpolated into SSML, so it is never passed through as a string.
  // Parse to a number, clamp, and re-serialize — the result can only ever be
  // digits and a decimal point.
  const parsedRate = typeof rate === "number" && Number.isFinite(rate) ? rate : DEFAULT_RATE;
  const selectedRate = Math.min(RATE_MAX, Math.max(RATE_MIN, parsedRate)).toFixed(2);

  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${voiceLang}">
  <voice name="${selectedVoice}">
    <prosody rate="${selectedRate}">${textContent}</prosody>
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

    // Cache audio for 1 hour (same text = same audio)
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.setHeader("Content-Length", audioBuffer.byteLength.toString());

    return res.status(200).send(Buffer.from(audioBuffer));
  } catch (err) {
    console.error("TTS error:", err);
    return res.status(500).json({ error: "Internal TTS error" });
  }
}

/** Escape special XML characters to prevent SSML injection */
/**
 * Wrap known brand names in <phoneme> so they are always spoken correctly.
 *
 * Runs on ALREADY-ESCAPED text and inserts markup, so it must come last. Keys
 * are compile-time constants rather than request input, but the pattern is
 * still built from an escaped literal so a future key containing a regex
 * metacharacter cannot change the match.
 */
function applyPronunciations(escaped: string): string {
  const isWordChar = (c: string) => c !== "" && /[A-Za-z0-9]/.test(c);
  let out = escaped;

  for (const [word, ipa] of Object.entries(PRONUNCIATIONS)) {
    const tag = `<phoneme alphabet="ipa" ph="${escapeXml(ipa)}">${escapeXml(word)}</phoneme>`;
    const parts = out.split(word);
    if (parts.length === 1) continue;

    // Deliberately a literal split rather than a RegExp: the boundary check is
    // done by hand so this function contains no escape sequences at all. An
    // earlier attempt used `new RegExp(...)` with a template literal, where the
    // intended word boundary silently became a backspace character and the
    // lexicon matched nothing. Type checking did not catch it; only running it did.
    let rebuilt = parts[0];
    for (let i = 1; i < parts.length; i++) {
      const before = parts[i - 1].slice(-1);
      const after = parts[i].slice(0, 1);
      const standsAlone = !isWordChar(before) && !isWordChar(after);
      rebuilt += (standsAlone ? tag : word) + parts[i];
    }
    out = rebuilt;
  }

  return out;
}


function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
