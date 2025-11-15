/**
 * Quiz Scoring System for Speaking Confidence Assessment
 * 
 * Scoring Philosophy:
 * - Total possible: 250 points across 10 questions
 * - Normalized to 0-100 scale
 * - Questions weighted by business impact
 */

export interface QuizAnswer {
  questionId: string;
  answerIndex: number;
  score: number;
  category: QuizCategory;
}

export type QuizCategory = 
  | 'clarity'           // Clear communication
  | 'confidence'        // Authority & self-assurance
  | 'real-time'        // Spontaneous response ability
  | 'negotiation'      // Defending position
  | 'cultural';        // Rapport & business fluency

export interface ScoreBreakdown {
  totalScore: number;              // 0-100
  rawScore: number;                // Actual points earned
  maxPossible: number;             // 250
  scoreTier: ScoreTier;
  categoryScores: CategoryScores;
  primaryGap: GapAnalysis;
  secondaryGap: GapAnalysis;
}

export type ScoreTier = 'Conversation-Ready' | 'Million-Dollar Gap' | 'Credibility Block';

export interface CategoryScores {
  clarity: number;           // 0-100
  confidence: number;        // 0-100
  realTime: number;         // 0-100
  negotiation: number;      // 0-100
  cultural: number;         // 0-100
}

export interface GapAnalysis {
  category: QuizCategory;
  categoryName: string;
  score: number;
  impact: string;
  recommendation: string;
  urgency: 'high' | 'medium' | 'low';
}

// =============================================================================
// QUESTION SCORING CONFIGURATION
// =============================================================================

/**
 * Point values for each question
 * Each question worth 10 points max for simplicity
 */
export const QUESTION_SCORES = {
  
  // Q1: Misunderstandings/Clarity (10 points max)
  // Category: Clarity
  // Impact: Universal pain point, easy opener
  q1: {
    category: 'clarity' as QuizCategory,
    weight: 10,
    answers: [
      { index: 0, score: 10, label: 'Almost never—clear first time' },
      { index: 1, score: 7, label: 'Once or twice a month—minor issues' },
      { index: 2, score: 4, label: 'Several times a month—noticeable' },
      { index: 3, score: 0, label: 'Weekly or more—impacting relationships' }
    ]
  },
  
  // Q2: Technical Communication (10 points max)
  // Category: Clarity
  // Impact: Core competency for IT teams
  q2: {
    category: 'clarity' as QuizCategory,
    weight: 10,
    answers: [
      { index: 0, score: 10, label: 'Excellent—clients grasp immediately' },
      { index: 1, score: 7, label: 'Good—occasionally needs clarification' },
      { index: 2, score: 4, label: 'Fair—regularly ask for simpler explanations' },
      { index: 3, score: 0, label: 'Poor—often lose them' }
    ]
  },
  
  // Q3: Real-Time Response (10 points max)
  // Category: Confidence
  // Impact: "Ouch" moment - kills deal momentum
  q3: {
    category: 'confidence' as QuizCategory,
    weight: 10,
    answers: [
      { index: 0, score: 10, label: 'Never—respond in real-time' },
      { index: 1, score: 7, label: 'Rarely—only truly complex details' },
      { index: 2, score: 4, label: 'Sometimes—when under pressure' },
      { index: 3, score: 0, label: 'Frequently—safety net' }
    ]
  },
  
  // Q4: Negotiation Under Pressure (10 points max)
  // Category: Negotiation
  // Impact: Higher stakes, affects contract terms
  q4: {
    category: 'negotiation' as QuizCategory,
    weight: 10,
    answers: [
      { index: 0, score: 10, label: 'Very effectively—defend position confidently' },
      { index: 1, score: 6, label: 'Moderately—concede too quickly' },
      { index: 2, score: 3, label: 'Poorly—struggle to push back' },
      { index: 3, score: 0, label: 'Route to senior leadership' }
    ]
  },
  
  // Q5: Leadership Capacity (10 points max)
  // Category: Leadership
  // Impact: Business risk, scalability issue
  q5: {
    category: 'confidence' as QuizCategory,
    weight: 10,
    answers: [
      { index: 0, score: 10, label: 'Multiple people—have depth' },
      { index: 1, score: 6, label: '2-3 people—limited but adequate' },
      { index: 2, score: 3, label: '1-2 people—dependent on specific individuals' },
      { index: 3, score: 0, label: 'None—senior leadership must be present' }
    ]
  },
  
  // Q6: Rapport Building (10 points max)
  // Category: Confidence
  // Impact: Competitive advantage, relationship building
  q6: {
    category: 'confidence' as QuizCategory,
    weight: 10,
    answers: [
      { index: 0, score: 10, label: 'Very comfortable—happens naturally' },
      { index: 1, score: 6, label: 'Somewhat comfortable—feels stilted' },
      { index: 2, score: 3, label: 'Uncomfortable—stick strictly to business' },
      { index: 3, score: 0, label: 'Very uncomfortable—avoid entirely' }
    ]
  }
  
} as const;

