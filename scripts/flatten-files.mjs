// flatten-export.mjs
// Node.js script to flatten project files into a timestamped folder with smart renaming + CSV map

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
const sourceDir = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng";
const baseDest  = "C:/Users/Robert Cushman/.vscode/Projects/copied-files-ny-eng";

// Exclude/include rules
const excludeDirs = [
  "node_modules", "dist", "build", "out",
  ".git", ".vscode", ".idea",
  ".lighthouseci", "archive", "project-reports",
  "public/images", "src/assets/images", "src/content/blog/images",
  "src/pages/dev"
];
const includeExts = [
  ".astro", ".ts", ".tsx", ".mjs", ".cjs",
  ".js", ".jsx", ".json", ".css",
  ".md", ".txt", ".yml", ".yaml",
  ".config", ".toml"
];
const excludeExts = [
  ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".svg", ".ico",
  ".mp4", ".avi", ".mov", ".mp3", ".wav", ".flac",
  ".zip", ".rar", ".7z", ".gz", ".pdf",
  ".log", ".tmp", ".cache", ".lock", ".bak"
];
const genericNames = [
  "index.astro", "layout.astro", "page.astro",
  "index.ts", "layout.ts", "page.ts",
  "index.tsx", "layout.tsx", "page.tsx",
  "styles.css"
];

// Helpers
function shouldExclude(filePath, relPath) {
  if (excludeDirs.some(dir => relPath.startsWith(dir))) return true;
  if (excludeExts.includes(path.extname(filePath).toLowerCase())) return true;
  if (!includeExts.includes(path.extname(filePath).toLowerCase())) return true;
  return false;
}

// Create timestamped destination
const timestamp = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];
const destDir = path.join(baseDest, timestamp);
fs.mkdirSync(destDir, { recursive: true });

let copied = 0;
let errors = 0;
const nameTracker = new Map();
const mapEntries = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(sourceDir, fullPath).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      if (excludeDirs.some(d => relPath.startsWith(d))) continue;
      walk(fullPath);
    } else {
      if (shouldExclude(fullPath, relPath)) continue;

      let baseName = entry.name;
      if (genericNames.includes(baseName.toLowerCase())) {
        const parent = path.basename(path.dirname(fullPath));
        baseName = `${parent}-${baseName}`;
      }

      let finalName = baseName;
      const key = baseName.toLowerCase();
      if (nameTracker.has(key)) {
        const count = nameTracker.get(key) + 1;
        nameTracker.set(key, count);
        const ext = path.extname(baseName);
        const stem = path.basename(baseName, ext);
        finalName = `${stem}_${count}${ext}`;
      } else {
        nameTracker.set(key, 1);
      }

      try {
        const targetPath = path.join(destDir, finalName);
        fs.copyFileSync(fullPath, targetPath);
        copied++;

        // Save map entry
        mapEntries.push({
          original: relPath,
          renamed: finalName,
          destination: targetPath
        });
      } catch (err) {
        console.warn(`Failed to copy ${relPath}: ${err.message}`);
        errors++;
      }
    }
  }
}

// Run
console.log("=== Flatten Export (MJS) ===");
console.log("Source:", sourceDir);
console.log("Destination:", destDir);

walk(sourceDir);

// Write CSV map
if (mapEntries.length > 0) {
  const csvPath = path.join(destDir, "file-map.csv");
  const header = "OriginalPath,RenamedFile,Destination\n";
  const rows = mapEntries
    .map(m => `"${m.original}","${m.renamed}","${m.destination}"`)
    .join("\n");
  fs.writeFileSync(csvPath, header + rows, "utf8");
  console.log(`File map written: ${csvPath}`);
}

console.log("Copied:", copied);
console.log("Errors:", errors);
console.log("Done.");
