"use client"

import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.15) {
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

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    label: "Digital BSS",
    desc: "5G-ready, cloud-native billing & customer management",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    label: "Analytics & BI",
    desc: "Enterprise-wide telecom data intelligence platform",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    label: "VAS & Messaging",
    desc: "Rich messaging and value-added service solutions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    label: "Network Solutions",
    desc: "OSS, roaming, and network performance optimization",
  },
]

const stats = [
  { end: 1999, suffix: "", label: "Founded" },
  { end: 25, suffix: "+", label: "Years of Excellence" },
  { end: 50, suffix: "+", label: "Global Clients" },
  { end: 100, suffix: "%", label: "Referenceable" },
]

function StatItem({ end, suffix, label, inView, delay }: { end: number; suffix: string; label: string; inView: boolean; delay: number }) {
  const count = useCountUp(end, inView)
  return (
    <div
      className={`flex flex-col items-center py-8 px-4 text-center border-r border-cyan-400/10 last:border-r-0 transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
    >
      <span className="text-3xl font-bold gradient-text mb-1">{count}{suffix}</span>
      <span className="text-xs text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export function WhoWeAre() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(180deg,#020818 0%,#040f28 55%,#020818 100%)" }}>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "linear-gradient(#00c8ff 1px,transparent 1px),linear-gradient(90deg,#00c8ff 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

      {/* Glow orbs */}
      <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(0,200,255,0.07) 0%,transparent 70%)" }} />
      <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(0,102,255,0.07) 0%,transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Eyebrow + heading */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="section-eyebrow mb-4">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.25em]">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Who <span className="gradient-text">We Are</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — text */}
          <div
            className={`space-y-5 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Tayana Mobility Technologies, founded in 1999 and headquartered in Bangalore, India, offers a wide range of products and solutions to communication service providers and enterprises.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              We enable the digital transformation journey for CSPs to become true digital service providers with a mix of products from Digital BSS, Enterprise Telco BI/Analytics, VAS, Messaging, and Network solutions.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              With over two decades of deep domain expertise, our competitive pricing has enabled us to serve customers with ARPUs ranging from 1 USD to 35 USD and customer bases from 10K to 30 million subscribers.
            </p>

            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-cyan-400 text-[#020818] font-semibold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_32px_rgba(0,200,255,0.45)]">
                Know More
                <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — feature cards with stagger */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.label}
                className={`glass-card hover-lift rounded-2xl p-5 group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${250 + i * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all duration-300">
                  {f.icon}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1.5">{f.label}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated stats bar */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-cyan-400/10 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
          style={{ background: "rgba(0,200,255,0.025)", transitionDelay: "500ms" }}
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} end={s.end} suffix={s.suffix} label={s.label} inView={inView} delay={550 + i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