// Total max possible: 60 points (6 questions × 10 points each)

// =============================================================================
// SCORING CALCULATION
// =============================================================================

export function calculateQuizScore(answers: Record<string, number>): ScoreBreakdown {
  let rawScore = 0;
  const maxPossible = 60;
  const categoryPoints: Record<QuizCategory, { earned: number; max: number }> = {
    clarity: { earned: 0, max: 0 },
    confidence: { earned: 0, max: 0 },
    'real-time': { earned: 0, max: 0 },
    negotiation: { earned: 0, max: 0 },
    cultural: { earned: 0, max: 0 }
  };

  // Calculate raw score and category breakdowns
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const questionConfig = QUESTION_SCORES[questionId as keyof typeof QUESTION_SCORES];
    if (!questionConfig) return;

    const answerConfig = questionConfig.answers[answerIndex];
    if (!answerConfig) return;

    const points = answerConfig.score;
    rawScore += points;

    // Track by category
    const category = questionConfig.category;
    categoryPoints[category].earned += points;
    categoryPoints[category].max += questionConfig.weight;
  });

  // Normalize to 0-100
  const totalScore = Math.round((rawScore / maxPossible) * 100);

  // Calculate category scores (0-100 for each)
  const categoryScores: CategoryScores = {
    clarity: Math.round((categoryPoints.clarity.earned / categoryPoints.clarity.max) * 100) || 0,
    confidence: Math.round((categoryPoints.confidence.earned / categoryPoints.confidence.max) * 100) || 0,
    realTime: Math.round((categoryPoints['real-time'].earned / categoryPoints['real-time'].max) * 100) || 0,
    negotiation: Math.round((categoryPoints.negotiation.earned / categoryPoints.negotiation.max) * 100) || 0,
    cultural: Math.round((categoryPoints.cultural.earned / categoryPoints.cultural.max) * 100) || 0
  };

  // Determine score tier
  const scoreTier = getScoreTier(totalScore);

  // Analyze gaps
  const gaps = analyzeGaps(categoryScores, answers);

  return {
    totalScore,
    rawScore,
    maxPossible,
    scoreTier,
    categoryScores,
    primaryGap: gaps.primary,
    secondaryGap: gaps.secondary
  };
}

// =============================================================================
// SCORE TIERS
// =============================================================================

export function getScoreTier(score: number): ScoreTier {
  if (score >= 75) return 'Conversation-Ready';
  if (score >= 40) return 'Million-Dollar Gap';
  return 'Credibility Block';
}

export const SCORE_TIER_INFO = {
  'Conversation-Ready': {
    range: '75-100',
    color: '#48bb78', // Green
    icon: '✅',
    headline: 'Your Team Can Handle High-Stakes Conversations',
    summary: 'Your team demonstrates strong spoken English capability in client-facing situations. Small refinements in specific areas could help you win even more premium contracts.',
    businessImpact: "You're competitive for enterprise deals. Focus areas: advanced negotiation tactics, executive presence, and industry-specific terminology.",
    nextStep: 'Book a strategy call to discuss executive-level communication training.',
    urgency: 'low' as const
  },
  'Million-Dollar Gap': {
    range: '40-74',
    color: '#f6ad55', // Orange
    icon: '⚠️',
    headline: 'Speaking Gaps Are Costing You Deals',
    summary: "Your team has solid technical skills, but communication gaps create friction in sales, negotiations, and client relationships. This is the difference between winning and losing 6-figure contracts.",
    businessImpact: 'Companies at this level tell us they avoid certain opportunities, take longer to close deals, or discount to compensate for communication gaps. Average improvement after 8 weeks: 35% higher contract values.',
    nextStep: 'Schedule a 15-minute assessment call to identify your fastest path to improvement.',
    urgency: 'high' as const
  },
  'Credibility Block': {
    range: '0-39',
    color: '#fc8181', // Red
    icon: '🚫',
    headline: 'English Gaps Are Limiting Your Growth',
    summary: "Spoken English challenges are likely holding your business back more than you realize. North American clients interpret hesitant speaking as lack of expertise—even when your technical skills are world-class.",
    businessImpact: "At this level, you're probably stuck in price-competitive markets, or the founder handles all critical communication. The good news? This is fixable faster than you think with focused practice.",
    nextStep: "Let's talk about a 60-day intensive program to close these gaps.",
    urgency: 'high' as const
  }
} as const;

