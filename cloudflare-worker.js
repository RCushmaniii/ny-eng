/**
 * NY English Teacher – Cloudflare Worker v3.2
 *
 * NEW IN V3.2:
 * - Include user notes/comments in calendar event description
 *
 * V3.1:
 * - Rate limiting on booking endpoint
 * - OAuth token caching (1 hour TTL)
 * - Slots caching (5 minute TTL)
 * - Secured debug endpoint
 *
 * NEW IN V3:
 * - Split business hours (morning + afternoon blocks)
 * - Saturday support with custom hours
 * - Sunday automatically blocked
 *
 * Endpoints:
 *   GET  /slots/:date?lang=en|es
 *   POST /book           { name, email, date: 'YYYY-MM-DD', time: 'HH:MM', lang? }
 *   POST /contact        { name, email, message, lang? }
 *
 * Environment Variables:
 *   Required:
 *     GOOGLE_CLIENT_ID
 *     GOOGLE_CLIENT_SECRET
 *     GOOGLE_REFRESH_TOKEN
 *     CALENDAR_ID                  (work calendar — bookings are created here)
 *     PERSONAL_CALENDAR_ID         (personal calendar — checked for busy times to prevent conflicts)
 *
 *   Optional:
 *     WEEKDAY_MORNING_HOURS     (default: 09:00-14:00)
 *     WEEKDAY_AFTERNOON_HOURS   (default: 16:00-20:00)
 *     SATURDAY_HOURS            (default: 09:00-13:00)
 *     ALLOWED_ORIGINS           (comma-separated)
 *     TIMEZONE                  (default: America/Mexico_City)
 *     CONTACT_WEBHOOK_URL       (optional)
 *     DEBUG_ENABLED             (set to "true" to enable /debug endpoint)
 *     DEBUG_KEY                 (optional auth key for /debug)
 *     RATE_LIMIT_MAX            (default: 5 bookings per window)
 *     RATE_LIMIT_WINDOW_MS      (default: 3600000 = 1 hour)
 */

/* ------------------------ Rate Limiting ------------------------ */

// In-memory rate limit store (persists within worker isolate)
const rateLimitStore = new Map();

// Clean up old entries periodically
function cleanupRateLimitStore(windowMs) {
  const now = Date.now();
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.windowStart > windowMs * 2) {
      rateLimitStore.delete(key);
    }
  }
}

