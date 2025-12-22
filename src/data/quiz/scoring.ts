/**
 * Universal Quiz Scoring Engine
 *
 * Config-driven scoring system that works for all quiz types.
 * Calculates scores, determines tiers, and identifies gaps.
 *
 * Scoring Philosophy:
 * - 6 questions × 10 points max = 60 points total
 * - Normalized to 0-100 scale
 * - Category scores calculated independently
 * - Gap analysis identifies top 2 weakest areas
 */

import type {
  QuizAnswers,
  QuizCategory,
  ScoreBreakdown,
  ScoreTier,
  CategoryScores,
  GapAnalysis,
  GapDefinition,
  LanguageConfig,
} from "./types";

// =============================================================================
// UNIVERSAL SCORING FUNCTION
// =============================================================================

/**
 * Calculate quiz score from user answers and quiz configuration
 *
 * @param answers - User's answers (e.g., { q1: 2, q2: 0, q3: 1, ... })
 * @param config - Language-specific quiz configuration
 * @returns Complete score breakdown with gaps and tier
 */
export function calculateQuizScore(
  answers: QuizAnswers,
  config: LanguageConfig,
): ScoreBreakdown {
  let rawScore = 0;
  const maxPossible = 60; // 6 questions × 10 points each

  // Track points by category
  const categoryPoints: Record<QuizCategory, { earned: number; max: number }> =
    {
      clarity: { earned: 0, max: 0 },
      confidence: { earned: 0, max: 0 },
      "real-time": { earned: 0, max: 0 },
      negotiation: { earned: 0, max: 0 },
      cultural: { earned: 0, max: 0 },
    };

  // Calculate raw score and category breakdowns
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const questionNum = parseInt(questionId.replace("q", ""));
    const question = config.questions.find((q) => q.id === questionNum);

    if (!question) {
      console.warn(`Question ${questionNum} not found in config`);
      return;
    }

    const answer = question.answers[answerIndex];
    if (!answer) {
      console.warn(
        `Answer index ${answerIndex} not found for question ${questionNum}`,
      );
      return;
    }

    const points = answer.score;
    rawScore += points;

    // Track by category
    const category = question.category;
    categoryPoints[category].earned += points;
    categoryPoints[category].max += 10; // Each question worth 10 points
  });

  // Normalize to 0-100
  const totalScore = Math.round((rawScore / maxPossible) * 100);

  // Calculate category scores (0-100 for each)
  const categoryScores: CategoryScores = {
    clarity:
      categoryPoints.clarity.max > 0
        ? Math.round(
            (categoryPoints.clarity.earned / categoryPoints.clarity.max) * 100,
          )
        : 0,
    confidence:
      categoryPoints.confidence.max > 0
        ? Math.round(
            (categoryPoints.confidence.earned / categoryPoints.confidence.max) *
              100,
          )
        : 0,
    realTime:
      categoryPoints["real-time"].max > 0
        ? Math.round(
            (categoryPoints["real-time"].earned /
              categoryPoints["real-time"].max) *
              100,
          )
        : 0,
    negotiation:
      categoryPoints.negotiation.max > 0
        ? Math.round(
            (categoryPoints.negotiation.earned /
              categoryPoints.negotiation.max) *
              100,
          )
        : 0,
    cultural:
      categoryPoints.cultural.max > 0
        ? Math.round(
            (categoryPoints.cultural.earned / categoryPoints.cultural.max) *
              100,
          )
        : 0,
  };

  // Determine score tier
  const scoreTier = getScoreTier(totalScore);

  // Analyze gaps
  const gaps = analyzeGaps(categoryScores, config.gapDefinitions);

  return {
    totalScore,
    rawScore,
    maxPossible,
    scoreTier,
    categoryScores,
    primaryGap: gaps.primary,
    secondaryGap: gaps.secondary,
  };
}

// =============================================================================
// SCORE TIERS
// =============================================================================

/**
 * Determine score tier based on total score
 *
 * @param score - Total score (0-100)
 * @returns Score tier classification
 */
export function getScoreTier(score: number): ScoreTier {
  if (score >= 70) return "Executive Presence";
  if (score >= 40) return "Passive Proficiency";
  return "Credibility Gap";
}

/**
 * Tier information for display purposes
 * Contains colors, icons, and messaging for each tier
 */
