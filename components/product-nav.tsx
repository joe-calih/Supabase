import Link from "next/link"
import {
  Activity,
  ChevronDown,
  Database,
  FileKey2,
  FunctionSquare,
  Menu,
  Server,
  ShieldCheck,
  HardDrive,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  { label: "Database", href: "/database", icon: Database },
  { label: "Auth", href: "/auth", icon: ShieldCheck },
  { label: "Storage", href: "/storage", icon: HardDrive },
  { label: "Edge Functions", href: "/edge-functions", icon: FunctionSquare },
  { label: "Compute", href: "/compute", icon: Server },
  { label: "Realtime", href: "/realtime", icon: Activity },
]

export function ProductNav() {
  return (
    <nav className="relative z-30 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
        {products.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-3.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:text-sm"
          >
            <Icon className="size-4" />
            <span className="hidden md:inline">{label}</span>
          </Link>
        ))}
        <Button variant="ghost" size="icon" className="ml-2 shrink-0 sm:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </div>
    </nav>
  )
}

export function SectionLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#content" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
      {children}
      <ChevronDown className="size-3.5 -rotate-90" />
    </a>
  )
}

export function CodeIcon() {
  return <FileKey2 className="size-5" />
}
