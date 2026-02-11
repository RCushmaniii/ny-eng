/**
 * Netlify Function: Quiz Submit (Backup Endpoint)
 *
 * Primary traffic goes through Vercel (api/quiz/submit.ts).
 * This function is kept as a backup endpoint using the same Neon database.
 *
 * Uses client-provided scores (no server-side recalculation).
 */

const { neon } = require("@neondatabase/serverless");

exports.handler = async (event, context) => {
  // Determine allowed origin based on request origin
  const origin = event.headers.origin || event.headers.Origin;
  const allowedOrigins = [
    "https://www.nyenglishteacher.com",
    "http://localhost:4321",
    "http://localhost:4322",
    "http://localhost:3000",
  ];
  const allowedOrigin = allowedOrigins.includes(origin)
    ? origin
    : "https://www.nyenglishteacher.com";

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": allowedOrigin },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body);

    // Validate required fields
    if (
      !body.name ||
      !body.email ||
      !body.answers ||
      !body.language ||
      !body.quizType
    ) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error:
            "Missing required fields: name, email, answers, language, quizType",
        }),
      };
    }

    // Use client-provided scores (the client scoring engine is the source of truth)
    // Backwards-compatible: accept totalScore OR score from older client builds
    const totalScore = Number(
      body.totalScore !== undefined ? body.totalScore : body.score,
    );
    if (isNaN(totalScore)) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error: "Missing score data: totalScore is required",
        }),
      };
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

    // Build answers array
    const answersArray = Object.entries(body.answers).map(
      ([qId, answerIndex]) => ({
        question_number: parseInt(qId.replace("q", "")),
        answer_index: answerIndex,
      }),
    );

    // Initialize Neon SQL client
    const sql = neon(process.env.POSTGRES_URL);

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
        ${rawScore}, ${totalScore}, ${scoreTier},
        ${JSON.stringify(categoryScores)}, ${primaryGap}, ${secondaryGap},
        ${JSON.stringify(answersArray)}, ${body.completionTime || null}, ${body.deviceType || null}, ${body.browser || null}, ${body.referrer || null},
        ${body.utmSource || null}, ${body.utmMedium || null}, ${body.utmCampaign || null}, ${body.utmContent || null}, ${body.utmTerm || null}
      ) RETURNING id
    `;

    const submissionId = rows[0].id;

    // Send admin email notification (optional)
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      try {
        const Resend = require("resend").Resend;
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from:
            process.env.RESEND_FROM_EMAIL ||
            "NY English Quiz <onboarding@resend.dev>",
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Quiz Lead: ${body.name} \u2014 ${totalScore}/100 ${scoreTier}`,
          html: `
            <h2>New Quiz Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Company:</strong> ${body.company || "N/A"}</p>
            <p><strong>Score:</strong> ${totalScore}/100</p>
            <p><strong>Tier:</strong> ${scoreTier}</p>
            <p><strong>Quiz Type:</strong> ${body.quizType}</p>
            <p><strong>Language:</strong> ${body.language}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        submission_id: submissionId,
        score: totalScore,
        score_tier: scoreTier,
      }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        error: error.message || "Internal server error",
      }),
    };
  }
};
