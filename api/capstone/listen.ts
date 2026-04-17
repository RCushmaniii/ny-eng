/**
 * Vercel Serverless Function: Capstone Listen
 *
 * Server-side proxy for private Vercel Blob audio files.
 * Robert receives a link to this endpoint in his Resend email.
 * When he clicks it, this function fetches the private blob using
 * the server-side BLOB_READ_WRITE_TOKEN and streams the audio
 * directly to his browser — no auth UI, no Vercel dashboard needed.
 *
 * Security model:
 * - The blob URL embedded in ?b= is a Vercel-generated URL containing
 *   a random hash — effectively unguessable without server-side knowledge.
 * - Only Robert receives this link (via Resend email).
 * - Blobs are private in storage; this endpoint is the only access path.
 *
 * GET /api/capstone/listen?b=<base64url(blobUrl)>
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

const VERCEL_BLOB_HOSTNAME_PATTERN = /\.(?:public\.blob|blob)\.vercel-storage\.com$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { b } = req.query;
  if (!b || typeof b !== "string") {
    return res.status(400).send("Missing recording reference");
  }

  let blobUrl: string;
  try {
    blobUrl = Buffer.from(b, "base64url").toString("utf8");
    const parsed = new URL(blobUrl);
    // Validate it's actually a Vercel Blob URL — reject anything else
    if (!VERCEL_BLOB_HOSTNAME_PATTERN.test(parsed.hostname)) {
      throw new Error("Invalid blob host");
    }
  } catch {
    return res.status(400).send("Invalid recording reference");
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(500).send("Storage is not configured");
  }

  try {
    // Fetch the private blob server-side using the read-write token
    const blobResponse = await fetch(blobUrl, {
      headers: {
        Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      },
    });

    if (!blobResponse.ok) {
      console.error(`Blob fetch failed: ${blobResponse.status} ${blobResponse.statusText}`);
      return res.status(404).send("Recording not found");
    }

    const contentType = blobResponse.headers.get("content-type") ?? "audio/mpeg";
    const contentLength = blobResponse.headers.get("content-length");

    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", "inline");
    // Cache for 1 hour — Robert is the only one who has this URL
    res.setHeader("Cache-Control", "private, max-age=3600");
    if (contentLength) res.setHeader("Content-Length", contentLength);

    // Stream the audio bytes to Robert's browser
    const arrayBuffer = await blobResponse.arrayBuffer();
    res.status(200).send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error("Capstone listen error:", err);
    return res.status(500).send("Could not retrieve recording");
  }
}
