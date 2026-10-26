import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/auth")
import { ProductPage } from "@/components/product-page"

export default function AuthPage() {
  return <ProductPage product="auth" />
}
