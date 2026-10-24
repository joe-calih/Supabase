import Link from "next/link"
import {
  Activity,
  Box,
  ChevronDown,
  Database,
  FileKey2,
  FunctionSquare,
  LogIn,
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
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-3 flex shrink-0 items-center gap-2 py-4 text-sm font-semibold tracking-tight">
          <span className="grid size-6 place-items-center rounded-md bg-primary text-primary-foreground">
            <Box className="size-4" />
          </span>
          <span className="hidden sm:inline">supabase</span>
        </Link>
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
        <div className="ml-auto hidden shrink-0 items-center gap-2 pl-3 sm:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">
              <LogIn className="size-4" />
              Log in
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Start your project</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto shrink-0 sm:hidden" aria-label="Open menu">
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
