export function CTASection() {
  return (
    <section className="bg-background px-6 py-24 text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-xl font-medium tracking-tight text-foreground md:text-2xl lg:text-[36px]">
          <span className="text-muted-foreground">Build in a weekend,</span>{" "}
          <span className="block sm:inline">scale to millions</span>
        </h2>
        <div className="flex items-center gap-3">
          <button className="relative inline-flex h-[38px] items-center justify-center rounded-md border border-primary bg-primary px-4 py-2 text-center text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:text-sm">
            <span className="truncate">Start your project</span>
          </button>
          <button className="relative inline-flex h-[38px] items-center justify-center rounded-md border border-border bg-card px-4 py-2 text-center text-base font-medium text-card-foreground transition-colors hover:bg-accent md:text-sm">
            <span className="truncate">Request a demo</span>
          </button>
        </div>
      </div>
    </section>
  )
}