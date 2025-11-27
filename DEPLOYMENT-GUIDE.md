# 🚀 Deployment Guide: Hostinger + Netlify Hybrid Setup

## **Quick Start (15 Minutes)**

This guide walks you through deploying your hybrid architecture:

- **Static site** → Hostinger
- **API functions** → Netlify
- **Single domain** → No DNS changes needed

---

## **Prerequisites**

### **Accounts Needed**

- ✅ Hostinger account (existing)
- ✅ Netlify account (free tier)
- ✅ Supabase account (existing)
- ✅ Resend account (for email notifications)

### **Tools Needed**

- ✅ FTP client (FileZilla) OR Hostinger File Manager
- ✅ Node.js installed locally
- ✅ Git (optional, for version control)

---

## **Part 1: Deploy Static Site to Hostinger**

### **Step 1: Build the Site**

```powershell
# Navigate to project directory
cd C:\Users\Robert Cushman\.vscode\Projects\ny-eng

# Install dependencies (if needed)
npm install

# Build the static site
npm run build
```

**Expected output:**

```
✓ Completed in 7.5s
[@astrojs/sitemap] `sitemap-index.xml` created at `dist`
[build] Complete!
```

### **Step 2: Verify Build Output**

Check that `dist/` folder contains:

```
dist/
├── en/              # English pages
├── es/              # Spanish pages
├── _astro/          # CSS/JS bundles
├── images/          # Optimized images
├── sitemap-0.xml    # SEO sitemap
└── robots.txt       # Search directives
```

### **Step 3: Upload to Hostinger**

**Option A: Using Hostinger File Manager (Easiest)**

