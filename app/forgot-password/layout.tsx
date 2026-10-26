import type { Metadata } from "next"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/forgot-password")

export default function ForgotPasswordLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
