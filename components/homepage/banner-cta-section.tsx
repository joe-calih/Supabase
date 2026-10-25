import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BannerCtaSection() {
  return (
    <section className="w-full bg-background py-0 text-foreground md:py-00">
      <div className="mx-auto max-w-6xl px-6">
        <Card className="overflow-hidden bg-card transition-colors duration-300 py-0">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:p-12 lg:w-1/2">
              <p className="text-sm font-medium text-muted-foreground mb-4">Modern Tactics</p>
              <h2 className="mb-4 text-base text-foreground sm:text-xl">Make your site standout.</h2>
              <p className="text-muted-foreground mb-8">
                Discover new web trends that help you craft sleek, highly functional sites that drive traffic and
                convert leads into customers.
              </p>
              <Button className="bg-primary text-primary-foreground transition-colors hover:bg-primary/90">
                See Plans
                <span className="sr-only">, opens pricing page</span>
              </Button>
            </div>
            <div className="flex items-center justify-center bg-muted/50 p-8 sm:p-12 lg:w-1/2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-32 h-32 text-muted-foreground"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
