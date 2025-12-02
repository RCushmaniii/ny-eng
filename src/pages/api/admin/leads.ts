/**
 * Admin API - Get All Leads
 * 
 * GET /api/admin/leads
 * 
 * Returns all quiz submissions with filtering and pagination
 * 
 * TODO: Add authentication before deploying to production
 */

export const prerender = false;

import type { APIRoute } from 'astro';
import { getAllSubmissions } from '@/lib/db';

export const GET: APIRoute = async ({ url }) => {
  try {
    // Parse query parameters
    const params = url.searchParams;
    const score_tier = params.get('score_tier') || undefined;
    const language = params.get('language') || undefined;
    const booked_consultation = params.get('booked_consultation') 
      ? params.get('booked_consultation') === 'true' 
      : undefined;
    const email = params.get('email') || undefined;
    const limit = parseInt(params.get('limit') || '20');
    const offset = parseInt(params.get('offset') || '0');

    // Get submissions from Supabase
    const result = await getAllSubmissions({
      score_tier,
      language,
      booked_consultation,
      limit,
      offset,
    });

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Calculate stats
    const submissions = result.submissions || [];
    const total = result.total || 0;
    const booked_count = submissions.filter(s => s.booked_consultation).length;
    const avg_score = submissions.length > 0
      ? submissions.reduce((sum, s) => sum + s.total_score, 0) / submissions.length
      : 0;

    return new Response(
      JSON.stringify({
        success: true,
        submissions,
        total,
        booked_count,
        avg_score,
        page: Math.floor(offset / limit) + 1,
        page_size: limit,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Admin leads error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
