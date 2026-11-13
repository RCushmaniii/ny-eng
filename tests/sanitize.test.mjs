/**
 * Input hardening for the quiz email path (api/_lib/sanitize.ts).
 *
 *   npm test          (Node's built-in runner — no extra dependencies)
 *
 * Added 2026-11-12. /api/quiz/submit used to put the raw request body into two
 * HTML emails and send one to any address the request named. These cases pin
 * the two properties that were missing: the recipient is one plain address, and
 * nothing a visitor types can become markup.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { cleanText, escapeHtml, normalizeEmail, toQuizEmailFields } from "../api/_lib/sanitize.ts";

test("escapeHtml neutralises markup and attribute breakouts", () => {
  assert.equal(
    escapeHtml(`<a href="https://evil.example">Click</a> & 'more'`),
    "&lt;a href=&quot;https://evil.example&quot;&gt;Click&lt;/a&gt; &amp; &#039;more&#039;",
  );
  assert.equal(escapeHtml(undefined), "");
  assert.equal(escapeHtml(42), "42");
});

test("cleanText strips line breaks so a name cannot inject a header into a subject", () => {
  assert.equal(cleanText("Ana\r\nBcc: victim@example.com", 120), "Ana Bcc: victim@example.com");
  assert.equal(cleanText("  padded  ", 120), "padded");
  assert.equal(cleanText("x".repeat(500), 120).length, 120);
  assert.equal(cleanText({ toString: () => "<b>" }, 120), "");
  assert.equal(cleanText(null, 120), "");
});

test("normalizeEmail accepts ordinary addresses", () => {
  assert.equal(normalizeEmail("  ana.lopez+quiz@empresa.com.mx "), "ana.lopez+quiz@empresa.com.mx");
  assert.equal(normalizeEmail("a@b.co"), "a@b.co");
});

test("normalizeEmail rejects lists, display names, markup and non-strings", () => {
  for (const bad of [
    "a@b.com, c@d.com",
    "a@b.com;c@d.com",
    "Name <a@b.com>",
    "a@b.com\nBcc: c@d.com",
    "a b@c.com",
    '"><script>@x.com',
    "no-at-sign.com",
    "a@nodot",
    "",
    ["a@b.com", "c@d.com"],
    { email: "a@b.com" },
    null,
    undefined,
    `${"a".repeat(250)}@b.com`,
  ]) {
    assert.equal(normalizeEmail(bad), null, `should reject ${JSON.stringify(bad)}`);
  }
});

test("toQuizEmailFields escapes every visitor-supplied string", () => {
  const fields = toQuizEmailFields(
    {
      name: "<img src=x onerror=alert(1)>",
      company: "A & B",
      phone: "<b>55</b>",
      quizType: "executives",
      language: "en",
      primaryGapName: "Clarity",
      primaryGapImpact: `<a href="https://evil.example/login">Verify your account</a>`,
      secondaryGapName: "<script>alert(1)</script>",
      secondaryGapImpact: "y".repeat(5000),
      categoryScores: { clarity: 55, "<svg onload=x>": "70", bogus: "not a number" },
    },
    { email: "ana@empresa.com", totalScore: 62, scoreTier: "Passive Proficiency" },
  );

  const rendered = JSON.stringify(fields);
  assert.ok(!rendered.includes("<"), "no raw < may survive");
  assert.ok(!rendered.includes(">"), "no raw > may survive");
  assert.equal(fields.company, "A &amp; B");
  assert.equal(fields.primaryGapName, "Clarity");
  assert.equal(fields.scoreTier, "Passive Proficiency");
  assert.equal(fields.quizType, "executives");
  assert.equal(fields.totalScore, 62);
  assert.equal(fields.secondaryGapImpact.length, 600);
  assert.deepEqual(fields.categoryScores, { clarity: 55, "&lt;svg onload=x&gt;": 70 });
});

test("toQuizEmailFields ignores a non-object categoryScores and non-string fields", () => {
  const fields = toQuizEmailFields(
    { name: { toString: () => "<b>x</b>" }, categoryScores: ["<b>"] },
    { email: "a@b.co", totalScore: Number.NaN, scoreTier: "Credibility Gap" },
  );
  assert.equal(fields.name, "");
  assert.deepEqual(fields.categoryScores, {});
  assert.equal(fields.totalScore, 0);
});
