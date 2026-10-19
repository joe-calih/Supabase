import { Button } from "@/components/ui/button"

const CTASection = () => {
  return (
    <section id="cta" className="dark border-y border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 text-muted-foreground">Sign up now and supercharge your keyword research!</p>
        <Button size="lg">Start Your Free Trial</Button>
      </div>
    </section>
  )
}

export default CTASection

