/**
 * Database Client - MySQL
 * 
 * Replaces Supabase with MySQL on Hostinger
 * Maintains same interface for backward compatibility
 */

import pool from './mysql';
import type { RowDataPacket, ResultSetHeader } from 'mysql2/promise';

// =============================================================================
// TYPE DEFINITIONS (same as Supabase version)
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
  const connection = await pool.getConnection();
  
  try {
    await connection.beginTransaction();

    // 1. Insert the submission
    const [submissionResult] = await connection.execute<ResultSetHeader>(
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
        payload.name,
        payload.email,
        payload.company || null,
        payload.phone || null,
        payload.quiz_type,
        payload.quiz_version,
        payload.language,
        payload.raw_score,
        payload.total_score,
        payload.score_tier,
        JSON.stringify(payload.category_scores),
        JSON.stringify(payload.primary_gap),
        JSON.stringify(payload.secondary_gap),
        payload.completion_time_ms || null,
        payload.device_type || null,
        payload.browser || null,
        payload.referrer || null,
        payload.utm_source || null,
        payload.utm_medium || null,
        payload.utm_campaign || null,
        payload.utm_content || null,
        payload.utm_term || null,
        JSON.stringify(payload.answers),
      ]
    );

    const submissionId = submissionResult.insertId.toString();

    // 2. Insert all answers
    if (payload.answers && payload.answers.length > 0) {
      const answerValues = payload.answers.map(a => [
        submissionId,
        a.question_number,
        a.question_text,
        a.answer_text,
        a.answer_index,
        a.points,
        a.category,
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
      success: true,
      submission_id: submissionId,
      message: "Quiz submitted successfully",
    };
  } catch (error) {
    await connection.rollback();
    console.error("Error submitting quiz:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  } finally {
    connection.release();
  }
}

/**
 * Get a submission by ID with all answers
 */
export async function getSubmission(submissionId: string) {
  try {
    // Get submission
    const [submissions] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM quiz_submissions WHERE id = ?',
      [submissionId]
    );

    if (submissions.length === 0) {
      throw new Error('Submission not found');
    }

    const submission = submissions[0];

    // Parse JSON fields
    if (submission.category_scores) {
      submission.category_scores = JSON.parse(submission.category_scores);
    }
    if (submission.primary_gap) {
      submission.primary_gap = JSON.parse(submission.primary_gap);
    }
    if (submission.secondary_gap) {
      submission.secondary_gap = JSON.parse(submission.secondary_gap);
    }
    if (submission.answers) {
      submission.answers = JSON.parse(submission.answers);
    }

    // Get answers
    const [answers] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM quiz_answers WHERE submission_id = ? ORDER BY question_number',
      [submissionId]
    );

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
    let query = 'SELECT * FROM quiz_submissions WHERE 1=1';
    const params: any[] = [];

    // Apply filters
    if (filters?.score_tier) {
      query += ' AND score_tier = ?';
      params.push(filters.score_tier);
    }
    if (filters?.language) {
      query += ' AND language = ?';
      params.push(filters.language);
    }
    if (filters?.booked_consultation !== undefined) {
      query += ' AND booked_consultation = ?';
      params.push(filters.booked_consultation);
    }

    query += ' ORDER BY created_at DESC';

    if (filters?.limit) {
      query += ' LIMIT ?';
      params.push(filters.limit);
    }
    if (filters?.offset) {
      query += ' OFFSET ?';
      params.push(filters.offset);
    }

    const [submissions] = await pool.execute<RowDataPacket[]>(query, params);

    // Parse JSON fields for each submission
    submissions.forEach(sub => {
      if (sub.category_scores) sub.category_scores = JSON.parse(sub.category_scores);
      if (sub.primary_gap) sub.primary_gap = JSON.parse(sub.primary_gap);
      if (sub.secondary_gap) sub.secondary_gap = JSON.parse(sub.secondary_gap);
      if (sub.answers) sub.answers = JSON.parse(sub.answers);
    });

    // Get total count
    const [countResult] = await pool.execute<RowDataPacket[]>(
      'SELECT COUNT(*) as total FROM quiz_submissions'
    );
    const total = countResult[0].total;

    return {
      success: true,
      submissions,
      total,
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
    await pool.execute(
      `UPDATE quiz_submissions 
       SET booked_consultation = TRUE, booking_date = ? 
       WHERE id = ?`,
      [bookingDate, submissionId]
    );

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
    await pool.execute(
      'UPDATE quiz_submissions SET clicked_cta = TRUE WHERE id = ?',
      [submissionId]
    );

    return { success: true };
  } catch (error) {
    console.error("Error tracking CTA click:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
