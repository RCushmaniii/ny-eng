# Bing AI Performance — topic portfolio and opportunity queries (2026-10-31)

Source: Bing Webmaster Tools → AI Performance → Topic Portfolio (BETA), window 1M (Sep 2026).
Citation sources: Microsoft Copilot and partners. Captured by Robert on 2026-10-31.

## What Bing says

Bing places nyenglishteacher.com in exactly **one** topic:

| Topic | Topic size | Sites cited | Queries |
| --- | --- | --- | --- |
| Business & Written Communication | 50M–100M | 10K–50K | 50K–100K |

"Opportunity queries" are questions in that topic where Copilot cites *other* sites, ranked by
how many citations they produce. Bing says they are personalized to the site's context.

| Opportunity query | Language | Citation range | Group |
| --- | --- | --- | --- |
| how to address an envelope | EN | 5K–10K | A |
| business letter format | EN | 5K–10K | A |
| brief schreiben | DE | 1K–5K | D |
| 英語 メール 書き出し ("opening an email in English") | JA | 1K–5K | B |
| email writing | EN | 1K–5K | C |
| 英文メール 書き出し ("opening an English email") | JA | 1K–5K | B |
| briefe schreiben | DE | 1K–5K | D |
| how to introduce yourself | EN | 1K–5K | C |
| how to write an email | EN | 1K–5K | C |
| 英語 メール 締め ("closing an email in English") | JA | 500–1K | B |
| einen brief schreiben | DE | 500–1K | D |
| email subject line | EN | 500–1K | C |
| ecrire un mail | FR | 101–500 | D |
| introducing myself | EN | 101–500 | C |
| introducing yourself | EN | 101–500 | C |
| 英語 ビジネスメール 書き出し ("opening an English business email") | JA | 101–500 | B |
| subject line email | EN | 101–500 | C |
| brief anschreiben | DE | 101–500 | D |
| wie schreibe ich einen brief | DE | 101–500 | D |
| how to write an email in english | EN | 101–500 | B |
| how to introduce myself | EN | 101–500 | C |
| ecrire un message | FR | 101–500 | D |

(The list has 50 rows; these are the top 22 Robert copied.)

## What it means

**Group A — native-speaker clerical how-to** (envelopes, letter format). The biggest numbers,
the worst fit. The askers are native English speakers, the incumbents are USPS, Indeed and
Grammarly, and none of them is a NY English reader. Skip.

**Group B — non-native speakers asking how to open and close an email *in English*.** The
Japanese queries translate to "how to start an English email", "how to end an English email",
"how to start an English business email", plus "how to write an email in english". This is
exactly the site's subject (professional English for non-native speakers); the askers just
happen to be Japanese. The same need exists in Spanish ("cómo empezar un correo en inglés",
"cómo cerrar un correo formal en inglés"), and that audience is ours. **This is the real signal.**

**Group C — email writing, subject lines, introducing yourself.** Generic in English, but each
has a non-native professional angle the site can own: subject lines and introductions are where
non-native professionals most often sound junior or stiff (the thesis of the existing post
`/en/blog/email-phrases-that-make-you-sound-junior/`).

**Group D — letter and email writing in German and French.** Not our language pair. Skip.

## What the site has today

- One adjacent post: `/en/blog/email-phrases-that-make-you-sound-junior/` (2026-01-18), plus
  `/en/blog/slack-english-write-like-a-pro/`. Neither is a reference page for openings,
  closings, subject lines or introductions.
- Google Search Console, last 90 days (2026-08-02 → 2026-10-31): **zero impressions** for any
  query containing `email`, `correo`, `introduc` or `presentar`. The site is not present in this
  territory at all.
- Bing counts **zero inbound links** to the domain (API `GetLinkCounts`, 2026-10-31).

## Why this matters for the current goal

The goal as of 2026-10-31 is domain authority and credibility, not corporate leads. Copilot
citations and reference-style pages serve that goal directly: a well-structured phrase reference
("50 ways to open a business email in English") is the kind of page other sites, teachers and
forums link to, and the kind of page an AI answer cites. Narrative blog posts rarely are.

## Content ideas, ranked

1. **ES pillar — "Cómo escribir un correo en inglés: saludos, apertura, cierre y asunto"**
   (Group B + C, Spanish audience). Copyable phrase tables by situation (first contact,
   follow-up, apology, request, bad news), formal vs. neutral register, the Spanish-speaker
   mistakes (literal "Dear Sir" stiffness, over-apologizing, "I remain attentive"). FAQ schema.
2. **EN twin — "How to start and end a business email in English (for non-native speakers)"**,
   linked to (1) by hreflang.
3. **"How to introduce yourself in English at work"** — meeting, video call, email, networking
   event; EN and ES. Ties into the existing executive-video-call and small-talk posts.
4. **Subject-line guide** — "Email subject lines in English that get answered", short, tabular.
5. Refresh `email-phrases-that-make-you-sound-junior` to link to (1)–(4) as a cluster hub.

Format notes for AI citation: one clear question per H2, a direct answer in the first sentence
under it, tables and lists that can be quoted whole, FAQPage schema, and a visible last-updated
date.

## Confidence

That a cluster like this earns Bing/Copilot citations within ~3 months: **about 40%**. The rest
is the zero-backlink domain (AI answers lean on trusted sources) and the fact that Bing does not
publish how it picks citations. That the pages earn Google impressions in the Spanish
"correo en inglés" space within 90 days: **about 65%** — the site already ranks for
Spanish-speaker English queries, and the competition there is thinner than in English.

## Re-check

Bing Webmaster Tools → AI Performance → Topic Portfolio, 3M view, around 2026-12-31: does a
second topic appear, and does the site appear as cited for any Group B/C query?
