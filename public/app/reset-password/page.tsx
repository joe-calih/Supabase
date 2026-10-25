"use client"

import Link from "next/link"
import { useState } from "react"
import { createSupabaseBrowserClient } from "@/lib/supabase/browser"
import { AuthBrand } from "@/components/auth/auth-brand"
import { Navbar } from "@/components/homepage/navbar"

export default function ResetPasswordPage() {
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage(null)
    setError(null)
    const values = new FormData(event.currentTarget)
    const password = String(values.get("password") || "")
    const confirmation = String(values.get("confirmation") || "")
    if (password !== confirmation) {
      setError("Passwords do not match.")
      return
    }
    try {
      const { error: authError } = await createSupabaseBrowserClient().auth.updateUser({ password })
      if (authError) setError(authError.message)
      else setMessage("Your password has been updated. You can now log in.")
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Password reset could not be completed.")
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 pb-16 pt-28 text-foreground">
      <Navbar />
      <div className="mx-auto flex w-full max-w-96 flex-col items-center">
        <div className="w-full rounded-xl border border-border bg-card p-5 shadow-xl sm:p-8">
          <h1 className="text-center text-2xl font-medium">Choose a new password</h1>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <label className="block text-sm">New password<input name="password" type="password" minLength={8} required className="mt-2 h-10 w-full rounded-md border border-input bg-transparent px-3 outline-none focus-visible:ring-ring focus-visible:ring-2" /></label>
            <label className="block text-sm">Confirm password<input name="confirmation" type="password" minLength={8} required className="mt-2 h-10 w-full rounded-md border border-input bg-transparent px-3 outline-none focus-visible:ring-ring focus-visible:ring-2" /></label>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            {message && <p role="status" className="text-sm text-primary">{message}</p>}
            <button type="submit" className="h-10 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90">Update password</button>
          </form>
        </div>
        <AuthBrand />
      </div>
    </main>
  )
}
