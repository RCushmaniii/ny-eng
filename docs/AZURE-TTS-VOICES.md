# Azure Neural TTS — Accents & Voice Selection

Companion to [AZURE-TTS.md](./AZURE-TTS.md), which covers the architecture, the serverless
proxy, and the security hardening. **This file covers which voices exist, which accents are
actually possible, how to choose one, and the traps.**

Everything below was verified against the live `voices/list` endpoint on **2026-08-29**
(region `eastus`, 763 voices). Re-verify rather than trusting this file — see the first rule.

---

## Rule 1 — never write a voice name from memory

Microsoft adds, renames, and deprecates voices continuously, and the catalog is scoped to
**your region and your tier**. A voice name that is correct in a blog post, in a docs page,
or in a model's memory may not exist on your resource.

There is exactly one authoritative source, and it takes four seconds:

```
node --env-file=.env.local scripts/azure-list-voices.mjs en-GB
```

Everything the API knows comes back: `ShortName`, `Gender`, `LocaleName`, `StyleList`, and
`SecondaryLocaleList`. Filter by any locale prefix (`en-`, `es-`, `en-IN`). With no argument
it lists every English locale.

This matters more than it sounds. **The whitelist in `api/tts/synthesize.ts` fails silently**
— an unlisted or misspelled voice does not error, it quietly serves `en-US-AvaNeural`. A
British post with a typo in `ttsVoice` ships American audio and looks completely fine.

---

## What accents are actually possible

Azure ships **14 English locales**. That list is the whole universe of English accents
available — anything not on it cannot be produced by picking a voice.

| Locale  | Accent                | Voices | Notes                                             |
| ------- | --------------------- | -----: | ------------------------------------------------- |
| `en-US` | American              |    118 | The default. Deepest catalog by far.              |
| `en-GB` | British               |     21 | 7 standard male, 4 standard female, plus HD tiers |
| `en-IN` | Indian                |     20 | Second-deepest. Both genders, several with styles |
| `en-AU` | Australian            |     19 |                                                   |
| `en-HK` | Hong Kong (Cantonese) |      2 | Sam (M), Yan (F)                                  |
| `en-SG` | Singaporean           |      2 | Wayne (M), Luna (F)                               |
| `en-IE` | Irish                 |      2 |                                                   |
| `en-CA` | Canadian              |      2 |                                                   |
| `en-NZ` | New Zealand           |      2 |                                                   |
| `en-PH` | Filipino              |      2 |                                                   |
| `en-ZA` | South African         |      2 |                                                   |
| `en-KE` | Kenyan                |      2 |                                                   |
| `en-NG` | Nigerian              |      2 |                                                   |
| `en-TZ` | Tanzanian             |      2 |                                                   |

### There is no Chinese-accented English voice

**`en-CN` does not exist.** If you want English spoken with a Chinese accent for listening
practice, Azure cannot give it to you directly. The two honest approximations:

- **`en-HK`** — Hong Kong English, Cantonese substrate. The closest thing Azure ships.
- **`en-SG`** — Singaporean English, Mandarin/Hokkien influence.

Both are real accent locales with real speakers behind them, and both are only
approximations of what a listener probably means by "Chinese accent."

### The multilingual-voice trap

Running `scripts/azure-list-voices.mjs --secondary zh-CN` returns 20 Chinese voices that
advertise English among 90+ secondary locales — `zh-CN-XiaoxiaoMultilingualNeural` and
friends. It is tempting to read that as "a Chinese voice speaking English."

It is not. **Microsoft builds multilingual voices to sound native in each target language**,
not to carry the source language's accent across. Their design goal is the opposite of what
an accent-practice page needs. Generate a sample and listen before believing otherwise —
that is a fifteen-second check and it settles the question:

```
node --env-file=.env.local scripts/azure-voice-samples.mjs --out ./tmp/v --voices zh-CN-XiaoxiaoMultilingualNeural
```

The same reasoning applies to any "use a French voice to get a French accent in English"
plan. Pick the accent locale if one exists; do not try to borrow one.

---

## Voice families, and which to trust in production

The catalog mixes several generations. The naming tells you which you are looking at:

