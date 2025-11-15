/**
 * Quiz Submission API Endpoint
 * 
 * POST /api/quiz/submit
 * 
 * Accepts quiz form data and stores in Supabase
 */

export const prerender = false;

import type { APIRoute } from 'astro';
import { submitQuiz, type QuizSubmissionPayload } from '@/lib/supabase';
import { calculateQuizScore, QUESTION_SCORES } from '@/data/quiz/scoring';
import { questionsEn, questionsEs } from '@/data/quiz/questions';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.answers || !body.language) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, answers, language',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Get questions based on language
    const questions = body.language === 'es' ? questionsEs : questionsEn;

    // Calculate score using your scoring.ts logic
    const scoreBreakdown = calculateQuizScore(body.answers);

    // Build answer records with full context
    const answerRecords = Object.entries(body.answers).map(([qId, answerValue]) => {
      const questionNum = parseInt(qId.replace('q', ''));
      const question = questions.find(q => q.id === questionNum);
      const questionConfig = QUESTION_SCORES[qId as keyof typeof QUESTION_SCORES];
      
      // Find the answer config by matching the score value (not index)
      const answerConfig = questionConfig.answers.find(a => a.score === answerValue as number);
      
      if (!answerConfig) {
        console.error(`No answer config found for ${qId} with value ${answerValue}`);
        return {
          question_number: questionNum,
          question_text: question?.question || '',
          answer_text: 'Unknown',
          points: 0,
          category: questionConfig.category,
        };
      }

      return {
        question_number: questionNum,
        question_text: question?.question || '',
        answer_text: answerConfig.label,
        points: answerConfig.score,
        category: questionConfig.category,
      };
    });

    // Build submission payload
    const payload: QuizSubmissionPayload = {
      name: body.name,
      email: body.email,
      company: body.company || undefined,
      phone: body.phone || undefined,
      total_score: scoreBreakdown.totalScore,
      raw_score: scoreBreakdown.rawScore,
      score_tier: scoreBreakdown.scoreTier,
      category_scores: scoreBreakdown.categoryScores,
      primary_gap: scoreBreakdown.primaryGap.category,
      secondary_gap: scoreBreakdown.secondaryGap.category,
      answers: answerRecords,
      language: body.language,
      utm_source: body.utm_source,
      utm_medium: body.utm_medium,
      utm_campaign: body.utm_campaign,
      referrer: body.referrer,
      gdpr_consent: body.gdpr_consent || false,
      marketing_opt_in: body.marketing_opt_in || false,
    };

    // Submit to Supabase
    const result = await submitQuiz(payload);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error || 'Failed to submit quiz',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Return success with submission ID
    return new Response(
      JSON.stringify({
        success: true,
        submission_id: result.submission_id,
        score: scoreBreakdown.totalScore,
        score_tier: scoreBreakdown.scoreTier,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Quiz submission error:', error);
    
    // Extract detailed error message
    let errorMessage = 'Internal server error';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null && 'message' in error) {
      errorMessage = String(error.message);
    }
    
    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
