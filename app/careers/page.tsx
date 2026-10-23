import type { Metadata } from "next"

import { Navbar } from "@/components/homepage/navbar"
import { Footer } from "@/components/homepage/footer"
import { CareersPage } from "@/components/careers/careers-page"

export const metadata: Metadata = {
  title: "Careers | Sprint",
  description: "Join Sprint and help build the best developer platform from anywhere in the world.",
}

export default function CareersRoute() {
  return (
    <>
      <Navbar />
      <CareersPage />
      <Footer />
    </>
  )
}
