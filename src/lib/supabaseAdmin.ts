import "server-only";
import { createClient } from "@supabase/supabase-js";

// Uses the service_role key, which bypasses Row Level Security entirely.
// This file must only ever be imported from server-side code (API routes),
// never from a client component — the "server-only" import above makes any
// accidental client-side import fail the build rather than leak the key.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
