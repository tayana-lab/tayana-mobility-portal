"use client"

import { useState } from "react"
import { useInView } from "@/lib/use-count-up"

const products = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Digital BSS",
    tag: "Cloud Native",
    description: "Cloud-native, 5G-ready BSS empowers service providers to offer real-time digital experiences. Converged charging and policy solution for multi-service providers.",
    color: "#00c8ff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Analytics & BI",
    tag: "Insights",
    description: "Transform your telecom data into actionable insights with enterprise-wide analytics and business intelligence solutions designed specifically for CSPs.",
    color: "#0066ff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Messaging & VAS",
    tag: "Engagement",
    description: "Enable rich messaging experiences and value-added services that drive revenue growth and enhance customer engagement across multiple channels.",
    color: "#00c8ff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: "Network Solutions",
    tag: "Connectivity",
    description: "Optimize network performance with intelligent OSS, roaming management, and cybersecurity solutions ensuring seamless connectivity and superior QoS.",
    color: "#0066ff",
  },
]

export function ProductsPreview() {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#f2f3ff" }}>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`h-[2px] transition-all duration-700 ${inView ? "w-14 opacity-100" : "w-0 opacity-0"}`} style={{ background: "linear-gradient(90deg, transparent, #0066ff)", transitionDelay: "100ms" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#0066ff" }}>What We Offer</span>
            <div className={`h-[2px] transition-all duration-700 ${inView ? "w-14 opacity-100" : "w-0 opacity-0"}`} style={{ background: "linear-gradient(270deg, transparent, #0066ff)", transitionDelay: "100ms" }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Our Products &amp; <span style={{ color: "#0066ff" }}>Solutions</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
            A comprehensive portfolio designed for Communication Service Providers at every scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div
              key={p.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`bg-white rounded-2xl p-7 flex flex-col gap-5 cursor-default group border border-slate-200 shadow-sm transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
              style={{
                transitionDelay: `${i * 110}ms`,
                borderColor: hovered === i ? `${p.color}40` : undefined,
                boxShadow: hovered === i ? `0 12px 40px ${p.color}12` : undefined,
                transform: hovered === i ? "translateY(-4px)" : inView ? "translateY(0)" : "translateY(56px)",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div
                  className="rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${p.color}12`, color: p.color, width: "52px", height: "52px" }}
                >
                  {p.icon}
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                  style={{ background: `${p.color}10`, color: p.color }}
                >
                  {p.tag}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-slate-900 font-bold text-lg leading-snug">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
              </div>

              {/* Arrow — reveals on hover */}
              <div
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                style={{ color: p.color }}
              >
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "550ms" }}
        >
          <button
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#00c8ff,#0066ff)" }}
          >
            View All Solutions
            <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
