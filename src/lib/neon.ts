/**
 * Neon Database Client
 *
 * Serverless PostgreSQL driver for Vercel/Netlify edge functions.
 * Uses DATABASE_URL from environment (provisioned via Vercel Neon integration).
 */

import { neon } from "@neondatabase/serverless";

const databaseUrl = import.meta.env.POSTGRES_URL;

if (!databaseUrl) {
  console.warn(
    "POSTGRES_URL not found. Database operations will fail.",
  );
}

export const sql = neon(databaseUrl || "");

export default sql;
