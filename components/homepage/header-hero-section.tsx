import { Button } from "@/components/ui/button"

export function HeaderHeroSection() {
  return (
    <header className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 pb-7 pt-24 sm:pb-12 sm:pt-32 md:pb-16 md:pt-40">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="grid grid-cols-1 items-end gap-4 lg:grid-cols-2">
            <h1 className="text-4xl leading-[1.08] sm:text-5xl sm:leading-none">
              <span className="block">Build in a weekend</span>
              <span className="block text-primary">Scale to millions</span>
            </h1>
            <p className="text-balance text-muted-foreground">
              Start your project with a Postgres database. Add Authentication, Data APIs, Edge Functions, Realtime
              Data, Storage, and Vector embeddings.
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Button asChild>
              <a className="flex-1 sm:flex-none" href="https://supabase.com/dashboard/sign-up">Start your project</a>
            </Button>
            <Button asChild variant="secondary">
              <a className="flex-1 sm:flex-none" href="/contact/sales">Request a demo</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
