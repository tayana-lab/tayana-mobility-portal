"use client"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_Cityscape_Night_1280x720-6eGirWT73oKnOANvfVr1J26X0SlKgD.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        {/* Increased left padding from px-4 to pl-12 md:pl-20 lg:pl-32 */}
        <div className="container mx-auto pl-12 md:pl-20 lg:pl-32 pr-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-cyan-400">YOUR PARTNER</span>
              <br />
              <span className="text-white">IN DIGITAL</span>
              <br />
              <span className="text-pink-500">TRANSFORMATION</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
