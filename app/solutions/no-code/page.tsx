import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/solutions/no-code")
import { Blocks, MousePointer2, Rocket } from "lucide-react"
import { FooterContentPage } from "@/components/footer-content-page"
export default function NoCodePage() { return <FooterContentPage eyebrow="No code" title="A serious backend for visual builders" description="Give creators a secure, scalable foundation without making them manage infrastructure." sections={[["Compose quickly", "Connect a visual interface to tables, auth, storage, and APIs.", "Reusable building blocks let teams focus on the experience."], ["Stay flexible", "A no-code project can still grow into custom code when the product needs it.", "Portable Postgres means you are not trapped by the first version."], ["Launch confidently", "Policies and managed services provide a dependable path from idea to users.", "Build quickly without treating security as an afterthought."]]}/>}
