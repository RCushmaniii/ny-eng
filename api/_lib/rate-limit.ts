/**
 * Shared rate limiter for the Vercel serverless functions in api/.
 *
 * WHY THIS EXISTS
 * Every endpoint under api/ is public and unauthenticated, and each one spends
 * money on a third party — Anthropic (quiz assessments), Resend (emails),
 * Vercel Blob (capstone uploads), the TTS provider. Without a limiter, anyone
 * with curl can drain those budgets. Rate limiting on every API surface and
 * every paid third-party API is a standing CushLabs requirement.
 *
 * WHY POSTGRES AND NOT UPSTASH REDIS
 * Upstash is the CushLabs default, but Neon is already provisioned for this
 * project and provisioning Upstash needs an interactive dashboard flow. The
 * property that actually matters is a durable store SHARED ACROSS SERVERLESS
 * INSTANCES — an in-memory Map is worthless here because Vercel runs many
 * isolated instances and recycles them constantly. Postgres gives us that with
 * no new vendor. These endpoints see a handful of requests a day, so Redis
 * latency buys nothing. If volume grows, swap the internals of consume() for
 * @upstash/ratelimit; the call sites do not change.
 *
 * FAIL-OPEN BY DESIGN
 * If the limiter's own query throws, the request is ALLOWED. These are
 * lead-capture endpoints: losing a real lead to a limiter hiccup is worse than
 * briefly letting abuse through, and every caller needs the same database
 * anyway, so a genuine outage fails the request one line later regardless.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.POSTGRES_URL || "");

export interface RateLimitWindow {
  /** How far back to count, in seconds. */
  windowSeconds: number;
  /** Maximum allowed requests inside that window. */
  max: number;
}

export interface RateLimitRule {
  /** Namespace, so two endpoints never share a counter. */
  bucket: string;
  /**
   * Burst and sustained limits. Both are enforced — a caller must satisfy
   * every window. Bursts and slow grinding abuse are different attacks.
   */
  windows: RateLimitWindow[];
}

export interface RateLimitResult {
  allowed: boolean;
  /** Seconds the caller should wait. Sent as Retry-After. */
  retryAfter: number;
  /** True when the limiter itself failed and we let the request through. */
  degraded: boolean;
}

/**
 * Best-effort client IP.
 *
 * On Vercel, x-forwarded-for is appended to by the proxy chain, so the ORIGINAL
 * client is the FIRST entry. Taking the last entry would yield Vercel's own
 * infrastructure and collapse every visitor into one bucket.
 */
export function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;

  if (raw) {
    const first = raw.split(",")[0]?.trim();
    if (first) return first;
  }

  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string" && realIp.trim()) return realIp.trim();

  // Unknown callers all share one bucket. That is deliberate: an unidentifiable
  // flood should throttle itself rather than get a free pass.
  return "unknown";
}

/**
 * Count recent hits and record this one, per window.
 *
 * The count and the insert happen in a single statement so they see one
 * snapshot. Two genuinely simultaneous requests can still both pass — that is
 * accepted. This limiter exists to stop budget-draining floods, not to enforce
 * an exact quota, and the windows are small enough that a one-request overshoot
 * is meaningless.
 */
async function consume(
  bucket: string,
  identifier: string,
  window: RateLimitWindow,
): Promise<{ allowed: boolean }> {
  const rows = await sql`
    WITH recent AS (
      SELECT count(*)::int AS hits
      FROM rate_limit_hits
      WHERE bucket = ${bucket}
        AND identifier = ${identifier}
        AND created_at > NOW() - (${window.windowSeconds} * INTERVAL '1 second')
    ), inserted AS (
      INSERT INTO rate_limit_hits (bucket, identifier)
      SELECT ${bucket}, ${identifier}
      FROM recent
      WHERE recent.hits < ${window.max}
      RETURNING 1
    )
    SELECT EXISTS (SELECT 1 FROM inserted) AS allowed
  `;

  return { allowed: rows[0]?.allowed === true };
}

