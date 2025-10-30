/**
 * Test API Endpoint
 * 
 * GET /api/quiz/test
 * 
 * Tests Supabase connection and returns basic info
 */

export const prerender = false;

import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';

export const GET: APIRoute = async () => {
  try {
    // Test connection by counting submissions
    const { count, error } = await supabase
      .from('quiz_submissions')
      .select('*', { count: 'exact', head: true });

    if (error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message,
          details: error,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Supabase connection successful',
        total_submissions: count,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
