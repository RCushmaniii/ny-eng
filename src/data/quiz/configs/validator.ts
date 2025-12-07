/**
 * Quiz Configuration Validator
 * * Validates quiz configurations to catch errors during development.
 * Ensures all configs follow the required structure and have complete data.
 */

import type { QuizConfig, QuizCategory } from '../types';

/**
 * Validate a quiz configuration
 * * Checks:
 * - Exactly 6 questions in both languages
 * - Sequential question IDs (1-6)
 * - Exactly 4 answers per question
 * - Answer indices are 0-3
 * - All categories are valid
 * - All gap definitions exist
 * - Results structure is complete (Tiers, CTA, etc.)
 * * @param config - Quiz configuration to validate
 * @throws Error if validation fails with descriptive message
 */
export function validateQuizConfig(config: QuizConfig): void {
  const requiredCategories: QuizCategory[] = [
    'clarity',
    'confidence',
    'real-time',
    'negotiation',
    'cultural'
  ];

  const requiredTiers = [
    'Credibility Gap',
    'Passive Proficiency',
    'Executive Presence'
  ];
  
  // Validate both languages
  (['en', 'es'] as const).forEach(lang => {
    const langConfig = config[lang];
    
    // --- 1. Validate Questions ---
    
    // Check we have exactly 6 questions
    if (langConfig.questions.length !== 6) {
      throw new Error(
        `[${config.quizId}][${lang}] Must have exactly 6 questions, found ${langConfig.questions.length}`
      );
    }
    
    // Validate each question
    langConfig.questions.forEach((q, idx) => {
      // Check question IDs are sequential 1-6
      if (q.id !== idx + 1) {
        throw new Error(
          `[${config.quizId}][${lang}] Question ${idx} has id ${q.id}, expected ${idx + 1}`
        );
      }
      
      // Check exactly 4 answers
      if (q.answers.length !== 4) {
        throw new Error(
          `[${config.quizId}][${lang}] Question ${q.id} must have 4 answers, found ${q.answers.length}`
        );
      }
      
      // Check answer indices are 0-3
      const indices = q.answers.map(a => a.index).sort();
      if (JSON.stringify(indices) !== '[0,1,2,3]') {
        throw new Error(
          `[${config.quizId}][${lang}] Question ${q.id} answer indices must be [0,1,2,3], found ${JSON.stringify(indices)}`
        );
      }
      
      // Check answer scores are valid (0, 3, 6, or 10)
      const validScores = [0, 3, 6, 10];
      q.answers.forEach((answer, answerIdx) => {
        if (!validScores.includes(answer.score)) {
          throw new Error(
            `[${config.quizId}][${lang}] Question ${q.id}, Answer ${answerIdx} has invalid score ${answer.score}. Must be 0, 3, 6, or 10.`
          );
        }
      });
      
      // Check category is valid
      if (!requiredCategories.includes(q.category)) {
        throw new Error(
          `[${config.quizId}][${lang}] Question ${q.id} has invalid category "${q.category}"`
        );
      }
      
      // Check question text is not empty
      if (!q.question || q.question.trim() === '') {
        throw new Error(
          `[${config.quizId}][${lang}] Question ${q.id} has empty question text`
        );
      }
      
      // Check all answer labels are not empty
      q.answers.forEach((answer, answerIdx) => {
        if (!answer.label || answer.label.trim() === '') {
          throw new Error(
            `[${config.quizId}][${lang}] Question ${q.id}, Answer ${answerIdx} has empty label`
          );
        }
      });
    });
    
    // --- 2. Validate Gap Definitions ---

    requiredCategories.forEach(cat => {
      if (!langConfig.gapDefinitions[cat]) {
        throw new Error(
          `[${config.quizId}][${lang}] Missing gap definition for category "${cat}"`
        );
      }
      
      const gapDef = langConfig.gapDefinitions[cat];
      
      // Check gap definition has required fields
      if (!gapDef.name || gapDef.name.trim() === '') {
        throw new Error(
          `[${config.quizId}][${lang}] Gap definition for "${cat}" has empty name`
        );
      }
      
      if (!gapDef.lowScoreImpact || gapDef.lowScoreImpact.trim() === '') {
        throw new Error(
          `[${config.quizId}][${lang}] Gap definition for "${cat}" has empty lowScoreImpact`
        );
      }
      
      if (!gapDef.recommendation || gapDef.recommendation.trim() === '') {
        throw new Error(
          `[${config.quizId}][${lang}] Gap definition for "${cat}" has empty recommendation`
        );
      }
      
      if (!['high', 'medium', 'low'].includes(gapDef.urgency)) {
        throw new Error(
          `[${config.quizId}][${lang}] Gap definition for "${cat}" has invalid urgency "${gapDef.urgency}". Must be 'high', 'medium', or 'low'.`
        );
      }
    });
    
    // --- 3. Validate Results Section (New) ---

    if (!langConfig.results) {
      throw new Error(`[${config.quizId}][${lang}] Missing 'results' object.`);
    }

    // Validate Tiers
    if (!langConfig.results.tiers) {
      throw new Error(`[${config.quizId}][${lang}] Missing 'results.tiers' object.`);
    }

    requiredTiers.forEach(tierKey => {
      // @ts-ignore - dynamic access
      const tier = langConfig.results.tiers[tierKey];
      if (!tier) {
        throw new Error(`[${config.quizId}][${lang}] Missing result tier: "${tierKey}"`);
      }
      if (!tier.title || !tier.description) {
        throw new Error(`[${config.quizId}][${lang}] Tier "${tierKey}" is missing title or description`);
      }
    });

    // Validate Elite Comparison
    if (!langConfig.results.eliteComparison || !Array.isArray(langConfig.results.eliteComparison.items)) {
      throw new Error(`[${config.quizId}][${lang}] Missing or invalid 'results.eliteComparison'`);
    }

    // Validate CTA
    if (!langConfig.results.cta || !langConfig.results.cta.title) {
      throw new Error(`[${config.quizId}][${lang}] Missing 'results.cta' or cta title`);
    }

    // --- 4. Validate Titles ---
    
    if (!langConfig.title || langConfig.title.trim() === '') {
      throw new Error(
        `[${config.quizId}][${lang}] Quiz title is empty`
      );
    }
    
    if (!langConfig.subtitle || langConfig.subtitle.trim() === '') {
      throw new Error(
        `[${config.quizId}][${lang}] Quiz subtitle is empty`
      );
    }
  });
  
  console.log(`✅ Quiz config "${config.quizId}" validated successfully`);
}