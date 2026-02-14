/**
 * Meme portfolio data - English
 *
 * Backward-compatible wrapper around the centralized meme system.
 * Exports the same shapes consumed by MemeGallery.astro and [role].astro pages.
 */

import {
  memeEntries,
  getMemeImagePath,
  getPlaceholderImagePath,
  allRoleCategories,
  roleCategoryConfigs,
} from "./index";

// --- Legacy types (preserved for backward compatibility) ---

export type MemeRole =
  | "all"
  | "software-engineer"
  | "project-manager"
  | "it-manager"
  | "sales-account-executive"
  | "executive-csuite";

export interface Meme {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  roles: MemeRole[];
  datePublished: string;
  /** Before phrase (weak/reactive) */
  beforePhrase?: string;
  /** After phrase (executive/confident) */
  afterPhrase?: string;
}

// --- Conversion ---

function toLegacyMeme(entry: typeof memeEntries[number]): Meme {
  const isPublished = entry.status === "published";
  return {
    id: entry.id,
    title: entry.titleEn,
    caption: entry.captionEn,
    image: isPublished
      ? getMemeImagePath(entry, "en")
      : getPlaceholderImagePath(),
    alt: entry.altTextEn,
    roles: [entry.roleCategory],
    datePublished: "2025-06-01", // Placeholder until images are uploaded
    beforePhrase: entry.beforePhraseEn,
    afterPhrase: entry.afterPhraseEn,
  };
}

// --- Labels ---

export const roleLabels: Record<MemeRole, string> = {
  all: "All Memes",
  "software-engineer": "Software Engineers",
  "project-manager": "Project Managers",
  "it-manager": "IT Managers",
  "sales-account-executive": "Sales & Account Executives",
  "executive-csuite": "Executives & C-Suite",
};

export const roleSeoDescriptions: Record<MemeRole, string> = {
  all: "Funny, relatable English memes for professionals working in global business. See how everyday workplace moments become executive communication learning opportunities.",
  ...Object.fromEntries(
    roleCategoryConfigs.map((c) => [c.slug, c.seoDescriptionEn]),
  ),
} as Record<MemeRole, string>;

// --- Published memes only (what the public pages show) ---

const publishedMemes = memeEntries
  .filter((e) => e.status === "published")
  .map(toLegacyMeme);

// Also include all entries for the admin/development view
// The public pages use memesByRole which filters to published only
const allLegacyMemes = memeEntries.map(toLegacyMeme);

export const memes: Meme[] = publishedMemes;

// --- Grouped by role (for page rendering) ---

export const memesByRole: Record<MemeRole, Meme[]> = {
  all: publishedMemes,
  ...Object.fromEntries(
    allRoleCategories.map((role) => [
      role,
      publishedMemes.filter((m) => m.roles.includes(role)),
    ]),
  ),
} as Record<MemeRole, Meme[]>;

/**
 * All memes regardless of status (for admin/dev pages).
 * Not used by public-facing pages.
 */
export const allMemes: Meme[] = allLegacyMemes;

export const allMemesByRole: Record<MemeRole, Meme[]> = {
  all: allLegacyMemes,
  ...Object.fromEntries(
    allRoleCategories.map((role) => [
      role,
      allLegacyMemes.filter((m) => m.roles.includes(role)),
    ]),
  ),
} as Record<MemeRole, Meme[]>;
