#!/usr/bin/env node
/**
 * Migration: create rate_limit_hits table in Neon
 *
 * Backs the rate limiter in api/_lib/rate-limit.ts. One row per allowed
 * request; the limiter counts rows inside a sliding window.
 *
 * Postgres rather than Upstash Redis (the CushLabs default) because Neon is
 * already provisioned for this project and these endpoints see a handful of
 * requests a day — the requirement is a durable store shared across
 * serverless instances, not low latency. Swap to Upstash if volume grows.
 *
 * Usage:
 *   node --env-file=.env scripts/migrations/add-rate-limit-table.mjs
 *
 * Idempotent — safe to run multiple times.
 */

import { neon } from "@neondatabase/serverless";

const POSTGRES_URL = process.env.POSTGRES_URL;

if (!POSTGRES_URL) {
  console.error("ERROR: POSTGRES_URL is not set in the environment.");
  console.error("Run with: node --env-file=.env scripts/migrations/add-rate-limit-table.mjs");
  process.exit(1);
}

const sql = neon(POSTGRES_URL);

async function run() {
  console.log("Creating rate_limit_hits table...");

  await sql`
    CREATE TABLE IF NOT EXISTS rate_limit_hits (
      id BIGSERIAL PRIMARY KEY,
      bucket TEXT NOT NULL,
      identifier TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // The limiter always queries by (bucket, identifier) over a recent time
  // range, and the sweeper deletes by created_at. Both are covered here.
  await sql`
    CREATE INDEX IF NOT EXISTS rate_limit_hits_lookup_idx
      ON rate_limit_hits (bucket, identifier, created_at DESC)
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS rate_limit_hits_sweep_idx
      ON rate_limit_hits (created_at)
  `;

  const cols = await sql`
    SELECT column_name, data_type
    FROM information_schema.columns
    WHERE table_name = 'rate_limit_hits'
    ORDER BY ordinal_position
  `;

  console.log("Done. Columns:");
  for (const c of cols) console.log(`  ${c.column_name} (${c.data_type})`);
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
