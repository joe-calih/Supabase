import type { ReactNode } from "react"
import { Boxes, Check, Database, FileJson, LockKeyhole, Radio, Server, Upload, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type FeatureCardProps = {
  href: string
  title: string
  icon: LucideIcon
  description: ReactNode
  items?: string[]
  className?: string
  children: ReactNode
}

const topFeatures: FeatureCardProps[] = [
  {
    href: "/database",
    title: "Postgres Database",
    icon: Database,
    description: (
      <>
        Every project is <strong>a full Postgres database</strong>, the world&apos;s most trusted relational database.
      </>
    ),
    items: ["100% portable", "Built-in Auth with RLS", "Easy to extend"],
    className: "md:col-span-6",
    children: <DatabasePattern />,
  },
  {
    href: "/auth",
    title: "Authentication",
    icon: LockKeyhole,
    description: (
      <>
        Add user sign ups and logins, <strong>securing your data</strong> with Row Level Security.
      </>
    ),
    className: "md:col-span-3",
    children: <AuthPattern />,
  },
  {
    href: "/edge-functions",
    title: "Edge Functions",
    icon: Server,
    description: (
      <>
        Easily write custom code <strong>without deploying or scaling servers.</strong>
      </>
    ),
    className: "md:col-span-3",
    children: <EdgePattern />,
  },
]

const bottomFeatures: FeatureCardProps[] = [
  {
    href: "/storage",
    title: "Storage",
    icon: Upload,
    description: (
      <>
        Store, organize, and serve <strong>large files</strong>, from videos to images.
      </>
    ),
    children: <StoragePattern />,
  },
  {
    href: "/realtime",
    title: "Realtime",
    icon: Radio,
    description: (
      <>
        Build multiplayer experiences with <strong>real-time data synchronization.</strong>
      </>
    ),
    children: <RealtimePattern />,
  },
  {
    href: "/modules/vector",
    title: "Vector",
    icon: Boxes,
    description: (
      <>
        Integrate your favorite ML-models to <strong>store, index and search vector embeddings.</strong>
      </>
    ),
    children: <VectorPattern />,
  },
  {
    href: "https://supabase.com/docs/guides/api",
    title: "Data APIs",
    icon: FileJson,
    description: (
      <>
        Instant ready-to-use <strong>REST APIs.</strong>
      </>
    ),
    children: <ApiPattern />,
  },
]

export function FeaturesSection() {
  return (
    <section id="products" className="relative bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-12 md:gap-4 xl:gap-3 2xl:gap-6">
          {topFeatures.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-3 md:grid-cols-4 md:gap-4 xl:gap-3 2xl:gap-6">
          {bottomFeatures.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-xl text-center text-2xl text-muted-foreground">
          Use one or all. <strong className="font-normal text-foreground">Best of breed products.</strong> Integrated as a
          platform.
        </p>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: FeatureCardProps }) {
  const Icon = feature.icon

  return (
    <a href={feature.href} className={`group relative flex w-full ${feature.className ?? ""}`}>
      <Card className="relative flex min-h-[82px] w-full flex-col overflow-hidden rounded-xl border-border bg-card text-muted-foreground transition-colors hover:bg-accent md:min-h-[390px]">
        <CardHeader className="relative z-10 flex max-w-none flex-col items-start gap-1 px-4 py-2.5 md:ml-2 md:mt-2 md:max-w-[270px] md:gap-4 md:p-6">
          <CardTitle className="flex items-center gap-2 text-sm font-normal text-card-foreground">
            <Icon className="h-[18px] w-[18px]" />
            {feature.title}
          </CardTitle>
          <p className="text-sm leading-snug [&_strong]:font-normal [&_strong]:text-card-foreground">{feature.description}</p>
          {feature.items && (
            <ul className="mt-auto hidden flex-col gap-1 text-sm text-card-foreground md:flex">
              {feature.items.map((item) => (
                <li key={item}>
                  <Check className="mr-1 inline h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </CardHeader>
        <CardContent className="absolute inset-x-0 bottom-0 top-32 hidden p-0 md:block">{feature.children}</CardContent>
      </Card>
    </a>
  )
}

function Pattern({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-end justify-center overflow-hidden bg-gradient-to-t from-background via-card/50 to-transparent p-6 text-muted-foreground transition-transform duration-300 group-hover:scale-[1.03]">
      {children}
    </div>
  )
}

function DatabasePattern() {
  return (
    <Pattern>
      <div className="flex items-end gap-2 opacity-70">
        {[80, 120, 96, 144, 110].map((height, index) => (
          <div key={index} className="w-10 rounded-t-md border border-border bg-muted" style={{ height }} />
        ))}
      </div>
    </Pattern>
  )
}

function AuthPattern() {
  return (
    <Pattern>
      <div className="grid w-full grid-cols-2 gap-2 opacity-70">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="h-12 rounded-lg border border-border bg-background/70" />
        ))}
      </div>
    </Pattern>
  )
}

function EdgePattern() {
  return (
    <Pattern>
      <div className="w-full rounded-full border border-border bg-background/80 px-4 py-2 text-center text-xs text-muted-foreground">
        $ supabase functions serve
      </div>
    </Pattern>
  )
}

function StoragePattern() {
  return (
    <Pattern>
      <div className="grid w-full grid-cols-3 gap-2">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="flex h-12 items-center justify-center rounded-lg border border-border bg-background/70">
            <FileJson className="h-5 w-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </Pattern>
  )
}

function RealtimePattern() {
  return (
    <Pattern>
      <div className="flex items-center gap-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700">
            <Radio className="h-5 w-5" />
          </div>
        ))}
      </div>
    </Pattern>
  )
}

function VectorPattern() {
  return (
    <Pattern>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }, (_, index) => (
          <span key={index} className="h-2 w-2 rounded-full bg-muted-foreground" style={{ opacity: 0.3 + (index % 5) / 10 }} />
        ))}
      </div>
    </Pattern>
  )
}

function ApiPattern() {
  return (
    <Pattern>
      <div className="w-full space-y-3">
        {["countries", "contents", "cities", "states", "oceans"].map((item) => (
          <div key={item} className="flex items-center justify-between border-b border-border pb-1 text-xs text-muted-foreground">
            <span>{item}</span>
            <span>/v1/{item}</span>
          </div>
        ))}
      </div>
    </Pattern>
  )
}
