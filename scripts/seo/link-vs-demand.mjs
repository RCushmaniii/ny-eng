/**
 * Cross-references the internal link audit against live GSC demand.
 *
 * The pages worth fixing are the ones Google already shows to people but that
 * the site itself barely links to. Impressions prove demand; a low body-link
 * count is a fixable on-site cause.
 *
 * Usage: node scripts/seo/link-vs-demand.mjs [--days 90]
 */
import fs from "node:fs";
import path from "node:path";
import { getSearchConsole, detectSiteProperty } from "./gsc-client.mjs";

const DIST = "dist";
const days = process.argv.includes("--days")
  ? Number(process.argv[process.argv.indexOf("--days") + 1])
  : 90;

// Content pages only — skip funnel steps, utility pages, and paginated indexes.
const SKIP = [
  /^\/dev\//,
  /^\/(en|es)\/404\//,
  /^\/(en|es)\/(quiz|cuestionario)\//,
  /^\/(en|es)\/(blog|chat|chat-test)\/\d+\//,
  /^\/(en|es)\/meme-portfolio\//,
  /^\/(en|es)\/thank-you\//,
  /^\/\/$/,
];

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

const files = walk(DIST);
const toRoute = (f) => "/" + path.relative(DIST, path.dirname(f)).split(path.sep).join("/") + "/";
const routes = new Set(files.map(toRoute));

const stripChrome = (html) =>
  html
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "");

const inbound = new Map();
for (const r of routes) inbound.set(r, new Set());

for (const f of files) {
  const src = toRoute(f);
  const body = stripChrome(fs.readFileSync(f, "utf8"));
  for (const m of body.matchAll(/href="(\/[^"#?]*?)"/g)) {
    let t = m[1];
    if (!t.endsWith("/")) t += "/";
    if (routes.has(t) && t !== src) inbound.get(t).add(src);
  }
}

// --- GSC demand ---
const searchconsole = await getSearchConsole();
const siteUrl = await detectSiteProperty();
const end = new Date();
const start = new Date(end.getTime() - days * 86400000);
const fmt = (d) => d.toISOString().slice(0, 10);

const res = await searchconsole.searchanalytics.query({
  siteUrl,
  requestBody: {
    startDate: fmt(start),
    endDate: fmt(end),
    dimensions: ["page"],
    rowLimit: 1000,
  },
});

const SITE = "https://www.nyenglishteacher.com";
const demand = new Map();
for (const r of res.data.rows || []) {
  const u = r.keys[0];
  if (!u.startsWith(SITE)) continue;
  const route = u.slice(SITE.length) || "/";
  demand.set(route, { impr: r.impressions, clicks: r.clicks, pos: r.position });
}

const rows = [];
for (const [route, d] of demand) {
  if (!routes.has(route)) continue;
  if (SKIP.some((re) => re.test(route))) continue;
  const links = inbound.get(route).size;
  rows.push({ route, links, ...d });
}

// Opportunity = real demand, few internal links, not already winning.
rows.sort((a, b) => a.links - b.links || b.impr - a.impr);

console.log(`\nInternal links vs. search demand — last ${days} days`);
console.log("Pages Google already shows that the site barely links to.\n");
console.log("links  impr  clicks    pos   page");
console.log("-----  ----  ------  -----   ----");
for (const r of rows.filter((r) => r.links <= 2 && r.impr >= 5)) {
  console.log(
    `${String(r.links).padStart(5)}  ${String(r.impr).padStart(4)}  ${String(r.clicks).padStart(6)}  ${r.pos.toFixed(1).padStart(5)}   ${r.route}`,
  );
}

const tot = rows.filter((r) => r.links <= 2 && r.impr >= 5);
console.log(
  `\n${tot.length} under-linked pages carrying ${tot.reduce((s, r) => s + r.impr, 0)} impressions and ${tot.reduce((s, r) => s + r.clicks, 0)} clicks.`,
);
