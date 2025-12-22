#!/usr/bin/env node

/**
 * Complete Project Mapper for i18n Analysis
 * Maps TKeys, routes, actual files, and identifies gaps
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join, relative, extname } from "path";
import { fileURLToPath, pathToFileURL } from "url"; // ✅ important fix
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ProjectMapper {
  constructor() {
    this.analysis = {
      tkeys: new Set(),
      routeMappings: { en: {}, es: {} },
      actualFiles: [],
      missingFiles: [],
      orphanFiles: [],
      missingMappings: [],
      issues: [],
    };
  }

  // Parse i18n.ts to extract TKeys and route mappings
  parseI18nFile() {
    console.log("🔍 Analyzing i18n.ts configuration...");

    try {
      const i18nPath = "./src/lib/i18n.ts";
      const content = readFileSync(i18nPath, "utf-8");

      // Extract TKey union type with better regex
      const tkeyMatch = content.match(/export type TKey =\s*([^;]+);/s);
      if (tkeyMatch) {
        const tkeyContent = tkeyMatch[1];
        // Match both quoted strings and template literals
        const tkeys = tkeyContent.match(/["']([^"']+)["']|\`([^`]+)\`/g);
        if (tkeys) {
          tkeys.forEach((tkey) => {
            const cleaned = tkey.replace(/["'`]/g, "");
            this.analysis.tkeys.add(cleaned);
          });
        }
      }

      // Extract routeFor mappings with more robust parsing
      const routeMatch = content.match(
        /export const routeFor[^{]*{([^}]+(?:{[^}]*}[^}]*)*)}[^}]*};/s,
      );
      if (routeMatch) {
        const routeContent = routeMatch[0];

        // Extract English routes
        const enMatch = routeContent.match(
          /en:\s*{([^}]+(?:{[^}]*}[^}]*)*?)}/s,
        );
        if (enMatch) {
          const enRoutes = enMatch[1];
          const routeEntries = enRoutes.match(
            /["']([^"']+)["']:\s*["']([^"']+)["']/g,
          );
          if (routeEntries) {
            routeEntries.forEach((entry) => {
              const [, tkey, route] = entry.match(
                /["']([^"']+)["']:\s*["']([^"']+)["']/,
              );
              this.analysis.routeMappings.en[tkey] = route;
            });
          }
        }

        // Extract Spanish routes
        const esMatch = routeContent.match(
          /es:\s*{([^}]+(?:{[^}]*}[^}]*)*?)}/s,
        );
        if (esMatch) {
          const esRoutes = esMatch[1];
          const routeEntries = esRoutes.match(
            /["']([^"']+)["']:\s*["']([^"']+)["']/g,
          );
          if (routeEntries) {
            routeEntries.forEach((entry) => {
              const [, tkey, route] = entry.match(
                /["']([^"']+)["']:\s*["']([^"']+)["']/,
              );
              this.analysis.routeMappings.es[tkey] = route;
            });
          }
        }
      }

      console.log(`✅ Found ${this.analysis.tkeys.size} TKeys`);
      console.log(
        `✅ Found ${Object.keys(this.analysis.routeMappings.en).length} English routes`,
      );
      console.log(
        `✅ Found ${Object.keys(this.analysis.routeMappings.es).length} Spanish routes`,
      );
    } catch (error) {
      this.analysis.issues.push({
        type: "CRITICAL",
        category: "I18N_PARSE",
        message: `Failed to parse i18n.ts: ${error.message}`,
      });
    }
  }

  // Scan actual page files
  scanPageFiles(dir = "./src/pages", basePath = "") {
    try {
      const items = readdirSync(dir);

      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (
          stat.isDirectory() &&
          !item.startsWith("_") &&
          !item.includes("[")
        ) {
          this.scanPageFiles(fullPath, join(basePath, item));
        } else if (
          stat.isFile() &&
          extname(item) === ".astro" &&
          !item.startsWith("_")
        ) {
          const routePath = join(basePath, item.replace(".astro", ""));
          const normalizedRoute = this.normalizeRoute(routePath);

          this.analysis.actualFiles.push({
            file: relative("./src/pages", fullPath),
            route: normalizedRoute,
            lang: this.extractLangFromPath(normalizedRoute),
            inferredTkey: this.inferTkeyFromRoute(normalizedRoute),
          });
        }
      }
    } catch (error) {
      this.analysis.issues.push({
        type: "ERROR",
        category: "FILE_SCAN",
        message: `Failed to scan ${dir}: ${error.message}`,
      });
    }
  }

  // Analyze page file content for tkey/lang usage
  analyzePageContent(filePath) {
    try {
      const content = readFileSync(filePath, "utf-8");
      const analysis = {
        usesBase:
          content.includes("import Base from") &&
          content.includes("@layouts/Base.astro"),
        lang: null,
        tkey: null,
        title: null,
        description: null,
      };

      // Extract lang
      const langMatch = content.match(/const\s+lang\s*=\s*['"]([^'"]+)['"]/);
      if (langMatch) analysis.lang = langMatch[1];

      // Extract tkey
      const tkeyMatch = content.match(/const\s+tkey\s*=\s*['"]([^'"]+)['"]/);
      if (tkeyMatch) analysis.tkey = tkeyMatch[1];

      // Extract title
      const titleMatch = content.match(/const\s+title\s*=\s*['"]([^'"]+)['"]/);
      if (titleMatch) analysis.title = titleMatch[1];

      // Extract description
      const descMatch = content.match(
        /const\s+description\s*=\s*['"]([^'"]+)['"]/,
      );
      if (descMatch) analysis.description = descMatch[1];

      return analysis;
    } catch (error) {
      return { error: error.message };
    }
  }

  // Helper functions
  normalizeRoute(routePath) {
    let normalized = routePath.replace(/\\/g, "/");
    if (normalized === "index" || normalized === "") return "/";
    if (normalized.endsWith("/index"))
      normalized = normalized.replace("/index", "");
    return normalized.startsWith("/")
      ? normalized + "/"
      : "/" + normalized + "/";
  }

  extractLangFromPath(route) {
    const match = route.match(/^\/(en|es)\//);
    return match ? match[1] : null;
  }

  inferTkeyFromRoute(route) {
    // Remove language prefix and normalize
    let tkey = route.replace(/^\/(en|es)\//, "").replace(/\/$/, "");
    if (tkey === "") return "home";
    return tkey;
  }

  // Comprehensive analysis
  performAnalysis() {
    console.log("\n📊 Performing comprehensive analysis...");

    // Check for TKeys without route mappings
    for (const tkey of this.analysis.tkeys) {
      if (!this.analysis.routeMappings.en[tkey]) {
        this.analysis.missingMappings.push({
          type: "MISSING_EN_ROUTE",
          tkey: tkey,
          message: `TKey "${tkey}" missing English route mapping`,
        });
      }
      if (!this.analysis.routeMappings.es[tkey]) {
        this.analysis.missingMappings.push({
          type: "MISSING_ES_ROUTE",
          tkey: tkey,
          message: `TKey "${tkey}" missing Spanish route mapping`,
        });
      }
    }

    // Check for route mappings without corresponding files
    const checkMissingFiles = (lang, routes) => {
      for (const [tkey, route] of Object.entries(routes)) {
        const expectedFile = this.analysis.actualFiles.find(
          (f) => f.route === route && f.lang === lang,
        );

        if (!expectedFile) {
          this.analysis.missingFiles.push({
            type: "MISSING_FILE",
            tkey: tkey,
            route: route,
            lang: lang,
            expectedPath: this.routeToFilePath(route),
            message: `Route "${route}" (${tkey}) missing corresponding file`,
          });
        }
      }
    };

    checkMissingFiles("en", this.analysis.routeMappings.en);
    checkMissingFiles("es", this.analysis.routeMappings.es);

    // Check for files without route mappings (orphans)
    for (const file of this.analysis.actualFiles) {
      const hasMapping =
        Object.values(this.analysis.routeMappings.en).includes(file.route) ||
        Object.values(this.analysis.routeMappings.es).includes(file.route);

      if (!hasMapping && file.inferredTkey !== "home") {
        this.analysis.orphanFiles.push({
          type: "ORPHAN_FILE",
          file: file.file,
          route: file.route,
          inferredTkey: file.inferredTkey,
          message: `File "${file.file}" has no route mapping`,
        });
      }
    }

    // Analyze individual page files for proper Base usage
    for (const file of this.analysis.actualFiles) {
      const fullPath = join("./src/pages", file.file);
      const pageAnalysis = this.analyzePageContent(fullPath);

      if (pageAnalysis.error) {
        this.analysis.issues.push({
          type: "ERROR",
          category: "PAGE_ANALYSIS",
          file: file.file,
          message: `Failed to analyze page: ${pageAnalysis.error}`,
        });
        continue;
      }

      if (!pageAnalysis.usesBase) {
        this.analysis.issues.push({
          type: "WARNING",
          category: "NO_BASE_LAYOUT",
          file: file.file,
          message: "Page does not use Base layout",
        });
      }

      if (!pageAnalysis.lang) {
        this.analysis.issues.push({
          type: "ERROR",
          category: "MISSING_LANG",
          file: file.file,
          message: "Page missing lang definition",
        });
      }

      if (!pageAnalysis.tkey) {
        this.analysis.issues.push({
          type: "ERROR",
          category: "MISSING_TKEY",
          file: file.file,
          message: "Page missing tkey definition",
        });
      }

      // Check tkey validity
      if (pageAnalysis.tkey && !this.analysis.tkeys.has(pageAnalysis.tkey)) {
        this.analysis.issues.push({
          type: "ERROR",
          category: "INVALID_TKEY",
          file: file.file,
          tkey: pageAnalysis.tkey,
          message: `Page uses undefined TKey: "${pageAnalysis.tkey}"`,
        });
      }
    }
  }

  routeToFilePath(route) {
    // Convert route back to expected file path
    if (route === "/" || route === "/en/" || route === "/es/") {
      const lang = route.includes("/en/")
        ? "en"
        : route.includes("/es/")
          ? "es"
          : "en";
      return `${lang}/index.astro`;
    }

    const cleanRoute = route.replace(/\/$/, "");
    return cleanRoute + ".astro";
  }

  // Generate comprehensive report
  generateReport() {
    const report = {
      summary: {
        totalTKeys: this.analysis.tkeys.size,
        totalEnRoutes: Object.keys(this.analysis.routeMappings.en).length,
        totalEsRoutes: Object.keys(this.analysis.routeMappings.es).length,
        totalFiles: this.analysis.actualFiles.length,
        missingFiles: this.analysis.missingFiles.length,
        orphanFiles: this.analysis.orphanFiles.length,
        missingMappings: this.analysis.missingMappings.length,
        issues: this.analysis.issues.length,
      },
      analysis: this.analysis,
      recommendations: this.generateRecommendations(),
    };

    // Write detailed JSON report
    writeFileSync(
      "./project-reports/project-mapping-analysis.json",
      JSON.stringify(report, null, 2),
    );

    // Generate human-readable summary
    this.printSummary(report);

    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    // Priority 1: Critical issues
    if (this.analysis.missingMappings.length > 0) {
      recommendations.push({
        priority: "CRITICAL",
        title: "Add missing route mappings to i18n.ts",
        description: "Some TKeys lack route mappings in routeFor object",
        action: "Update src/lib/i18n.ts with missing routes",
        items: this.analysis.missingMappings,
      });
    }

    if (this.analysis.missingFiles.length > 0) {
      recommendations.push({
        priority: "HIGH",
        title: "Create missing page files",
        description: "Route mappings exist but corresponding files are missing",
        action: "Create .astro files for mapped routes",
        items: this.analysis.missingFiles,
      });
    }

    // Priority 2: Orphan files
    if (this.analysis.orphanFiles.length > 0) {
      recommendations.push({
        priority: "MEDIUM",
        title: "Add route mappings for orphan files",
        description: "Page files exist but have no route mappings",
        action: "Add TKeys and routes for existing pages",
        items: this.analysis.orphanFiles,
      });
    }

    return recommendations;
  }

  printSummary(report) {
    console.log("\n" + "=".repeat(60));
    console.log("📋 PROJECT MAPPING ANALYSIS SUMMARY");
    console.log("=".repeat(60));

    console.log(`\n📊 Overview:`);
    console.log(`  • ${report.summary.totalTKeys} TKeys defined`);
    console.log(`  • ${report.summary.totalEnRoutes} English routes mapped`);
    console.log(`  • ${report.summary.totalEsRoutes} Spanish routes mapped`);
    console.log(`  • ${report.summary.totalFiles} page files found`);

    if (report.summary.missingFiles > 0) {
      console.log(`\n🚨 ${report.summary.missingFiles} Missing Files:`);
      this.analysis.missingFiles.forEach((item) => {
        console.log(`  ❌ ${item.expectedPath} (${item.tkey})`);
      });
    }

    if (report.summary.orphanFiles > 0) {
      console.log(`\n⚠️ ${report.summary.orphanFiles} Orphan Files:`);
      this.analysis.orphanFiles.forEach((item) => {
        console.log(`  🔸 ${item.file} → needs TKey "${item.inferredTkey}"`);
      });
    }

    if (report.summary.missingMappings > 0) {
      console.log(
        `\n🔧 ${report.summary.missingMappings} Missing Route Mappings:`,
      );
      this.analysis.missingMappings.forEach((item) => {
        console.log(`  📝 ${item.message}`);
      });
    }

    console.log(
      "\n📄 Detailed report saved to: ./project-reports/project-mapping-analysis.json",
    );
  }

  // Main execution
  async run() {
    console.log("🚀 Starting comprehensive project mapping...\n");

    this.parseI18nFile();
    this.scanPageFiles();
    this.performAnalysis();

    return this.generateReport();
  }
}

async function main() {
  console.log("🔍 Running project-mapper...");
  const mapper = new ProjectMapper();
  await mapper.run();
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error("❌ Project mapper failed:", err);
    process.exit(1);
  });
}

export { ProjectMapper };
