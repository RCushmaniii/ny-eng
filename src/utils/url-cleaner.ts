// URL cleaning utilities to prevent double language prefixes and other URL issues

/**
 * Clean path by removing duplicate language prefixes to prevent double prefixes
 * Examples:
 * - /en//en/about/ -> /en/about/
 * - /es//es/blog/post -> /es/blog/post
 * - /en/blog//en/blog/post -> /en/blog/post
 */
export function cleanDoubleLanguagePrefixes(url: string): string {
  return url
    // Remove double language prefixes in blog URLs
    .replace(/\/(en|es)\/blog\/\1\//g, '/$1/blog/')
    .replace(/\/(en|es)\/blog\/\1\/blog\//g, '/$1/blog/')
    // Remove double language prefixes in paths
    .replace(/\/(en|es)\/\1\//g, '/$1/')
    .replace(/\/(en|es)\/blog\/\1\//g, '/$1/blog/')
    // Remove any remaining double slashes except after protocol
    .replace(/([^:]\/)\//g, '$1');
}

/**
 * Remove language prefix from path
 * Examples:
 * - /en/about/ -> /about/
 * - /es/servicios/ -> /servicios/
 */
export function removeLanguagePrefix(path: string): string {
  return path.replace(/^\/(en|es)\//, '/');
}

/**
 * Add language prefix to path, ensuring no double prefixes
 * Examples:
 * - addLanguagePrefix('/about/', 'en') -> /en/about/
 * - addLanguagePrefix('/en/about/', 'es') -> /es/about/
 */
export function addLanguagePrefix(path: string, lang: 'en' | 'es'): string {
  const cleanPath = removeLanguagePrefix(path);
  return `/${lang}${cleanPath}`;
}

/**
 * Comprehensive URL cleaner that fixes common URL issues
 */
export function cleanBlogUrl(url: string): string {
  return url
    // Remove double language prefixes in blog URLs
    .replace(/\/(en|es)\/blog\/\1\//g, '/$1/blog/')
    .replace(/\/(en|es)\/blog\/\1\/blog\//g, '/$1/blog/')
    .replace(/\/(en|es)\/blog\/\/\1\/blog\//g, '/$1/blog/')
    // Remove any remaining double slashes except after protocol
    .replace(/([^:]\/)\//g, '$1')
    // Ensure trailing slash
    .replace(/([^/])$/, '$1/');
}

export function cleanUrl(url: string): string {
  // First clean blog URLs
  const cleanedUrl = cleanBlogUrl(url);
  
  return cleanDoubleLanguagePrefixes(cleanedUrl)
    // Ensure trailing slash for directories (not files)
    .replace(/([^/.]+)$/, '$1/')
    // Remove any remaining double slashes except after protocol
    .replace(/([^:]\/)\//g, '$1');
}
