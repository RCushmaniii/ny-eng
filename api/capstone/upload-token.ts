/**
 * Vercel Serverless Function: Capstone Upload Token
 *
 * Two responsibilities handled in one endpoint:
 * 1. (POST with Vercel Blob client payload) — generates a presigned upload URL
 *    so the learner's browser uploads the audio file directly to Vercel Blob CDN,
 *    bypassing the 4.5 MB serverless body limit.
 * 2. onUploadCompleted callback — fires server-side after the CDN upload finishes;
 *    sends Robert a branded Resend email with a clickable link to the recording.
 *
 * Client flow:
 *   1. import { upload } from '@vercel/blob/client'
 *   2. upload(filename, file, { handleUploadUrl: '/api/capstone/upload-token',
 *                               clientPayload: JSON.stringify({name,email,lang}) })
 *   3. On success → show confirmation UI
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const ALLOWED_ORIGINS = [
  "https://www.nyenglishteacher.com",
  "https://ny-eng.vercel.app",
  "http://localhost:4321",
  "http://localhost:4322",
];

function cors(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

async function sendCapstoneEmail(params: {
  name: string;
  email: string;
  recordingUrl: string;
  lang: string;
}) {
  if (!resend) return;

  const { name, email, recordingUrl, lang } = params;
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Mexico_City",
    dateStyle: "full",
    timeStyle: "short",
  });

  await resend.emails.send({
    from: "NY English Teacher <noreply@nyenglishteacher.com>",
    to: "robert@nyenglishteacher.com",
    subject: `🎤 Capstone Recording — ${name}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; padding: 32px 16px; }
    .card { background: #0f172a; border-radius: 16px; padding: 40px 36px; }
    .badge { display: inline-block; background: #f59e0b20; color: #f59e0b; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; margin-bottom: 24px; }
    h1 { color: #ffffff; font-size: 28px; font-weight: 700; margin: 0 0 8px; }
    .subtitle { color: #94a3b8; font-size: 15px; margin: 0 0 32px; }
    .info-row { margin-bottom: 16px; }
    .label { color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
    .value { color: #e2e8f0; font-size: 15px; }
    .divider { border: none; border-top: 1px solid #1e293b; margin: 24px 0; }
    .cta { display: block; background: #f59e0b; color: #0f172a; font-weight: 700; font-size: 16px; text-align: center; padding: 16px 32px; border-radius: 10px; text-decoration: none; margin: 28px 0; }
    .url-fallback { color: #64748b; font-size: 13px; word-break: break-all; margin-top: 12px; }
    .footer { color: #475569; font-size: 13px; line-height: 1.6; margin-top: 32px; }
    a { color: #f59e0b; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="badge">Executive Course — Capstone</div>
      <h1>New Recording: ${name}</h1>
      <p class="subtitle">A learner just submitted their 90-second executive presentation.</p>

      <div class="info-row">
        <div class="label">Learner</div>
        <div class="value">${name}</div>
      </div>
      <div class="info-row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="info-row">
        <div class="label">Course Language</div>
        <div class="value">${lang === "es" ? "Spanish interface (ES)" : "English interface (EN)"}</div>
      </div>
      <div class="info-row">
        <div class="label">Submitted</div>
        <div class="value">${submittedAt} (Mexico City)</div>
      </div>

      <hr class="divider" />

      <a href="${recordingUrl}" class="cta">🎧 Listen to the Recording</a>
      <p class="url-fallback">Direct link: <a href="${recordingUrl}">${recordingUrl}</a></p>

      <hr class="divider" />

      <div class="footer">
        Reply to <a href="mailto:${email}">${email}</a> with your feedback.<br />
        The learner is expecting a personal response within 48 hours.
      </div>
    </div>
  </div>
</body>
</html>
    `.trim(),
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("BLOB_READ_WRITE_TOKEN is not configured");
    return res.status(500).json({ error: "File upload is not configured" });
  }

  try {
    const jsonResponse = await handleUpload({
      body: req.body as HandleUploadBody,
      request: req as unknown as Request,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        // Validate and pass through learner info to onUploadCompleted
        let payload = { name: "Learner", email: "", lang: "en" };
        try {
          payload = { ...payload, ...JSON.parse(clientPayload || "{}") };
        } catch {
          // use defaults
        }

        return {
          allowedContentTypes: [
            "audio/mpeg",       // .mp3
            "audio/mp4",        // .m4a (some browsers)
            "audio/x-m4a",      // .m4a
            "audio/wav",        // .wav
            "audio/ogg",        // .ogg
            "audio/webm",       // browser MediaRecorder output
            "audio/aac",        // .aac
          ],
          maximumSizeInBytes: 50 * 1024 * 1024, // 50 MB — covers Zoom audio exports
          tokenPayload: JSON.stringify(payload),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        let payload = { name: "Learner", email: "", lang: "en" };
        try {
          payload = { ...payload, ...JSON.parse(tokenPayload || "{}") };
        } catch {
          // use defaults
        }

        await sendCapstoneEmail({
          name: payload.name,
          email: payload.email,
          recordingUrl: blob.url,
          lang: payload.lang,
        });
      },
    });

    return res.status(200).json(jsonResponse);
  } catch (err) {
    console.error("Capstone upload error:", err);
    return res.status(500).json({ error: "Upload failed. Please try again." });
  }
}
