#!/usr/bin/env node

import { existsSync, readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "..", "..");
const SUBMISSIONS_DIR = join(PROJECT_ROOT, "scripts", "seo", ".submissions");
const BING_LOG_PATH = join(SUBMISSIONS_DIR, "bing-webmaster.jsonl");
const DEFAULT_SITEMAP_URL = "https://www.nyenglishteacher.com/sitemap-index.xml";

const args = process.argv.slice(2);
const showSubmitted = args.includes("--submitted");
const showMissing = args.includes("--missing") || !showSubmitted;
const limitArg = args.includes("--limit")
  ? Number.parseInt(args[args.indexOf("--limit") + 1], 10)
  : 20;
const limit = Number.isFinite(limitArg) && limitArg > 0 ? limitArg : 20;
const sitemapUrl = args.includes("--sitemap")
  ? args[args.indexOf("--sitemap") + 1]
  : DEFAULT_SITEMAP_URL;

function normalizeUrl(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  parsed.search = "";
  parsed.pathname = parsed.pathname.replace(/\/$/, "") || "/";
  return parsed.toString();
}

function extractLocValues(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/gsi)].map((match) => match[1].trim());
}

async function fetchXml(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url} (HTTP ${response.status})`);
  }
  return response.text();
}

async function getSitemapUrls(url) {
  const xml = await fetchXml(url);
  const locs = extractLocValues(xml);

  if (xml.includes("<sitemapindex")) {
    const nestedXmlList = await Promise.all(locs.map((loc) => fetchXml(loc)));
    return [...new Set(nestedXmlList.flatMap((nestedXml) => extractLocValues(nestedXml)).map(normalizeUrl))];
  }

  return [...new Set(locs.map(normalizeUrl))];
}

function getLogEntries() {
  if (!existsSync(BING_LOG_PATH)) {
    return [];
  }

  return readFileSync(BING_LOG_PATH, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

function getSubmittedUrls(entries) {
  return new Map(
    entries
      .filter((entry) => entry.ok && Array.isArray(entry.urls))
      .flatMap((entry) =>
        entry.urls.map((url) => [
          normalizeUrl(url),
          {
            timestamp: entry.timestamp,
            status: entry.status,
          },
        ]),
      ),
  );
}

async function main() {
  const [entries, sitemapUrls] = await Promise.all([
    Promise.resolve(getLogEntries()),
    getSitemapUrls(sitemapUrl),
  ]);

  const submittedUrls = getSubmittedUrls(entries);
  const missingUrls = sitemapUrls.filter((url) => !submittedUrls.has(url));

  console.log("Bing Submission Report\n");
  console.log(`Sitemap URL: ${sitemapUrl}`);
  console.log(`URLs in sitemap: ${sitemapUrls.length}`);
  console.log(`URLs logged as submitted: ${submittedUrls.size}`);
  console.log(`URLs still missing submission: ${missingUrls.length}`);

  if (showMissing) {
    console.log("\nMissing URLs:\n");
    missingUrls.slice(0, limit).forEach((url) => console.log(url));
    if (missingUrls.length > limit) {
      console.log(`\n...and ${missingUrls.length - limit} more`);
    }
  }

  if (showSubmitted) {
    console.log("\nSubmitted URLs:\n");
    [...submittedUrls.entries()]
      .sort((a, b) => String(b[1].timestamp).localeCompare(String(a[1].timestamp)))
      .slice(0, limit)
      .forEach(([url, meta]) => console.log(`${meta.timestamp}  ${url}`));
  }
}

main().catch((error) => {
  console.error(`❌ ${error.message}`);
  process.exit(1);
});
