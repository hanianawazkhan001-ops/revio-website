import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// For use in Server Components, Server Actions and Route Handlers. Reads
// (and, where possible, refreshes) the visitor's Supabase Auth session
// from cookies. This uses the public anon key, not the service-role key —
// it identifies who is logged in, it does not bypass RLS.
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component, where cookies can't be
          // written. Safe to ignore — middleware handles refreshing the
          // session cookie on every request instead.
        }
      },
    },
  });
}
