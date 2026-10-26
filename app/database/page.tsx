import { getPageMetadata } from "@/lib/seo"
export const metadata = getPageMetadata("/database")
import { ProductPage } from "@/components/product-page"

export default function DatabasePage() {
  return <ProductPage product="database" />
}
