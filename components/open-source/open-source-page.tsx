"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen, Code2, ExternalLink, GitBranch, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const repositories = [
  ["supabase/supabase", "The Postgres development platform. Sprint gives you a dedicated Postgres database to build your web, mobile, and AI applications.", "https://github.com/supabase/supabase"],
  ["supabase/supabase-js", "An isomorphic Javascript client for Supabase. Query your database, subscribe to realtime events, upload and download files, browse TypeScript examples, invoke Postgres functions via rpc, invoke Edge Functions, and query pgvector.", "https://github.com/supabase/supabase-js"],
  ["supabase/pg_graphql", "GraphQL support for PostgreSQL", "https://github.com/supabase/pg_graphql"],
  ["supabase/supavisor", "A cloud-native, multi-tenant Postgres connection pooler.", "https://github.com/supabase/supavisor"],
  ["supabase/postgres", "Unmodified Postgres with some useful extensions", "https://github.com/supabase/postgres"],
  ["supabase/postgres-meta", "A RESTful API for managing your Postgres. Fetch tables, add roles, and run queries", "https://github.com/supabase/postgres-meta"],
  ["supabase/postgrest-js", "The postgrest-js repo now has a new home: https://github.com/supabase/supabase-js/tree/master/packages/core/postgrest-js", "https://github.com/supabase/supabase-js/tree/master/packages/core/postgrest-js"],
  ["supabase/pg_jsonschema", "PostgreSQL extension providing JSON Schema validation", "https://github.com/supabase/pg_jsonschema"],
  ["supabase-flutter", "Flutter integration for Supabase. These packages make it simple for developers to build secure and scalable products.", "https://github.com/supabase/supabase-flutter"],
  ["supabase/wrappers", "Postgres Foreign Data Wrapper development framework in Rust.", "https://github.com/supabase/wrappers"],
  ["supabase/supa_audit", "Generic Table Auditing", "https://github.com/supabase/supa_audit"],
  ["supabase/pg_crdt", "CRDT support in Postgres (experimental)", "https://github.com/supabase/pg_crdt"],
  ["supabase/pg_net", "A PostgreSQL extension that enables asynchronous (non-blocking) HTTP/HTTPS requests with SQL", "https://github.com/supabase/pg_net"],
  ["supabase/pg_netstat", "PostgreSQL extension to monitor database network traffic", "https://github.com/supabase/pg_netstat"],
  ["supabase/postgrest-dart", "Dart client for PostgREST", "https://github.com/supabase/postgrest-dart"],
  ["supabase/postgres-deno", "A PostgreSQL extension for Deno: run Typescript in PostgreSQL functions and triggers.", "https://github.com/supabase/postgres-deno"],
  ["supabase/supautils", "Unlock advanced Postgres features without granting SUPERUSER access", "https://github.com/supabase/supautils"],
  ["supabase/nix-postgres", "Experimental port of supabase/postgres to Nix", "https://github.com/supabase/nix-postgres"],
  ["supabase/pg_listen", "Trigger shell command from NOTIFY", "https://github.com/supabase/pg_listen"],
  ["pgbouncer_exporter", "Prometheus exporter for PgBouncer", "https://github.com/prometheus-community/pgbouncer_exporter"],
  ["supabase/pgextkit", "Database Package Registry for Postgres", "https://github.com/supabase/pgextkit"],
  ["pgx-contrib-spiext", "PostgreSQL extension tooling and contributions.", "https://github.com/supabase/pgx-contrib-spiext"],
]

const sponsoredProjects = [
  ["PostgREST", "PostgREST is a standalone web server that turns your PostgreSQL database directly into a RESTful API.", "https://postgrest.org/"],
  ["PGroonga", "PGroonga is a PostgreSQL extension to use Groonga as index. PGroonga makes PostgreSQL a fast full text search platform for all languages!", "https://pgroonga.github.io/"],
  ["libsodium", "Modern cryptography for PostgreSQL using libsodium.", "https://libsodium.org/"],
  ["OrioleDB", "Sponsoring OrioleDB — the next generation storage engine for PostgreSQL.", "https://orioledb.com/"],
  ["Elixir", "Elixir is a dynamic, functional language for building scalable and maintainable applications.", "https://elixir-lang.org/"],
]

