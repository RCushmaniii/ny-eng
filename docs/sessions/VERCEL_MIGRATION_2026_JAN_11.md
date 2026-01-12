# Vercel Migration Plan
**Date:** January 11, 2026
**Project:** ny-eng (NY English Teacher)
**Current Host:** Hostinger (static)
**Target Host:** Vercel (staging first, then production)

---

## 1. Compatibility Assessment

### Status: FULLY COMPATIBLE

The application is **fully compatible** with Vercel. Key findings:

| Component | Compatibility | Notes |
|-----------|---------------|-------|
| Astro 5.5.3 | Excellent | Native Vercel support |
| Static Output | Excellent | `output: "static"` - no serverless functions needed |
| React 19 | Excellent | Standard React support |
| Sharp (images) | Excellent | Vercel supports Sharp natively |
| Tailwind CSS | Excellent | Build-time only |
| Sitemap | Excellent | Generated at build time |

### No Serverless Issues Found

- **No API routes**: The `/src/pages/api/` folder is empty
- **No server-side rendering**: Pure static build
- **No long-running processes**: All processing happens at build time
- **No file system writes**: Static output only
- **No in-memory sessions**: Client-side sessionStorage only (quiz data)

### External Dependencies (Unchanged)

| Service | Status | Notes |
|---------|--------|-------|
| Cloudflare Worker | Stays as-is | Booking API at separate domain |
| Formspree | Stays as-is | Contact form submissions |
| Google Calendar | Via Worker | Handled by Cloudflare Worker |
| Resend Email | Build-time only | Used in prebuild scripts |

### MySQL Database Note

The codebase contains MySQL connection code (`src/lib/mysql.ts`, `src/lib/db.ts`) but it is **not actively imported or used** by any pages. This was likely prepared for future quiz data persistence but is currently unused. No database configuration is required for Vercel deployment.

---

## 2. Environment Variables for Vercel

### Required Variables

Add these in Vercel Dashboard > Project Settings > Environment Variables:

```
# Site Configuration
SITE_URL=https://www.nyenglishteacher.com
ASTRO_SITE=https://www.nyenglishteacher.com

# For staging, use:
# SITE_URL=https://ny-eng-staging.vercel.app
# ASTRO_SITE=https://ny-eng-staging.vercel.app
```

### Optional Variables (If Features Are Used)

These are only needed if the corresponding features are enabled:

```
# Email (Resend) - if prebuild emails are enabled
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=hello@nyenglishteacher.com

# Database (MySQL) - NOT currently used
# MYSQL_HOST=
# MYSQL_USER=
# MYSQL_PASSWORD=
# MYSQL_DATABASE=
# MYSQL_PORT=3306

# Google Calendar - NOT used (handled by Cloudflare Worker)
# GOOGLE_CLIENT_ID=
# GOOGLE_CLIENT_SECRET=
# GOOGLE_REFRESH_TOKEN=
# GOOGLE_CALENDAR_ID=
```

### Environment Configuration

| Environment | SITE_URL | Purpose |
|-------------|----------|---------|
| Preview | `https://ny-eng-git-*.vercel.app` | PR previews |
| Staging | `https://ny-eng-staging.vercel.app` | Pre-production testing |
| Production | `https://www.nyenglishteacher.com` | Live site |

---

## 3. Vercel Configuration

Created `vercel.json` with:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework**: `astro`
- **Redirects**: All 34 redirects from `astro.config.mjs` converted
- **Headers**: Cache control for static assets, security headers

---

## 4. Deployment Steps

### Step 1: Connect Repository

