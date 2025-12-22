#!/usr/bin/env node

/**
 * Hreflang Validation Script
 * Validates hreflang implementation to prevent SEO issues
 * Run with: node hreflang-validator.mjs
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the hreflang mappings - fix path to go up to project root
const projectRoot = join(__dirname, "..", "..");
const hreflangUtilPath = join(projectRoot, "src/utils/hreflang.ts");
const hreflangContent = readFileSync(hreflangUtilPath, "utf-8");

// Extract hreflang mappings from the TypeScript file with better regex
const mappingsMatch = hreflangContent.match(
  /export const hreflangMappings[^{]*{[\s\S]*?^};/m,
);
if (!mappingsMatch) {
  console.error("❌ Could not extract hreflang mappings");
  process.exit(1);
}

// Convert TypeScript to JavaScript for evaluation
// Remove the entire TypeScript type annotation
let mappingsCode = mappingsMatch[0]
  .replace(/export const hreflangMappings[^{]*/, "const hreflangMappings = ")
  .replace(/as const/g, "")
  .replace(/'/g, '"'); // Convert single quotes to double quotes for JSON compatibility

let hreflangMappings;
try {
  eval(mappingsCode);
} catch (error) {
  console.error("❌ Error parsing hreflang mappings:", error.message);
  console.error(
    "Code being evaluated:",
    mappingsCode.substring(0, 200) + "...",
  );
  process.exit(1);
}

const siteUrl = "https://www.nyenglishteacher.com";
const errors = [];
const warnings = [];

console.log("🔍 Validating hreflang implementation...\n");

/**
 * Validate reciprocal links
 */
function validateReciprocalLinks() {
  console.log("📋 Checking reciprocal hreflang links...");

  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es } = mapping;

    // Check if English page has reciprocal Spanish link
    if (hreflangMappings[en] && hreflangMappings[en].es !== es) {
      errors.push(
        `❌ Non-reciprocal link: ${en} -> ${hreflangMappings[en].es} but ${path} -> ${es}`,
      );
    }

    // Check if Spanish page has reciprocal English link
    if (hreflangMappings[es] && hreflangMappings[es].en !== en) {
      errors.push(
        `❌ Non-reciprocal link: ${es} -> ${hreflangMappings[es].en} but ${path} -> ${en}`,
      );
    }
  }
}

/**
 * Validate URL consistency
 */
function validateUrlConsistency() {
  console.log("🔗 Checking URL consistency...");

  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es } = mapping;

    // Check trailing slashes
    if (!en.endsWith("/") && !en.includes(".")) {
      warnings.push(`⚠️  Missing trailing slash: ${en}`);
    }
    if (!es.endsWith("/") && !es.includes(".")) {
      warnings.push(`⚠️  Missing trailing slash: ${es}`);
    }

    // Check for consistent URL structure
    if (en.startsWith("/en/") && !es.startsWith("/es/")) {
      errors.push(`❌ Inconsistent URL structure: ${en} vs ${es}`);
    }
  }
}

/**
 * Validate x-default assignments
 */
function validateXDefault() {
  console.log("🌐 Checking x-default assignments...");

  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es, xDefault } = mapping;

    // x-default should typically point to English version
    if (xDefault && xDefault !== en) {
      warnings.push(
        `⚠️  x-default not pointing to English: ${path} -> ${xDefault} (expected: ${en})`,
      );
    }

    // x-default should be defined
    if (!xDefault) {
      warnings.push(`⚠️  Missing x-default for: ${path}`);
    }
  }
}

/**
 * Check for missing page mappings
 */
function checkMissingMappings() {
  console.log("📄 Checking for missing page mappings...");

  const pagesDir = join(projectRoot, "src/pages");
  const allPages = [];

  function scanDirectory(dir, basePath = "") {
    try {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          scanDirectory(fullPath, basePath + "/" + item);
        } else if (item.endsWith(".astro") && item !== "404.astro") {
          let pagePath = basePath + "/" + item.replace(".astro", "");
          if (item === "index.astro") {
            pagePath = basePath + "/";
          }
          if (pagePath === "/") pagePath = "/";
          allPages.push(pagePath);
        }
      }
    } catch (error) {
      // Directory might not exist, skip
    }
  }

  scanDirectory(pagesDir);

  // Check if all pages have hreflang mappings
  for (const page of allPages) {
    const normalizedPage = page.endsWith("/") ? page : page + "/";
    if (
      !hreflangMappings[normalizedPage] &&
      !page.includes("[") &&
      !page.includes("...")
    ) {
      warnings.push(`⚠️  Missing hreflang mapping for page: ${normalizedPage}`);
    }
  }
}

/**
 * Validate language codes
 */
function validateLanguageCodes() {
  console.log("🏴 Checking language codes...");

  const validLanguageCodes = ["en", "es", "x-default"];

  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    // Check if paths match expected language patterns
    if (mapping.en && !mapping.en.startsWith("/en/") && mapping.en !== "/") {
      warnings.push(`⚠️  English URL doesn't start with /en/: ${mapping.en}`);
    }
    if (mapping.es && !mapping.es.startsWith("/es/")) {
      warnings.push(`⚠️  Spanish URL doesn't start with /es/: ${mapping.es}`);
    }
  }
}

// Run all validations
validateReciprocalLinks();
validateUrlConsistency();
validateXDefault();
checkMissingMappings();
validateLanguageCodes();

// Report results
console.log("\n📊 Validation Results:");
console.log("=".repeat(50));

if (errors.length === 0 && warnings.length === 0) {
  console.log("✅ All hreflang validations passed!");
} else {
  if (errors.length > 0) {
    console.log(`\n❌ ${errors.length} Error(s):`);
    errors.forEach((error) => console.log(error));
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  ${warnings.length} Warning(s):`);
    warnings.forEach((warning) => console.log(warning));
  }

  console.log("\n💡 Recommendations:");
  console.log("1. Fix all errors to ensure proper hreflang implementation");
  console.log("2. Review warnings for potential SEO improvements");
  console.log(
    "3. Run this validator after making changes to hreflang mappings",
  );
  console.log("4. Ensure all pages have consistent trailing slashes");
  console.log("5. Verify reciprocal links between language versions");
}

console.log("\n🔧 To fix issues:");
console.log("1. Update src/utils/hreflang.ts with correct mappings");
console.log("2. Ensure all URLs have consistent trailing slashes");
console.log("3. Add missing page mappings for new pages");
console.log("4. Test changes with: npm run build && npm run preview");

// Exit with error code if there are errors
if (errors.length > 0) {
  process.exit(1);
}
