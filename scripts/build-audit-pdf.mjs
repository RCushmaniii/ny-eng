#!/usr/bin/env node
/**
 * Generate the Corporate English Training Audit PDFs from the print layout.
 *
 * Source of truth is src/data/corporate-audit.ts, rendered by
 * src/pages/print/corporate-audit/[lang].astro. The print page uses inline CSS
 * only, so headless Chrome can print it straight from dist/ with no server.
 *
 * Usage (PowerShell or bash), after `npm run build`:
 *   node scripts/build-audit-pdf.mjs
 *
 * Writes public/downloads/Corporate_English_Audit_{EN,ES}.pdf — the filenames
 * api/corporate-guide/download.ts already links, so delivery emails keep working.
 */
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.");
  process.exit(1);
}

for (const lang of ["en", "es"]) {
  const src = resolve(`dist/print/corporate-audit/${lang}/index.html`);
  if (!existsSync(src)) {
    console.error(`Missing ${src}. Run \`npm run build\` first.`);
    process.exit(1);
  }
  const out = resolve(`public/downloads/Corporate_English_Audit_${lang.toUpperCase()}.pdf`);
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${out}`,
      pathToFileURL(src).href,
    ],
    { stdio: "pipe" },
  );
  const size = existsSync(out) ? statSync(out).size : 0;
  if (size < 10_000) {
    console.error(`PDF for ${lang} looks wrong (${size} bytes): ${out}`);
    process.exit(1);
  }
  console.log(`${lang}: ${out} (${Math.round(size / 1024)} KB)`);
}
