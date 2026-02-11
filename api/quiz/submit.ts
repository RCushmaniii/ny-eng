/**
 * Vercel Serverless Function: Quiz Submit
 *
 * Handles quiz submissions:
 * - Stores results in Neon PostgreSQL (using client-calculated scores)
 * - Sends branded admin notification email
 * - Sends branded quiz taker email with score + CTA
 * - Generates AI personalized assessment via Claude Haiku
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import Anthropic from "@anthropic-ai/sdk";

// Initialize Neon SQL client
const sql = neon(process.env.POSTGRES_URL || "");

// Initialize Resend for email notifications
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Initialize Anthropic for AI assessment
const anthropic = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null;

// Allowed origins for CORS
const allowedOrigins = [
  "https://www.nyenglishteacher.com",
  "https://ny-eng.vercel.app",
  "http://localhost:4321",
  "http://localhost:4322",
  "http://localhost:3000",
];

// Quiz type display names
const QUIZ_TYPE_LABELS: Record<string, string> = {
  executives: "Executive Communication",
  "it-services": "IT & Tech Communication",
  "professional-services": "Professional Services Communication",
  "high-stakes": "High-Stakes Presentation",
};

// Tier color mapping
const TIER_COLORS: Record<string, { bg: string; text: string; badge: string }> =
  {
    "Executive Presence": {
      bg: "#ecfdf5",
      text: "#065f46",
      badge: "#10b981",
    },
    "Passive Proficiency": {
      bg: "#fffbeb",
      text: "#92400e",
      badge: "#f59e0b",
    },
    "Credibility Gap": { bg: "#fef2f2", text: "#991b1b", badge: "#ef4444" },
  };

// ============================================================================
// EMAIL TEMPLATES
// ============================================================================

function buildAdminEmailHtml(body: Record<string, unknown>): string {
  const totalScore = body.totalScore as number;
  const scoreTier = body.scoreTier as string;
  const quizType = body.quizType as string;
  const colors = TIER_COLORS[scoreTier] || TIER_COLORS["Credibility Gap"];
  const quizLabel = QUIZ_TYPE_LABELS[quizType] || quizType;
  const categoryScores = body.categoryScores as Record<string, number> | null;

  let categoryRows = "";
  if (categoryScores && typeof categoryScores === "object") {
    const labels: Record<string, string> = {
      clarity: "Clarity",
      confidence: "Confidence",
      realTime: "Real-Time Fluency",
      negotiation: "Negotiation",
      cultural: "Cultural Fluency",
    };
    categoryRows = Object.entries(categoryScores)
      .map(
        ([key, value]) => `
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #475569;">${labels[key] || key}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; text-align: center; font-weight: 600;">${value}/100</td>
        </tr>`,
      )
      .join("");
  }

  return `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
    <div style="background: #2563eb; padding: 24px 32px;">
      <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">New Quiz Lead</h1>
      <p style="margin: 4px 0 0; color: #bfdbfe; font-size: 14px;">NY English Teacher &mdash; ${quizLabel}</p>
    </div>
    <div style="padding: 24px 32px; text-align: center; border-bottom: 1px solid #e2e8f0;">
      <div style="display: inline-block; background: ${colors.bg}; border-radius: 12px; padding: 16px 32px;">
        <div style="font-size: 36px; font-weight: 700; color: ${colors.badge};">${totalScore}/100</div>
        <div style="font-size: 14px; font-weight: 600; color: ${colors.text}; margin-top: 4px;">${scoreTier}</div>
      </div>
    </div>
    <div style="padding: 24px 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 120px;">Name</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${body.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Email</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">
            <a href="mailto:${body.email}" style="color: #2563eb;">${body.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Company</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${body.company || "&mdash;"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Phone</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${body.phone || "&mdash;"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Quiz</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${quizLabel}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Language</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${body.language === "es" ? "Spanish" : "English"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; color: #64748b; font-size: 13px;">Primary Gap</td>
          <td style="padding: 10px 12px; color: #0f172a;">${body.primaryGapName || body.primaryGap || "&mdash;"}</td>
        </tr>
      </table>
    </div>
    ${categoryRows ? `<div style="padding: 0 32px 24px;">
      <h3 style="font-size: 14px; color: #64748b; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.5px;">Category Breakdown</h3>
      <table style="width: 100%; border-collapse: collapse;">${categoryRows}</table>
    </div>` : ""}
    <div style="padding: 16px 32px; background: #f8fafc; text-align: center;">
      <p style="margin: 0; color: #94a3b8; font-size: 12px;">NY English Teacher &mdash; Quiz Lead Notification</p>
    </div>
  </div>
</body>
</html>`;
}

function buildQuizTakerEmailHtml(body: Record<string, unknown>): string {
  const totalScore = body.totalScore as number;
  const scoreTier = body.scoreTier as string;
  const name = (body.name as string).split(" ")[0];
  const colors = TIER_COLORS[scoreTier] || TIER_COLORS["Credibility Gap"];
  const primaryGapName = body.primaryGapName as string;
  const secondaryGapName = body.secondaryGapName as string;
  const primaryGapImpact = body.primaryGapImpact as string;
  const secondaryGapImpact = body.secondaryGapImpact as string;
  const language = body.language as string;
  const isSpanish = language === "es";

  const bookingUrl = isSpanish
    ? "https://www.nyenglishteacher.com/es/book/"
    : "https://www.nyenglishteacher.com/en/book/";

  const copy = isSpanish
    ? {
        greeting: `Hola ${name},`,
        intro: "Gracias por completar tu evaluaci\u00F3n de comunicaci\u00F3n. Aqu\u00ED tienes un resumen r\u00E1pido de tus resultados:",
        scoreLabel: "Tu Puntaje",
        outOf: "de 100",
        areasTitle: "Tus 2 \u00C1reas Principales de Mejora",
        priority: "Prioridad",
        ctaTitle: "\u00BFListo para Mejorar?",
        ctaText: "Una conversaci\u00F3n de 15 minutos puede revelar exactamente qu\u00E9 est\u00E1 frenando tu comunicaci\u00F3n y cu\u00E1l es el camino m\u00E1s r\u00E1pido para mejorar.",
        ctaButton: "Agendar una Llamada Gratuita",
        footer: "Recibes este correo porque completaste una evaluaci\u00F3n en nyenglishteacher.com",
        unsubscribe: "Si no deseas recibir m\u00E1s correos, responde a este mensaje.",
      }
    : {
        greeting: `Hi ${name},`,
        intro: "Thanks for completing your communication assessment. Here's a quick summary of your results:",
        scoreLabel: "Your Score",
        outOf: "out of 100",
        areasTitle: "Your Top 2 Improvement Areas",
        priority: "Priority",
        ctaTitle: "Ready to Improve?",
        ctaText: "A 15-minute conversation can reveal exactly what's holding your communication back\u2014and the fastest path to improvement.",
        ctaButton: "Book a Free Strategy Call",
        footer: "You're receiving this because you completed an assessment on nyenglishteacher.com",
        unsubscribe: "If you'd prefer not to receive future emails, simply reply to let us know.",
      };

  return `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
    <div style="background: #2563eb; padding: 24px 32px; text-align: center;">
      <img src="https://www.nyenglishteacher.com/images/logos/new-york-english-sq-og.jpg" alt="NY English Teacher" width="60" height="60" style="border-radius: 8px; margin-bottom: 8px;" />
      <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">NY English Teacher</h1>
    </div>
    <div style="padding: 32px; text-align: center; border-bottom: 1px solid #e2e8f0;">
      <p style="margin: 0 0 16px; color: #475569; font-size: 16px;">${copy.greeting}</p>
      <p style="margin: 0 0 24px; color: #64748b; font-size: 14px; line-height: 1.5;">${copy.intro}</p>
      <div style="display: inline-block; background: ${colors.bg}; border-radius: 16px; padding: 24px 40px;">
        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: ${colors.text}; margin-bottom: 4px;">${copy.scoreLabel}</div>
        <div style="font-size: 48px; font-weight: 700; color: ${colors.badge}; line-height: 1;">${totalScore}</div>
        <div style="font-size: 14px; color: ${colors.text}; margin-top: 2px;">${copy.outOf}</div>
        <div style="font-size: 16px; font-weight: 600; color: ${colors.text}; margin-top: 8px;">${scoreTier}</div>
      </div>
    </div>
    ${primaryGapName ? `<div style="padding: 24px 32px;">
      <h2 style="font-size: 18px; color: #0f172a; margin: 0 0 16px;">${copy.areasTitle}</h2>
      <div style="background: #f8fafc; border-left: 4px solid ${colors.badge}; padding: 16px; margin-bottom: 12px; border-radius: 0 8px 8px 0;">
        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: ${colors.text}; font-weight: 600; margin-bottom: 4px;">${copy.priority} #1</div>
        <div style="font-size: 16px; font-weight: 600; color: #0f172a; margin-bottom: 6px;">${primaryGapName}</div>
        <div style="font-size: 14px; color: #475569; line-height: 1.5;">${primaryGapImpact || ""}</div>
      </div>
      ${secondaryGapName ? `<div style="background: #f8fafc; border-left: 4px solid #94a3b8; padding: 16px; border-radius: 0 8px 8px 0;">
        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 600; margin-bottom: 4px;">${copy.priority} #2</div>
        <div style="font-size: 16px; font-weight: 600; color: #0f172a; margin-bottom: 6px;">${secondaryGapName}</div>
        <div style="font-size: 14px; color: #475569; line-height: 1.5;">${secondaryGapImpact || ""}</div>
      </div>` : ""}
    </div>` : ""}
    <div style="padding: 24px 32px; text-align: center; background: #f8fafc;">
      <h2 style="font-size: 20px; color: #0f172a; margin: 0 0 8px;">${copy.ctaTitle}</h2>
      <p style="color: #475569; font-size: 14px; line-height: 1.5; margin: 0 0 20px;">${copy.ctaText}</p>
      <a href="${bookingUrl}" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">${copy.ctaButton}</a>
    </div>
    <div style="padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0 0 4px; color: #94a3b8; font-size: 11px;">${copy.footer}</p>
      <p style="margin: 0; color: #94a3b8; font-size: 11px;">${copy.unsubscribe}</p>
    </div>
  </div>
</body>
</html>`;
}

// ============================================================================
// AI ASSESSMENT
// ============================================================================

async function generateAiAssessment(
  body: Record<string, unknown>,
): Promise<string | null> {
  if (!anthropic) return null;

  const model = process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001";
  const quizLabel =
    QUIZ_TYPE_LABELS[body.quizType as string] || (body.quizType as string);

  const prompt = `You are Robert Cushman, an expert English communication coach for executive professionals in Latin America. Write a 2-3 paragraph personalized coaching assessment based on these quiz results. Be warm but direct. Use "you" language. Do not repeat the score numbers. Focus on what the results reveal about their communication patterns and what they should focus on first.

Quiz: ${quizLabel}
Score: ${body.totalScore}/100
Tier: ${body.scoreTier}
Primary Gap: ${body.primaryGapName || body.primaryGap}
Secondary Gap: ${body.secondaryGapName || body.secondaryGap}
Category Scores: ${JSON.stringify(body.categoryScores)}

Write in ${body.language === "es" ? "Spanish" : "English"}. Keep it under 200 words. Do not use markdown formatting. Plain text paragraphs only.`;

  try {
    const response = await anthropic.messages.create({
      model,
      max_tokens: 400,
      messages: [{ role: "user", content: prompt }],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    return textBlock ? textBlock.text : null;
  } catch (err) {
    console.error("AI assessment error:", err);
    return null;
  }
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

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

    // Use client-provided scores (the client scoring engine is the source of truth)
    // Backwards-compatible: accept totalScore OR score from older client builds
    const totalScore = Number(
      body.totalScore ?? body.score ?? NaN,
    );
    if (isNaN(totalScore)) {
      res.status(400).json({
        success: false,
        error: "Missing score data: totalScore is required",
      });
      return;
    }
    const rawScore = Number(body.rawScore || totalScore);
    // Derive scoreTier from score if client didn't send it (backwards compat)
    const scoreTier = body.scoreTier
      ? String(body.scoreTier)
      : totalScore >= 70
        ? "Executive Presence"
        : totalScore >= 40
          ? "Passive Proficiency"
          : "Credibility Gap";
    const categoryScores = body.categoryScores || {};
    const primaryGap = String(body.primaryGap || "");
    const secondaryGap = String(body.secondaryGap || "");

    // Build answers array for storage
    const answersArray = Object.entries(body.answers).map(
      ([qId, answerIndex]) => ({
        question_number: parseInt(qId.replace("q", "")),
        answer_index: answerIndex,
      }),
    );

    // Generate AI assessment (with timeout so it doesn't block too long)
    let aiAssessment: string | null = null;
    try {
      aiAssessment = await Promise.race([
        generateAiAssessment(body),
        new Promise<null>((resolve) => setTimeout(() => resolve(null), 8000)),
      ]);
    } catch {
      console.error("AI assessment timed out or failed");
    }

    // Insert into Neon PostgreSQL
    const rows = await sql`
      INSERT INTO quiz_submissions (
        name, email, company, phone,
        quiz_type, quiz_version, language,
        raw_score, total_score, score_tier,
        category_scores, primary_gap, secondary_gap,
        ai_assessment,
        answers, completion_time_ms, device_type, browser, referrer,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term
      ) VALUES (
        ${body.name}, ${body.email}, ${body.company || null}, ${body.phone || null},
        ${body.quizType}, ${"v1.0"}, ${body.language},
        ${rawScore}, ${totalScore}, ${scoreTier},
        ${JSON.stringify(categoryScores)}, ${primaryGap}, ${secondaryGap},
        ${aiAssessment},
        ${JSON.stringify(answersArray)}, ${body.completionTime || null}, ${body.deviceType || null}, ${body.browser || null}, ${body.referrer || null},
        ${body.utmSource || null}, ${body.utmMedium || null}, ${body.utmCampaign || null}, ${body.utmContent || null}, ${body.utmTerm || null}
      ) RETURNING id
    `;

    const submissionId = rows[0].id;

    // Send emails (don't block the response)
    if (resend) {
      const emailPromises: Promise<unknown>[] = [];

      // Admin notification email
      if (process.env.NOTIFICATION_EMAIL) {
        emailPromises.push(
          resend.emails
            .send({
              from:
                process.env.RESEND_FROM_EMAIL ||
                "NY English Quiz <onboarding@resend.dev>",
              to: process.env.NOTIFICATION_EMAIL,
              subject: `New Quiz Lead: ${body.name} \u2014 ${totalScore}/100 ${scoreTier}`,
              html: buildAdminEmailHtml(body),
            })
            .catch((err: Error) =>
              console.error("Admin email error:", err),
            ),
        );
      }

      // Quiz taker email
      if (body.email) {
        const isSpanish = body.language === "es";
        emailPromises.push(
          resend.emails
            .send({
              from:
                process.env.RESEND_FROM_EMAIL ||
                "NY English Teacher <onboarding@resend.dev>",
              to: body.email,
              subject: isSpanish
                ? `${body.name}, tu Puntaje de Comunicaci\u00F3n: ${totalScore}/100`
                : `${body.name}, Your Communication Score: ${totalScore}/100`,
              html: buildQuizTakerEmailHtml(body),
            })
            .catch((err: Error) =>
              console.error("Quiz taker email error:", err),
            ),
        );
      }

      // Fire and forget
      Promise.all(emailPromises).catch(() => {});
    }

    res.status(200).json({
      success: true,
      submission_id: submissionId,
      score: totalScore,
      score_tier: scoreTier,
      ai_assessment: aiAssessment,
    });
  } catch (error) {
    console.error("Function error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
