# Pre-Deployment Audit System

## Quick Start

```bash
npm run pre-deploy
```

This command will:

1. Build the site (`npm run build`)
2. Run all implemented audit checks
3. Display a comprehensive report with visual indicators

---

## Visual Indicators Guide

### Status Icons

- ✅ **PASS** - Check passed, no issues found
- ❌ **FAIL** - Check failed, issues must be fixed
- ⚪ **Not Implemented** - Check is planned but not yet built

### Report Sections

- 🚀 **Header** - Shows audit is starting
- 📊 **Individual Audits** - Each audit runs with its own output
- 📋 **Final Report** - Summary of all checks
- 📈 **Score** - Shows X/Y checks passed
- 🛑 **Action Required** - Appears if any check fails

---

## Example Output

### ✅ All Checks Passing

```
================================================================================
🚀 PRE-DEPLOYMENT AUDIT
================================================================================

Running comprehensive checks before deployment...

📊 Running Technical SEO Audit...
🔍 Starting Technical SEO Validation...

📋 Loaded 58 critical URLs

================================================================================
📊 TECHNICAL SEO VALIDATION REPORT
================================================================================
✅ URLs Checked: 58
✅ Passed: 58
⚠️  Warnings: 0
❌ Errors: 0

================================================================================
✅ PASS - Site is ready for deployment


================================================================================
📋 FINAL AUDIT REPORT
================================================================================

⏱️  Duration: 0.45s

📊 AUDIT RESULTS:

  ✅ SEO: PASS
  ⚪ CRITICALURLS: Not Implemented
  ⚪ LINKS: Not Implemented
  ⚪ SITEMAP: Not Implemented

📈 SCORE: 1/1 checks passed

✅ ALL CHECKS PASSED
🚀 Site is ready for deployment!

================================================================================
```

### ❌ Checks Failing

```
================================================================================
📊 TECHNICAL SEO VALIDATION REPORT
================================================================================
✅ URLs Checked: 58
✅ Passed: 55
⚠️  Warnings: 3
❌ Errors: 2

❌ CRITICAL ERRORS:

  /en/blog/example-post/
    └─ Missing meta description

  /es/services/example/
    └─ H1 tag too long (85 chars, max 70)

⚠️  ALL 3 WARNINGS:

  /en/about/
    └─ Description too short (95 chars, min 120)

  /es/blog/otro-post/
    └─ Title too long (65 chars, max 60)

  /en/services/coaching/
    └─ Description too long (175 chars, max 160)

================================================================================
❌ FAIL - Fix errors before deploying


================================================================================
📋 FINAL AUDIT REPORT
================================================================================

⏱️  Duration: 0.52s

📊 AUDIT RESULTS:

  ❌ SEO: FAIL
  ⚪ CRITICALURLS: Not Implemented
  ⚪ LINKS: Not Implemented
  ⚪ SITEMAP: Not Implemented

📈 SCORE: 0/1 checks passed

❌ SOME CHECKS FAILED
🛑 Fix issues before deploying

================================================================================
```

---

## Implemented Audits

### ✅ SEO Validator (`audits/seo-validator.js`)

**Status:** Fully Implemented

**Checks:**

- ✅ Meta title (30-60 chars)
- ✅ Meta description (120-160 chars)
- ✅ H1 tag (20-70 chars, exactly one per page)
- ✅ Canonical URL (present and valid)
- ✅ Hreflang tags (reciprocal and valid)

**URLs Checked:** 58 critical pages from `CRITICAL-URLS.txt`

**Exit Codes:**

- `0` = All checks passed
- `1` = One or more errors found

---

## Planned Audits

### ⚪ Critical URLs Validator

**Status:** Not Implemented

**Will Check:**

- All 58 URLs return 200 status
- All URLs are present in sitemap
- No broken redirects

### ⚪ Internal Links Validator

**Status:** Not Implemented

**Will Check:**

- No broken internal links
- All links return 200 or valid redirect
- No orphan pages

### ⚪ Sitemap Validator

**Status:** Not Implemented

**Will Check:**

- Sitemap is valid XML
- All URLs are canonical
- No 404s or redirects in sitemap
- Proper hreflang in sitemap

---

## Understanding the Score

The score shows: **X/Y checks passed**

- **X** = Number of checks that passed
- **Y** = Number of implemented checks (excludes "Not Implemented")

**Examples:**

- `1/1 checks passed` = 100% (1 check implemented, 1 passed)
- `3/4 checks passed` = 75% (4 checks implemented, 3 passed)
- `0/1 checks passed` = 0% (1 check implemented, 0 passed)

**Note:** Unimplemented checks (⚪) don't count toward the score.

---

## Exit Codes

The script returns:

- **Exit 0** = All implemented checks passed ✅
- **Exit 1** = One or more checks failed ❌

This allows you to use it in CI/CD pipelines:

```bash
npm run pre-deploy && npm run deploy
```

---

## File Structure

```
scripts/pre-deploy/
├── audit-manager.js          # Main orchestrator
├── CRITICAL-URLS.txt         # 58 URLs to validate
├── audits/
│   └── seo-validator.js      # SEO checks (implemented)
└── README.md                 # This file
```

---

## Adding New Audits

To add a new audit:

1. Create audit file in `audits/` folder
2. Export a class with a `run()` method
3. Return exit code (0 = pass, 1 = fail)
4. Add to `audit-manager.js`:

```javascript
async runYourAudit() {
  console.log('📊 Running Your Audit...');
  try {
    execSync('node scripts/pre-deploy/audits/your-audit.js', {
      stdio: 'inherit',
      cwd: path.resolve(__dirname, '../..')
    });
    this.results.yourAudit = 'PASS';
    return true;
  } catch (error) {
    this.results.yourAudit = 'FAIL';
    return false;
  }
}
```

5. Call it in the `run()` method:

```javascript
async run() {
  this.printHeader();
  await this.runSeoAudit();
  await this.runYourAudit();  // Add here
  return this.generateFinalReport();
}
```

---

## Troubleshooting

### Issue: Script fails with "Cannot find module"

**Solution:** Run from project root: `npm run pre-deploy`

### Issue: All checks show "Not Implemented"

**Solution:** This is expected. Only SEO audit is currently implemented.

### Issue: Build fails before audit runs

**Solution:** Fix build errors first. The audit requires a successful build in `dist/` folder.

### Issue: SEO check fails but I can't see why

**Solution:** Look for the detailed error/warning output above the final report. Each issue shows the URL and specific problem.

---

## Best Practices

1. **Run before every deployment** to catch issues early
2. **Fix errors immediately** - don't deploy with failing checks
3. **Review warnings** - they won't block deployment but should be addressed
4. **Keep CRITICAL-URLS.txt updated** when adding important pages
5. **Monitor the score trend** - aim for 100% on all implemented checks

---

## Current Status

**Implemented:** 1/4 audits (25%)
**Score:** 1/1 checks passed (100%)
**Ready for Production:** ✅ Yes

---

**Last Updated:** November 29, 2025