function checkRateLimit(identifier, maxRequests, windowMs) {
  const now = Date.now();
  const key = `rate:${identifier}`;

  let data = rateLimitStore.get(key);

  if (!data || now - data.windowStart > windowMs) {
    // Start new window
    data = { count: 1, windowStart: now };
    rateLimitStore.set(key, data);
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (data.count >= maxRequests) {
    const resetIn = Math.ceil((data.windowStart + windowMs - now) / 1000);
    return { allowed: false, remaining: 0, resetIn };
  }

  data.count++;
  return { allowed: true, remaining: maxRequests - data.count };
}

/* ------------------------ Token Cache ------------------------ */

// Cached access token (persists within worker isolate)
let cachedToken = null;
let tokenExpiresAt = 0;

/* ------------------------ Slots Cache ------------------------ */

// Cached slots (5 minute TTL)
const slotsCache = new Map();
const SLOTS_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCachedSlots(dateStr) {
  const cached = slotsCache.get(dateStr);
  if (cached && Date.now() < cached.expiresAt) {
    return cached.data;
  }
  // Clean up expired entry
  if (cached) slotsCache.delete(dateStr);
  return null;
}

function setCachedSlots(dateStr, data) {
  // Limit cache size to prevent memory issues
  if (slotsCache.size > 30) {
    // Remove oldest entries
    const oldest = Array.from(slotsCache.entries())
      .sort((a, b) => a[1].expiresAt - b[1].expiresAt)
      .slice(0, 10);
    oldest.forEach(([key]) => slotsCache.delete(key));
  }
  slotsCache.set(dateStr, { data, expiresAt: Date.now() + SLOTS_CACHE_TTL });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const lang = getLang(url, request);
    const tz = env.TIMEZONE || "America/Mexico_City";

    // CORS preflight
    if (request.method === "OPTIONS") return corsPreflight(request, env);

    try {
      // Health check
      if (request.method === "GET" && path === "/")
        return json(
          {
            ok: true,
            service: "NY English Teacher API v3",
            endpoints: ["/slots/:date", "/book", "/contact", "/debug"],
            features: ["split-hours", "saturday-support"],
          },
          200,
          request,
          env,
        );

      // Debug endpoint - verify environment variables
      // SECURED: Requires DEBUG_ENABLED=true and optional DEBUG_KEY for authentication
      if (request.method === "GET" && path === "/debug") {
        // Only allow debug endpoint if explicitly enabled
        if (env.DEBUG_ENABLED !== "true") {
          return json(
            { ok: false, error: "Debug endpoint is disabled" },
            404,
            request,
            env,
          );
        }

        // If DEBUG_KEY is set, require it in the request header
        if (env.DEBUG_KEY) {
          const providedKey = request.headers.get("X-Debug-Key");
          if (providedKey !== env.DEBUG_KEY) {
            return json(
              { ok: false, error: "Unauthorized" },
              401,
              request,
              env,
            );
          }
        }

        return json(
          {
            ok: true,
            env_check: {
              has_google_client_id: !!env.GOOGLE_CLIENT_ID,
              has_google_client_secret: !!env.GOOGLE_CLIENT_SECRET,
              has_google_refresh_token: !!env.GOOGLE_REFRESH_TOKEN,
              has_calendar_id: !!(env.CALENDAR_ID || env.GOOGLE_CALENDAR_ID),
              // Removed: No longer exposing partial calendar ID
              timezone: env.TIMEZONE || "America/Mexico_City (default)",
              weekday_morning:
                env.WEEKDAY_MORNING_HOURS || "09:00-14:00 (default)",
              weekday_afternoon:
                env.WEEKDAY_AFTERNOON_HOURS || "16:00-20:00 (default)",
              saturday_hours: env.SATURDAY_HOURS || "09:00-13:00 (default)",
              allowed_origins: env.ALLOWED_ORIGINS ? "(configured)" : "* (default)",
            },
          },
          200,
          request,
          env,
        );
      }

      // Slots: GET /slots/2025-10-15 (with caching)
      if (request.method === "GET" && path.startsWith("/slots/")) {
        const dateStr = path.split("/slots/")[1];
        const skipCache = url.searchParams.get("nocache") === "1";

        // Check cache first (unless explicitly bypassed)
        if (!skipCache) {
          const cachedResult = getCachedSlots(dateStr);
          if (cachedResult) {
            // If debug=1 in query, return debug info with cache indicator
            if (url.searchParams.get("debug") === "1") {
              return json({ ok: true, ...cachedResult, cached: true }, 200, request, env);
            }
            return json({ ok: true, slots: cachedResult.slots, cached: true }, 200, request, env);
          }
        }

        // Fetch fresh data
        const result = await getAvailableSlots(dateStr, env, tz);

        // Cache the result
        setCachedSlots(dateStr, result);

        // If debug=1 in query, return debug info
        if (url.searchParams.get("debug") === "1") {
          return json({ ok: true, ...result, cached: false }, 200, request, env);
        }
        return json({ ok: true, slots: result.slots, cached: false }, 200, request, env);
      }

      // Book: POST /book (with rate limiting)
      if (request.method === "POST" && path === "/book") {
        // Rate limiting configuration
        const maxRequests = parseInt(env.RATE_LIMIT_MAX || "5");
        const windowMs = parseInt(env.RATE_LIMIT_WINDOW_MS || "3600000"); // 1 hour

        // Get client identifier (IP address or forwarded IP)
        const clientIP =
          request.headers.get("CF-Connecting-IP") ||
          request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
          "unknown";

        // Clean up old rate limit entries periodically
        cleanupRateLimitStore(windowMs);

        // Check rate limit
        const rateCheck = checkRateLimit(clientIP, maxRequests, windowMs);
        if (!rateCheck.allowed) {
          return json(
            {
              ok: false,
              error: t(lang, "rate_limited"),
              retryAfter: rateCheck.resetIn,
            },
            429,
            request,
            env,
          );
        }

        const payload = await safeJson(request);
        const result = await createBooking(payload, env, tz, lang);
        return json(
          { ok: true, ...result, message: t(lang, "book_success") },
          200,
          request,
          env,
        );
      }

      // Contact: POST /contact
      if (request.method === "POST" && path === "/contact") {
        const payload = await safeJson(request);
        await handleContact(payload, env, lang);
        return json(
          { ok: true, message: t(lang, "contact_success") },
          200,
          request,
          env,
        );
      }

      return json({ ok: false, error: "Not found" }, 404, request, env);
    } catch (err) {
      console.error("Worker error:", err);
      return json(
        { ok: false, error: err?.message || String(err) },
        500,
        request,
        env,
      );
    }
  },
};

