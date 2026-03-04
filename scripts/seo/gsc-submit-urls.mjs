#!/usr/bin/env node
/**
 * Submit URLs to Google for indexing via the Indexing API.
 *
 * Usage:
 *   node scripts/seo/gsc-submit-urls.mjs                          # Submit all blog URLs
 *   node scripts/seo/gsc-submit-urls.mjs --sitemap                # Submit sitemap
 *   node scripts/seo/gsc-submit-urls.mjs --url https://...        # Submit single URL
 *   node scripts/seo/gsc-submit-urls.mjs --url https://... --removed  # Notify URL removed
 */

import { google } from 'googleapis';
import { getAuthClient, getWebmasters, detectSiteProperty, SITE_URL } from './gsc-client.mjs';
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..', '..');

const args = process.argv.slice(2);
const singleUrl = args.includes('--url') ? args[args.indexOf('--url') + 1] : null;
const submitSitemap = args.includes('--sitemap');
const isRemoved = args.includes('--removed');

async function submitToIndexingAPI(url, type = 'URL_UPDATED') {
  const auth = await getAuthClient();
  const indexing = google.indexing({ version: 'v3', auth });

  try {
    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url,
        type, // URL_UPDATED or URL_DELETED
      },
    });
    console.log(`  ✓ ${url} → ${res.data.urlNotificationMetadata?.latestUpdate?.type || 'submitted'}`);
    return true;
  } catch (err) {
    const msg = err.response?.data?.error?.message || err.message;
    console.log(`  ✗ ${url} → ${msg}`);
    return false;
  }
}

async function submitSitemapToGSC() {
  const siteUrl = await detectSiteProperty();
  if (!siteUrl) return;

  const webmasters = await getWebmasters();
  const sitemapUrl = `${SITE_URL}/sitemap-index.xml`;

  try {
    await webmasters.sitemaps.submit({ siteUrl, feedpath: sitemapUrl });
    console.log(`✓ Sitemap submitted: ${sitemapUrl}`);
  } catch (err) {
    console.error(`✗ Sitemap submission failed: ${err.message}`);
  }

  // List current sitemaps
  try {
    const res = await webmasters.sitemaps.list({ siteUrl });
    const sitemaps = res.data.sitemap || [];
    if (sitemaps.length) {
      console.log('\nRegistered sitemaps:');
      for (const sm of sitemaps) {
        console.log(`  - ${sm.path} (${sm.lastSubmitted || 'never'}) errors: ${sm.errors || 0}`);
      }
    }
  } catch (err) {
    console.error('Could not list sitemaps:', err.message);
  }
}

async function getAllBlogUrls() {
  const urls = [];
  const blogDirs = ['en', 'es'];

  for (const lang of blogDirs) {
    const dir = join(PROJECT_ROOT, 'src', 'content', 'blog', lang);
    try {
      const files = readdirSync(dir).filter(f => f.endsWith('.md'));
      for (const file of files) {
        const slug = file.replace('.md', '');
        urls.push(`${SITE_URL}/${lang}/blog/${slug}/`);
      }
    } catch {
      // directory may not exist
    }
  }

  return urls;
}

async function main() {
  console.log('Google URL Submission Tool\n');

  if (submitSitemap) {
    await submitSitemapToGSC();
    return;
  }

  if (singleUrl) {
    const type = isRemoved ? 'URL_DELETED' : 'URL_UPDATED';
    console.log(`Submitting ${singleUrl} (${type})...`);
    await submitToIndexingAPI(singleUrl, type);
    return;
  }

  // Default: submit all blog URLs
  const urls = await getAllBlogUrls();
  console.log(`Found ${urls.length} blog URLs to submit.\n`);

  let success = 0, failed = 0;
  for (const url of urls) {
    const ok = await submitToIndexingAPI(url);
    if (ok) success++;
    else failed++;

    // Rate limiting: small delay between requests
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\nDone: ${success} submitted, ${failed} failed`);
}

main();
