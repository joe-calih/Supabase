import { AuthForm } from "@/components/auth/auth-form"
import { AuthBrand } from "@/components/auth/auth-brand"
import { Navbar } from "@/components/homepage/navbar"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-16 pt-28 text-foreground">
      <Navbar />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center">
        <AuthForm mode="signup" />
        <AuthBrand />
      </div>
    </main>
  )
}
