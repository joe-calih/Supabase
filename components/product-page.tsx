import Link from "next/link"
import { ArrowRight, Check, Code2, Database, Globe2, KeyRound, LockKeyhole, Radio, Server, ShieldCheck, Upload, Users, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductNav } from "@/components/product-nav"
import { Navbar } from "@/components/homepage/navbar"
import { Footer } from "@/components/homepage/footer"

type Product = "database" | "auth" | "storage" | "realtime"

const config: Record<Product, {
  label: string
  title: string
  accent: string
  description: string
  icon: LucideIcon
  features: Array<[string, string, LucideIcon]>
  cards: Array<[string, string]>
}> = {
  database: {
    label: "Database",
    title: "The world's most loved database",
    accent: "Postgres for every project",
    description: "Every Supabase project comes with a full Postgres database. Build with the world's most advanced open source relational database, with no vendor lock-in.",
    icon: Database,
    features: [["Fully portable", "A full Postgres database that you can take anywhere.", Database], ["Built for scale", "Connection pooling, read replicas, and powerful extensions.", Zap], ["Secure by default", "Row Level Security gives you granular control over every row.", LockKeyhole], ["Instant APIs", "Auto-generated REST and GraphQL APIs for every table.", Code2]],
    cards: [["Postgres, without the overhead", "Manage schemas, extensions, backups, and migrations from a beautiful dashboard."], ["A database that grows with you", "Start small and scale to millions of rows without changing your architecture."], ["Built-in observability", "Inspect queries, logs, indexes, and performance in one place."]],
  },
  auth: {
    label: "Auth",
    title: "Authentication for every app",
    accent: "Secure your users in minutes",
    description: "Add authentication and authorization to your application with email, passwordless, social login, and enterprise providers out of the box.",
    icon: KeyRound,
    features: [["Every provider", "Connect Google, GitHub, Apple, Azure, and dozens of other providers.", Users], ["Row Level Security", "Use user identity directly in your database policies.", ShieldCheck], ["Passwordless login", "Magic links and one-time passwords with no custom email service.", KeyRound], ["Enterprise ready", "SAML SSO, custom claims, and multi-factor authentication.", LockKeyhole]],
    cards: [["Sign up your way", "Give users a fast, familiar login experience with the providers they already use."], ["Identity in your database", "Auth users are first-class Postgres records that work with your application data."], ["Protect every request", "Issue secure tokens and enforce access rules at the database layer."]],
  },
  storage: {
    label: "Storage",
    title: "Store and serve files at any scale",
    accent: "Files, folders, and buckets",
    description: "Store images, videos, documents, and any other file type with fine-grained access controls and fast global delivery.",
    icon: Upload,
    features: [["Global delivery", "Serve files quickly from a CDN close to your users.", Globe2], ["Access controls", "Use policies to control who can upload, download, or transform files.", ShieldCheck], ["Image transformations", "Resize, crop, and optimize images on demand.", Zap], ["Simple uploads", "Upload directly from the browser or through the Storage API.", Upload]],
    cards: [["Organize your files", "Buckets and folders make it simple to keep user content structured."], ["Private or public", "Choose public assets for speed or private files with signed URLs."], ["Your data, your rules", "Storage policies use the same Row Level Security model as your database."]],
  },
  realtime: {
    label: "Realtime",
    title: "Build collaborative experiences",
    accent: "Data that moves at the speed of your users",
    description: "Listen to database changes, broadcast messages, and synchronize presence so your application always feels alive.",
    icon: Radio,
    features: [["Postgres changes", "Subscribe to inserts, updates, and deletes from any table.", Database], ["Broadcast", "Send low-latency messages between clients.", Radio], ["Presence", "Track which users are online and what they are doing.", Users], ["Secure channels", "Protect realtime connections with your existing auth policies.", LockKeyhole]],
    cards: [["Live by default", "Turn any Postgres table into a realtime data source with a few lines of code."], ["Keep everyone in sync", "Build multiplayer editors, dashboards, chats, and notifications."], ["Reliable connections", "Automatic reconnects and scalable channels keep your app responsive."]],
  },
}

export function ProductPage({ product }: { product: Product }) {
  const page = config[product]
  const Icon = page.icon
  return (
    <main className="min-h-screen bg-background">
      <Navbar align="left" />
      <div className="pt-[73px]"><ProductNav activeHref={`/${product}`} align="left" /></div>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-primary"><Icon className="size-6" /><span className="font-mono text-xs uppercase tracking-[0.25em]">{page.label}</span></div>
          <h1 className="text-5xl font-medium tracking-tight sm:text-7xl">{page.title}</h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">{page.description}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild><Link href="/signup">Start your project <ArrowRight className="size-4" /></Link></Button><Button variant="outline" asChild><Link href="#features">Explore {page.label} <ArrowRight className="size-4" /></Link></Button></div>
        </div>
      </section>
      <section id="features" className="border-y border-border bg-card/40"><div className="mx-auto max-w-6xl px-6 py-24"><p className="font-mono text-xs uppercase tracking-widest text-primary">{page.accent}</p><h2 className="mt-4 text-4xl tracking-tight">Everything you need to ship</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{page.features.map(([title, description, FeatureIcon]) => <div key={title}><FeatureIcon className="size-6 text-primary" /><h3 className="mt-5 font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p></div>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-5 md:grid-cols-3">{page.cards.map(([title, description]) => <Card key={title}><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent className="text-sm leading-6 text-muted-foreground">{description}</CardContent></Card>)}</div></section>
      <section className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-24"><div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-14"><h2 className="max-w-2xl text-4xl tracking-tight">Build with {page.label} today</h2><p className="mt-5 max-w-xl">Start with a free Supabase project and ship your next idea faster.</p><Button className="mt-8 bg-background text-foreground hover:bg-background/90" asChild><Link href="/signup">Start your project <ArrowRight className="size-4" /></Link></Button></div></div></section>
      <Footer />
    </main>
  )
}
