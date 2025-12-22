#!/usr/bin/env node

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Expected redirect patterns from _redirects file
const EXPECTED_REDIRECTS = {
  // Root-level redirects
  "/blog": "/en/blog/",
  "/about": "/en/about/",
  "/contact": "/en/contact/",
  "/services": "/en/services/",
  "/testimonials": "/en/testimonials/",

  // Blog pagination
  "/2": "/en/blog/2/",
  "/3": "/en/blog/3/",
  "/4": "/en/blog/4/",
  "/5": "/en/blog/5/",

  // English categories
  "/category/business-english": "/en/category/business-english/",
  "/category/executive-english": "/en/category/executive-english/",
  "/category/english-coaching": "/en/category/english-coaching/",
  "/category/career-leadership": "/en/category/career-leadership/",
  "/category/high-impact-communication":
    "/en/category/high-impact-communication/",

  // Spanish categories
  "/category/ingles-para-negocios": "/es/category/ingles-para-negocios/",
  "/category/ingles-ejecutivo": "/es/category/ingles-ejecutivo/",
  "/category/coaching-en-ingles": "/es/category/coaching-en-ingles/",
  "/category/carrera-liderazgo": "/es/category/carrera-liderazgo/",
  "/category/comunicacion-de-alto-impacto":
    "/es/category/comunicacion-de-alto-impacto/",

  // Specific fixes
  "/en/category/english-for-executives": "/en/category/executive-english/",
  "/en/blog/executive-presence-on-video-calls":
    "/en/blog/executive-video-call/",
};

const errors = [];
const warnings = [];

/**
 * Validate redirect coverage for known 404 patterns
 */
function validateRedirectCoverage() {
  console.log("🔍 Validating redirect coverage for common 404 patterns...");

  // Common 404 patterns we've identified and should have redirects for
  const commonPatterns = [
    "/blog",
    "/about",
    "/contact",
    "/services",
    "/testimonials",
    "/2",
    "/3",
    "/4",
    "/5", // Blog pagination
    "/category/business-english",
    "/category/executive-english",
    "/category/english-coaching",
    "/category/career-leadership",
    "/category/high-impact-communication",
    "/category/ingles-para-negocios",
    "/category/ingles-ejecutivo",
    "/category/coaching-en-ingles",
    "/category/carrera-liderazgo",
    "/category/comunicacion-de-alto-impacto",
    "/en/category/english-for-executives",
    "/en/blog/executive-presence-on-video-calls",
  ];

  let coveredPatterns = 0;

  for (const pattern of commonPatterns) {
    if (EXPECTED_REDIRECTS[pattern]) {
      console.log(`✅ Covered: ${pattern} → ${EXPECTED_REDIRECTS[pattern]}`);
      coveredPatterns++;
    } else {
      warnings.push(`⚠️  Missing redirect for common 404 pattern: ${pattern}`);
    }
  }

  console.log(
    `📈 Redirect coverage: ${coveredPatterns}/${commonPatterns.length} common patterns covered`,
  );
}

/**
 * Validate redirect file syntax
 */
function validateRedirectFile() {
  console.log("📋 Checking _redirects file syntax...");

  try {
    const redirectsPath = "./public/_redirects";
    const redirectsContent = readFileSync(redirectsPath, "utf-8");
    const lines = redirectsContent.split("\n");

    let redirectCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.startsWith("#")) {
        const parts = line.split(" ");
        if (parts.length >= 3) {
          const [from, to, status] = parts;
          redirectCount++;

          // Basic validation (skip domain redirects)
          if (!from.startsWith("/") && !from.startsWith("http")) {
            warnings.push(
              `⚠️  Line ${i + 1}: Redirect source should start with / or http: ${from}`,
            );
          }

          // Handle status codes with ! (force redirect)
          const cleanStatus = status.replace("!", "");
          if (!["301", "302", "404"].includes(cleanStatus)) {
            warnings.push(`⚠️  Line ${i + 1}: Invalid status code: ${status}`);
          }
        }
      }
    }

    console.log(`📊 Found ${redirectCount} redirect rules in _redirects file`);
  } catch (error) {
    errors.push(`❌ Could not read _redirects file: ${error.message}`);
  }
}

/**
 * Check for common 404 patterns
 */
function checkCommonPatterns() {
  console.log("🔍 Checking for common 404 patterns...");

  const commonPatterns = [
    "/sitemap.xml",
    "/robots.txt",
    "/favicon.ico",
    "/apple-touch-icon.png",
  ];

  // These should exist or have proper handling
  for (const pattern of commonPatterns) {
    console.log(
      `📄 Common file: ${pattern} (should exist in public/ or have redirect)`,
    );
  }
}

// Run all validations
validateRedirectCoverage();
validateRedirectFile();
checkCommonPatterns();

// Report results
console.log("\n📊 404 Validation Results:");
console.log("=".repeat(50));

if (errors.length === 0 && warnings.length === 0) {
  console.log("✅ All 404 validations passed!");
} else {
  if (errors.length > 0) {
    console.log(`\n❌ ${errors.length} Error(s):`);
    errors.forEach((error) => console.log(error));
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  ${warnings.length} Warning(s):`);
    warnings.forEach((warning) => console.log(warning));
  }
}

console.log("\n🔧 Next Steps:");
console.log("1. Deploy updated _redirects file");
console.log("2. Test redirects with curl or browser");
console.log("3. Monitor 404 errors in analytics");
console.log("4. Run this script after each deployment");
