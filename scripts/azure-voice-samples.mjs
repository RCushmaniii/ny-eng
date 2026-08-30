/**
 * Azure Neural TTS — accent and voice comparison samples.
 *
 * Synthesizes ONE sentence across several voices and writes the MP3s to a
 * folder, so a voice can be chosen by ear instead of by guessing from its name.
 * Microsoft publishes no age, warmth, or "sounds like" metadata, so listening is
 * the only way to pick. Two minutes here beats shipping the wrong voice.
 *
 * Run from the repo root:
 *   node --env-file=.env.local scripts/azure-voice-samples.mjs --out ./tmp/voices --set uk-male
 *   node --env-file=.env.local scripts/azure-voice-samples.mjs --out ./tmp/voices --set accents
 *   node --env-file=.env.local scripts/azure-voice-samples.mjs --out ./tmp/voices \
 *       --voices en-GB-ThomasNeural,en-IN-PrabhatNeural --text "Could you confirm the delivery date?"
 *
 * Reads AZURE_TTS_KEY and AZURE_TTS_REGION. Never prints the key.
 *
 * Cost: one short sentence is ~90 characters against a 500,000/month free (F0)
 * allowance. A full set is under 1,500 characters. This is effectively free.
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const key = process.env.AZURE_TTS_KEY;
const region = process.env.AZURE_TTS_REGION || "eastus";
if (!key) {
  console.error(
    "AZURE_TTS_KEY not found. Run with: node --env-file=.env.local scripts/azure-voice-samples.mjs ...",
  );
  process.exit(1);
}

const arg = (name, fallback = null) => {
  const i = process.argv.indexOf(name);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};

/**
 * Sentences are chosen so the accent has somewhere to show itself:
 * a non-rhotic R (order, quarter), the broad A (ask, after), and a medial T
 * (bottle, water) all appear. A neutral sentence makes every voice sound alike.
 */
const DEFAULT_TEXT =
  "Could you please confirm the delivery date for the third order? We really value your work.";

const SETS = {
  "uk-male": [
    "en-GB-RyanNeural",
    "en-GB-ThomasNeural",
    "en-GB-OliverNeural",
    "en-GB-AlfieNeural",
    "en-GB-ElliotNeural",
    "en-GB-EthanNeural",
    "en-GB-NoahNeural",
  ],
  "uk-female": ["en-GB-SoniaNeural", "en-GB-LibbyNeural", "en-GB-AbbiNeural", "en-GB-BellaNeural"],
  india: [
    "en-IN-NeerjaNeural",
    "en-IN-PrabhatNeural",
    "en-IN-AaravNeural",
    "en-IN-AashiNeural",
    "en-IN-KunalNeural",
    "en-IN-AnanyaNeural",
  ],
  // The full accent spread, including the two nearest stand-ins for a
  // Chinese-accented English voice, which Azure does not ship.
  accents: [
    "en-US-AvaNeural",
    "en-GB-ThomasNeural",
    "en-IN-PrabhatNeural",
    "en-HK-SamNeural",
    "en-HK-YanNeural",
    "en-SG-WayneNeural",
    "en-SG-LunaNeural",
    "en-AU-WilliamNeural",
    "en-IE-ConnorNeural",
  ],
};

const out = arg("--out", "./tmp/voice-samples");
const text = arg("--text", DEFAULT_TEXT);
const setName = arg("--set");
const explicit = arg("--voices");

let voices;
if (explicit)
  voices = explicit
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
else if (setName && SETS[setName]) voices = SETS[setName];
else {
  console.error(`Pass --set <${Object.keys(SETS).join("|")}> or --voices a,b,c`);
  process.exit(1);
}

await mkdir(out, { recursive: true });

const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const url = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;
let i = 0;
let chars = 0;

for (const voice of voices) {
  // A multilingual voice from a non-English locale must be told to speak
  // English; its own locale would make it read the text as that language.
  const own = voice.split("-").slice(0, 2).join("-");
  const lang = own.startsWith("en-") ? own : "en-US";

  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${lang}">
  <voice name="${voice}">
    <prosody rate="0.9">${esc(text)}</prosody>
  </voice>
</speak>`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
      // Azure can reject a request with no User-Agent. Keep this header.
      "User-Agent": "NYEnglishTeacherTTS/1.0",
    },
    body: ssml,
  });

  if (!res.ok) {
    console.log(`FAIL ${res.status}  ${voice}`);
    console.log(`     ${(await res.text()).slice(0, 160)}`);
    continue;
  }

  const buf = Buffer.from(await res.arrayBuffer());
  const name = `${String(i).padStart(2, "0")}-${voice.replace(/Neural$/, "")}.mp3`;
  await writeFile(path.join(out, name), buf);
  chars += text.length;
  i += 1;
  console.log(`OK   200  ${voice.padEnd(34)} ${(buf.length / 1024).toFixed(0)} KB  -> ${name}`);
}

console.log(`\n${i} files in ${path.resolve(out)}`);
console.log(`characters billed: ${chars} of the 500,000/month F0 allowance`);
