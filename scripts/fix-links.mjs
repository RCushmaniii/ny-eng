#!/usr/bin/env node
// fix-links.mjs - Cross-platform Node.js version of fix-links.ps1
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

// Parse command line arguments
const args = process.argv.slice(2);
const whatIf = args.includes("--what-if") || args.includes("--dry-run");

// Replacement rules (regex -> replacement). Order matters.
const replacements = [
  // --- Core sections: ensure trailing slash ---
  { pattern: /href="\/en\/blog"(?!\/)/g, replace: 'href="/en/blog/"' },
  { pattern: /href="\/en\/about"(?!\/)/g, replace: 'href="/en/about/"' },
  { pattern: /href="\/en\/services"(?!\/)/g, replace: 'href="/en/services/"' },
  {
    pattern: /href="\/en\/testimonials"(?!\/)/g,
    replace: 'href="/en/testimonials/"',
  },
  { pattern: /href="\/en\/contact"(?!\/)/g, replace: 'href="/en/contact/"' },
  { pattern: /href="\/es\/blog"(?!\/)/g, replace: 'href="/es/blog/"' },
  { pattern: /href="\/es\/about"(?!\/)/g, replace: 'href="/es/about/"' },
  {
    pattern: /href="\/es\/servicios"(?!\/)/g,
    replace: 'href="/es/servicios/"',
  },
  {
    pattern: /href="\/es\/testimonios"(?!\/)/g,
    replace: 'href="/es/testimonios/"',
  },
  { pattern: /href="\/es\/contact"(?!\/)/g, replace: 'href="/es/contact/"' },

  // --- Legal pages (exact) ---
  {
    pattern: /href="\/en\/legal\/privacy-policy"(?!\/)/g,
    replace: 'href="/en/legal/privacy-policy/"',
  },
  {
    pattern: /href="\/en\/legal\/terms-of-service"(?!\/)/g,
    replace: 'href="/en/legal/terms-of-service/"',
  },
  {
    pattern: /href="\/es\/legal\/privacy-policy"(?!\/)/g,
    replace: 'href="/es/legal/privacy-policy/"',
  },
  {
    pattern: /href="\/es\/legal\/terms-of-service"(?!\/)/g,
    replace: 'href="/es/legal/terms-of-service/"',
  },

  // --- Categories: ensure /…/slug/ ---
  {
    pattern: /href="\/en\/category\/([a-z0-9-]+)(?=")/g,
    replace: 'href="/en/category/$1/"',
  },
  {
    pattern: /href="\/es\/category\/([a-z0-9-]+)(?=")/g,
    replace: 'href="/es/category/$1/"',
  },

  // --- Blog pagination (no-slashed -> slashed) ---
  {
    pattern: /href="\/(en|es)\/blog\/([0-9]+)(?=")/g,
    replace: 'href="/$1/blog/$2/"',
  },

  // --- Kill /es/blog/blog/N duplicates ---
  {
    pattern: /href="\/es\/blog\/blog\/([0-9]+)\/?(?=")/g,
    replace: 'href="/es/blog/$1/"',
  },

  // --- Temporary: service detail ghosts -> index (EN) ---
  {
    pattern:
      /href="\/en\/services\/(executive-english|startup-founders|tech-english|logistics-english|professional-english|high-stakes-english)\/?(?=")/g,
    replace: 'href="/en/services/"',
  },

  // --- Temporary: stray /es/services/... -> /es/servicios/ (ES root is "servicios") ---
  {
    pattern: /href="\/es\/services\/[^"]+\/?(?=")/g,
    replace: 'href="/es/servicios/"',
  },

  // --- Optional: kill 404 page links (send to language roots) ---
  { pattern: /href="\/en\/404\/?(?!")/g, replace: 'href="/en/"' },
  { pattern: /href="\/es\/404\/?(?!")/g, replace: 'href="/es/"' },

  // --- Fix bad absolute host and OG image filename ---
  {
    pattern: /https:\/\/www\.www\.nyenglishteacher\.com/g,
    replace: "https://www.nyenglishteacher.com",
  },
  {
    pattern: /new-york-english-og-wide\.jpg/g,
    replace: "new-york-english-og.jpg",
  },
];

async function findFiles() {
  const patterns = [
    "src/**/*.{astro,ts,tsx,md,mdx,html}",
    "content/**/*.{astro,ts,tsx,md,mdx,html}",
    "public/**/*.{astro,ts,tsx,md,mdx,html}",
  ];

  const files = [];
  for (const pattern of patterns) {
    try {
      const matches = await glob(pattern, { cwd: projectRoot });
      files.push(...matches.map((f) => path.resolve(projectRoot, f)));
    } catch (error) {
      // Directory might not exist, continue
    }
  }

  return [...new Set(files)]; // Remove duplicates
}

async function processFile(filePath) {
  try {
    const original = await fs.promises.readFile(filePath, "utf8");
    let content = original;

    // Apply all replacements
    for (const rule of replacements) {
      content = content.replace(rule.pattern, rule.replace);
    }

    if (content !== original) {
      if (whatIf) {
        console.log(`Would update: ${path.relative(projectRoot, filePath)}`);
      } else {
        await fs.promises.writeFile(filePath, content, "utf8");
        console.log(`Updated: ${path.relative(projectRoot, filePath)}`);
      }
      return true;
    }

    return false;
  } catch (error) {
    console.warn(
      `Skipping unreadable file: ${path.relative(projectRoot, filePath)} - ${error.message}`,
    );
    return false;
  }
}

async function main() {
  console.log(`Fix Links Script ${whatIf ? "(DRY RUN)" : ""}`);
  console.log("Finding files...");

  const files = await findFiles();
  console.log(`Found ${files.length} files to process`);

  let updated = 0;

  for (const file of files) {
    if (await processFile(file)) {
      updated++;
    }
  }

  if (whatIf) {
    console.log(`Done. Files to be updated: ${updated}`);
  } else {
    console.log(`Done. Files updated: ${updated}`);
  }
}

// Run the script
main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
