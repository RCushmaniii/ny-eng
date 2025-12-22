// seo-audit.mjs
import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";
import { glob } from "glob";

// SETTINGS – adjust as needed
const ROOT = path.resolve("./src/pages");
const PATTERNS = ["**/*.{astro,md,mdx}"];
const IGNORE_PATTERNS = [
  "**/node_modules/**",
  "**/.git/**",
  "**/dist/**",
  "**/components/**",
  "**/widgets/**",
  "index.astro", // Ignore the root redirect file
  "**/*\\[*].astro", // Ignore files with [ ] like [slug].astro
  "**/*\\[...*].astro", // Ignore files with [...] like [...slug].astro
  "404.astro", // Ignore 404 page (verified manually)
  "**/blog/index.astro", // Ignore blog indexes (verified manually)
];
const TITLE_LIMIT = 60; // Strict for SEO (brand appended automatically)
const DESC_MIN = 80;
const DESC_MAX = 155;

// --- REGEX DEFINITIONS ---
const METADATA_OBJECT_RE = /metadata\s*=\s*{([\s\S]*?)}/m;
const TITLE_PROP_RE = /title\s*:\s*["'`](.*?)["'`]/m; // Added 'm' flag for multiline
const DESC_PROP_RE = /description\s*:\s*["'`](.*?)["'`]/m; // Added 'm' flag for multiline
const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---/m;
const ASTRO_VAR_RE = (key) =>
  new RegExp(
    `(?:export\\s+const\\s+|\\b)${key}\\s*[:=]\\s*["'\`](.*?)["'\`;]`,
    "is",
  ); // Added 's' flag
const TITLE_TAG_RE = /<title>([^<]+)<\/title>/i;
const META_DESC_RE =
  /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i;
const H1_TAG_RE = /<h1[\s>]/gi;
const H1_MARKDOWN_RE = /^#\s/gim;

// --- EXTRACTION HELPERS ---

/**
 * Extracts title and description from a 'metadata' object in the content.
 * @param {string} content - The file content.
 * @returns {{title: string|undefined, description: string|undefined}}
 */
function extractMetadataObject(content) {
  const metaObjMatch = content.match(METADATA_OBJECT_RE);
  if (!metaObjMatch) return {};

  const objectContent = metaObjMatch[1];
  const titleMatch = objectContent.match(TITLE_PROP_RE);
  const descMatch = objectContent.match(DESC_PROP_RE);

  return {
    title: titleMatch?.[1]?.replace(/\s+/g, " ").trim(),
    description: descMatch?.[1]?.replace(/\s+/g, " ").trim(),
  };
}

/**
 * Parses YAML frontmatter from Markdown or MDX content.
 * @param {string} content - The file content.
 * @returns {object} The parsed frontmatter object.
 */
function parseFrontmatter(content) {
  const match = content.match(FRONTMATTER_RE);
  return match ? yaml.load(match[1]) : {};
}

/**
 * Extracts a variable from Astro file content using a robust regex.
 * @param {string} key - The variable name to extract (e.g., 'title').
 * @param {string} content - The file content.
 * @returns {string|undefined} The extracted value.
 */
function extractAstroVar(key, content) {
  const match = content.match(ASTRO_VAR_RE(key));
  return match?.[1].replace(/\s+/g, " ").trim();
}

// --- FILE PROCESSING ---

/**
 * Audits a single file for SEO best practices.
 * @param {string} filepath - The absolute path to the file.
 */
async function checkFile(filepath) {
  try {
    const content = await fs.readFile(filepath, "utf8");
    const ext = path.extname(filepath);

    let title, metaDesc;

    if (ext === ".astro") {
      const metadata = extractMetadataObject(content);
      title = metadata.title;
      metaDesc = metadata.description;

      if (!title) title = extractAstroVar("title", content);
      if (!metaDesc) metaDesc = extractAstroVar("description", content);

      if (!title) title = content.match(TITLE_TAG_RE)?.[1];
      if (!metaDesc) metaDesc = content.match(META_DESC_RE)?.[1];
    } else if (ext === ".md" || ext === ".mdx") {
      const fm = parseFrontmatter(content);
      title = fm.title;
      metaDesc = fm.description || fm.excerpt;
    }

    const report = new AuditReport(filepath);

    const h1Count =
      (content.match(H1_TAG_RE)?.length || 0) +
      (content.match(H1_MARKDOWN_RE)?.length || 0);
    if (h1Count > 1) {
      report.addIssue("H1", `Multiple <h1> tags found (${h1Count})`);
    }

    if (!title?.trim()) {
      report.addIssue("Title", "Missing title");
    } else if (title.length > TITLE_LIMIT) {
      report.addIssue(
        "Title",
        `Title too long (${title.length}/${TITLE_LIMIT})`,
        title,
      );
    }

    if (!metaDesc?.trim()) {
      report.addIssue("Description", "Missing meta description");
    } else {
      if (metaDesc.length < DESC_MIN) {
        report.addIssue(
          "Description",
          `Description too short (${metaDesc.length}/${DESC_MIN})`,
          metaDesc,
        );
      }
      if (metaDesc.length > DESC_MAX) {
        report.addIssue(
          "Description",
          `Description too long (${metaDesc.length}/${DESC_MAX})`,
          metaDesc,
        );
      }
    }

    report.print();
  } catch (error) {
    console.error(`\n🚨 Error processing ${filepath}:\n   ${error.message}`);
  }
}

// --- REPORTING UTILITY ---

class AuditReport {
  constructor(filepath) {
    this.filepath = path.relative(process.cwd(), filepath);
    this.issues = [];
  }

  addIssue(type, message, context = "") {
    this.issues.push({ type, message, context });
  }

  print() {
    if (this.issues.length === 0) return;

    console.log(`\n🔴 Found issues in ${this.filepath}`);
    this.issues.forEach(({ type, message, context }) => {
      let log = `   [${type}] ${message}`;
      if (context) {
        log += `\n     └─ "${context}"`;
      }
      console.log(log);
    });
  }
}

// --- MAIN EXECUTION ---

async function runAudit() {
  console.log("🚀 Starting SEO meta tag audit...");
  const files = await glob(PATTERNS, {
    cwd: ROOT,
    absolute: true,
    ignore: IGNORE_PATTERNS,
  });

  if (files.length === 0) {
    console.log("\n✅ All pages passed the audit!");
    return;
  }

  await Promise.all(files.map(checkFile));

  console.log("\n✅ Audit complete.");
}

runAudit().catch(console.error);
