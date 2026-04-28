#!/usr/bin/env node
/**
 * Migration: create corporate_guide_leads table in Neon
 *
 * Usage:
 *   node --env-file=.env scripts/migrations/add-corporate-guide-leads.mjs
 *
 * Idempotent — safe to run multiple times.
 */

import { neon } from "@neondatabase/serverless";

const POSTGRES_URL = process.env.POSTGRES_URL;

if (!POSTGRES_URL) {
  console.error("ERROR: POSTGRES_URL is not set in the environment.");
  console.error("Run with: node --env-file=.env scripts/migrations/add-corporate-guide-leads.mjs");
  process.exit(1);
}

const sql = neon(POSTGRES_URL);

async function run() {
  console.log("Creating corporate_guide_leads table...");

  await sql`
    CREATE TABLE IF NOT EXISTS corporate_guide_leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      language TEXT NOT NULL DEFAULT 'en',
      source_page TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      utm_content TEXT,
      utm_term TEXT,
      referrer TEXT,
      user_agent TEXT,
      delivered_at TIMESTAMPTZ,
      booked_consultation BOOLEAN DEFAULT FALSE,
      booking_date TIMESTAMPTZ,
      status TEXT NOT NULL DEFAULT 'new',
      admin_notes TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS idx_corporate_guide_leads_email ON corporate_guide_leads(email)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_corporate_guide_leads_created_at ON corporate_guide_leads(created_at DESC)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_corporate_guide_leads_language ON corporate_guide_leads(language)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_corporate_guide_leads_status ON corporate_guide_leads(status)`;

  const triggerExists = await sql`
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_corporate_guide_leads_updated_at'
  `;

  if (triggerExists.length === 0) {
    await sql`
      CREATE TRIGGER update_corporate_guide_leads_updated_at
      BEFORE UPDATE ON corporate_guide_leads
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column()
    `;
    console.log("Trigger created.");
  } else {
    console.log("Trigger already exists — skipped.");
  }

  const rows = await sql`
    SELECT column_name FROM information_schema.columns
    WHERE table_name = 'corporate_guide_leads'
    ORDER BY ordinal_position
  `;

  console.log(`\nTable corporate_guide_leads ready. Columns (${rows.length}):`);
  for (const r of rows) console.log(`  - ${r.column_name}`);
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
