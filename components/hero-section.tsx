"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <div className="absolute inset-0">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_Cityscape_Night_1280x720-6eGirWT73oKnOANvfVr1J26X0SlKgD.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020818]/92 via-[#020818]/65 to-[#020818]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020818] via-transparent to-[#020818]/30" />

      {/* Vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="pl-14 md:pl-24 lg:pl-36 pr-6 max-w-5xl">

          {/* Eyebrow line */}
          <div
            className={`flex items-center gap-3 mb-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className={`h-[2px] bg-cyan-400 transition-all duration-700 ${visible ? "w-12" : "w-0"}`} style={{ transitionDelay: "0.15s" }} />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.25em]">Telecom Digital Transformation</span>
          </div>

          {/* Headline */}
          <h1 className="font-bold leading-[1.1] mb-7">
            <span
              className={`block text-4xl md:text-5xl lg:text-[3.75rem] text-white mb-2 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.25s" }}
            >
              Your Partner In
            </span>
            <span
              className={`block text-5xl md:text-6xl lg:text-7xl gradient-text transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              Digital Transformation
            </span>
          </h1>

          {/* Sub-text */}
          <p
            className={`text-slate-300/80 text-base md:text-lg max-w-lg leading-relaxed mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.55s" }}
          >
            Empowering Communication Service Providers to become true Digital Service Providers with cutting-edge BSS, Analytics, and Network solutions.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.7s" }}
          >
            <button className="group relative px-8 py-3.5 rounded-full bg-cyan-400 text-[#020818] font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,200,255,0.55)] active:scale-95">
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>
            <button className="px-8 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm tracking-wide hover:border-cyan-400/50 hover:bg-white/6 transition-all duration-300 active:scale-95 backdrop-blur-sm">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex gap-10 mt-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.85s" }}
          >
            {[
              { value: "25+", label: "Years Experience" },
              { value: "50+", label: "Global Clients" },
              { value: "30M+", label: "Subscribers Served" },
            ].map((s, i) => (
              <div key={s.label} className="flex flex-col gap-1">
                <div className="flex items-end gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-white">{s.value}</span>
                </div>
                <span className="text-[11px] text-slate-400 uppercase tracking-[0.2em]">{s.label}</span>
                <div className="h-[1px] w-8 bg-cyan-400/50 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className={`absolute bottom-10 left-14 md:left-24 lg:left-36 flex flex-col items-start gap-2 transition-all duration-700 ${visible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: "1.1s" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
            <div className="w-0.5 h-1.5 bg-white/60 rounded-full anim-float" />
          </div>
          <span className="text-[10px] text-slate-400 uppercase tracking-[0.25em]">Scroll Down</span>
        </div>
      </div>
    </section>
  )
}
