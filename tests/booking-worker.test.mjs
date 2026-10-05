/**
 * NY English booking Worker (plain-mode-42c4) against an in-memory Google
 * Calendar. Nothing here touches the real calendar.
 *
 *   npm test          (Node's built-in runner — no extra dependencies)
 *
 * Added 2026-10-05 with the WhatsApp booking path: cushlabs-whatsapp calls
 * /book over a service binding (hostname "booking"), email becomes optional for
 * that caller only, and /book re-checks the slot live.
 *
 * Fixed clock: Monday 5 Oct 2026, 9:00 AM Mexico City (15:00 UTC).
 */
import { test, beforeEach, afterEach, mock } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";

const NOW = new Date("2026-10-05T15:00:00Z");

function fakeD1() {
  const db = new DatabaseSync(":memory:");
  return {
    async batch(stmts) {
      const out = [];
      for (const s of stmts) out.push(await s.run());
      return out;
    },
    prepare(sql) {
      let args = [];
      const stmt = {
        bind(...a) {
          args = a;
          return stmt;
        },
        async run() {
          db.prepare(sql).run(...args);
          return { success: true };
        },
        async all() {
          return { results: db.prepare(sql).all(...args) };
        },
        async first() {
          return db.prepare(sql).get(...args) ?? null;
        },
      };
      return stmt;
    },
  };
}

let busy;
let inserted;
let realFetch;
let worker;
let n = 0;

beforeEach(async () => {
  mock.timers.enable({ apis: ["Date"], now: NOW });
  busy = [];
  inserted = [];
  realFetch = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    const url = String(input instanceof Request ? input.url : input);
    const reply = (body) => new Response(JSON.stringify(body), { headers: { "Content-Type": "application/json" } });
    if (url.startsWith("https://oauth2.googleapis.com/token")) return reply({ access_token: "t", expires_in: 3600 });
    if (url.includes("/freeBusy")) return reply({ calendars: { "personal@test": { busy }, "work@test": { busy: [] } } });
    if (url.includes("/events")) {
      const ev = JSON.parse(String(init.body));
      inserted.push(ev);
      busy.push({
        start: new Date(`${ev.start.dateTime}-06:00`).toISOString(),
        end: new Date(`${ev.end.dateTime}-06:00`).toISOString(),
      });
      return reply({ id: `evt-${inserted.length}`, hangoutLink: "https://meet.google.com/x", start: { dateTime: `${ev.start.dateTime}-06:00` } });
    }
    throw new Error(`unexpected fetch in test: ${url}`);
  };
  // Fresh module per test: token and slot caches live in module scope.
  worker = (await import(`../cloudflare-worker.js?t=${n++}`)).default;
});

afterEach(() => {
  globalThis.fetch = realFetch;
  mock.timers.reset();
});

const env = () => ({
  DB: fakeD1(),
  GOOGLE_CLIENT_ID: "id",
  GOOGLE_CLIENT_SECRET: "s",
  GOOGLE_REFRESH_TOKEN: "r",
  GOOGLE_CALENDAR_ID: "work@test",
  PERSONAL_CALENDAR_ID: "personal@test",
  TIMEZONE: "America/Mexico_City",
});

async function book(e, body, { internal = false } = {}) {
  const host = internal ? "https://booking" : "https://plain-mode-42c4.example.workers.dev";
  const res = await worker.fetch(
    new Request(`${host}/book?lang=es`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "CF-Connecting-IP": "203.0.113.9" },
      body: JSON.stringify({ name: "Ana López", date: "2026-10-06", time: "10:00", ...body }),
    }),
    e,
  );
  return { status: res.status, data: await res.json() };
}

test("WhatsApp booking without an email: event has no attendee, says WhatsApp, keeps the phone", async () => {
  const e = env();
  const { status, data } = await book(e, { phone: "5213312345678", whatsappOptIn: true }, { internal: true });
  assert.equal(status, 200, JSON.stringify(data));
  assert.deepEqual(inserted[0].attendees, []);
  assert.match(inserted[0].description, /Reservado por WhatsApp/);
  assert.match(inserted[0].description, /Teléfono: 5213312345678/);
  assert.doesNotMatch(inserted[0].description, /Email:/);
  const row = await e.DB.prepare("SELECT email, phone, wa_opt_in FROM bookings").first();
  assert.deepEqual({ ...row }, { email: "", phone: "5213312345678", wa_opt_in: 1 });
});

test("WhatsApp booking with an email still sends the Google invite", async () => {
  await book(env(), { email: "ana@example.com", phone: "5213312345678" }, { internal: true });
  assert.deepEqual(inserted[0].attendees, [{ email: "ana@example.com" }]);
});

test("the public web form still requires an email", async () => {
  const { status } = await book(env(), { phone: "5213312345678" });
  assert.equal(status, 500); // createBooking throws missing_fields, as before
  assert.equal(inserted.length, 0);
});

test("a slot someone else took is refused with slot_taken and nothing is created", async () => {
  busy.push({ start: "2026-10-06T16:00:00.000Z", end: "2026-10-06T16:30:00.000Z" }); // 10:00 CDMX
  const { status, data } = await book(env(), { email: "ana@example.com" });
  assert.equal(status, 409);
  assert.equal(data.code, "slot_taken");
  assert.equal(inserted.length, 0);
});

test("two bookings for the same slot: the second is refused", async () => {
  const e = env();
  assert.equal((await book(e, { phone: "5213300000001" }, { internal: true })).status, 200);
  assert.equal((await book(e, { phone: "5213300000002" }, { internal: true })).status, 409);
  assert.equal(inserted.length, 1);
});

test("WhatsApp bookings are rate-limited per phone, not as one shared caller", async () => {
  const e = env();
  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "16:00"];
  const statuses = [];
  for (const time of times) statuses.push((await book(e, { phone: "5213311111111", time }, { internal: true })).status);
  assert.deepEqual(statuses, [200, 200, 200, 200, 200, 429]); // RATE_LIMIT_MAX default 5
  // A different person is not blocked by the first one's limit.
  assert.equal((await book(e, { phone: "5213322222222", time: "17:00" }, { internal: true })).status, 200);
});
