import "server-only";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/supabaseServer";

// Every /api/admin/* route calls this first. Page routes under /admin are
// already gated by middleware, but middleware doesn't cover API routes
// (a redirect response there would confuse a fetch() call), so each admin
// API route checks the session explicitly instead.
export async function requireAdminUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      user: null,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  return { user, response: null };
}

// app_metadata can only be written by server-side code holding the
// service-role key (see scripts that set it) — a regular admin has no
// way to grant themselves this, even by tampering with a request.
export function isSuperAdmin(user: User): boolean {
  return (user.app_metadata as { role?: string } | undefined)?.role === "super_admin";
}

// For /api/admin/admins/* routes: only a super admin may manage who has
// admin access at all.
export async function requireSuperAdminUser() {
  const { user, response } = await requireAdminUser();
  if (!user) return { user: null, response };

  if (!isSuperAdmin(user)) {
    return {
      user: null,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }
  return { user, response: null };
}

// For the /admin/admins* Server Component pages: a non-super-admin is
// redirected away rather than shown a 403 page, since this section is
// meant to be invisible to them, not just inert.
export async function requireSuperAdminPage(): Promise<User> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isSuperAdmin(user)) {
    redirect("/admin");
  }
  return user;
}
