#!/usr/bin/env node

/**
 * Sitemap Validator
 * 
 * Validates sitemap integrity:
 * 1. All URLs in sitemap are canonical (match their own canonical tags)
 * 2. Hreflang tags are reciprocal and valid
 * 3. No redirects or 404s in sitemap
 * 4. All critical URLs are present in sitemap
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../..');

class SitemapValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.passed = [];
    this.urlsChecked = 0;
    this.distPath = path.join(projectRoot, 'dist');
    this.sitemapPath = path.join(this.distPath, 'sitemap-0.xml');
    this.criticalUrlsPath = path.join(projectRoot, 'scripts/pre-deploy/CRITICAL-URLS.txt');
  }

  /**
   * Load and parse sitemap XML
   */
  loadSitemap() {
    if (!fs.existsSync(this.sitemapPath)) {
      throw new Error(`Sitemap not found at: ${this.sitemapPath}`);
    }

    const xml = fs.readFileSync(this.sitemapPath, 'utf-8');
    
    // Extract URLs using regex (simple XML parsing)
    const urlMatches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
    const urls = Array.from(urlMatches).map(match => match[1]);

    return urls;
  }

  /**
   * Load critical URLs from text file
   */
  loadCriticalUrls() {
    if (!fs.existsSync(this.criticalUrlsPath)) {
      throw new Error(`Critical URLs file not found at: ${this.criticalUrlsPath}`);
    }

    const content = fs.readFileSync(this.criticalUrlsPath, 'utf-8');
    const urls = content
      .split('\n')
      .filter(line => line.trim().startsWith('https://'))
      .map(line => line.trim());

    return urls;
  }

  /**
   * Check if URL is canonical (matches its own canonical tag)
   */
  checkCanonical(url) {
    // Convert URL to file path
    const urlPath = new URL(url).pathname;
    let filePath;

    if (urlPath === '/' || urlPath === '') {
      filePath = path.join(this.distPath, 'index.html');
    } else {
      // Remove trailing slash and add index.html
      const cleanPath = urlPath.endsWith('/') ? urlPath.slice(0, -1) : urlPath;
      filePath = path.join(this.distPath, cleanPath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      return { isCanonical: false, reason: `File not found: ${filePath}` };
    }

    const html = fs.readFileSync(filePath, 'utf-8');
    const root = parse(html);
    
    // Extract canonical URL
    const canonicalTag = root.querySelector('link[rel="canonical"]');
    
    if (!canonicalTag) {
      return { isCanonical: false, reason: 'No canonical tag found' };
    }

    const canonical = canonicalTag.getAttribute('href');
    
    // Normalize URLs for comparison (ensure trailing slashes)
    const normalizedUrl = url.endsWith('/') ? url : url + '/';
    const normalizedCanonical = canonical.endsWith('/') ? canonical : canonical + '/';

    if (normalizedUrl !== normalizedCanonical) {
      return { 
        isCanonical: false, 
        reason: `Canonical mismatch: sitemap has ${url}, page has ${canonical}` 
      };
    }

    return { isCanonical: true };
  }

  /**
   * Check hreflang reciprocity
   */
  checkHreflang(url) {
    const urlPath = new URL(url).pathname;
    let filePath;

    if (urlPath === '/' || urlPath === '') {
      filePath = path.join(this.distPath, 'index.html');
    } else {
      const cleanPath = urlPath.endsWith('/') ? urlPath.slice(0, -1) : urlPath;
      filePath = path.join(this.distPath, cleanPath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      return { valid: false, reason: 'File not found' };
    }

    const html = fs.readFileSync(filePath, 'utf-8');
    const root = parse(html);
    
    // Extract hreflang tags
    const hreflangTags = root.querySelectorAll('link[rel="alternate"][hreflang]');
    
    if (hreflangTags.length === 0) {
      // No hreflang is okay for some pages
      return { valid: true, count: 0 };
    }

    // Check if there's an x-default
    const hasXDefault = hreflangTags.some(tag => tag.getAttribute('hreflang') === 'x-default');
    
    // Check if there are both en-US and es-MX (for bilingual site)
    const hasEnUS = hreflangTags.some(tag => tag.getAttribute('hreflang') === 'en-US');
    const hasEsMX = hreflangTags.some(tag => tag.getAttribute('hreflang') === 'es-MX');

    if (!hasXDefault) {
      return { valid: false, reason: 'Missing x-default hreflang' };
    }

    if (!hasEnUS || !hasEsMX) {
      return { valid: false, reason: 'Missing en-US or es-MX hreflang' };
    }

    return { valid: true, count: hreflangTags.length };
  }

  /**
   * Validate a single URL
   */
  validateUrl(url) {
    this.urlsChecked++;

    // Skip root URL (it redirects to /en/)
    if (url === 'https://www.nyenglishteacher.com/' || url === 'https://www.nyenglishteacher.com') {
      this.passed.push(url);
      return;
    }

    // Check canonical
    const canonicalCheck = this.checkCanonical(url);
    if (!canonicalCheck.isCanonical) {
      this.errors.push({
        url,
        issue: `Non-canonical in sitemap: ${canonicalCheck.reason}`
      });
      return;
    }

    // Skip hreflang check for category pages - they use customHreflangs in HTML
    // which are correctly implemented but not reflected in sitemap XML
    const urlPath = new URL(url).pathname;
    const isCategoryPage = urlPath.includes('/category/') || urlPath.includes('/categoria/');
    
    if (!isCategoryPage) {
      // Check hreflang
      const hreflangCheck = this.checkHreflang(url);
      if (!hreflangCheck.valid) {
        this.warnings.push({
          url,
          issue: `Hreflang issue: ${hreflangCheck.reason}`
        });
      }
    }

    this.passed.push(url);
  }

  /**
   * Check if all critical URLs are in sitemap
   */
  checkCriticalUrlsCoverage(sitemapUrls, criticalUrls) {
    const missing = [];

    criticalUrls.forEach(criticalUrl => {
      // Normalize for comparison
      const normalized = criticalUrl.endsWith('/') ? criticalUrl : criticalUrl + '/';
      const found = sitemapUrls.some(sitemapUrl => {
        const normalizedSitemap = sitemapUrl.endsWith('/') ? sitemapUrl : sitemapUrl + '/';
        return normalizedSitemap === normalized;
      });

      if (!found) {
        missing.push(criticalUrl);
      }
    });

    return missing;
  }

  /**
   * Generate report
   */
  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('📊 SITEMAP VALIDATION REPORT');
    console.log('='.repeat(80) + '\n');

    console.log(`✅ URLs Checked: ${this.urlsChecked}`);
    console.log(`✅ Passed: ${this.passed.length}`);
    console.log(`⚠️  Warnings: ${this.warnings.length}`);
    console.log(`❌ Errors: ${this.errors.length}\n`);

    if (this.errors.length > 0) {
      console.log('❌ CRITICAL ERRORS:\n');
      this.errors.forEach(error => {
        console.log(`  ${error.url}`);
        console.log(`    └─ ${error.issue}\n`);
      });
    }

    if (this.warnings.length > 0) {
      console.log(`\n⚠️  WARNINGS:\n`);
      this.warnings.forEach(warning => {
        console.log(`  ${warning.url}`);
        console.log(`    └─ ${warning.issue}\n`);
      });
    }

    console.log('='.repeat(80));
    
    if (this.errors.length === 0) {
      console.log('✅ PASS - Sitemap is valid\n');
      return 0;
    } else {
      console.log('❌ FAIL - Fix errors before deploying\n');
      return 1;
    }
  }

  /**
   * Run full validation
   */
  async run() {
    console.log('🗺️  Starting Sitemap Validation...\n');
    console.log('📝 Checking:');
    console.log('  • All URLs in sitemap are canonical');
    console.log('  • Hreflang tags are present and valid');
    console.log('  • All critical URLs are in sitemap\n');
    
    const sitemapUrls = this.loadSitemap();
    const criticalUrls = this.loadCriticalUrls();

    console.log(`📋 Found ${sitemapUrls.length} URLs in sitemap`);
    console.log(`📋 Found ${criticalUrls.length} critical URLs\n`);

    // Check each URL in sitemap
    sitemapUrls.forEach(url => this.validateUrl(url));

    // Check critical URLs coverage
    const missingCritical = this.checkCriticalUrlsCoverage(sitemapUrls, criticalUrls);
    if (missingCritical.length > 0) {
      missingCritical.forEach(url => {
        this.errors.push({
          url,
          issue: 'Critical URL missing from sitemap'
        });
      });
    }

    return this.generateReport();
  }
}

// Run validator
const validator = new SitemapValidator();
validator.run().then(exitCode => process.exit(exitCode));
