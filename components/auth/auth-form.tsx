"use client"

import Link from "next/link"
import { useState } from "react"
import { GitBranch } from "lucide-react"
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
    <div className="rounded-xl border border-border bg-card/60 p-8 shadow-2xl">
      <h1 className="text-2xl font-medium">{isLogin ? "Welcome back" : "Create your account"}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {isLogin ? "Sign in to continue building with Sprint." : "Start planning and building better products."}
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <button type="button" onClick={() => signInWithProvider("google")} className="flex h-10 items-center justify-center gap-2 rounded-md border border-input text-sm hover:bg-accent" disabled={loading}>
          <span className="font-semibold">G</span> Google
        </button>
        <button type="button" onClick={() => signInWithProvider("github")} className="flex h-10 items-center justify-center gap-2 rounded-md border border-input text-sm hover:bg-accent" disabled={loading}>
          <GitBranch className="size-4" /> GitHub
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
