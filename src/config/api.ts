/**
 * API Configuration
 *
 * Centralized configuration for external API endpoints.
 * The Cloudflare Worker handles all dynamic requests including:
 * - Google Calendar event creation
 * - Available time slots fetching
 * - Form submissions
 */

export const API_BASE = "https://plain-mode-42c4.rcushmaniii.workers.dev";

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  /**
   * Create a booking/calendar event
   * POST /book
   * Body: { name: string, email: string, date: string, time: string, lang: 'en' | 'es' }
   */
  book: `${API_BASE}/book`,

  /**
   * Get available time slots for a specific date
   * GET /slots/:date
   * Params: date (YYYY-MM-DD format)
   */
  slots: (date: string) => `${API_BASE}/slots/${date}`,

  /**
   * Get available slots (alternative endpoint)
   * GET /available-slots?date=YYYY-MM-DD
   */
  availableSlots: `${API_BASE}/available-slots`,
} as const;
