"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import type { ReactNode } from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  ["A listing in the Partner Catalog:", "Searchable by category, visible to developers actively evaluating tools"],
  ["Co-marketing:", "Supabase's highest-traffic moments like Launch Weeks, with blog, social, and Discord reach"],
  ["A direct line to the product team:", "Actual engineers who know the integration surface, not a support queue"],
  ["Something your sales team can use:", "A Supabase-verified listing is a trust signal with developers who already know us"],
]

const faqs = [
  "Is there a fee to be listed?",
  "Can I apply before my integration is built?",
  "How long is review?",
  "What’s the difference between an Integration Partner and a Solution Partner?",
  "Do I need to be a Supabase customer?",
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  )
}

export function PartnersPage() {
  return (
    <main className="bg-background pt-16 text-foreground">
      <PartnerHero />
      <BenefitsSection />
      <ProgramsSection />
      <ApplicationSection />
      <FaqSection />
    </main>
  )
}

function PartnerHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[52%] opacity-70 [mask-image:radial-gradient(ellipse_70%_90%_at_50%_0%,black,transparent_70%)]">
        <svg aria-hidden="true" className="h-full w-full text-foreground/20 dark:text-foreground/30">
          <defs>
            <pattern id="partner-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M30 0V30M0 30H30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partner-grid)" />
        </svg>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center sm:py-20 md:py-24">
        <Reveal className="flex max-w-2xl flex-col items-center gap-3">
          <span className="font-mono text-sm uppercase tracking-widest text-primary">Partners</span>
          <h1 className="text-balance text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Build with Supabase. Reach 9 million developers.
          </h1>
          <p className="text-balance text-lg text-muted-foreground">
            Ship integrations and offer services that help businesses build on Supabase.
          </p>
          <div className="flex w-full flex-col gap-2 pt-2 sm:w-auto sm:flex-row">
            <Button asChild>
              <a href="#become-a-partner">Apply as a Partner</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/partners/catalog">
                Partner Catalog
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 md:grid-cols-2 md:gap-16 md:py-24">
        <Reveal className="flex flex-col gap-3">
          <span className="font-mono text-sm uppercase tracking-wide text-primary">Benefits</span>
          <h2 className="max-w-[35ch] text-balance text-3xl tracking-tight sm:text-4xl">
            What your Supabase partnership gets you
          </h2>
          <p className="max-w-[56ch] text-lg text-muted-foreground">Open to companies building real integrations on Postgres.</p>
        </Reveal>
        <motion.ul
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {benefits.map(([title, description]) => (
            <motion.li key={title} className="flex items-start gap-3 text-muted-foreground" variants={reveal}>
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                <Check className="size-3" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span>
                <strong className="block font-normal text-foreground">{title}</strong>
                {description}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function ProgramsSection() {
  const programs = [
    {
      title: "Integration Partner",
      description:
        "You've built something that works with Supabase: a tool, extension, connector, or service. We list it, co-market it, and put it in front of developers who are actively composing their stack.",
      cta: "Apply as Integration Partner",
      href: "?partner_type=Tech%20Partner#become-a-partner",
      bestFor: "developer tools, SaaS products, hosting, observability, auth, billing, and anything else developers add to a Postgres project.",
    },
    {
      title: "Solution Partner",
      description: "You build on Supabase on behalf of clients.",
      cta: "Apply as Solution Partner",
      href: "?partner_type=Solution%20Partners#become-a-partner",
      bestFor: "agencies, consultancies, and service providers.",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="flex flex-col gap-3">
            <span className="font-mono text-sm uppercase tracking-wide text-primary">Programs</span>
            <h2 className="max-w-[35ch] text-balance text-3xl tracking-tight sm:text-4xl">Ways to partner</h2>
          </Reveal>
          {programs.map((program) => (
            <Reveal key={program.title}>
              <Card className="h-full overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                    <h3 className="text-xl tracking-tight">{program.title}</h3>
                    <p className="flex-1 text-sm text-muted-foreground">{program.description}</p>
                    <Button asChild size="sm" className="mt-4 w-fit">
                      <a href={program.href}>{program.cta}</a>
                    </Button>
                  </div>
                  <dl className="border-t border-border bg-muted p-5 sm:p-6">
                    <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Best for</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{program.bestFor}</dd>
                  </dl>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplicationSection() {
  return (
    <section id="become-a-partner" className="relative overflow-hidden border-y border-border bg-muted/30">
      <div className="relative mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20 md:py-28">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <h2 className="max-w-[35ch] text-balance text-3xl tracking-tight sm:text-4xl">
            Apply to become a <span className="block text-primary">Supabase partner</span>
          </h2>
          <p className="max-w-[56ch] text-pretty text-lg text-muted-foreground">
            Tell us about your company, what you’re building and the program you&apos;re interested in. We review every application and will reach out if there’s a good fit.
          </p>
        </Reveal>
        <Reveal>
          <Card className="rounded-2xl border-border bg-card shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <form className="flex flex-col gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" placeholder="John" required />
                  <Field label="Last name" placeholder="Doe" required />
                  <Field label="Work email" placeholder="john.doe@company.com" type="email" required />
                  <Field label="Company name" placeholder="Company Inc." required />
                </div>
                <Field label="Company website" placeholder="https://" type="url" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField label="How many people work at your company?" options={["1-5", "6-10", "11-20", "21-50", "51-100", "100+"]} />
                  <SelectField label="What type of partnership are you interested in?" options={["Marketplace Partner", "Technology Partner", "Solution Partner", "Startup Partner", "Other"]} />
                </div>
                <label className="grid gap-2 text-sm font-medium">
                  Any other details you’d like us to know?
                  <textarea className="min-h-28 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring" placeholder="Tell us more about your project, your team, and your goals for this partnership." rows={4} />
                </label>
                <div className="border-t border-border pt-6">
                  <Button type="submit" className="h-[42px] w-full">Submit application</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, placeholder, type = "text", required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <input type={type} placeholder={placeholder} required={required} className="h-[38px] rounded-md border border-input bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring" />
    </label>
  )
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <div className="relative">
        <select required className="h-[38px] w-full appearance-none rounded-md border border-input bg-background px-3 pr-8 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring">
          <option value="">Select an option</option>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      </div>
    </label>
  )
}

function FaqSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-balance text-3xl tracking-tight sm:text-4xl">Frequently asked questions</h2>
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible>
            {faqs.map((question, index) => (
              <AccordionItem key={question} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="text-foreground">{question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our partner team reviews each application based on the integration, the company, and the value it provides to developers building with Supabase.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
