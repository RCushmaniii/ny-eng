#!/usr/bin/env node

/**
 * Hreflang Validation Script
 * Validates hreflang implementation to prevent SEO issues
 * Run with: node scripts/validate-hreflang.mjs
 */

import { readdirSync, statSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Setup __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Enable ts-node so we can import .ts files
import "ts-node/register";

// Dynamically import hreflang mappings
const { hreflangMappings } = await import("../src/utils/hreflang.ts");

// Output file for dashboard consumption
const JSON_REPORT = "./project-reports/hreflang-validator.json";

const siteUrl = "https://www.nyenglishteacher.com";
const issues = [];
let validationCount = 0;

console.log("🔍 Validating hreflang implementation...\n");

/* ----------------------------
 * Utility to log issues
 * ---------------------------- */
function addIssue(type, priority, impact, message, action, metadata = {}) {
  const issueId = `${type}-${message.replace(/[^a-zA-Z0-9]/g, "-").substring(0, 50)}`;
  issues.push({
    id: issueId,
    priority,
    impact,
    message,
    action,
    metadata: { type, ...metadata },
  });
}

/* ----------------------------
 * Validation checks
 * ---------------------------- */
function validateReciprocalLinks() {
  console.log("📋 Checking reciprocal hreflang links...");
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es } = mapping;
    validationCount++;

    if (hreflangMappings[en] && hreflangMappings[en].es !== es) {
      addIssue(
        "reciprocal_link_mismatch",
        "Critical",
        "SEO & Hreflang",
        `Non-reciprocal EN->ES: ${en} -> ${hreflangMappings[en].es} but ${path} -> ${es}`,
        "Fix reciprocal hreflang mapping to ensure consistency",
        { path, en, es, expectedEs: hreflangMappings[en].es },
      );
    }

    if (hreflangMappings[es] && hreflangMappings[es].en !== en) {
      addIssue(
        "reciprocal_link_mismatch",
        "Critical",
        "SEO & Hreflang",
        `Non-reciprocal ES->EN: ${es} -> ${hreflangMappings[es].en} but ${path} -> ${en}`,
        "Fix reciprocal hreflang mapping to ensure consistency",
        { path, en, es, expectedEn: hreflangMappings[es].en },
      );
    }
  }
}

function validateUrlConsistency() {
  console.log("🔗 Checking URL consistency...");
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, es } = mapping;
    validationCount++;

    if (!en.endsWith("/") && !en.includes(".")) {
      addIssue(
        "missing_trailing_slash",
        "Medium",
        "URL Structure",
        `Missing trailing slash: ${en}`,
        "Add trailing slash to prevent 301 redirects",
        { path, url: en, language: "en" },
      );
    }

    if (!es.endsWith("/") && !es.includes(".")) {
      addIssue(
        "missing_trailing_slash",
        "Medium",
        "URL Structure",
        `Missing trailing slash: ${es}`,
        "Add trailing slash to prevent 301 redirects",
        { path, url: es, language: "es" },
      );
    }

    if (en.startsWith("/en/") && !es.startsWith("/es/")) {
      addIssue(
        "inconsistent_url_structure",
        "High",
        "URL Structure",
        `Inconsistent URL structure: ${en} vs ${es}`,
        "Ensure both languages follow consistent URL patterns",
        { path, en, es },
      );
    }
  }
}

function validateXDefault() {
  console.log("🌍 Checking x-default assignments...");
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    const { en, xDefault } = mapping;
    validationCount++;

    if (xDefault && xDefault !== en) {
      addIssue(
        "xdefault_mismatch",
        "Medium",
        "Hreflang Configuration",
        `x-default not pointing to English: ${path} -> ${xDefault} (expected: ${en})`,
        "Update x-default to point to the English version",
        { path, xDefault, en, expected: en },
      );
    }

    if (!xDefault) {
      addIssue(
        "missing_xdefault",
        "Low",
        "Hreflang Configuration",
        `Missing x-default for: ${path}`,
        "Add x-default mapping pointing to primary language version",
        { path, en },
      );
    }
  }
}

function checkMissingMappings() {
  console.log("📄 Checking for missing page mappings...");
  const pagesDir = join(__dirname, "../src/pages");
  const allPages = [];

  function scanDirectory(dir, basePath = "") {
    try {
      const items = readdirSync(dir);
      for (const item of items) {
        // 🚫 Skip dev pages
        if (item === "dev") continue;

        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          scanDirectory(fullPath, basePath + "/" + item);
        } else if (item.endsWith(".astro") && item !== "404.astro") {
          let pagePath = basePath + "/" + item.replace(".astro", "");
          if (item === "index.astro") pagePath = basePath + "/";
          if (pagePath === "/") pagePath = "/";
          allPages.push(pagePath);
        }
      }
    } catch {
      // skip if src/pages doesn't exist
    }
  }

  scanDirectory(pagesDir);

  for (const page of allPages) {
    const normalized = page.endsWith("/") ? page : page + "/";
    if (
      !hreflangMappings[normalized] &&
      !page.includes("[") &&
      !page.includes("...")
    ) {
      validationCount++;
      addIssue(
        "missing_mapping",
        "Medium",
        "Page Coverage",
        `Missing hreflang mapping for page: ${normalized}`,
        "Add hreflang mapping for this page in hreflang.ts",
        { page: normalized, file: `src/pages${page}.astro` },
      );
    }
  }
}

