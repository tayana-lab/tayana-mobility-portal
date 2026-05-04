"use client"

import Image from "next/image"
import { useCountUp, useInView } from "@/lib/use-count-up"

const stats = [
  { from: 1990, end: 1999, suffix: "", label: "Founded" },
  { from: 0, end: 25, suffix: "+", label: "Years of Excellence" },
  { from: 0, end: 50, suffix: "+", label: "Global Clients" },
  { from: 80, end: 100, suffix: "%", label: "Referenceable" },
]

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    label: "Digital BSS",
    desc: "5G-ready, cloud-native billing & customer management",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    label: "Analytics & BI",
    desc: "Enterprise-wide telecom data intelligence platform",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    label: "VAS & Messaging",
    desc: "Rich messaging and value-added service solutions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    label: "Network Solutions",
    desc: "OSS, roaming, and network performance optimization",
  },
]

function StatItem({ from, end, suffix, label, inView, delay }: {
  from: number; end: number; suffix: string; label: string; inView: boolean; delay: number
}) {
  const count = useCountUp(end, from, inView, 2000)
  return (
    <div
      className="flex flex-col items-center py-10 px-4 text-center border-r border-slate-200 last:border-r-0 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
    >
      <span className="text-4xl md:text-5xl font-bold mb-2 tabular-nums" style={{ color: "#0066ff" }}>{count}{suffix}</span>
      <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</span>
    </div>
  )
}

export function WhoWeAre() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="relative bg-white py-24 overflow-hidden">

      <div className="container mx-auto px-6 lg:px-20">

        {/* Eyebrow */}
        <div
          className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 rounded" style={{ background: "linear-gradient(90deg,#00c8ff,#0066ff)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#0066ff" }}>About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Who <span style={{ color: "#0066ff" }}>We Are</span>
          </h2>
        </div>

        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — text content */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
              Tayana Mobility Technologies, founded in 1999 and headquartered in Bangalore, India, offers a wide range of products and solutions to communication service providers and enterprises.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-4">
              We enable the digital transformation journey for CSPs to become true digital service providers with a mix of products from Digital BSS, Enterprise Telco BI/Analytics, VAS, Messaging, and Network solutions.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              With over two decades of deep domain expertise, our competitive pricing has enabled us to serve customers with ARPUs ranging from 1 USD to 35 USD and customer bases from 10K to 30 million subscribers.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className={`flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-100 hover:bg-blue-50/40 transition-all duration-300 group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-blue-100" style={{ background: "#eff6ff", color: "#0066ff" }}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold text-sm mb-0.5">{p.label}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#00c8ff,#0066ff)" }}
            >
              Know More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right — images */}
          <div
            className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "250ms" }}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/team-office.jpg"
                alt="Tayana Mobility team at work"
                fill
                className="object-cover"
              />
              {/* Blue overlay accent */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.08) 0%, transparent 60%)" }} />
            </div>

            {/* Floating stat badge */}
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg,#00c8ff,#0066ff)" }}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">30M+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Subscribers Served</div>
              </div>
            </div>

            {/* Small secondary image */}
            <div
              className="absolute -top-5 -right-5 w-36 h-36 rounded-xl overflow-hidden shadow-lg border-4 border-white"
            >
              <Image
                src="/images/network-tech.jpg"
                alt="Network technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "500ms" }}
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} from={s.from} end={s.end} suffix={s.suffix} label={s.label} inView={inView} delay={550 + i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
