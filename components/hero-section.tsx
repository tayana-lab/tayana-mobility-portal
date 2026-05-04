"use client"

import { useEffect, useState } from "react"
import { useCountUp } from "@/lib/use-count-up"

const heroStats = [
  { from: 0, end: 25, suffix: "+", label: "Years Experience" },
  { from: 0, end: 50, suffix: "+", label: "Global Clients" },
  { from: 0, end: 30, suffix: "M+", label: "Subscribers Served" },
]

/* Particles rendered as absolutely positioned dots */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${10 + (i * 5.2) % 80}%`,
  top: `${15 + (i * 7.3) % 70}%`,
  size: 1.5 + (i % 3) * 1,
  delay: `${(i * 0.45) % 5}s`,
  duration: `${4 + (i % 4)}s`,
  opacity: 0.15 + (i % 5) * 0.06,
}))

function HeroStatItem({
  from, end, suffix, label, triggered,
}: {
  from: number; end: number; suffix: string; label: string; triggered: boolean
}) {
  const count = useCountUp(end, from, triggered, 2200)
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-[11px] text-slate-400 uppercase tracking-[0.2em]">{label}</span>
      <div className="h-[1px] w-8 bg-cyan-400/50 mt-1" />
    </div>
  )
}

/* Animates each word in with a staggered clip-path reveal */
function WordReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word-mask">
          <span
            style={{
              display: "inline-block",
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0) skewY(0deg)" : "translateY(110%) skewY(4deg)",
              transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
            }}
            className={className}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </>
  )
}

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [statsTrigger, setStatsTrigger] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    const s = setTimeout(() => setStatsTrigger(true), 1100)
    return () => { clearTimeout(t); clearTimeout(s) }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Video */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_Cityscape_Night_1280x720-6eGirWT73oKnOANvfVr1J26X0SlKgD.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020818]/92 via-[#020818]/65 to-[#020818]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020818] via-transparent to-[#020818]/30" />

      {/* Scanline sweep */}
      <div className="scanline-overlay" />

      {/* Animated particle dots */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "#00c8ff",
            opacity: p.opacity,
            animation: `particleDrift ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

      {/* Corner accent — top-right */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(0,200,255,0.12) 0%, transparent 65%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.5s ease",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="pl-14 md:pl-24 lg:pl-36 pr-6 max-w-5xl">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div
              style={{
                width: visible ? "40px" : "0px",
                height: "2px",
                background: "linear-gradient(90deg,#00c8ff,transparent)",
                transition: "width 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s",
              }}
            />
          </div>

          {/* Headline — word-by-word reveal */}
          <h1 className="font-bold leading-[1.1] mb-7">
            <div className="block text-4xl md:text-5xl lg:text-[3.75rem] text-white mb-2">
              <WordReveal text="Your Partner In" delay={250} />
            </div>
            <div className="block text-5xl md:text-6xl lg:text-7xl gradient-text">
              <WordReveal text="Digital Transformation" delay={420} />
            </div>
          </h1>

          {/* Sub-text with clip reveal */}
          <p
            className="text-slate-300/80 text-base md:text-lg max-w-lg leading-relaxed mb-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              filter: visible ? "blur(0px)" : "blur(4px)",
              transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s, filter 0.8s ease 0.6s",
            }}
          >
            Empowering Communication Service Providers to become true Digital Service Providers with
            cutting-edge BSS, Analytics, and Network solutions.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s",
            }}
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
            className="flex gap-10 mt-14"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s",
            }}
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
