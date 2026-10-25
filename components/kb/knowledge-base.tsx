"use client"

import { useMemo, useState } from "react"
import { BookOpen, ChevronRight, Database, KeyRound, Search, Wrench } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const topics = [
  { title: "Auth", description: "Authentication, authorization, and user management.", href: "/kb/topics/auth", icon: KeyRound },
  { title: "Database", description: "Postgres schemas, queries, and performance.", href: "/kb/topics/database", icon: Database },
]

const featuredGuides = [
  ["Migrate from Amazon RDS to Supabase", "Migrate your Amazon RDS MySQL or MS SQL database to Supabase.", "/kb/guides/migrate-from-amazon-rds"],
  ["Migrate from Auth0 to Supabase Auth", "Migrate your users from Auth0 to Supabase Auth.", "/kb/guides/migrate-from-auth0"],
  ["Migrate from Firebase Auth to Supabase", "Migrate Firebase Auth users to Supabase Auth.", "/kb/guides/migrate-from-firebase-auth"],
]

const troubleshooting = [
  ["42501 : permission denied for table http_request_queue", "Database", "/kb/troubleshooting/42501--permission-denied-for-table-httprequestqueue-KnozmQ"],
  ["All about Supabase Egress", "Platform, Database, Storage", "/kb/troubleshooting/all-about-supabase-egress-a_Sg_e"],
  ["An \"invalid response was received from the upstream server\" error when querying auth", "Auth", "/kb/troubleshooting/an-invalid-response-was-received-from-the-upstream-server-error-when-querying-auth-RI4Vl-"],
  ["App Store Rejection: 'TLS error' in IPv6-only environments", "Platform", "/kb/troubleshooting/app-store-rejection-tls-error-in-ipv6-only-environments"],
  ["Are all features available in self-hosted Supabase?", "Platform", "/kb/troubleshooting/are-all-features-available-in-self-hosted-supabase-THPcqw"],
  ["Auth error: {401: invalid claim: missing sub}", "Auth", "/kb/troubleshooting/auth-error-401-invalid-claim-missing-sub--AFwMR"],
  ["Auth error: '500: Database error querying schema'", "Auth, Database", "/kb/troubleshooting/auth-error-500-database-error-querying-schema"],
  ["Auth error: 503 AuthRetryableFetchError", "Auth", "/kb/troubleshooting/auth-error-503-authretryablefetcherror"],
  ["Auth Hooks: 'Invalid payload' when anonymous users attempt phone changes", "Auth, Platform", "/kb/troubleshooting/auth-hooks-invalid-payload-when-anonymous-users-attempt-phone-changes"],
  ["Autovacuum Stalled Due to Inactive Replication Slot", "Database", "/kb/troubleshooting/autovacuum-stalled-due-to-inactive-replication-slot"],
  ["Avoiding timeouts in long running queries", "Database, Platform", "/kb/troubleshooting/avoiding-timeouts-in-long-running-queries-6nmbdN"],
  ["MIGRATIONS_FAILED: missing tables or an incomplete schema on your branch", "Database, Platform", "/kb/troubleshooting/branch-in-migrations-failed-status"],
  ["Canceling statement due to \"statement timeout\"", "Database", "/kb/troubleshooting/canceling-statement-due-to-statement-timeout-581wFv"],
  ["Can’t Access Supabase Project When Using Lovable Cloud", "Platform", "/kb/troubleshooting/cant-access-supabase-project-lovable-cloud"],
  ["Certain operations are too complex to perform directly using the client libraries.", "Database", "/kb/troubleshooting/certain-operations-are-too-complex-to-perform-directly-using-the-client-libraries-8JaphH"],
  ["Change email associated with Supabase account", "Platform, Auth", "/kb/troubleshooting/change-email-associated-with-supabase-account-T5eHNT"],
]

const allGuides = [
  ["Migrate from Amazon RDS to Supabase", "Migration, Database", "/kb/guides/migrate-from-amazon-rds"],
  ["Migrate from Auth0 to Supabase Auth", "Migration, Auth", "/kb/guides/migrate-from-auth0"],
  ["Migrate from Firebase Auth to Supabase", "Migration, Auth", "/kb/guides/migrate-from-firebase-auth"],
  ["Migrate from Firebase Storage to Supabase", "Migration, Storage", "/kb/guides/migrate-from-firebase-storage"],
  ["Migrate from Firebase Firestore to Supabase", "Migration, Database", "/kb/guides/migrate-from-firestore-data"],
  ["Migrate from Heroku to Supabase", "Migration, Database", "/kb/guides/migrate-from-heroku"],
  ["Migrate from MSSQL to Supabase", "Migration, Database", "/kb/guides/migrate-from-mssql"],
  ["Migrate from MySQL to Supabase", "Migration, Database", "/kb/guides/migrate-from-mysql"],
  ["Migrate from Neon to Supabase", "Migration, Database", "/kb/guides/migrate-from-neon"],
  ["Migrate from Postgres to Supabase", "Migration, Database", "/kb/guides/migrate-from-postgres"],
  ["Migrate from Render to Supabase", "Migration, Database", "/kb/guides/migrate-from-render"],
]