/**
 * Delete expired rows so the table cannot grow without bound.
 *
 * Runs on roughly 2% of requests rather than every one — a sweep on every call
 * would double the write load for no benefit. Failures are swallowed: garbage
 * collection must never break a live request.
 */
async function sweepOccasionally(maxWindowSeconds: number): Promise<void> {
  if (Math.random() > 0.02) return;

  try {
    // Keep a generous margin past the longest window so nothing in use is cut.
    const ttl = maxWindowSeconds * 2;
    await sql`
      DELETE FROM rate_limit_hits
      WHERE created_at < NOW() - (${ttl} * INTERVAL '1 second')
    `;
  } catch {
    /* Never let cleanup break a request. */
  }
}

/**
 * Check every window for this rule. Returns allowed:false as soon as one is
 * exceeded, without consuming the remaining windows.
 */
export async function checkRateLimit(
  req: VercelRequest,
  rule: RateLimitRule,
): Promise<RateLimitResult> {
  const identifier = getClientIp(req);
  const maxWindowSeconds = Math.max(...rule.windows.map((w) => w.windowSeconds));

  try {
    for (const window of rule.windows) {
      const { allowed } = await consume(rule.bucket, identifier, window);
      if (!allowed) {
        return {
          allowed: false,
          retryAfter: window.windowSeconds,
          degraded: false,
        };
      }
    }

    void sweepOccasionally(maxWindowSeconds);
    return { allowed: true, retryAfter: 0, degraded: false };
  } catch (err) {
    // Fail open — see the file header.
    console.error(`Rate limiter unavailable for bucket "${rule.bucket}":`, err);
    return { allowed: true, retryAfter: 0, degraded: true };
  }
}

/**
 * Convenience wrapper: check the limit and, when exceeded, write the 429 and
 * return true so the caller can `if (await enforceRateLimit(...)) return;`.
 */
export async function enforceRateLimit(
  req: VercelRequest,
  res: VercelResponse,
  rule: RateLimitRule,
): Promise<boolean> {
  const result = await checkRateLimit(req, rule);

  if (result.allowed) return false;

  res.setHeader("Retry-After", String(result.retryAfter));
  res.status(429).json({
    success: false,
    error: "Too many requests. Please wait a moment and try again.",
  });
  return true;
}

/**
 * Per-endpoint limits.
 *
 * Sized against real use, not theoretical load. A person takes a quiz once;
 * five submissions a minute from one IP is already far past normal, and the
 * hourly cap stops a slow grind that stays under the burst limit. Office and
 * campus NAT means several people can share an IP, which is why these are
 * generous rather than tight.
 */
export const RATE_LIMITS = {
  /** Anthropic assessment + 2 Resend emails + a DB write per call. */
  quizSubmit: {
    bucket: "quiz-submit",
    windows: [
      { windowSeconds: 60, max: 5 },
      { windowSeconds: 3600, max: 20 },
    ],
  },
  /** Resend email + a DB write per call. */
  corporateGuideDownload: {
    bucket: "corporate-guide-download",
    windows: [
      { windowSeconds: 60, max: 5 },
      { windowSeconds: 3600, max: 20 },
    ],
  },
  /** Mints a Vercel Blob upload token — storage spend, so tighter. */
  capstoneUpload: {
    bucket: "capstone-upload",
    windows: [
      { windowSeconds: 60, max: 3 },
      { windowSeconds: 3600, max: 15 },
    ],
  },
  /** Paid TTS provider. Legitimately called several times per lesson page. */
  ttsSynthesize: {
    bucket: "tts-synthesize",
    windows: [
      { windowSeconds: 60, max: 30 },
      { windowSeconds: 3600, max: 300 },
    ],
  },
} as const satisfies Record<string, RateLimitRule>;
