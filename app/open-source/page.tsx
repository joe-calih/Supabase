import type { Metadata } from "next"

import { Footer } from "@/components/homepage/footer"
import { Navbar } from "@/components/homepage/navbar"
import { OpenSourcePage } from "@/components/open-source/open-source-page"

export const metadata: Metadata = {
  title: "Open Source",
  description: "Explore Sprint's open source community, projects, and sponsored work.",
}

export default function OpenSourceRoute() {
  return (
    <>
      <Navbar />
      <OpenSourcePage />
      <Footer />
    </>
  )
}
