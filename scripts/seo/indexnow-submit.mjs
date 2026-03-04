#!/usr/bin/env node
/**
 * Submit URLs via IndexNow protocol.
 * Instantly notifies Bing, Yandex, DuckDuckGo, and other participating engines.
 *
 * Usage:
 *   node scripts/seo/indexnow-submit.mjs                    # Submit all blog URLs
 *   node scripts/seo/indexnow-submit.mjs --url https://...  # Submit single URL
 *   node scripts/seo/indexnow-submit.mjs --all              # Submit all pages (core + blog)
 */

import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..', '..');

const SITE_URL = 'https://www.nyenglishteacher.com';
const INDEXNOW_KEY = '68c9a0e54a33fa63d4e4384ebe910e71';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

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
    urls = [singleUrl];
  } else if (submitAll) {
    urls = [...CORE_PAGES.map(p => `${SITE_URL}${p}`), ...getBlogUrls()];
  } else {
    urls = getBlogUrls();
  }

  // Deduplicate
  urls = [...new Set(urls)];

  console.log(`IndexNow URL Submission\n`);
  console.log(`URLs to submit: ${urls.length}`);
  urls.forEach(u => console.log(`  ${u.replace(SITE_URL, '')}`));
  console.log('');

  await submitToIndexNow(urls);
}

main();