export const SCORE_TIER_INFO = {
  "Executive Presence": {
    range: "70-100",
    color: "#10b981", // Green
    icon: "✅",
    headline: "You Have Executive Presence",
    summary:
      "You demonstrate strong communication skills in high-stakes situations. Small refinements in specific areas could help you command even higher rates and senior roles.",
    businessImpact:
      "You're competitive for leadership positions. Focus areas: advanced negotiation tactics, executive presence, and industry-specific influence.",
    nextStep:
      "Book a strategy call to discuss executive-level communication refinement.",
    urgency: "low" as const,
  },
  "Passive Proficiency": {
    range: "40-69",
    color: "#f59e0b", // Orange
    icon: "⚠️",
    headline: "The Invisible Ceiling",
    summary:
      "You understand almost everything, but you struggle to be heard. You have great ideas, but in meetings, you stay quiet because you can't find the words fast enough. You are reliable, but not 'visible' enough for leadership.",
    businessImpact:
      "At this level, you avoid certain opportunities, take longer to advance, or stay in execution roles because communication gaps hold you back. The good news? This is fixable with focused practice.",
    nextStep:
      "Schedule a 15-minute assessment call to identify your fastest path to improvement.",
    urgency: "high" as const,
  },
  "Credibility Gap": {
    range: "0-39",
    color: "#ef4444", // Red
    icon: "🚫",
    headline: "English Gaps Are Limiting Your Growth",
    summary:
      "Communication challenges are likely holding you back more than you realize. Colleagues interpret hesitation as lack of expertise—even when your technical skills are world-class.",
    businessImpact:
      "At this level, you're probably stuck in execution roles, or you avoid speaking up in meetings. The good news? This is fixable faster than you think with focused practice.",
    nextStep: "Let's talk about a focused program to close these gaps.",
    urgency: "high" as const,
  },
} as const;

// =============================================================================
// GAP ANALYSIS
// =============================================================================

/**
 * Analyze category scores to identify top 2 weakest areas
 *
 * @param categoryScores - Scores for each category (0-100)
 * @param gapDefinitions - Gap definitions from quiz config
 * @returns Primary and secondary gap analysis
 */
function analyzeGaps(
  categoryScores: CategoryScores,
  gapDefinitions: Record<QuizCategory, GapDefinition>,
): { primary: GapAnalysis; secondary: GapAnalysis } {
  // Convert category scores to sortable array
  const categoryArray = [
    { category: "clarity" as QuizCategory, score: categoryScores.clarity },
    {
      category: "confidence" as QuizCategory,
      score: categoryScores.confidence,
    },
    { category: "real-time" as QuizCategory, score: categoryScores.realTime },
    {
      category: "negotiation" as QuizCategory,
      score: categoryScores.negotiation,
    },
    { category: "cultural" as QuizCategory, score: categoryScores.cultural },
  ];

  // Sort by score (lowest first = biggest gaps)
  categoryArray.sort((a, b) => a.score - b.score);

  const primaryCategory = categoryArray[0].category;
  const secondaryCategory = categoryArray[1].category;

  return {
    primary: createGapAnalysis(
      primaryCategory,
      categoryArray[0].score,
      gapDefinitions,
    ),
    secondary: createGapAnalysis(
      secondaryCategory,
      categoryArray[1].score,
      gapDefinitions,
    ),
  };
}

/**
 * Create gap analysis for a specific category
 *
 * @param category - Category identifier
 * @param score - Score in this category (0-100)
 * @param gapDefinitions - Gap definitions from quiz config
 * @returns Complete gap analysis
 */
function createGapAnalysis(
  category: QuizCategory,
  score: number,
  gapDefinitions: Record<QuizCategory, GapDefinition>,
): GapAnalysis {
  const definition = gapDefinitions[category];

  return {
    category,
    categoryName: definition.name,
    score,
    impact: definition.lowScoreImpact,
    recommendation: definition.recommendation,
    urgency: definition.urgency,
  };
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get color for score visualization
 *
 * @param score - Total score (0-100)
 * @returns Hex color code
 */
export function getScoreColor(score: number): string {
  if (score >= 70) return "#10b981"; // Green
  if (score >= 40) return "#f59e0b"; // Orange
  return "#ef4444"; // Red
}

/**
 * Get emoji for score visualization
 *
 * @param score - Total score (0-100)
 * @returns Emoji string
 */
export function getScoreEmoji(score: number): string {
  if (score >= 70) return "🎉";
  if (score >= 40) return "💡";
  return "⚠️";
}

/**
 * Calculate percentile compared to all quiz takers
 *
 * NOTE: This uses estimated distribution for now.
 * Replace with actual Supabase data in production.
 *
 * @param score - Total score (0-100)
 * @returns Percentile (0-100)
 */
export function calculatePercentile(score: number): number {
  // Assumed distribution based on typical quiz results
  const distribution = [
    { maxScore: 25, percentile: 10 },
    { maxScore: 35, percentile: 20 },
    { maxScore: 45, percentile: 35 },
    { maxScore: 55, percentile: 50 },
    { maxScore: 65, percentile: 65 },
    { maxScore: 75, percentile: 80 },
    { maxScore: 85, percentile: 90 },
    { maxScore: 100, percentile: 95 },
  ];

  const bracket = distribution.find((d) => score <= d.maxScore);
  return bracket?.percentile || 95;
}