1. Go to [vercel.com](https://vercel.com)
2. Import the GitHub repository `RCushmaniii/ny-eng`
3. Select Framework: **Astro**
4. Configure environment variables (see Section 2)

### Step 2: Initial Deploy (Staging)

1. Let Vercel build the `main` branch
2. Verify the deployment at `*.vercel.app`
3. Test all critical paths (see Section 6)

### Step 3: Custom Domain Setup (Later)

When ready to switch production:

1. Add custom domain in Vercel Dashboard
2. Configure DNS at registrar
3. Wait for SSL provisioning
4. Verify hreflang and canonical URLs

---

## 5. Cutover Plan

### Pre-Cutover Checklist

- [ ] Staging site fully tested
- [ ] All environment variables configured
- [ ] DNS TTL lowered to 300 seconds (5 min) 24 hours before
- [ ] Cloudflare Worker updated with new CORS origins (if needed)
- [ ] Team notified of cutover window

### Cutover Sequence

1. **T-1 hour**: Final sync - ensure latest code is deployed
2. **T-0**: Update DNS records to point to Vercel
3. **T+5 min**: Verify propagation with `dig` or `nslookup`
4. **T+15 min**: Test all critical flows
5. **T+1 hour**: Monitor for issues, check analytics

### Rollback Plan

If critical issues are discovered:

1. **DNS Rollback** (fastest): Point DNS back to Hostinger
   - Update A/CNAME records
   - Propagation: 5-30 minutes (depends on TTL)

2. **Hostinger Remains Live**: Keep Hostinger deployment intact for 7 days post-cutover as a warm standby

3. **Emergency Contact**: Vercel support (if DNS issues)

---

## 6. Post-Migration Checklist

### Critical Path Testing

- [ ] **Homepage** loads correctly (`/en/`, `/es/`)
- [ ] **Navigation** works (header, footer links)
- [ ] **Blog posts** render with correct content
- [ ] **Service pages** display properly
- [ ] **Quiz flow** works end-to-end:
  - [ ] Start quiz
  - [ ] Answer questions
  - [ ] View report
- [ ] **Contact form** submits to Formspree
- [ ] **Booking widget** connects to Cloudflare Worker
- [ ] **Chatbot** loads and responds
- [ ] **PDF downloads** work (free resources)
- [ ] **Images** load (including optimized versions)

### SEO Verification

- [ ] **Sitemap** accessible at `/sitemap-index.xml`
- [ ] **Robots.txt** correct
- [ ] **Canonical URLs** use production domain
- [ ] **Hreflang tags** present on all pages
- [ ] **Redirects** working (test 5-10 sample redirects)

### Performance Checks

- [ ] Lighthouse score comparable to Hostinger
- [ ] Time to First Byte (TTFB) acceptable
- [ ] No console errors
- [ ] Images serving from Vercel CDN

### Analytics & Monitoring

- [ ] Google Analytics tracking
- [ ] Google Search Console updated (if domain changes)
- [ ] Vercel Analytics enabled (optional)

---

## 7. Benefits of Vercel Migration

| Feature | Hostinger | Vercel |
|---------|-----------|--------|
| Automatic deployments | Manual FTP | Git push = deploy |
| Preview deployments | None | Every PR gets preview URL |
| Rollback | Manual | One-click in dashboard |
| Edge CDN | Limited | Global edge network |
| Analytics | External only | Built-in (optional) |
| Build caching | None | Incremental builds |

---

## 8. Known Limitations

1. **No Server-Side Rendering**: The site uses `output: "static"`. If SSR is ever needed, the Astro config and Vercel adapter would need updating.

2. **MySQL Unused**: The database code exists but is dormant. If quiz persistence is needed in the future, consider Vercel Postgres or PlanetScale instead of MySQL.

3. **Cloudflare Worker Stays Separate**: The booking API runs on Cloudflare Workers and is not part of this migration.

---

## Appendix: File Changes Made

| File | Change |
|------|--------|
| `vercel.json` | Created - Vercel configuration |
| `docs/sessions/VERCEL_MIGRATION_2026_JAN_11.md` | Created - This document |

---

**Prepared by:** Claude Code
**Status:** Ready for Vercel deployment
