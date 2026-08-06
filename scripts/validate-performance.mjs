#!/usr/bin/env node

/**
 * Performance Validation Script
 *
 * This script validates page performance by checking:
 * 1. Image file sizes for optimization
 * 2. Complex filtering logic in templates
 * 3. Build-time performance bottlenecks
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, extname } from "path";

/**
 * Check image file sizes for optimization
 */
function checkImageSizes() {
  console.log("🖼️  Checking image file sizes...");

  // Measure what SHIPS, not what is committed. Astro re-encodes and resizes
  // everything it processes, so a 2 MB source PNG can leave as an 89 KB webp —
  // and a source-byte check reports a disaster that does not exist while missing
  // the assets that pass through untouched. This validator scanned
  // ./src/assets/images and was permanently red, which made `validate:all` red,
  // which meant the whole gate was gating nothing (same failure PR #226 fixed
  // for the SEO validator).
  const builtDir = "./dist/_astro";
  const sourceDir = "./src/assets/images";

  const usingBuilt = existsSync(builtDir);
  const imageDir = usingBuilt ? builtDir : sourceDir;

  if (!usingBuilt) {
    console.log(
      "  ⚠️  dist/_astro not found — falling back to source bytes, which are NOT what ships.\n" +
        "     Run `npm run build` first for a meaningful result.",
    );
  }

  // Thresholds apply to a single SHIPPED asset. >200 KB for one image on a
  // content site is a real Core Web Vitals problem; 100-200 KB is worth a look.
  const maxImageSize = 100 * 1024;
  const warningSize = 200 * 1024;

  let issues = 0;
  let warnings = 0;
  let checked = 0;

  function checkDirectory(dir) {
    try {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          checkDirectory(fullPath);
        } else if ([".jpg", ".jpeg", ".png", ".webp"].includes(extname(item).toLowerCase())) {
          const sizeKB = Math.round(stat.size / 1024);

          checked++;
          if (stat.size > warningSize) {
            console.log(
              `  ❌ CRITICAL: ${fullPath.replace(/\\/g, "/")} (${sizeKB}KB) - a single shipped asset over ${Math.round(warningSize / 1024)}KB`,
            );
            issues++;
          } else if (stat.size > maxImageSize) {
            console.log(
              `  ⚠️  WARNING: ${fullPath.replace(/\\/g, "/")} (${sizeKB}KB) - over ${Math.round(maxImageSize / 1024)}KB, worth a look`,
            );
            warnings++;
          }
          // Passing assets are not listed. 204 lines of "✅ Optimized" is how a
          // real failure gets scrolled past.
        }
      }
    } catch (error) {
      console.log(`  ❌ Could not check directory ${dir}: ${error.message}`);
      issues++;
    }
  }

  checkDirectory(imageDir);
  console.log(
    `  ${checked} ${usingBuilt ? "shipped" : "source"} images checked — ${issues} critical, ${warnings} warning, ${checked - issues - warnings} fine`,
  );
  return issues;
}

/**
 * Check for performance anti-patterns in templates
 */
function checkTemplatePerformance() {
  console.log("\n🔍 Checking template performance patterns...");

  let issues = 0;
  const templateDir = "./src/pages";

  function checkFile(filePath) {
    try {
      const content = readFileSync(filePath, "utf-8");

      // Check for complex filtering logic (old patterns)
      if (content.includes("filter(post => {") && content.includes("categories.find(")) {
        console.log(`  ⚠️  WARNING: Complex category filtering in ${filePath.replace(/\\/g, "/")}`);
        console.log(`     Consider optimizing nested loops and category matching`);
      }

      // Check for multiple getCollection calls
      const collectionCalls = (content.match(/getCollection\(/g) || []).length;
      if (collectionCalls > 1) {
        console.log(
          `  ⚠️  WARNING: Multiple getCollection calls (${collectionCalls}) in ${filePath.replace(/\\/g, "/")}`,
        );
        console.log(`     Consider consolidating data fetching`);
      }

      // Check for complex string operations in loops (old patterns)
      if (
        content.includes(".toLowerCase()") &&
        content.includes(".trim()") &&
        content.includes("filter(") &&
        content.includes("categories.find(")
      ) {
        console.log(
          `  ⚠️  WARNING: Heavy string operations in filtering logic in ${filePath.replace(/\\/g, "/")}`,
        );
        console.log(`     Consider pre-processing or caching normalized values`);
      }

      // Check for optimized filtering patterns (should be good)
      if (
        content.includes("// Optimized category filtering") ||
        content.includes("Direct category name matching")
      ) {
        console.log(
          `  ✅ Optimized category filtering detected in ${filePath.replace(/\\/g, "/")}`,
        );
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
        } else if (extname(item) === ".astro") {
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
  console.log("\n⚙️  Checking build configuration...");

  let issues = 0;

  try {
    const astroConfig = readFileSync("./astro.config.mjs", "utf-8");

    // Check for image optimization
    if (
      !astroConfig.includes("@astrojs/image") &&
      !astroConfig.includes("astro:assets") &&
      !astroConfig.includes("astro/assets/services/sharp")
    ) {
      console.log(`  ⚠️  WARNING: No image optimization detected in astro.config.mjs`);
      console.log(`     Consider enabling Astro's built-in image optimization`);
    } else if (astroConfig.includes("astro/assets/services/sharp")) {
      console.log(`  ✅ Sharp image optimization enabled`);
    }

    // Check for compression
    if (!astroConfig.includes("compress") && !astroConfig.includes("vite")) {
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
  console.log("🚀 Validating site performance...\n");

  let totalIssues = 0;

  // Check image sizes
  totalIssues += checkImageSizes();

  // Check template performance
  totalIssues += checkTemplatePerformance();

  // Check build configuration
  totalIssues += checkBuildConfig();

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("📋 PERFORMANCE VALIDATION SUMMARY");
  console.log("=".repeat(60));

  if (totalIssues === 0) {
    console.log("✅ All performance checks passed!");
    console.log("🎉 Site is optimized for fast loading!");
    return true;
  } else {
    console.log(`⚠️  Found ${totalIssues} performance issues`);

    console.log("\n🔧 RECOMMENDED ACTIONS:");
    console.log("1. Optimize large images to <50KB using compression tools");
    console.log("2. Simplify complex category filtering logic");
    console.log("3. Cache or pre-process heavy string operations");
    console.log("4. Enable image optimization in Astro config");
    console.log("5. Consider using Astro's built-in performance features");

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
    console.error("❌ Performance validation failed:", error.message);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1].endsWith("validate-performance.mjs")) {
  main();
}
