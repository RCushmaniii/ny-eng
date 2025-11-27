import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rfhqbylzorsdoqwmiiqw.supabase.co";
const supabaseServiceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmaHFieWx6b3JzZG9xd21paXF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTY1NTc3MiwiZXhwIjoyMDc3MjMxNzcyfQ.PO34XI9q4PF1Cgze7VBp-F8KMr99FyNFFXYv0HqCvCs";
const supabase = createClient(
  supabaseUrl,
  supabaseServiceRoleKey
);
async function submitQuiz(payload) {
  try {
    const { data: submission, error: submissionError } = await supabase.from("quiz_submissions").insert({
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
      utm_term: payload.utm_term || null
    }).select().single();
    if (submissionError) {
      console.error("Submission error:", submissionError);
      throw submissionError;
    }
    if (!submission) {
      throw new Error("No submission data returned");
    }
    const answerRecords = payload.answers.map((a) => ({
      submission_id: submission.id,
      question_number: a.question_number,
      question_text: a.question_text,
      answer_text: a.answer_text,
      answer_index: a.answer_index,
      points: a.points,
      category: a.category
    }));
    const { error: answersError } = await supabase.from("quiz_answers").insert(answerRecords);
    if (answersError) {
      console.error("Answers error:", answersError);
      throw answersError;
    }
    return {
      success: true,
      submission_id: submission.id,
      message: "Quiz submitted successfully"
    };
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}
async function getAllSubmissions(filters) {
  try {
    let query = supabase.from("quiz_submissions").select("*", { count: "exact" }).order("created_at", { ascending: false });
    if (filters?.score_tier) {
      query = query.eq("score_tier", filters.score_tier);
    }
    if (filters?.language) {
      query = query.eq("language", filters.language);
    }
    if (filters?.booked_consultation !== void 0) {
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
      total: count
    };
  } catch (error) {
    console.error("Error getting submissions:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}

export { supabase as a, getAllSubmissions as g, submitQuiz as s };
