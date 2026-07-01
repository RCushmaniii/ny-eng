/**
 * GSC "striking distance" report.
 *
 * Finds queries ranking in positions ~8-20 with real impression demand —
 * the "almost page one" keywords where a focused piece of content can push
 * you onto page one. Read-only.
 *
 *   node scripts/seo/gsc-striking-distance.mjs                 # last 90 days
 *   node scripts/seo/gsc-striking-distance.mjs --days 180
 *   node scripts/seo/gsc-striking-distance.mjs --min-impr 30 --lo 5 --hi 20
 */
import { getSearchConsole, SITE_PROPERTY } from "./gsc-client.mjs";

const args = process.argv.slice(2);
const getArg = (flag, def) => (args.includes(flag) ? args[args.indexOf(flag) + 1] : def);

const days = parseInt(getArg("--days", "90"), 10);
const minImpr = parseInt(getArg("--min-impr", "20"), 10);
const lo = parseFloat(getArg("--lo", "8"));
const hi = parseFloat(getArg("--hi", "20.5"));

const end = new Date();
const start = new Date();
start.setDate(end.getDate() - days);
const fmt = (d) => d.toISOString().slice(0, 10);

function classifyLang(q) {
  // crude: Spanish-diacritic or common ES tokens → es, else en
  if (/[áéíóúñ¿¡]/i.test(q)) return "es";
  if (/\b(de|para|cómo|como|en|el|la|los|las|inglés|ingles|gratis|curso)\b/i.test(q)) return "es";
  return "en";
}

const sc = await getSearchConsole();
const res = await sc.searchanalytics.query({
  siteUrl: SITE_PROPERTY,
  requestBody: {
    startDate: fmt(start),
    endDate: fmt(end),
    dimensions: ["query"],
    rowLimit: 5000,
    dataState: "final",
  },
});

const rows = res.data.rows || [];
const striking = rows
  .map((r) => ({
    query: r.keys[0],
    clicks: r.clicks,
    impr: r.impressions,
    ctr: r.ctr,
    pos: r.position,
    lang: classifyLang(r.keys[0]),
  }))
  .filter((r) => r.pos >= lo && r.pos <= hi && r.impr >= minImpr)
  // opportunity score: impressions weighted by how close to page one (lower pos = closer)
  .map((r) => ({ ...r, score: Math.round(r.impr * (21 - r.pos)) }))
  .sort((a, b) => b.score - a.score);

console.log(`\nGSC Striking-Distance Report  |  ${fmt(start)} → ${fmt(end)} (${days}d)`);
console.log(
  `Filter: position ${lo}-${hi}, impressions ≥ ${minImpr}  |  ${striking.length} queries\n`,
);
console.log("score  impr  clicks  pos   lang  query");
console.log("-----  ----  ------  ----  ----  --------------------------------");
for (const r of striking.slice(0, 40)) {
  console.log(
    `${String(r.score).padStart(5)}  ${String(r.impr).padStart(4)}  ${String(r.clicks).padStart(6)}  ${r.pos.toFixed(1).padStart(4)}  ${r.lang.padEnd(4)}  ${r.query}`,
  );
}

const byLang = { en: 0, es: 0 };
striking.forEach((r) => (byLang[r.lang] += r.impr));
console.log(`\nImpression demand in striking distance — EN: ${byLang.en} | ES: ${byLang.es}`);
console.log(`Total queries analyzed: ${rows.length}`);