function validateLanguageCodes() {
  console.log("🏴 Checking language codes...");
  for (const [path, mapping] of Object.entries(hreflangMappings)) {
    validationCount++;

    if (mapping.en && !mapping.en.startsWith("/en/") && mapping.en !== "/") {
      addIssue(
        "invalid_language_prefix",
        "Medium",
        "URL Structure",
        `English URL doesn't start with /en/: ${mapping.en}`,
        "Ensure English URLs start with /en/ prefix",
        { path, url: mapping.en, language: "en" },
      );
    }

    if (mapping.es && !mapping.es.startsWith("/es/")) {
      addIssue(
        "invalid_language_prefix",
        "Medium",
        "URL Structure",
        `Spanish URL doesn't start with /es/: ${mapping.es}`,
        "Ensure Spanish URLs start with /es/ prefix",
        { path, url: mapping.es, language: "es" },
      );
    }
  }
}

/* ----------------------------
 * Reporting
 * ---------------------------- */
function determineStatus(issues) {
  if (issues.some((i) => i.priority === "Critical")) return "red";
  if (issues.some((i) => i.priority === "High")) return "orange";
  if (issues.some((i) => i.priority === "Medium")) return "yellow";
  return "green";
}

async function writeJsonReport(startTime) {
  const report = {
    script: "hreflang-validator",
    runAt: new Date().toISOString(),
    duration: Date.now() - startTime,
    status: determineStatus(issues),
    summary: {
      totalChecks: validationCount,
      passed: validationCount - issues.length,
      warnings: issues.filter((i) => ["Low", "Medium"].includes(i.priority))
        .length,
      errors: issues.filter((i) => ["High", "Critical"].includes(i.priority))
        .length,
    },
    issues,
    metadata: {
      mappingsCount: Object.keys(hreflangMappings).length,
      siteUrl,
      validationTypes: [
        "reciprocal_links",
        "url_consistency",
        "x_default",
        "missing_mappings",
        "language_codes",
      ],
    },
  };

  writeFileSync(JSON_REPORT, JSON.stringify(report, null, 2), "utf8");
  console.log(`📋 Dashboard report: ${JSON_REPORT}`);
}

function generateConsoleReport() {
  console.log("\n📊 Validation Results:");
  console.log("=".repeat(50));

  if (issues.length === 0) {
    console.log("✅ All hreflang validations passed!");
    return true;
  }

  const critical = issues.filter((i) => i.priority === "Critical");
  const high = issues.filter((i) => i.priority === "High");
  const medium = issues.filter((i) => i.priority === "Medium");
  const low = issues.filter((i) => i.priority === "Low");

  if (critical.length > 0) {
    console.log(`\n❌ ${critical.length} Critical Error(s):`);
    critical.forEach((issue) => console.log(`  ${issue.message}`));
  }
  if (high.length > 0) {
    console.log(`\n🔶 ${high.length} High Priority Issue(s):`);
    high.forEach((issue) => console.log(`  ${issue.message}`));
  }
  if (medium.length > 0) {
    console.log(`\n⚠️ ${medium.length} Medium Priority Issue(s):`);
    medium.forEach((issue) => console.log(`  ${issue.message}`));
  }
  if (low.length > 0) {
    console.log(`\n💡 ${low.length} Low Priority Issue(s):`);
    low.forEach((issue) => console.log(`  ${issue.message}`));
  }

  console.log("\n💡 Recommendations:");
  console.log(
    "1. Fix all critical errors to ensure proper hreflang implementation",
  );
  console.log("2. Review high priority issues for potential SEO improvements");
  console.log(
    "3. Run this validator after making changes to hreflang mappings",
  );
  console.log("4. Ensure all pages have consistent trailing slashes");
  console.log("5. Verify reciprocal links between language versions");

  return critical.length === 0 && high.length === 0;
}

/* ----------------------------
 * Main entry point
 * ---------------------------- */
async function main() {
  const startTime = Date.now();

  try {
    validateReciprocalLinks();
    validateUrlConsistency();
    validateXDefault();
    checkMissingMappings();
    validateLanguageCodes();

    generateConsoleReport();
    await writeJsonReport(startTime);

    console.log("\n🔧 To fix issues:");
    console.log("1. Update src/utils/hreflang.ts with correct mappings");
    console.log("2. Ensure all URLs have consistent trailing slashes");
    console.log("3. Add missing page mappings for new pages");
    console.log("4. Test changes with: npm run build && npm run preview");

    const criticalErrors = issues.filter(
      (i) => i.priority === "Critical",
    ).length;
    process.exit(criticalErrors > 0 ? 1 : 0);
  } catch (error) {
    console.error("❌ Hreflang validation failed:", error.message);
    process.exit(1);
  }
}

if (process.argv[1].endsWith("validate-hreflang.mjs")) {
  main();
}
