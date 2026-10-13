#!/usr/bin/env node
/**
 * Migration: add `guide` to corporate_guide_leads.
 *
 * The table now holds leads for two lead magnets: the Corporate English
 * Training Audit and "From Correct to Connected" (the blog content upgrade).
 * `guide` tells them apart so scripts/seo/corporate-leads.mjs can keep counting
 * corporate leads only.
 *
 * Safe on the live table: ADD COLUMN with a constant DEFAULT is a metadata-only
 * change in Postgres 11+, existing rows read as 'corporate-audit', and the
 * deployed API (which does not name the column yet) keeps inserting correctly
 * through the default. Run this BEFORE deploying the API that writes `guide`.
 *
 * Usage:
 *   node --env-file=.env.local scripts/migrations/add-guide-column-to-leads.mjs
 *
 * Idempotent — safe to run multiple times.
 */

import { neon } from "@neondatabase/serverless";

const POSTGRES_URL = process.env.POSTGRES_URL;

if (!POSTGRES_URL) {
  console.error("ERROR: POSTGRES_URL is not set in the environment.");
  console.error(
    "Run with: node --env-file=.env.local scripts/migrations/add-guide-column-to-leads.mjs",
  );
  process.exit(1);
}

const sql = neon(POSTGRES_URL);

await sql`
  ALTER TABLE corporate_guide_leads
  ADD COLUMN IF NOT EXISTS guide TEXT NOT NULL DEFAULT 'corporate-audit'
`;
await sql`
  CREATE INDEX IF NOT EXISTS idx_corporate_guide_leads_guide
  ON corporate_guide_leads(guide)
`;

const [col] = await sql`
  SELECT data_type, is_nullable, column_default
  FROM information_schema.columns
  WHERE table_name = 'corporate_guide_leads' AND column_name = 'guide'
`;
const counts = await sql`
  SELECT guide, COUNT(*)::int AS n FROM corporate_guide_leads GROUP BY guide ORDER BY guide
`;

console.log("guide column:", col);
console.log("rows by guide:", counts);
