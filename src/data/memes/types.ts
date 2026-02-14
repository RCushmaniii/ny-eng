// Centralized meme portfolio type definitions

/** All role categories */
export type RoleCategory =
  | "software-engineer"
  | "project-manager"
  | "it-manager"
  | "sales-account-executive"
  | "executive-csuite"
  | "startup-founder"
  | "logistics-supply-chain"
  | "hr-recruiter"
  | "consultant"
  | "product-manager";

/** Production workflow status — auto-detected from filesystem at build time */
export type MemeStatus =
  | "planned" // Content defined, no image yet
  | "prompt-ready" // imagePrompt finalized, ready for generation
  | "image-uploaded" // Image exists for at least one language
  | "published"; // Image exists for both languages, ready to show

/** A single meme entry with full bilingual content and production metadata */
export interface MemeEntry {
  /** Unique slug identifier (e.g., "se-01") */
  id: string;
  /** Which role category this meme belongs to */
  roleCategory: RoleCategory;
  /** Display order within the role category (1-based) */
  sortOrder: number;

  // --- Bilingual display content ---
  titleEn: string;
  titleEs: string;
  captionEn: string;
  captionEs: string;

  // --- Before/after executive communication phrases ---
  beforePhraseEn: string;
  beforePhraseEs: string;
  afterPhraseEn: string;
  afterPhraseEs: string;

  // --- Production metadata ---
  /** Creative brief for image generation (ChatGPT/Midjourney prompt) */
  imagePrompt: string;
  altTextEn: string;
  altTextEs: string;
  tags: string[];

  /** Status is auto-detected at build time from filesystem — defaults to "planned" */
  status: MemeStatus;
}

/** Configuration for a role category (labels, descriptions, SEO) */
export interface RoleCategoryConfig {
  slug: RoleCategory;
  labelEn: string;
  labelEs: string;
  descriptionEn: string;
  descriptionEs: string;
  seoDescriptionEn: string;
  seoDescriptionEs: string;
}
