/**
 * Azure Neural TTS — pronunciation lab for names and brand terms.
 *
 * Azure guesses how to say a name from its spelling, and for invented words it
 * often guesses wrong. This builds a small local page that plays the same name
 * two ways side by side:
 *
 *   1. SPELLING variants — respelling the word and hoping Azure reads it right.
 *   2. IPA variants — an SSML <phoneme> tag stating the sounds outright.
 *
 * IPA is nearly always the answer for a brand name: the page keeps spelling the
 * name correctly while the audio says it correctly, and the result cannot drift
 * when Microsoft updates a voice. Once a variant wins, add it to PRONUNCIATIONS
 * in api/tts/synthesize.ts and every page speaks it correctly with no markup.
 *
 * Run from the repo root:
 *   node --env-file=.env.local scripts/azure-pronounce-lab.mjs --name CushLabs
 *
 * Options:
 *   --name       the word to test (required)
 *   --spellings  comma-separated respellings to try
 *   --ipa        comma-separated IPA transcriptions to try
 *   --sentence   carrier sentence; {name} marks where the word goes
 *   --voice      defaults to en-US-Andrew:DragonHDLatestNeural
 *   --out        defaults to ./tmpclaude-pronounce, which .gitignore already
 *                covers via "tmpclaude-*", so output stays out of the repo
 *
 * Reads AZURE_TTS_KEY and AZURE_TTS_REGION. Never prints the key.
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const key = process.env.AZURE_TTS_KEY;
const region = process.env.AZURE_TTS_REGION || "eastus";
if (!key) {
  console.error(
    "AZURE_TTS_KEY not found. Run with: node --env-file=.env.local scripts/azure-pronounce-lab.mjs --name Foo",
  );
  process.exit(1);
}

const arg = (n, d = null) => {
  const i = process.argv.indexOf(n);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : d;
};
const list = (v) =>
  v
    ? v
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean)
    : [];

const name = arg("--name");
if (!name) {
  console.error("--name is required, e.g. --name CushLabs");
  process.exit(1);
}
const spellings = list(arg("--spellings"));
const ipas = list(arg("--ipa"));
const sentence = arg("--sentence", "Welcome to {name} A I Services.");
const voice = arg("--voice", "en-US-Andrew:DragonHDLatestNeural");
const out = arg("--out", "./tmpclaude-pronounce");

const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
const ph = (ipa, word) => `<phoneme alphabet="ipa" ph="${esc(ipa)}">${esc(word)}</phoneme>`;
const carrier = (inner) => sentence.split("{name}").join(inner);

const cases = [];
for (const s of [name, ...spellings]) {
  cases.push(["Spelling — alone", s, s === name ? "as written today" : "respelling", `${esc(s)}.`]);
}
for (const s of [name, ...spellings]) {
  cases.push(["Spelling — in a sentence", s, "in context", carrier(esc(s))]);
}
for (const i of ipas) {
  cases.push(["IPA — alone", i, "sounds stated outright", `${ph(i, name)}.`]);
}
for (const i of ipas) {
  cases.push(["IPA — in a sentence", i, "in context", carrier(ph(i, name))]);
}

await mkdir(out, { recursive: true });
const url = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;
const manifest = [];
let chars = 0;

for (let i = 0; i < cases.length; i++) {
  const [group, label, note, inner] = cases[i];
  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
  <voice name="${voice}"><prosody rate="1.0">${inner}</prosody></voice>
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
    console.log(`FAIL ${res.status}  ${label}  ${(await res.text()).slice(0, 140)}`);
    continue;
  }
  const file = `${String(i).padStart(2, "0")}.mp3`;
  await writeFile(path.join(out, file), Buffer.from(await res.arrayBuffer()));
  manifest.push({ file, group, label, note, inner });
  chars += inner.length;
  console.log(`OK   ${group.padEnd(26)} ${label}`);
  await new Promise((r) => setTimeout(r, 900));
}

const h = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const groups = [...new Set(manifest.map((m) => m.group))];
const rows = (g) =>
  manifest
    .filter((m) => m.group === g)
    .map(
      (m) => `      <div class="row">
        <button class="play" data-src="${m.file}" aria-label="Play ${h(m.label)}">&#9654;</button>
        <div class="meta"><div class="label">${h(m.label)}</div>
        <div class="note">${h(m.note)}</div><code>${h(m.inner)}</code></div>
      </div>`,
    )
    .join("\n");

const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${h(name)} pronunciation lab</title>
<style>
 :root{color-scheme:light}
 body{margin:0;background:#f8fafc;color:#0f172a;font:16px/1.5 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
 .wrap{max-width:56rem;margin:0 auto;padding:2.5rem 1.25rem 4rem}
 h1{font-size:1.75rem;margin:0 0 .35rem}
 .sub{color:#475569;margin:0 0 2rem}
 .sub code{background:#f1f5f9;padding:.1rem .35rem;border-radius:.25rem;font-size:.85em}
 h2{font-size:1rem;text-transform:uppercase;letter-spacing:.06em;color:#475569;margin:2.25rem 0 .75rem;padding-bottom:.4rem;border-bottom:1px solid #e2e8f0}
 .row{display:flex;gap:.9rem;align-items:flex-start;padding:.7rem;border:1px solid #e2e8f0;border-radius:.6rem;background:#fff;margin-bottom:.5rem}
 .play{flex:none;width:2.4rem;height:2.4rem;border:0;border-radius:50%;background:#1e293b;color:#fff;font-size:.85rem;cursor:pointer}
 .play:hover{background:#334155}
 .play.on{background:#2563eb}
 .label{font-weight:650}
 .note{color:#64748b;font-size:.875rem}
 code{display:block;margin-top:.35rem;color:#334155;background:#f1f5f9;padding:.3rem .5rem;border-radius:.3rem;font-size:.8rem;word-break:break-word}
 .tip{margin-top:2.5rem;padding:1rem 1.15rem;border-left:3px solid #2563eb;background:#eff6ff;border-radius:0 .5rem .5rem 0}
</style></head><body><div class="wrap">
<h1>${h(name)} pronunciation lab</h1>
<p class="sub">Voice <code>${h(voice)}</code> &middot; rate 1.0 &middot; ${manifest.length} clips.</p>
${groups.map((g) => `<h2>${h(g)}</h2>\n${rows(g)}`).join("\n")}
<div class="tip"><strong>Prefer an IPA winner.</strong> A spelling that happens to sound right today is Azure guessing from letters, and that guess can change when Microsoft updates a voice. IPA states the sounds, so the page keeps spelling the name correctly and the audio cannot drift. Add the winner to <code>PRONUNCIATIONS</code> in <code>api/tts/synthesize.ts</code> and every page says it correctly with no markup.</div>
</div>
<script>
 var cur=null,curBtn=null;
 document.addEventListener('click',function(e){
  var b=e.target.closest('.play'); if(!b) return;
  if(cur){cur.pause();cur.currentTime=0;if(curBtn)curBtn.classList.remove('on');}
  if(curBtn===b){cur=null;curBtn=null;return;}
  var a=new Audio(b.dataset.src); cur=a; curBtn=b; b.classList.add('on');
  a.addEventListener('ended',function(){b.classList.remove('on');cur=null;curBtn=null;});
  a.play();
 });
</script></body></html>
`;

await writeFile(path.join(out, "index.html"), page);

console.log(
  `\n${manifest.length} clips | ${chars} characters billed of the 500,000/month F0 allowance`,
);
console.log(path.resolve(out, "index.html"));
