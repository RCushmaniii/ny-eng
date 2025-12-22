import fs from "fs/promises";
import path from "path";

// --- Configuration ---
// List the content collection folders you want to check.
const collectionsToAudit = ["blog", "services", "categories", "legal"];
// --- End Configuration ---

const contentDir = path.join(process.cwd(), "src", "content");
const frontmatterRegex = /^---([\s\S]*?)---/;

// Finds all .md and .mdx files in a directory
async function findMarkdownFiles(dir) {
  let files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await findMarkdownFiles(fullPath));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
  return files;
}

// Main audit function
async function audit() {
  console.log("--- Starting Translation Link Audit ---");
  for (const collection of collectionsToAudit) {
    const collectionPath = path.join(contentDir, collection);
    console.log(`\n## Auditing Collection: "${collection}"\n`);
    try {
      const files = await findMarkdownFiles(collectionPath);
      if (files.length === 0) {
        console.log("  No files found.");
        continue;
      }
      for (const file of files) {
        const content = await fs.readFile(file, "utf-8");
        const match = content.match(frontmatterRegex);
        const relativePath = path.relative(process.cwd(), file);

        if (match && match[1]) {
          // Look for common translation keys
          const hasTranslationKey = /translationKey:/.test(match[1]);
          const hasTranslations = /translations:/.test(match[1]);
          const hasSpanishLink = /spanish_link:|spanishVersion:/.test(match[1]);
          const hasEnglishLink = /english_link:|englishVersion:/.test(match[1]);

          if (
            hasTranslationKey ||
            hasTranslations ||
            hasSpanishLink ||
            hasEnglishLink
          ) {
            console.log(`✅ LINK FOUND IN: ${relativePath}`);
          } else {
            console.log(`❌ NO LINK FOUND IN: ${relativePath}`);
          }
        } else {
          console.log(`⚠️ NO FRONTMATTER IN: ${relativePath}`);
        }
      }
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log(`  Collection folder not found. Skipping.`);
      } else {
        console.error(`  Error auditing "${collection}":`, error);
      }
    }
  }
  console.log("\n--- Audit Complete ---");
}

audit();

import fs from "fs/promises";
import path from "path";
import glob from "glob";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../");

// Configuration
const staticPageDirs = {
  en: path.join(projectRoot, "src", "pages", "en"),
  es: path.join(projectRoot, "src", "pages", "es"),
};

// Removed duplicate contentDir declaration; use the one at the top of the file.
const dataDir = path.join(projectRoot, "src", "data");

const excludePatterns = [
  "**/*[...slug]*", // Dynamic routes
  "**/*[...page]*", // Pagination routes
  "**/*404*", // Error pages
  "**/components/**", // Component directories
  "**/dev/**", // Development directories
  "**/test/**", // Test directories
  "**/draft/**", // Draft content
];

// ANSI color codes for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

// Main audit function
async function auditSitemap() {
  console.log(
    `\n${colors.cyan}=== NEW YORK ENGLISH TEACHER SITEMAP AUDIT ===${colors.reset}\n`,
  );
  console.log(
    `${colors.blue}Starting comprehensive sitemap audit...${colors.reset}\n`,
  );

  // Phase 1: Audit static .astro pages
  await auditStaticPages();

  // Phase 2: Audit content collections
  await auditContentCollections();

  // Phase 3: Audit data files
  await auditDataFiles();

  console.log(
    `\n${colors.cyan}=== SITEMAP AUDIT COMPLETE ===${colors.reset}\n`,
  );
}

/**
 * Phase 1: Audit static .astro pages
 * Checks if each English page has a corresponding Spanish page
 */
async function auditStaticPages() {
  console.log(`\n${colors.magenta}[1] AUDITING STATIC PAGES${colors.reset}`);
  console.log(
    `${colors.blue}Checking symmetry between English and Spanish .astro pages...${colors.reset}\n`,
  );

  try {
    // Get all English .astro files (excluding dynamic routes and other patterns)
    const enPagePattern = path.join(staticPageDirs.en, "**", "*.astro");
    let enPages = glob.sync(enPagePattern);

    // Filter out excluded patterns
    excludePatterns.forEach((pattern) => {
      enPages = enPages.filter(
        (file) => !file.includes(pattern.replace("**/", "").replace("/**", "")),
      );
    });

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
      } catch (error) {
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
        `\n${colors.yellow}Found ${asymmetryCount} static pages without Spanish equivalents.${colors.reset}`,
      );
      console.log(
        `${colors.yellow}ACTION NEEDED: Create matching Spanish pages or verify these pages should be English-only.${colors.reset}`,
      );
    }
  } catch (error) {
    console.error(
      `${colors.red}Error auditing static pages:${colors.reset}`,
      error,
    );
  }
}

