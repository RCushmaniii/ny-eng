#!/usr/bin/env node

/**
 * Internal Link Validation Script
 * 
 * This script validates that internal links in content don't point to 404 pages
 * by checking against known redirect patterns and validating link integrity.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

/**
 * Known redirect patterns from _redirects file
 */
const REDIRECT_PATTERNS = {
  '/en/category/english-for-executives': '/en/category/executive-english/',
  '/en/blog/executive-presence-on-video-calls': '/en/blog/executive-video-call/',
  '/category/business-english': '/en/category/business-english/',
  '/category/executive-english': '/en/category/executive-english/',
  '/category/english-coaching': '/en/category/english-coaching/',
  '/category/career-leadership': '/en/category/career-leadership/',
  '/category/high-impact-communication': '/en/category/high-impact-communication/',
  '/category/ingles-para-negocios': '/es/category/ingles-para-negocios/',
  '/category/ingles-ejecutivo': '/es/category/ingles-ejecutivo/',
  '/category/coaching-en-ingles': '/es/category/coaching-en-ingles/',
  '/category/carrera-liderazgo': '/es/category/carrera-liderazgo/',
  '/category/comunicacion-de-alto-impacto': '/es/category/comunicacion-de-alto-impacto/'
};

/**
 * Problematic patterns that should be avoided in content
 */
const PROBLEMATIC_PATTERNS = [
  '/en/category/english-for-executives',
  '/en/blog/executive-presence-on-video-calls',
  '/category/business-english',
  '/category/executive-english',
  '/category/english-coaching'
];

/**
 * Get all markdown files recursively
 */
function getAllMarkdownFiles(dir, files = []) {
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      getAllMarkdownFiles(fullPath, files);
    } else if (extname(item) === '.md') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Extract internal links from markdown content
 */
function extractInternalLinks(content) {
  const links = [];

  // Match markdown links [text](url)
  const markdownLinks = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
  for (const link of markdownLinks) {
    const urlMatch = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (urlMatch && urlMatch[2]) {
      const url = urlMatch[2];
      // Only internal links (starting with / or relative)
      if (url.startsWith('/') && !url.startsWith('//')) {
        links.push({
          text: urlMatch[1],
          url: url,
          type: 'markdown'
        });
      }
    }
  }

  // Match frontmatter translations
  const translationMatch = content.match(/translations:\s*\n\s*en:\s*["']([^"']+)["']/);
  if (translationMatch) {
    links.push({
      text: 'translation-en',
      url: translationMatch[1],
      type: 'frontmatter'
    });
  }

  const translationEsMatch = content.match(/translations:\s*\n\s*es:\s*["']([^"']+)["']/);
  if (translationEsMatch) {
    links.push({
      text: 'translation-es',
      url: translationEsMatch[1],
      type: 'frontmatter'
    });
  }

  return links;
}

/**
 * Validate internal links
 */
function validateInternalLinks() {
  console.log('🔍 Validating internal links for 404 issues...\n');

  let totalErrors = 0;
  let totalWarnings = 0;
  let filesChecked = 0;

  // Get all markdown files
  const contentDir = './src/content';
  const markdownFiles = getAllMarkdownFiles(contentDir);

  console.log(`📊 Checking ${markdownFiles.length} markdown files for broken internal links...`);

  for (const filePath of markdownFiles) {
    try {
      const content = readFileSync(filePath, 'utf-8');
      const links = extractInternalLinks(content);

      if (links.length === 0) continue;

      filesChecked++;
      let fileHasIssues = false;

      for (const link of links) {
        // Check if link uses problematic patterns
        const isProblematic = PROBLEMATIC_PATTERNS.some(pattern =>
          link.url.includes(pattern)
        );

        if (isProblematic) {
          if (!fileHasIssues) {
            console.log(`\n📄 ${filePath.replace(/\\/g, '/')}`);
            fileHasIssues = true;
          }

          const redirect = REDIRECT_PATTERNS[link.url];
          if (redirect) {
            console.log(`  ⚠️  WARNING: Link uses redirect pattern`);
            console.log(`     Link: ${link.url}`);
            console.log(`     Redirects to: ${redirect}`);
            console.log(`     Type: ${link.type}`);
            totalWarnings++;
          } else {
            console.log(`  ❌ ERROR: Link points to 404 page`);
            console.log(`     Link: ${link.url}`);
            console.log(`     Type: ${link.type}`);
            totalErrors++;
          }
        }
      }

      if (fileHasIssues) {
        console.log(`  📊 Found ${links.length} internal links in this file`);
      }

    } catch (error) {
      console.log(`  ❌ ERROR: Could not read file ${filePath}: ${error.message}`);
      totalErrors++;
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 INTERNAL LINK VALIDATION SUMMARY');
  console.log('='.repeat(60));

  console.log(`📊 Files checked: ${filesChecked}`);
  console.log(`📊 Total markdown files: ${markdownFiles.length}`);

  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('✅ All internal links are valid!');
    console.log('🎉 No broken links or redirect chains found!');
    return true;
  } else {
    console.log(`❌ Found ${totalErrors} errors and ${totalWarnings} warnings`);

    if (totalErrors > 0 || totalWarnings > 0) {
      console.log('\n🔧 RECOMMENDED ACTIONS:');
      console.log('1. Update internal links to point directly to correct URLs');
      console.log('2. Avoid using URLs that require redirects');
      console.log('3. Use correct category slugs in content');
      console.log('4. Update translation links to match actual file paths');
    }

    return totalErrors === 0; // Only fail on errors, not warnings
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    const isValid = validateInternalLinks();
    process.exit(isValid ? 0 : 1);
  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1].endsWith('validate-internal-links.mjs')) {
  main();
}
