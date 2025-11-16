/**
 * Quiz Configuration Index
 * 
 * Central registry for all quiz configurations.
 * Loads configs, validates them in development, and provides access functions.
 */

import type { QuizType, QuizConfig, Language } from '../types';
import { validateQuizConfig } from './validator';

// Import all quiz configs
// TODO: Uncomment as configs are created
import { itServicesConfig } from './it-services';
// import { professionalServicesConfig } from './professional-services';
// import { salesMarketingConfig } from './sales-marketing';
// import { executivesConfig } from './executives';
// import { interviewCoachingConfig } from './interview-coaching';

/**
 * Registry of all quiz configurations
 * Maps quiz type to its configuration
 */
const quizConfigs: Partial<Record<QuizType, QuizConfig>> = {
  'it-services': itServicesConfig,
  // 'professional-services': professionalServicesConfig,
  // 'sales-marketing': salesMarketingConfig,
  // 'executives': executivesConfig,
  // 'interview-coaching': interviewCoachingConfig
};

/**
 * Validate all configs in development mode
 * Catches configuration errors early
 */
if (import.meta.env.DEV) {
  Object.values(quizConfigs).forEach(config => {
    if (config) {
      try {
        validateQuizConfig(config);
      } catch (error) {
        console.error('❌ Quiz config validation failed:', (error as Error).message);
        throw error;
      }
    }
  });
}

/**
 * Get quiz configuration for a specific quiz type and language
 * 
 * @param quizType - Quiz type identifier
 * @param language - Language code ('en' or 'es')
 * @returns Language-specific quiz configuration
 * @throws Error if quiz type not found
 */
export function getQuizConfig(quizType: QuizType, language: Language) {
  const config = quizConfigs[quizType];
  
  if (!config) {
    throw new Error(`Quiz config not found for type: ${quizType}`);
  }
  
  return config[language];
}

/**
 * Get full quiz configuration (both languages)
 * 
 * @param quizType - Quiz type identifier
 * @returns Complete quiz configuration
 * @throws Error if quiz type not found
 */
export function getFullQuizConfig(quizType: QuizType): QuizConfig {
  const config = quizConfigs[quizType];
  
  if (!config) {
    throw new Error(`Quiz config not found for type: ${quizType}`);
  }
  
  return config;
}

/**
 * Get list of all available quiz types
 * 
 * @returns Array of quiz type identifiers
 */
export function getAvailableQuizTypes(): QuizType[] {
  return Object.keys(quizConfigs) as QuizType[];
}

/**
 * Check if a quiz type is available
 * 
 * @param quizType - Quiz type to check
 * @returns True if quiz type exists
 */
export function isQuizTypeAvailable(quizType: string): quizType is QuizType {
  return quizType in quizConfigs;
}