1. Log in to Hostinger control panel
2. Go to **Files** → **File Manager**
3. Navigate to `public_html/` (or your domain's root)
4. **Delete old files** (backup first!)
5. **Upload entire `dist/` folder contents**
6. Wait for upload to complete (~2-5 minutes)

**Option B: Using FTP (Faster for updates)**

1. Open FileZilla
2. Connect to Hostinger:
   - Host: `ftp.nyenglishteacher.com`
   - Username: Your Hostinger FTP username
   - Password: Your Hostinger FTP password
   - Port: 21
3. Navigate to `public_html/`
4. Upload `dist/` contents

### **Step 4: Add Apache Proxy Rules**

Create or edit `.htaccess` in `public_html/`:

```apache
# ============================================
# API Proxy to Netlify Functions
# ============================================
RewriteEngine On

# Proxy /api/* requests to Netlify
RewriteCond %{REQUEST_URI} ^/api/
RewriteRule ^api/(.*)$ https://ny-eng-api.netlify.app/.netlify/functions/$1 [P,L]

# ============================================
# Force HTTPS (Security)
# ============================================
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ============================================
# Force WWW (SEO Consistency)
# ============================================
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ============================================
# Redirect root to /en/
# ============================================
RewriteRule ^$ /en/ [R=301,L]

# ============================================
# Security Headers
# ============================================
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>

# ============================================
# Caching (Performance)
# ============================================
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>
```

### **Step 5: Test Static Site**

Visit these URLs to verify:

- ✅ `https://www.nyenglishteacher.com/` → Should redirect to `/en/`
- ✅ `https://www.nyenglishteacher.com/en/` → Homepage loads
- ✅ `https://www.nyenglishteacher.com/en/blog/` → Blog index loads
- ✅ `https://www.nyenglishteacher.com/es/` → Spanish homepage loads

---

## **Part 2: Deploy API Functions to Netlify**

### **Step 1: Install Netlify CLI**

```powershell
npm install -g netlify-cli
```

### **Step 2: Login to Netlify**

```powershell
netlify login
```

This opens a browser window. Authorize the CLI.

### **Step 3: Create Netlify Site**

```powershell
# In your project directory
cd C:\Users\Robert Cushman\.vscode\Projects\ny-eng

# Initialize Netlify site
netlify init
```

**Follow the prompts:**

1. **Create & configure a new site**
2. **Team:** Select your team
3. **Site name:** `ny-eng-api` (or your preferred name)
4. **Build command:** `npm run build`
5. **Publish directory:** `dist`

### **Step 4: Configure Environment Variables**

In Netlify dashboard (https://app.netlify.com):

1. Go to **Site settings** → **Environment variables**
2. Add these variables:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
RESEND_API_KEY=re_your-resend-key-here
NOTIFICATION_EMAIL=your-email@example.com
```

**Where to find these:**

- **Supabase:** Project Settings → API → URL & anon key
- **Resend:** Dashboard → API Keys

### **Step 5: Deploy to Netlify**

```powershell
# Deploy to production
netlify deploy --prod
```

**Expected output:**

```
✔ Deploy is live!
  Unique Deploy URL: https://6abc123--ny-eng-api.netlify.app
  Website URL:       https://ny-eng-api.netlify.app
```

### **Step 6: Test API Functions**

Test the quiz submission endpoint:

```powershell
# Using curl (PowerShell)
curl -X POST https://ny-eng-api.netlify.app/.netlify/functions/quiz-submit `
  -H "Content-Type: application/json" `
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "quizType": "it-services",
    "language": "en",
    "answers": {"q1": 0, "q2": 1, "q3": 2}
  }'
```

**Expected response:**

```json
{
  "success": true,
  "submission_id": "abc-123",
  "score": 45,
  "score_tier": "developing"
}
```

---

## **Part 3: Verify End-to-End Integration**

### **Test the Full Flow**

1. **Visit your site:** `https://www.nyenglishteacher.com/en/quiz/it-services/`
2. **Start the quiz**
3. **Answer questions**
4. **Submit with email**
5. **Check Supabase:** Verify submission appears in `quiz_submissions` table
6. **Check email:** Verify notification received (if configured)

### **Check Proxy is Working**

Open browser DevTools (F12) → Network tab:

1. Submit quiz
2. Look for request to `/api/quiz/submit`
3. **Status should be 200**
4. **Response should have `success: true`**

**If you see the Netlify URL in the browser, the proxy is NOT working.**
**If you only see `/api/quiz/submit`, the proxy IS working!** ✅

---

## **Part 4: Update Workflow (Future Deployments)**

### **When You Update Content**

```powershell
# 1. Make changes to Astro files
# 2. Build
npm run build

# 3. Upload dist/ to Hostinger (FTP or File Manager)
# Done!
```

### **When You Update API Functions**

```powershell
# 1. Make changes to src/pages/api/*.ts
# 2. Deploy to Netlify
netlify deploy --prod

# Done!
```

### **When You Update Both**

```powershell
# 1. Build
npm run build

# 2. Upload dist/ to Hostinger
# 3. Deploy to Netlify
netlify deploy --prod
```

---

## **Troubleshooting**

### **Problem: Quiz submissions fail**

**Check:**

1. ✅ Netlify environment variables are set correctly
2. ✅ Supabase URL and key are valid
3. ✅ `.htaccess` proxy rule is in place
4. ✅ Netlify function deployed successfully

**Debug:**

```powershell
# Check Netlify function logs
netlify functions:log quiz-submit
```

### **Problem: 404 on API routes**

**Check:**

1. ✅ `.htaccess` has `RewriteEngine On`
2. ✅ Apache `mod_rewrite` is enabled (ask Hostinger support)
3. ✅ Netlify site URL is correct in proxy rule

**Test proxy directly:**

```powershell
curl -I https://www.nyenglishteacher.com/api/quiz/submit
```

Should return `200 OK` or `405 Method Not Allowed` (not 404).

### **Problem: CORS errors**

**Fix:** Add CORS headers to Netlify function:

```javascript
return {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "https://www.nyenglishteacher.com",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  },
  body: JSON.stringify({ success: true }),
};
```

### **Problem: Slow page loads**

**Check:**

1. ✅ Images are optimized (WebP format)
2. ✅ Caching headers in `.htaccess`
3. ✅ Hostinger CDN is enabled

**Enable Hostinger CDN:**

1. Go to Hostinger control panel
2. **Websites** → **Manage** → **Performance**
3. Enable **Cloudflare CDN**

---

## **Performance Optimization**

### **Enable Gzip Compression**

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### **Preload Critical Resources**

Add to HTML `<head>`:

```html
<link rel="preload" href="/_astro/main.css" as="style" />
<link rel="preload" href="/_astro/main.js" as="script" />
```

### **Lazy Load Images**

Already implemented via Astro's `<Image>` component with `loading="lazy"`.

---

## **Security Checklist**

Before going live:

- [ ] HTTPS enabled (force redirect in `.htaccess`)
- [ ] Environment variables secured (Netlify dashboard only)
- [ ] Admin dashboard protected (add authentication)
- [ ] Supabase RLS policies enabled
- [ ] Rate limiting configured (Netlify auto-limits)
- [ ] CORS headers restrictive (only your domain)
- [ ] `.env` files in `.gitignore`
- [ ] Security headers in `.htaccess`

---

## **Monitoring Setup**

### **Netlify Analytics**

1. Go to Netlify dashboard
2. **Analytics** → Enable (free tier available)
3. Track function invocations, errors, response times

### **Supabase Monitoring**

1. Go to Supabase dashboard
2. **Database** → **Logs**
3. Monitor query performance, errors

### **Google Search Console**

1. Add site: `https://www.nyenglishteacher.com`
2. Submit sitemap: `https://www.nyenglishteacher.com/sitemap-0.xml`
3. Monitor indexing status, errors

---

## **Backup Strategy**

### **Code Backup**

```powershell
# Push to GitHub (recommended)
git add .
git commit -m "Production deployment $(Get-Date -Format 'yyyy-MM-dd')"
git push origin main
```

### **Database Backup**

Supabase auto-backups daily (free tier: 7 days retention).

**Manual backup:**

1. Supabase dashboard → **Database** → **Backups**
2. **Download backup**

### **Static Site Backup**

Download `public_html/` from Hostinger monthly via FTP.

---

## **Cost Breakdown**

| Service       | Plan           | Cost/Month       |
| ------------- | -------------- | ---------------- |
| **Hostinger** | Shared hosting | $3-10            |
| **Netlify**   | Free tier      | $0               |
| **Supabase**  | Free tier      | $0               |
| **Resend**    | Free tier      | $0               |
| **Domain**    | Renewal        | ~$15/year        |
| **TOTAL**     |                | **~$5-12/month** |

**Scalability:**

- Netlify free tier: 100GB bandwidth, 125k function invocations
- Supabase free tier: 500MB database, 2GB bandwidth
- Hostinger: Unlimited bandwidth (fair use)

---

## **Support Resources**

### **Hostinger**

- Support: 24/7 live chat
- Docs: https://support.hostinger.com

### **Netlify**

- Support: Community forum (free tier)
- Docs: https://docs.netlify.com

### **Supabase**

- Support: Discord community
- Docs: https://supabase.com/docs

---

## **Next Steps**

After successful deployment:

1. ✅ **Test all quiz types** (IT Services, Executives, etc.)
2. ✅ **Submit test leads** to verify Supabase integration
3. ✅ **Check email notifications** via Resend
4. ✅ **Run Lighthouse audit** (target: 95+ score)
5. ✅ **Submit sitemap to Google Search Console**
6. ✅ **Monitor for 48 hours** (check Netlify logs)
7. ✅ **Add authentication to admin dashboard**

---

_Last updated: November 27, 2025_
_Deployment architecture: Hybrid (Hostinger + Netlify)_
