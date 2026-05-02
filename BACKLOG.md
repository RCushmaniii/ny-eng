# Backlog — Open Loops & Parking Lot

This file captures **unfinished work, technical debt, content debt, and ideas in flight** that don't fit cleanly into a current PR or sprint. Append-only; resolved items move to the bottom under "Recently resolved" or get deleted.

This file is **complementary** to:
- `SEO-MARKETING-PLAN.md` — the active content roadmap (what's planned & shipped)
- `~/.claude/projects/.../memory/` — Claude's auto-memory (durable facts about Robert/the project)

`BACKLOG.md` is for *project-specific open loops* — things any future session (Claude or Robert) should be able to pick up without context.

---

## Content & Copy Debt

### 🚨 ES Bilingual Architecture Decision (HIGH PRIORITY — UNRESOLVED)

**Status:** Discovered 2026-05-02 during the Tier 1 TTS retrofit work. Needs Robert's strategic decision before remediation.

**The finding:** Most "teaching English" blog posts have ES siblings where the example English phrases were *translated to Spanish*, defeating the pedagogical purpose. Concrete examples discovered:

| EN slug | ES slug | Issue |
|---|---|---|
| `executive-video-call` | `presencia-ejecutiva-en-videollamadas` | All 7 example templates ("Thanks for joining…", "We met last week's target…", interruption phrases, PREP example, closing template) translated to Spanish in ES version |
| `mexico-us-workplace-communication-guide` | `guia-comunicacion-laboral-mexico-estados-unidos` | Comparison tables (American vs. Mexican phrasings) fully in Spanish — defeats the purpose of showing American phrasings to Spanish-speakers |
| `why-executive-english-accelerates-careers` | `por-que-ingles-ejecutivo-acelera-tu-carrera` | Four signals examples ("this is a disaster" → "this is impacting performance…") translated to Spanish |
| (Likely many others — full audit not yet done) | | |

**The pattern that works (where English IS preserved in ES):**
- `english-register-for-spanish-speakers` ↔ `registro-en-ingles-para-hispanohablantes` — English phrases preserved in ES because the article literally teaches English register mechanics
- `executive-reframing-drills` ↔ `ejercicios-reformulacion-ejecutiva` — English phrases preserved (14 TTS spans both langs)
- `daily-standup-english` ↔ `ingles-para-daily-standup-frases` — English phrases preserved (74 TTS spans both langs)

**Why this matters:** Robert's instinct on 2026-05-02: *"a lot of our readers could default to the Spanish version, and so obviously this is where hearing the English and listening to the English is going to be more important than the English version itself."* Without English phrases in ES, the audio layer can't work — and the ES reader can't actually learn the English they came for.

**Decision required:**
- **Option A — Bilingual rewrite for teaching-English posts:** Update affected ES posts so example phrases stay in English with Spanish prose around them (matches the register article pattern). Adds full TTS coverage in both languages. Larger lift but matches the brand's stated value.
- **Option B — Leave as-is, document scope:** Accept that some ES posts will never have audio, only mark posts that already have English-preserved content as TTS-eligible.
- **Option C — Hybrid per-article decision:** Each ES post gets evaluated individually; some keep Spanish translations, some get rewritten with English-preserved phrases.

**Affected posts (audit needed):** Run the parity audit (script in `BACKLOG.md` history or recreate with `node -e ...`) to enumerate the full list. Initial findings showed 5 EN posts with significant ES parity gaps (192+ missing TTS spans total): `business-english-mistakes-mexican-professionals` (65 gap), `us-interview-prep` (43), `english-nearshore-developers-skills` (35), `lead-meeting-english-phrases` (25), `how-to-negotiate-in-english-framework` (24).

---

### Tier 2 TTS retrofit candidates (lower-priority sweep)

Posts with English example phrases but no `speak-en` spans, where benefit is real but smaller than Tier 1:

- `5-practical-ways-to-boost-business-english` (priority ~11 in audit)
- `7-questions-corporate-english-vendor` (~10)
- `4-secrets-executives-use` (~9)
- `women-leaders-command-rooms-english` (~9)
- `corporate-english-transformation-case-study` (~8)

**When to do:** bundle into a future cleanup PR or pick up while editing one of these posts for another reason. Not standalone-PR-worthy.

---

### Hreflang map gaps in `astro.config.mjs`

The `blogTranslations` map in `astro.config.mjs` is the source of truth for cross-language hreflang generation. Posts with EN ↔ ES siblings on disk but missing from this map don't get linked translations in the sitemap.

**Known fix shipping this PR:** `mexico-us-workplace-communication-guide` ↔ `guia-comunicacion-laboral-mexico-estados-unidos` was missing — added.

**Action:** Periodically audit by running:
```bash
node -e "const fs=require('fs');const cfg=fs.readFileSync('astro.config.mjs','utf8');const en=fs.readdirSync('src/content/blog/en').filter(f=>f.match(/\\.mdx?\$/)).map(f=>f.replace(/\\.mdx?\$/,'')); for(const s of en){if(!cfg.includes('\"'+s+'\":'))console.log('Missing:',s);}"
```

---

## Technical Debt

### Astro glob-loader duplicate-id warning

Build emits `[WARN] [glob-loader] Duplicate id "en/<slug>" found in [path]` for some posts. Cosmetic only — pages build correctly. Likely an Astro 5.x quirk with the content collection glob pattern. Investigate when convenient or after Astro upgrade.

### MDX support for `speak-en` spans

`executive-communication-playbook.mdx` is the first MDX file we've added TTS spans to. MDX should handle inline HTML the same as Markdown, but the file uses a `FlipCardGrid` React component — verify that surrounding span markup doesn't get caught up in MDX/JSX parsing. If it works, document the pattern; if not, add to debt.

---

## Process Patterns to Apply Elsewhere

### Cross-language internal linking on related-post clusters

When publishing a sequel/related post, add forward-links from the prior posts in BOTH languages. Pattern established with `english-register-for-spanish-speakers` ← `why-executive-english-accelerates-careers` cross-link. Apply to future content clusters.

### "Bring your own image" naming convention

Hero images named to match the post slug (`<slug>.webp` in the language-specific images dir) so Astro asset pipeline can deduplicate identical EN/ES files into one served asset. Pattern proven on the register article (1962KB → 92KB, deduped). Future hero images should follow this.

---

## Marketing Ideas In Flight

### Schedule GSC performance check on the executive-comm content cluster

Robert greenlit (in principle) a `/schedule` agent in ~3 weeks (~2026-05-22) to pull GSC data on:
- `why-executive-english-accelerates-careers`
- `english-register-for-spanish-speakers`

Cluster ranks vs. either piece alone. **Action:** create the schedule when Robert is ready.

### Social content drafted but not posted

Drafts exist in `content-marketing/`:
- `why-executive-english-accelerates-careers-social.md`
- `english-register-for-spanish-speakers-social.md`

LinkedIn long-form, Twitter/X threads, Facebook posts, Spanish versions. Robert needs to copy/paste into platforms or we add platform integrations.

---

## Recently Resolved

*(items here are resolved/shipped — keep for ~30 days for reference, then prune)*

- **2026-05-02** — Tier 1 TTS retrofit (EN side): added `speak-en` spans to 5 high-value posts (`why-executive-english-accelerates-careers`, `executive-video-call`, `mexico-us-workplace-communication-guide`, `real-cost-weak-english-mexican-companies`, `executive-communication-playbook`). ES side blocked pending architecture decision (see above).
- **2026-05-01** — Register article TTS sweep (EN+ES) — all 10 phrases wrapped, audio working in production.
- **2026-05-01** — Register article published with custom split-image hero (EN+ES). Cross-linked to exec post.
- **2026-04-30** — Executive English Accelerates Careers article published (EN+ES).