/* ------------------------ Core Handlers ------------------------ */

async function getAvailableSlots(dateStr, env, timeZone) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr))
    throw new Error("Invalid date format. Use YYYY-MM-DD");

  const d = new Date(`${dateStr}T00:00:00`);
  const dow = d.getUTCDay();

  // Sunday (0) is blocked - return consistent object structure
  if (dow === 0) return { slots: [], debug: { reason: "Sunday is blocked" } };

  // Get the appropriate hours based on day of week
  let timeBlocks = [];

  if (dow === 6) {
    // Saturday
    const satHours = env.SATURDAY_HOURS || "09:00-13:00";
    timeBlocks = [satHours];
  } else {
    // Monday-Friday (weekdays)
    const morningHours = env.WEEKDAY_MORNING_HOURS || "09:00-14:00";
    const afternoonHours = env.WEEKDAY_AFTERNOON_HOURS || "16:00-20:00";
    timeBlocks = [morningHours, afternoonHours];
  }

  const accessToken = await getAccessToken(env);

  // Get the earliest start and latest end for freeBusy query
  const allTimes = timeBlocks.flatMap((block) => block.split("-"));
  const earliestStart = allTimes[0];
  const latestEnd = allTimes[allTimes.length - 1];

  const timeMin = toISO(dateStr, earliestStart, timeZone);
  const timeMax = toISO(dateStr, latestEnd, timeZone);

  // Fetch busy times from BOTH calendars to avoid double-bookings:
  //   GOOGLE_CALENDAR_ID = rcushmaniii@gmail.com (bookings created here)
  //   PERSONAL_CALENDAR_ID = shared work calendar (checked for conflicts only)
  const personalCalendar = env.PERSONAL_CALENDAR_ID || env.GOOGLE_CALENDAR_ID || env.CALENDAR_ID;
  const workCalendar = env.GOOGLE_CALENDAR_ID || env.CALENDAR_ID;

  const freeBusy = await fetchJSON(
    "https://www.googleapis.com/calendar/v3/freeBusy",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timeMin,
        timeMax,
        items: [{ id: personalCalendar }, { id: workCalendar }],
      }),
    },
  );

  // Combine busy times from both calendars
  const personalBusy = freeBusy?.calendars?.[personalCalendar]?.busy || [];
  const workBusy = freeBusy?.calendars?.[workCalendar]?.busy || [];
  const allBusy = [...personalBusy, ...workBusy];

  const busy = allBusy.map((b) => ({
    start: new Date(b.start),
    end: new Date(b.end),
  }));

  // Generate slots for each time block
  const allSlots = [];
  for (const block of timeBlocks) {
    const [startTime, endTime] = block.split("-");
    const blockSlots = generateSlots(startTime, endTime, 30); // 30-min slots
    allSlots.push(...blockSlots);
  }

  // Get current time in the target timezone
  const nowUTC = new Date();
  // Add 3.5 hour buffer for preparation time (210 minutes)
  const minBookingTime = new Date(nowUTC.getTime() + 210 * 60 * 1000);

  // Filter out busy slots AND past slots (with 3.5 hour buffer)
  // Convert local time slots to UTC for comparison with busy times
  const availableSlots = allSlots.filter((time) => {
    // Parse time in Mexico City timezone (UTC-6) and convert to UTC
    const [h, m] = time.split(":").map(Number);
    // Create ISO string with explicit timezone offset for Mexico City (UTC-6)
    // When it's 16:00 in Mexico City, it's 22:00 UTC (16 + 6)
    const slotStart = new Date(`${dateStr}T${pad(h)}:${pad(m)}:00-06:00`);
    const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

    // Filter out slots that are less than 3.5 hours from now
    if (slotStart < minBookingTime) return false;

    // Filter out slots that overlap with busy times
    return !busy.some((b) => overlaps(slotStart, slotEnd, b.start, b.end));
  });

  return {
    slots: availableSlots,
    debug: {
      personalBusy,
      workBusy,
      allBusy,
      busyParsed: busy.map((b) => ({
        start: b.start.toISOString(),
        end: b.end.toISOString(),
      })),
    },
  };
}

