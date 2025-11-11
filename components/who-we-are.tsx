import { Button } from "@/components/ui/button"

export function WhoWeAre() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a2847] overflow-hidden">
      {/* 3D Device Illustration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-1/2 h-96 opacity-60 hidden lg:block">
        <img src="/isometric-mobile-device-3d-purple-blue-neon-glow-d.jpg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8">WHO WE ARE</h2>

          <div className="space-y-6 text-white/90 leading-relaxed">
            <p>
              Tayana Mobility Technologies, formerly known as Tayana Software Solutions, founded in the year 1999 is
              headquartered in Bangalore, India. Tayana offers a wide range of products and solutions to communication
              service providers and enterprises. We enable the digital transformation journey for communication service
              providers (CSPs) to become true digital service providers (DSPs) with a mix of products from Digital BSS
              portfolio, Enterprise wide Telco Data BI/Analytics, VAS products, Messaging products, Network solution and
              customization services.
            </p>

            <p>
              As a result of our more than two decades relationship with geographically diverse CSPs, we have deep
              domain understanding of the CSP environment and business enabling us to provide products, solutions,
              consulting services and managed services. Our competitive pricing has enabled us to serve the needs of
              customers with ARPUs ranging from 1 USD to 35 USD and customer base ranging from 10k to 30 million.
            </p>
          </div>

          <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">KNOW MORE</Button>
        </div>
      </div>
    </section>
  )
}
