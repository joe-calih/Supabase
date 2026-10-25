import type { Metadata } from "next"

import { Navbar } from "@/components/homepage/navbar"
import { Footer } from "@/components/homepage/footer"
import { KnowledgeBase } from "@/components/kb/knowledge-base"

export const metadata: Metadata = {
  title: "Knowledge Base | Sprint",
  description: "In-depth guides, tutorials, troubleshooting, and explainers for best practices for Supabase.",
}

export default function KnowledgeBaseRoute() {
  return (
    <>
      <Navbar />
      <KnowledgeBase />
      <Footer />
    </>
  )
}
