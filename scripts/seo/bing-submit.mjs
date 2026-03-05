#!/usr/bin/env node
/**
 * Submit URLs to Bing via Webmaster Tools API.
 *
 * Usage:
 *   node scripts/seo/bing-submit.mjs                    # Submit all blog URLs
 *   node scripts/seo/bing-submit.mjs --url https://...  # Submit single URL
 *   node scripts/seo/bing-submit.mjs --all              # Submit all pages (core + blog)
 */

import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..', '..');

const SITE_URL = 'https://www.nyenglishteacher.com';
const BING_API_KEY = '756a56664bea4d73b3486fd0d44b5fc8';
const BING_SUBMIT_URL = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=${BING_API_KEY}`;

const args = process.argv.slice(2);
const singleUrl = args.includes('--url') ? args[args.indexOf('--url') + 1] : null;
const submitAll = args.includes('--all');

const CORE_PAGES = [
  '/en/', '/es/',
  '/en/services/', '/es/servicios/',
  '/en/about/', '/es/about/',
  '/en/contact/', '/es/contacto/',
  '/en/testimonials/', '/es/testimonios/',
  '/en/blog/', '/es/blog/',
  '/en/book/', '/es/reservar/',
  '/en/quiz/it-services/', '/es/quiz/it-services/',
  '/en/resources/', '/es/recursos/',
  '/en/faq/', '/es/faq/',
];

function getBlogUrls() {
  const urls = [];
  for (const lang of ['en', 'es']) {
    const dir = join(PROJECT_ROOT, 'src', 'content', 'blog', lang);
    try {
      const files = readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
      for (const file of files) {
        const slug = file.replace(/\.mdx?$/, '');
        urls.push(`${SITE_URL}/${lang}/blog/${slug}/`);
      }
    } catch {
      // skip
    }
  }
  return urls;
}

async function submitBatch(urls) {
  // Bing batch API accepts max 500 URLs per request
  const batchSize = 500;
  let totalSuccess = 0;
  let totalFailed = 0;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const payload = {
      siteUrl: SITE_URL,
      urlList: batch,
    };

    try {
      const response = await fetch(BING_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json().catch(() => null);
        console.log(`✓ Batch ${Math.floor(i / batchSize) + 1}: ${batch.length} URLs submitted (HTTP ${response.status})`);
        totalSuccess += batch.length;
      } else {
        const errText = await response.text().catch(() => '');
        console.log(`✗ Batch ${Math.floor(i / batchSize) + 1}: HTTP ${response.status} — ${errText}`);
        totalFailed += batch.length;
      }
    } catch (err) {
      console.error(`✗ Batch ${Math.floor(i / batchSize) + 1}: ${err.message}`);
      totalFailed += batch.length;
    }
  }

  return { totalSuccess, totalFailed };
}

async function main() {
  let urls;

  if (singleUrl) {
    urls = [singleUrl];
  } else if (submitAll) {
    urls = [...CORE_PAGES.map(p => `${SITE_URL}${p}`), ...getBlogUrls()];
  } else {
    urls = getBlogUrls();
  }

  urls = [...new Set(urls)];

  console.log(`Bing Webmaster Tools URL Submission\n`);
  console.log(`URLs to submit: ${urls.length}`);
  urls.forEach(u => console.log(`  ${u.replace(SITE_URL, '')}`));
  console.log('');

  const { totalSuccess, totalFailed } = await submitBatch(urls);
  console.log(`\nDone: ${totalSuccess} submitted, ${totalFailed} failed`);
}

main();
