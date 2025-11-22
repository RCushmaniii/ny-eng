/**
 * Supabase Client Configuration
 *
 * Provides type-safe Supabase client for quiz submissions
 */

import { createClient } from "@supabase/supabase-js";

// Environment variables
// Prefer service role key for server-side usage (APIs, admin),
// fall back to anon key if service key is not provided.
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseServiceRoleKey =
  import.meta.env.SUPABASE_SECRET || import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !(supabaseServiceRoleKey || supabaseAnonKey)) {
  throw new Error("Missing Supabase environment variables. Check .env file.");
}

// Create Supabase client
// NOTE: Service role bypasses RLS and is safe here because this code only
// runs in server-side API routes, never in the browser bundle.
export const supabase = createClient(
  supabaseUrl,
  supabaseServiceRoleKey || supabaseAnonKey
);

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface QuizSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  total_score: number;
  raw_score?: number | null;
  score_tier: "Credibility Block" | "Million-Dollar Gap" | "Conversation-Ready";
  category_scores?: {
    clarity: number;
    confidence: number;
    realTime: number;
    negotiation: number;
    cultural: number;
  } | null;
  primary_gap?: string | null;
  secondary_gap?: string | null;
  language: "en" | "es";
  created_at?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  referrer?: string | null;
  viewed_report?: boolean;
  clicked_cta?: boolean;
  booked_consultation?: boolean;
  booking_date?: string | null;
  gdpr_consent?: boolean;
  marketing_opt_in?: boolean;
}

export interface QuizAnswer {
  id?: string;
  submission_id: string;
  question_number: number;
  question_text: string;
  answer_text: string;
  points: number;
  category?: string | null;
  created_at?: string;
}

export interface QuizSubmissionPayload {
  // Lead info
  name: string;
  email: string;
  company?: string;
  phone?: string;

  // Quiz metadata
  quiz_type: string;
  quiz_version: string;
  language: "en" | "es";

  // Scoring snapshot
  raw_score: number;
  total_score: number;
  score_tier: "Credibility Block" | "Million-Dollar Gap" | "Conversation-Ready";
  category_scores: {
    clarity: number;
    confidence: number;
    realTime: number;
    negotiation: number;
    cultural: number;
  };
  primary_gap: {
    category: string;
    categoryName: string;
    score: number;
    impact: string;
    recommendation: string;
    urgency: "high" | "medium" | "low";
  };
  secondary_gap: {
    category: string;
    categoryName: string;
    score: number;
    impact: string;
    recommendation: string;
    urgency: "high" | "medium" | "low";
  };

  // Answer details (6 questions)
  answers: Array<{
    question_number: number;
    question_text: string;
    answer_text: string;
    answer_index: number;
    points: number;
    category: string;
  }>;

  // Behavioral data
  completion_time_ms?: number;
  device_type?: string;
  browser?: string;
  referrer?: string;

  // Marketing attribution
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

// =============================================================================
// DATABASE FUNCTIONS
// =============================================================================

/**
 * Submit a complete quiz with all answers
 */
export async function submitQuiz(payload: QuizSubmissionPayload) {
  try {
    // 1. Insert the submission
    const { data: submission, error: submissionError } = await supabase
      .from("quiz_submissions")
      .insert({
        // Lead info
        name: payload.name,
        email: payload.email,
        company: payload.company || null,
        phone: payload.phone || null,

        // Quiz metadata
        quiz_type: payload.quiz_type,
        quiz_version: payload.quiz_version,
        language: payload.language,

        // Scoring snapshot
        raw_score: payload.raw_score,
        total_score: payload.total_score,
        score_tier: payload.score_tier,
        category_scores: payload.category_scores,
        primary_gap: payload.primary_gap,
        secondary_gap: payload.secondary_gap,

        // Behavioral data
        completion_time_ms: payload.completion_time_ms || null,
        device_type: payload.device_type || null,
        browser: payload.browser || null,
        referrer: payload.referrer || null,

        // Marketing attribution
        utm_source: payload.utm_source || null,
        utm_medium: payload.utm_medium || null,
        utm_campaign: payload.utm_campaign || null,
        utm_content: payload.utm_content || null,
        utm_term: payload.utm_term || null,
      })
      .select()
      .single();

    if (submissionError) {
      console.error("Submission error:", submissionError);
      throw submissionError;
    }

    if (!submission) {
      throw new Error("No submission data returned");
    }

    // 2. Insert all answers
    const answerRecords = payload.answers.map((a) => ({
      submission_id: submission.id,
      question_number: a.question_number,
      question_text: a.question_text,
      answer_text: a.answer_text,
      answer_index: a.answer_index,
      points: a.points,
      category: a.category,
    }));

    const { error: answersError } = await supabase
      .from("quiz_answers")
      .insert(answerRecords);

    if (answersError) {
      console.error("Answers error:", answersError);
      throw answersError;
    }

    return {
      success: true,
      submission_id: submission.id,
      message: "Quiz submitted successfully",
    };
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Get a submission by ID with all answers
 */
export async function getSubmission(submissionId: string) {
  try {
    // Get submission
    const { data: submission, error: submissionError } = await supabase
      .from("quiz_submissions")
      .select("*")
      .eq("id", submissionId)
      .single();

    if (submissionError) throw submissionError;

    // Get answers
    const { data: answers, error: answersError } = await supabase
      .from("quiz_answers")
      .select("*")
      .eq("submission_id", submissionId)
      .order("question_number");

    if (answersError) throw answersError;

    return {
      success: true,
      submission,
      answers,
    };
  } catch (error) {
    console.error("Error getting submission:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Get all submissions (for admin dashboard)
 */
export async function getAllSubmissions(filters?: {
  score_tier?: string;
  language?: string;
  booked_consultation?: boolean;
  limit?: number;
  offset?: number;
}) {
  try {
    let query = supabase
      .from("quiz_submissions")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    // Apply filters
    if (filters?.score_tier) {
      query = query.eq("score_tier", filters.score_tier);
    }
    if (filters?.language) {
      query = query.eq("language", filters.language);
    }
    if (filters?.booked_consultation !== undefined) {
      query = query.eq("booked_consultation", filters.booked_consultation);
    }
    if (filters?.limit) {
      query = query.limit(filters.limit);
    }
    if (filters?.offset) {
      query = query.range(
        filters.offset,
        filters.offset + (filters.limit || 50) - 1
      );
    }

    const { data, error, count } = await query;

    if (error) throw error;

    return {
      success: true,
      submissions: data,
      total: count,
    };
  } catch (error) {
    console.error("Error getting submissions:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Update booking status when someone books a consultation
 */
export async function updateBookingStatus(
  submissionId: string,
  bookingDate: string
) {
  try {
    const { error } = await supabase
      .from("quiz_submissions")
      .update({
        booked_consultation: true,
        booking_date: bookingDate,
      })
      .eq("id", submissionId);

    if (error) throw error;

    return {
      success: true,
      message: "Booking status updated",
    };
  } catch (error) {
    console.error("Error updating booking status:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Track CTA clicks
 */
export async function trackCtaClick(submissionId: string) {
  try {
    const { error } = await supabase
      .from("quiz_submissions")
      .update({ clicked_cta: true })
      .eq("id", submissionId);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error("Error tracking CTA click:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
