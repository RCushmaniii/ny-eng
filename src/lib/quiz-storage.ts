/**
 * Quiz Session Storage Utilities
 *
 * Manages quiz data in browser sessionStorage with proper namespacing
 * to prevent collisions when users take multiple quizzes.
 */

import type { QuizType, QuizAnswers } from "@/data/quiz/types";

/**
 * Quiz storage utilities with namespaced keys
 * Prevents collision when user takes multiple quiz types
 */
export const QuizStorage = {
  /**
   * Save user's quiz answers
   *
   * @param quizType - Quiz type identifier
   * @param answers - User's answers (e.g., { q1: 2, q2: 0, ... })
   */
  saveAnswers(quizType: QuizType, answers: QuizAnswers): void {
    const key = `quiz_${quizType}_answers`;
    sessionStorage.setItem(key, JSON.stringify(answers));
  },

  /**
   * Get user's quiz answers with validation
   *
   * @param quizType - Quiz type identifier
   * @returns User's answers or null if not found/invalid
   */
  getAnswers(quizType: QuizType): QuizAnswers | null {
    const key = `quiz_${quizType}_answers`;
    const data = sessionStorage.getItem(key);
    if (!data) return null;

    try {
      const parsed = JSON.parse(data);
      // Basic validation: must be an object with question keys
      if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
        console.error("Invalid quiz answers format: expected object");
        return null;
      }
      return parsed as QuizAnswers;
    } catch (e) {
      console.error("Failed to parse quiz answers:", e);
      return null;
    }
  },

  /**
   * Save quiz start time (for completion time tracking)
   *
   * @param quizType - Quiz type identifier
   */
  saveStartTime(quizType: QuizType): void {
    const key = `quiz_${quizType}_start`;
    sessionStorage.setItem(key, Date.now().toString());
  },

  /**
   * Get completion time in milliseconds
   *
   * @param quizType - Quiz type identifier
   * @returns Completion time in ms, or 0 if start time not found
   */
  getCompletionTime(quizType: QuizType): number {
    const key = `quiz_${quizType}_start`;
    const start = sessionStorage.getItem(key);
    if (!start) return 0;
    return Date.now() - parseInt(start);
  },

  /**
   * Save lead data after form submission
   *
   * @param quizType - Quiz type identifier
   * @param leadData - Lead information
   */
  saveLeadData(quizType: QuizType, leadData: Record<string, unknown>): void {
    const key = `quiz_${quizType}_lead`;
    sessionStorage.setItem(key, JSON.stringify(leadData));
  },

  /**
   * Get saved lead data with validation
   *
   * @param quizType - Quiz type identifier
   * @returns Lead data or null if not found/invalid
   */
  getLeadData(quizType: QuizType): Record<string, unknown> | null {
    const key = `quiz_${quizType}_lead`;
    const data = sessionStorage.getItem(key);
    if (!data) return null;

    try {
      const parsed = JSON.parse(data);
      if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
        console.error("Invalid lead data format: expected object");
        return null;
      }
      return parsed as Record<string, unknown>;
    } catch (e) {
      console.error("Failed to parse lead data:", e);
      return null;
    }
  },

  /**
   * Save quiz score
   *
   * @param quizType - Quiz type identifier
   * @param score - Total score (0-100)
   */
  saveScore(quizType: QuizType, score: number): void {
    const key = `quiz_${quizType}_score`;
    sessionStorage.setItem(key, score.toString());
  },

  /**
   * Get saved quiz score
   *
   * @param quizType - Quiz type identifier
   * @returns Score or null if not found
   */
  getScore(quizType: QuizType): number | null {
    const key = `quiz_${quizType}_score`;
    const data = sessionStorage.getItem(key);
    return data ? parseInt(data) : null;
  },

  /**
   * Clear all quiz data for a specific quiz type
   *
   * @param quizType - Quiz type identifier
   */
  clear(quizType: QuizType): void {
    const keys = [
      `quiz_${quizType}_answers`,
      `quiz_${quizType}_start`,
      `quiz_${quizType}_lead`,
      `quiz_${quizType}_score`,
    ];

    keys.forEach((key) => sessionStorage.removeItem(key));
  },

  /**
   * Clear all quiz data (all quiz types)
   * Useful for testing or reset functionality
   *
   * Note: Keep this list in sync with QuizType in types.ts
   */
  clearAll(): void {
    const quizTypes: QuizType[] = [
      "it-services",
      "professional-services",
      "sales-marketing",
      "executives",
      "interview-coaching",
      "high-stakes", // Added: was missing from original list
    ];

    quizTypes.forEach((quizType) => this.clear(quizType));
  },
};
