/**
 * Vercel Serverless Function: Quiz Submit
 *
 * Handles quiz submissions and stores data in Neon PostgreSQL.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";

// Initialize Neon SQL client
const sql = neon(process.env.POSTGRES_URL || "");

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

    // Build answers array
    const answersArray = Object.entries(body.answers).map(([qId, answerIndex]) => ({
      question_number: parseInt(qId.replace("q", "")),
      answer_index: answerIndex,
    }));

    // Insert into Neon PostgreSQL
    const rows = await sql`
      INSERT INTO quiz_submissions (
        name, email, company, phone,
        quiz_type, quiz_version, language,
        raw_score, total_score, score_tier,
        category_scores, primary_gap, secondary_gap,
        answers, completion_time_ms, device_type, browser, referrer,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term
      ) VALUES (
        ${body.name}, ${body.email}, ${body.company || null}, ${body.phone || null},
        ${body.quizType}, ${"v1.0"}, ${body.language},
        ${scoreBreakdown.rawScore}, ${scoreBreakdown.totalScore}, ${scoreBreakdown.scoreTier},
        ${JSON.stringify(scoreBreakdown.categoryScores)}, ${scoreBreakdown.primaryGap}, ${scoreBreakdown.secondaryGap},
        ${JSON.stringify(answersArray)}, ${body.completionTime || null}, ${body.deviceType || null}, ${body.browser || null}, ${body.referrer || null},
        ${body.utmSource || null}, ${body.utmMedium || null}, ${body.utmCampaign || null}, ${body.utmContent || null}, ${body.utmTerm || null}
      ) RETURNING id
    `;

    const submissionId = rows[0].id;

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
      submission_id: submissionId,
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
