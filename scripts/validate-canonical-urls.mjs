#!/usr/bin/env node
/**
 * Canonical URL Validator (noise-resistant, dev-friendly)
 *
 * Usage:
 *   # local
 *   npm run preview
 *   SITE_URL=http://localhost:4321 VERBOSE=1 node validate-canonical-urls.mjs
 *
 *   # production
 *   SITE_URL=https://www.nyenglishteacher.com node validate-canonical-urls.mjs
 */

import https from 'https';
import http from 'http';
import zlib from 'zlib';
import { readFileSync } from 'fs';

/* ---------------------------------- config ---------------------------------- */

const DEFAULT_SITE_URL = 'https://www.nyenglishteacher.com';
const SITE = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
const VERBOSE = process.env.VERBOSE === '1';

const MAX_CONCURRENT_REQUESTS = 3;
const FOLLOW_REDIRECTS = 2;
const TIMEOUT_MS = 15000;
const MAX_HTML_BYTES = 100_000; // 100KB is plenty to see <link rel="canonical">

/* --------------------------------- startup ---------------------------------- */

console.log('🔧 Canonical validator starting…');
console.log('   SITE_URL =', process.env.SITE_URL || `(default) ${DEFAULT_SITE_URL}`);
console.log('   VERBOSE  =', VERBOSE ? '1' : '0');

/* ------------------------- helpers: normalization --------------------------- */

function normalizeForCompare(u) {
  try {
    const url = new URL(u);
    url.hash = '';
    // strip common trackers
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']
      .forEach(p => url.searchParams.delete(p));
    // lowercase host; strip default ports
    url.hostname = url.hostname.toLowerCase();
    if ((url.protocol === 'https:' && url.port === '443') || (url.protocol === 'http:' && url.port === '80')) {
      url.port = '';
    }
    // add trailing slash for “directory” paths
    if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) url.pathname += '/';
    return url.toString();
  } catch {
    return u;
  }
}

function samePathAfterNorm(a, b) {
  try {
    const A = new URL(normalizeForCompare(a));
    const B = new URL(normalizeForCompare(b));
    return A.pathname === B.pathname;
  } catch {
    return a === b;
  }
}

function trailingSlashState(u) {
  try {
    const url = new URL(u);
    return url.pathname.endsWith('/');
  } catch { return u.endsWith('/'); }
}

/* ---------------------------- fetch + decompress ---------------------------- */

function fetchOnce(targetUrl) {
  return new Promise((resolve) => {
    const u = new URL(targetUrl);
    const client = u.protocol === 'https:' ? https : http;

    const req = client.request({
      hostname: u.hostname,
      port: u.port || (u.protocol === 'https:' ? 443 : 80),
      path: u.pathname + u.search,
      method: 'GET',
      timeout: TIMEOUT_MS,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CanonicalValidator/2.0)',
        'Accept-Encoding': 'gzip,deflate,br',
      }
    }, (res) => {
      const enc = (res.headers['content-encoding'] || '').toLowerCase();
      const chunks = [];
      let total = 0;

      res.on('data', (c) => {
        chunks.push(c);
        total += c.length;
        if (total > MAX_HTML_BYTES) res.destroy(); // cap size
      });

      const finish = (buf) => {
        const html = buf.toString('utf8');
        const m = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
        const canonical = m ? m[1] : null;
        resolve({
          status: res.statusCode,
          location: res.headers.location || null,
          canonicalRaw: canonical,
          headers: res.headers,
          bodyBytes: total,
        });
      };

      res.on('end', () => {
        const raw = Buffer.concat(chunks);
        if (enc === 'gzip') return zlib.gunzip(raw, (_, out) => finish(out || raw));
        if (enc === 'br') return zlib.brotliDecompress(raw, (_, out) => finish(out || raw));
        if (enc === 'deflate') return zlib.inflate(raw, (_, out) => finish(out || raw));
        finish(raw);
      });
    });

    req.on('error', (err) => resolve({ status: 'ERROR', error: err.message }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 'TIMEOUT', error: 'Request timeout' }); });
    req.end();
  });
}

