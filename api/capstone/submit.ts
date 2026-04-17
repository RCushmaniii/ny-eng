/**
 * Vercel Serverless Function: Capstone Submit
 *
 * Accepts a raw audio file upload from CapstoneUploadForm.
 * Stores it in Vercel Blob (private), then sends Robert a Resend
 * email with a link to /api/capstone/listen (a server-side proxy
 * that streams the private blob — so Robert just clicks and listens).
 *
 * Request contract:
 *   POST /api/capstone/submit
 *   Content-Type: audio/* (or any audio MIME)
 *   X-Learner-Name: <string>
 *   X-Learner-Email: <string>
 *   X-Learner-Lang: "en" | "es"
 *   X-Filename: <original filename>
 *   Body: raw audio bytes
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put } from "@vercel/blob";
import { Resend } from "resend";

// bodyParser: false — we read the raw audio bytes manually from the stream
export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const SITE = "https://www.nyenglishteacher.com";

const ALLOWED_ORIGINS = [
  SITE,
  "https://ny-eng.vercel.app",
  "http://localhost:4321",
  "http://localhost:4322",
];

const ALLOWED_CONTENT_TYPES = [
  "audio/mpeg",
  "audio/mp4",
  "audio/x-m4a",
  "audio/wav",
  "audio/ogg",
  "audio/webm",
  "audio/aac",
  "audio/",
];

function setCors(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin ?? "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", [
    "Content-Type",
    "X-Learner-Name",
    "X-Learner-Email",
    "X-Learner-Lang",
    "X-Filename",
  ].join(", "));
}

async function readStream(req: VercelRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function sendCapstoneEmail(params: {
  name: string;
  email: string;
  listenUrl: string;
  lang: string;
}) {
  if (!resend) return;
  const { name, email, listenUrl, lang } = params;
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Mexico_City",
    dateStyle: "full",
    timeStyle: "short",
  });

  await resend.emails.send({
    from: "NY English Teacher <noreply@nyenglishteacher.com>",
    to: "robert@nyenglishteacher.com",
    replyTo: email,
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
    .badge { display: inline-block; background: rgba(245,158,11,0.15); color: #f59e0b; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; margin-bottom: 24px; }
    h1 { color: #ffffff; font-size: 26px; font-weight: 700; margin: 0 0 8px; }
    .subtitle { color: #94a3b8; font-size: 15px; margin: 0 0 28px; }
    .row { margin-bottom: 16px; }
    .label { color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
    .value { color: #e2e8f0; font-size: 15px; }
    .divider { border: none; border-top: 1px solid #1e293b; margin: 24px 0; }
    .cta { display: block; background: #f59e0b; color: #0f172a !important; font-weight: 700; font-size: 16px; text-align: center; padding: 16px 32px; border-radius: 10px; text-decoration: none; margin: 24px 0; }
    .url { color: #64748b; font-size: 12px; word-break: break-all; margin-top: 8px; }
    .footer { color: #475569; font-size: 13px; line-height: 1.6; margin-top: 28px; }
    a { color: #f59e0b; }
  </style>
</head>
<body>
<div class="wrapper">
  <div class="card">
    <div class="badge">Executive Course — Capstone</div>
    <h1>New Recording: ${name}</h1>
    <p class="subtitle">A learner submitted their 90-second executive presentation.</p>

    <div class="row">
      <div class="label">Learner</div>
      <div class="value">${name}</div>
    </div>
    <div class="row">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${email}" style="color:#f59e0b;">${email}</a></div>
    </div>
    <div class="row">
      <div class="label">Course language</div>
      <div class="value">${lang === "es" ? "Spanish interface (ES)" : "English interface (EN)"}</div>
    </div>
    <div class="row">
      <div class="label">Submitted</div>
      <div class="value">${submittedAt} (Mexico City)</div>
    </div>

    <hr class="divider" />

    <a href="${listenUrl}" class="cta">🎧 Listen to the Recording</a>
    <p class="url">If the button doesn't work, copy this link: ${listenUrl}</p>

    <hr class="divider" />

    <div class="footer">
      Reply directly to this email to send feedback to ${name}.<br />
      They are expecting a personal response within 48 hours.
    </div>
  </div>
</div>
</body>
</html>
    `.trim(),
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(500).json({ error: "File storage is not configured" });
  }

  // Validate Content-Type is audio
  const contentType = (req.headers["content-type"] ?? "").toLowerCase();
  const isAudio = ALLOWED_CONTENT_TYPES.some((t) => contentType.startsWith(t));
  if (!isAudio) {
    return res.status(400).json({ error: "Only audio files are accepted" });
  }

  // Learner info from headers
  const name = String(req.headers["x-learner-name"] ?? "Learner").slice(0, 100);
  const email = String(req.headers["x-learner-email"] ?? "").slice(0, 200);
  const lang = String(req.headers["x-learner-lang"] ?? "en").slice(0, 2);
  const originalFilename = String(req.headers["x-filename"] ?? "recording.mp3")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .slice(0, 120);

  try {
    const body = await readStream(req);

    if (body.length === 0) {
      return res.status(400).json({ error: "No audio data received" });
    }

    // Store in Vercel Blob as private
    const pathname = `capstone/${Date.now()}-${originalFilename}`;
    const { url } = await put(pathname, body, {
      access: "private",
      contentType: contentType || "audio/mpeg",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    // Build a listen URL — our server-side proxy streams the private blob to Robert's browser
    const b64 = Buffer.from(url).toString("base64url");
    const listenUrl = `${SITE}/api/capstone/listen?b=${b64}`;

    await sendCapstoneEmail({ name, email, listenUrl, lang });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Capstone submit error:", err);
    return res.status(500).json({ error: "Upload failed. Please try again." });
  }
}
