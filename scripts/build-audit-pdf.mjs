#!/usr/bin/env node
/**
 * Generate the lead-magnet PDFs from their print layouts.
 *
 *   Corporate English Training Audit  src/data/corporate-audit.ts
 *     -> src/pages/print/corporate-audit/[lang].astro
 *   From Correct to Connected         src/data/connected-english-guide.ts
 *     -> src/pages/print/connected-english/[lang].astro
 *
 * The print pages use inline CSS only, so headless Chrome can print them
 * straight from dist/ with no server.
 *
 * Usage (PowerShell or bash), after `npm run build`:
 *   node scripts/build-audit-pdf.mjs
 *
 * Writes the filenames api/corporate-guide/download.ts links (PDF_PATH), so
 * delivery emails keep working. Pass a print route to build only that guide:
 *   node scripts/build-audit-pdf.mjs connected-english
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

const GUIDES = [
  { route: "corporate-audit", file: "Corporate_English_Audit" },
  { route: "connected-english", file: "From_Correct_to_Connected" },
];
const only = process.argv[2];
const jobs = GUIDES.filter((g) => !only || g.route === only);
if (!jobs.length) {
  console.error(`Unknown guide "${only}". Known: ${GUIDES.map((g) => g.route).join(", ")}`);
  process.exit(1);
}

for (const { route, file } of jobs) for (const lang of ["en", "es"]) {
  const src = resolve(`dist/print/${route}/${lang}/index.html`);
  if (!existsSync(src)) {
    console.error(`Missing ${src}. Run \`npm run build\` first.`);
    process.exit(1);
  }
  const out = resolve(`public/downloads/${file}_${lang.toUpperCase()}.pdf`);
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
    console.error(`PDF for ${route}/${lang} looks wrong (${size} bytes): ${out}`);
    process.exit(1);
  }
  console.log(`${route}/${lang}: ${out} (${Math.round(size / 1024)} KB)`);
}
