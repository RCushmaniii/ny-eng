#!/usr/bin/env node
/**
 * Bing Batch Submission Scheduler
 *
 * Bing Webmaster Tools API has a daily quota of ~100 URLs.
 * This script splits all sitemap URLs into daily batches, prioritizing
 * unindexed/important pages first.
 *
 * Usage:
 *   node scripts/seo/bing-batch-schedule.mjs --day 1    # Submit batch 1 (today)
 *   node scripts/seo/bing-batch-schedule.mjs --day 2    # Submit batch 2 (tomorrow)
 *   node scripts/seo/bing-batch-schedule.mjs --plan      # Show the full schedule without submitting
 */

import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "..", "..");

dotenv.config({ path: join(PROJECT_ROOT, ".env") });

const SITE_URL = "https://www.nyenglishteacher.com";
const DEFAULT_SITEMAP_URL = `${SITE_URL}/sitemap-index.xml`;
const BING_API_KEY = process.env.BING_WEBMASTER_TOOLS_API_KEY;
const BATCH_SIZE = 90; // Stay under 100 quota with some margin

if (!BING_API_KEY) {
  console.error("❌ Missing BING_WEBMASTER_TOOLS_API_KEY in .env");
  process.exit(1);
}

const args = process.argv.slice(2);
const dayArg = args.includes("--day") ? parseInt(args[args.indexOf("--day") + 1]) : null;
const planOnly = args.includes("--plan");

// Priority ordering: unindexed core pages first, then blog posts, then everything else
const PRIORITY_PREFIXES = [
  // Tier 1: Core pages (unindexed ones from GSC check)
  "/es/contacto", "/en/resources", "/es/recursos", "/en/faq", "/es/faq",
  // Tier 2: Unindexed blog posts (EN)
  "/en/blog/",
  // Tier 3: Unindexed blog posts (ES)
  "/es/blog/",
  // Tier 4: Service pages
  "/en/services/", "/es/servicios/",
  // Tier 5: Resource pages
  "/en/resources/", "/es/recursos/",
  // Tier 6: Everything else
];

function priorityScore(url) {
  const path = url.replace(SITE_URL, "");
  for (let i = 0; i < PRIORITY_PREFIXES.length; i++) {
    if (path.startsWith(PRIORITY_PREFIXES[i])) return i;
  }
  return PRIORITY_PREFIXES.length;
}

function extractLocValues(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/gsi)].map((m) => m[1].trim());
}

async function fetchXml(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url} (HTTP ${res.status})`);
  return res.text();
}

async function getSitemapUrls() {
  const xml = await fetchXml(DEFAULT_SITEMAP_URL);
  const locs = extractLocValues(xml);
  if (xml.includes("<sitemapindex")) {
    const nested = await Promise.all(locs.map(fetchXml));
    return [...new Set(nested.flatMap(extractLocValues))];
  }
  return [...new Set(locs)];
}

async function submitBatch(urls) {
  const BING_URL = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=${BING_API_KEY}`;
  const payload = { siteUrl: SITE_URL, urlList: urls };

  const res = await fetch(BING_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    console.log(`✓ Submitted ${urls.length} URLs to Bing (HTTP ${res.status})`);
    return true;
  } else {
    const errText = await res.text().catch(() => "");
    console.error(`✗ Bing returned HTTP ${res.status}: ${errText}`);
    return false;
  }
}

async function main() {
  const allUrls = await getSitemapUrls();

  // Sort by priority
  allUrls.sort((a, b) => priorityScore(a) - priorityScore(b));

  // Split into daily batches
  const batches = [];
  for (let i = 0; i < allUrls.length; i += BATCH_SIZE) {
    batches.push(allUrls.slice(i, i + BATCH_SIZE));
  }

  if (planOnly || !dayArg) {
    console.log(`\nBing Batch Submission Schedule`);
    console.log(`Total URLs: ${allUrls.length}`);
    console.log(`Batch size: ${BATCH_SIZE}`);
    console.log(`Days needed: ${batches.length}\n`);

    batches.forEach((batch, i) => {
      console.log(`── Day ${i + 1} (${batch.length} URLs) ──`);
      batch.forEach((url) => console.log(`  ${url.replace(SITE_URL, "")}`));
      console.log("");
    });

    if (!dayArg) {
      console.log(`\nRun with --day N to submit a specific batch.`);
      console.log(`Example: node scripts/seo/bing-batch-schedule.mjs --day 1`);
    }
    return;
  }

  if (dayArg < 1 || dayArg > batches.length) {
    console.error(`Invalid day: ${dayArg}. Valid range: 1-${batches.length}`);
    process.exit(1);
  }

  const batch = batches[dayArg - 1];
  console.log(`\nBing Batch Submission — Day ${dayArg}/${batches.length}`);
  console.log(`Submitting ${batch.length} URLs:\n`);
  batch.forEach((url) => console.log(`  ${url.replace(SITE_URL, "")}`));
  console.log("");

  await submitBatch(batch);
}

main();