function calculateQuizScore(answers, config) {
  let rawScore = 0;
  const maxPossible = 60;
  const categoryPoints = {
    clarity: { earned: 0, max: 0 },
    confidence: { earned: 0, max: 0 },
    "real-time": { earned: 0, max: 0 },
    negotiation: { earned: 0, max: 0 },
    cultural: { earned: 0, max: 0 }
  };
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const questionNum = parseInt(questionId.replace("q", ""));
    const question = config.questions.find((q) => q.id === questionNum);
    if (!question) {
      console.warn(`Question ${questionNum} not found in config`);
      return;
    }
    const answer = question.answers[answerIndex];
    if (!answer) {
      console.warn(`Answer index ${answerIndex} not found for question ${questionNum}`);
      return;
    }
    const points = answer.score;
    rawScore += points;
    const category = question.category;
    categoryPoints[category].earned += points;
    categoryPoints[category].max += 10;
  });
  const totalScore = Math.round(rawScore / maxPossible * 100);
  const categoryScores = {
    clarity: categoryPoints.clarity.max > 0 ? Math.round(categoryPoints.clarity.earned / categoryPoints.clarity.max * 100) : 0,
    confidence: categoryPoints.confidence.max > 0 ? Math.round(categoryPoints.confidence.earned / categoryPoints.confidence.max * 100) : 0,
    realTime: categoryPoints["real-time"].max > 0 ? Math.round(categoryPoints["real-time"].earned / categoryPoints["real-time"].max * 100) : 0,
    negotiation: categoryPoints.negotiation.max > 0 ? Math.round(categoryPoints.negotiation.earned / categoryPoints.negotiation.max * 100) : 0,
    cultural: categoryPoints.cultural.max > 0 ? Math.round(categoryPoints.cultural.earned / categoryPoints.cultural.max * 100) : 0
  };
  const scoreTier = getScoreTier(totalScore);
  const gaps = analyzeGaps(categoryScores, config.gapDefinitions);
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
function getScoreTier(score) {
  if (score >= 70) return "Conversation-Ready";
  if (score >= 40) return "Million-Dollar Gap";
  return "Credibility Block";
}
function analyzeGaps(categoryScores, gapDefinitions) {
  const categoryArray = [
    { category: "clarity", score: categoryScores.clarity },
    { category: "confidence", score: categoryScores.confidence },
    { category: "real-time", score: categoryScores.realTime },
    { category: "negotiation", score: categoryScores.negotiation },
    { category: "cultural", score: categoryScores.cultural }
  ];
  categoryArray.sort((a, b) => a.score - b.score);
  const primaryCategory = categoryArray[0].category;
  const secondaryCategory = categoryArray[1].category;
  return {
    primary: createGapAnalysis(primaryCategory, categoryArray[0].score, gapDefinitions),
    secondary: createGapAnalysis(secondaryCategory, categoryArray[1].score, gapDefinitions)
  };
}
function createGapAnalysis(category, score, gapDefinitions) {
  const definition = gapDefinitions[category];
  return {
    category,
    categoryName: definition.name,
    score,
    impact: definition.lowScoreImpact,
    recommendation: definition.recommendation,
    urgency: definition.urgency
  };
}

export { calculateQuizScore as c };