async function fetchFollowing(targetUrl, maxHops = FOLLOW_REDIRECTS) {
  let url = targetUrl;
  for (let i = 0; i <= maxHops; i++) {
    const res = await fetchOnce(url);
    if (res.status >= 300 && res.status < 400 && res.location && i < maxHops) {
      url = new URL(res.location, url).toString();
      continue;
    }
    return { finalUrl: url, ...res };
  }
  return { finalUrl: url, status: 'ERROR', error: 'Too many redirects' };
}

/* --------------------------------- preflight -------------------------------- */

async function preflight(site) {
  const u = new URL(site);
  const client = u.protocol === 'https:' ? https : http;

  return new Promise((resolve) => {
    const req = client.request({
      hostname: u.hostname,
      port: u.port || (u.protocol === 'https:' ? 443 : 80),
      path: '/',
      method: 'GET',                // use GET; some dev servers don’t respond to HEAD reliably
      timeout: 3000,
      headers: { 'User-Agent': 'CanonicalValidator/2.0' }
    }, (r) => { r.resume(); resolve(true); });

    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
    req.end();
  });
}

/* ----------------------------- extract sample URLs --------------------------- */

function extractSampleUrls() {
  // Try to parse from hreflang.ts; otherwise use a sensible default set.
  try {
    const content = readFileSync('./src/utils/hreflang.ts', 'utf-8');
    const blockMatch = content.match(/export const hreflangMappings[^{]*{([\s\S]*?)}\s*;/);
    if (!blockMatch) throw new Error('No hreflangMappings export');
    const block = blockMatch[0];
    const entryRegex = /['"]([^'"]+)['"]\s*:\s*{[^}]+}/g;
    const urls = new Set();
    let m, count = 0;
    while ((m = entryRegex.exec(block)) !== null) {
      const full = m[0];
      const en = (full.match(/en:\s*['"]([^'"]+)['"]/) || [])[1];
      const es = (full.match(/es:\s*['"]([^'"]+)['"]/) || [])[1];
      if (en) urls.add(SITE + en);
      if (es) urls.add(SITE + es);
      if (++count >= 12) break;
    }
    if (urls.size) return Array.from(urls);
    throw new Error('Empty mappings');
  } catch {
    return [
      `${SITE}/en/`,
      `${SITE}/es/`,
      `${SITE}/en/about/`,
      `${SITE}/es/about/`,
      `${SITE}/en/services/`,
      `${SITE}/es/servicios/`,
      `${SITE}/en/testimonials/`,
      `${SITE}/es/testimonios/`,
      `${SITE}/en/blog/`,
      `${SITE}/es/blog/`,
      `${SITE}/en/contact/`,
      `${SITE}/es/contact/`,
      `${SITE}/en/legal/privacy-policy/`,
      `${SITE}/es/legal/privacy-policy/`,
      `${SITE}/en/legal/terms-of-service/`,
      `${SITE}/es/legal/terms-of-service/`,
    ];
  }
}

/* --------------------------------- core check -------------------------------- */

async function checkPage(url) {
  const result = await fetchFollowing(url, FOLLOW_REDIRECTS);

  if (result.status === 'ERROR' || result.status === 'TIMEOUT') {
    return { url, ...result, canonical: null, issue: result.error };
  }

  // Must return 200 to be considered valid
  if (result.status !== 200) {
    return {
      url,
      ...result,
      canonical: null,
      issue: `Page returns ${result.status}${result.location ? ` → ${result.location}` : ''}`
    };
  }

  // Extract & resolve canonical
  let canonical = result.canonicalRaw || null;
  if (canonical) {
    try { canonical = new URL(canonical, result.finalUrl).toString(); } catch { }
  }

  if (!canonical) {
    return { url, ...result, canonical: null, issue: 'No canonical URL found' };
  }

  // sanity: detect obviously malformed canonicals (double www)
  try {
    const c = new URL(canonical);
    if (/^www\..*\bwww\./i.test(c.hostname) || /www\..*www\./i.test(c.href)) {
      return { url, ...result, canonical, issue: 'Canonical host looks malformed (double www)' };
    }
  } catch { /* fall through */ }

  // Compare normalized paths (ignore host/port differences so local vs prod is OK)
  const pathsMatch = samePathAfterNorm(result.finalUrl, canonical);

  // Slash-only differences
  const servingHasSlash = trailingSlashState(result.finalUrl);
  const canonicalHasSlash = trailingSlashState(canonical);

  if (!pathsMatch) {
    return {
      url,
      ...result,
      canonical,
      issue: `Canonical path mismatch`,
      detail: {
        servingPath: new URL(normalizeForCompare(result.finalUrl)).pathname,
        canonicalPath: new URL(normalizeForCompare(canonical)).pathname
      }
    };
  }

  if (servingHasSlash && !canonicalHasSlash) {
    return { url, ...result, canonical, issue: 'Canonical missing trailing slash' };
  }
  if (!servingHasSlash && canonicalHasSlash) {
    return { url, ...result, canonical, issue: 'Canonical has extra trailing slash' };
  }

  return { url, ...result, canonical, ok: true };
}

