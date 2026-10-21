import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function KeywordResearchCta() {
  return (
    <section className="bg-background py-10 text-foreground md:py-12" aria-labelledby="keyword-research-cta-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-5 rounded-lg border border-primary/35 bg-primary/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 id="keyword-research-cta-heading" className="text-lg font-semibold">
              Go Beyond One Keyword
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Explore related terms, questions, and topic groups, then narrow the list with advanced filters.
            </p>
          </div>
          <Button asChild className="min-h-10 shrink-0 rounded-full px-5">
            <a href="/tools#seo-tools">
              Open Keyword Magic Tool
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
