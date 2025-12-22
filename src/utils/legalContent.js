/**
 * Helper utility to fetch legal content without TypeScript collection errors
 * This avoids the "legal is not assignable to type never" error
 */
import { getEntry } from "astro:content";

/**
 * Get a legal page by its slug
 * @param {string} slug - The slug of the legal page
 * @returns {Promise<any>} - The legal page content
 */
/**
 * Gets legal content by slug and language
 * @param {string} slug - The base slug (e.g., 'privacy-policy') or full slug with lang prefix (e.g., 'en/privacy-policy')
 * @param {string} lang - The language ('en' or 'es')
 * @returns {Promise<any>} - The legal page content
 */
export async function getLegalContent(slug, lang = "en") {
  try {
    // Log inputs for debugging
    console.log(
      `[DEBUG] getLegalContent called with slug: '${slug}', lang: '${lang}'`,
    );

    const entries = await (
      await import("astro:content")
    ).getCollection("legal");

    console.log(`[DEBUG] Found ${entries.length} legal entries`);
    entries.forEach((e) => {
      console.log(`[DEBUG] Entry ID: ${e.id}, slug: ${e.slug}`);
    });

    // We need to handle multiple formats that could be passed
    let entry;

    // Case 1: Slug already contains language prefix (e.g., 'en/privacy-policy')
    if (slug.startsWith("en/") || slug.startsWith("es/")) {
      console.log(`[DEBUG] Case 1: Slug already has language prefix: ${slug}`);
      entry = entries.find((e) => e.slug === slug);
    }
    // Case 2: Base slug without language prefix (e.g., 'privacy-policy')
    else {
      console.log(`[DEBUG] Case 2: Adding language prefix to slug`);
      const fullSlug = lang === "en" ? `en/${slug}` : `es/${slug}`;
      console.log(`[DEBUG] Looking for entry with slug: ${fullSlug}`);
      entry = entries.find((e) => e.slug === fullSlug);
    }

    if (!entry) {
      // Extra diagnostic info
      console.error(
        `[ERROR] No matching entry found for slug: ${slug}, lang: ${lang}`,
      );
      console.error(
        `[ERROR] Available entries: ${entries.map((e) => e.slug).join(", ")}`,
      );
      throw new Error(
        `Legal content not found for slug: ${slug} and lang: ${lang}`,
      );
    }

    console.log(`[DEBUG] Found entry! ID: ${entry.id}, slug: ${entry.slug}`);

    const rendered = await entry.render();
    return {
      Content: rendered.Content,
      data: entry.data,
      slug: entry.slug,
    };
  } catch (error) {
    console.error(
      `Error fetching legal content for ${slug} and lang ${lang}:`,
      error,
    );
    throw error;
  }
}
