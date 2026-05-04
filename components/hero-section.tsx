"use client"

import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_Cityscape_Night_1280x720-6eGirWT73oKnOANvfVr1J26X0SlKgD.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020818]/90 via-[#020818]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/80 via-transparent to-[#020818]/30" />

      {/* Animated accent lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
      <div
        className="absolute bottom-0 left-12 md:left-20 lg:left-32 h-24 w-px bg-gradient-to-t from-cyan-400/60 to-transparent"
        style={{ transition: "height 1s ease" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="pl-12 md:pl-20 lg:pl-32 pr-6 max-w-4xl">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-medium tracking-wider transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Formerly Tayana Software Solutions
          </div>

          {/* Headline */}
          <h1 className="font-bold leading-[1.1] mb-6">
            <span
              className={`block text-4xl md:text-5xl lg:text-6xl text-white mb-1 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.25s" }}
            >
              Your Partner In
            </span>
            <span
              className={`block text-4xl md:text-6xl lg:text-7xl gradient-text transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              Digital Transformation
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`text-base md:text-lg text-slate-300/80 max-w-xl leading-relaxed mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.55s" }}
          >
            Empowering Communication Service Providers to become true Digital Service Providers with cutting-edge BSS, Analytics, and Network solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.7s" }}
          >
            <button className="px-8 py-3.5 rounded-full bg-cyan-400 text-[#020818] font-semibold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.5)] active:scale-95">
              Explore Solutions
            </button>
            <button className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm tracking-wide hover:border-cyan-400/60 hover:bg-white/5 transition-all duration-300 active:scale-95">
              Learn More
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`flex gap-10 mt-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.85s" }}
          >
            {[
              { value: "25+", label: "Years Experience" },
              { value: "50+", label: "Global Clients" },
              { value: "30M+", label: "Subscribers Served" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
