-- MySQL Schema for NY English Quiz Database
-- Migrated from Supabase (PostgreSQL)

-- Drop tables if they exist (for clean migration)
DROP TABLE IF EXISTS quiz_answers;
DROP TABLE IF EXISTS quiz_submissions;

-- ============================================================================
-- quiz_submissions table
-- ============================================================================
CREATE TABLE quiz_submissions (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  
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
  total_score INT NOT NULL,
  raw_score INT,
  score_tier TEXT NOT NULL,
  category_scores JSON,
  primary_gap TEXT NOT NULL,
  secondary_gap TEXT NOT NULL,
  
  -- Behavioral tracking
  completion_time_ms INT,
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
  booking_date TIMESTAMP,
  
  -- Privacy/consent
  gdpr_consent BOOLEAN DEFAULT FALSE,
  marketing_opt_in BOOLEAN DEFAULT FALSE,
  
  -- Admin management
  status TEXT NOT NULL DEFAULT 'new',
  admin_notes TEXT,
  
  -- Full answers snapshot (for backup/analysis)
  answers JSON,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Indexes for quiz_submissions (matching Supabase)
CREATE INDEX idx_email ON quiz_submissions(email(255));
CREATE INDEX idx_created ON quiz_submissions(created_at DESC);
CREATE INDEX idx_quiz_submissions_created_at ON quiz_submissions(created_at DESC);
CREATE INDEX idx_quiz_submissions_email ON quiz_submissions(email(255));
CREATE INDEX idx_quiz_submissions_quiz_type ON quiz_submissions(quiz_type(50));
CREATE INDEX idx_quiz_submissions_status ON quiz_submissions(status(20));
CREATE INDEX idx_score ON quiz_submissions(total_score);
CREATE INDEX idx_tier ON quiz_submissions(score_tier(50));

-- ============================================================================
-- quiz_answers table
-- ============================================================================
CREATE TABLE quiz_answers (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  submission_id VARCHAR(36) NOT NULL,
  
  -- Question data
  question_number INT NOT NULL,
  question_text TEXT NOT NULL,
  
  -- Answer data
  answer_text TEXT NOT NULL,
  answer_index INT NOT NULL,
  points INT NOT NULL,
  category TEXT,
  
  -- Timestamp
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Foreign key for quiz_answers
ALTER TABLE quiz_answers 
  ADD CONSTRAINT fk_quiz_answers_submission 
  FOREIGN KEY (submission_id) 
  REFERENCES quiz_submissions(id) 
  ON DELETE CASCADE 
  ON UPDATE NO ACTION;

-- Indexes for quiz_answers (matching Supabase)
CREATE INDEX idx_category ON quiz_answers(category(50));
CREATE INDEX idx_quiz_answers_submission_id ON quiz_answers(submission_id);
CREATE INDEX idx_submission ON quiz_answers(submission_id);

-- ============================================================================
-- Verification queries
-- ============================================================================
-- Run these after creating tables to verify structure:
-- SHOW CREATE TABLE quiz_submissions;
-- SHOW CREATE TABLE quiz_answers;
-- DESCRIBE quiz_submissions;
-- DESCRIBE quiz_answers;
