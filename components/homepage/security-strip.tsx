import { Check } from "lucide-react"

export function SecurityStrip() {
  return (
    <section className="border-border bg-background px-6 py-6 text-foreground">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[15px] text-muted-foreground md:justify-between">
        <p className="font-medium text-foreground/80">
          We protect your data. <a href="#" className="ml-1 text-primary hover:text-primary/80">More on Security</a>
        </p>
        <p className="flex items-center gap-2 text-foreground/90"><Check className="size-3.5 text-foreground" /> SOC2 Type 2 <span className="text-muted-foreground/70">Certified</span></p>
        <p className="flex items-center gap-2 text-foreground/90"><Check className="size-3.5 text-foreground" /> HIPAA <span className="text-muted-foreground/70">Compliant</span></p>
        <p className="flex items-center gap-2 text-foreground/90"><Check className="size-3.5 text-foreground" /> ISO 27001 <span className="text-muted-foreground/70">Certified</span></p>
      </div>
    </section>
  )
}
