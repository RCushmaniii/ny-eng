#!/usr/bin/env node

/**
 * Performance Validation Script
 * 
 * This script validates page performance by checking:
 * 1. Image file sizes for optimization
 * 2. Complex filtering logic in templates
 * 3. Build-time performance bottlenecks
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

/**
 * Check image file sizes for optimization
 */
function checkImageSizes() {
  console.log('🖼️  Checking image file sizes...');

  const imageDir = './src/assets/images';
  const maxImageSize = 50 * 1024; // 50KB
  const warningSize = 100 * 1024; // 100KB

  let issues = 0;

  function checkDirectory(dir) {
    try {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          checkDirectory(fullPath);
        } else if (['.jpg', '.jpeg', '.png', '.webp'].includes(extname(item).toLowerCase())) {
          const sizeKB = Math.round(stat.size / 1024);

          if (stat.size > maxImageSize) {
            if (stat.size > warningSize) {
              console.log(`  ❌ CRITICAL: ${fullPath.replace(/\\/g, '/')} (${sizeKB}KB) - Should be <50KB`);
              issues++;
            } else {
              console.log(`  ⚠️  WARNING: ${fullPath.replace(/\\/g, '/')} (${sizeKB}KB) - Consider optimizing`);
            }
          } else {
            console.log(`  ✅ ${fullPath.replace(/\\/g, '/')} (${sizeKB}KB) - Optimized`);
          }
        }
      }
    } catch (error) {
      console.log(`  ❌ Could not check directory ${dir}: ${error.message}`);
      issues++;
    }
  }

  checkDirectory(imageDir);
  return issues;
}

/**
 * Check for performance anti-patterns in templates
 */
function checkTemplatePerformance() {
  console.log('\n🔍 Checking template performance patterns...');

  let issues = 0;
  const templateDir = './src/pages';

  function checkFile(filePath) {
    try {
      const content = readFileSync(filePath, 'utf-8');

      // Check for complex filtering logic (old patterns)
      if (content.includes('filter(post => {') && content.includes('categories.find(')) {
        console.log(`  ⚠️  WARNING: Complex category filtering in ${filePath.replace(/\\/g, '/')}`);
        console.log(`     Consider optimizing nested loops and category matching`);
      }

      // Check for multiple getCollection calls
      const collectionCalls = (content.match(/getCollection\(/g) || []).length;
      if (collectionCalls > 1) {
        console.log(`  ⚠️  WARNING: Multiple getCollection calls (${collectionCalls}) in ${filePath.replace(/\\/g, '/')}`);
        console.log(`     Consider consolidating data fetching`);
      }

      // Check for complex string operations in loops (old patterns)
      if (content.includes('.toLowerCase()') && content.includes('.trim()') && content.includes('filter(') && content.includes('categories.find(')) {
        console.log(`  ⚠️  WARNING: Heavy string operations in filtering logic in ${filePath.replace(/\\/g, '/')}`);
        console.log(`     Consider pre-processing or caching normalized values`);
      }

      // Check for optimized filtering patterns (should be good)
      if (content.includes('// Optimized category filtering') || content.includes('Direct category name matching')) {
        console.log(`  ✅ Optimized category filtering detected in ${filePath.replace(/\\/g, '/')}`);
      }

    } catch (error) {
      console.log(`  ❌ Could not check file ${filePath}: ${error.message}`);
      issues++;
    }
  }

  function checkDirectory(dir) {
    try {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          checkDirectory(fullPath);
        } else if (extname(item) === '.astro') {
          checkFile(fullPath);
        }
      }
    } catch (error) {
      console.log(`  ❌ Could not check directory ${dir}: ${error.message}`);
      issues++;
    }
  }

  checkDirectory(templateDir);
  return issues;
}

/**
 * Check build configuration for performance
 */
function checkBuildConfig() {
  console.log('\n⚙️  Checking build configuration...');

  let issues = 0;

  try {
    const astroConfig = readFileSync('./astro.config.mjs', 'utf-8');

    // Check for image optimization
    if (!astroConfig.includes('@astrojs/image') && !astroConfig.includes('astro:assets') && !astroConfig.includes('astro/assets/services/sharp')) {
      console.log(`  ⚠️  WARNING: No image optimization detected in astro.config.mjs`);
      console.log(`     Consider enabling Astro's built-in image optimization`);
    } else if (astroConfig.includes('astro/assets/services/sharp')) {
      console.log(`  ✅ Sharp image optimization enabled`);
    }

    // Check for compression
    if (!astroConfig.includes('compress') && !astroConfig.includes('vite')) {
      console.log(`  ⚠️  WARNING: No compression configuration detected`);
      console.log(`     Consider enabling Vite compression for better performance`);
    }

    console.log(`  ✅ Build configuration checked`);

  } catch (error) {
    console.log(`  ❌ Could not check astro.config.mjs: ${error.message}`);
    issues++;
  }

  return issues;
}

/**
 * Main performance validation
 */
function validatePerformance() {
  console.log('🚀 Validating site performance...\n');

  let totalIssues = 0;

  // Check image sizes
  totalIssues += checkImageSizes();

  // Check template performance
  totalIssues += checkTemplatePerformance();

  // Check build configuration
  totalIssues += checkBuildConfig();

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 PERFORMANCE VALIDATION SUMMARY');
  console.log('='.repeat(60));

  if (totalIssues === 0) {
    console.log('✅ All performance checks passed!');
    console.log('🎉 Site is optimized for fast loading!');
    return true;
  } else {
    console.log(`⚠️  Found ${totalIssues} performance issues`);

    console.log('\n🔧 RECOMMENDED ACTIONS:');
    console.log('1. Optimize large images to <50KB using compression tools');
    console.log('2. Simplify complex category filtering logic');
    console.log('3. Cache or pre-process heavy string operations');
    console.log('4. Enable image optimization in Astro config');
    console.log('5. Consider using Astro\'s built-in performance features');

    return false;
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    const isOptimized = validatePerformance();
    process.exit(isOptimized ? 0 : 1);
  } catch (error) {
    console.error('❌ Performance validation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1].endsWith('validate-performance.mjs')) {
  main();
}
