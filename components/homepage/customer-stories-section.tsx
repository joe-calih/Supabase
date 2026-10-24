import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const stories = [
  {
    name: "Lovable",
    avatar: "/authors/01.png",
    headline: "Powering millions of AI-generated apps with a complete Supabase backend.",
    quote: "Lovable is about unlocking creativity for anyone. Only 1% of the population knows how to code. Lovable has unlocked that ability for the other 99%.",
    person: "Bryan Byrne, Product Manager, Lovable",
    href: "/customers/lovable",
  },
  {
    name: "eXp Realty",
    avatar: "/authors/02.png",
    headline: "Empowering 2,000+ employees to build production software with AI.",
    quote: "The thing that makes everything possible, all of our rapid development now and AI-generated or assisted development, is Supabase. That's the giant whose shoulders we can stand on.",
    person: "Seth Siegler, Chief Innovation Officer, eXp Realty",
    href: "/customers/exprealty",
  },
  {
    name: "Phoenix Energy",
    avatar: "/authors/03.png",
    headline: "Migrated critical infrastructure from MongoDB with zero downtime.",
    quote: "We needed a system that could handle serious performance and security requirements — without slowing down our developers. Supabase has given us both.",
    person: "Kris Woods, CTO, Phoenix Energy",
    href: "/customers/phoenix-energy",
  },
  {
    name: "Chatbase",
    avatar: "/authors/04.png",
    headline: "Scaled from zero to $10M ARR on a single Postgres-backed platform.",
    quote: "Instead of splitting things out as we go, we try to consolidate things more as we do. The technology itself works better when you have things that are closely tied together. That's why we're on Supabase.",
    person: "Yasser Elsaid, Founder and CEO, Chatbase",
    href: "/customers/chatbase",
  },
  {
    name: "Rally",
    avatar: "/authors/05.png",
    headline: "From first line of code to fully licensed fintech in three months.",
    quote: "We could not have built this company without Supabase. If I had to go and build all these components myself, we wouldn't even have launched.",
    person: "Thiago Peres, Founder & CTO, Rally",
    href: "/customers/rally",
  },
]

export function CustomerStoriesSection() {
  return (
    <section className="w-full bg-background py-16 text-foreground sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl tracking-tight sm:text-4xl">How industry leaders are building with Supabase</h2>
          <Link href="/customers" className="hidden shrink-0 items-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:flex">
            More customer stories <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link key={story.name} href={story.href} className="group">
              <Card className="h-full overflow-hidden border-border bg-card transition-colors group-hover:bg-muted/50">
                <CardContent className="flex h-full flex-col gap-5 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary" aria-hidden="true">
                      {story.name.slice(0, 1)}
                    </span>
                    <span className="text-lg font-medium">{story.name}</span>
                  </div>
                  <h3 className="text-xl leading-snug tracking-tight">{story.headline}</h3>
                  <p className="flex-1 text-sm leading-6 text-muted-foreground">{story.quote}</p>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <img src={story.avatar} alt={story.person} width={36} height={36} className="size-9 rounded-full object-cover" />
                    <span className="text-xs text-muted-foreground">{story.person}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-foreground">
                    Read the story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <Link href="/customers" className="mt-6 flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:hidden">
          More customer stories <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
