"use client"

import { useEffect, useState } from "react"
import { useCountUp } from "@/lib/use-count-up"

const heroStats = [
  { from: 0, end: 25, suffix: "+", label: "Years Experience" },
  { from: 0, end: 50, suffix: "+", label: "Global Clients" },
  { from: 0, end: 30, suffix: "M+", label: "Subscribers Served" },
]

function HeroStatItem({ from, end, suffix, label, triggered }: { from: number; end: number; suffix: string; label: string; triggered: boolean }) {
  const count = useCountUp(end, from, triggered, 2200)
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-end gap-1">
        <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">{count}{suffix}</span>
      </div>
      <span className="text-[11px] text-slate-400 uppercase tracking-[0.2em]">{label}</span>
      <div className="h-[1px] w-8 bg-cyan-400/50 mt-1" />
    </div>
  )
}

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [statsTrigger, setStatsTrigger] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    // Trigger stats count-up after hero animations settle
    const s = setTimeout(() => setStatsTrigger(true), 1100)
    return () => { clearTimeout(t); clearTimeout(s) }
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

            {/* <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.25em]">Telecom Digital Transformation</span> */}
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
            {heroStats.map((s) => (
              <HeroStatItem key={s.label} from={s.from} end={s.end} suffix={s.suffix} label={s.label} triggered={statsTrigger} />
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
