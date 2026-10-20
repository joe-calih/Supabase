"use client"

import Link from "next/link"
import { useState } from "react"
import { createSupabaseBrowserClient } from "@/lib/supabase/browser"
import { AuthBrand } from "@/components/auth/auth-brand"
import { Navbar } from "@/components/homepage/navbar"

export default function ForgotPasswordPage() {
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage(null)
    setError(null)
    try {
      const email = String(new FormData(event.currentTarget).get("email") || "")
      const supabase = createSupabaseBrowserClient()
      const { error: authError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
      })
      if (authError) setError(authError.message)
      else setMessage("If an account exists for that email, a password reset link is on its way.")
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Password reset could not be started.")
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 pb-16 pt-28 text-foreground">
      <Navbar />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center">
        <div className="w-full rounded-xl border border-border bg-card p-5 shadow-xl sm:p-8">
          <h1 className="text-center text-2xl font-medium">Reset your password</h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">Enter your email and we&apos;ll send you a secure reset link.</p>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <label className="block text-sm">Email<input name="email" type="email" required className="mt-2 h-10 w-full rounded-md border border-input bg-transparent px-3 outline-none focus-visible:ring-ring focus-visible:ring-2" /></label>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            {message && <p role="status" className="text-sm text-primary">{message}</p>}
            <button type="submit" className="h-10 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90">Send reset link</button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground"><Link href="/login" className="text-primary hover:underline">Back to log in</Link></p>
        </div>
        <AuthBrand />
      </div>
    </main>
  )
}
