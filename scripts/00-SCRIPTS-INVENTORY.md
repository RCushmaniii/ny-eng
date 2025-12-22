# Scripts Inventory & Analysis

**Last Updated:** 2024-12-13

This document catalogs all scripts in the `/scripts` folder, their purpose, and cleanup status.

## 🎉 Recent Cleanup (2024-12-13)

- ✅ Deleted `validate-hreflang-old.mjs` (obsolete)
- ✅ Moved one-time migration scripts to `/archive/migrations/`
- ✅ Moved root-level test scripts to `/archive/`
- ✅ Organized `/docs/` into subdirectories (seo, deployment, features, architecture)

---

## 📁 Current Structure

```
scripts/
├── pre-deploy/              # ✅ ACTIVE - Pre-deployment audits
├── seo/                     # ⚠️  REVIEW - SEO validation scripts
├── utils/                   # ✅ ACTIVE - Shared utilities
├── patches/                 # ⚠️  REVIEW - One-time patches
└── [root scripts]           # ⚠️  REVIEW - Various scripts

archive/
├── migrations/              # ✅ ARCHIVED - One-time migration scripts
└── [other archived scripts]
```

---

## ✅ ACTIVE & ESSENTIAL

### Pre-Deployment System

**Location:** `/pre-deploy/`

| File                      | Purpose                                     | Status                |
| ------------------------- | ------------------------------------------- | --------------------- |
| `audit-manager.js`        | Main orchestrator for pre-deployment checks | ✅ KEEP - Core system |
| `audits/seo-validator.js` | Technical SEO validation (76 URLs)          | ✅ KEEP - Core system |
| `CRITICAL-URLS.txt`       | Baseline truth for critical URLs            | ✅ KEEP - Core data   |

**Recommendation:** This is your new organized system. Keep all.

---

### Utility Scripts

**Location:** `/utils/`

| File                | Purpose                               | Status                      |
| ------------------- | ------------------------------------- | --------------------------- |
| `report-writer.mjs` | Shared utility for generating reports | ✅ KEEP - Shared dependency |

---

### Google Calendar Integration

**Location:** `/` (root)

| File                           | Purpose                              | Status                   |
| ------------------------------ | ------------------------------------ | ------------------------ |
| `test-calendar-api.mjs`        | Test Google Calendar API integration | ✅ KEEP - Active feature |
| `get-google-refresh-token.mjs` | Generate OAuth refresh tokens        | ✅ KEEP - Setup utility  |

**Note:** `generate-refresh-token.js` is not present in the repo. Keep `get-google-refresh-token.mjs` as the single source for OAuth token generation.

---

### Environment Testing

**Location:** `/` (root)

| File               | Purpose                     | Status                         |
| ------------------ | --------------------------- | ------------------------------ |
| `test-env.mjs`     | Test environment variables  | ✅ KEEP - Useful for debugging |
| `test-env-raw.mjs` | Test raw environment access | ⚠️ OPTIONAL - Can remove       |

**Note:** `test-env.mjs` now supports `--raw` mode (values redacted), and `npm run test:env:raw` points to `test-env.mjs --raw`. `test-env-raw.mjs` can be deleted after confirmation.

---

### SEO Scripts

**Location:** `/seo/`

These scripts appear to overlap with the new pre-deployment system. Need clarification on which are still active.

| File                       | Purpose                | Status                                  |
| -------------------------- | ---------------------- | --------------------------------------- |
| `hreflang-validator.mjs`   | Validate hreflang tags | ⚠️ REVIEW - Used in package.json        |
| `seo-audit.mjs`            | General SEO audit      | ⚠️ REVIEW - May overlap with new system |
| `seo-truncation-audit.mjs` | Check meta tag lengths | ⚠️ REVIEW - Now in seo-validator.js     |
| `fixed-sitemap-audit.mjs`  | Sitemap validation     | ⚠️ REVIEW - Purpose unclear             |

**Recommendation:**

- Keep `hreflang-validator.mjs` if it's still referenced in package.json
- Consider consolidating others into the new pre-deploy system

---

## ⚠️ REVIEW NEEDED - Validation Scripts

**Location:** `/` (root)

These scripts appear to be older validation tools. Many may be redundant with the new pre-deploy system.

