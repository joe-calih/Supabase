"use client"

import Link from "next/link"
import { useState } from "react"

import { createSupabaseBrowserClient } from "@/lib/supabase/browser"

type AuthMode = "login" | "signup"

export function AuthForm({ mode }: { mode: AuthMode }) {
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const isLogin = mode === "login"

  const runAuth = async (action: () => Promise<{ error: { message: string } | null }>) => {
    setError(null)
    setMessage(null)
    setLoading(true)
    try {
      const { error: authError } = await action()
      if (authError) setError(authError.message)
      else if (!isLogin) setMessage("Account created. Check your email to confirm your address.")
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Authentication could not be completed.")
    } finally {
      setLoading(false)
    }
  }

  const signInWithProvider = async (provider: "google" | "github") => {
    setError(null)
    try {
      const supabase = createSupabaseBrowserClient()
      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      })
      if (authError) setError(authError.message)
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Authentication could not be completed.")
    }
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get("email") || "")
    const password = String(formData.get("password") || "")
    const name = String(formData.get("name") || "")

    await runAuth(async () => {
      const supabase = createSupabaseBrowserClient()
      return isLogin
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password, options: { data: { name } } })
    })
  }

  return (
    <div className="w-full rounded-xl border border-border bg-card p-5 shadow-xl sm:p-8">
      <h1 className="text-center text-2xl font-medium">{isLogin ? "Welcome back" : "Create your account"}</h1>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        {isLogin ? "Sign in to continue building with Sprint." : "Start planning and building better products."}
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button type="button" onClick={() => signInWithProvider("google")} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" disabled={loading}>
          <svg viewBox="0 0 48 48" aria-hidden="true" className="size-4">
            <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z" />
            <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z" />
            <path fill="#FBBC05" d="M12.6 27.7a12 12 0 0 1 0-7.4V15H5.8a20 20 0 0 0 0 17.9l6.8-5.2Z" />
            <path fill="#EA4335" d="M24 11.9c3 0 5.7 1 7.8 3.1l5.9-5.9C34.1 5.8 29.5 4 24 4A20 20 0 0 0 5.8 15l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z" />
          </svg>
          Google
        </button>
        <button type="button" onClick={() => signInWithProvider("github")} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" disabled={loading}>
          <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className="size-4"><path d="M8 0C3.5816 0 0 3.58719 0 8.01357C0 11.5535 2.292 14.5575 5.4712 15.6167C5.8712 15.6903 6.0168 15.4431 6.0168 15.2303C6.0168 15.0407 6.0104 14.5359 6.0064 13.8679C3.7808 14.3519 3.3112 12.7935 3.3112 12.7935C2.948 11.8671 2.4232 11.6207 2.4232 11.6207C1.6968 11.1247 2.4784 11.1343 2.4784 11.1343C3.2808 11.1903 3.7032 11.9599 3.7032 11.9599C4.4168 13.1839 5.576 12.8303 6.0312 12.6255C6.1048 12.1079 6.3112 11.7551 6.54 11.5551C4.764 11.3527 2.896 10.6647 2.896 7.59438C2.896 6.71998 3.208 6.00398 3.7192 5.44398C3.6368 5.24158 3.3624 4.42639 3.7976 3.32399C3.7976 3.32399 4.4696 3.10799 5.9976 4.14479C6.65022 3.9668 7.32355 3.87614 8 3.87519C8.68 3.87839 9.364 3.96719 10.0032 4.14479C11.5304 3.10799 12.2008 3.32319 12.2008 3.32319C12.6376 4.42639 12.3624 5.24158 12.2808 5.44398C12.7928 6.00398 13.1032 6.71998 13.1032 7.59438C13.1032 10.6727 11.232 11.3503 9.4504 11.5487C9.73762 11.7959 9.99282 12.2847 9.99282 13.0327C9.99282 14.1031 9.98322 14.9679 9.98322 15.2303C9.98322 15.4447 10.1272 15.6943 10.5336 15.6159C12.1266 15.0816 13.5115 14.0602 14.4924 12.696C15.4733 11.3318 16.0007 9.69382 16 8.01357C16 3.58719 12.4176 0 8 0Z" /></svg> GitHub
        </button>
      </div>
      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" /> or continue with email <span className="h-px flex-1 bg-border" /></div>
      <form onSubmit={submit} className="space-y-4">
        {!isLogin && <label className="block text-sm">Name<input name="name" type="text" required className="mt-2 h-10 w-full rounded-md border border-input bg-transparent px-3 outline-none focus-visible:ring-ring focus-visible:ring-2" /></label>}
        <label className="block text-sm">Email<input name="email" type="email" required className="mt-2 h-10 w-full rounded-md border border-input bg-transparent px-3 outline-none focus-visible:ring-ring focus-visible:ring-2" /></label>
        <label className="block text-sm">Password<input name="password" type="password" required minLength={8} className="mt-2 h-10 w-full rounded-md border border-input bg-transparent px-3 outline-none focus-visible:ring-ring focus-visible:ring-2" /></label>
        {isLogin && <div className="text-right"><Link href="/forgot-password" className="text-xs text-primary hover:underline">Forgot password?</Link></div>}
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        {message && <p role="status" className="text-sm text-primary">{message}</p>}
        <button type="submit" disabled={loading} className="h-10 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
          {loading ? "Please wait..." : isLogin ? "Log in" : "Create account"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isLogin ? "New to Sprint?" : "Already have an account?"}{" "}
        <Link href={isLogin ? "/signup" : "/login"} className="text-primary hover:underline">{isLogin ? "Create an account" : "Log in"}</Link>
      </p>
    </div>
  )
}
