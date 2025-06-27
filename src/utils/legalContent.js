/**
 * Helper utility to fetch legal content without TypeScript collection errors
 * This avoids the "legal is not assignable to type never" error
 */
import { getEntryBySlug } from 'astro:content';

/**
 * Get a legal page by its slug
 * @param {string} slug - The slug of the legal page
 * @returns {Promise<any>} - The legal page content
 */
export async function getLegalContent(slug) {
  try {
    // Use JS to bypass TypeScript content collection errors
    const entry = await getEntryBySlug('legal', slug);
    if (!entry) {
      throw new Error(`Legal content not found for slug: ${slug}`);
    }
    
    const rendered = await entry.render();
    
    return {
      Content: rendered.Content,
      data: entry.data,
      slug: entry.slug
    };
  } catch (error) {
    console.error(`Error fetching legal content for ${slug}:`, error);
    throw error;
  }
}
