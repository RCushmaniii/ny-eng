/**
 * Type definitions for Free Asset content system
 * Based on schema.json
 */

export type ContentType =
  | "questions"
  | "sentences"
  | "checklist"
  | "script"
  | "framework"
  | "case-study"
  | "template"
  | "guide"
  | "video"
  | "audio";

export type Format =
  | "pdf-guide"
  | "pdf-checklist"
  | "pdf-script"
  | "interactive-web"
  | "video"
  | "audio"
  | "email-series";

export type FunnelStage =
  | "awareness"
  | "consideration"
  | "decision"
  | "retention";

export type DifficultyLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "all-levels";

export type Persona =
  | "executive"
  | "manager"
  | "founder"
  | "entrepreneur"
  | "consultant"
  | "project-manager"
  | "engineer"
  | "sales"
  | "hr-professional"
  | "doctor"
  | "lawyer"
  | "accountant"
  | "logistics"
  | "real-estate"
  | "job-seeker"
  | "all";

export type Industry =
  | "technology"
  | "healthcare"
  | "legal"
  | "finance"
  | "logistics"
  | "real-estate"
  | "professional-services"
  | "manufacturing"
  | "retail"
  | "all";

export type Scenario =
  | "interviews"
  | "negotiations"
  | "presentations"
  | "client-meetings"
  | "leadership"
  | "email-writing"
  | "networking"
  | "difficult-conversations"
  | "decision-making"
  | "meetings"
  | "technical-explanation"
  | "crisis-management"
  | "performance-feedback"
  | "sales-calls"
  | "status-updates"
  | "all";

export type CTAType =
  | "strategy-call"
  | "email-signup"
  | "quiz"
  | "contact"
  | "service-page"
  | "related-asset";

export interface FreeAssetMetadata {
  id: string;
  version: string;
  datePublished: string; // ISO 8601 date
  dateUpdated?: string;
  author: string;
  language: ("en" | "es")[];
}

export interface FreeAssetClassification {
  contentType: ContentType;
  format: Format;
  funnelStage: FunnelStage;
  difficultyLevel: DifficultyLevel;
  timeToComplete: string;
  estimatedMinutes: number;
  pageCount?: number;
  tags?: string[];
}

export interface FreeAssetTargeting {
  primaryPersona: Persona[];
  industries: Industry[];
  scenarios: Scenario[];
  painPoints?: string[];
}

export interface FreeAssetConversion {
  ctaType: CTAType;
  nextStep: string;
  relatedAssets?: string[];
}

export interface FreeAssetSEO {
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
}

export interface FreeAssetAnalytics {
  downloadCount?: number;
  viewCount?: number;
  lastAccessed?: string | null;
}

// Content structures (vary by contentType)

export interface QuestionItem {
  number: number;
  question: string;
  why: string;
  when: string;
  doNotSay: string;
  howToSay: string;
  variations?: string | null;
}

export interface SentenceItem {
  number: number;
  structure: string;
  example: string;
  why: string;
  when: string;
  doNotSay: string;
  howToSay: string;
  variations?: string[];
}

export interface PatternSection {
  title: string;
  intro: string;
  items: {
    bold: string;
    text: string;
  }[];
}

export interface QuickRefSection {
  title: string;
  intro?: string;
  rows: {
    situation: string;
    question?: string;
    structure?: string;
  }[];
}

export interface ContentLabels {
  why: string;
  when: string;
  doNotSay: string;
  howToSay: string;
  variations: string;
  situation: string;
  seniorQuestion?: string;
  structure?: string;
  example?: string;
}

export interface QuestionsContent {
  title: string;
  subtitle: string;
  intro: {
    line1: string;
    line2: string;
    paragraph: string;
  };
  questions: QuestionItem[];
  pattern?: PatternSection;
  quickRef?: QuickRefSection;
  labels: ContentLabels;
}

export interface SentencesContent {
  title: string;
  subtitle: string;
  intro: {
    line1: string;
    line2: string;
    paragraph: string;
  };
  sentences: SentenceItem[];
  pattern?: PatternSection;
  quickRef?: QuickRefSection;
  labels: ContentLabels;
}

// Main Asset Interface

export interface FreeAsset {
  metadata: FreeAssetMetadata;
  classification: FreeAssetClassification;
  targeting: FreeAssetTargeting;
  conversion: FreeAssetConversion;
  seo: FreeAssetSEO;
  analytics?: FreeAssetAnalytics;
  slugEn: string;
  slugEs: string;
  en: QuestionsContent | SentencesContent | any; // Type varies by contentType
  es: QuestionsContent | SentencesContent | any;
}

// Helper type for filtering

export interface FreeAssetCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  contentType: ContentType;
  format: Format;
  difficultyLevel: DifficultyLevel;
  timeToComplete: string;
  personas: Persona[];
  scenarios: Scenario[];
  tags: string[];
  slugEn: string;
  slugEs: string;
  downloadCount: number;
  viewCount: number;
  datePublished: string;
}
