// src/utils/url.ts
/**
 * Normalize a path to prevent double slashes except after protocol, and ensure leading slash for internal URLs.
 * @param path - The URL or path to normalize
 * @returns Cleaned path string
 */
export function normalizePath(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    // External URL: only collapse slashes after protocol
    return path.replace(/([^:])\/+([/])/g, '$1/');
  }
  // Internal: collapse all multiple slashes, ensure single leading slash
  let normalized = path.replace(/\/+/g, '/');
  if (!normalized.startsWith('/')) normalized = '/' + normalized;
  return normalized;
}
