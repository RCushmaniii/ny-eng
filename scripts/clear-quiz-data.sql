-- ============================================================================
-- Clear Quiz Test Data
-- ============================================================================
-- This script removes all records from quiz_submissions and quiz_answers tables
-- Use this during testing to reset the database
-- 
-- WARNING: This will permanently delete all quiz data!
-- ============================================================================

-- Delete all quiz answers first (due to foreign key constraint)
DELETE FROM quiz_answers;

-- Delete all quiz submissions
DELETE FROM quiz_submissions;

-- Verify deletion (should return 0 for both)
SELECT COUNT(*) as remaining_submissions FROM quiz_submissions;
SELECT COUNT(*) as remaining_answers FROM quiz_answers;
