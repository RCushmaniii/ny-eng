/**
 * Database Client - Neon PostgreSQL
 *
 * Migrated from Supabase to Neon serverless PostgreSQL.
 * Maintains same interface for backward compatibility.
 */

import { sql } from "./neon";

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
    const rows = await sql`
      INSERT INTO quiz_submissions (
        name, email, company, phone,
        quiz_type, quiz_version, language,
        raw_score, total_score, score_tier,
        category_scores, primary_gap, secondary_gap,
        completion_time_ms, device_type, browser, referrer,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        answers
      ) VALUES (
        ${payload.name}, ${payload.email}, ${payload.company || null}, ${payload.phone || null},
        ${payload.quiz_type}, ${payload.quiz_version}, ${payload.language},
        ${payload.raw_score}, ${payload.total_score}, ${payload.score_tier},
        ${JSON.stringify(payload.category_scores)}, ${JSON.stringify(payload.primary_gap)}, ${JSON.stringify(payload.secondary_gap)},
        ${payload.completion_time_ms || null}, ${payload.device_type || null}, ${payload.browser || null}, ${payload.referrer || null},
        ${payload.utm_source || null}, ${payload.utm_medium || null}, ${payload.utm_campaign || null}, ${payload.utm_content || null}, ${payload.utm_term || null},
        ${JSON.stringify(payload.answers)}
      ) RETURNING id
    `;

    const submissionId = rows[0].id;

    // 2. Insert all answers
    if (payload.answers && payload.answers.length > 0) {
      try {
        for (const a of payload.answers) {
          await sql`
            INSERT INTO quiz_answers (
              submission_id, question_number, question_text,
              answer_text, answer_index, points, category
            ) VALUES (
              ${submissionId}, ${a.question_number}, ${a.question_text},
              ${a.answer_text}, ${a.answer_index}, ${a.points}, ${a.category}
            )
          `;
        }
      } catch (answersError) {
        console.error("Error inserting answers:", answersError);
        // Don't fail the whole submission for answer errors
      }
    }

    return {
      success: true,
      submission_id: submissionId,
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
    const submissions = await sql`
      SELECT * FROM quiz_submissions WHERE id = ${submissionId}
    `;

    if (submissions.length === 0) {
      throw new Error("Submission not found");
    }

    const submission = submissions[0];

    const answers = await sql`
      SELECT * FROM quiz_answers
      WHERE submission_id = ${submissionId}
      ORDER BY question_number ASC
    `;

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
    const limitVal = filters?.limit || 50;
    const offsetVal = filters?.offset || 0;

    let submissions;
    let countResult;

    if (!filters?.score_tier && !filters?.language && filters?.booked_consultation === undefined) {
      submissions = await sql`
        SELECT * FROM quiz_submissions
        ORDER BY created_at DESC
        LIMIT ${limitVal} OFFSET ${offsetVal}
      `;
      countResult = await sql`SELECT COUNT(*) as total FROM quiz_submissions`;
    } else if (filters?.score_tier && !filters?.language && filters?.booked_consultation === undefined) {
      submissions = await sql`
        SELECT * FROM quiz_submissions
        WHERE score_tier = ${filters.score_tier}
        ORDER BY created_at DESC
        LIMIT ${limitVal} OFFSET ${offsetVal}
      `;
      countResult = await sql`SELECT COUNT(*) as total FROM quiz_submissions WHERE score_tier = ${filters.score_tier}`;
    } else if (!filters?.score_tier && filters?.language && filters?.booked_consultation === undefined) {
      submissions = await sql`
        SELECT * FROM quiz_submissions
        WHERE language = ${filters.language}
        ORDER BY created_at DESC
        LIMIT ${limitVal} OFFSET ${offsetVal}
      `;
      countResult = await sql`SELECT COUNT(*) as total FROM quiz_submissions WHERE language = ${filters.language}`;
    } else if (!filters?.score_tier && !filters?.language && filters?.booked_consultation !== undefined) {
      submissions = await sql`
        SELECT * FROM quiz_submissions
        WHERE booked_consultation = ${filters.booked_consultation}
        ORDER BY created_at DESC
        LIMIT ${limitVal} OFFSET ${offsetVal}
      `;
      countResult = await sql`SELECT COUNT(*) as total FROM quiz_submissions WHERE booked_consultation = ${filters.booked_consultation}`;
    } else {
      // Multiple filters — build with all three
      const tier = filters?.score_tier || null;
      const lang = filters?.language || null;
      const booked = filters?.booked_consultation ?? null;

      submissions = await sql`
        SELECT * FROM quiz_submissions
        WHERE (${tier}::text IS NULL OR score_tier = ${tier})
          AND (${lang}::text IS NULL OR language = ${lang})
          AND (${booked}::boolean IS NULL OR booked_consultation = ${booked})
        ORDER BY created_at DESC
        LIMIT ${limitVal} OFFSET ${offsetVal}
      `;
      countResult = await sql`
        SELECT COUNT(*) as total FROM quiz_submissions
        WHERE (${tier}::text IS NULL OR score_tier = ${tier})
          AND (${lang}::text IS NULL OR language = ${lang})
          AND (${booked}::boolean IS NULL OR booked_consultation = ${booked})
      `;
    }

    return {
      success: true,
      submissions: submissions || [],
      total: parseInt(countResult[0]?.total || "0", 10),
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
  bookingDate: string,
) {
  try {
    await sql`
      UPDATE quiz_submissions
      SET booked_consultation = true, booking_date = ${bookingDate}
      WHERE id = ${submissionId}
    `;

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
    await sql`
      UPDATE quiz_submissions
      SET clicked_cta = true
      WHERE id = ${submissionId}
    `;

    return { success: true };
  } catch (error) {
    console.error("Error tracking CTA click:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
