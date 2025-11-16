/**
 * Quiz System - Core TypeScript Types
 * 
 * Defines all types for the dynamic quiz lead magnet system.
 * Used across all quiz configurations, scoring logic, and API endpoints.
 */

// =============================================================================
// QUIZ CATEGORIES
// =============================================================================

/**
 * Communication skill categories assessed in the quiz
 * All quizzes use these same 5 categories for consistency
 */
export type QuizCategory = 
  | 'clarity'           // Clear communication under pressure
  | 'confidence'        // Authority and self-assurance
  | 'real-time'        // Spontaneous response ability
  | 'negotiation'      // Defending position and persuasion
  | 'cultural';        // Rapport building and business fluency

// =============================================================================
// QUIZ TYPES (PERSONAS)
// =============================================================================

/**
 * Available quiz types (personas)
 * Each represents a different target audience
 */
export type QuizType = 
  | 'it-services'
  | 'professional-services'
  | 'sales-marketing'
  | 'executives'
  | 'interview-coaching';

// =============================================================================
// LANGUAGE SUPPORT
// =============================================================================

/**
 * Supported languages for bilingual quiz system
 */
export type Language = 'en' | 'es';

// =============================================================================
// SCORING TIERS
// =============================================================================

/**
 * Score tier classifications (0-100 scale)
 * - Conversation-Ready: 70-100 (Strong communication skills)
 * - Million-Dollar Gap: 40-69 (Moderate gaps costing deals)
 * - Credibility Block: 0-39 (Critical gaps limiting growth)
 */
export type ScoreTier = 
  | 'Conversation-Ready' 
  | 'Million-Dollar Gap' 
  | 'Credibility Block';

// =============================================================================
// ANSWER STRUCTURE
// =============================================================================

/**
 * Individual answer option within a question
 */
export interface Answer {
  /** Answer position in array (0-3) */
  index: number;
  
  /** Points awarded for this answer (0, 3, 6, or 10) */
  score: number;
  
  /** Display text for this answer option */
  label: string;
}

// =============================================================================
// QUESTION STRUCTURE
// =============================================================================

/**
 * Individual quiz question
 * All quizzes have exactly 6 questions
 */
export interface Question {
  /** Question number (1-6) */
  id: number;
  
  /** Category this question assesses */
  category: QuizCategory;
  
  /** Question text displayed to user */
  question: string;
  
  /** Array of 4 answer options */
  answers: Answer[];
}

// =============================================================================
// GAP ANALYSIS
// =============================================================================

/**
 * Gap definition for a specific category
 * Provides personalized insights based on low scores
 */
export interface GapDefinition {
  /** Display name for this category */
  name: string;
  
  /** Business impact description when score is low */
  lowScoreImpact: string;
  
  /** Actionable recommendation for improvement */
  recommendation: string;
  
  /** Urgency level for addressing this gap */
  urgency: 'high' | 'medium' | 'low';
}

/**
 * Calculated gap analysis for a submission
 * Identifies weakest areas with specific guidance
 */
export interface GapAnalysis {
  /** Category identifier */
  category: QuizCategory;
  
  /** Display name */
  categoryName: string;
  
  /** Score in this category (0-100) */
  score: number;
  
  /** Business impact description */
  impact: string;
  
  /** Actionable recommendation */
  recommendation: string;
  
  /** Urgency level */
  urgency: 'high' | 'medium' | 'low';
}

// =============================================================================
// LANGUAGE-SPECIFIC CONFIG
// =============================================================================

/**
 * Quiz configuration for a single language
 */
export interface LanguageConfig {
  /** Quiz title (e.g., "IT Communication Confidence Assessment") */
  title: string;
  
  /** Quiz subtitle/description */
  subtitle: string;
  
  /** Array of 6 questions */
  questions: Question[];
  
  /** Gap definitions for all 5 categories */
  gapDefinitions: Record<QuizCategory, GapDefinition>;
}

// =============================================================================
// QUIZ CONFIGURATION
// =============================================================================

/**
 * Complete quiz configuration for a persona
 * Contains both English and Spanish versions
 */
export interface QuizConfig {
  /** Quiz type identifier */
  quizId: QuizType;
  
  /** English configuration */
  en: LanguageConfig;
  
  /** Spanish configuration */
  es: LanguageConfig;
}

// =============================================================================
// SCORING RESULTS
// =============================================================================

/**
 * Category-specific scores (0-100 for each)
 */
export interface CategoryScores {
  clarity: number;
  confidence: number;
  realTime: number;
  negotiation: number;
  cultural: number;
}

/**
 * Complete score breakdown from quiz submission
 */
export interface ScoreBreakdown {
  /** Normalized score (0-100) */
  totalScore: number;
  
  /** Raw points earned (0-60) */
  rawScore: number;
  
  /** Maximum possible points (always 60) */
  maxPossible: number;
  
  /** Score tier classification */
  scoreTier: ScoreTier;
  
  /** Scores by category (0-100 each) */
  categoryScores: CategoryScores;
  
  /** Primary weakness (lowest scoring category) */
  primaryGap: GapAnalysis;
  
  /** Secondary weakness (second lowest category) */
  secondaryGap: GapAnalysis;
}

// =============================================================================
// SUBMISSION DATA
// =============================================================================

/**
 * User's quiz answers
 * Format: { q1: 2, q2: 0, q3: 1, ... }
 * Values are answer indices (0-3)
 */
export type QuizAnswers = Record<string, number>;

/**
 * Lead capture form data
 */
export interface LeadData {
  /** Full name (required) */
  name: string;
  
  /** Email address (required) */
  email: string;
  
  /** Company name (optional) */
  company?: string;
  
  /** Phone number (optional) */
  phone?: string;
}

/**
 * Behavioral tracking data
 */
export interface BehavioralData {
  /** Time to complete quiz in milliseconds */
  completionTime?: number;
  
  /** Device type */
  deviceType?: 'mobile' | 'desktop' | 'tablet';
  
  /** Browser name */
  browser?: string;
  
  /** Referrer URL */
  referrer?: string;
  
  /** UTM parameters */
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

/**
 * Complete quiz submission payload for API
 */
export interface QuizSubmissionPayload extends LeadData, BehavioralData {
  /** Quiz type */
  quizType: QuizType;
  
  /** Language used */
  language: Language;
  
  /** User's answers */
  answers: QuizAnswers;
}

// =============================================================================
// DATABASE TYPES
// =============================================================================

/**
 * Quiz submission record from database
 */
export interface QuizSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  quiz_type: QuizType;
  quiz_version: string;
  language: Language;
  raw_score: number;
  total_score: number;
  score_tier: ScoreTier;
  category_scores: CategoryScores;
  primary_gap: GapAnalysis;
  secondary_gap: GapAnalysis;
  completion_time_ms: number | null;
  device_type: string | null;
  browser: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  status: 'new' | 'contacted' | 'not-qualified' | 'booked' | 'follow-up';
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Individual answer record from database
 */
export interface QuizAnswer {
  id: string;
  submission_id: string;
  question_number: number;
  question_text: string;
  answer_text: string;
  answer_index: number;
  points: number;
  category: QuizCategory;
  created_at: string;
}
