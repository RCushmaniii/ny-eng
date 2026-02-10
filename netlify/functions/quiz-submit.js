/**
 * Netlify Function: Quiz Submit (Backup Endpoint)
 *
 * Primary traffic now goes through Vercel (api/quiz/submit.ts).
 * This function is kept as a backup endpoint using the same Neon database.
 */

const { neon } = require("@neondatabase/serverless");

// Scoring logic (same as Vercel endpoint)
function calculateScore(answers, quizType) {
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

    // Calculate score
    const scoreBreakdown = calculateScore(body.answers, body.quizType);

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
        ${scoreBreakdown.rawScore}, ${scoreBreakdown.totalScore}, ${scoreBreakdown.scoreTier},
        ${JSON.stringify(scoreBreakdown.categoryScores)}, ${scoreBreakdown.primaryGap}, ${scoreBreakdown.secondaryGap},
        ${JSON.stringify(answersArray)}, ${body.completionTime || null}, ${body.deviceType || null}, ${body.browser || null}, ${body.referrer || null},
        ${body.utmSource || null}, ${body.utmMedium || null}, ${body.utmCampaign || null}, ${body.utmContent || null}, ${body.utmTerm || null}
      ) RETURNING id
    `;

    const submissionId = rows[0].id;

    // Send email notification (optional)
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      try {
        const Resend = require("resend").Resend;
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "NY English Quiz <onboarding@resend.dev>",
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Quiz Lead: ${body.name} (${body.quizType})`,
          html: `
            <h2>New Quiz Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Score:</strong> ${scoreBreakdown.totalScore}/100</p>
            <p><strong>Quiz Type:</strong> ${body.quizType}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
        // Don't fail the submission if email fails
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
        score: scoreBreakdown.totalScore,
        score_tier: scoreBreakdown.scoreTier,
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
