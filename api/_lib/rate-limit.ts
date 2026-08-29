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
 * Storage key for one window of one rule.
 *
 * The window length is part of the key ON PURPOSE. Each window keeps its own
 * counter rows, because every window both READS and WRITES this table — if two
 * windows of the same rule shared a key they would count each other's inserts,
 * and an N-window rule would consume its budget N times faster than configured.
 * Verified the hard way on 2026-08-26: the 5/min and 20/hr windows shared a key
 * and the endpoint started refusing at the 4th request instead of the 6th.
 */
function windowKey(bucket: string, window: RateLimitWindow): string {
  return `${bucket}:${window.windowSeconds}`;
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
  const key = windowKey(bucket, window);

  const rows = await sql`
    WITH recent AS (
      SELECT count(*)::int AS hits
      FROM rate_limit_hits
      WHERE bucket = ${key}
        AND identifier = ${identifier}
        AND created_at > NOW() - (${window.windowSeconds} * INTERVAL '1 second')
    ), inserted AS (
      INSERT INTO rate_limit_hits (bucket, identifier)
      SELECT ${key}, ${identifier}
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
  /**
   * Paid TTS provider. Legitimately called several times per lesson page.
   *
   * The per-minute window is a BURST allowance, not the cost control — the
   * hourly cap is what bounds spend, and it is unchanged. A pronunciation
   * drill page (see the "English words Spanish speakers should practice"
   * post, ~170 distinct speakable items) is clicked far faster than a lesson
   * page: one word every two seconds is normal practice behaviour and used to
   * trip the old 30/min ceiling, silently dropping the reader to the robotic
   * browser SpeechSynthesis fallback halfway down the page.
   *
   * Raising 30 -> 60 does not raise worst-case cost: max spend per identifier
   * per hour is min(hourly cap, 60 * per-minute cap), and the hourly cap
   * dominates in both cases.
   *
   * The hourly cap moved 300 -> 500 when the second drill page shipped. Count
   * DISTINCT strings, not buttons: the client cache is an in-memory Map keyed
   * by text, so the repeated words across sections cost one fetch each. The
   * sales-interview post renders 216 buttons but only 142 distinct strings;
   * the first drill post renders 171 buttons and 110 distinct. So one page
   * load costs at most 142 calls and both posts together cost 252 — under the
   * old 300. What broke it is a reload, since the cache does not survive one:
   * both posts plus a single reload lands near 400.
   *
   * The math, so the next person does not have to redo it. Azure Neural TTS is
   * ~$16 per 1M characters. Items here average ~15 characters across single
   * words and full practice sentences, so 500 calls is ~7,500 characters, or
   * about $0.12 per hour for a single identifier running the cap flat out.
   * Redo this arithmetic before moving it again.
   *
   * The real fix is not a higher cap: it is making this endpoint a GET with the
   * text in the query string so Vercel's edge caches one audio file per word
   * across ALL readers instead of per reader. That touches SpeakEnglish.astro,
   * AudioButton.tsx and every course component, so it is deliberately not
   * bundled with a content change.
   */
  ttsSynthesize: {
    bucket: "tts-synthesize",
    windows: [
      { windowSeconds: 60, max: 60 },
      { windowSeconds: 3600, max: 500 },
    ],
  },
} as const satisfies Record<string, RateLimitRule>;
