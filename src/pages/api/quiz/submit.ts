/**
 * Quiz Submission API Endpoint
 * 
 * POST /api/quiz/submit
 * 
 * Accepts quiz form data and stores in Supabase.
 * Now supports dynamic quiz types via config system.
 */

export const prerender = false;

import type { APIRoute } from 'astro';
import { submitQuiz, type QuizSubmissionPayload } from '@/lib/supabase';
import { calculateQuizScore } from '@/data/quiz/scoring';
import { getQuizConfig } from '@/data/quiz/configs';
import type { QuizType, Language } from '@/data/quiz/types';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.answers || !body.language || !body.quizType) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, answers, language, quizType',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Get quiz configuration for this quiz type and language
    const config = getQuizConfig(body.quizType as QuizType, body.language as Language);

    // Calculate score using universal scoring engine
    const scoreBreakdown = calculateQuizScore(body.answers, config);

    // Build answer records with full context from config
    const answerRecords = Object.entries(body.answers).map(([qId, answerIndex]) => {
      const questionNum = parseInt(qId.replace('q', ''));
      const question = config.questions.find(q => q.id === questionNum);
      
      if (!question) {
        console.error(`Question ${questionNum} not found in config`);
        return {
          question_number: questionNum,
          question_text: 'Unknown question',
          answer_text: 'Unknown answer',
          answer_index: answerIndex as number,
          points: 0,
          category: 'clarity' as const,
        };
      }

      const answer = question.answers[answerIndex as number];
      
      if (!answer) {
        console.error(`Answer index ${answerIndex} not found for question ${questionNum}`);
        return {
          question_number: questionNum,
          question_text: question.question,
          answer_text: 'Unknown answer',
          answer_index: answerIndex as number,
          points: 0,
          category: question.category,
        };
      }

      return {
        question_number: questionNum,
        question_text: question.question,
        answer_text: answer.label,
        answer_index: answer.index,
        points: answer.score,
        category: question.category,
      };
    });

    // Build submission payload
    const payload: QuizSubmissionPayload = {
      // Lead info
      name: body.name,
      email: body.email,
      company: body.company || undefined,
      phone: body.phone || undefined,
      
      // Quiz metadata
      quiz_type: body.quizType,
      quiz_version: 'v1.0',
      language: body.language,
      
      // Scoring snapshot
      raw_score: scoreBreakdown.rawScore,
      total_score: scoreBreakdown.totalScore,
      score_tier: scoreBreakdown.scoreTier,
      category_scores: scoreBreakdown.categoryScores,
      primary_gap: scoreBreakdown.primaryGap,
      secondary_gap: scoreBreakdown.secondaryGap,
      
      // Answer details
      answers: answerRecords,
      
      // Behavioral data
      completion_time_ms: body.completionTime,
      device_type: body.deviceType,
      browser: body.browser,
      referrer: body.referrer,
      
      // Marketing attribution
      utm_source: body.utmSource,
      utm_medium: body.utmMedium,
      utm_campaign: body.utmCampaign,
      utm_content: body.utmContent,
      utm_term: body.utmTerm,
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
