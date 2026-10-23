"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Globe2, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  ["Egoless", "Mission driven, work for the good of colleagues."],
  ["Kaizen Mindset", "Iterative approach, continuously improve all functions."],
  ["Truth Seeking", "Intellectually honest, act with integrity, recognize biases."],
  ["Batteries Included", "High ownership, intrinsically motivated, care about quality."],
  ["Undeniable", "So good you earn respect, reliable, consistently deliver."],
]

const benefits = [
  ["Fully Remote", "We hire globally. Do your best work from anywhere with a co-working membership you can use anywhere in the world."],
  ["Tech Allowance", "Use this budget for any technology you need for your work setup."],
  ["Health Benefits", "100% health coverage for employees and 80% for dependants. It is important that you and your family have health care covered."],
  ["Annual Off-Sites", "We come together annually for a week. Each year we pick somewhere different in the world."],
  ["Flexible Work", "Work remotely from anywhere in the world. We work in teams, but we work asynchronously."],
  ["Professional Development", "An annual allowance for professional development and education, from courses to conferences."],
]

type Job = { title: string; location: string; category: string; href: string }

const jobs: Job[] = [
  ["AI Platform Engineer", "Remote, Global", "Business Operations"],
  ["Head of AI Native Operations", "Remote, Global", "Business Operations"],
  ["Customer Solution Architect (AMER)", "Remote, AMER", "Success"],
  ["Customer Solution Architect, Team Lead", "Remote, AMER", "Success"],
  ["Technical Account Management (TAM) Leader", "Remote, Global", "Success"],
  ["Support Engineer (EMEA)", "Remote, EMEA", "Support"],
  ["Support Engineer (AMER)", "Remote, AMER", "Support"],
  ["Support Engineer (APAC)", "Remote, APAC", "Support"],
  ["Support Engineer (AMER - Weekends)", "Remote, AMER", "Support"],
  ["Database Support Engineer (AMER)", "Remote, AMER", "Support"],
  ["Database Support Engineer (EMEA)", "Remote, EMEA", "Support"],
  ["Database Support Engineer (APAC)", "Remote, APAC", "Support"],
  ["Multigres Engineer", "Remote, Global", "Engineering"],
  ["Postgres Engineer (AMER)", "Remote, AMER", "Engineering"],
  ["Multigres Deployment Engineer", "Remote, Global", "Engineering"],
  ["Platform Engineer, Managed Postgres", "Remote, Global", "Engineering"],
  ["Postgres Deployment Engineer", "Remote, Global", "Engineering"],
  ["Software Engineer - Auth", "Remote, Global", "Engineering"],
  ["Software Engineer - Functions (Compute)", "Remote, Global", "Engineering"],
  ["OrioleDB Developer (AMER)", "Remote, AMER", "Engineering"],
  ["Engineering Manager", "Remote, Global", "Engineering"],
  ["Site Reliability Engineer", "Remote, Global", "Engineering"],
  ["Supalite Engineer", "Remote, Global", "Engineering"],
  ["Release Engineer", "Remote, Global", "Engineering"],
  ["Performance Engineer - Performance Analysis & Tuning", "Remote, Global", "Engineering"],
  ["Performance Engineer - Benchmarking", "Remote, Global", "Engineering"],
  ["Cloud Platform Engineer", "Remote, Global", "Engineering"],
  ["Platform Engineer - Compute Capacity", "Remote, Global", "Engineering"],
  ["Software Engineer - Branching", "Remote, Global", "Engineering"],
  ["Platform Security Engineer (AMER/APAC)", "Remote, Global", "Engineering"],
  ["Engineering Manager, Billing", "Remote, Global", "Engineering"],
  ["Platform Engineer, Edge & Networking", "Remote, Global", "Engineering"],
  ["FinOps Engineer", "Remote, Global", "Engineering"],
  ["SDK Engineer - Python", "Remote, Global", "Engineering"],
  ["OrioleDB Deployment Engineer (AMER)", "Remote, AMER", "Engineering"],
  ["Developer Relations Engineer", "Remote, San Francisco, CA", "Marketing"],
  ["Developer Relations Engineer (New York, NY)", "Remote, New York, US", "Marketing"],
  ["Developer Relations Engineer (London, UK)", "Remote, London UK", "Marketing"],
  ["Growth Marketer, Creators & Channels", "Remote, AMER", "Marketing"],
  ["Head of New Media", "Remote, AMER", "Marketing"],
].map(([title, location, category], index) => ({
  title,
  location,
  category,
  href: `https://vercel.com/careers?role=${encodeURIComponent(title)}-${index}`,
}))

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export function CareersPage() {
  return (
    <main className="bg-background pt-16 text-foreground">
      <Hero />
      <Metrics />
      <RemoteSection />
      <AboutSection />
      <ValuesSection />
      <ContributorsSection />
      <BenefitsSection />
      <PositionsSection />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl space-y-4 px-6 py-12 text-center sm:py-[4.5rem] md:py-24 lg:pt-24">
        <Reveal className="flex flex-col items-center space-y-4">
          <h1 className="text-sm text-primary md:text-base"><span className="sr-only">Supabase </span>Careers</h1>
          <h2 className="max-w-3xl text-balance text-3xl tracking-[-1px] md:text-4xl xl:text-5xl">
            We&apos;re on a mission to build the best developer platform
          </h2>
          <p className="mx-auto max-w-sm text-sm text-muted-foreground sm:max-w-md md:max-w-lg md:text-base">
            Explore remote opportunities and join our team to help us achieve it.
          </p>
          <Button asChild className="mt-4 h-[38px] px-4 text-sm">
            <a href="#positions">Open positions (57)</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

function Metrics() {
  const metrics = [
    ["350+", "team members|in 60+ countries"],
    ["20+", "languages spoken"],
    ["$1B", "raised"],
    ["540,000+", "community members"],
    ["40,000+", "memes posted|(and counting)"],
  ]
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-8 sm:py-[4.5rem] md:py-24">
        <div className="mx-auto flex w-fit flex-wrap justify-around gap-x-0 md:w-full md:flex-nowrap md:items-start lg:max-w-5xl">
          {metrics.map(([value, label]) => (
            <div key={label} className="mt-6 w-[134px] border-t border-border px-2 pt-3 md:mt-0 md:w-auto md:border-0 md:px-2 md:pt-0">
              <div className="hidden w-[60px] border-t border-border lg:block lg:w-[100px] lg:border-t-2" />
              <h2 className="pt-3 text-3xl tracking-[-1px] lg:text-4xl">{value}</h2>
              <div className="text-sm text-muted-foreground lg:text-base">
                {label.split("|").map((line) => <p key={line}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RemoteSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Remote by design</span>
          <h2 className="text-balance text-3xl tracking-tight sm:text-5xl">We work together, wherever we are</h2>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Working in a globally distributed team is rewarding but has its challenges. We are across many different timezones, so we use tools like Notion, Slack, and Discord to stay connected to our team and our community.
          </p>
        </Reveal>
        <Reveal className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="absolute inset-8 rounded-full border border-primary/30" />
          <div className="absolute inset-16 rounded-full border border-primary/20" />
          <div className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <Globe2 className="size-9" aria-hidden="true" />
          </div>
          {["Notion", "Slack", "Discord", "GitHub"].map((tool, index) => (
            <span key={tool} className={`absolute rounded-full border border-border bg-muted px-3 py-2 text-xs text-muted-foreground ${["left-8 top-10", "right-8 top-24", "bottom-12 left-12", "bottom-8 right-10"][index]}`}>
              {tool}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Our story</span>
          <h2 className="text-3xl tracking-tight sm:text-5xl">What is Supabase</h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Supabase is the Postgres development platform, built by developers for developers. Supabase adds auth, realtime, storage, restful APIs, and edge functions to Postgres.
          </p>
        </Reveal>
        <Reveal className="rounded-2xl border border-border bg-background p-6 sm:p-8">
          <Users className="mb-8 size-8 text-primary" aria-hidden="true" />
          <p className="text-2xl leading-relaxed tracking-tight sm:text-3xl">
            Supabase was born-remote. Having a globally distributed, open source company is our secret weapon to hiring top-tier talent.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal className="mb-10 max-w-2xl">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Human powered</span>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-5xl">The traits that keep us effective</h2>
          <p className="mt-4 text-lg text-muted-foreground">As a completely remote and asynchronous team, we focus on these five traits.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(([title, description]) => (
            <Reveal key={title}>
              <Card className="h-full border-border bg-card transition-colors hover:bg-muted/60">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <span className="text-2xl text-primary">✦</span>
                  <h3 className="text-lg">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContributorsSection() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-24 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <Reveal>
          <p className="font-mono text-6xl tracking-tight text-primary sm:text-8xl">1,500+</p>
          <p className="mt-2 text-xl">Contributors building Supabase</p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl tracking-tight sm:text-4xl">We deeply believe in the efficacy of collaborative open source</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            We&apos;re building a community of communities, bringing together developers from many different backgrounds, as well as new developers looking to get involved with open source. We love celebrating everyone who contributes their time to the Supabase mission.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal className="mb-10">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Benefits</span>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-5xl">Great people deserve great benefits</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, description]) => (
            <Reveal key={title}>
              <div className="border-t border-border py-5">
                <Check className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PositionsSection() {
  const grouped = jobs.reduce<Record<string, Job[]>>((acc, job) => {
    ;(acc[job.category] ??= []).push(job)
    return acc
  }, {})

  return (
    <section id="positions" className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal className="mb-10 flex flex-col gap-3">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Join us</span>
          <h2 className="text-3xl tracking-tight sm:text-5xl">Open positions</h2>
          <p className="text-lg text-muted-foreground">Want to build the best developer platform? We&apos;d love to talk to you.</p>
        </Reveal>
        <div className="space-y-10">
          {Object.entries(grouped).map(([category, categoryJobs]) => (
            <div key={category}>
              <h3 className="mb-3 text-xl tracking-tight">{category}</h3>
              <div className="overflow-hidden rounded-lg border border-border">
                {categoryJobs.map((job) => (
                  <a
                    key={`${job.category}-${job.title}`}
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-3 border-b border-border bg-background p-4 transition-colors last:border-b-0 hover:bg-muted sm:flex-row sm:items-center sm:justify-between"
                  >
                    <h4 className="min-w-0 text-base sm:truncate">{job.title}</h4>
                    <div className="flex shrink-0 items-center justify-between gap-4 text-xs text-muted-foreground sm:justify-end">
                      <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-1">
                        <MapPin className="size-3" aria-hidden="true" />
                        {job.location}
                      </span>
                      <span className="text-foreground">Apply for position <ArrowRight className="ml-1 inline size-3" aria-hidden="true" /></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
