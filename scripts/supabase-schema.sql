-- Supabase Schema for NY English Quiz Database
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)

-- ============================================================================
-- quiz_submissions table
-- ============================================================================
CREATE TABLE IF NOT EXISTS quiz_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Lead information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,

  -- Quiz metadata
  quiz_type TEXT NOT NULL,
  quiz_version TEXT NOT NULL DEFAULT 'v1.0',
  language TEXT NOT NULL DEFAULT 'en',

  -- Scoring data
  total_score INTEGER NOT NULL,
  raw_score INTEGER,
  score_tier TEXT NOT NULL,
  category_scores JSONB,
  primary_gap TEXT,
  secondary_gap TEXT,

  -- Behavioral tracking
  completion_time_ms INTEGER,
  device_type TEXT,
  browser TEXT,
  referrer TEXT,

  -- Marketing attribution
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,

  -- User actions
  viewed_report BOOLEAN DEFAULT TRUE,
  clicked_cta BOOLEAN DEFAULT FALSE,
  booked_consultation BOOLEAN DEFAULT FALSE,
  booking_date TIMESTAMPTZ,

  -- Privacy/consent
  gdpr_consent BOOLEAN DEFAULT FALSE,
  marketing_opt_in BOOLEAN DEFAULT FALSE,

  -- Admin management
  status TEXT NOT NULL DEFAULT 'new',
  admin_notes TEXT,

  -- Full answers snapshot (for backup/analysis)
  answers JSONB,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for quiz_submissions
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_email ON quiz_submissions(email);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_created_at ON quiz_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_quiz_type ON quiz_submissions(quiz_type);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_status ON quiz_submissions(status);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_score ON quiz_submissions(total_score);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_tier ON quiz_submissions(score_tier);

-- ============================================================================
-- quiz_answers table
-- ============================================================================
CREATE TABLE IF NOT EXISTS quiz_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID NOT NULL REFERENCES quiz_submissions(id) ON DELETE CASCADE,

  -- Question data
  question_number INTEGER NOT NULL,
  question_text TEXT NOT NULL,

  -- Answer data
  answer_text TEXT NOT NULL,
  answer_index INTEGER NOT NULL,
  points INTEGER NOT NULL,
  category TEXT,

  -- Timestamp
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for quiz_answers
CREATE INDEX IF NOT EXISTS idx_quiz_answers_submission_id ON quiz_answers(submission_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_category ON quiz_answers(category);

-- ============================================================================
-- Row Level Security (RLS) Policies
-- ============================================================================
-- Enable RLS on both tables
ALTER TABLE quiz_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for quiz submissions from website)
CREATE POLICY "Allow anonymous insert" ON quiz_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert answers" ON quiz_answers
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow authenticated reads (for admin dashboard)
-- Note: Service role key bypasses RLS, so admin can always read
CREATE POLICY "Allow authenticated read" ON quiz_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

CREATE POLICY "Allow authenticated read answers" ON quiz_answers
  FOR SELECT
  USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- Policy: Allow authenticated updates (for admin marking leads)
CREATE POLICY "Allow authenticated update" ON quiz_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- ============================================================================
-- Updated_at trigger function
-- ============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to quiz_submissions
CREATE TRIGGER update_quiz_submissions_updated_at
  BEFORE UPDATE ON quiz_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- Verification queries
-- ============================================================================
-- Run these after creating tables to verify structure:
-- SELECT * FROM quiz_submissions LIMIT 1;
-- SELECT * FROM quiz_answers LIMIT 1;
