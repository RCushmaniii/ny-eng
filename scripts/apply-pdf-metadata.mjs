/**
 * PDF Metadata Normalization Script
 *
 * This script reads metadata from JSON files in src/data/free/ and applies
 * that metadata directly to the corresponding PDF files in public/assets/documents/.
 *
 * Uses pdf-lib (pure JavaScript) to write real PDF metadata so that:
 * - Chrome shows meaningful titles instead of "Anonymous"
 * - Search engines can read PDF metadata
 * - Metadata is embedded inside the PDF itself
 *
 * Usage:
 *   node scripts/apply-pdf-metadata.mjs [--dry-run] [--verbose]
 *
 * Options:
 *   --dry-run   Show what would be done without modifying files
 *   --verbose   Show detailed output for each file
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { PDFDocument } from 'pdf-lib';

// Get script directory and project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

// Configuration paths (Windows-safe using path.join)
const JSON_DIR = join(PROJECT_ROOT, 'src', 'data', 'free');
const PDF_DIR = join(PROJECT_ROOT, 'public', 'assets', 'documents');

// Fixed author for all PDFs
const AUTHOR = 'Robert Cushman';

// Parse command-line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const VERBOSE = args.includes('--verbose');

/**
 * Discovers all JSON files in the metadata directory.
 * Excludes schema.json as it's not a content file.
 *
 * @returns {Promise<string[]>} Array of JSON filenames (without path)
 */
async function discoverJsonFiles() {
  const files = await readdir(JSON_DIR);
  return files.filter(f =>
    f.endsWith('.json') &&
    f !== 'schema.json'
  );
}

/**
 * Infers the PDF filename from a JSON filename.
 * The convention is: JSON and PDF share the same base name.
 *
 * @param {string} jsonFilename - The JSON filename (e.g., "5-principles-executive-english.json")
 * @returns {string} The PDF filename (e.g., "5-principles-executive-english.pdf")
 */
function inferPdfFilename(jsonFilename) {
  return jsonFilename.replace('.json', '.pdf');
}

/**
 * Extracts metadata fields from a JSON content object.
 * Prioritizes English title and description, with fallbacks.
 *
 * @param {object} jsonData - Parsed JSON content
 * @returns {{title: string, subject: string, keywords: string[]}}
 */
function extractMetadata(jsonData) {
  // Title: prefer en.title, fall back to metadata.id
  const title = jsonData.en?.title ||
                jsonData.metadata?.id?.replace(/-/g, ' ') ||
                'Untitled';

  // Subject/Description: prefer en.description, fall back to seo.metaDescription
  const subject = jsonData.en?.description ||
                  jsonData.seo?.metaDescription ||
                  '';

  // Keywords from SEO or tags
  const keywords = jsonData.seo?.keywords ||
                   jsonData.classification?.tags ||
                   [];

  return { title, subject, keywords };
}

/**
 * Reads current PDF metadata to check if update is needed.
 * Returns null if PDF cannot be read.
 *
 * @param {Buffer} pdfBytes - PDF file contents
 * @returns {Promise<{title: string|null, author: string|null, subject: string|null}>}
 */
async function getCurrentMetadata(pdfBytes) {
  try {
    const pdfDoc = await PDFDocument.load(pdfBytes, {
      ignoreEncryption: true,
      updateMetadata: false
    });
    return {
      title: pdfDoc.getTitle() || null,
      author: pdfDoc.getAuthor() || null,
      subject: pdfDoc.getSubject() || null
    };
  } catch {
    return { title: null, author: null, subject: null };
  }
}

/**
 * Checks if metadata needs updating based on current values.
 *
 * @param {object} current - Current PDF metadata
 * @param {object} desired - Desired metadata
 * @returns {boolean} True if update is needed
 */
function needsUpdate(current, desired) {
  // Update if any field is missing or empty
  if (!current.title || current.title.trim() === '') return true;
  if (!current.author || current.author.trim() === '' || current.author === 'Anonymous') return true;
  if (!current.subject || current.subject.trim() === '') return true;

  // Also update if values don't match desired
  if (current.title !== desired.title) return true;
  if (current.author !== AUTHOR) return true;
  if (current.subject !== desired.subject) return true;

  return false;
}

