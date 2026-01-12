/**
 * Vercel Serverless Function: Quiz Submit
 *
 * Handles quiz submissions and stores data in Supabase.
 * Replaces the Netlify function for Vercel deployment.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || "",
);

// Initialize Resend for email notifications
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Allowed origins for CORS
const allowedOrigins = [
  "https://www.nyenglishteacher.com",
  "https://ny-eng.vercel.app",
  "http://localhost:4321",
  "http://localhost:4322",
  "http://localhost:3000",
];

// Scoring logic
function calculateScore(
  answers: Record<string, number>,
  _quizType: string,
): {
  totalScore: number;
  scoreTier: string;
  rawScore: number;
  categoryScores: Record<string, number>;
  primaryGap: string;
  secondaryGap: string;
} {
  let totalScore = 0;
  const answerValues = Object.values(answers);

  answerValues.forEach((answerIndex) => {
    totalScore += ((3 - answerIndex) * 25) / answerValues.length;
  });

  totalScore = Math.round(Math.min(100, Math.max(0, totalScore)));

  let scoreTier = "Credibility Gap";
  if (totalScore >= 70) scoreTier = "Executive Presence";
  else if (totalScore >= 40) scoreTier = "Passive Proficiency";

  return {
    totalScore,
    scoreTier,
    rawScore: totalScore,
    categoryScores: {},
    primaryGap: "clarity",
    secondaryGap: "confidence",
  };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  // Determine allowed origin
  const origin = req.headers.origin as string;
  const allowedOrigin = allowedOrigins.includes(origin)
    ? origin
    : "https://www.nyenglishteacher.com";

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body = req.body;

    // Validate required fields
    if (
      !body.name ||
      !body.email ||
      !body.answers ||
      !body.language ||
      !body.quizType
    ) {
      res.status(400).json({
        success: false,
        error:
          "Missing required fields: name, email, answers, language, quizType",
      });
      return;
    }

    // Calculate score
    const scoreBreakdown = calculateScore(body.answers, body.quizType);

    // Build payload
    const payload = {
      name: body.name,
      email: body.email,
      company: body.company || null,
      phone: body.phone || null,
      quiz_type: body.quizType,
      quiz_version: "v1.0",
      language: body.language,
      raw_score: scoreBreakdown.rawScore,
      total_score: scoreBreakdown.totalScore,
      score_tier: scoreBreakdown.scoreTier,
      category_scores: scoreBreakdown.categoryScores,
      primary_gap: scoreBreakdown.primaryGap,
      secondary_gap: scoreBreakdown.secondaryGap,
      answers: Object.entries(body.answers).map(([qId, answerIndex]) => ({
        question_number: parseInt(qId.replace("q", "")),
        answer_index: answerIndex,
      })),
      completion_time_ms: body.completionTime || null,
      device_type: body.deviceType || null,
      browser: body.browser || null,
      referrer: body.referrer || null,
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
      utm_content: body.utmContent || null,
      utm_term: body.utmTerm || null,
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from("quiz_submissions")
      .insert(payload)
      .select("id")
      .single();

    if (error) {
      console.error("Supabase error:", error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
      return;
    }

    // Send email notification
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: "NY English Quiz <onboarding@resend.dev>",
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Quiz Lead: ${body.name} (${body.quizType})`,
          html: `
            <h2>New Quiz Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Company:</strong> ${body.company || "N/A"}</p>
            <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
            <p><strong>Score:</strong> ${scoreBreakdown.totalScore}/100</p>
            <p><strong>Tier:</strong> ${scoreBreakdown.scoreTier}</p>
            <p><strong>Quiz Type:</strong> ${body.quizType}</p>
            <p><strong>Language:</strong> ${body.language}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
        // Don't fail the submission if email fails
      }
    }

    res.status(200).json({
      success: true,
      submission_id: data.id,
      score: scoreBreakdown.totalScore,
      score_tier: scoreBreakdown.scoreTier,
    });
  } catch (error) {
    console.error("Function error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