// =============================================================================
// GAP ANALYSIS
// =============================================================================

const GAP_DEFINITIONS = {
  clarity: {
    name: 'Clear Communication Under Pressure',
    lowScoreImpact: 'Clients need repeated explanations, lose confidence in your expertise, or disengage from meetings. Time wasted re-explaining = fewer deals closed.',
    recommendation: 'Focus on simplifying complex technical explanations and practicing "explain it to a 10-year-old" drills.',
    urgency: 'high' as const
  },
  confidence: {
    name: 'Speaking Confidence & Authority',
    lowScoreImpact: 'You struggle to command rooms, defend decisions, or push back on unreasonable requests. Clients sense hesitation and either demand discounts or go with competitors who "sound" more senior.',
    recommendation: 'Practice high-pressure scenarios with real-time feedback. Build automatic responses for common objections.',
    urgency: 'high' as const
  },
  'real-time': {
    name: 'Spontaneous Response Ability',
    lowScoreImpact: 'Every time you say "let me follow up via email," you lose deal momentum and credibility. Clients want answers NOW.',
    recommendation: 'Train your team to think IN English, not translate. Use rapid-fire Q&A drills to build spontaneity.',
    urgency: 'high' as const
  },
  negotiation: {
    name: 'Negotiation & Boundary Setting',
    lowScoreImpact: "You accept unfavorable terms, agree to scope creep, or discount when you shouldn't. Result: Lower margins, difficult clients, burnout.",
    recommendation: 'Rehearse negotiation scripts until defending your position feels natural. Role-play tough client scenarios.',
    urgency: 'medium' as const
  },
  cultural: {
    name: 'Cultural Fluency & Rapport Building',
    lowScoreImpact: 'Relationships stay transactional. You miss opportunities to build trust, understand client motivations, or become a strategic partner (vs. vendor).',
    recommendation: 'Study North American business culture and practice casual conversation starters. Learn when small talk is expected.',
    urgency: 'medium' as const
  }
} as const;

function analyzeGaps(
  categoryScores: CategoryScores,
  answers: Record<string, number>
): { primary: GapAnalysis; secondary: GapAnalysis } {
  
  // Convert category scores to sortable array
  const categoryArray = [
    { category: 'clarity' as QuizCategory, score: categoryScores.clarity },
    { category: 'confidence' as QuizCategory, score: categoryScores.confidence },
    { category: 'real-time' as QuizCategory, score: categoryScores.realTime },
    { category: 'negotiation' as QuizCategory, score: categoryScores.negotiation },
    { category: 'cultural' as QuizCategory, score: categoryScores.cultural }
  ];

  // Sort by score (lowest first = biggest gaps)
  categoryArray.sort((a, b) => a.score - b.score);

  const primaryCategory = categoryArray[0].category;
  const secondaryCategory = categoryArray[1].category;

  return {
    primary: createGapAnalysis(primaryCategory, categoryArray[0].score),
    secondary: createGapAnalysis(secondaryCategory, categoryArray[1].score)
  };
}

function createGapAnalysis(category: QuizCategory, score: number): GapAnalysis {
  const definition = GAP_DEFINITIONS[category];
  
  return {
    category,
    categoryName: definition.name,
    score,
    impact: definition.lowScoreImpact,
    recommendation: definition.recommendation,
    urgency: definition.urgency
  };
}

// =============================================================================
// PERCENTILE CALCULATION (OPTIONAL - FOR MARKETING)
// =============================================================================

/**
 * Calculate percentile compared to all quiz takers
 * This would be calculated from real Supabase data in production
 * For now, using estimated distribution
 */
export function calculatePercentile(score: number): number {
  // Assumed distribution based on typical quiz results
  // You'll replace this with actual data from Supabase
  const distribution = [
    { maxScore: 25, percentile: 10 },
    { maxScore: 35, percentile: 20 },
    { maxScore: 45, percentile: 35 },
    { maxScore: 55, percentile: 50 },
    { maxScore: 65, percentile: 65 },
    { maxScore: 75, percentile: 80 },
    { maxScore: 85, percentile: 90 },
    { maxScore: 100, percentile: 95 }
  ];

  const bracket = distribution.find(d => score <= d.maxScore);
  return bracket?.percentile || 95;
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export function getScoreColor(score: number): string {
  if (score >= 75) return '#48bb78';  // Green
  if (score >= 40) return '#f6ad55';  // Orange
  return '#fc8181';                    // Red
}

export function getScoreEmoji(score: number): string {
  if (score >= 75) return '🎉';
  if (score >= 40) return '💡';
  return '⚠️';
}
