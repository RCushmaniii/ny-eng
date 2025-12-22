#!/usr/bin/env node

/**
 * Project Structure Generator for AI Analysis
 * Generates a filtered project structure showing only AI-relevant files
 * Outputs to the quiz export folder for easy sharing
 */

import {
  readdirSync,
  statSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "fs";
import { join, relative, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const PROJECT_PATH = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng";
const OUTPUT_FOLDER =
  "C:/Users/Robert Cushman/.vscode/Projects/quiz-lead-magnet-export";
const MAX_DEPTH = 5;

// Folders to EXCLUDE from structure
const EXCLUDE_FOLDERS = [
  "node_modules",
  "dist",
  "build",
  "out",
  ".next",
  ".nuxt",
  ".git",
  ".svn",
  ".hg",
  "bin",
  "obj",
  "packages",
  "coverage",
  ".nyc_output",
  "logs",
  ".cache",
  ".temp",
  "tmp",
  ".vscode",
  ".idea",
  "__pycache__",
  ".pytest_cache",
  "public",
  "static",
  "assets",
  "images",
  "img",
];

// File extensions to INCLUDE (only files helpful for AI code understanding)
const INCLUDE_EXTENSIONS = [
  // Source code files
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".vue",
  ".svelte",
  ".astro",
  ".py",
  ".java",
  ".c",
  ".cpp",
  ".cs",
  ".php",
  ".rb",
  ".go",
  ".rs",
  ".html",
  ".htm",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".sql",
  ".graphql",
  ".gql",

  // Configuration files
  ".json",
  ".xml",
  ".yaml",
  ".yml",
  ".toml",
  ".ini",
  ".conf",
  ".config",
  ".env",
  ".mjs",
  ".cjs",

  // Documentation and text files
  ".md",
  ".txt",
  ".rst",
  ".adoc",

  // Build and project files
  ".dockerfile",
  ".gitignore",
  ".eslintrc",
  ".prettierrc",
  ".babelrc",
  ".npmrc",
  ".yarnrc",
];

// File extensions to EXCLUDE
const EXCLUDE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".webp",
  ".svg",
  ".ico",
  ".mp4",
  ".avi",
  ".mov",
  ".wmv",
  ".flv",
  ".webm",
  ".mp3",
  ".wav",
  ".flac",
  ".aac",
  ".ogg",
  ".exe",
  ".dll",
  ".so",
  ".dylib",
  ".bin",
  ".obj",
  ".o",
  ".zip",
  ".rar",
  ".7z",
  ".tar",
  ".gz",
  ".bz2",
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".log",
  ".tmp",
  ".cache",
  ".lock",
  ".pid",
  ".swp",
  ".bak",
];

// Important files without extensions
const IMPORTANT_FILES = [
  "dockerfile",
  "makefile",
  "rakefile",
  "gemfile",
  "gulpfile",
  "gruntfile",
  "readme",
  "license",
  "changelog",
];

/**
 * Check if a file should be included
 */
function shouldIncludeFile(fileName, fileExt) {
  // Check if file extension should be excluded
  if (EXCLUDE_EXTENSIONS.includes(fileExt.toLowerCase())) {
    return false;
  }

  const lowerName = fileName.toLowerCase();
  const lowerExt = fileExt.toLowerCase();

  // Check if it's an important file without extension
  const isImportant = IMPORTANT_FILES.some((important) =>
    lowerName.includes(important),
  );

  // Include if extension is in include list OR it's an important file
  return INCLUDE_EXTENSIONS.includes(lowerExt) || isImportant;
}

/**
 * Check if a folder should be excluded
 */
function shouldExcludeFolder(folderName) {
  const lowerName = folderName.toLowerCase();
  return EXCLUDE_FOLDERS.some((folder) => lowerName.includes(folder));
}

/**
 * Write project structure recursively
 */
function writeProjectStructure(path, level = 0, maxDepth = MAX_DEPTH) {
  // Stop if we've reached max depth
  if (level > maxDepth) {
    return [];
  }

  const lines = [];
  const prefix = "    ".repeat(level);

  let items;
  try {
    items = readdirSync(path, { withFileTypes: true });
  } catch (err) {
    return lines;
  }

  // Filter items
  const filteredItems = items.filter((item) => {
    if (item.isDirectory()) {
      return !shouldExcludeFolder(item.name);
    } else {
      const ext = extname(item.name);
      return shouldIncludeFile(item.name, ext);
    }
  });

  // Sort: directories first, then files, alphabetically
  filteredItems.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  const itemCount = filteredItems.length;
  for (let i = 0; i < itemCount; i++) {
    const item = filteredItems[i];
    const isLast = i === itemCount - 1;
    const linePrefix = prefix + (isLast ? "+-- " : "|-- ");

    if (item.isDirectory()) {
      lines.push(`${linePrefix}${item.name}/`);
      const subPath = join(path, item.name);
      const subLines = writeProjectStructure(subPath, level + 1, maxDepth);
      lines.push(...subLines);
    } else {
      lines.push(`${linePrefix}${item.name}`);
    }
  }

  return lines;
}

/**
 * Count relevant files for summary
 */
function countRelevantFiles(path, excludeFolders = EXCLUDE_FOLDERS) {
  let total = 0;
  let relevant = 0;

  function walk(dir, relPath = "") {
    let items;
    try {
      items = readdirSync(dir, { withFileTypes: true });
    } catch (err) {
      return;
    }

    for (const item of items) {
      const itemPath = join(dir, item.name);
      const itemRelPath = relPath ? `${relPath}/${item.name}` : item.name;

      if (item.isDirectory()) {
        // Check if folder should be excluded
        if (!shouldExcludeFolder(item.name)) {
          walk(itemPath, itemRelPath);
        }
      } else {
        total++;

        // Check if file is in excluded folder
        const inExcludedFolder = excludeFolders.some((folder) =>
          itemRelPath.toLowerCase().includes(folder.toLowerCase()),
        );

        if (!inExcludedFolder) {
          const ext = extname(item.name);
          if (shouldIncludeFile(item.name, ext)) {
            relevant++;
          }
        }
      }
    }
  }

  walk(path);
  return { total, relevant };
}

/**
 * Main execution
 */
function main() {
  console.log("🗂️  Project Structure Generator for AI Analysis");
  console.log("================================================");
  console.log(`Project: ${PROJECT_PATH}`);
  console.log(`Output: ${OUTPUT_FOLDER}`);
  console.log("");

  try {
    // Validate project path
    if (!existsSync(PROJECT_PATH)) {
      throw new Error(`Project path does not exist: ${PROJECT_PATH}`);
    }

    // Create output folder if it doesn't exist
    if (!existsSync(OUTPUT_FOLDER)) {
      console.log("📁 Creating output folder...");
      mkdirSync(OUTPUT_FOLDER, { recursive: true });
    }

    // Generate filename with date
    const date = new Date().toISOString().split("T")[0];
    const projectName = basename(PROJECT_PATH);
    const fileName = `project-structure-${projectName}-${date}.txt`;
    const reportPath = join(OUTPUT_FOLDER, fileName);

    console.log("🔍 Analyzing project structure...");

    // Count files for summary
    const { total, relevant } = countRelevantFiles(PROJECT_PATH);

    console.log("📝 Writing structure file...");

    // Build the content
    const lines = [];

    lines.push("Project Structure for AI Analysis");
    lines.push("=".repeat(50));
    lines.push(`Project: ${PROJECT_PATH}`);
    lines.push(
      `Generated: ${new Date().toISOString().replace("T", " ").split(".")[0]}`,
    );
    lines.push(`Max Depth: ${MAX_DEPTH} levels`);
    lines.push("");
    lines.push("Purpose: Shows only files useful for AI code understanding");
    lines.push("");
    lines.push("Legend:");
    lines.push("|-- File or folder");
    lines.push("+-- Last item in directory");
    lines.push("folder/ - Directory");
    lines.push("");
    lines.push("Includes:");
    lines.push(
      "- Source code files (.js, .ts, .astro, .py, .html, .css, etc.)",
    );
    lines.push("- Configuration files (.json, .env, .gitignore, etc.)");
    lines.push("- Documentation files (.md, .txt, etc.)");
    lines.push("- Build files (Dockerfile, Makefile, etc.)");
    lines.push("");
    lines.push("Excludes:");
    lines.push("- Images and media files");
    lines.push("- Binary and compiled files");
    lines.push("- Build artifacts (node_modules, dist, build, etc.)");
    lines.push("- Temporary and log files");
    lines.push("");
    lines.push("Project Structure:");
    lines.push("");

    // Write the actual structure
    const rootName = basename(PROJECT_PATH);
    lines.push(`${rootName}/`);
    const structureLines = writeProjectStructure(PROJECT_PATH);
    lines.push(...structureLines);

    // Add summary
    lines.push("");
    lines.push("Summary:");
    lines.push(`- Total files in project: ${total}`);
    lines.push(`- AI-relevant files shown: ${relevant}`);
    lines.push(`- Files excluded: ${total - relevant}`);
    lines.push(
      `- Generated: ${new Date().toISOString().replace("T", " ").split(".")[0]}`,
    );

    // Write to file
    writeFileSync(reportPath, lines.join("\n"), "utf8");

    console.log("");
    console.log("✅ Project structure generated successfully!");
    console.log(`📄 File saved to: ${reportPath}`);
    console.log(`📊 AI-relevant files: ${relevant} of ${total} total files`);
    console.log("");
    console.log("Done! 🎉");
  } catch (err) {
    console.error("❌ Error generating project structure:", err.message);
    process.exit(1);
  }
}

// Run the script
main();
