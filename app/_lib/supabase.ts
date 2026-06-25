import { createClient } from "@supabase/supabase-js";
// Replace these strings with your actual Supabase URL and Anon Key
// found under Project Settings > API in your Supabase dashboard
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables! Check your .env.local file.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
