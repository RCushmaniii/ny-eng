#!/usr/bin/env node
/**
 * Check index status of URLs via Google Search Console URL Inspection API.
 *
 * Usage:
 *   node scripts/seo/gsc-index-status.mjs                         # Check all blog URLs
 *   node scripts/seo/gsc-index-status.mjs --url https://...       # Check single URL
 *   node scripts/seo/gsc-index-status.mjs --pages                 # Check core pages only
 */

import { getSearchConsole, detectSiteProperty, SITE_URL } from './gsc-client.mjs';
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..', '..');

const args = process.argv.slice(2);
const singleUrl = args.includes('--url') ? args[args.indexOf('--url') + 1] : null;
const corePages = args.includes('--pages');

const CORE_PAGES = [
  '/', '/en/', '/es/',
  '/en/services/', '/es/servicios/',
  '/en/about/', '/es/about/',
  '/en/contact/', '/es/contacto/',
  '/en/testimonials/', '/es/testimonios/',
  '/en/blog/', '/es/blog/',
  '/en/book/', '/es/reservar/',
  '/en/quiz/it-services/', '/es/quiz/it-services/',
  '/en/resources/', '/es/recursos/',
  '/en/faqs/', '/es/faqs/',
];

async function inspectUrl(searchconsole, siteUrl, inspectionUrl) {
  try {
    const res = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl,
        siteUrl,
      },
    });

    const result = res.data.inspectionResult;
    const indexStatus = result?.indexStatusResult;
    const verdict = indexStatus?.verdict || 'UNKNOWN';
    const coverageState = indexStatus?.coverageState || 'unknown';
    const lastCrawl = indexStatus?.lastCrawlTime || 'never';
    const robotsTxt = indexStatus?.robotsTxtState || 'unknown';
    const crawledAs = indexStatus?.crawledAs || 'unknown';

    const icon = verdict === 'PASS' ? '✓' :
                 verdict === 'NEUTRAL' ? '~' : '✗';

    return {
      url: inspectionUrl,
      icon,
      verdict,
      coverageState,
      lastCrawl: lastCrawl !== 'never' ? new Date(lastCrawl).toLocaleDateString() : 'never',
      robotsTxt,
      crawledAs,
    };
  } catch (err) {
    return {
      url: inspectionUrl,
      icon: '?',
      verdict: 'ERROR',
      coverageState: err.response?.data?.error?.message || err.message,
      lastCrawl: '-',
      robotsTxt: '-',
      crawledAs: '-',
    };
  }
}

async function getAllBlogUrls() {
  const urls = [];
  for (const lang of ['en', 'es']) {
    const dir = join(PROJECT_ROOT, 'src', 'content', 'blog', lang);
    try {
      const files = readdirSync(dir).filter(f => f.endsWith('.md'));
      for (const file of files) {
        const slug = file.replace('.md', '');
        urls.push(`${SITE_URL}/${lang}/blog/${slug}/`);
      }
    } catch {
      // skip
    }
  }
  return urls;
}

async function main() {
  const siteUrl = await detectSiteProperty();
  if (!siteUrl) {
    console.error('Cannot access GSC. Add service account as user first.');
    process.exit(1);
  }

  const searchconsole = await getSearchConsole();
  let urls = [];

  if (singleUrl) {
    urls = [singleUrl];
  } else if (corePages) {
    urls = CORE_PAGES.map(p => `${SITE_URL}${p}`);
  } else {
    urls = await getAllBlogUrls();
  }

  console.log(`\nChecking index status for ${urls.length} URLs...\n`);
  console.log('─'.repeat(100));

  let indexed = 0, notIndexed = 0, errors = 0;

  for (const url of urls) {
    const result = await inspectUrl(searchconsole, siteUrl, url);

    if (result.verdict === 'PASS') indexed++;
    else if (result.verdict === 'ERROR') errors++;
    else notIndexed++;

    const shortUrl = url.replace(SITE_URL, '');
    console.log(
      `  ${result.icon} ${shortUrl.padEnd(55)} ${result.verdict.padEnd(12)} ${result.coverageState.padEnd(25)} crawled: ${result.lastCrawl}`
    );

    // Rate limit: URL Inspection API has strict quotas
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('─'.repeat(100));
  console.log(`\nSummary: ${indexed} indexed, ${notIndexed} not indexed, ${errors} errors`);
}

main();
