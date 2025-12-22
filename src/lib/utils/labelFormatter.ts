/**
 * labelFormatter.ts
 * Utility to convert raw database strings (kebab-case) to professional Title Case
 * with proper acronym handling for UI display
 */

// Dictionary of common acronyms that should be fully uppercased
const ACRONYMS = new Set([
  "hr",
  "it",
  "ceo",
  "coo",
  "cto",
  "roi",
  "b2b",
  "saas",
  "api",
  "ui",
  "ux",
  "seo",
  "crm",
  "erp",
]);

/**
 * Formats a raw string (kebab-case or snake_case) to Title Case
 * with proper acronym handling
 *
 * @param rawString - The raw string from database (e.g., "crisis-management", "hr-professional")
 * @returns Formatted string (e.g., "Crisis Management", "HR Professional")
 *
 * @example
 * formatLabel("crisis-management") // "Crisis Management"
 * formatLabel("hr-professional") // "HR Professional"
 * formatLabel("job-seeker") // "Job Seeker"
 * formatLabel("b2b-sales") // "B2B Sales"
 */
export function formatLabel(rawString: string): string {
  if (!rawString) return "";

  // Replace hyphens and underscores with spaces
  const normalized = rawString.replace(/[-_]/g, " ");

  // Split into words and process each
  const words = normalized.split(" ");

  const formatted = words.map((word) => {
    const lowerWord = word.toLowerCase();

    // Check if it's an acronym
    if (ACRONYMS.has(lowerWord)) {
      return lowerWord.toUpperCase();
    }

    // Otherwise, capitalize first letter
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return formatted.join(" ");
}

/**
 * Formats an array of raw strings to Title Case
 *
 * @param rawStrings - Array of raw strings
 * @returns Array of formatted strings
 */
export function formatLabels(rawStrings: string[]): string[] {
  return rawStrings.map(formatLabel);
}

/**
 * Creates a map of raw values to formatted labels
 * Useful for dropdown options where you need both value and label
 *
 * @param rawStrings - Array of raw strings
 * @returns Map of raw string to formatted label
 *
 * @example
 * const map = createLabelMap(["hr-professional", "ceo"]);
 * // { "hr-professional": "HR Professional", "ceo": "CEO" }
 */
export function createLabelMap(rawStrings: string[]): Record<string, string> {
  return rawStrings.reduce(
    (acc, raw) => {
      acc[raw] = formatLabel(raw);
      return acc;
    },
    {} as Record<string, string>,
  );
}
