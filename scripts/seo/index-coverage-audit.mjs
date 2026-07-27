/**
 * Index-coverage audit.
 *
 * Compares built pages against what the sitemap actually advertises, and checks
 * each built page for the signals that decide whether Google can index it at all:
 * noindex, canonical, and hreflang.
 *
 * A page missing from the sitemap is not necessarily a bug — funnel steps and
 * utility pages should be excluded. The point is to see the gap explicitly
 * rather than assume it is intentional.
 *
 * Usage: node scripts/seo/index-coverage-audit.mjs
 */
import fs from "node:fs";
import path from "node:path";

const DIST = "dist";
const SITE = "https://www.nyenglishteacher.com";

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

// --- what the sitemap advertises ---
const sitemapUrls = new Set();
for (const f of fs.readdirSync(DIST)) {
  if (!/^sitemap.*\.xml$/.test(f)) continue;
  const xml = fs.readFileSync(path.join(DIST, f), "utf8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const u = m[1].trim();
    if (u.endsWith(".xml")) continue;
    sitemapUrls.add(u.startsWith(SITE) ? u.slice(SITE.length) || "/" : u);
  }
}

const missing = [];
const noindexed = [];
const noCanonical = [];
const noHreflang = [];

for (const f of files) {
  const route = toRoute(f);
  const html = fs.readFileSync(f, "utf8");

  const isNoindex = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html);
  const hasCanonical = /rel="canonical"/i.test(html);
  const hasHreflang = /hreflang=/i.test(html);

  if (isNoindex) noindexed.push(route);
  if (!hasCanonical && !isNoindex) noCanonical.push(route);
  if (!hasHreflang && !isNoindex) noHreflang.push(route);
  if (!sitemapUrls.has(route) && !isNoindex) missing.push(route);
}

const group = (list) => {
  const buckets = new Map();
  for (const r of list) {
    const key = r.split("/").slice(0, 4).join("/") + "/";
    buckets.set(key, (buckets.get(key) || 0) + 1);
  }
  return [...buckets.entries()].sort((a, b) => b[1] - a[1]);
};

console.log(`\nIndex-coverage audit`);
console.log(`  built pages:        ${files.length}`);
console.log(`  sitemap entries:    ${sitemapUrls.size}`);
console.log(`  explicit noindex:   ${noindexed.length}`);
console.log(`  indexable but NOT in sitemap: ${missing.length}\n`);

console.log("--- indexable pages missing from sitemap, by section ---");
for (const [k, n] of group(missing)) console.log(`  ${String(n).padStart(4)}  ${k}`);

console.log(`\n--- missing rel=canonical (${noCanonical.length}) ---`);
for (const [k, n] of group(noCanonical).slice(0, 15))
  console.log(`  ${String(n).padStart(4)}  ${k}`);

console.log(`\n--- missing hreflang (${noHreflang.length}) ---`);
for (const [k, n] of group(noHreflang).slice(0, 15))
  console.log(`  ${String(n).padStart(4)}  ${k}`);
