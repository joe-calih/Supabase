import { BarChart3, Check, Eye, FileText, Link as LinkIcon, Search, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Discover high-value keywords with accurate search volume, competition analysis, and SERP features data.",
    features: ["50M+ keyword database", "Search intent analysis", "Competitor keyword gaps"],
  },
  {
    icon: BarChart3,
    title: "Rank Tracking",
    description: "Monitor your search rankings across desktop, mobile, and local search with daily updates.",
    features: ["Daily rank updates", "Local & mobile tracking", "SERP feature monitoring"],
  },
  {
    icon: Eye,
    title: "Site Audit",
    description: "Comprehensive technical SEO audits that identify and prioritize optimization opportunities.",
    features: ["200+ SEO checks", "Priority scoring", "Developer-friendly reports"],
  },
  {
    icon: LinkIcon,
    title: "Backlink Analysis",
    description: "Analyze your backlink profile and discover new link building opportunities from competitors.",
    features: ["Fresh backlink index", "Toxic link detection", "Link building prospects"],
  },
  {
    icon: Users,
    title: "Competitor Analysis",
    description: "Spy on competitors' SEO strategies and discover their top-performing content and keywords.",
    features: ["Competitor tracking", "Content gap analysis", "Traffic estimation"],
  },
  {
    icon: FileText,
    title: "Content Optimization",
    description: "AI-powered content recommendations to help you create search-optimized content that ranks.",
    features: ["Content scoring", "Topic suggestions", "Readability analysis"],
  },
]

export function RankingSection() {
  return (
    <section className="w-full bg-[#09090B] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl">Everything you need to rank #1</h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              Comprehensive SEO tools designed to help B2B companies dominate search results and drive qualified
              traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group h-full border-zinc-800 bg-zinc-900/50 text-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg"
              >
                <CardHeader className="space-y-3 pb-2">
                  {/* Icon and Title on the same horizontal line */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-[18px] font-semibold">{feature.title}</h3>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 border-t border-zinc-800/80 pt-4">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center space-x-3 text-sm text-zinc-300">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}