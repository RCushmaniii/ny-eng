/**
 * Pre-build script: Generate PDFs before Astro build
 * 
 * Smart caching: Only regenerates PDFs when JSON content changes
 * This runs automatically before `npm run build` to ensure
 * all static PDF files are up-to-date with the latest content.
 */

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { statSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Define your PDF resources here
const pdfResources = [
  {
    name: '5 Questions Senior Guide',
    jsonPath: 'src/data/free/5-questions-content.json',
    pdfPath: 'public/assets/documents/5-questions-senior-guide.pdf',
    script: 'python scripts/generate-5-questions-pdf.py'
  },
  // Add more resources here as you create them:
  // {
  //   name: 'Email Templates',
  //   jsonPath: 'src/data/free/email-templates-content.json',
  //   pdfPath: 'public/assets/documents/email-templates-guide.pdf',
  //   script: 'python scripts/generate-email-templates-pdf.py'
  // },
];

/**
 * Check if PDF needs regeneration
 * Returns true if JSON is newer than PDF or PDF doesn't exist
 */
function needsRegeneration(jsonPath, pdfPath) {
  const fullJsonPath = join(rootDir, jsonPath);
  const fullPdfPath = join(rootDir, pdfPath);
  
  // If PDF doesn't exist, regenerate
  if (!existsSync(fullPdfPath)) {
    return true;
  }
  
  // If JSON doesn't exist, skip (error will be caught later)
  if (!existsSync(fullJsonPath)) {
    return false;
  }
  
  // Compare modification times
  const jsonMtime = statSync(fullJsonPath).mtime.getTime();
  const pdfMtime = statSync(fullPdfPath).mtime.getTime();
  
  return jsonMtime > pdfMtime;
}

console.log('🔄 Checking PDFs for updates...\n');

let generated = 0;
let skipped = 0;
let failed = 0;

for (const resource of pdfResources) {
  try {
    if (needsRegeneration(resource.jsonPath, resource.pdfPath)) {
      console.log(`📝 Generating: ${resource.name}`);
      execSync(resource.script, {
        cwd: rootDir,
        stdio: 'inherit'
      });
      generated++;
    } else {
      console.log(`⏭️  Skipped: ${resource.name} (up to date)`);
      skipped++;
    }
  } catch (error) {
    console.error(`\n❌ Failed to generate: ${resource.name}`);
    console.error(`   Error: ${error.message}`);
    failed++;
    // Continue with other resources
  }
}

console.log('\n' + '='.repeat(80));
console.log('📊 PDF Generation Summary:');
console.log(`   ✅ Generated: ${generated}`);
console.log(`   ⏭️  Skipped: ${skipped} (already up to date)`);
if (failed > 0) {
  console.log(`   ❌ Failed: ${failed}`);
}
console.log('='.repeat(80));

if (failed > 0) {
  console.warn('\n⚠️  Some PDFs failed to generate. Build will continue, but PDFs may be outdated.');
} else if (generated === 0 && skipped > 0) {
  console.log('\n✅ All PDFs are up to date!');
} else {
  console.log('\n✅ PDF generation complete!');
}
