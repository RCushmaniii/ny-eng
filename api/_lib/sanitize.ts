/**
 * Input hardening for form handlers that put visitor-supplied text into email.
 *
 * Why this exists (2026-11-12 security review): /api/quiz/submit interpolated
 * every field of the request body straight into two HTML emails and sent one of
 * them to whatever address the request named. Nothing checked that the address
 * was an address, and nothing escaped the text. Anyone could POST a stranger's
 * email plus their own markup and have nyenglishteacher.com deliver a phishing
 * message from its authenticated sender — a reputation and deliverability
 * problem for the one domain the business sends from.
 *
 * Kept dependency-free and free of non-erasable TypeScript so Node's built-in
 * test runner can import it directly (see tests/sanitize.test.mjs).
 */

/** Escape text for use in HTML element content or a double-quoted attribute. */
export function escapeHtml(text: unknown): string {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Collapse control characters (including CR and LF, which is what makes this
 * safe for an email subject line), trim, and cap the length.
 */
export function cleanText(value: unknown, max: number): string {
  if (value === null || value === undefined) return "";
  if (typeof value !== "string" && typeof value !== "number") return "";
  return String(value)
    .replace(/[\p{Cc}\p{Zl}\p{Zp}]+/gu, " ")
    .trim()
    .slice(0, max);
}

// One address, no display name, no list separators, no angle brackets, no
// whitespace. Deliberately stricter than RFC 5322: this decides who the site
// emails, so "accepts every legal address" is the wrong goal.
const EMAIL_RE = /^[^\s@<>"'`,;:()\\[\]]+@[^\s@<>"'`,;:()\\[\]]+\.[^\s@<>"'`,;:()\\[\]]{2,}$/;

/** Returns the normalised address, or null when the value is not a single plain address. */
export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim();
  if (email.length < 6 || email.length > 254) return null;
  if (!EMAIL_RE.test(email)) return null;
  return email;
}

const QUIZ_TEXT_LIMITS: Record<string, number> = {
  name: 120,
  company: 160,
  phone: 40,
  quizType: 60,
  language: 5,
  scoreTier: 60,
  primaryGap: 80,
  secondaryGap: 80,
  primaryGapName: 120,
  secondaryGapName: 120,
  primaryGapImpact: 600,
  secondaryGapImpact: 600,
};

/**
 * Build the object the quiz email templates render from. Every string is
 * cleaned, capped and HTML-escaped; numbers are coerced; category scores are
 * rebuilt key by key. The templates never see the raw request body.
 */
export function toQuizEmailFields(
  body: Record<string, unknown>,
  derived: { email: string; totalScore: number; scoreTier: string },
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, max] of Object.entries(QUIZ_TEXT_LIMITS)) {
    out[key] = escapeHtml(cleanText(body[key], max));
  }
  out.email = escapeHtml(derived.email);
  out.totalScore = Number.isFinite(derived.totalScore) ? derived.totalScore : 0;
  out.scoreTier = escapeHtml(cleanText(derived.scoreTier, QUIZ_TEXT_LIMITS.scoreTier));

  const scores: Record<string, number> = {};
  const raw = body.categoryScores;
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    for (const [key, value] of Object.entries(raw as Record<string, unknown>).slice(0, 12)) {
      const n = Number(value);
      if (!Number.isFinite(n)) continue;
      scores[escapeHtml(cleanText(key, 40))] = Math.round(n);
    }
  }
  out.categoryScores = scores;
  return out;
}
