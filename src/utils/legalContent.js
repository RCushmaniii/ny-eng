/**
 * Helper utility to fetch legal content without TypeScript collection errors
 * This avoids the "legal is not assignable to type never" error
 */
import { getCollection, render } from "astro:content";

/**
 * Gets legal content by slug and language
 * @param {string} slug - The base slug (e.g., 'privacy-policy') or full slug with lang prefix (e.g., 'en/privacy-policy')
 * @param {string} lang - The language ('en' or 'es')
 * @returns {Promise<any>} - The legal page content
 */
export async function getLegalContent(slug, lang = "en") {
  const entries = await getCollection("legal");

  let entry;
  if (slug.startsWith("en/") || slug.startsWith("es/")) {
    entry = entries.find((e) => e.id === slug);
  } else {
    const fullId = lang === "en" ? `en/${slug}` : `es/${slug}`;
    entry = entries.find((e) => e.id === fullId);
  }

  if (!entry) {
    throw new Error(
      `Legal content not found for slug: ${slug} and lang: ${lang}`,
    );
  }

  const rendered = await render(entry);
  return {
    Content: rendered.Content,
    data: entry.data,
    id: entry.id,
  };
}
