import type { Metadata } from "next"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/reset-password")

export default function ResetPasswordLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
