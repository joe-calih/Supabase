import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/storage")
import { ProductPage } from "@/components/product-page"

export default function StoragePage() {
  return <ProductPage product="storage" />
}
