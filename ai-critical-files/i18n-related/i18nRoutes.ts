// src/utils/i18nRoutes.ts
export const SUPPORTED_LANGS = ["en", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

const LANG_PREFIX_RE = /^(?:\/)?(en|es)(?:\/|$)/i;

/**
 * Coerce a string to a supported language code or default to 'en'
 */
export function coerceLang(input?: string): Lang {
  const s = (input || "").toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(s)
    ? (s as Lang)
    : "en";
}

/**
 * Strip leading 'en/' or 'es/' from a slug or path
 */
export function stripLangPrefix(slugOrPath: string): string {
  return (slugOrPath || "").replace(LANG_PREFIX_RE, "");
}

/**
 * Normalize a blog slug (array segments) from a content slug like 'en/foo/bar'
 */
export function normalizeBlogSlug(rawSlug: string): {
  lang: Lang;
  segments: string[];
} {
  const lang = coerceLang(rawSlug.split("/")[0]);
  const cleaned = stripLangPrefix(rawSlug).replace(/^\/+|\/+$/g, "");
  const segments = cleaned ? cleaned.split("/") : [];
  return { lang, segments };
}

/**
 * Build a canonical post URL with trailing slash
 */
export function buildPostUrl(lang: Lang, rawSlug: string | string[]): string {
  const segments = Array.isArray(rawSlug)
    ? rawSlug
    : stripLangPrefix(rawSlug).split("/");
  const path = segments.filter(Boolean).join("/");
  return `/${lang}/blog/${path}/`;
}

/**
 * Remove accidental double language segments in a *full path*
 */
export function ensureNoDoubleLang(pathname: string): string {
  // /en/blog/en/foo -> /en/blog/foo
  const m = pathname.match(/^\/(en|es)\/blog\/(.*)$/i);
  if (!m) return pathname;
  const lang = coerceLang(m[1]);
  const cleanedRest = stripLangPrefix(m[2]);
  return `/${lang}/blog/${cleanedRest.replace(/^\/+|\/+$/g, "")}/`;
}

/**
 * Dev guard: throw if a duplicate lang segment is detected in params/paths
 */
export function assertNoDoubleLang(
  pathnameOrSlug: string,
  context = "unknown",
): void {
  const s = pathnameOrSlug.replace(/^\//, "");
  const parts = s.split("/");
  // en/blog/en/...
  if (
    parts.length >= 3 &&
    SUPPORTED_LANGS.includes(parts[0] as Lang) &&
    parts[1] === "blog" &&
    SUPPORTED_LANGS.includes(parts[2] as Lang)
  ) {
    throw new Error(
      `[i18nRoutes] Double language segment detected in ${context}: "${pathnameOrSlug}"`,
    );
  }
}
