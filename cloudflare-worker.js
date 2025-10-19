/**
 * NY English Teacher – Cloudflare Worker v3
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
 *     CALENDAR_ID
 *   
 *   Optional:
 *     WEEKDAY_MORNING_HOURS     (default: 09:00-14:00)
 *     WEEKDAY_AFTERNOON_HOURS   (default: 16:00-20:00)
 *     SATURDAY_HOURS            (default: 09:00-13:00)
 *     ALLOWED_ORIGINS           (comma-separated)
 *     TIMEZONE                  (default: America/New_York)
 *     CONTACT_WEBHOOK_URL       (optional)
 */

export default {
    async fetch(request, env) {
      const url  = new URL(request.url);
      const path = url.pathname.replace(/\/+$/, "") || "/";
      const lang = getLang(url, request);
      const tz   = env.TIMEZONE || "America/New_York";
  
      // CORS preflight
      if (request.method === "OPTIONS") return corsPreflight(request, env);
  
      try {
        // Health check
        if (request.method === "GET" && path === "/")
          return json({ 
            ok: true, 
            service: "NY English Teacher API v3", 
            endpoints: ["/slots/:date","/book","/contact","/debug"],
            features: ["split-hours", "saturday-support"]
          }, 200, request, env);

        // Debug endpoint - verify environment variables
        if (request.method === "GET" && path === "/debug") {
          return json({
            ok: true,
            env_check: {
              has_google_client_id: !!env.GOOGLE_CLIENT_ID,
              has_google_client_secret: !!env.GOOGLE_CLIENT_SECRET,
              has_google_refresh_token: !!env.GOOGLE_REFRESH_TOKEN,
              has_calendar_id: !!(env.CALENDAR_ID || env.GOOGLE_CALENDAR_ID),
              calendar_id: (env.CALENDAR_ID || env.GOOGLE_CALENDAR_ID) ? `${(env.CALENDAR_ID || env.GOOGLE_CALENDAR_ID).substring(0, 5)}...` : 'MISSING',
              timezone: env.TIMEZONE || 'America/New_York (default)',
              weekday_morning: env.WEEKDAY_MORNING_HOURS || '09:00-14:00 (default)',
              weekday_afternoon: env.WEEKDAY_AFTERNOON_HOURS || '16:00-20:00 (default)',
              saturday_hours: env.SATURDAY_HOURS || '09:00-13:00 (default)',
              allowed_origins: env.ALLOWED_ORIGINS || '* (default)'
            }
          }, 200, request, env);
        }

        // Slots: GET /slots/2025-10-15
        if (request.method === "GET" && path.startsWith("/slots/")) {
          const dateStr = path.split("/slots/")[1];
          const result = await getAvailableSlots(dateStr, env, tz);
          // If debug=1 in query, return debug info
          if (url.searchParams.get('debug') === '1') {
            return json({ ok: true, ...result }, 200, request, env);
          }
          return json({ ok: true, slots: result.slots }, 200, request, env);
        }
  
        // Book: POST /book
        if (request.method === "POST" && path === "/book") {
          const payload = await safeJson(request);
          const result = await createBooking(payload, env, tz, lang);
          return json({ ok: true, ...result, message: t(lang, "book_success") }, 200, request, env);
        }
  
        // Contact: POST /contact
        if (request.method === "POST" && path === "/contact") {
          const payload = await safeJson(request);
          await handleContact(payload, env, lang);
          return json({ ok: true, message: t(lang, "contact_success") }, 200, request, env);
        }
  
        return json({ ok: false, error: "Not found" }, 404, request, env);
      } catch (err) {
        console.error("Worker error:", err);
        return json({ ok: false, error: err?.message || String(err) }, 500, request, env);
      }
    }
  };
  
  /* ------------------------ Core Handlers ------------------------ */
  
  async function getAvailableSlots(dateStr, env, timeZone) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) throw new Error("Invalid date format. Use YYYY-MM-DD");
  
    const d = new Date(`${dateStr}T00:00:00`);
    const dow = d.getUTCDay();
    
    // Sunday (0) is blocked
    if (dow === 0) return [];
  
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
    const allTimes = timeBlocks.flatMap(block => block.split("-"));
    const earliestStart = allTimes[0];
    const latestEnd = allTimes[allTimes.length - 1];
    
    const timeMin = toISO(dateStr, earliestStart, timeZone);
    const timeMax = toISO(dateStr, latestEnd, timeZone);
  
    // Fetch busy times from BOTH calendars (personal + work)
    const personalCalendar = 'rcushmaniii@gmail.com';
    const workCalendar = env.GOOGLE_CALENDAR_ID || env.CALENDAR_ID;
    
    const freeBusy = await fetchJSON("https://www.googleapis.com/calendar/v3/freeBusy", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        timeMin, 
        timeMax, 
        items: [
          { id: personalCalendar },
          { id: workCalendar }
        ] 
      }),
    });
  
    // Combine busy times from both calendars
    const personalBusy = freeBusy?.calendars?.[personalCalendar]?.busy || [];
    const workBusy = freeBusy?.calendars?.[workCalendar]?.busy || [];
    const allBusy = [...personalBusy, ...workBusy];
    
    console.log('📅 FreeBusy response:', JSON.stringify(freeBusy, null, 2));
    console.log('🔒 Personal busy:', personalBusy);
    console.log('🔒 Work busy:', workBusy);
    console.log('🔒 All busy times:', allBusy);
    
    const busy = allBusy.map(b => ({
      start: new Date(b.start), end: new Date(b.end),
    }));
  
    // Generate slots for each time block
    const allSlots = [];
    for (const block of timeBlocks) {
      const [startTime, endTime] = block.split("-");
      const blockSlots = generateSlots(startTime, endTime, 30); // 30-min slots
      allSlots.push(...blockSlots);
    }
  
    // Filter out busy slots
    // Convert local time slots to UTC for comparison with busy times
    const availableSlots = allSlots.filter((time) => {
      // Parse time as Mexico City time and convert to UTC
      const [h, m] = time.split(":").map(Number);
      // Create date in Mexico City timezone (UTC-6)
      const localDate = new Date(`${dateStr}T${pad(h)}:${pad(m)}:00`);
      // Add 6 hours to convert Mexico City time to UTC
      const slotStart = new Date(localDate.getTime() + (6 * 60 * 60 * 1000));
      const slotEnd   = new Date(slotStart.getTime() + 30 * 60 * 1000);
      
      return !busy.some(b => overlaps(slotStart, slotEnd, b.start, b.end));
    });
    
    return {
      slots: availableSlots,
      debug: {
        personalBusy,
        workBusy,
        allBusy,
        busyParsed: busy.map(b => ({ start: b.start.toISOString(), end: b.end.toISOString() }))
      }
    };
  }
  
  async function createBooking(data, env, timeZone, lang) {
    const { name, email, date, time } = data || {};
    if (!name || !email || !date || !time) throw new Error(t(lang, "missing_fields"));
  
    const accessToken = await getAccessToken(env);
  
    // For event creation, use simple datetime strings with timezone field
    const startDateTime = `${date}T${time}:00`;
    const [h, m] = time.split(":").map(Number);
    const endMinutes = h * 60 + m + 30;
    const endH = Math.floor(endMinutes / 60);
    const endM = endMinutes % 60;
    const endTime = `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;
    const endDateTime = `${date}T${endTime}:00`;
  
    const summary = lang === "es" ? `Consulta: ${name}` : `Consultation: ${name}`;
    const description = lang === "es"
      ? `Consulta gratuita de inglés de negocios\nNombre: ${name}\nEmail: ${email}`
      : `Free business English consultation\nName: ${name}\nEmail: ${email}`;
  
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
          end:   { dateTime: endDateTime,   timeZone },
          attendees: [
            { email },
            { email: 'rcushmaniii@gmail.com', organizer: true, responseStatus: 'accepted' }
          ],
          conferenceData: { 
            createRequest: { 
              requestId: `booking-${Date.now()}-${Math.random().toString(36).substring(7)}`,
              conferenceSolutionKey: { type: 'hangoutsMeet' }
            } 
          },
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 24 * 60 },
              { method: "email", minutes: 60 },
            ],
          },
        }),
      }
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
      console.log("CONTACT:", { name, email, message });
    }
  }
  
  /* ------------------------ Google OAuth ------------------------ */
  
  async function getAccessToken(env) {
    const body = `client_id=${encodeURIComponent(env.GOOGLE_CLIENT_ID)}&client_secret=${encodeURIComponent(env.GOOGLE_CLIENT_SECRET)}&refresh_token=${encodeURIComponent(env.GOOGLE_REFRESH_TOKEN)}&grant_type=refresh_token`;
  
    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  
    if (!res.ok) throw new Error(`OAuth error: ${await res.text()}`);
    const json = await res.json();
    if (!json?.access_token) throw new Error("No access_token returned by Google");
    return json.access_token;
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
    };
    return dict[key]?.[lang] || dict[key]?.en || key;
  }
  
  function toISO(dateStr, hhmm, timeZone) {
    const [h, m] = hhmm.split(":").map(Number);
    // Create a date object and convert to ISO string
    // This creates a UTC timestamp that we'll use with the timeZone field
    const date = new Date(`${dateStr}T${pad(h)}:${pad(m)}:00Z`);
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
      if (m >= 60) { h += 1; m -= 60; }
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
    try { return JSON.parse(text || "{}"); } catch { throw new Error("Invalid JSON body"); }
  }
  
  function pad(n) { return String(n).padStart(2, "0"); }
  
  /* ------------------------ CORS ------------------------ */
  
  function corsHeaders(request, env) {
    const origin = request.headers.get("origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "*")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
  
    const allowOrigin = allowed.includes("*")
      ? "*"
      : allowed.includes(origin) ? origin : "";
  
    const base = {
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };
    return allowOrigin ? { ...base, "Access-Control-Allow-Origin": allowOrigin } : base;
  }
  
  function corsPreflight(request, env) {
    return new Response(null, { status: 204, headers: corsHeaders(request, env) });
  }
  
  function json(data, status, request, env) {
    return new Response(JSON.stringify(data), { status, headers: corsHeaders(request, env) });
  }