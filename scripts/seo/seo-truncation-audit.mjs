#!/usr/bin/env node

/**
 * SEO Truncation Audit Script
 * Verifies that no SEO titles or descriptions are being artificially truncated
 * and identifies any remaining pages that need i18n system updates
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const TITLE_RECOMMENDED_MAX = 60;
const DESCRIPTION_RECOMMENDED_MAX = 160;

class SEOAuditor {
  constructor() {
    this.issues = [];
    this.warnings = [];
    this.pagesAudited = 0;
    this.truncationFound = false;
  }

  // Recursively find all .astro files
  findAstroFiles(dir, files = []) {
    const items = readdirSync(dir);
    
    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        this.findAstroFiles(fullPath, files);
      } else if (stat.isFile() && extname(item) === '.astro') {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  // Check for truncation patterns in code
  checkForTruncation(content, filePath) {
    const truncationPatterns = [
      /\.slice\(\s*0\s*,\s*\d+\s*\)/g,
      /\.substring\(\s*0\s*,\s*\d+\s*\)/g,
      /maxLength\s*[:=]\s*\d+/g,
      /truncate\s*\(/g,
      /\.length\s*>\s*\d+.*\.slice/g,
      /\.length\s*>\s*\d+.*\.substring/g
    ];

    for (const pattern of truncationPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        // Check if it's SEO-related (not just UI truncation)
        const lines = content.split('\n');
        matches.forEach(match => {
          const lineIndex = content.indexOf(match);
          const lineNumber = content.substring(0, lineIndex).split('\n').length;
          const line = lines[lineNumber - 1];
          
          // Check if it's related to SEO metadata
          if (line.includes('title') || line.includes('description') || 
              line.includes('meta') || line.includes('og:') || 
              line.includes('twitter:')) {
            this.issues.push({
              type: 'TRUNCATION_FOUND',
              file: filePath,
              line: lineNumber,
              content: line.trim(),
              pattern: match
            });
            this.truncationFound = true;
          }
        });
      }
    }
  }

  // Check if page uses old Layout vs new Base layout
  checkLayoutUsage(content, filePath) {
    if (content.includes('import Layout from') && content.includes('@layouts/Layout.astro')) {
      this.issues.push({
        type: 'OLD_LAYOUT_USAGE',
        file: filePath,
        message: 'Still using old Layout component instead of Base layout'
      });
    }

    if (content.includes('translationSlugEn') || content.includes('translationSlugEs')) {
      this.issues.push({
        type: 'LEGACY_TRANSLATION_PROPS',
        file: filePath,
        message: 'Still using legacy translation props instead of centralized i18n system'
      });
    }

    if (content.includes('footerCta') && content.includes('<Base')) {
      this.issues.push({
        type: 'INVALID_BASE_PROPS',
        file: filePath,
        message: 'Using invalid footerCta prop with Base layout'
      });
    }
  }

  // Extract and validate SEO metadata
  extractSEOMetadata(content, filePath) {
    const titleMatch = content.match(/title\s*[:=]\s*["'`]([^"'`]+)["'`]/);
    const descriptionMatch = content.match(/description\s*[:=]\s*["'`]([^"'`]+)["'`]/);

    if (titleMatch) {
      const title = titleMatch[1];
      if (title.length > TITLE_RECOMMENDED_MAX) {
        this.warnings.push({
          type: 'LONG_TITLE',
          file: filePath,
          length: title.length,
          content: title,
          message: `Title exceeds recommended ${TITLE_RECOMMENDED_MAX} characters`
        });
      }
    }

    if (descriptionMatch) {
      const description = descriptionMatch[1];
      if (description.length > DESCRIPTION_RECOMMENDED_MAX) {
        this.warnings.push({
          type: 'LONG_DESCRIPTION',
          file: filePath,
          length: description.length,
          content: description.substring(0, 100) + '...',
          message: `Description exceeds recommended ${DESCRIPTION_RECOMMENDED_MAX} characters`
        });
      }
    }
  }

  // Audit a single file
  auditFile(filePath) {
    try {
      const content = readFileSync(filePath, 'utf-8');
      this.pagesAudited++;

      this.checkForTruncation(content, filePath);
      this.checkLayoutUsage(content, filePath);
      this.extractSEOMetadata(content, filePath);

    } catch (error) {
      this.issues.push({
        type: 'READ_ERROR',
        file: filePath,
        message: `Error reading file: ${error.message}`
      });
    }
  }

  // Run the complete audit
  async runAudit() {
    console.log('🔍 Starting SEO Truncation Audit...\n');

    const srcDir = './src';
    const astroFiles = this.findAstroFiles(srcDir);

    console.log(`Found ${astroFiles.length} .astro files to audit\n`);

    // Audit each file
    for (const file of astroFiles) {
      this.auditFile(file);
    }

    // Generate report
    this.generateReport();
  }

  // Generate audit report
  generateReport() {
    console.log('📊 SEO TRUNCATION AUDIT REPORT');
    console.log('================================\n');

    console.log(`📁 Files Audited: ${this.pagesAudited}`);
    console.log(`🚨 Critical Issues: ${this.issues.length}`);
    console.log(`⚠️  Warnings: ${this.warnings.length}\n`);

    // Critical Issues
    if (this.issues.length > 0) {
      console.log('🚨 CRITICAL ISSUES:');
      console.log('==================');
      
      const groupedIssues = this.issues.reduce((acc, issue) => {
        acc[issue.type] = acc[issue.type] || [];
        acc[issue.type].push(issue);
        return acc;
      }, {});

      for (const [type, issues] of Object.entries(groupedIssues)) {
        console.log(`\n${type} (${issues.length} files):`);
        issues.forEach(issue => {
          console.log(`  📄 ${issue.file.replace(process.cwd(), '.')}`);
          if (issue.line) console.log(`     Line ${issue.line}: ${issue.content}`);
          if (issue.message) console.log(`     ${issue.message}`);
          if (issue.pattern) console.log(`     Pattern: ${issue.pattern}`);
        });
      }
    } else {
      console.log('✅ No critical SEO truncation issues found!');
    }

    // Warnings
    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      console.log('=============');
      
      const groupedWarnings = this.warnings.reduce((acc, warning) => {
        acc[warning.type] = acc[warning.type] || [];
        acc[warning.type].push(warning);
        return acc;
      }, {});

      for (const [type, warnings] of Object.entries(groupedWarnings)) {
        console.log(`\n${type} (${warnings.length} files):`);
        warnings.slice(0, 5).forEach(warning => { // Show max 5 per type
          console.log(`  📄 ${warning.file.replace(process.cwd(), '.')}`);
          console.log(`     Length: ${warning.length} chars`);
          console.log(`     ${warning.message}`);
        });
        if (warnings.length > 5) {
          console.log(`     ... and ${warnings.length - 5} more`);
        }
      }
    }

    // Summary
    console.log('\n📋 SUMMARY:');
    console.log('===========');
    
    if (this.truncationFound) {
      console.log('❌ SEO truncation patterns detected - needs fixing!');
    } else {
      console.log('✅ No SEO truncation patterns found');
    }

    const oldLayoutCount = this.issues.filter(i => i.type === 'OLD_LAYOUT_USAGE').length;
    const legacyPropsCount = this.issues.filter(i => i.type === 'LEGACY_TRANSLATION_PROPS').length;
    
    console.log(`📊 i18n Migration Status:`);
    console.log(`   - Pages using old Layout: ${oldLayoutCount}`);
    console.log(`   - Pages with legacy props: ${legacyPropsCount}`);
    
    if (oldLayoutCount === 0 && legacyPropsCount === 0) {
      console.log('✅ i18n migration appears complete!');
    } else {
      console.log('⚠️  i18n migration needs completion');
    }

    console.log('\n🎯 NEXT STEPS:');
    console.log('==============');
    if (this.truncationFound) {
      console.log('1. Fix SEO truncation patterns found above');
    }
    if (oldLayoutCount > 0) {
      console.log('2. Update remaining pages to use Base layout');
    }
    if (legacyPropsCount > 0) {
      console.log('3. Remove legacy translation props and use centralized i18n');
    }
    if (this.warnings.length > 0) {
      console.log('4. Review long titles/descriptions for optimization (optional)');
    }
    if (!this.truncationFound && oldLayoutCount === 0 && legacyPropsCount === 0) {
      console.log('🎉 All SEO and i18n issues resolved!');
    }
  }
}

// Run the audit
const auditor = new SEOAuditor();
auditor.runAudit().catch(console.error);
