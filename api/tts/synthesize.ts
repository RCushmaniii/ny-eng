/**
 * Vercel Serverless Function: Text-to-Speech
 *
 * Proxies Azure Cognitive Services Neural TTS.
 * Accepts text + optional voice, returns audio/mpeg.
 * API key stays server-side — never exposed to the browser.
 *
 * POST /api/tts/synthesize
 * Body: { text: string, voice?: string, lang?: "en" | "es" }
 * Response: audio/mpeg binary
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

const allowedOrigins = [
  "https://www.nyenglishteacher.com",
  "https://ny-eng.vercel.app",
  "http://localhost:4321",
  "http://localhost:4322",
  "http://localhost:3000",
];

// Default voices per language
const DEFAULT_VOICES: Record<string, string> = {
  en: "en-US-AvaNeural",
  es: "es-MX-DaliaNeural",
};

// Allowed voices (whitelist to prevent abuse)
const ALLOWED_VOICES = new Set([
  // English US
  "en-US-AndrewNeural",
  "en-US-AvaNeural",
  "en-US-BrianNeural",
  "en-US-EmmaNeural",
  "en-US-JennyNeural",
  "en-US-GuyNeural",
  // Spanish MX
  "es-MX-JorgeNeural",
  "es-MX-DaliaNeural",
]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || "";
  const corsOrigin = allowedOrigins.includes(origin) ? origin : "";

  // CORS headers
  if (corsOrigin) {
    res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.AZURE_TTS_KEY;
  const region = process.env.AZURE_TTS_REGION || "eastus";

  if (!apiKey) {
    console.error("AZURE_TTS_KEY not configured");
    return res.status(500).json({ error: "TTS service not configured" });
  }

  const { text, voice, lang } = req.body || {};

  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "Missing or invalid 'text' field" });
  }

  // Limit text length to prevent abuse (500 chars is generous for pronunciation snippets)
  if (text.length > 500) {
    return res.status(400).json({ error: "Text exceeds 500 character limit" });
  }

  // Sanitize text — strip HTML tags and control characters
  const cleanText = text
    .replace(/<[^>]*>/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .trim();

  if (!cleanText) {
    return res.status(400).json({ error: "Text is empty after sanitization" });
  }

  // Determine voice
  const language = lang === "es" ? "es" : "en";
  const selectedVoice = voice && ALLOWED_VOICES.has(voice)
    ? voice
    : DEFAULT_VOICES[language];

  // Extract language tag from voice name (e.g., "en-US" from "en-US-AndrewNeural")
  const voiceLang = selectedVoice.split("-").slice(0, 2).join("-");

  // Build SSML
  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${voiceLang}">
  <voice name="${selectedVoice}">
    <prosody rate="0.9">${escapeXml(cleanText)}</prosody>
  </voice>
</speak>`;

  try {
    const ttsUrl = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;

    const response = await fetch(ttsUrl, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
        "User-Agent": "CushLabsTTS/1.0",
      },
      body: ssml,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Azure TTS error: ${response.status} ${errorText}`);
      return res.status(502).json({ error: "TTS synthesis failed" });
    }

    const audioBuffer = await response.arrayBuffer();

    // Cache audio for 1 hour (same text = same audio)
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.setHeader("Content-Length", audioBuffer.byteLength.toString());

    return res.status(200).send(Buffer.from(audioBuffer));
  } catch (err) {
    console.error("TTS error:", err);
    return res.status(500).json({ error: "Internal TTS error" });
  }
}

/** Escape special XML characters to prevent SSML injection */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
