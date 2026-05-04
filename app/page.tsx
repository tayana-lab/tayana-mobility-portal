import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhoWeAre } from "@/components/who-we-are"
import { DigitalLeaders } from "@/components/digital-leaders"
import { ProductsPreview } from "@/components/products-preview"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/section-reveal"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020818]">
      <Header />
      <HeroSection />
      <SectionReveal direction="up">
        <WhoWeAre />
      </SectionReveal>
      <SectionReveal direction="up" delay={60}>
        <DigitalLeaders />
      </SectionReveal>
      <SectionReveal direction="up" delay={60}>
        <ProductsPreview />
      </SectionReveal>
      <SectionReveal direction="up" delay={60}>
        <Footer />
      </SectionReveal>
    </main>
  )
}
