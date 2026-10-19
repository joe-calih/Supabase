import Link from "next/link"
import { AuthForm } from "@/components/auth/auth-form"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-10 flex items-center justify-center gap-2 text-lg font-semibold">Sprint</Link>
        <AuthForm mode="login" />
      </div>
    </main>
  )
}
