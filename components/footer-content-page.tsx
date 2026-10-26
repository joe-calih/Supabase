import { Footer } from "@/components/homepage/footer"
import { Navbar } from "@/components/homepage/navbar"

export function FooterContentPage({ eyebrow, title, description, sections }: { eyebrow: string; title: string; description: string; sections: Array<[string, string, string]> }) {
  return <main className="min-h-screen bg-background"><Navbar /><section className="mx-auto max-w-6xl px-6 py-40"><p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl tracking-tight sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">{description}</p></section><section className="border-y border-border bg-card/40"><div className="mx-auto max-w-6xl px-6 py-24 space-y-16">{sections.map(([heading, body, detail]) => <article key={heading} className="grid gap-6 border-b border-border pb-12 last:border-0 last:pb-0 md:grid-cols-[.8fr_1.2fr]"><h2 className="text-3xl tracking-tight">{heading}</h2><div className="space-y-4 leading-8 text-muted-foreground"><p>{body}</p><p>{detail}</p></div></article>)}</div></section><Footer /></main>
}