const ease = [0.22, 1, 0.36, 1] as const

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function OpenSourcePage() {
  return (
    <main className="bg-background pt-16 text-foreground">
      <Hero />
      <ContributionSection />
      <RepositorySection />
      <SponsoredSection />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_70%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center sm:py-20 md:py-24 lg:pb-12">
        <Reveal className="flex max-w-2xl flex-col items-center gap-3">
          <span className="font-mono text-sm uppercase tracking-widest text-primary">The Power of Collaboration</span>
          <h1 className="text-balance text-3xl tracking-tight sm:text-4xl lg:text-5xl">Open Source Community</h1>
          <p className="text-balance text-lg text-muted-foreground">
            Sprint is an open source company, actively fostering collaboration and supporting existing open source tools and communities.
          </p>
          <div className="flex flex-col gap-2 pt-2 sm:flex-row">
            <Button asChild><a href="#contribute">How to contribute</a></Button>
            <Button asChild variant="outline"><a href="https://github.com/supabase" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight className="size-4" /></a></Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContributionSection() {
  const links = [
    [BookOpen, "Code of Conduct", "Read the standards that help keep our community welcoming.", "#"],
    [Users, "Community Content Program", "Share knowledge and help other builders get further.", "#"],
    [GitBranch, "Contribute on GitHub", "Browse issues, improve documentation, and submit code.", "https://github.com/supabase"],
  ] as const

  return (
    <section id="contribute" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
        <Reveal className="flex flex-col gap-3">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Get involved</span>
          <h2 className="text-3xl tracking-tight sm:text-4xl">How to contribute</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {links.map(([Icon, title, description, href], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group block h-full">
                <Card className="h-full border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-lg">
                  <CardHeader><Icon className="size-5 text-primary" /><CardTitle className="text-lg">{title}</CardTitle></CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{description}<ArrowUpRight className="mt-5 size-4 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></CardContent>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function RepositorySection() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
        <Reveal className="flex flex-col gap-3">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Open source projects</span>
          <h2 className="text-3xl tracking-tight sm:text-4xl">Build on open source</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">Explore the tools, libraries, and extensions that power modern Postgres development.</p>
        </Reveal>
        <motion.div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={{ visible: { transition: { staggerChildren: 0.035 } } }}>
          {repositories.map(([name, description, href]) => (
            <motion.a key={name} href={href} target="_blank" rel="noreferrer" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }} className="group">
              <Card className="h-full border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50">
                <CardHeader className="flex-row items-center justify-between gap-3"><CardTitle className="font-mono text-sm">{name}</CardTitle><ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" /></CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{description}</CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SponsoredSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
        <Reveal className="flex max-w-2xl flex-col gap-3">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Sponsored Projects</span>
          <h2 className="text-3xl tracking-tight sm:text-4xl">We don&apos;t just live and breathe open source, we also sponsor projects we love.</h2>
          <p className="text-muted-foreground">Open Collective Profile</p>
          <p className="text-sm text-muted-foreground">We have contributed with more than $250,000 in sponsorships.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sponsoredProjects.map(([name, description, href], index) => (
            <Reveal key={name} delay={index * 0.06}>
              <a href={href} target="_blank" rel="noreferrer" className="group block h-full">
                <Card className="h-full border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50">
                  <CardHeader className="flex-row items-center justify-between"><CardTitle className="text-lg">{name}</CardTitle><Heart className="size-4 text-primary" /></CardHeader>
                  <CardContent className="text-sm leading-6 text-muted-foreground">{description}</CardContent>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
