/**
 * Azure Neural TTS — live voice catalog.
 *
 * Asks the Speech resource what voices it will actually serve, rather than
 * trusting a docs page or a model's memory. Microsoft adds and renames voices
 * continuously, and the answer is scoped to YOUR region and tier, so this is the
 * only authoritative source.
 *
 * Run from the repo root:
 *   node --env-file=.env.local scripts/azure-list-voices.mjs
 *   node --env-file=.env.local scripts/azure-list-voices.mjs en-GB
 *   node --env-file=.env.local scripts/azure-list-voices.mjs en-        # prefix match
 *   node --env-file=.env.local scripts/azure-list-voices.mjs --secondary zh-CN
 *
 * Reads AZURE_TTS_KEY and AZURE_TTS_REGION. It never prints, hashes, or
 * truncates the key — only whether one was found.
 *
 * `--secondary <locale-prefix>` lists voices from that locale which advertise
 * an English secondary locale (Microsoft's "multilingual" voices). See
 * docs/AZURE-TTS-VOICES.md for why those are usually the wrong answer when you
 * want an accent.
 */

const key = process.env.AZURE_TTS_KEY;
const region = process.env.AZURE_TTS_REGION || "eastus";

if (!key) {
  console.error(
    "AZURE_TTS_KEY not found. Run with: node --env-file=.env.local scripts/azure-list-voices.mjs",
  );
  process.exit(1);
}

const args = process.argv.slice(2);
const secondaryIdx = args.indexOf("--secondary");
const secondaryOf = secondaryIdx !== -1 ? args[secondaryIdx + 1] : null;
const filter = args.filter((a) => a !== "--secondary" && a !== secondaryOf)[0] || "en-";

const url = `https://${region}.tts.speech.microsoft.com/cognitiveservices/voices/list`;
const res = await fetch(url, {
  headers: { "Ocp-Apim-Subscription-Key": key, "User-Agent": "NYEnglishTeacherTTS/1.0" },
});

if (!res.ok) {
  console.error(`voices/list returned HTTP ${res.status}.`);
  console.error(
    res.status === 401 || res.status === 403
      ? `Almost always a region mismatch: the key belongs to a different region than AZURE_TTS_REGION (${region}).`
      : (await res.text()).slice(0, 300),
  );
  process.exit(1);
}

const voices = await res.json();
console.log(`region ${region} · ${voices.length} voices total\n`);

if (secondaryOf) {
  const hits = voices.filter(
    (v) =>
      v.Locale.startsWith(secondaryOf) &&
      (v.SecondaryLocaleList || []).some((l) => l.startsWith("en-")),
  );
  console.log(`${secondaryOf}* voices advertising an en-* secondary locale: ${hits.length}`);
  for (const v of hits) {
    console.log(
      `  ${v.ShortName.padEnd(40)} ${v.Gender.padEnd(7)} ${v.SecondaryLocaleList.length} locales`,
    );
  }
  process.exit(0);
}

const matched = voices.filter((v) => v.Locale.startsWith(filter));
if (!matched.length) {
  console.log(`No voices matched "${filter}".`);
  const locales = [...new Set(voices.map((v) => v.Locale))].sort();
  console.log(`Available locales: ${locales.join(", ")}`);
  process.exit(0);
}

const byLocale = new Map();
for (const v of matched) {
  if (!byLocale.has(v.Locale)) byLocale.set(v.Locale, []);
  byLocale.get(v.Locale).push(v);
}

console.log(`locales matching "${filter}": ${byLocale.size}`);
for (const [locale, list] of [...byLocale.entries()].sort()) {
  console.log(`\n${locale}  (${list[0].LocaleName})  — ${list.length} voices`);
  for (const v of list.sort((a, b) => a.ShortName.localeCompare(b.ShortName))) {
    const multi = v.SecondaryLocaleList?.length ? "  MULTILINGUAL" : "";
    const styles = v.StyleList?.length ? `  styles:[${v.StyleList.join(",")}]` : "";
    console.log(`   ${v.ShortName.padEnd(42)} ${v.Gender.padEnd(7)}${multi}${styles}`);
  }
}
