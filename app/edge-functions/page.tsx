import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/edge-functions")
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Database, Globe2, HardDrive, LockKeyhole, MonitorCog, Shield, Terminal, Webhook, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductNav } from "@/components/product-nav"
import { Navbar } from "@/components/homepage/navbar"
import { Footer } from "@/components/homepage/footer"

const benefits: Array<[string, string, LucideIcon]> = [
  ["Global presence", "Edge functions run globally or can be pinned to your database's proximity", Globe2],
  ["Automatic scaling", "Seamlessly scale with usage without any manual tuning", Zap],
  ["Secure", "Scale with confidence with SSL, Firewall and DDOS protection built in", LockKeyhole],
  ["Debug and monitor with built-in observability", "Monitor, debug, and optimize your Edge Functions with realtime logs, queryable log explorer, and health dashboards — all built into the Supabase Dashboard.", MonitorCog],
]

export default function EdgeFunctionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar align="left" />
      <div className="pt-[73px]"><ProductNav activeHref="/edge-functions" align="left" /></div>
      
      {/* Hero Section */}
      <section className="border-t border-border" aria-label="Hero">
        <div className="mx-auto max-w-6xl px-6 relative py-16 md:py-18 lg:py-24 space-y-8 md:space-y-16">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
              <h1 className="text-foreground text-3xl sm:text-5xl sm:leading-none">
                <span className="block">Edge Functions</span>
                <span className="text-muted-foreground block">globally in seconds</span>
              </h1>
              <p className="text-muted-foreground text-sm lg:text-base">
                Author, deploy, and monitor serverless functions distributed globally at the edge, close to your users.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild>
                <Link href="/signup">Start your project</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/guides/functions">Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 relative -mt-8 mb-8 md:mb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-3">
                <div className="text-muted-foreground" aria-hidden="true">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.8217 2.21899C9.75065 2.21899 8.07174 3.89791 8.07174 5.96896V11.783C8.07174 11.8536 8.08148 11.9218 8.0997 11.9866C8.17354 12.3232 8.47349 12.5752 8.83229 12.5752H10.5494C10.8626 12.5752 11.1749 12.8513 11.1749 13.2656V15.0638C11.1749 15.3165 11.2998 15.54 11.4913 15.6759C11.6177 15.7729 11.7759 15.8306 11.9476 15.8306H17.9997C20.0707 15.8306 21.7496 14.1517 21.7496 12.0806V5.96896C21.7496 3.89791 20.0707 2.21899 17.9997 2.21899H11.8217ZM12.6749 14.3307H17.9997C19.2423 14.3307 20.2497 13.3233 20.2497 12.0806L20.2497 5.96896C20.2497 4.7263 19.2423 3.71893 17.9997 3.71893H11.8217C10.579 3.71893 9.57167 4.7263 9.57167 5.96896V11.0752H10.5494C10.9115 11.0752 11.2478 11.1666 11.5412 11.3263C11.5507 11.3157 11.5605 11.3052 11.5708 11.295L15.5026 7.36084L12.6816 7.36066C12.2674 7.36063 11.9316 7.02482 11.9317 6.61061C11.9317 6.1964 12.2675 5.86063 12.6817 5.86066L16.543 5.86091C17.3714 5.86096 18.0429 6.53248 18.0429 7.36085L18.0431 11.2597C18.0431 11.6739 17.7073 12.0097 17.2931 12.0097C16.8789 12.0097 16.5431 11.674 16.5431 11.2598L16.543 8.44186L12.6317 12.3553C12.597 12.3901 12.5597 12.4207 12.5205 12.4472C12.6204 12.7022 12.6749 12.9791 12.6749 13.2656V14.3307Z" fill="currentColor"></path>
                    <path d="M4.53957 11.0752H6.25666C6.7087 11.0752 7.00666 11.411 7.00666 11.8252C7.00666 12.2394 6.67087 12.5752 6.25666 12.5752H4.53957C4.22636 12.5752 3.91406 12.8513 3.91406 13.2656L3.91406 15.0638C3.91406 15.4781 3.57828 15.8138 3.16406 15.8138C2.74985 15.8138 2.41406 15.4781 2.41406 15.0638V13.2656C2.41406 12.0889 3.33344 11.0752 4.53957 11.0752Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h3 className="text-foreground text-base font-medium">Fully managed</h3>
                <p className="text-muted-foreground text-sm">Edge Functions scale automatically, reducing your devops burden</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-3">
                <div className="text-muted-foreground" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.4px]">
                    <circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-foreground text-base font-medium">Global deployments</h3>
                <p className="text-muted-foreground text-sm">Deploy worldwide for maximum resiliency and low latency</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-3">
                <div className="text-muted-foreground" aria-hidden="true">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7377 6.5363C14.145 6.61196 14.4138 7.00343 14.3381 7.41068L12.5869 16.8366C12.5112 17.2438 12.1197 17.5126 11.7125 17.437C11.3052 17.3613 11.0364 16.9698 11.1121 16.5626L12.8633 7.13669C12.939 6.72944 13.3305 6.46064 13.7377 6.5363Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h3 className="text-foreground text-base font-medium">Secure and Scalable</h3>
                <p className="text-muted-foreground text-sm">Simply write your code in TypeScript and deploy</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-3">
                <div className="text-muted-foreground" aria-hidden="true">
                  <svg className="w-5 h-5" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9233 0.444469C12.6102 0.0512999 13.5049 0.049524 14.1912 0.444469C17.6439 2.39542 21.0976 4.3433 24.5497 6.29543C25.199 6.66117 25.6333 7.38378 25.6267 8.13193V19.8696C25.6315 20.6487 25.1543 21.3886 24.4693 21.746C21.028 23.6862 17.5884 25.6288 14.1477 27.569C13.4466 27.9698 12.5339 27.939 11.8547 27.5052C10.823 26.9072 9.78955 26.312 8.75774 25.7145Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h3 className="text-foreground text-base font-medium">Node.js Support</h3>
                <p className="text-muted-foreground text-sm">Migrate existing workloads with NPM and Node.js support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Quote Section */}
      <section id="quote" className="border-t border-border border-b" aria-label="Customer quote">
        <figure>
          <div className="mx-auto max-w-6xl px-6 relative border-x border-border bg-card/20">
            <div className="flex flex-col items-center text-center gap-8 md:gap-12 py-16 md:py-24">
              <blockquote className="text-2xl xl:text-4xl tracking-tight max-w-screen-lg text-muted-foreground text-balance">
                <p>
                  The thing that makes everything possible, all of our rapid development now and AI-generated or assisted development, is Supabase.{" "}
                  <span className="text-primary">That&apos;s the giant whose shoulders we can stand on.</span>
                </p>
              </blockquote>
              <figcaption>
                <Link className="hover:opacity-90 transition-opacity" href="/customers/exprealty">
                  <div className="flex flex-row items-center gap-3">
                    <Image
                      draggable="false"
                      alt="Seth Siegler"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full overflow-hidden object-cover"
                      src="/images/blog/avatars/seth-siegler.jpg"
                    />
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-foreground text-sm font-medium">Seth Siegler</span>
                      <span className="text-muted-foreground text-xs">Chief Innovation Officer at eXp Realty</span>
                    </div>
                  </div>
                </Link>
              </figcaption>
            </div>
          </div>
        </figure>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Built for developers</p>
            <h2 className="text-4xl tracking-tight sm:text-5xl">The thing that makes everything possible</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Edge Functions are developed using <span className="text-foreground">Deno</span>, an open source JavaScript runtime that ensures maximum power and flexibility. Migrate in and out at any time with no vendor lock-in.</p>
            <Button className="mt-8" variant="outline" asChild><Link href="#deploy">Learn more <ArrowRight className="size-4" /></Link></Button>
          </div>
          <div className="rounded-xl border border-border bg-zinc-950 p-5 font-mono text-sm text-zinc-300 shadow-2xl">
            <div className="mb-5 flex items-center gap-2 text-zinc-500"><Terminal className="size-4" /> supabase functions serve</div>
            <pre className="overflow-x-auto leading-7"><code><span className="text-purple-300">import</span> {"{ createClient }"} <span className="text-purple-300">from</span> <span className="text-emerald-300">&quot;jsr:@supabase/supabase-js@2&quot;</span>{"\n\n"}Deno.<span className="text-emerald-300">serve</span>(<span className="text-purple-300">async</span> () =&gt; {"{\n  "} <span className="text-zinc-500">{"// These are automatically available — no setup needed"}</span>{"\n  "} <span className="text-purple-300">const</span> supabase = createClient(...){'\n  '}<span className="text-purple-300">const</span> {"{ data }"} = <span className="text-purple-300">await</span> supabase.from(<span className="text-emerald-300">&apos;todos&apos;</span>).select(<span className="text-emerald-300">&apos;*&apos;</span>){'\n  '}<span className="text-purple-300">return new</span> Response(JSON.stringify(data)){'\n}'}</code></pre>
          </div>
        </div>
      </section>

      {/* Example Projects Section */}
      <section id="examples" className="border-t border-border" aria-label="Example projects">
        <div className="mx-auto max-w-6xl px-6 relative py-16 md:py-18 lg:py-24 space-y-8 md:space-y-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h3 className="text-2xl md:text-4xl text-muted-foreground max-w-xl">
              What you can build <br />
              <span className="text-foreground">with Edge Functions</span>
            </h3>
            <Link href="/docs/guides/functions#examples" className="text-sm text-muted-foreground hover:text-foreground underline">
              View all examples
            </Link>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-card border border-border rounded-lg px-6 py-8" href="https://supabase.com/docs/guides/functions/examples/send-emails">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/images/logos/resend-wordmark.svg" alt="" className="h-4 w-auto object-contain dark:invert" />
                </div>
                <h4 className="text-foreground text-sm font-medium">Sending Emails</h4>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">Send emails in Edge Functions with Resend.</p>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-card border border-border rounded-lg px-6 py-8" href="https://supabase.com/docs/guides/ai/examples/openai">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/images/logos/frameworks/openai.svg" alt="" className="h-5 w-5 object-contain dark:invert" />
                </div>
                <h4 className="text-foreground text-sm font-medium">Generating OpenAI GPT3 completions</h4>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">Using OpenAI in Edge Functions.</p>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
              <a target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-card border border-border rounded-lg px-6 py-10" href="https://supabase.com/docs/guides/functions/examples/stripe-webhooks">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/images/logos/frameworks/stripe.svg" alt="" className="h-7 w-auto object-contain" />
                </div>
                <h4 className="text-foreground text-sm font-medium">Stripe Webhooks</h4>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">Handling signed Stripe Webhooks with Edge Functions.</p>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-card border border-border rounded-lg px-6 py-10" href="https://supabase.com/docs/guides/functions/connect-to-postgres">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/images/product/database/postgresql-icon.svg" alt="" className="h-5 w-5 object-contain" />
                </div>
                <h4 className="text-foreground text-sm font-medium">Connecting directly to Postgres</h4>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">Connecting to Postgres from Edge Functions.</p>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-card border border-border rounded-lg px-6 py-10" href="https://supabase.com/docs/guides/ai/examples/huggingface-image-captioning">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/images/logos/hugging-face-icon.svg" alt="" className="h-5 w-5 object-contain" />
                </div>
                <h4 className="text-foreground text-sm font-medium">Huggingface Image Captioning</h4>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">Use the Hugging Face Inference API to make calls to 100,000+ Machine Learning models from Supabase Edge Functions.</p>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-card border border-border rounded-lg px-6 py-10" href="https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions/file-upload-storage">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/images/supabase-logo-icon.svg" alt="" className="h-5 w-5 object-contain" />
                </div>
                <h4 className="text-foreground text-sm font-medium">Upload files to Storage</h4>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">Process multipart/form-data.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="border-y border-border" aria-label="Supabase integrations">
        <div className="mx-auto max-w-6xl px-6 relative py-16 md:py-18 lg:py-24 space-y-8 md:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
            <h3 className="text-2xl md:text-4xl text-muted-foreground max-w-xl text-balance">
              Integrates with the <span className="text-foreground">Supabase ecosystem</span>
            </h3>
            <p className="text-muted-foreground text-sm lg:text-base">
              Access your database, auth, storage, and webhooks directly from Edge Functions with zero configuration.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div role="tablist" aria-label="Edge Functions integrations" className="flex flex-col gap-1 items-start justify-end">
              <button tabIndex={0} role="tab" aria-selected="false" aria-controls="ef-integrates-panel-0" id="ef-integrates-tab-0" className="text-left flex items-center gap-3 py-2 text-2xl transition-colors text-muted-foreground hover:text-foreground">
                <Zap className="w-[22px] h-[22px]" /> Zero configuration
              </button>
              <button tabIndex={0} role="tab" aria-selected="true" aria-controls="ef-integrates-panel-1" id="ef-integrates-tab-1" className="text-left flex items-center gap-3 py-2 text-2xl transition-colors text-foreground">
                <Database className="w-[22px] h-[22px]" /> Connect to your database
              </button>
              <button tabIndex={0} role="tab" aria-selected="false" aria-controls="ef-integrates-panel-2" id="ef-integrates-tab-2" className="text-left flex items-center gap-3 py-2 text-2xl transition-colors text-muted-foreground hover:text-foreground">
                <Webhook className="w-[22px] h-[22px]" /> Trigger via webhook
              </button>
              <button tabIndex={0} role="tab" aria-selected="false" aria-controls="ef-integrates-panel-3" id="ef-integrates-tab-3" className="text-left flex items-center gap-3 py-2 text-2xl transition-colors text-muted-foreground hover:text-foreground">
                <Shield className="w-[22px] h-[22px]" /> Works with Supabase Auth
              </button>
              <button tabIndex={0} role="tab" aria-selected="false" aria-controls="ef-integrates-panel-4" id="ef-integrates-tab-4" className="text-left flex items-center gap-3 py-2 text-2xl transition-colors text-muted-foreground hover:text-foreground">
                <HardDrive className="w-[22px] h-[22px]" /> Works with Supabase Storage
              </button>
            </div>
            
            <div role="tabpanel" id="ef-integrates-panel-1" aria-labelledby="ef-integrates-tab-1" className="flex flex-col self-end border border-border rounded-md overflow-clip bg-zinc-950">
              <div className="relative shrink-0 overflow-hidden" style={{ height: '379px' }}>
                <div className="overflow-x-auto p-6 text-zinc-200 font-mono text-[13px] leading-relaxed">
                  <code>
                    <span className="text-purple-400">const</span> <span className="text-emerald-400">supabase</span> = <span className="text-emerald-400">createClient</span>(
                    <br />
                    &nbsp;&nbsp;Deno.env.<span className="text-emerald-400">get</span>(<span className="text-amber-300">&apos;SUPABASE_URL&apos;</span>)<span className="text-purple-400">!</span>,
                    <br />
                    &nbsp;&nbsp;Deno.env.<span className="text-emerald-400">get</span>(<span className="text-amber-300">&apos;SUPABASE_ANON_KEY&apos;</span>)<span className="text-purple-400">!</span>,
                    <br />
                    &nbsp;&nbsp;&lcub;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">global</span>: &lcub;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">headers</span>: &lcub;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">Authorization</span>: req.headers.<span className="text-emerald-400">get</span>(<span className="text-amber-300">&apos;Authorization&apos;</span>)<span className="text-purple-400">!</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rcub;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&rcub;
                    <br />
                    &nbsp;&nbsp;&rcub;
                    <br />
                    )
                    <br /><br />
                    <span className="text-purple-400">const</span> &lcub; <span className="text-emerald-400">data</span>, <span className="text-emerald-400">error</span> &rcub; = <span className="text-purple-400">await</span> supabase
                    <br />
                    &nbsp;&nbsp;.<span className="text-emerald-400">from</span>(<span className="text-amber-300">&apos;countries&apos;</span>)
                    <br />
                    &nbsp;&nbsp;.<span className="text-emerald-400">select</span>(<span className="text-amber-300">&apos;*&apos;</span>)
                  </code>
                </div>
              </div>
              <div className="border-t border-border px-6 py-4 flex items-center gap-8 justify-between bg-card">
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-medium text-foreground">Connect to your database</h4>
                  <p className="text-sm text-muted-foreground">Connect to your Postgres database from an Edge Function using the supabase-js client</p>
                </div>
                <a href="/docs/guides/functions" className="flex items-center gap-1.5 rounded-full bg-muted border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap shrink-0">
                  Documentation
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden="true">
                    <path d="M3.5 2.5H9.5V8.5M9.5 2.5L2.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, description, Icon]) => (
            <div key={title as string}>
              <Icon className="size-6 text-primary" />
              <h3 className="mt-5 font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="deploy" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-14">
            <p className="font-mono text-xs uppercase tracking-widest">Documentation</p>
            <h2 className="mt-5 max-w-2xl text-4xl tracking-tight">Deploy your first function in under a minute</h2>
            <p className="mt-5 max-w-xl">Two commands. Global deployment. No infrastructure to manage.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["supabase functions new hello-world", "supabase functions deploy hello-world"].map((command) => (
                <code key={command} className="rounded-md bg-black/15 px-4 py-3 text-sm">{command}</code>
              ))}
            </div>
            <Button className="mt-8 bg-background text-foreground hover:bg-background/90" asChild>
              <Link href="/signup">Start your project <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}