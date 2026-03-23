#!/usr/bin/env node
/**
 * Google Indexing API Batch Submission Scheduler
 *
 * Google Indexing API has a daily quota (~200 requests, but we stay conservative at 30/day).
 * This script submits unindexed URLs in daily batches, prioritizing core pages first.
 *
 * Usage:
 *   node scripts/seo/google-batch-schedule.mjs --day 1    # Submit batch 1
 *   node scripts/seo/google-batch-schedule.mjs --day 2    # Submit batch 2
 *   node scripts/seo/google-batch-schedule.mjs --plan      # Show schedule without submitting
 */

import { getAuthClient, detectSiteProperty, SITE_URL } from './gsc-client.mjs';
import { google } from 'googleapis';

const BATCH_SIZE = 30;

const args = process.argv.slice(2);
const dayArg = args.includes('--day') ? parseInt(args[args.indexOf('--day') + 1]) : null;
const planOnly = args.includes('--plan');

// Hardcoded list of unindexed URLs as of 2026-03-23 GSC inspection.
// /es/contacto/ already submitted as test — included here for completeness.
// /en/blog/5-practical-ways-to-boost-business-english/ excluded (canonical alternate, not a true indexing issue).
const UNINDEXED_URLS = [
  // Core pages first (highest priority)
  '/es/contacto/',
  '/en/resources/',
  '/es/recursos/',
  // EN blog posts — "Crawled, not indexed" (higher priority — Google saw them but didn't index)
  '/en/blog/4-secrets-executives-use/',
  '/en/blog/real-cost-weak-english-mexican-companies/',
  // EN blog posts — "Unknown to Google" or "Discovered, not indexed"
  '/en/blog/boost-eng-confidence/',
  '/en/blog/customs-freight-english/',
  '/en/blog/daily-standup-english/',
  '/en/blog/email-phrases-that-make-you-sound-junior/',
  '/en/blog/english-nearshore-developers-skills/',
  '/en/blog/how-to-negotiate-in-english-framework/',
  '/en/blog/lead-meeting-english-phrases/',
  '/en/blog/slack-english-write-like-a-pro/',
  '/en/blog/us-interview-prep/',
  '/en/blog/why-senior-developers-need-advanced-english/',
  // ES blog posts — "Crawled, not indexed"
  '/es/blog/4-secretos-que-usan-los-ejecutivos/',
  '/es/blog/5-formas-practicas-mejorar-ingles-negocios/',
  '/es/blog/coaching-ejecutivo/',
  '/es/blog/costo-real-ingles-debil-empresas-mexicanas/',
  '/es/blog/presencia-ejecutiva-en-videollamadas/',
  // ES blog posts — "Unknown to Google" or "Discovered, not indexed"
  '/es/blog/aumentar-confianza/',
  '/es/blog/como-negociar-en-ingles-marco/',
  '/es/blog/dirigir-reuniones-ingles-frases/',
  '/es/blog/ejercicios-reformulacion-ejecutiva/',
  '/es/blog/entrevista-trabajo-empresa-americana/',
  '/es/blog/frases-email-que-te-hacen-sonar-junior/',
  '/es/blog/ingles-aduanas-comercio-exterior/',
  '/es/blog/ingles-desarrolladores-nearshore-habilidades/',
  '/es/blog/ingles-para-daily-standup-frases/',
  '/es/blog/ingles-para-slack-profesional/',
  '/es/blog/manual-comunicacion-ejecutiva/',
  '/es/blog/por-que-desarrolladores-senior-necesitan-ingles-avanzado/',
];

async function submitUrl(indexing, url) {
  try {
    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url,
        type: 'URL_UPDATED',
      },
    });
    const status = res.data.urlNotificationMetadata?.latestUpdate?.type || 'submitted';
    console.log(`  ✓ ${url.replace(SITE_URL, '')} → ${status}`);
    return true;
  } catch (err) {
    const msg = err.response?.data?.error?.message || err.message;
    console.log(`  ✗ ${url.replace(SITE_URL, '')} → ${msg}`);
    return false;
  }
}

async function main() {
  const fullUrls = UNINDEXED_URLS.map(p => `${SITE_URL}${p}`);

  // Split into batches
  const batches = [];
  for (let i = 0; i < fullUrls.length; i += BATCH_SIZE) {
    batches.push(fullUrls.slice(i, i + BATCH_SIZE));
  }

  if (planOnly || !dayArg) {
    console.log(`\nGoogle Indexing API Batch Schedule`);
    console.log(`Total unindexed URLs: ${fullUrls.length}`);
    console.log(`Batch size: ${BATCH_SIZE}/day`);
    console.log(`Days needed: ${batches.length}\n`);

    batches.forEach((batch, i) => {
      console.log(`── Day ${i + 1} (${batch.length} URLs) ──`);
      batch.forEach(url => console.log(`  ${url.replace(SITE_URL, '')}`));
      console.log('');
    });

    if (!dayArg) {
      console.log(`Run with --day N to submit a specific batch.`);
    }
    return;
  }

  if (dayArg < 1 || dayArg > batches.length) {
    console.error(`Invalid day: ${dayArg}. Valid range: 1-${batches.length}`);
    process.exit(1);
  }

  // Verify GSC access
  const siteUrl = await detectSiteProperty();
  if (!siteUrl) {
    console.error('Cannot access GSC.');
    process.exit(1);
  }

  const auth = await getAuthClient();
  const indexing = google.indexing({ version: 'v3', auth });

  const batch = batches[dayArg - 1];
  console.log(`\nGoogle Indexing API — Day ${dayArg}/${batches.length}`);
  console.log(`Submitting ${batch.length} URLs:\n`);

  let success = 0;
  let failed = 0;

  for (const url of batch) {
    const ok = await submitUrl(indexing, url);
    if (ok) success++;
    else failed++;
    // Rate limit
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nDone: ${success} submitted, ${failed} failed`);
}

main();
