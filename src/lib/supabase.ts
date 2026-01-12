/**
 * Supabase Database Client
 *
 * Replaces MySQL with Supabase for Vercel deployment
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not found. Database operations will fail.",
  );
}

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");

// Test connection
export async function testConnection() {
  try {
    const { error } = await supabase
      .from("quiz_submissions")
      .select("id")
      .limit(1);

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return { success: true, message: "Supabase connected" };
  } catch (error) {
    console.error("Supabase connection failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export default supabase;
