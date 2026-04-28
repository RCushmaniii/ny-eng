#!/usr/bin/env node
/**
 * One-off: upload Corporate English Training Audit videos to Vercel Blob.
 *
 * Usage:
 *   node scripts/upload-corporate-videos.mjs
 *
 * Loads BLOB_READ_WRITE_TOKEN from .env.local (Vercel-pulled env file),
 * falls back to .env if not present.
 *
 * Prints public Blob URLs. Paste them into api/corporate-guide/download.ts.
 */

import { put } from "@vercel/blob";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { existsSync } from "node:fs";
import dotenv from "dotenv";

if (existsSync(".env.local")) dotenv.config({ path: ".env.local", override: true });
if (existsSync(".env")) dotenv.config({ path: ".env", override: false });

const blobToken =
  process.env.BLOB_PUBLIC_READ_WRITE_TOKEN ||
  process.env.BLOB_READ_WRITE_TOKEN;

if (!blobToken) {
  console.error("ERROR: No Blob read/write token in env. Expected BLOB_PUBLIC_READ_WRITE_TOKEN or BLOB_READ_WRITE_TOKEN.");
  process.exit(1);
}

const files = [
  {
    local: "public/video/The_Corporate_English_Audit.mp4",
    blob: "corporate-guide/The_Corporate_English_Audit.mp4",
  },
  {
    local: "public/video/Auditoria_de_Ingles_Corporativo.mp4",
    blob: "corporate-guide/Auditoria_de_Ingles_Corporativo.mp4",
  },
];

for (const { local, blob } of files) {
  const path = resolve(local);
  const buf = await readFile(path);
  console.log(`Uploading ${local} (${(buf.length / 1024 / 1024).toFixed(1)} MB)...`);
  const result = await put(blob, buf, {
    access: "public",
    contentType: "video/mp4",
    addRandomSuffix: false,
    allowOverwrite: true,
    token: blobToken,
  });
  console.log(`  -> ${result.url}`);
}