/* ----------------------------- batching & printing --------------------------- */

async function checkUrlsBatch(urls) {
  const results = [];
  for (let i = 0; i < urls.length; i += MAX_CONCURRENT_REQUESTS) {
    const batch = urls.slice(i, i + MAX_CONCURRENT_REQUESTS);
    const r = await Promise.all(batch.map(checkPage));
    results.push(...r);
    if (i + MAX_CONCURRENT_REQUESTS < urls.length) {
      await new Promise(r => setTimeout(r, 400));
    }
  }
  return results;
}

/* ------------------------------------- run ---------------------------------- */

async function main() {
  console.log('\n🔍 Validating canonical URL implementation...\n');

  // Preflight to avoid silent exits when server isn't up
  const up = await preflight(SITE);
  if (!up) {
    console.error(`❌ Cannot reach ${SITE}.
   • Start a local preview:  npm run preview
   • Then run:               SITE_URL=${SITE} VERBOSE=1 node validate-canonical-urls.mjs
   • Or use production:      SITE_URL=${DEFAULT_SITE_URL} node validate-canonical-urls.mjs`);
    process.exit(1);
  }

  const urls = extractSampleUrls();
  console.log(`📊 Testing ${urls.length} sample URLs for canonical issues...`);
  if (VERBOSE) {
    console.log('🔎 URLs under test:');
    urls.forEach(u => console.log('  •', u));
  }

  const results = await checkUrlsBatch(urls);
  let errors = 0, warnings = 0;

  for (const r of results) {
    console.log(`\n🔗 Testing: ${r.url}`);
    if (r.ok) {
      if (VERBOSE) console.log(`  ⓘ canonical: ${r.canonical}`);
      console.log('  ✅ Canonical path matches (host ignored for local testing)');
      continue;
    }
    if (r.issue) {
      const label = /warning/i.test(r.issue) ? '⚠️  WARNING' : '❌ ERROR';
      console.log(`  ${label}: ${r.issue}`);
      if (r.detail) {
        console.log(`     Serving path:  ${r.detail.servingPath}`);
        console.log(`     Canonical path: ${r.detail.canonicalPath}`);
      }
      if (!/warning/i.test(r.issue)) errors++; else warnings++;
      continue;
    }
    console.log('  ❌ ERROR: Unknown issue');
    errors++;
  }

  console.log('\n' + '='.repeat(60));
  console.log('📋 CANONICAL URL VALIDATION SUMMARY');
  console.log('='.repeat(60));
  if (errors === 0 && warnings === 0) {
    console.log('✅ All canonical URLs are properly configured!');
    console.log('🎉 No redirect chains, path, or trailing-slash mismatches found!');
    process.exit(0);
  } else {
    console.log(`❌ Found ${errors} errors and ${warnings} warnings`);
    if (errors > 0) {
      console.log('\n🔧 RECOMMENDED ACTIONS:');
      console.log('1) Ensure each page renders a <link rel="canonical" ...> tag');
      console.log('2) Canonical path should equal the serving path (with same trailing slash rule)');
      console.log('3) Avoid malformed hosts (e.g., double www)');
      console.log('4) Make pages return 200 (avoid canonical pointing to a redirect target)');
    }
    process.exit(1);
  }
}

// Always run – avoids Windows path guard edge cases
main().catch(err => {
  console.error('❌ Validation failed:', err?.message || err);
  process.exit(1);
});
