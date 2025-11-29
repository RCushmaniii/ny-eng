#!/usr/bin/env node

/**
 * Full Site SEO Scan
 * 
 * Scans ALL pages in dist/ folder to find SEO issues
 * Use this to find problems not in CRITICAL-URLS.txt
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'node-html-parser';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../..');
const distPath = path.join(projectRoot, 'dist');

// SEO Rules
const SEO_RULES = {
  title: { min: 30, max: 60 },
  description: { min: 120, max: 160 },
  h1: { min: 20, max: 70 },
};

class FullSiteScan {
  constructor() {
    this.issues = {
      descriptionTooShort: [],
      descriptionTooLong: [],
      titleTooLong: [],
      titleTooShort: [],
      h1Missing: [],
      multipleH1: [],
      hreflangMissing: [],
    };
  }

  /**
   * Find all HTML files in dist
   */
  async findAllHtmlFiles() {
    const pattern = path.join(distPath, '**/*.html').replace(/\\/g, '/');
    const files = await glob(pattern, {
      ignore: ['**/node_modules/**', '**/.netlify/**']
    });
    return files;
  }

  /**
   * Convert file path to URL
   */
  filePathToUrl(filePath) {
    const relativePath = path.relative(distPath, filePath);
    const urlPath = '/' + relativePath.replace(/\\/g, '/').replace(/index\.html$/, '');
    return `https://www.nyenglishteacher.com${urlPath}`;
  }

  /**
   * Check if URL should be indexed (not noindex, not excluded)
   */
  isIndexable(html) {
    // Check for noindex meta tag
    if (html.includes('name="robots" content="noindex')) {
      return false;
    }
    return true;
  }

  /**
   * Scan a single HTML file
   */
  scanFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const root = parse(html);
    const url = this.filePathToUrl(filePath);

    // Skip non-indexable pages for cleaner reporting
    const indexable = this.isIndexable(html);
    
    // Skip dev docs, 404, thank-you, quiz questions (noindex)
    if (!indexable || url.includes('/dev/') || url.includes('/404') || 
        url.includes('/thank-you') || url.includes('/quiz/question/') ||
        url.includes('/quiz/') && url.includes('/question/')) {
      return;
    }

    // Get meta description
    const descTag = root.querySelector('meta[name="description"]');
    const description = descTag?.getAttribute('content') || '';

    // Get title
    const titleTag = root.querySelector('title');
    const title = titleTag?.text || '';

    // Get H1 tags
    const h1Tags = root.querySelectorAll('h1');

    // Check description length
    if (description.length > 0 && description.length < SEO_RULES.description.min) {
      this.issues.descriptionTooShort.push({
        url,
        length: description.length,
        description: description.substring(0, 100) + '...'
      });
    }

    if (description.length > SEO_RULES.description.max) {
      this.issues.descriptionTooLong.push({
        url,
        length: description.length,
        description: description.substring(0, 100) + '...'
      });
    }

    // Check title length
    if (title.length > SEO_RULES.title.max) {
      this.issues.titleTooLong.push({
        url,
        length: title.length,
        title
      });
    }

    if (title.length > 0 && title.length < SEO_RULES.title.min) {
      this.issues.titleTooShort.push({
        url,
        length: title.length,
        title
      });
    }

    // Check H1 tags
    if (h1Tags.length === 0) {
      this.issues.h1Missing.push({ url });
    }

    if (h1Tags.length > 1) {
      this.issues.multipleH1.push({
        url,
        count: h1Tags.length,
        h1s: h1Tags.map(h1 => h1.text.substring(0, 50)).join(', ')
      });
    }
  }

  /**
   * Generate report
   */
  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('📊 FULL SITE SEO SCAN REPORT');
    console.log('='.repeat(80) + '\n');

    const totalIssues = Object.values(this.issues).reduce((sum, arr) => sum + arr.length, 0);

    if (totalIssues === 0) {
      console.log('✅ No issues found!\n');
      console.log('='.repeat(80));
      console.log('✅ PASS - No SEO issues detected\n');
      return 0;
    }

    console.log(`⚠️  Found ${totalIssues} SEO issues across all pages\n`);

    // Meta Description Too Short
    if (this.issues.descriptionTooShort.length > 0) {
      console.log(`\n⚠️  META DESCRIPTION TOO SHORT (${this.issues.descriptionTooShort.length}):\n`);
      this.issues.descriptionTooShort.forEach(issue => {
        console.log(`  ${issue.url}`);
        console.log(`    └─ ${issue.length} chars (min ${SEO_RULES.description.min})`);
        console.log(`    └─ "${issue.description}"\n`);
      });
    }

    // Meta Description Too Long
    if (this.issues.descriptionTooLong.length > 0) {
      console.log(`\n⚠️  META DESCRIPTION TOO LONG (${this.issues.descriptionTooLong.length}):\n`);
      this.issues.descriptionTooLong.forEach(issue => {
        console.log(`  ${issue.url}`);
        console.log(`    └─ ${issue.length} chars (max ${SEO_RULES.description.max})`);
        console.log(`    └─ "${issue.description}"\n`);
      });
    }

    // Title Too Long
    if (this.issues.titleTooLong.length > 0) {
      console.log(`\n⚠️  TITLE TOO LONG (${this.issues.titleTooLong.length}):\n`);
      this.issues.titleTooLong.forEach(issue => {
        console.log(`  ${issue.url}`);
        console.log(`    └─ ${issue.length} chars (max ${SEO_RULES.title.max})`);
        console.log(`    └─ "${issue.title}"\n`);
      });
    }

    // Title Too Short
    if (this.issues.titleTooShort.length > 0) {
      console.log(`\n⚠️  TITLE TOO SHORT (${this.issues.titleTooShort.length}):\n`);
      this.issues.titleTooShort.forEach(issue => {
        console.log(`  ${issue.url}`);
        console.log(`    └─ ${issue.length} chars (min ${SEO_RULES.title.min})`);
        console.log(`    └─ "${issue.title}"\n`);
      });
    }

    // H1 Missing
    if (this.issues.h1Missing.length > 0) {
      console.log(`\n⚠️  H1 TAG MISSING (${this.issues.h1Missing.length}):\n`);
      this.issues.h1Missing.forEach(issue => {
        console.log(`  ${issue.url}\n`);
      });
    }

    // Multiple H1s
    if (this.issues.multipleH1.length > 0) {
      console.log(`\n⚠️  MULTIPLE H1 TAGS (${this.issues.multipleH1.length}):\n`);
      this.issues.multipleH1.forEach(issue => {
        console.log(`  ${issue.url}`);
        console.log(`    └─ ${issue.count} H1 tags found`);
        console.log(`    └─ "${issue.h1s}"\n`);
      });
    }

    console.log('='.repeat(80));
    console.log('📊 INDEXABLE ISSUES SUMMARY:\n');
    console.log(`  • Meta descriptions too short: ${this.issues.descriptionTooShort.length}`);
    console.log(`  • Meta descriptions too long: ${this.issues.descriptionTooLong.length}`);
    console.log(`  • Titles too long: ${this.issues.titleTooLong.length}`);
    console.log(`  • Titles too short: ${this.issues.titleTooShort.length}`);
    console.log(`  • H1 tags missing: ${this.issues.h1Missing.length}`);
    console.log(`  • Multiple H1 tags: ${this.issues.multipleH1.length}`);
    console.log(`\n  Total indexable issues: ${totalIssues}\n`);
    console.log('='.repeat(80));
    
    // Critical issues that should FAIL the build
    const criticalIssues = 
      this.issues.descriptionTooShort.length +
      this.issues.descriptionTooLong.length +
      this.issues.titleTooLong.length +
      this.issues.titleTooShort.length +
      this.issues.h1Missing.length +
      this.issues.multipleH1.length;
    
    if (criticalIssues > 0) {
      console.log('❌ CRITICAL SEO ISSUES FOUND - Deployment blocked!\n');
      console.log('='.repeat(80) + '\n');
      return 1; // FAIL
    }
    
    console.log('✅ NO CRITICAL SEO ISSUES - All checks passed!\n');
    console.log('='.repeat(80) + '\n');
    return 0; // PASS
  }

  /**
   * Run full scan
   */
  async run() {
    console.log('🔍 Scanning all HTML files in dist/...\n');
    
    const files = await this.findAllHtmlFiles();
    console.log(`📋 Found ${files.length} HTML files\n`);

    files.forEach(file => this.scanFile(file));

    const exitCode = this.generateReport();
    return exitCode;
  }
}

// Run scanner
const scanner = new FullSiteScan();
scanner.run().then(exitCode => process.exit(exitCode));
