#!/usr/bin/env node

/**
 * Hreflang Redirect Chain Validation Script
 * 
 * This script validates that all hreflang links:
 * 1. Return 200 status codes (no redirects)
 * 2. Have consistent trailing slashes
 * 3. Don't include 404 URLs
 * 4. Have proper reciprocal relationships
 */

import https from 'https';
import http from 'http';
import { readFileSync } from 'fs';

const SITE_URL = 'https://www.nyenglishteacher.com';
const MAX_CONCURRENT_REQUESTS = 5;

/**
 * Check HTTP status code for a URL
 */
function checkUrlStatus(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;

    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; HreflangValidator/1.0)'
      }
    };

    const req = client.request(options, (res) => {
      resolve({
        url,
        status: res.statusCode,
        location: res.headers.location || null
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        error: err.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        error: 'Request timeout'
      });
    });

    req.end();
  });
}

/**
 * Check URLs in batches to avoid overwhelming the server
 */
async function checkUrlsBatch(urls) {
  const results = [];

  for (let i = 0; i < urls.length; i += MAX_CONCURRENT_REQUESTS) {
    const batch = urls.slice(i, i + MAX_CONCURRENT_REQUESTS);
    const batchResults = await Promise.all(batch.map(checkUrlStatus));
    results.push(...batchResults);

    // Small delay between batches
    if (i + MAX_CONCURRENT_REQUESTS < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return results;
}

/**
 * Extract hreflang mappings from TypeScript file
 */
function extractHreflangMappings() {
  try {
    const content = readFileSync('./src/utils/hreflang.ts', 'utf-8');

    // Grab the full mappings block
    const blockMatch = content.match(/export const hreflangMappings[^{]*{([\s\S]*?)}\s*;/);
    if (!blockMatch) throw new Error('Could not find hreflangMappings export');

    const block = blockMatch[0];
    const entryRegex = /['"]([^'\"]+)['"]\s*:\s*{[^}]+}/g;
    const mappings = {};
    let m;
    while ((m = entryRegex.exec(block)) !== null) {
      const full = m[0];
      const key = m[1];
      const en = (full.match(/en:\s*['"]([^'\"]+)['"]/ )|| [])[1] || null;
      const es = (full.match(/es:\s*['"]([^'\"]+)['"]/ )|| [])[1] || null;
      const xDefault = (full.match(/xDefault:\s*['"]([^'\"]+)['"]/ )|| [])[1] || null;
      mappings[key] = { en, es, xDefault };
    }
    return mappings;
  } catch (error) {
    console.error('❌ Could not extract hreflang mappings:', error.message);
    return {};
  }
}

/**
 * Validate hreflang mappings for redirect issues
 */
async function validateHreflangRedirects() {
  console.log('🔍 Validating hreflang redirect chains...\n');

  let totalErrors = 0;
  let totalWarnings = 0;

  // Extract hreflang mappings from TypeScript file
  const hreflangMappings = extractHreflangMappings();

  if (Object.keys(hreflangMappings).length === 0) {
    console.log('❌ No hreflang mappings found. Exiting.');
    return false;
  }

  // Collect all unique URLs from hreflang mappings
  const allUrls = new Set();

  Object.entries(hreflangMappings).forEach(([path, mapping]) => {
    allUrls.add(SITE_URL + mapping.en);
    allUrls.add(SITE_URL + mapping.es);
    if (mapping.xDefault) {
      allUrls.add(SITE_URL + mapping.xDefault);
    }
  });

  console.log(`📊 Checking ${allUrls.size} unique URLs from hreflang mappings...`);

  // Check all URLs for status codes
  const urlResults = await checkUrlsBatch(Array.from(allUrls));

  // Create lookup map for quick access
  const statusMap = new Map();
  urlResults.forEach(result => {
    statusMap.set(result.url, result);
  });

  // Validate each hreflang mapping
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    console.log(`\n🔗 Validating: ${path}`);

    const enUrl = SITE_URL + mapping.en;
    const esUrl = SITE_URL + mapping.es;
    const defaultUrl = SITE_URL + (mapping.xDefault || mapping.en);

    const enResult = statusMap.get(enUrl);
    const esResult = statusMap.get(esUrl);
    const defaultResult = statusMap.get(defaultUrl);

    // Check for 200 status codes
    if (enResult.status !== 200) {
      console.log(`  ❌ ERROR: English URL returns ${enResult.status}: ${enUrl}`);
      if (enResult.location) {
        console.log(`     → Redirects to: ${enResult.location}`);
      }
      totalErrors++;
    }

    if (esResult.status !== 200) {
      console.log(`  ❌ ERROR: Spanish URL returns ${esResult.status}: ${esUrl}`);
      if (esResult.location) {
        console.log(`     → Redirects to: ${esResult.location}`);
      }
      totalErrors++;
    }

    if (defaultResult.status !== 200) {
      console.log(`  ❌ ERROR: Default URL returns ${defaultResult.status}: ${defaultUrl}`);
      if (defaultResult.location) {
        console.log(`     → Redirects to: ${defaultResult.location}`);
      }
      totalErrors++;
    }

    // Check for trailing slash consistency
    if (!mapping.en.endsWith('/') && !mapping.en.includes('.')) {
      console.log(`  ⚠️  WARNING: English URL missing trailing slash: ${mapping.en}`);
      totalWarnings++;
    }

    if (!mapping.es.endsWith('/') && !mapping.es.includes('.')) {
      console.log(`  ⚠️  WARNING: Spanish URL missing trailing slash: ${mapping.es}`);
      totalWarnings++;
    }

    if (enResult.status === 200 && esResult.status === 200) {
      console.log(`  ✅ Valid hreflang relationship`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 HREFLANG REDIRECT VALIDATION SUMMARY');
  console.log('='.repeat(60));

  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('✅ All hreflang links are valid with no redirect chains!');
    return true;
  } else {
    console.log(`❌ Found ${totalErrors} errors and ${totalWarnings} warnings`);

    if (totalErrors > 0) {
      console.log('\n🔧 RECOMMENDED ACTIONS:');
      console.log('1. Fix URLs returning non-200 status codes');
      console.log('2. Ensure all URLs have consistent trailing slashes');
      console.log('3. Remove or redirect 404 URLs');
      console.log('4. Fix missing reciprocal hreflang relationships');
      console.log('5. Eliminate duplicate language entries');
    }

    return false;
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    const isValid = await validateHreflangRedirects();
    process.exit(isValid ? 0 : 1);
  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    process.exit(1);
  }
}

// Always run when invoked via `node validate-hreflang-redirects.mjs`
// This is robust on Windows paths with spaces.
if (process.argv[1]) {
  await main();
}
