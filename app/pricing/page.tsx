import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/pricing")
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/homepage/navbar"
import { Footer } from "@/components/homepage/footer"
import { Button } from "@/components/ui/button"

const plans: Array<[string, string, string[]]> = [["Free", "$0", ["Unlimited API requests", "50,000 monthly active users", "500 MB database"]], ["Pro", "$25", ["8 GB database", "100,000 monthly active users", "Daily backups"]], ["Team", "$599", ["SOC 2 compliance", "Priority support", "Advanced security"]]]
export default function PricingPage() {
  return <main className="min-h-screen bg-background"><Navbar /><section className="mx-auto max-w-6xl px-6 pb-20 pt-40 text-center"><p className="font-mono text-xs uppercase tracking-widest text-primary">Pricing</p><h1 className="mt-5 text-5xl tracking-tight sm:text-7xl">Pick the plan that fits your product</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Start free and scale when your users do. No contracts, no surprises.</p></section><section className="border-y border-border bg-card/40"><div className="mx-auto grid max-w-6xl gap-5 px-6 py-20 lg:grid-cols-3">{plans.map(([name, price, features]) => <div key={name} className="rounded-xl border border-border bg-card p-7"><h2 className="text-2xl">{name}</h2><p className="mt-5 text-4xl font-medium">{price}<span className="text-sm text-muted-foreground"> / month</span></p><div className="mt-8 space-y-3">{features.map((feature) => <p key={feature} className="flex gap-2 text-sm text-muted-foreground"><Check className="size-4 text-primary" />{feature}</p>)}</div><Button className="mt-8 w-full" asChild><Link href="/signup">Start building <ArrowRight className="size-4" /></Link></Button></div>)}</div></section><Footer /></main>
}