| Pattern                         | Example                            | Use it?                                                  |
| ------------------------------- | ---------------------------------- | -------------------------------------------------------- |
| `<locale>-<Name>Neural`         | `en-GB-ThomasNeural`               | **Yes.** Standard GA neural. Stable, cheap, predictable. |
| `<locale>-<Name>MultilingualNeural` | `en-GB-OllieMultilingualNeural` | Fine, but see the trap above before using it for accent. |
| `<Name>:DragonHDLatestNeural`   | `en-GB-Ada:DragonHDLatestNeural`   | Higher fidelity, preview-ish naming, may move. Avoid pinning a production page to one. |
| `<Name>:MAI-Voice-2`            | `en-US-Ethan:MAI-Voice-2`          | Newest family, rich style lists, least stable naming.    |

For content pages that must keep working unattended, **stay on standard `*Neural`**. The
`:` in the newer names is itself a signal that the identifier is versioned and can change.

A returned `200` from a synthesis call is the real proof that a voice works on your tier —
the catalog lists things your subscription may still refuse.

---

## Adding an accent to this codebase

Three steps, and only the first is easy to forget.

1. **Whitelist the voice** in `api/tts/synthesize.ts` → `ALLOWED_VOICES`. Without this the
   request silently falls back to `en-US-AvaNeural`.
2. **Set `ttsVoice` in the post's frontmatter** — e.g. `ttsVoice: "en-GB-ThomasNeural"`. It
   flows frontmatter → `[slug].astro` → `SpeakEnglish.astro` → `data-voice` → API body.
3. **Nothing else.** `voiceLang` is derived from the voice name
   (`selectedVoice.split("-").slice(0, 2).join("-")`), so `en-IN-PrabhatNeural` emits
   `xml:lang="en-IN"` on its own. No new locale plumbing, no new env var.

Verify with a real request against the deployed preview rather than assuming — a different
byte length from the default voice proves the override actually took effect:

```
node -e "fetch('https://<preview>.vercel.app/api/tts/synthesize',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:'Shall we crack on?',lang:'en',voice:'en-GB-ThomasNeural'})}).then(r=>r.arrayBuffer()).then(b=>console.log(b.byteLength))"
```

---

## Choosing a voice: you have to listen

**Azure publishes no age, warmth, or character metadata.** `Gender` and `StyleList` are all
you get. There is no field that says "male, late twenties, warm." Nothing in the name tells
you either — Ryan and Thomas are both `en-GB` males and they do not sound the same age.

So generate samples and listen. Two minutes:

```
node --env-file=.env.local scripts/azure-voice-samples.mjs --out ./tmp/voices --set uk-male
```

Prebuilt sets: `uk-male`, `uk-female`, `india`, `accents`. Or pass `--voices a,b,c`.

**Use a sentence where the accent has somewhere to show itself.** The script's default line
contains a non-rhotic R (*order*, *quarter*), the broad A (*ask*, *after*), and a medial T
(*water*, *delivery*). A neutral sentence makes every voice sound alike and tells you
nothing.

---

## Cost

Accent voices bill **identically** to `en-US-AvaNeural` — same standard-neural rate, same
allowance. Choosing `en-GB` or `en-IN` over `en-US` costs nothing extra.

Free tier **F0 is 500,000 characters/month** of neural TTS. For scale: verifying the whole
catalog and generating twenty comparison samples used about 2,300 characters. The proxy also
caches identical text for an hour and caps requests at 500 characters, so a content page is
nowhere near the ceiling.

---

## Gotchas that have actually cost time

**Region mismatch is the number-one cause of 401/403.** A perfectly valid key returns
`401` when `AZURE_TTS_REGION` does not match the resource's region. The error text does not
say "wrong region." If auth fails, check the region before you touch the key.

**The `User-Agent` header is required.** Azure can reject a synthesis request that omits it.
Both scripts and the proxy set one.

**Apostrophes.** `SpeakEnglish.astro` strips `"` and `'` (straight quotes, U+0022 and
U+0027) from the text before sending it. Markdown's smartypants converts `'` to `’`
(U+2019) during the build, which is **not** in the strip set — so `That's quite good.`
survives as `That’s quite good.` and speaks correctly. This works by accident of the build
pipeline. If smartypants is ever disabled, every contraction on every speakable page starts
sending `Thats` to Azure. Check the rendered HTML, not the markdown source.

**Never print the key.** Both scripts read `process.env.AZURE_TTS_KEY` and report only
whether one was found. Run them via `node --env-file=.env.local`, never by pasting a value.

---

## Scripts

| Script                            | Purpose                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `scripts/azure-list-voices.mjs`   | Live voice catalog for your region; filter by locale prefix     |
| `scripts/azure-voice-samples.mjs` | Synthesize one sentence across many voices for side-by-side listening |

Both take `--env-file=.env.local` and are safe to run repeatedly.