/**
 * Sanitize user input to prevent injection attacks
 * Removes potentially dangerous characters while preserving readability
 */
function sanitizeInput(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .trim()
    .slice(0, 200) // Limit length
    .replace(/[<>]/g, "") // Remove HTML brackets
    .replace(/[\x00-\x1F\x7F]/g, ""); // Remove control characters
}

async function createBooking(data, env, timeZone, lang) {
  const { name: rawName, email: rawEmail, date, time, notes: rawNotes } = data || {};
  if (!rawName || !rawEmail || !date || !time)
    throw new Error(t(lang, "missing_fields"));

  // Sanitize user inputs
  const name = sanitizeInput(rawName);
  const email = sanitizeInput(rawEmail).toLowerCase();
  const notes = rawNotes ? sanitizeInput(rawNotes) : "";

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    throw new Error(lang === "es" ? "Email inválido" : "Invalid email");
  }

  // Validate date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(lang === "es" ? "Fecha inválida" : "Invalid date");
  }

  // Validate time format (HH:MM)
  if (!/^\d{2}:\d{2}$/.test(time)) {
    throw new Error(lang === "es" ? "Hora inválida" : "Invalid time");
  }

  const accessToken = await getAccessToken(env);

  // For event creation, use simple datetime strings with timezone field
  const startDateTime = `${date}T${time}:00`;
  const [h, m] = time.split(":").map(Number);
  const endMinutes = h * 60 + m + 30;
  const endH = Math.floor(endMinutes / 60);
  const endM = endMinutes % 60;
  const endTime = `${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}`;
  const endDateTime = `${date}T${endTime}:00`;

  const summary = lang === "es" ? `Consulta NY English: ${name}` : `NY English Consultation: ${name}`;
  const notesLine = notes
    ? lang === "es"
      ? `\nNotas: ${notes}`
      : `\nNotes: ${notes}`
    : "";
  const description =
    lang === "es"
      ? `Consulta gratuita de inglés de negocios\nNombre: ${name}\nEmail: ${email}${notesLine}`
      : `Free business English consultation\nName: ${name}\nEmail: ${email}${notesLine}`;

  const calendarId = env.GOOGLE_CALENDAR_ID || env.CALENDAR_ID;
  const resp = await fetchJSON(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary,
        description,
        start: { dateTime: startDateTime, timeZone },
        end: { dateTime: endDateTime, timeZone },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId: `booking-${Date.now()}-${Math.random().toString(36).substring(7)}`,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "email", minutes: 60 },
          ],
        },
      }),
    },
  );

  const meetLink =
    resp.hangoutLink ||
    resp?.conferenceData?.entryPoints?.find((p) => p?.uri)?.uri ||
    null;

  return { eventId: resp.id, meetLink };
}

async function handleContact(data, env, lang) {
  const { name, email, message } = data || {};
  if (!name || !email || !message) throw new Error(t(lang, "contact_missing"));

  if (env.CONTACT_WEBHOOK_URL) {
    await fetch(env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, ts: Date.now() }),
    });
  } else {
    // No webhook configured - contact form submission not forwarded
    // Set CONTACT_WEBHOOK_URL env var to enable forwarding
    console.warn("CONTACT_WEBHOOK_URL not configured - contact submission not forwarded");
  }
}

/* ------------------------ Google OAuth (with caching) ------------------------ */

