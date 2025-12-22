/**
 * Improved Sitemap Audit Tool for New York English Teacher
 *
 * This script verifies bilingual content symmetry across:
 * 1. Static .astro pages
 * 2. Content collections (blog, services, legal)
 * 3. Data files (categories, serviceCategories)
 */
import yaml from "js-yaml";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

// For glob pattern matching
let glob;
try {
  const require = createRequire(import.meta.url);
  glob = require("glob");
} catch (error) {
  console.error(
    "The 'glob' package is required. Please install it with: npm install glob",
  );
  process.exit(1);
}

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = __dirname;

// Configuration
const staticPageDirs = {
  en: path.join(projectRoot, "src", "pages", "en"),
  es: path.join(projectRoot, "src", "pages", "es"),
};
const contentDir = path.join(projectRoot, "src", "content");
const dataDir = path.join(projectRoot, "src", "data");

// ANSI color codes for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

// Known URL patterns to ignore
const excludePatterns = [
  "**/*[...slug]*", // Dynamic routes
  "**/*[...page]*", // Pagination routes
  "**/*404*", // Error pages
  "**/components/**", // Component directories
  "**/dev/**", // Development directories
  "**/test/**", // Test directories
  "**/draft/**", // Draft content
  "**/about-titan-studio-themes*", // Template files
  "**/astro-for-marketing-websites*",
  "**/building-pages*",
  "**/edit-posts*",
  "**/page-speed-seo-impact*",
  "**/updating-categories*",
];

/**
 * Main function to run the audit
 */
async function auditSitemap() {
  console.log(
    `\n${colors.cyan}${colors.bold}=== NEW YORK ENGLISH TEACHER SITEMAP AUDIT ===${colors.reset}\n`,
  );
  console.log(`Project root: ${projectRoot}`);
  console.log(
    `Static page directories:\n- English: ${staticPageDirs.en}\n- Spanish: ${staticPageDirs.es}`,
  );
  console.log(`Content directory: ${contentDir}`);
  console.log(`Data directory: ${dataDir}`);

  console.log(
    `\n${colors.blue}Starting comprehensive sitemap audit...${colors.reset}\n`,
  );

  let staticIssues = 0;
  let contentIssues = 0;
  let dataIssues = 0;

  // Phase 1: Audit static .astro pages
  staticIssues = await auditStaticPages();

  // Phase 2: Audit content collections
  contentIssues = await auditContentCollections();

  // Phase 3: Audit data files
  dataIssues = await auditDataFiles();

  // Print summary
  printSummary(staticIssues, contentIssues, dataIssues);
}

/**
 * Phase 1: Audit static .astro pages
 */
async function auditStaticPages() {
  console.log(
    `\n${colors.magenta}${colors.bold}[1] AUDITING STATIC PAGES${colors.reset}`,
  );
  console.log(
    `${colors.blue}Checking symmetry between English and Spanish .astro pages...${colors.reset}\n`,
  );

  try {
    // Check if directories exist
    try {
      await fs.access(staticPageDirs.en);
      await fs.access(staticPageDirs.es);
    } catch (error) {
      console.log(
        `${colors.yellow}Static page directories not found. Skipping this phase.${colors.reset}`,
      );
      return 0;
    }

    // Get all English .astro files (excluding dynamic routes and other patterns)
    const enPagePattern = path.join(staticPageDirs.en, "**", "*.astro");
    let enPages = glob.sync(enPagePattern);

    // Filter out excluded patterns
    for (const pattern of excludePatterns) {
      const cleanPattern = pattern.replace("**/", "").replace("/**", "");
      enPages = enPages.filter((file) => !file.includes(cleanPattern));
    }

    let asymmetryCount = 0;

    for (const enPage of enPages) {
      // Get relative path from en directory
      const relativePath = path.relative(staticPageDirs.en, enPage);

      // Construct expected Spanish page path
      const esPage = path.join(staticPageDirs.es, relativePath);

      // Check if Spanish page exists
      try {
        await fs.access(esPage);
        console.log(
          `${colors.green}✓ SYMMETRICAL: ${colors.reset}${relativePath}`,
        );
      } catch {
        console.log(
          `${colors.red}❌ ASYMMETRICAL: ${colors.reset}${relativePath} (Missing Spanish version)`,
        );
        asymmetryCount++;
      }
    }

    if (asymmetryCount === 0) {
      console.log(
        `\n${colors.green}All static pages are symmetrical! ✓${colors.reset}`,
      );
    } else {
      console.log(
        `\n${colors.yellow}Found ${asymmetryCount} asymmetrical static pages.${colors.reset}`,
      );
      console.log(
        `${colors.yellow}ACTION NEEDED: Create missing Spanish .astro pages.${colors.reset}`,
      );
    }

    return asymmetryCount;
  } catch (error) {
    console.error(
      `${colors.red}Error auditing static pages:${colors.reset}`,
      error,
    );
    return 0;
  }
}

