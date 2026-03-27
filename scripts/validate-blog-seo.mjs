/**
 * Blog SEO Validator
 *
 * Pre-build QA gate that checks all blog posts for SEO compliance:
 * - Meta title ≤60 characters
 * - Meta description 120–160 characters
 * - Required frontmatter fields present
 * - No " | NY English Teacher" suffix in titles (Google adds site name automatically)
 *
 * Run: node scripts/validate-blog-seo.mjs
 * Exits with code 1 if any issues found.
 */

import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const blogDir = join(rootDir, "src", "content", "blog");

const MAX_TITLE_LENGTH = 60;
const MIN_DESC_LENGTH = 120;
const MAX_DESC_LENGTH = 160;

const REQUIRED_FIELDS = ["title", "excerpt", "publishDate", "categories"];

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const yaml = match[1];
  const data = {};
  const lines = yaml.split("\n");

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines and list items (handled by parent key)
    if (!line.trim() || /^\s+-/.test(line)) {
      i++;
      continue;
    }

    // Top-level key: value
    const kvMatch = line.match(/^(\w[\w.]*?):\s*(.*?)\s*$/);
    if (kvMatch && !line.startsWith("  ") && !line.startsWith("\t")) {
      const key = kvMatch[1];
      let value = kvMatch[2];

      // Strip YAML comments from values
      value = value.replace(/\s*#.*$/, "");
      // Strip surrounding quotes
      value = value.replace(/^["']|["']$/g, "");

      if (value === "" || value.startsWith("[")) {
        // Could be a block or inline list — check next lines for list items
        if (value.startsWith("[")) {
          // Inline list like ["a", "b"]
          data[key] = value;
        } else {
          // Check if next lines are list items or a nested block
          const nextLine = i + 1 < lines.length ? lines[i + 1] : "";
          if (/^\s+-/.test(nextLine)) {
            // It's a list — mark as present
            data[key] = "[list]";
          }
          // Otherwise it's a nested block (like seo:) — handled below
        }
      } else {
        data[key] = value;
      }
    }
    i++;
  }

  // Parse seo block
  const seoMatch = yaml.match(/^seo:\s*\r?\n((?:[ \t]+\S.*\r?\n?)*)/m);
  if (seoMatch) {
    data.seo = {};
    for (const line of seoMatch[1].split("\n")) {
      const seoKv = line.match(/^\s+(\w+):\s*(.*?)\s*$/);
      if (seoKv) {
        let val = seoKv[2].replace(/\s*#.*$/, "").replace(/^["']|["']$/g, "");
        data.seo[seoKv[1]] = val;
      }
    }
  }

  return data;
}

async function getMarkdownFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getMarkdownFiles(fullPath)));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  const files = await getMarkdownFiles(blogDir);
  const errors = [];
  const warnings = [];
  let checked = 0;

  for (const file of files) {
    const relPath = file.replace(rootDir + "\\", "").replace(rootDir + "/", "");
    const content = await readFile(file, "utf-8");
    const data = parseFrontmatter(content);

    if (!data) {
      errors.push(`${relPath}: No frontmatter found`);
      continue;
    }

    checked++;

    // Check required fields
    for (const field of REQUIRED_FIELDS) {
      if (!data[field]) {
        errors.push(`${relPath}: Missing required field "${field}"`);
      }
    }

    // Determine the effective title (seo.title takes precedence)
    const effectiveTitle = data.seo?.title || data.title || "";

    // Check title length
    if (effectiveTitle.length > MAX_TITLE_LENGTH) {
      errors.push(
        `${relPath}: Title too long (${effectiveTitle.length}/${MAX_TITLE_LENGTH} chars): "${effectiveTitle}"`
      );
    }

    // Check for manual site name suffix
    if (effectiveTitle.includes("| NY English Teacher")) {
      errors.push(
        `${relPath}: Title contains "| NY English Teacher" — Google adds site name automatically, remove it`
      );
    }

    // Check description length
    const effectiveDesc = data.seo?.description || data.excerpt || "";
    if (effectiveDesc.length > MAX_DESC_LENGTH) {
      errors.push(
        `${relPath}: Description too long (${effectiveDesc.length}/${MAX_DESC_LENGTH} chars): "${effectiveDesc.slice(0, 80)}..."`
      );
    }
    if (effectiveDesc.length > 0 && effectiveDesc.length < MIN_DESC_LENGTH) {
      warnings.push(
        `${relPath}: Description short (${effectiveDesc.length}/${MIN_DESC_LENGTH} chars) — aim for 120-160`
      );
    }
  }

  // Report
  console.log(`\nChecked ${checked} blog posts\n`);

  if (warnings.length > 0) {
    console.log(`Warnings (${warnings.length}):`);
    for (const w of warnings) {
      console.log(`  WARNING: ${w}`);
    }
    console.log();
  }

  if (errors.length > 0) {
    console.log(`Errors (${errors.length}):`);
    for (const e of errors) {
      console.log(`  ERROR: ${e}`);
    }
    console.log("\nFix the errors above before deploying.\n");
    process.exit(1);
  }

  console.log("All blog posts pass SEO validation!\n");
}

main().catch((err) => {
  console.error("SEO validator crashed:", err);
  process.exit(1);
});
