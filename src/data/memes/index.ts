/**
 * Main meme portfolio exports — the centralized API for all meme data.
 *
 * This module:
 * 1. Imports raw entries from meme-entries.ts
 * 2. Enriches them with auto-detected status from filesystem
 * 3. Exports helper functions for filtering, grouping, and stats
 */

import type { MemeEntry, RoleCategory } from "./types";
import { allMemeEntries } from "./meme-entries";
import { enrichWithDetectedStatus, findImageExtension } from "./detect-status";
import { allRoleCategories } from "./role-categories";

// Re-export types and configs for convenience
export type { MemeEntry, MemeStatus, RoleCategory } from "./types";
export type { RoleCategoryConfig } from "./types";
export { roleCategoryConfigs, getRoleCategoryConfig, allRoleCategories } from "./role-categories";

// --- Enriched entries (status auto-detected at build time) ---
export const memeEntries: MemeEntry[] = enrichWithDetectedStatus(allMemeEntries);

// --- Image path helper ---

/** Get the image path for a meme in a given language (resolves actual extension) */
export function getMemeImagePath(
  entry: MemeEntry,
  lang: "en" | "es",
): string {
  const ext = findImageExtension(entry.id, lang, entry.roleCategory) ?? "png";
  return `/images/memes/${entry.roleCategory}/${entry.id}_${lang}.${ext}`;
}

/** Get the placeholder image path */
export function getPlaceholderImagePath(): string {
  return "/images/memes/placeholder.svg";
}

// --- Filtering helpers ---

/** Get only published memes (both language images exist) */
export function getPublishedMemes(): MemeEntry[] {
  return memeEntries.filter((m) => m.status === "published");
}

/** Get published memes for a specific role category */
export function getPublishedMemesByRole(
  role: RoleCategory,
): MemeEntry[] {
  return memeEntries.filter(
    (m) => m.roleCategory === role && m.status === "published",
  );
}

/** Get all memes for a role category (regardless of status) */
export function getAllMemesByRole(role: RoleCategory): MemeEntry[] {
  return memeEntries
    .filter((m) => m.roleCategory === role)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/** Get published memes grouped by role category */
export function getPublishedMemesByCategory(): Record<
  RoleCategory,
  MemeEntry[]
> {
  const result = {} as Record<RoleCategory, MemeEntry[]>;
  for (const role of allRoleCategories) {
    result[role] = getPublishedMemesByRole(role);
  }
  return result;
}

// --- Production stats ---

export interface ProductionStats {
  total: number;
  planned: number;
  promptReady: number;
  imageUploaded: number;
  published: number;
  byRole: Record<RoleCategory, { total: number; published: number }>;
}

/** Get production statistics for the meme portfolio */
export function getProductionStats(): ProductionStats {
  const stats: ProductionStats = {
    total: memeEntries.length,
    planned: 0,
    promptReady: 0,
    imageUploaded: 0,
    published: 0,
    byRole: {} as Record<RoleCategory, { total: number; published: number }>,
  };

  // Initialize per-role stats
  for (const role of allRoleCategories) {
    stats.byRole[role] = { total: 0, published: 0 };
  }

  // Count
  for (const entry of memeEntries) {
    switch (entry.status) {
      case "planned":
        stats.planned++;
        break;
      case "prompt-ready":
        stats.promptReady++;
        break;
      case "image-uploaded":
        stats.imageUploaded++;
        break;
      case "published":
        stats.published++;
        break;
    }
    stats.byRole[entry.roleCategory].total++;
    if (entry.status === "published") {
      stats.byRole[entry.roleCategory].published++;
    }
  }

  return stats;
}
