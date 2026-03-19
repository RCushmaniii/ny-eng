#!/usr/bin/env node
/**
 * Submit URLs via IndexNow protocol.
 * Instantly notifies Bing, Yandex, DuckDuckGo, and other participating engines.
 *
 * Usage:
 *   node scripts/seo/indexnow-submit.mjs                             # Submit all sitemap URLs
 *   node scripts/seo/indexnow-submit.mjs --url https://...           # Submit single URL
 *   node scripts/seo/indexnow-submit.mjs --sitemap https://...xml    # Submit URLs from a specific sitemap
 */

if (!process.env.INDEXNOW_KEY) {
  console.error('✗ Missing required environment variable: INDEXNOW_KEY');
  process.exit(1);
}

const SITE_URL = 'https://www.nyenglishteacher.com';
const DEFAULT_SITEMAP_URL = `${SITE_URL}/sitemap-index.xml`;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const singleUrl = args.includes('--url') ? args[args.indexOf('--url') + 1] : null;
const sitemapUrl = args.includes('--sitemap')
  ? args[args.indexOf('--sitemap') + 1]
  : DEFAULT_SITEMAP_URL;

function normalizeUrl(url) {
  const parsed = new URL(url);
  parsed.hash = '';
  parsed.search = '';
  parsed.pathname = parsed.pathname.replace(/\/$/, '') || '/';
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

  if (xml.includes('<sitemapindex')) {
    const nestedXmlList = await Promise.all(locs.map((loc) => fetchXml(loc)));
    return [
      ...new Set(
        nestedXmlList
          .flatMap((nestedXml) => extractLocValues(nestedXml))
          .map(normalizeUrl),
      ),
    ];
  }

  return [...new Set(locs.map(normalizeUrl))];
}

async function submitToIndexNow(urls) {
  console.log(`Submitting ${urls.length} URLs via IndexNow...\n`);

  const payload = {
    host: 'www.nyenglishteacher.com',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    // IndexNow returns 200 (OK), 202 (Accepted), or 207 (partial)
    if (response.ok || response.status === 202) {
      console.log(`✓ IndexNow accepted ${urls.length} URLs (HTTP ${response.status})`);
      console.log('\nEngines notified: Bing, Yandex, DuckDuckGo, Seznam, Naver');
    } else {
      const body = await response.text().catch(() => '');
      console.log(`✗ IndexNow returned HTTP ${response.status}: ${body}`);
    }
  } catch (err) {
    console.error('✗ IndexNow request failed:', err.message);
  }

  // Also submit directly to Bing's IndexNow endpoint for redundancy
  try {
    const bingResponse = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (bingResponse.ok || bingResponse.status === 202) {
      console.log(`✓ Bing IndexNow accepted (HTTP ${bingResponse.status})`);
    } else {
      console.log(`~ Bing IndexNow: HTTP ${bingResponse.status}`);
    }
  } catch (err) {
    console.log(`~ Bing direct submission: ${err.message}`);
  }
}

async function main() {
  let urls;

  if (singleUrl) {
    urls = [normalizeUrl(singleUrl)];
  } else {
    urls = await getSitemapUrls(sitemapUrl);
  }

  // Deduplicate
  urls = [...new Set(urls)];

  console.log(`IndexNow URL Submission\n`);
  if (!singleUrl) {
    console.log(`Sitemap source: ${sitemapUrl}`);
  }
  console.log(`URLs to submit: ${urls.length}`);
  urls.forEach(u => console.log(`  ${u.replace(SITE_URL, '')}`));
  console.log('');

  await submitToIndexNow(urls);
}

main();
