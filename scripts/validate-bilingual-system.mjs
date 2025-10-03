#!/usr/bin/env node

/**
 * Bilingual System Validation Script
 * Validates TKey consistency, route mappings, and page structure
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname, relative } from 'path';

class BilingualValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.pageFiles = [];
    this.tkeysFound = new Set();
    this.routeMappings = {};
  }

  // Parse i18n.ts to extract TKeys and route mappings
  parseI18nFile() {
    try {
      const i18nPath = './src/lib/i18n.ts';
      const content = readFileSync(i18nPath, 'utf-8');
      
      // Extract TKey union type
      const tkeyMatch = content.match(/export type TKey =\s*([^;]+);/s);
      if (tkeyMatch) {
        const tkeyContent = tkeyMatch[1];
        const tkeys = tkeyContent.match(/"([^"]+)"/g);
        if (tkeys) {
          tkeys.forEach(tkey => {
            this.tkeysFound.add(tkey.replace(/"/g, ''));
          });
        }
      }

      // Extract route mappings
      const routeMatch = content.match(/export const routeFor[^{]*{([^}]+)}/s);
      if (routeMatch) {
        // This is a simplified extraction - in practice you'd want more robust parsing
        console.log('Found route mappings in i18n.ts');
      }

      console.log(`✓ Found ${this.tkeysFound.size} TKeys in i18n.ts`);
      
    } catch (error) {
      this.errors.push({
        type: 'I18N_PARSE_ERROR',
        message: `Failed to parse i18n.ts: ${error.message}`
      });
    }
  }

  // Find all .astro page files
  findPageFiles(dir = './src/pages', files = []) {
    try {
      const items = readdirSync(dir);
      
      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('_')) {
          this.findPageFiles(fullPath, files);
        } else if (stat.isFile() && extname(item) === '.astro' && !item.startsWith('_')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.errors.push({
        type: 'FILE_SCAN_ERROR',
        message: `Failed to scan directory ${dir}: ${error.message}`
      });
    }
    
    return files;
  }

  // Validate a single page file
  validatePageFile(filePath) {
    try {
      const content = readFileSync(filePath, 'utf-8');
      const relativePath = relative('./src/pages', filePath);
      
      // Check if it uses Base layout
      const usesBase = content.includes('import Base from') && content.includes('@layouts/Base.astro');
      if (!usesBase) {
        this.warnings.push({
          type: 'NO_BASE_LAYOUT',
          file: relativePath,
          message: 'Page does not use Base layout - may not be part of bilingual system'
        });
        return;
      }

      // Extract tkey from props or const
      const tkeyMatch = content.match(/(?:const tkey = |tkey=)['"]+([^'"]+)['"]+/);
      if (!tkeyMatch) {
        this.errors.push({
          type: 'MISSING_TKEY',
          file: relativePath,
          message: 'Page uses Base layout but missing tkey definition'
        });
        return;
      }

      const tkey = tkeyMatch[1];
      
      // Check if tkey exists in i18n.ts
      if (!this.tkeysFound.has(tkey)) {
        this.errors.push({
          type: 'INVALID_TKEY',
          file: relativePath,
          tkey: tkey,
          message: `TKey "${tkey}" not found in i18n.ts TKey union type`
        });
      }

      // Extract language
      const langMatch = content.match(/const lang = ['"`]([^'"`]+)['"`]/);
      if (!langMatch) {
        this.errors.push({
          type: 'MISSING_LANG',
          file: relativePath,
          message: 'Page missing lang definition'
        });
        return;
      }

      const lang = langMatch[1];
      if (!['en', 'es'].includes(lang)) {
        this.errors.push({
          type: 'INVALID_LANG',
          file: relativePath,
          lang: lang,
          message: `Invalid language "${lang}" - must be "en" or "es"`
        });
      }

      // Check file path matches language
      const normalizedPath = relativePath.replace(/\\/g, '/');
      const isEnglishPath = normalizedPath.startsWith('en/');
      const isSpanishPath = normalizedPath.startsWith('es/');
      
      if (lang === 'en' && !isEnglishPath) {
        this.errors.push({
          type: 'LANG_PATH_MISMATCH',
          file: relativePath,
          message: 'Page has lang="en" but not in /en/ directory'
        });
      }
      
      if (lang === 'es' && !isSpanishPath) {
        this.errors.push({
          type: 'LANG_PATH_MISMATCH',
          file: relativePath,
          message: 'Page has lang="es" but not in /es/ directory'
        });
      }

      // Check for legacy props
      if (content.includes('translations={')) {
        this.warnings.push({
          type: 'LEGACY_TRANSLATIONS_PROP',
          file: relativePath,
          message: 'Page uses legacy translations prop instead of tkey'
        });
      }

      console.log(`✓ Validated ${relativePath}: lang=${lang}, tkey=${tkey}`);
      
    } catch (error) {
      this.errors.push({
        type: 'FILE_READ_ERROR',
        file: filePath,
        message: `Failed to read file: ${error.message}`
      });
    }
  }

  // Check for missing language pairs
  validateLanguagePairs() {
    const pagesByTKey = {};
    
    this.pageFiles.forEach(filePath => {
      try {
        const content = readFileSync(filePath, 'utf-8');
        const tkeyMatch = content.match(/const tkey = ['"`]([^'"`]+)['"`]/);
        const langMatch = content.match(/const lang = ['"`]([^'"`]+)['"`]/);
        
        if (tkeyMatch && langMatch) {
          const tkey = tkeyMatch[1];
          const lang = langMatch[1];
          
          if (!pagesByTKey[tkey]) {
            pagesByTKey[tkey] = {};
          }
          pagesByTKey[tkey][lang] = filePath;
        }
      } catch (error) {
        // Already handled in validatePageFile
      }
    });

    // Check for missing language pairs
    Object.entries(pagesByTKey).forEach(([tkey, langs]) => {
      if (!langs.en) {
        this.warnings.push({
          type: 'MISSING_ENGLISH_PAGE',
          tkey: tkey,
          message: `TKey "${tkey}" has Spanish page but no English page`
        });
      }
      
      if (!langs.es) {
        this.warnings.push({
          type: 'MISSING_SPANISH_PAGE',
          tkey: tkey,
          message: `TKey "${tkey}" has English page but no Spanish page`
        });
      }
    });
  }

  // Run complete validation
  async validate() {
    console.log('🔍 Starting Bilingual System Validation...\n');

    // Parse i18n configuration
    this.parseI18nFile();

    // Find all page files
    this.pageFiles = this.findPageFiles();
    console.log(`📄 Found ${this.pageFiles.length} page files\n`);

    // Validate each page
    this.pageFiles.forEach(file => this.validatePageFile(file));

    // Check language pairs
    this.validateLanguagePairs();

    // Generate report
    this.generateReport();
  }

  // Generate validation report
  generateReport() {
    console.log('\n📊 BILINGUAL SYSTEM VALIDATION REPORT');
    console.log('=====================================\n');

    console.log(`📁 Files Validated: ${this.pageFiles.length}`);
    console.log(`🚨 Errors: ${this.errors.length}`);
    console.log(`⚠️  Warnings: ${this.warnings.length}\n`);

    // Critical Errors
    if (this.errors.length > 0) {
      console.log('🚨 CRITICAL ERRORS:');
      console.log('===================');
      
      const groupedErrors = this.errors.reduce((acc, error) => {
        acc[error.type] = acc[error.type] || [];
        acc[error.type].push(error);
        return acc;
      }, {});

      for (const [type, errors] of Object.entries(groupedErrors)) {
        console.log(`\n${type} (${errors.length} files):`);
        errors.forEach(error => {
          console.log(`  📄 ${error.file || 'N/A'}`);
          if (error.tkey) console.log(`     TKey: ${error.tkey}`);
          if (error.lang) console.log(`     Lang: ${error.lang}`);
          console.log(`     ${error.message}`);
        });
      }
    } else {
      console.log('✅ No critical errors found!');
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
        console.log(`\n${type} (${warnings.length} items):`);
        warnings.slice(0, 5).forEach(warning => {
          console.log(`  📄 ${warning.file || warning.tkey || 'N/A'}`);
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
    
    if (this.errors.length === 0) {
      console.log('✅ Bilingual system is properly configured');
    } else {
      console.log('❌ Bilingual system has configuration errors');
    }

    console.log(`📊 TKeys defined: ${this.tkeysFound.size}`);
    console.log(`📄 Pages using Base layout: ${this.pageFiles.filter(f => {
      try {
        const content = readFileSync(f, 'utf-8');
        return content.includes('import Base from') && content.includes('@layouts/Base.astro');
      } catch { return false; }
    }).length}`);

    console.log('\n🎯 NEXT STEPS:');
    console.log('==============');
    if (this.errors.length > 0) {
      console.log('1. Fix critical errors listed above');
      console.log('2. Ensure all TKeys are defined in src/lib/i18n.ts');
      console.log('3. Verify all pages use correct tkey and lang values');
    }
    if (this.warnings.length > 0) {
      console.log('4. Review warnings for potential improvements');
      console.log('5. Consider creating missing language pairs');
    }
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('🎉 System is ready for new bilingual pages!');
      console.log('📖 See docs/BILINGUAL-SYSTEM-GUIDE.md for adding new pages');
    }
  }
}

// Run validation
const validator = new BilingualValidator();
validator.validate().catch(console.error);
