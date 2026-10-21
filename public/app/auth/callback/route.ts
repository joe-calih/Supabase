import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const next = url.searchParams.get("next") || "/"

  if (!code) return NextResponse.redirect(new URL("/login?error=missing_code", url.origin))

  try {
    const supabase = await createSupabaseServerClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) return NextResponse.redirect(new URL(`/login?error=${encodeURIComponent(error.message)}`, url.origin))
    return NextResponse.redirect(new URL(next.startsWith("/") ? next : "/", url.origin))
  } catch {
    return NextResponse.redirect(new URL("/login?error=supabase_not_configured", url.origin))
  }
}
