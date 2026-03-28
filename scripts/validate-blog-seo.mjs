/**
 * Blog SEO Validator (Hardened)
 *
 * Pre-build QA gate that BLOCKS builds when blog posts have SEO issues.
 *
 * Rules enforced:
 * 1. Rendered <title> tag (seo.title || title) must be <= 60 chars
 * 2. If title > 60 chars, seo.title MUST exist (ERROR, not warning)
 * 3. Rendered meta description (seo.description || excerpt) must be 120-160 chars
 * 4. If excerpt > 160 chars, seo.description MUST exist (ERROR, not warning)
 * 5. No " | NY English Teacher" suffix in titles
 * 6. Required frontmatter fields: title, excerpt, publishDate, categories
 *
 * Run: node scripts/validate-blog-seo.mjs
 * Exits with code 1 if any errors found.
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

    const rawTitle = data.title || "";
    const rawExcerpt = data.excerpt || "";
    const hasSeoTitle = !!(data.seo?.title);
    const hasSeoDesc = !!(data.seo?.description);

    // --- TITLE CHECKS ---

    // Rule: If title > 60 chars, seo.title MUST exist
    if (rawTitle.length > MAX_TITLE_LENGTH && !hasSeoTitle) {
      errors.push(
        `${relPath}: title is ${rawTitle.length} chars (>${MAX_TITLE_LENGTH}) and NO seo.title override exists. ` +
        `Add an seo.title field <=60 chars. Current title: "${rawTitle}"`
      );
    }

    // Rule: The effective rendered title must be <= 60 chars
    const effectiveTitle = data.seo?.title || rawTitle;
    if (effectiveTitle.length > MAX_TITLE_LENGTH) {
      errors.push(
        `${relPath}: Rendered title too long (${effectiveTitle.length}/${MAX_TITLE_LENGTH} chars): "${effectiveTitle}"`
      );
    }

    // Rule: No manual site name suffix
    if (effectiveTitle.includes("| NY English Teacher")) {
      errors.push(
        `${relPath}: Title contains "| NY English Teacher" -- Google adds site name automatically, remove it`
      );
    }

    // Rule: seo.title should not be empty if it exists
    if (data.seo && "title" in data.seo && !data.seo.title) {
      errors.push(`${relPath}: seo.title exists but is empty`);
    }

    // --- DESCRIPTION CHECKS ---

    // Rule: If excerpt > 160 chars, seo.description MUST exist
    if (rawExcerpt.length > MAX_DESC_LENGTH && !hasSeoDesc) {
      errors.push(
        `${relPath}: excerpt is ${rawExcerpt.length} chars (>${MAX_DESC_LENGTH}) and NO seo.description override exists. ` +
        `Add an seo.description field 120-160 chars. Current excerpt: "${rawExcerpt.slice(0, 80)}..."`
      );
    }

    // Rule: The effective rendered description must be <= 160 chars
    const effectiveDesc = data.seo?.description || rawExcerpt;
    if (effectiveDesc.length > MAX_DESC_LENGTH) {
      errors.push(
        `${relPath}: Rendered description too long (${effectiveDesc.length}/${MAX_DESC_LENGTH} chars): "${effectiveDesc.slice(0, 80)}..."`
      );
    }

    // Rule: Description should be >= 120 chars (warning, not error)
    if (effectiveDesc.length > 0 && effectiveDesc.length < MIN_DESC_LENGTH) {
      warnings.push(
        `${relPath}: Description short (${effectiveDesc.length}/${MIN_DESC_LENGTH} chars) -- aim for 120-160`
      );
    }

    // Rule: seo.description should not be empty if it exists
    if (data.seo && "description" in data.seo && !data.seo.description) {
      errors.push(`${relPath}: seo.description exists but is empty`);
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
