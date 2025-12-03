/**
 * Netlify Function - Quiz Submission
 * 
 * Handles quiz submissions from Hostinger site
 * Connects to MySQL database on Hostinger
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

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': 'https://www.nyenglishteacher.com',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body);
    
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // 1. Insert the submission
      const [submissionResult] = await connection.execute(
        `INSERT INTO quiz_submissions (
          name, email, company, phone,
          quiz_type, quiz_version, language,
          raw_score, total_score, score_tier,
          category_scores, primary_gap, secondary_gap,
          completion_time_ms, device_type, browser, referrer,
          utm_source, utm_medium, utm_campaign, utm_content, utm_term,
          answers
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          payload.name ?? null,
          payload.email ?? null,
          payload.company ?? null,
          payload.phone ?? null,
          payload.quiz_type ?? null,
          payload.quiz_version ?? null,
          payload.language ?? null,
          payload.raw_score ?? null,
          payload.total_score ?? null,
          payload.score_tier ?? null,
          payload.category_scores ? JSON.stringify(payload.category_scores) : null,
          payload.primary_gap ? JSON.stringify(payload.primary_gap) : null,
          payload.secondary_gap ? JSON.stringify(payload.secondary_gap) : null,
          payload.completion_time_ms ?? null,
          payload.device_type ?? null,
          payload.browser ?? null,
          payload.referrer ?? null,
          payload.utm_source ?? null,
          payload.utm_medium ?? null,
          payload.utm_campaign ?? null,
          payload.utm_content ?? null,
          payload.utm_term ?? null,
          payload.answers ? JSON.stringify(payload.answers) : null,
        ]
      );

      const submissionId = submissionResult.insertId.toString();

      // 2. Insert all answers
      if (payload.answers && payload.answers.length > 0) {
        const answerValues = payload.answers.map(a => [
          submissionId,
          a.question_number ?? null,
          a.question_text ?? null,
          a.answer_text ?? null,
          a.answer_index ?? null,
          a.points ?? null,
          a.category ?? null,
        ]);

        await connection.query(
          `INSERT INTO quiz_answers (
            submission_id, question_number, question_text,
            answer_text, answer_index, points, category
          ) VALUES ?`,
          [answerValues]
        );
      }

      await connection.commit();

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          submission_id: submissionId,
          message: 'Quiz submitted successfully',
        }),
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error submitting quiz:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || 'Internal server error',
      }),
    };
  }
};
