/**
 * GSC 404 Audit — nyenglishteacher.com
 *
 * Google Search Console alerts on "Not found (404)" without listing the URLs
 * through the API (the Index Coverage report has no API surface). This works
 * the problem from the other side: pull every page Search Console has recorded
 * an impression for, fetch each one against production, and report anything
 * that is not a direct 200.
 *
 * A page here is a page a real searcher could have clicked. A 404 in this list
 * is lost traffic; a 404 outside it is usually a URL Google discovered once and
 * nobody misses.
 *
 * Usage:
 *   node scripts/seo/gsc-404-audit.mjs              # last 90 days, top 1000 pages
 *   node scripts/seo/gsc-404-audit.mjs --days 28
 */

import { getWebmasters, SITE_PROPERTY } from "./gsc-client.mjs";

const args = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const days = parseInt(getArg("--days", "90"), 10);
const rowLimit = parseInt(getArg("--top", "1000"), 10);
const CONCURRENCY = 8;

const iso = (d) => d.toISOString().slice(0, 10);
const end = new Date();
const start = new Date(end.getTime() - days * 86400000);

const webmasters = await getWebmasters();
const res = await webmasters.searchanalytics.query({
  siteUrl: SITE_PROPERTY,
  requestBody: {
    startDate: iso(start),
    endDate: iso(end),
    dimensions: ["page"],
    rowLimit,
  },
});

const rows = res.data.rows || [];
console.log(`Search Console pages with impressions (${iso(start)} to ${iso(end)}): ${rows.length}`);

const results = [];
const queue = rows.slice();

async function worker() {
  while (queue.length) {
    const row = queue.shift();
    const url = row.keys[0];
    let status, finalUrl;
    try {
      // GET rather than HEAD: static hosts can answer HEAD differently to a crawler
      const r = await fetch(url, { redirect: "follow" });
      status = r.status;
      finalUrl = r.url;
    } catch {
      status = "FETCH FAILED";
      finalUrl = url;
    }
    if (status !== 200 || finalUrl !== url) {
      results.push({
        url,
        status,
        finalUrl,
        clicks: row.clicks,
        impressions: row.impressions,
      });
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

if (results.length === 0) {
  console.log("\nPASS — every page Google has impressions for returns a direct 200.");
  process.exit(0);
}

const broken = results.filter((r) => r.status !== 200);
const redirected = results.filter((r) => r.status === 200);

if (broken.length) {
  console.log(`\nBROKEN — ${broken.length} ranking page(s) do not return 200:`);
  for (const r of broken.sort((a, b) => b.impressions - a.impressions)) {
    console.log(`  [${r.status}] ${r.impressions} impr, ${r.clicks} clicks — ${r.url}`);
  }
}

if (redirected.length) {
  console.log(`\nREDIRECTED — ${redirected.length} ranking page(s) resolve elsewhere:`);
  for (const r of redirected.sort((a, b) => b.impressions - a.impressions)) {
    console.log(`  ${r.impressions} impr, ${r.clicks} clicks — ${r.url}\n      -> ${r.finalUrl}`);
  }
}

process.exit(broken.length ? 1 : 0);
