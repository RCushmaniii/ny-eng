/**
 * Netlify Function: Quiz Submit
 * 
 * This is a standalone Netlify Function that handles quiz submissions.
 * It's called via proxy from Hostinger: /api/quiz/submit -> Netlify
 */

const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client with service role key to bypass RLS
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET || process.env.SUPABASE_ANON_KEY
);

// Scoring logic (simplified version)
function calculateScore(answers, quizType) {
  // This is a simplified scoring - the full logic is in your Astro codebase
  let totalScore = 0;
  const answerValues = Object.values(answers);
  
  answerValues.forEach(answerIndex => {
    // Each answer index corresponds to a score (0=lowest, 3=highest typically)
    totalScore += (3 - answerIndex) * 25 / answerValues.length;
  });
  
  // Normalize to 0-100
  totalScore = Math.round(Math.min(100, Math.max(0, totalScore)));
  
  let scoreTier = 'Credibility Block';
  if (totalScore >= 70) scoreTier = 'Conversation-Ready';
  else if (totalScore >= 40) scoreTier = 'Million-Dollar Gap';
  else scoreTier = 'Credibility Block';
  
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
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.nyenglishteacher.com',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.nyenglishteacher.com'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);

    // Validate required fields
    if (!body.name || !body.email || !body.answers || !body.language || !body.quizType) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': 'https://www.nyenglishteacher.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, answers, language, quizType'
        })
      };
    }

    // Calculate score
    const scoreBreakdown = calculateScore(body.answers, body.quizType);

    // Build submission payload
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
      category_scores: scoreBreakdown.categoryScores,
      primary_gap: scoreBreakdown.primaryGap,
      secondary_gap: scoreBreakdown.secondaryGap,
      answers: Object.entries(body.answers).map(([qId, answerIndex]) => ({
        question_number: parseInt(qId.replace('q', '')),
        answer_index: answerIndex
      })),
      completion_time_ms: body.completionTime,
      device_type: body.deviceType,
      browser: body.browser,
      referrer: body.referrer,
      utm_source: body.utmSource,
      utm_medium: body.utmMedium,
      utm_campaign: body.utmCampaign,
      created_at: new Date().toISOString()
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('quiz_submissions')
      .insert([payload])
      .select('id')
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': 'https://www.nyenglishteacher.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          success: false,
          error: 'Database error: ' + error.message
        })
      };
    }

    // Send email notification (optional - requires Resend setup)
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      try {
        const Resend = require('resend').Resend;
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: 'NY English Quiz <onboarding@resend.dev>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `🎯 New Quiz Lead: ${body.name} (${body.quizType})`,
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
        'Access-Control-Allow-Origin': 'https://www.nyenglishteacher.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        submission_id: data.id,
        score: scoreBreakdown.totalScore,
        score_tier: scoreBreakdown.scoreTier
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.nyenglishteacher.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        error: error.message || 'Internal server error'
      })
    };
  }
};