// Helper: Find the real file path from a translation slug
function findMatchingFileFromTranslation(translationPath, allFiles) {
  // Normalize: strip leading slashes, extension, language folder
  const norm = (s) =>
    s
      .replace(/^\/+|\/+$/g, "") // Remove leading/trailing slashes
      .replace(/\.(md|mdx)$/i, "") // Remove .md/.mdx
      .replace(/^en\/|^es\//, "") // Remove leading en/ or es/
      .replace(/^blog\//, "") // Optional: strip collection name if needed
      .replace(/^legal\//, "")
      .replace(/^services\//, "");
  const normTarget = norm(translationPath);

  for (const file of allFiles) {
    // Grab "en/filename" or "es/filename"
    const fileRelative = file
      .replace(/^.*\/blog\/(en|es)\//, "")
      .replace(/^.*\/legal\/(en|es)\//, "");
    const normFile = norm(fileRelative);
    if (normFile === normTarget) return file;
  }
  return null;
}

/**
 * Phase 2: Audit content collections
 */
async function auditContentCollections() {
  console.log(
    `\n${colors.magenta}${colors.bold}[2] AUDITING CONTENT COLLECTIONS${colors.reset}`,
  );
  console.log(
    `${colors.blue}Checking translation links in Markdown content...${colors.reset}\n`,
  );

  try {
    // Check if directory exists
    try {
      await fs.access(contentDir);
    } catch (error) {
      console.log(
        `${colors.yellow}Content directory not found. Skipping this phase.${colors.reset}`,
      );
      return 0;
    }

    // Get all directories in content folder (these are our collections)
    const collections = await fs.readdir(contentDir, { withFileTypes: true });
    const collectionDirs = collections
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .filter(
        (name) =>
          !excludePatterns.some((pattern) =>
            name.includes(pattern.replace("**/", "").replace("/**", "")),
          ),
      );

    let totalIssues = 0;

    for (const collection of collectionDirs) {
      console.log(
        `\n${colors.cyan}Auditing collection: ${collection}${colors.reset}`,
      );

      const collectionPath = path.join(contentDir, collection);
      const mdFiles = await findMarkdownFiles(collectionPath);

      if (mdFiles.length === 0) {
        console.log(
          `${colors.yellow}No markdown files found in collection.${colors.reset}`,
        );
        continue;
      }

      // Track translation status
      const translationStatus = new Map();
      const fileContents = new Map();

      // First pass: Extract all frontmatter and translations
      for (const file of mdFiles) {
        const relativePath = path
          .relative(projectRoot, file)
          .replace(/\\/g, "/");

        try {
          const content = await fs.readFile(file, "utf-8");
          fileContents.set(relativePath, content);

          // Extract frontmatter
          // const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          const frontmatterMatch = content.match(
            /^\s*---\r?\n([\s\S]*?)\r?\n---/,
          );

          if (!frontmatterMatch) {
            translationStatus.set(relativePath, { status: "no-frontmatter" });
            continue;
          }

          let frontmatterObj;
          try {
            frontmatterObj = yaml.load(frontmatterMatch[1]);
          } catch (err) {
            translationStatus.set(relativePath, {
              status: "frontmatter-parse-error",
              error: err.message,
            });
            continue;
          }

          if (
            frontmatterObj &&
            frontmatterObj.translations &&
            Object.keys(frontmatterObj.translations).length > 0
          ) {
            translationStatus.set(relativePath, {
              status: "has-translations",
              translations: frontmatterObj.translations,
            });
          } else {
            translationStatus.set(relativePath, { status: "no-translations" });
          }
        } catch (error) {
          console.error(
            `${colors.red}Error reading file ${file}:${colors.reset}`,
            error,
          );
        }
      }

      // Second pass: Verify translation links
      let collectionIssues = 0;
      let translationPairs = new Map();

      // Group files by their translations
      for (const [filePath, status] of translationStatus.entries()) {
        if (status.status === "has-translations") {
          for (const [lang, targetPath] of Object.entries(
            status.translations,
          )) {
            // Normalize paths for comparison
            const normalizedTargetPath = targetPath.replace(/^\/?/, "/");

            // Save to translation pairs
            const pairKey =
              lang === "en"
                ? `${normalizedTargetPath}:${filePath}`
                : `${filePath}:${normalizedTargetPath}`;
            translationPairs.set(pairKey, {
              [lang]: filePath,
              target: targetPath,
            });
          }
        }
      }

      // Print issues
      const filesWithoutFrontmatter = [...translationStatus.entries()]
        .filter(([_, status]) => status.status === "no-frontmatter")
        .map(([file, _]) => file);

      if (filesWithoutFrontmatter.length > 0) {
        console.log(
          `\n${colors.yellow}Files without frontmatter:${colors.reset}`,
        );
        filesWithoutFrontmatter.forEach((file) => {
          console.log(
            `${colors.yellow}⚠️ NO FRONTMATTER: ${colors.reset}${file}`,
          );
        });
        collectionIssues += filesWithoutFrontmatter.length;
      }

      // Check for files without translation links
      const filesWithoutTranslations = [...translationStatus.entries()]
        .filter(
          ([_, status]) =>
            status.status === "no-translations" ||
            status.status === "empty-translations",
        )
        .map(([file, _]) => file);

      if (filesWithoutTranslations.length > 0) {
        const notTemplate = filesWithoutTranslations.filter(
          (file) =>
            !excludePatterns.some((pattern) => {
              const cleanPattern = pattern
                .replace("**/", "")
                .replace("/**", "");
              return file.includes(cleanPattern);
            }),
        );

        if (notTemplate.length > 0) {
          console.log(
            `\n${colors.yellow}Files without translation links:${colors.reset}`,
          );
          notTemplate.forEach((file) => {
            console.log(
              `${colors.yellow}⚠️ NO TRANSLATION: ${colors.reset}${file}`,
            );
          });
          collectionIssues += notTemplate.length;
        }
      }

      // STEP 1: Build a map of canonical URLs to file paths
      const urlToFile = new Map();

      for (const [filePath, status] of translationStatus.entries()) {
        if (status.status !== "has-translations") continue;
        // Register this file for all its translation URLs
        for (const url of Object.values(status.translations)) {
          // Remove leading/trailing slashes for normalization
          const cleanUrl = (url || "").replace(/^\/+|\/+$/g, "").toLowerCase();
          if (cleanUrl) urlToFile.set(cleanUrl, filePath);
        }
      }

      // STEP 2: Check all translation links
      const brokenPairs = [];

      for (const [filePath, status] of translationStatus.entries()) {
        if (status.status !== "has-translations") continue;

        // Guess language from file path (or from translation keys, fallback)
        const fileLang = filePath.includes("/en/")
          ? "en"
          : filePath.includes("/es/")
            ? "es"
            : Object.keys(status.translations).find(
                (l) => l === "en" || l === "es",
              ) || "en";
        const otherLang = fileLang === "en" ? "es" : "en";

        const thisUrl = status.translations[fileLang];
        const otherUrl = status.translations[otherLang];

        if (!otherUrl) {
          brokenPairs.push({
            source: filePath,
            target: null,
            lang: otherLang,
            issue: "missing-translation-link",
          });
          continue;
        }

        // Find target file based on translation URL (not file path!)
        const cleanOtherUrl = otherUrl.replace(/^\/+|\/+$/g, "").toLowerCase();
        const targetFile = urlToFile.get(cleanOtherUrl);

        if (!targetFile) {
          brokenPairs.push({
            source: filePath,
            target: otherUrl,
            lang: otherLang,
            issue: "target-not-found",
          });
          continue;
        }

        // Now, check that the *target* points back to this file's language URL
        const targetStatus = translationStatus.get(targetFile);
        if (!targetStatus || targetStatus.status !== "has-translations") {
          brokenPairs.push({
            source: filePath,
            target: targetFile,
            lang: fileLang,
            issue: "no-reciprocal",
          });
          continue;
        }

        const targetBackUrl = targetStatus.translations[fileLang];
        const cleanThisUrl = (thisUrl || "")
          .replace(/^\/+|\/+$/g, "")
          .toLowerCase();
        const cleanTargetBackUrl = (targetBackUrl || "")
          .replace(/^\/+|\/+$/g, "")
          .toLowerCase();

        if (cleanThisUrl !== cleanTargetBackUrl) {
          brokenPairs.push({
            source: filePath,
            target: targetFile,
            sourcePath: cleanThisUrl,
            targetPath: cleanTargetBackUrl,
            lang: fileLang,
            issue: "incorrect-reciprocal",
          });
        }
      }

      // Report broken links
      if (brokenPairs.length > 0) {
        console.log(
          `\n${colors.yellow}Broken translation links:${colors.reset}`,
        );
        brokenPairs.forEach((pair) => {
          switch (pair.issue) {
            case "missing-translation-link":
              console.log(
                `${colors.red}❌ MISSING TRANSLATION: ${colors.reset}${pair.source} (no ${pair.lang} translation link in frontmatter)`,
              );
              break;
            case "target-not-found":
              console.log(
                `${colors.red}❌ MISSING TARGET: ${colors.reset}${pair.source} → ${pair.target} (target file not found)`,
              );
              break;
            case "no-reciprocal":
              console.log(
                `${colors.red}❌ NO RECIPROCAL: ${colors.reset}${pair.source} → ${pair.target} (target has no translations)`,
              );
              break;
            case "incorrect-reciprocal":
              console.log(
                `${colors.red}❌ MISMATCHED LINK: ${colors.reset}${pair.source} → ${pair.target} (points to ${pair.targetPath} instead of ${pair.sourcePath})`,
              );
              break;
          }
        });
        collectionIssues += brokenPairs.length;
      }

      // Report broken links
      if (brokenPairs.length > 0) {
        console.log(
          `\n${colors.yellow}Broken translation links:${colors.reset}`,
        );
        brokenPairs.forEach((pair) => {
          switch (pair.issue) {
            case "target-not-found":
              console.log(
                `${colors.red}❌ MISSING TARGET: ${colors.reset}${pair.source} → ${pair.target} (target file not found)`,
              );
              break;
            case "no-reciprocal":
              console.log(
                `${colors.red}❌ NO RECIPROCAL: ${colors.reset}${pair.source} → ${pair.target} (target has no translations)`,
              );
              break;
            case "missing-reciprocal":
              console.log(
                `${colors.red}❌ MISSING BACK-LINK: ${colors.reset}${pair.source} → ${pair.target} (target missing ${pair.lang === "en" ? "es" : "en"} translation)`,
              );
              break;
            case "incorrect-reciprocal":
              console.log(
                `${colors.red}❌ MISMATCHED LINK: ${colors.reset}${pair.source} → ${pair.target} (points to ${pair.targetPath} instead of ${pair.sourcePath})`,
              );
              break;
          }
        });
        collectionIssues += brokenPairs.length;
      }

      // Collection summary
      totalIssues += collectionIssues;
      if (collectionIssues === 0) {
        console.log(
          `\n${colors.green}✓ All files in "${collection}" collection have proper translation links!${colors.reset}`,
        );
      } else {
        console.log(
          `\n${colors.yellow}Found ${collectionIssues} issues in "${collection}" collection.${colors.reset}`,
        );
        console.log(
          `${colors.yellow}ACTION NEEDED: Fix broken, missing, or non-reciprocal translation links.${colors.reset}`,
        );
      }
    }

    // Overall summary
    if (totalIssues === 0) {
      console.log(
        `\n${colors.green}All content collections have proper translation links! ✓${colors.reset}`,
      );
    } else {
      console.log(
        `\n${colors.yellow}Found ${totalIssues} total issues across all content collections.${colors.reset}`,
      );
    }

    return totalIssues;
  } catch (error) {
    console.error(
      `${colors.red}Error auditing content collections:${colors.reset}`,
      error,
    );
    return 0;
  }
}

/**
 * Phase 3: Audit data files
 */
async function auditDataFiles() {
  console.log(
    `\n${colors.magenta}${colors.bold}[3] AUDITING DATA FILES${colors.reset}`,
  );
  console.log(
    `${colors.blue}Checking data files for complete bilingual data...${colors.reset}\n`,
  );

  try {
    // Validate data directory
    try {
      await fs.access(dataDir);
    } catch (error) {
      console.log(
        `${colors.yellow}Data directory not found. Skipping this phase.${colors.reset}`,
      );
      return 0;
    }

    const dataFiles = [
      { name: "categories.ts", title: "Categories" },
      { name: "serviceCategories.ts", title: "Service Categories" },
    ];

    let totalDataIssues = 0;

    // Check each data file
    for (const dataFile of dataFiles) {
      console.log(
        `${colors.cyan}Checking ${dataFile.title} (${dataFile.name})${colors.reset}`,
      );

      const filePath = path.join(dataDir, dataFile.name);

      try {
        const content = await fs.readFile(filePath, "utf-8");

        // Extract objects using regex
        // This approach avoids direct TypeScript imports
        const objectRegex = /{\s*name:\s*['"]([^'"]*)['"]([\s\S]*?)}/g;
        let match;
        let missingProps = 0;

        while ((match = objectRegex.exec(content)) !== null) {
          const objStr = match[0] + match[2]; // Full object string

          // Check for required bilingual properties
          const nameMatch = objStr.match(/name:\s*['"]([^'"]*)['"]/);
          const nameEsMatch = objStr.match(/name_es:\s*['"]([^'"]*)['"]/);
          const slugMatch = objStr.match(/slug:\s*['"]([^'"]*)['"]/);
          const esSlugMatch = objStr.match(/esSlug:\s*['"]([^'"]*)['"]/);

          if (nameMatch) {
            const name = nameMatch[1];

            if (!nameEsMatch) {
              console.log(
                `${colors.red}❌ MISSING SPANISH NAME: ${colors.reset}"${name}" is missing name_es property`,
              );
              missingProps++;
            }

            if (!slugMatch) {
              console.log(
                `${colors.red}❌ MISSING SLUG: ${colors.reset}"${name}" is missing slug property`,
              );
              missingProps++;
            }

            if (!esSlugMatch) {
              console.log(
                `${colors.red}❌ MISSING SPANISH SLUG: ${colors.reset}"${name}" is missing esSlug property`,
              );
              missingProps++;
            }
          }
        }

        if (missingProps === 0) {
          console.log(
            `${colors.green}✓ All objects in ${dataFile.title} have complete bilingual properties!${colors.reset}\n`,
          );
        } else {
          console.log(
            `${colors.yellow}Found ${missingProps} missing properties in ${dataFile.title}.${colors.reset}`,
          );
          console.log(
            `${colors.yellow}ACTION NEEDED: Add missing name_es, slug, or esSlug properties.${colors.reset}\n`,
          );
          totalDataIssues += missingProps;
        }
      } catch (error) {
        if (error.code === "ENOENT") {
          console.log(
            `${colors.yellow}⚠️ File not found: ${dataFile.name}${colors.reset}\n`,
          );
        } else {
          console.error(
            `${colors.red}Error checking ${dataFile.name}:${colors.reset}`,
            error,
          );
        }
      }
    }

    // Overall data files summary
    if (totalDataIssues === 0) {
      console.log(
        `${colors.green}All data files have complete bilingual information! ✓${colors.reset}`,
      );
    } else {
      console.log(
        `${colors.yellow}Found ${totalDataIssues} total issues in data files.${colors.reset}`,
      );
    }

    return totalDataIssues;
  } catch (error) {
    console.error(
      `${colors.red}Error auditing data files:${colors.reset}`,
      error,
    );
    return 0;
  }
}

/**
 * Helper function to find markdown files
 */
async function findMarkdownFiles(dir) {
  let files = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Skip excluded directories
        if (
          excludePatterns.some(
            (pattern) =>
              pattern.includes("**/") &&
              pattern.includes("/**") &&
              fullPath.includes(pattern.replace("**/", "").replace("/**", "")),
          )
        ) {
          continue;
        }
        files = files.concat(await findMarkdownFiles(fullPath));
      } else if (
        (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) &&
        !excludePatterns.some((pattern) =>
          entry.name.includes(pattern.replace("**/", "").replace("/**", "")),
        )
      ) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error);
  }

  return files;
}

/**
 * Print summary report
 */
function printSummary(staticIssues, contentIssues, dataIssues) {
  const totalIssues = staticIssues + contentIssues + dataIssues;

  console.log(
    `\n${colors.cyan}${colors.bold}=== SITEMAP AUDIT SUMMARY ===${colors.reset}\n`,
  );

  if (totalIssues === 0) {
    console.log(
      `${colors.green}${colors.bold}✓ PERFECT SYMMETRY! ${colors.reset}Your site is fully bilingual and ready for sitemap generation.`,
    );
  } else {
    console.log(
      `${colors.yellow}Found ${totalIssues} total issues:${colors.reset}`,
    );
    console.log(
      `${colors.yellow}- ${staticIssues} static page issues${colors.reset}`,
    );
    console.log(
      `${colors.yellow}- ${contentIssues} content collection issues${colors.reset}`,
    );
    console.log(
      `${colors.yellow}- ${dataIssues} data file issues${colors.reset}`,
    );
    console.log(
      `\n${colors.yellow}Please fix these issues before generating your final sitemap.${colors.reset}`,
    );
  }

  console.log(
    `\n${colors.cyan}${colors.bold}=== SITEMAP AUDIT COMPLETE ===${colors.reset}\n`,
  );
}

// Run the audit
auditSitemap().catch((error) => {
  console.error(`${colors.red}Audit failed with error:${colors.reset}`, error);
});
