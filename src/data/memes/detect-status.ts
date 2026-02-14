import { existsSync } from "node:fs";
import { join } from "node:path";
import type { MemeEntry, MemeStatus } from "./types";

/**
 * Build-time utility: checks the filesystem for meme images
 * and returns the auto-detected status.
 *
 * Image naming convention: {id}_{lang}.png
 * Location: public/images/memes/{roleCategory}/
 *
 * Status logic:
 * - Both EN + ES images exist → "published"
 * - Only one language image exists → "image-uploaded"
 * - No images → keeps original status ("planned" or "prompt-ready")
 */

const PUBLIC_DIR = join(process.cwd(), "public");

/** Check if an image file exists for a given meme + language */
function imageExists(
  id: string,
  lang: "en" | "es",
  roleCategory: string,
): boolean {
  const extensions = ["png", "jpg", "jpeg", "webp"];
  return extensions.some((ext) =>
    existsSync(
      join(PUBLIC_DIR, "images", "memes", roleCategory, `${id}_${lang}.${ext}`),
    ),
  );
}

/** Detect the actual status of a single meme based on filesystem */
export function detectMemeStatus(entry: MemeEntry): MemeStatus {
  const hasEn = imageExists(entry.id, "en", entry.roleCategory);
  const hasEs = imageExists(entry.id, "es", entry.roleCategory);

  if (hasEn && hasEs) return "published";
  if (hasEn || hasEs) return "image-uploaded";
  return entry.status; // Keep original ("planned" or "prompt-ready")
}

/** Enrich an array of meme entries with auto-detected status */
export function enrichWithDetectedStatus(
  entries: MemeEntry[],
): MemeEntry[] {
  return entries.map((entry) => ({
    ...entry,
    status: detectMemeStatus(entry),
  }));
}
