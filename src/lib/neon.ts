/**
 * Neon Database Client
 *
 * Serverless PostgreSQL driver for Vercel/Netlify edge functions.
 * Uses DATABASE_URL from environment (provisioned via Vercel Neon integration).
 */

import { neon } from "@neondatabase/serverless";

const databaseUrl = import.meta.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn(
    "DATABASE_URL not found. Database operations will fail.",
  );
}

export const sql = neon(databaseUrl || "");

export default sql;