| File                              | Purpose                        | Status                               |
| --------------------------------- | ------------------------------ | ------------------------------------ |
| `validate-404s.mjs`               | Check for 404 errors           | ⚠️ REVIEW - Used in package.json     |
| `validate-canonical-urls.mjs`     | Validate canonical tags        | ⚠️ REVIEW - Used in package.json     |
| `validate-hreflang-redirects.mjs` | Check hreflang redirect chains | ⚠️ REVIEW - Used in package.json     |
| `validate-internal-links.mjs`     | Check internal links           | ⚠️ REVIEW - Used in package.json     |
| `validate-performance.mjs`        | Performance checks             | ⚠️ REVIEW - Used in package.json     |
| `validate-url-structure.mjs`      | URL structure validation       | ⚠️ REVIEW - Used in package.json     |
| `validate-all.mjs`                | Run all validations            | ⚠️ REVIEW - May be redundant         |
| `validate-bilingual-system.mjs`   | Bilingual i18n checks          | ⚠️ REVIEW - Purpose unclear          |
| `validate-hreflang.mjs`           | Hreflang validation            | ⚠️ REVIEW - Duplicate?               |
| `validate-hreflang-old.mjs`       | Old hreflang validator         | 🗑️ DELETE - Clearly obsolete         |
| `validate-html-lang.mjs`          | Check HTML lang attributes     | ⚠️ REVIEW - Now in seo-validator.js? |
| `validate-url-pattern-audit.mjs`  | URL pattern checks             | ⚠️ REVIEW - Purpose unclear          |

**Recommendation:**

- Keep scripts referenced in `package.json` for now
- Mark `validate-hreflang-old.mjs` for deletion (clearly obsolete)
- Consider consolidating others into pre-deploy system over time

---

## ⚠️ REVIEW NEEDED - Utility Scripts

**Location:** `/` (root)

| File                             | Purpose                        | Status                           |
| -------------------------------- | ------------------------------ | -------------------------------- |
| `fix-links.mjs`                  | Fix broken internal links      | ⚠️ REVIEW - Used in package.json |
| `flatten-files.mjs`              | Flatten file structure         | ⚠️ REVIEW - One-time use?        |
| `generate-project-structure.mjs` | Generate project tree          | ⚠️ REVIEW - Documentation tool   |
| `project-mapper.mjs`             | Map project structure          | ⚠️ REVIEW - May be duplicate     |
| `report-structure.mjs`           | Generate structure reports     | ⚠️ REVIEW - May be duplicate     |
| `export-quiz-files.ps1`          | Export quiz files (PowerShell) | ⚠️ REVIEW - One-time use?        |

**Questions:**

- Are `generate-project-structure.mjs`, `project-mapper.mjs`, and `report-structure.mjs` duplicates?
- Is `export-quiz-files.ps1` still needed or was it a one-time migration?
- Is `flatten-files.mjs` still needed?

---

## 📦 ARCHIVED SCRIPTS

These scripts have been moved to `/archive/migrations/` (one-time use):

| File                       | Purpose                 | Status      |
| -------------------------- | ----------------------- | ----------- |
| `check-section-count.py`   | JSON audit helper       | ✅ ARCHIVED |
| File                       | Purpose                 | Status      |
| -------------------------- | ----------------------- | ----------- |
| `delete-duplicates.ps1`    | Delete duplicate routes | ✅ ARCHIVED |
| `test-quiz-submission.ps1` | Test quiz API           | ✅ ARCHIVED |

---

## 📊 Summary Statistics

**Before Cleanup:**

- Total Scripts: 32 files
- Active & Essential: 7 files (22%)
- Needs Review: 24 files (75%)
- Marked for Deletion: 1 file (3%)

**After Cleanup (2024-12-13):**

- **Total Scripts:** 23 files (9 removed/archived)
- **Active & Essential:** 7 files (30%)
- **Needs Review:** 16 files (70%)
- **Archived:** 10 files

---

## 🎯 Recommended Actions

### ✅ Completed (2024-12-13)

1. ✅ Deleted `validate-hreflang-old.mjs` (obsolete)
2. ✅ Archived one-time migration scripts to `/archive/migrations/`
3. ✅ Moved root-level test scripts to `/archive/`
4. ✅ Organized `/docs/` into subdirectories

### Next Steps (After Review)

1. ⚠️ Consolidate duplicate environment testers (`test-env.mjs` vs `test-env-raw.mjs`)
2. ⚠️ Consolidate duplicate project structure generators
3. ⚠️ Review if Google OAuth scripts are duplicates

### Long Term (Gradual Migration)

5. ⚠️ Migrate validation scripts from root into `/pre-deploy/audits/`
6. ⚠️ Consolidate SEO scripts into unified pre-deploy system
7. ⚠️ Move all utilities into `/utils/` folder

---

## ❓ Questions for User

1. **Google OAuth:** Confirm we should keep `get-google-refresh-token.mjs` as the only OAuth token generator script.
2. **Environment Testing:** Can we consolidate `test-env.mjs` and `test-env-raw.mjs`?
3. **Project Structure:** Are `generate-project-structure.mjs`, `project-mapper.mjs`, and `report-structure.mjs` all needed?
4. **One-Time Scripts:** Can we archive `export-quiz-files.ps1` and `flatten-files.mjs`?
5. **Package.json Scripts:** Should we keep all scripts referenced in package.json or migrate them to the new pre-deploy system?

---

## 📝 Notes

- Many scripts in `/seo/` and root appear to be from earlier iterations
- The new `/pre-deploy/` system is the future direction
- Consider gradual migration rather than mass deletion
- Keep scripts referenced in `package.json` until replacements are tested
