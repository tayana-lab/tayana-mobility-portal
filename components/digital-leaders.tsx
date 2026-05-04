"use client"

import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const clients = [
  { name: "Banglalink", image: "/banglalink-logo.jpg" },
  { name: "Bhutan Telecom", image: "/bhutan-telecom-logo.jpg" },
  { name: "Cable & Wireless", image: "/cable-wireless-logo.jpg" },
  { name: "Dhiraagu", image: "/dhiraagu-logo.jpg" },
  { name: "Jersey Telecom", image: "/jersey-telecom-logo.jpg" },
  { name: "Loop Mobile", image: "/loop-mobile-logo.jpg" },
]

// Duplicate for seamless ticker
const tickerClients = [...clients, ...clients]

export function DigitalLeaders() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #020818 0%, #030e22 100%)" }}>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(#00c8ff 1px, transparent 1px), linear-gradient(90deg, #00c8ff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glow orb left */}
      <div className="absolute -bottom-20 -left-40 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #0066ff 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">Our Clients</span>
            <div className="w-14 h-px bg-gradient-to-l from-cyan-400 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Digital Leaders with <span className="gradient-text">Tayana</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            A long-term caring relationship with all our clients — a bond that grows stronger as years pass,
            built on trust, flexibility, and high-value propositions.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 mt-16">
          {/* Left — quote card */}
          <div className={`glass-card rounded-2xl p-8 border-l-4 border-cyan-400 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="text-5xl text-cyan-400/30 font-serif leading-none mb-4">"</div>
            <p className="text-slate-200 text-lg leading-relaxed italic mb-6">
              This rock-solid performance has created a working partnership with all our clients with mutual respect.
              As a result, all of our clients and Products and Solutions are 100% referenceable — without exception.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-cyan-400/60" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Tayana Mobility</span>
            </div>
          </div>

          {/* Right — metrics */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {[
              { value: "30M+", label: "Subscribers Served", icon: "◈" },
              { value: "100%", label: "Client Referenceable", icon: "◉" },
              { value: "20+", label: "Countries", icon: "◎" },
              { value: "$1-35", label: "ARPU Range (USD)", icon: "◌" },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-2xl p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="text-cyan-400 text-xl mb-2">{m.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">{m.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo ticker */}
        <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-center text-xs text-slate-500 uppercase tracking-[0.3em] mb-8">Trusted By</p>
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #020818 0%, transparent 100%)" }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg, #020818 0%, transparent 100%)" }} />

            <div className="flex animate-ticker" style={{ width: "max-content" }}>
              {tickerClients.map((client, i) => (
                <div
                  key={i}
                  className="mx-10 flex items-center justify-center w-36 h-20 glass-card rounded-xl px-4 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-w-full max-h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
