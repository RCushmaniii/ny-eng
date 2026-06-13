/**
 * Neon Database Client
 *
 * Serverless PostgreSQL driver for Vercel/Netlify edge functions.
 * Uses DATABASE_URL from environment (provisioned via Vercel Neon integration).
 */

import { neon } from "@neondatabase/serverless";

/**
 * Read POSTGRES_URL at RUNTIME, not build time.
 *
 * Vite statically inlines `import.meta.env.X` when the bundle is built — so a
 * connection string added or rotated in the host's environment *after* the
 * build (or reused via build cache) gets baked in as `undefined`, and every
 * query silently fails. On a Node serverless runtime, `process.env` holds the
 * deployment's live value and is never inlined for server code, so it is the
 * reliable source. `import.meta.env` stays as a local-dev fallback.
 *
 * Typed via `globalThis` so this compiles under the project's `astro/client`-
 * only tsconfig without pulling in `@types/node`.
 */
const runtimeEnv = (
  globalThis as { process?: { env?: Record<string, string | undefined> } }
).process?.env;
const databaseUrl = runtimeEnv?.POSTGRES_URL ?? import.meta.env.POSTGRES_URL;

if (!databaseUrl) {
  console.warn(
    "POSTGRES_URL not found. Database operations will fail.",
  );
}

export const sql = neon(databaseUrl || "");

export default sql;