/**
 * Phase 2: Audit content collections
 * Verifies reciprocal translation links between content items
 */
async function auditContentCollections() {
  console.log(
    `\n${colors.magenta}[2] AUDITING CONTENT COLLECTIONS${colors.reset}`,
  );
  console.log(
    `${colors.blue}Checking translation links in Markdown content...${colors.reset}\n`,
  );

  try {
    // Get all directories in content folder (these are our collections)
    const collections = await fs.readdir(contentDir, { withFileTypes: true });
    const collectionDirs = collections
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    let totalIssues = 0;

    for (const collection of collectionDirs) {
      console.log(
        `\n${colors.cyan}Auditing collection: ${collection}${colors.reset}`,
      );

      // Address book for all content files in this collection
      const addressBook = new Map();
      const translationLinks = new Map();

      // Find all markdown files in this collection
      const collectionPath = path.join(contentDir, collection);
      const mdFiles = await findMarkdownFiles(collectionPath);

      if (mdFiles.length === 0) {
        console.log(
          `  ${colors.yellow}No markdown files found in collection.${colors.reset}`,
        );
        continue;
      }

      // First pass: build the address book and collect translation links
      for (const file of mdFiles) {
        try {
          const content = await fs.readFile(file, "utf-8");
          const relativePath = path.relative(projectRoot, file);

          addressBook.set(relativePath, file);

          // Extract frontmatter
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (!frontmatterMatch) {
            console.log(
              `${colors.yellow}⚠️ NO FRONTMATTER: ${colors.reset}${relativePath}`,
            );
            continue;
          }

          const frontmatter = frontmatterMatch[1];

          // Look for translation links (various formats)
          // Format 1: translations object
          const translationsMatch = frontmatter.match(
            /translations:\s*{([^}]*)}/,
          );
          if (translationsMatch) {
            const translationsContent = translationsMatch[1];
            const enMatch = translationsContent.match(/en:\s*['"]([^'"]*)['"]/);
            const esMatch = translationsContent.match(/es:\s*['"]([^'"]*)['"]/);

            if (enMatch)
              translationLinks.set(relativePath, {
                type: "translations",
                lang: "en",
                target: enMatch[1],
              });
            if (esMatch)
              translationLinks.set(relativePath, {
                type: "translations",
                lang: "es",
                target: esMatch[1],
              });
          }

          // Format 2: translationKey
          const translationKeyMatch = frontmatter.match(
            /translationKey:\s*['"]([^'"]*)['"]/,
          );
          if (translationKeyMatch) {
            translationLinks.set(relativePath, {
              type: "translationKey",
              key: translationKeyMatch[1],
            });
          }

          // Format 3: direct links
          const spanishLinkMatch = frontmatter.match(
            /(?:spanish_link|spanishVersion):\s*['"]([^'"]*)['"]/,
          );
          const englishLinkMatch = frontmatter.match(
            /(?:english_link|englishVersion):\s*['"]([^'"]*)['"]/,
          );

          if (spanishLinkMatch)
            translationLinks.set(relativePath, {
              type: "direct",
              lang: "es",
              target: spanishLinkMatch[1],
            });
          if (englishLinkMatch)
            translationLinks.set(relativePath, {
              type: "direct",
              lang: "en",
              target: englishLinkMatch[1],
            });
        } catch (error) {
          console.error(
            `${colors.red}Error reading file ${file}:${colors.reset}`,
            error,
          );
        }
      }

      // Second pass: verify the reciprocity of links
      let collectionIssues = 0;
      for (const [filePath, linkInfo] of translationLinks.entries()) {
        try {
          if (linkInfo.type === "translations" || linkInfo.type === "direct") {
            const targetPath = linkInfo.target;

            // Check if target file exists
            if (
              !addressBook.has(targetPath) &&
              !addressBook.has(`src/${targetPath}`)
            ) {
              console.log(
                `${colors.red}❌ BROKEN LINK: ${colors.reset}${filePath} points to non-existent ${linkInfo.lang} file: ${targetPath}`,
              );
              collectionIssues++;
              continue;
            }

            // Get full path of target file
            const targetFullPath = addressBook.has(targetPath)
              ? targetPath
              : `src/${targetPath}`;

            // Check if target file points back
            const targetLinkInfo = translationLinks.get(targetFullPath);
            if (!targetLinkInfo) {
              console.log(
                `${colors.red}❌ NON-RECIPROCAL: ${colors.reset}${filePath} points to ${targetFullPath}, but target has no translation link`,
              );
              collectionIssues++;
            } else if (
              targetLinkInfo.type === "translations" ||
              targetLinkInfo.type === "direct"
            ) {
              // Check if target points back to source
              if (
                targetLinkInfo.target !== filePath &&
                targetLinkInfo.target !== filePath.replace(/^src\//, "")
              ) {
                console.log(
                  `${colors.red}❌ MISMATCHED LINK: ${colors.reset}${filePath} points to ${targetFullPath}, but target points to ${targetLinkInfo.target}`,
                );
                collectionIssues++;
              }
            }
          } else if (linkInfo.type === "translationKey") {
            // For translationKey, find all files with the same key
            const key = linkInfo.key;
            const matchingFiles = [...translationLinks.entries()].filter(
              ([path, info]) =>
                info.type === "translationKey" && info.key === key,
            );

            if (matchingFiles.length < 2) {
              console.log(
                `${colors.red}❌ ISOLATED KEY: ${colors.reset}${filePath} has translationKey "${key}" with no matching files`,
              );
              collectionIssues++;
            }
          }
        } catch (error) {
          console.error(
            `${colors.red}Error verifying links for ${filePath}:${colors.reset}`,
            error,
          );
        }
      }

      // Files without any translation links
      const filesWithoutLinks = [...addressBook.keys()].filter(
        (file) => !translationLinks.has(file),
      );
      if (filesWithoutLinks.length > 0) {
        console.log(
          `\n${colors.yellow}Files without translation links:${colors.reset}`,
        );
        filesWithoutLinks.forEach((file) => {
          console.log(
            `${colors.yellow}⚠️ NO TRANSLATION: ${colors.reset}${file}`,
          );
        });
        collectionIssues += filesWithoutLinks.length;
      }

      totalIssues += collectionIssues;

      // Collection summary
      if (collectionIssues === 0) {
        console.log(
          `\n${colors.green}✓ All ${mdFiles.length} files in "${collection}" collection have proper translation links!${colors.reset}`,
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
  } catch (error) {
    console.error(
      `${colors.red}Error auditing content collections:${colors.reset}`,
      error,
    );
  }
}

/**
 * Phase 3: Audit data files
 * Checks category data files for complete bilingual information
 */
async function auditDataFiles() {
  console.log(`\n${colors.magenta}[3] AUDITING DATA FILES${colors.reset}`);
  console.log(
    `${colors.blue}Checking data files for complete bilingual data...${colors.reset}\n`,
  );

  try {
    // List of specific data files we want to check
    const dataFiles = [
      { name: "categories.ts", title: "Categories" },
      { name: "serviceCategories.ts", title: "Service Categories" },
      // Add more data files as needed
    ];

    let totalDataIssues = 0;

    for (const dataFile of dataFiles) {
      const filePath = path.join(dataDir, dataFile.name);

      try {
        // Check if file exists
        await fs.access(filePath);
        console.log(
          `${colors.cyan}Checking ${dataFile.title} (${dataFile.name})${colors.reset}`,
        );

        // Read file content
        const content = await fs.readFile(filePath, "utf-8");

        // Check for proper bilingual data
        // For categories, check for slug and esSlug properties
        let missingProps = 0;

        // Look for objects with name/name_es pattern
        const objectRegex =
          /{\s*(?:[^{}]*?name(?:_es)?:\s*['"][^'"]*['"][^{}]*?)+\s*}/g;
        const objects = content.match(objectRegex) || [];

        for (const objStr of objects) {
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
  } catch (error) {
    console.error(
      `${colors.red}Error auditing data files:${colors.reset}`,
      error,
    );
  }
}

// Helper function to find markdown files
async function findMarkdownFiles(dir) {
  let files = [];
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

  return files;
}

// Print summary report
function printSummary(staticIssues, contentIssues, dataIssues) {
  const totalIssues = staticIssues + contentIssues + dataIssues;

  console.log(`\n${colors.cyan}=== SITEMAP AUDIT SUMMARY ===${colors.reset}\n`);

  if (totalIssues === 0) {
    console.log(
      `${colors.green}✓ PERFECT SYMMETRY! Your site is fully bilingual and ready for sitemap generation.${colors.reset}`,
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
}

// Run the audit
auditSitemap().catch((error) => {
  console.error(`${colors.red}Audit failed with error:${colors.reset}`, error);
});
