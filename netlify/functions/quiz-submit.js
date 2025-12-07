/**
 * Netlify Function: Quiz Submit
 * 
 * This is a standalone Netlify Function that handles quiz submissions.
 * It's called via proxy from Hostinger: /api/quiz/submit -> Netlify
 * 
 * Migrated from Supabase to MySQL on Hostinger.
 */

const mysql = require('mysql2/promise');

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Scoring logic (same as original)
function calculateScore(answers, quizType) {
  let totalScore = 0;
  const answerValues = Object.values(answers);
  
  answerValues.forEach(answerIndex => {
    totalScore += (3 - answerIndex) * 25 / answerValues.length;
  });

  totalScore = Math.round(Math.min(100, Math.max(0, totalScore)));

  let scoreTier = 'Credibility Block';
  if (totalScore >= 70) scoreTier = 'Conversation-Ready';
  else if (totalScore >= 40) scoreTier = 'Million-Dollar Gap';

  return {
    totalScore,
    scoreTier,
    rawScore: totalScore,
    categoryScores: {},
    primaryGap: 'clarity',
    secondaryGap: 'confidence'
  };
}

exports.handler = async (event, context) => {
  // Determine allowed origin based on request origin
  const origin = event.headers.origin || event.headers.Origin;
  const allowedOrigins = [
    'https://www.nyenglishteacher.com',
    'http://localhost:4321',
    'http://localhost:4322',
    'http://localhost:3000'
  ];
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : 'https://www.nyenglishteacher.com';

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': allowedOrigin },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);

    // Validate required fields (same as original)
    if (!body.name || !body.email || !body.answers || !body.language || !body.quizType) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, answers, language, quizType'
        })
      };
    }

    // Calculate score (same as original)
    const scoreBreakdown = calculateScore(body.answers, body.quizType);

    // Build payload (same structure as original)
    const payload = {
      name: body.name,
      email: body.email,
      company: body.company || null,
      phone: body.phone || null,
      quiz_type: body.quizType,
      quiz_version: 'v1.0',
      language: body.language,
      raw_score: scoreBreakdown.rawScore,
      total_score: scoreBreakdown.totalScore,
      score_tier: scoreBreakdown.scoreTier,
      category_scores: JSON.stringify(scoreBreakdown.categoryScores),
      primary_gap: scoreBreakdown.primaryGap,
      secondary_gap: scoreBreakdown.secondaryGap,
      answers: JSON.stringify(Object.entries(body.answers).map(([qId, answerIndex]) => ({
        question_number: parseInt(qId.replace('q', '')),
        answer_index: answerIndex
      }))),
      completion_time_ms: body.completionTime || null,
      device_type: body.deviceType || null,
      browser: body.browser || null,
      referrer: body.referrer || null,
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
      utm_content: body.utmContent || null,
      utm_term: body.utmTerm || null
    };

    // Insert into MySQL (instead of Supabase)
    const connection = await pool.getConnection();
    
    try {
      const [result] = await connection.execute(
        `INSERT INTO quiz_submissions (
          name, email, company, phone,
          quiz_type, quiz_version, language,
          raw_score, total_score, score_tier,
          category_scores, primary_gap, secondary_gap,
          answers, completion_time_ms, device_type, browser, referrer,
          utm_source, utm_medium, utm_campaign, utm_content, utm_term
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          payload.name, payload.email, payload.company, payload.phone,
          payload.quiz_type, payload.quiz_version, payload.language,
          payload.raw_score, payload.total_score, payload.score_tier,
          payload.category_scores, payload.primary_gap, payload.secondary_gap,
          payload.answers, payload.completion_time_ms, payload.device_type,
          payload.browser, payload.referrer, payload.utm_source, payload.utm_medium,
          payload.utm_campaign, payload.utm_content, payload.utm_term
        ]
      );

      // Send email notification (optional - requires Resend setup)
      if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
        try {
          const Resend = require('resend').Resend;
          const resend = new Resend(process.env.RESEND_API_KEY);

          await resend.emails.send({
            from: 'NY English Quiz <onboarding@resend.dev>',
            to: process.env.NOTIFICATION_EMAIL,
            subject: `New Quiz Lead: ${body.name} (${body.quizType})`,
            html: `
              <h2>New Quiz Submission</h2>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Score:</strong> ${scoreBreakdown.totalScore}/100</p>
              <p><strong>Quiz Type:</strong> ${body.quizType}</p>
            `
          });
        } catch (emailError) {
          console.error('Email error:', emailError);
          // Don't fail the submission if email fails
        }
      }

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: true,
          submission_id: result.insertId,
          score: scoreBreakdown.totalScore,
          score_tier: scoreBreakdown.scoreTier
        })
      };
    } finally {
      connection.release();
    }

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        error: error.message || 'Internal server error'
      })
    };
  }
};