/**
 * Applies metadata to a PDF file using pdf-lib.
 *
 * @param {string} pdfPath - Full path to the PDF file
 * @param {object} metadata - Metadata to apply {title, subject, keywords}
 * @returns {Promise<{updated: boolean, reason: string}>}
 */
async function applyMetadataToPdf(pdfPath, metadata) {
  // Read the PDF file
  const pdfBytes = await readFile(pdfPath);

  // Check current metadata
  const current = await getCurrentMetadata(pdfBytes);

  if (VERBOSE) {
    console.log(`    Current: title="${current.title}", author="${current.author}"`);
    console.log(`    Desired: title="${metadata.title}", author="${AUTHOR}"`);
  }

  // Check if update is needed
  if (!needsUpdate(current, metadata)) {
    return { updated: false, reason: 'Metadata already correct' };
  }

  if (DRY_RUN) {
    return { updated: true, reason: 'Would update (dry-run)' };
  }

  // Load the PDF for modification
  const pdfDoc = await PDFDocument.load(pdfBytes, {
    ignoreEncryption: true
  });

  // Apply metadata
  pdfDoc.setTitle(metadata.title);
  pdfDoc.setAuthor(AUTHOR);
  pdfDoc.setSubject(metadata.subject);

  if (metadata.keywords.length > 0) {
    pdfDoc.setKeywords(metadata.keywords);
  }

  // Set producer and creator info
  pdfDoc.setProducer('NY English Teacher');
  pdfDoc.setCreator('NY English Teacher - www.nyenglishteacher.com');

  // Set modification date to now
  pdfDoc.setModificationDate(new Date());

  // Save the modified PDF
  const modifiedPdfBytes = await pdfDoc.save();
  await writeFile(pdfPath, modifiedPdfBytes);

  return { updated: true, reason: 'Metadata applied successfully' };
}

/**
 * Main function - processes all JSON/PDF pairs.
 */
async function main() {
  console.log('='.repeat(60));
  console.log('PDF Metadata Normalization Script');
  console.log('='.repeat(60));

  if (DRY_RUN) {
    console.log('\n** DRY RUN MODE - No files will be modified **\n');
  }

  console.log(`JSON directory: ${JSON_DIR}`);
  console.log(`PDF directory:  ${PDF_DIR}\n`);

  // Discover JSON files
  const jsonFiles = await discoverJsonFiles();
  console.log(`Found ${jsonFiles.length} JSON metadata files\n`);

  // Track statistics
  let processed = 0;
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  // Process each JSON file
  for (const jsonFile of jsonFiles) {
    const jsonPath = join(JSON_DIR, jsonFile);
    const pdfFilename = inferPdfFilename(jsonFile);
    const pdfPath = join(PDF_DIR, pdfFilename);

    console.log(`Processing: ${jsonFile}`);

    // Check if PDF exists
    if (!existsSync(pdfPath)) {
      console.log(`  SKIP: PDF not found (${pdfFilename})\n`);
      skipped++;
      continue;
    }

    try {
      // Read and parse JSON
      const jsonContent = await readFile(jsonPath, 'utf-8');
      const jsonData = JSON.parse(jsonContent);

      // Extract metadata from JSON
      const metadata = extractMetadata(jsonData);

      if (VERBOSE) {
        console.log(`  Title: "${metadata.title}"`);
        console.log(`  Subject: "${metadata.subject.substring(0, 60)}..."`);
      }

      // Apply metadata to PDF
      const result = await applyMetadataToPdf(pdfPath, metadata);

      if (result.updated) {
        console.log(`  UPDATED: ${result.reason}`);
        updated++;
      } else {
        console.log(`  OK: ${result.reason}`);
      }

      processed++;
    } catch (error) {
      console.log(`  ERROR: ${error.message}`);
      errors++;
    }

    console.log('');
  }

  // Summary
  console.log('='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Total JSON files:  ${jsonFiles.length}`);
  console.log(`Processed:         ${processed}`);
  console.log(`Updated:           ${updated}`);
  console.log(`Skipped (no PDF):  ${skipped}`);
  console.log(`Errors:            ${errors}`);

  if (DRY_RUN && updated > 0) {
    console.log(`\nRun without --dry-run to apply changes.`);
  }

  // Exit with error code if there were errors
  if (errors > 0) {
    process.exit(1);
  }
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
