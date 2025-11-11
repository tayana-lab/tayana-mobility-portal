import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhoWeAre } from "@/components/who-we-are"
import { DigitalLeaders } from "@/components/digital-leaders"
import { ProductsPreview } from "@/components/products-preview"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <DigitalLeaders />
      <ProductsPreview />
    </main>
  )
}
