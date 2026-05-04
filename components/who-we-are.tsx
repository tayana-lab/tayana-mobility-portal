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

const features = [
  { icon: "◈", label: "Digital BSS", desc: "5G-ready, cloud-native billing & customer management" },
  { icon: "◉", label: "Analytics & BI", desc: "Enterprise-wide telecom data intelligence platform" },
  { icon: "◎", label: "VAS & Messaging", desc: "Rich messaging and value-added service solutions" },
  { icon: "◌", label: "Network Solutions", desc: "OSS, roaming, and network performance optimization" },
]

export function WhoWeAre() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #020818 0%, #040f28 60%, #020818 100%)" }}>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#00c8ff 1px, transparent 1px), linear-gradient(90deg, #00c8ff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glow orb */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #00c8ff 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who <span className="gradient-text">We Are</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="text-slate-300 text-base leading-relaxed">
              Tayana Mobility Technologies, founded in 1999 and headquartered in Bangalore, India, offers a wide range of products and solutions to communication service providers and enterprises.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              We enable the digital transformation journey for CSPs to become true digital service providers with a mix of products from Digital BSS, Enterprise Telco BI/Analytics, VAS, Messaging, and Network solutions.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              With over two decades of deep domain expertise, our competitive pricing has enabled us to serve customers with ARPUs ranging from 1 USD to 35 USD and customer bases from 10K to 30 million subscribers.
            </p>

            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-cyan-400 text-[#020818] font-semibold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]">
                Know More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.label}
                className={`glass-card rounded-2xl p-5 cursor-default group transition-all duration-700 hover:-translate-y-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="text-2xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1">{f.label}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-cyan-400/10 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { value: "1999", label: "Founded" },
            { value: "25+", label: "Years of Excellence" },
            { value: "50+", label: "Global Clients" },
            { value: "100%", label: "Referenceable" },
          ].map((s, i) => (
            <div key={s.label} className="flex flex-col items-center py-8 px-4 text-center" style={{ background: "rgba(0,200,255,0.03)" }}>
              <span className="text-3xl font-bold gradient-text mb-1">{s.value}</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
