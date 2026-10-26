import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/")
import { Hero3DStage } from "@/components/homepage/hero-3d-stage"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sprint",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "A purpose-built system for planning and building modern software products.",
  url: "https://sprint.example.com",
  publisher: {
    "@type": "Organization",
    name: "Sprint",
    url: "https://sprint.example.com",
  },
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero3DStage />
    </main>
  )
}
