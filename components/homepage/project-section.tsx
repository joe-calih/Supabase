import { ArrowUpRight, Bot, Code2, CreditCard, Database, Layers, Smartphone, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const featuredProjects = [
  {
    title: "Stripe Subscriptions Starter",
    description: "The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.",
    icon: CreditCard,
    href: "https://github.com/supabase-community/nextjs-subscription-payments",
    preview: "pricing",
  },
  {
    title: "Next.js Starter",
    description: "A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.",
    icon: Code2,
    href: "https://github.com/vercel/next.js/tree/canary/examples/with-supabase",
    preview: "dashboard",
  },
]

const projectTemplates: Array<[string, string, LucideIcon, string]> = [
  ["AI Chatbot", "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.", Bot, "https://github.com/supabase-community/vercel-ai-chatbot"],
  ["LangChain + Next.js Starter", "Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.", Layers, "https://github.com/langchain-ai/langchain-nextjs-template"],
  ["Flutter User Management", "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.", Smartphone, "https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management"],
  ["Expo React Native Starter", "Starter template for building cross-platform mobile apps with Expo, React Native, and Supabase.", Database, "https://github.com/supabase-community/create-t3-turbo"],
]

export function ProjectSection() {
  return (
    <section id="examples" className="bg-background py-10 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-2xl text-muted-foreground md:text-4xl">
            Kickstart your next project <br />
            <span className="text-foreground">with production ready templates</span>
          </h2>
          <a href="https://supabase.com/docs/guides/examples" className="text-sm text-muted-foreground underline hover:text-foreground">
            View all examples
          </a>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="group">
                <Card className="h-full overflow-hidden border-border bg-card transition-colors hover:bg-accent">
                  <CardHeader className="gap-2.5 px-6 py-5">
                    <project.icon className="h-5 w-5 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium text-card-foreground">{project.title}</CardTitle>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent className="px-6 pb-0 pt-4">
                    <Preview type={project.preview} />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projectTemplates.map(([title, description, Icon, href]) => (
              <a key={title} href={href} target="_blank" rel="noreferrer" className="group">
                <Card className="h-full border-border bg-card px-6 py-6 transition-colors hover:bg-accent">
                  <Icon className="mt-2 h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-sm font-medium text-card-foreground">{title}</CardTitle>
                  <p className="mt-0 line-clamp-3 text-sm text-muted-foreground">{description}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Preview({ type }: { type: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
      </div>
      <div className="flex h-[240px] items-center justify-center bg-background p-6">
        {type === "pricing" ? (
          <div className="flex -mb-8">
            {[0, 1, 2].map((item) => <div key={item} className={`h-40 w-24 border border-border p-3 ${item === 1 ? "bg-primary/10" : ""}`}><div className="h-2 w-12 rounded bg-muted" /><div className="mt-4 aspect-square rounded bg-muted" /></div>)}
          </div>
        ) : (
          <div className="flex h-full w-full gap-3">
            <div className="w-20 border-r border-border p-2"><div className="h-3 w-3 rounded-sm bg-primary" /><div className="mt-4 space-y-2"><div className="h-2 rounded bg-muted" /><div className="h-2 w-10 rounded bg-muted" /><div className="h-2 rounded bg-muted" /></div></div>
            <div className="grid flex-1 grid-cols-3 gap-2">{Array.from({ length: 9 }, (_, index) => <div key={index} className="rounded-sm bg-muted" />)}</div>
          </div>
        )}
      </div>
    </div>
  )
}