const filters = ["All", "Storage", "Auth", "Database", "Edge Functions", "Realtime", "Platform"]

export function KnowledgeBase() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("All")
  const matches = (title: string, category: string) =>
    (!query || `${title} ${category}`.toLowerCase().includes(query.toLowerCase())) &&
    (filter === "All" || category.includes(filter))
  const troubleshootingVisible = useMemo(() => troubleshooting.filter(([title, category]) => matches(title, category)), [query, filter])
  const guidesVisible = useMemo(() => allGuides.filter(([title, category]) => matches(title, category)), [query, filter])

  return (
    <main className="bg-background pt-16 text-foreground">
      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24">
          <BookOpen className="mx-auto mb-5 size-9 text-primary" aria-hidden="true" />
          <h1 className="text-4xl tracking-tight sm:text-6xl">Knowledge base</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">In-depth guides, tutorials, troubleshooting, and explainers for best practices for Supabase</p>
          <div className="relative mx-auto mt-8 max-w-xl">
            <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides" className="h-12 pl-11 pr-20 text-base" aria-label="Search guides" />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-muted px-2 py-1 text-xs text-muted-foreground">⌘K</kbd>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 sm:py-24">
        <section>
          <SectionHeading eyebrow="Featured topics" title="Start with the essentials" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {topics.map(({ title, description, href, icon: Icon }) => (
              <a href={href} key={title} className="group">
                <Card className="border-border transition-colors group-hover:bg-muted/50">
                  <CardContent className="flex items-center gap-4 p-5">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></span>
                    <span className="flex-1"><strong className="block text-lg">{title}</strong><span className="text-sm text-muted-foreground">{description}</span></span>
                    <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Featured guides" title="Popular migration guides" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredGuides.map(([title, description, href]) => <GuideCard key={href} title={title} description={description} href={href} />)}
          </div>
        </section>

        <GuideList title="Troubleshooting" icon={<Wrench className="size-5" aria-hidden="true" />} count={troubleshootingVisible.length} filters={filters} filter={filter} setFilter={setFilter} items={troubleshootingVisible} />
        <GuideList title="All guides" count={guidesVisible.length} filters={["All", "Storage", "Auth", "Database"]} filter={filter} setFilter={setFilter} items={guidesVisible} />
      </div>
    </main>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div><span className="font-mono text-sm uppercase tracking-widest text-primary">{eyebrow}</span><h2 className="mt-3 text-3xl tracking-tight sm:text-4xl">{title}</h2></div>
}

function GuideCard({ title, description, href }: { title: string; description: string; href: string }) {
  return <a href={href} className="group"><Card className="h-full border-border transition-colors group-hover:bg-muted/50"><CardContent className="flex h-full flex-col gap-3 p-5"><h3 className="text-lg leading-snug">{title}</h3><p className="flex-1 text-sm text-muted-foreground">{description}</p><span className="flex items-center gap-1 text-sm text-primary">Read guide <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></CardContent></Card></a>
}

function GuideList({ title, icon, count, filters, filter, setFilter, items }: { title: string; icon?: React.ReactNode; count: number; filters: string[]; filter: string; setFilter: (value: string) => void; items: string[][] }) {
  return <section><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div className="flex items-center gap-2"><span className="text-primary">{icon}</span><h2 className="text-3xl tracking-tight sm:text-4xl">{title}</h2></div><span className="text-sm text-muted-foreground">{count} of {title === "Troubleshooting" ? 231 : 11} guides shown</span></div><div className="mt-6 flex flex-wrap gap-2">{filters.map((item) => <Button key={item} size="sm" variant={filter === item ? "default" : "outline"} onClick={() => setFilter(item)}>{item}</Button>)}</div><Accordion type="multiple" className="mt-6">{items.map(([itemTitle, category, href], index) => <AccordionItem key={href} value={`${title}-${index}`} className="border-border"><AccordionTrigger className="text-left hover:no-underline"><span className="pr-4">{itemTitle}</span></AccordionTrigger><AccordionContent><div className="flex items-center justify-between gap-4"><Badge variant="secondary">{category}</Badge><a href={href} className="flex items-center gap-1 text-sm text-primary">Open guide <ChevronRight className="size-4" aria-hidden="true" /></a></div></AccordionContent></AccordionItem>)}</Accordion></section>
}
