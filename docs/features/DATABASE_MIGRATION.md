> **HISTORICAL — SUPERSEDED.** This describes the Dec 2025 Supabase -> MySQL move.
> That MySQL database is no longer used. The site now runs on **Neon serverless
> PostgreSQL** (`src/lib/neon.ts`, `src/lib/db.ts`, env var `POSTGRES_URL`).
> Connection values below are redacted; they were exposed in this public repo
> from 2025-12-21 and must be treated as burned.

# Database Migration: Supabase → MySQL

**Date:** December 2, 2025  
**Status:** ✅ Complete

## Overview

Migrated quiz database from Supabase (PostgreSQL) to MySQL on Hostinger to free up Supabase slot and consolidate hosting.

## Changes Made

### 1. Database Schema

- Created MySQL schema matching Supabase structure
- 2 tables: `quiz_submissions` (42 columns), `quiz_answers` (9 columns)
- All indexes and foreign keys preserved
- Location: `scripts/mysql-schema.sql`

### 2. Database Client

- **Removed:** `src/lib/supabase.ts` (Supabase client)
- **Added:** `src/lib/mysql.ts` (MySQL connection pool)
- **Added:** `src/lib/db.ts` (Database functions with same interface)

### 3. API Endpoints Updated

- `src/pages/api/quiz/submit.ts` - Quiz submission
- `src/pages/api/admin/leads.ts` - Admin dashboard

### 4. Dependencies

- **Removed:** `@supabase/supabase-js`
- **Added:** `mysql2`

## Environment Variables

### Required in `.env` and Netlify:

```env
MYSQL_HOST=__REDACTED__
MYSQL_DATABASE=__REDACTED__
MYSQL_USER=__REDACTED__
MYSQL_PASSWORD=__REDACTED__
MYSQL_PORT=3306
```

### Deprecated (can be removed):

```env
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_PROJECT_ID
SUPABASE_SECRET
```

## Database Structure

### quiz_submissions

- Primary key: `id` (VARCHAR(36), UUID)
- Indexes on: email, created_at, quiz_type, status, total_score, score_tier
- Stores: lead info, quiz metadata, scores, UTM tracking, behavioral data

### quiz_answers

- Primary key: `id` (VARCHAR(36), UUID)
- Foreign key: `submission_id` → `quiz_submissions.id` (CASCADE delete)
- Indexes on: submission_id, category
- Stores: individual question answers with points and categories

## Testing

✅ Connection test successful: `http://localhost:4321/api/test-db`  
✅ Both tables accessible  
✅ Foreign key constraints working

## Deployment Notes

1. MySQL credentials already added to Netlify environment variables
2. No data migration needed (starting fresh)
3. All API endpoints maintain backward compatibility
4. Same function signatures as Supabase version

## Rollback Plan

If issues arise, revert to Supabase by:

1. Run `pnpm add @supabase/supabase-js`
2. Restore `src/lib/supabase.ts` from git history
3. Update API imports back to `@/lib/supabase`
4. Re-add Supabase env vars to Netlify

## Performance Notes

- MySQL connection pooling (max 10 connections)
- JSON fields for complex data (category_scores, primary_gap, etc.)
- Indexes optimized for common queries (email lookup, date sorting, filtering)
