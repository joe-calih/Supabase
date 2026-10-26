import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/realtime")
import { ProductPage } from "@/components/product-page"

export default function RealtimePage() {
  return <ProductPage product="realtime" />
}
