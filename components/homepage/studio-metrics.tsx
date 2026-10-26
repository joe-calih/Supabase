import { Card, CardContent } from "@/components/ui/card"

const metrics = [
  ["50K+", "Products shipped", "From first prototype to dependable production software."],
  ["10x", "Software deployment", "Senior engineers who know how to make complex systems useful."],
  ["2000+", "Applications", "SaaS, AI, mobile, enterprise platforms, and custom software."],
]

export function StudioMetrics() {
  return (
    <section className="bg-background py-7">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {metrics.map(([value, title, description]) => (
            <Card key={title} className="rounded-xl border-none bg-secondary p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-semibold text-foreground md:text-4xl">{value}</span>
                  <h2 className="font-semibold text-primary">{title}</h2>
                </div>
                <p className="text-[15px] text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
