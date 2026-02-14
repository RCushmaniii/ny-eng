/**
 * Meme portfolio data - Spanish
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
    title: entry.titleEs,
    caption: entry.captionEs,
    image: isPublished
      ? getMemeImagePath(entry, "es")
      : getPlaceholderImagePath(),
    alt: entry.altTextEs,
    roles: [entry.roleCategory],
    datePublished: "2025-06-01",
    beforePhrase: entry.beforePhraseEs,
    afterPhrase: entry.afterPhraseEs,
  };
}

// --- Labels ---

export const roleLabels: Record<MemeRole, string> = {
  all: "Todos los Memes",
  "software-engineer": "Ingenieros de Software",
  "project-manager": "Gerentes de Proyecto",
  "it-manager": "Gerentes de IT",
  "sales-account-executive": "Ejecutivos de Ventas y Cuentas",
  "executive-csuite": "Ejecutivos y C-Suite",
};

export const roleSeoDescriptions: Record<MemeRole, string> = {
  all: "Memes divertidos y relatable sobre el ingles en el trabajo para profesionales en negocios globales. Momentos cotidianos del trabajo que se convierten en oportunidades de aprendizaje de comunicacion ejecutiva.",
  ...Object.fromEntries(
    roleCategoryConfigs.map((c) => [c.slug, c.seoDescriptionEs]),
  ),
} as Record<MemeRole, string>;

// --- Published memes only (what the public pages show) ---

const publishedMemes = memeEntries
  .filter((e) => e.status === "published")
  .map(toLegacyMeme);

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
