import Link from "next/link"
import { ArrowRight, Check, Globe2, LockKeyhole, MonitorCog, Terminal, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductNav } from "@/components/product-nav"
import { Navbar } from "@/components/homepage/navbar"

const examples = [
  ["Sending Emails", "Send emails in Edge Functions with Resend."],
  ["Generating OpenAI GPT3 completions", "Using OpenAI in Edge Functions."],
  ["Stripe Webhooks", "Handling signed Stripe Webhooks with Edge Functions."],
  ["Connecting directly to Postgres", "Connecting to Postgres from Edge Functions."],
  ["Huggingface Image Captioning", "Use the Hugging Face Inference API to make calls to 100,000+ Machine Learning models from Supabase Edge Functions."],
  ["Upload files to Storage", "Process multipart/form-data."],
]

const benefits: Array<[string, string, LucideIcon]> = [
  ["Global presence", "Edge functions run globally or can be pinned to your database's proximity", Globe2],
  ["Automatic scaling", "Seamlessly scale with usage without any manual tuning", Zap],
  ["Secure", "Scale with confidence with SSL, Firewall and DDOS protection built in", LockKeyhole],
  ["Debug and monitor with built-in observability", "Monitor, debug, and optimize your Edge Functions with realtime logs, queryable log explorer, and health dashboards — all built into the Supabase Dashboard.", MonitorCog],
]

export default function EdgeFunctionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[73px]"><ProductNav /></div>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-primary">Edge Functions</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight sm:text-7xl">
          Edge Functions <span className="text-primary">globally in seconds</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
          Author, deploy, and monitor serverless functions distributed globally at the edge, close to your users.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild><Link href="/signup">Start your project</Link></Button>
          <Button variant="outline" asChild><Link href="#content">Documentation <ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>

      <section id="content" className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-16 sm:grid-cols-3">
          <Card><CardHeader><Globe2 className="mb-3 size-6 text-primary" /><CardTitle>Fully managed</CardTitle></CardHeader><CardContent className="text-muted-foreground">Edge Functions scale automatically, reducing your devops burden.</CardContent></Card>
          <Card><CardHeader><Zap className="mb-3 size-6 text-primary" /><CardTitle>Global deployments</CardTitle></CardHeader><CardContent className="text-muted-foreground">Deploy worldwide for maximum resiliency and low latency.</CardContent></Card>
          <Card><CardHeader><LockKeyhole className="mb-3 size-6 text-primary" /><CardTitle>Secure and Scalable</CardTitle></CardHeader><CardContent className="text-muted-foreground">Simply write your code in TypeScript and deploy.</CardContent></Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div><p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Built for developers</p><h2 className="text-4xl tracking-tight sm:text-5xl">The thing that makes everything possible</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Edge Functions are developed using <span className="text-foreground">Deno</span>, an open source JavaScript runtime that ensures maximum power and flexibility. Migrate in and out at any time with no vendor lock-in.</p><Button className="mt-8" variant="outline" asChild><Link href="#deploy">Learn more <ArrowRight className="size-4" /></Link></Button></div>
          <div className="rounded-xl border border-border bg-zinc-950 p-5 font-mono text-sm text-zinc-300 shadow-2xl"><div className="mb-5 flex items-center gap-2 text-zinc-500"><Terminal className="size-4" /> supabase functions serve</div><pre className="overflow-x-auto leading-7"><code><span className="text-purple-300">import</span> {"{ createClient }"} <span className="text-purple-300">from</span> <span className="text-emerald-300">&quot;jsr:@supabase/supabase-js@2&quot;</span>{"\n\n"}Deno.<span className="text-emerald-300">serve</span>(<span className="text-purple-300">async</span> () =&gt; {"{\n  "} <span className="text-zinc-500">{"// These are automatically available — no setup needed"}</span>{"\n  "} <span className="text-purple-300">const</span> supabase = createClient(...){'\n  '}<span className="text-purple-300">const</span> {"{ data }"} = <span className="text-purple-300">await</span> supabase.from(<span className="text-emerald-300">&apos;todos&apos;</span>).select(<span className="text-emerald-300">&apos;*&apos;</span>){'\n  '}<span className="text-purple-300">return new</span> Response(JSON.stringify(data)){'\n}'}</code></pre></div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40"><div className="mx-auto max-w-6xl px-6 py-24"><h2 className="text-4xl tracking-tight">What you can build with Edge Functions</h2><p className="mt-3 text-muted-foreground">View all examples</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{examples.map(([title, description]) => <Card key={title} className="transition-colors hover:border-primary/60"><CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{description}</CardContent></Card>)}</div></div></section>

      <section className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title, description, Icon]) => <div key={title as string}><Icon className="size-6 text-primary" /><h3 className="mt-5 font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p></div>)}</div></section>
      <section id="deploy" className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-24"><div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-14"><p className="font-mono text-xs uppercase tracking-widest">Documentation</p><h2 className="mt-5 max-w-2xl text-4xl tracking-tight">Deploy your first function in under a minute</h2><p className="mt-5 max-w-xl">Two commands. Global deployment. No infrastructure to manage.</p><div className="mt-8 flex flex-wrap gap-3">{["supabase functions new hello-world", "supabase functions deploy hello-world"].map((command) => <code key={command} className="rounded-md bg-black/15 px-4 py-3 text-sm">{command}</code>)}</div><Button className="mt-8 bg-background text-foreground hover:bg-background/90" asChild><Link href="/signup">Start your project <ArrowRight className="size-4" /></Link></Button></div></div></section>
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">Access your database, auth, storage, and webhooks directly from Edge Functions with zero configuration.</footer>
    </main>
  )
}
