import type { Metadata } from "next"

import { Navbar } from "@/components/homepage/navbar"
import { Footer } from "@/components/homepage/footer"
import { PartnersPage } from "@/components/partners/partners-page"

export const metadata: Metadata = {
  title: "Partners | Sprint",
  description: "Build integrations and services with Sprint and reach developers building on Postgres.",
}

export default function PartnersRoute() {
  return (
    <>
      <Navbar />
      <PartnersPage />
      <Footer />
    </>
  )
}
