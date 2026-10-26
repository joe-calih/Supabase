import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/solutions/enterprise")
import { Building2, LockKeyhole, Scale } from "lucide-react"
import { FooterContentPage } from "@/components/footer-content-page"
export default function EnterprisePage() { return <FooterContentPage eyebrow="Enterprise" title="A platform teams can standardize on" description="Give product teams a common backend foundation with the governance, security, and support needed at scale." sections={[["Governance", "Centralize projects, access, and operational visibility across teams.", "Clear ownership helps organizations move quickly without losing control."], ["Security", "Combine identity, policies, encrypted transport, and audit-minded workflows.", "Security teams can participate in architecture decisions early."], ["Scale", "Support many products while keeping development patterns consistent.", "A shared platform reduces duplicated effort across the organization."]]}/>}
