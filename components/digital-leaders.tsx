"use client"

import { useCountUp, useInView } from "@/lib/use-count-up"

const clients = [
  { name: "Banglalink", image: "/banglalink-logo.jpg" },
  { name: "Bhutan Telecom", image: "/bhutan-telecom-logo.jpg" },
  { name: "Cable & Wireless", image: "/cable-wireless-logo.jpg" },
  { name: "Dhiraagu", image: "/dhiraagu-logo.jpg" },
  { name: "Jersey Telecom", image: "/jersey-telecom-logo.jpg" },
  { name: "Loop Mobile", image: "/loop-mobile-logo.jpg" },
]

const ticker = [...clients, ...clients, ...clients]

const metrics = [
  { from: 0, end: 30, suffix: "M+", label: "Subscribers Served", static: false },
  { from: 80, end: 100, suffix: "%", label: "Client Referenceable", static: false },
  { from: 0, end: 20, suffix: "+", label: "Countries", static: false },
  { from: 0, end: 0, suffix: "$1–35", label: "ARPU Range (USD)", static: true },
]

function MetricCard({ from, end, suffix, label, isStatic, inView, delay }: { from: number; end: number; suffix: string; label: string; isStatic: boolean; inView: boolean; delay: number }) {
  const count = useCountUp(end, from, inView, 2000)
  return (
    <div
      className={`glass-card hover-lift rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-3xl font-bold gradient-text mb-1.5 tabular-nums">
        {isStatic ? suffix : `${count}${suffix}`}
      </span>
      <span className="text-xs text-slate-400 uppercase tracking-widest leading-relaxed">{label}</span>
    </div>
  )
}

export function DigitalLeaders() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(180deg,#020818 0%,#030e22 100%)" }}>

      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "linear-gradient(#00c8ff 1px,transparent 1px),linear-gradient(90deg,#00c8ff 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

      {/* Glow */}
      <div className="absolute -bottom-24 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(0,102,255,0.07) 0%,transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className={`h-[2px] bg-gradient-to-r from-transparent to-cyan-400 transition-all duration-700 ${inView ? "w-14 opacity-100" : "w-0 opacity-0"}`} style={{ transitionDelay: "100ms" }} />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.25em]">Our Clients</span>
            <div className={`h-[2px] bg-gradient-to-l from-transparent to-cyan-400 transition-all duration-700 ${inView ? "w-14 opacity-100" : "w-0 opacity-0"}`} style={{ transitionDelay: "100ms" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Digital Leaders <span className="gradient-text">With Tayana</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            A long-term caring relationship with all our clients — a bond that grows stronger as years pass,
            built on trust, flexibility, and high-value propositions.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-20">

          {/* Quote card */}
          <div
            className={`glass-card rounded-2xl p-9 border-l-[3px] border-cyan-400 flex flex-col justify-between transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div>
              <svg className="w-10 h-10 text-cyan-400/30 mb-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate-200 text-lg leading-relaxed italic">
                This rock-solid performance has created a working partnership with all our clients with mutual respect.
                As a result, all of our clients and Products and Solutions are 100% referenceable — without exception.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-[2px] bg-cyan-400/60" />
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">Tayana Mobility</span>
            </div>
          </div>

          {/* Metrics grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "300ms" }}
          >
            {metrics.map((m, i) => (
              <MetricCard
                key={m.label}
                from={m.from}
                end={m.end}
                suffix={m.suffix}
                label={m.label}
                isStatic={m.static}
                inView={inView}
                delay={350 + i * 80}
              />
            ))}
          </div>
        </div>

        {/* Logo ticker */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "450ms" }}
        >
          <p className="text-center text-[10px] text-slate-500 uppercase tracking-[0.35em] mb-8">Trusted By</p>
          <div className="relative overflow-hidden rounded-xl">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg,#020818 0%,transparent 100%)" }} />
            <div className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg,#020818 0%,transparent 100%)" }} />

            <div className="flex anim-ticker" style={{ width: "max-content" }}>
              {ticker.map((client, i) => (
                <div
                  key={i}
                  className="mx-8 flex items-center justify-center w-36 h-20 glass-card rounded-xl px-4 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-400 flex-shrink-0"
                >
                  <img src={client.image} alt={client.name} className="max-w-full max-h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
