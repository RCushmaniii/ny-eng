#!/usr/bin/env node

/**
 * Technical SEO Validator
 * 
 * Validates all critical URLs against technical SEO best practices
 * Run: node scripts/validate-seo.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../..');

// SEO Best Practices Constraints
const SEO_RULES = {
  title: { min: 30, max: 60, ideal: 55 },
  description: { min: 120, max: 160, ideal: 155 },
  h1: { min: 20, max: 70 },
};

const SITE_URL = 'https://www.nyenglishteacher.com';

class SEOValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.passed = [];
    this.urlsChecked = 0;
  }

  /**
   * Load critical URLs from CRITICAL-URLS.txt
   */
  loadCriticalUrls() {
    const filePath = path.join(projectRoot, 'scripts', 'pre-deploy', 'CRITICAL-URLS.txt');
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract URLs (lines starting with https://)
    const urls = content
      .split('\n')
      .filter(line => line.trim().startsWith('https://'))
      .map(line => line.trim());
    
    console.log(`📋 Loaded ${urls.length} critical URLs\n`);
    return urls;
  }

  /**
   * Convert URL to local file path in dist/
   */
  urlToFilePath(url) {
    const urlPath = url.replace(SITE_URL, '');
    const filePath = path.join(projectRoot, 'dist', urlPath, 'index.html');
    return filePath;
  }

  /**
   * Parse HTML file and extract SEO elements
   */
  parseHtml(filePath) {
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const html = fs.readFileSync(filePath, 'utf-8');
    const root = parse(html);

    return {
      title: root.querySelector('title')?.text?.trim() || '',
      description: root.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '',
      canonical: root.querySelector('link[rel="canonical"]')?.getAttribute('href')?.trim() || '',
      h1: root.querySelectorAll('h1').map(h => h.text.trim()),
      ogTitle: root.querySelector('meta[property="og:title"]')?.getAttribute('content')?.trim() || '',
      ogDescription: root.querySelector('meta[property="og:description"]')?.getAttribute('content')?.trim() || '',
      ogImage: root.querySelector('meta[property="og:image"]')?.getAttribute('content')?.trim() || '',
      ogUrl: root.querySelector('meta[property="og:url"]')?.getAttribute('content')?.trim() || '',
      ogLocale: root.querySelector('meta[property="og:locale"]')?.getAttribute('content')?.trim() || '',
      hreflangs: root.querySelectorAll('link[rel="alternate"][hreflang]').map(link => ({
        lang: link.getAttribute('hreflang'),
        href: link.getAttribute('href')
      })),
      images: root.querySelectorAll('img').map(img => ({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || ''
      })),
      lang: root.querySelector('html')?.getAttribute('lang') || '',
      internalLinks: root.querySelectorAll('a[href^="/"]').map(a => a.getAttribute('href'))
    };
  }

  /**
   * Validate a single URL
   */
  validateUrl(url) {
    this.urlsChecked++;
    const filePath = this.urlToFilePath(url);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      this.errors.push({
        url,
        issue: '404 - File not found in dist/',
        severity: 'CRITICAL'
      });
      return;
    }

    const seo = this.parseHtml(filePath);
    if (!seo) return;

    const urlPath = url.replace(SITE_URL, '');

    // 1. Title validation
    if (!seo.title) {
      this.errors.push({ url: urlPath, issue: 'Missing title tag', severity: 'CRITICAL' });
    } else if (seo.title.length < SEO_RULES.title.min) {
      this.warnings.push({ url: urlPath, issue: `Title too short (${seo.title.length} chars, min ${SEO_RULES.title.min})` });
    } else if (seo.title.length > SEO_RULES.title.max) {
      this.warnings.push({ url: urlPath, issue: `Title too long (${seo.title.length} chars, max ${SEO_RULES.title.max})` });
    }

    // 2. Meta description validation
    if (!seo.description) {
      this.errors.push({ url: urlPath, issue: 'Missing meta description', severity: 'CRITICAL' });
    } else if (seo.description.length < SEO_RULES.description.min) {
      this.warnings.push({ url: urlPath, issue: `Description too short (${seo.description.length} chars, min ${SEO_RULES.description.min})` });
    } else if (seo.description.length > SEO_RULES.description.max) {
      this.warnings.push({ url: urlPath, issue: `Description too long (${seo.description.length} chars, max ${SEO_RULES.description.max})` });
    }

    // 3. H1 validation
    if (seo.h1.length === 0) {
      this.errors.push({ url: urlPath, issue: 'Missing H1 tag', severity: 'CRITICAL' });
    } else if (seo.h1.length > 1) {
      this.errors.push({ url: urlPath, issue: `Multiple H1 tags (${seo.h1.length})`, severity: 'HIGH' });
    } else if (seo.h1[0].length > SEO_RULES.h1.max) {
      this.warnings.push({ url: urlPath, issue: `H1 too long (${seo.h1[0].length} chars, max ${SEO_RULES.h1.max})` });
    }

    // 4. Canonical validation
    if (!seo.canonical) {
      this.errors.push({ url: urlPath, issue: 'Missing canonical tag', severity: 'HIGH' });
    } else if (seo.canonical !== url) {
      this.warnings.push({ url: urlPath, issue: `Canonical mismatch: ${seo.canonical}` });
    }

    // 5. Open Graph validation
    if (!seo.ogTitle) this.warnings.push({ url: urlPath, issue: 'Missing og:title' });
    if (!seo.ogDescription) this.warnings.push({ url: urlPath, issue: 'Missing og:description' });
    if (!seo.ogImage) this.warnings.push({ url: urlPath, issue: 'Missing og:image' });
    if (!seo.ogUrl) this.warnings.push({ url: urlPath, issue: 'Missing og:url' });
    if (!seo.ogLocale) this.warnings.push({ url: urlPath, issue: 'Missing og:locale' });

    // 6. Hreflang validation
    if (seo.hreflangs.length === 0) {
      this.warnings.push({ url: urlPath, issue: 'No hreflang tags' });
    } else {
      // Check for broken hreflang URLs
      seo.hreflangs.forEach(hreflang => {
        const hreflangPath = this.urlToFilePath(hreflang.href);
        if (!fs.existsSync(hreflangPath)) {
          this.errors.push({ 
            url: urlPath, 
            issue: `Broken hreflang: ${hreflang.lang} -> ${hreflang.href}`, 
            severity: 'HIGH' 
          });
        }
      });
    }

    // 7. Image alt text validation
    const missingAlt = seo.images.filter(img => !img.alt && !img.src.includes('data:'));
    if (missingAlt.length > 0) {
      this.warnings.push({ url: urlPath, issue: `${missingAlt.length} images missing alt text` });
    }

    // 8. Language attribute validation
    if (!seo.lang) {
      this.errors.push({ url: urlPath, issue: 'Missing lang attribute on <html>', severity: 'HIGH' });
    }

    // Success
    if (this.errors.filter(e => e.url === urlPath).length === 0) {
      this.passed.push(urlPath);
    }
  }

  /**
   * Generate report
   */
  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('📊 TECHNICAL SEO VALIDATION REPORT');
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
      console.log(`\n⚠️  ALL ${this.warnings.length} WARNINGS:\n`);
      this.warnings.forEach(warning => {
        console.log(`  ${warning.url}`);
        console.log(`    └─ ${warning.issue}\n`);
      });
    }

    console.log('='.repeat(80));
    
    if (this.errors.length === 0) {
      console.log('✅ PASS - Site is ready for deployment\n');
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
    console.log('🔍 Starting Technical SEO Validation...\n');
    console.log('📝 Checking:');
    console.log('  • Meta titles (30-60 chars)');
    console.log('  • Meta descriptions (120-160 chars)');
    console.log('  • H1 tags (20-70 chars, exactly one per page)');
    console.log('  • Canonical URLs (present and valid)');
    console.log('  • Hreflang tags (reciprocal and valid)\n');
    
    const urls = this.loadCriticalUrls();
    
    urls.forEach(url => this.validateUrl(url));
    
    return this.generateReport();
  }
}

// Run validator
const validator = new SEOValidator();
validator.run().then(exitCode => process.exit(exitCode));
