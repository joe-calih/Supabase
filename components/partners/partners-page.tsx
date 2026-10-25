"use client"

import { useMemo, useState } from "react"
import {
  AppWindow,
  Blocks,
  Box,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Filter,
  KeyRound,
  Layers3,
  MessageSquare,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Webhook,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

const categories = [
  ["AI", Sparkles], ["API", Webhook], ["App Templates", AppWindow], ["Auth", KeyRound],
  ["Caching / Offline-First", Layers3], ["Data Platform", Database], ["DevTools", Cpu],
  ["Foreign Data Wrapper", Network], ["Low-Code", Blocks], ["Messaging", MessageSquare],
  ["Observability", Code2], ["Security", ShieldCheck], ["Storage", Box],
] as const

const partners = [
  ["BigQuery", "Data Platform"], ["ClickHouse", "Data Platform"], ["Cloudflare", "DevTools"],
  ["Dreambase", "App Templates"], ["Firebase", "API"], ["Grafana", "Observability"],
  ["Marmelab", "DevTools"], ["PowerSync", "Caching / Offline-First"], ["Resend", "Messaging"],
  ["Stripe", "API"], ["Trigger.dev", "DevTools"], ["Vercel", "DevTools"],
  ["Windmill Labs", "Low-Code"], ["Springtail", "Security"], ["Windsor.ai", "Data Platform"],
  ["Zuplo", "API"], ["Google Gemini", "AI"], ["Deltecs Infotech", "DevTools"],
  ["Bemi", "Data Platform"], ["CipherStash", "Security"], ["Clutch", "App Templates"],
  ["Stacksync", "Caching / Offline-First"], ["Perplexity", "AI"], ["AutoSend", "Messaging"],
  ["ILLA", "Low-Code"], ["Apache Software Foundation", "DevTools"], ["Invertase", "DevTools"],
  ["Infisical", "Security"], ["Clerk", "Auth"], ["Auth0", "Auth"], ["Astrato Analytics", "Observability"],
  ["BerriAI", "AI"], ["Readyset", "Caching / Offline-First"], ["Byteline Sync", "Low-Code"],
  ["Buster", "Data Platform"], ["ParadeDB", "Data Platform"], ["Microsoft", "API"],
  ["Basedash", "App Templates"], ["Inworld AI", "AI"], ["YepCode", "DevTools"], ["Spice AI", "AI"],
].map(([name, category], index) => ({ name, category, index }))

export function PartnersPage() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [filtersOpen, setFiltersOpen] = useState(false)
  const filtered = useMemo(() => partners.filter(({ name, category }) =>
    (!query || name.toLowerCase().includes(query.toLowerCase())) &&
    (!selected.length || selected.includes(category)),
  ), [query, selected])

  const toggleCategory = (category: string) => {
    setSelected((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category])
  }

  return (
    <main className="bg-background pt-16 text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
        <div className="mb-8 flex flex-col gap-3">
          <span className="font-mono text-sm uppercase tracking-widest text-primary">Partner Catalog</span>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-balance text-3xl tracking-tight sm:text-5xl">Partners building with Supabase</h1>
              <p className="mt-3 max-w-2xl text-balance text-lg text-muted-foreground">Browse companies that build on Supabase, integrate with Supabase, or both.</p>
            </div>
            <Button asChild className="shrink-0"><a href="/partners#become-a-partner">Apply as a Partner</a></Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <aside aria-label="Filters" className="flex flex-col gap-4 md:sticky md:top-20 md:self-start">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search partners" className="h-[34px] pl-8" />
              </div>
              <Button type="button" variant="outline" size="sm" className="md:hidden" onClick={() => setFiltersOpen((open) => !open)} aria-expanded={filtersOpen}>
                <Filter className="size-4" aria-hidden="true" /> Filters
              </Button>
            </div>
            <div className={`${filtersOpen ? "flex" : "hidden"} flex-col gap-4 md:flex`}>
              <h2 className="font-mono text-xs uppercase text-muted-foreground">Categories</h2>
              <div className="flex flex-col gap-2.5">
                {categories.map(([label, Icon]) => (
                  <label key={label} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    <span className="flex items-center gap-2"><Icon className="size-[13px]" aria-hidden="true" />{label}</span>
                    <Checkbox checked={selected.includes(label)} onCheckedChange={() => toggleCategory(label)} aria-label={`Filter by ${label}`} />
                  </label>
                ))}
              </div>
              {selected.length > 0 && <Button variant="ghost" size="sm" className="w-fit px-0 text-xs" onClick={() => setSelected([])}><Check className="size-3" /> Clear filters</Button>}
            </div>
          </aside>

          <section className="space-y-10 md:col-span-3" aria-live="polite">
            <PartnerGroup title="Featured" items={partners.slice(0, 15)} />
            <PartnerGroup title="All partners" items={filtered} />
          </section>
        </div>
      </div>
    </main>
  )
}

function PartnerGroup({ title, items }: { title: string; items: typeof partners }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl tracking-tight">{title}</h2>
        <ChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((partner) => (
          <Card key={`${title}-${partner.name}-${partner.index}`} className="group border-border bg-card transition-colors hover:bg-muted/60">
            <CardContent className="flex min-h-28 flex-col justify-between gap-4 p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-md border border-border bg-muted text-sm font-semibold text-primary">{partner.name.slice(0, 1)}</div>
                <h3 className="text-sm font-medium">{partner.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{partner.category}</p>
            </CardContent>
          </Card>
        ))}
        {!items.length && <p className="text-sm text-muted-foreground">No partners match your filters.</p>}
      </div>
    </section>
  )
}