async function getAccessToken(env) {
  // Check if we have a valid cached token (with 5 minute buffer before expiry)
  const now = Date.now();
  if (cachedToken && tokenExpiresAt > now + 300000) {
    return cachedToken;
  }

  // Refresh the token
  const body = `client_id=${encodeURIComponent(env.GOOGLE_CLIENT_ID)}&client_secret=${encodeURIComponent(env.GOOGLE_CLIENT_SECRET)}&refresh_token=${encodeURIComponent(env.GOOGLE_REFRESH_TOKEN)}&grant_type=refresh_token`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) throw new Error(`OAuth error: ${await res.text()}`);
  const tokenData = await res.json();
  if (!tokenData?.access_token)
    throw new Error("No access_token returned by Google");

  // Cache the token (Google tokens typically expire in 1 hour = 3600 seconds)
  cachedToken = tokenData.access_token;
  const expiresIn = tokenData.expires_in || 3600;
  tokenExpiresAt = now + expiresIn * 1000;

  return cachedToken;
}

/* ------------------------ Helpers ------------------------ */

function getLang(url, request) {
  const forced = url.searchParams.get("lang");
  if (forced) return forced.toLowerCase() === "es" ? "es" : "en";
  const header = request.headers.get("accept-language") || "";
  return header.toLowerCase().startsWith("es") ? "es" : "en";
}

function t(lang, key) {
  const dict = {
    book_success: {
      en: "Your consultation is confirmed.",
      es: "Tu consulta ha sido confirmada.",
    },
    contact_success: {
      en: "Thanks! Your message has been sent.",
      es: "¡Gracias! Tu mensaje fue enviado.",
    },
    missing_fields: {
      en: "Missing required fields: name, email, date, time",
      es: "Faltan campos obligatorios: nombre, email, fecha, hora",
    },
    contact_missing: {
      en: "Missing required fields: name, email, message",
      es: "Faltan campos obligatorios: nombre, email, mensaje",
    },
    rate_limited: {
      en: "Too many booking requests. Please try again later.",
      es: "Demasiadas solicitudes de reserva. Por favor, inténtalo más tarde.",
    },
  };
  return dict[key]?.[lang] || dict[key]?.en || key;
}

function toISO(dateStr, hhmm, timeZone) {
  const [h, m] = hhmm.split(":").map(Number);
  // For Mexico City: Create date in local time, then format as ISO
  // Mexico City is typically UTC-6 (CST) or UTC-5 (CDT during DST)
  // Using -06:00 as Mexico doesn't observe DST as of 2022
  const date = new Date(`${dateStr}T${pad(h)}:${pad(m)}:00-06:00`);
  return date.toISOString();
}

function generateSlots(startHHMM, endHHMM, stepMin = 30) {
  const out = [];
  let [h, m] = startHHMM.split(":").map(Number);
  const [eh, em] = endHHMM.split(":").map(Number);

  while (h < eh || (h === eh && m < em)) {
    // Last slot must end before or at close time
    if (h === eh && m > em - stepMin) break;
    out.push(`${pad(h)}:${pad(m)}`);
    m += stepMin;
    if (m >= 60) {
      h += 1;
      m -= 60;
    }
  }
  return out;
}

function overlaps(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

async function fetchJSON(url, init) {
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`${url} → ${res.status} ${await res.text()}`);
  return await res.json();
}

async function safeJson(request) {
  const text = await request.text();
  try {
    return JSON.parse(text || "{}");
  } catch {
    throw new Error("Invalid JSON body");
  }
}

function pad(n) {
  return String(n).padStart(2, "0");
}

/* ------------------------ CORS ------------------------ */

function corsHeaders(request, env) {
  const origin = request.headers.get("origin") || "";

  // SECURITY: Warn if ALLOWED_ORIGINS is not configured
  // In production, set ALLOWED_ORIGINS to your domain(s), e.g., "https://www.nyenglishteacher.com,https://nyenglishteacher.com"
  if (!env.ALLOWED_ORIGINS) {
    console.warn(
      "CORS WARNING: ALLOWED_ORIGINS not configured. Using wildcard (*). Set ALLOWED_ORIGINS env var for production.",
    );
  }

  const allowed = (env.ALLOWED_ORIGINS || "*")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const allowOrigin = allowed.includes("*")
    ? "*"
    : allowed.includes(origin)
      ? origin
      : "";

  const base = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
  return allowOrigin
    ? { ...base, "Access-Control-Allow-Origin": allowOrigin }
    : base;
}

function corsPreflight(request, env) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request, env),
  });
}

function json(data, status, request, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders(request, env),
  });
}
