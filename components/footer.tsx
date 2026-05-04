"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.1) {
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

const solutions = ["Digital BSS", "Analytics & BI", "Messaging & VAS", "Network Solutions", "Cybersecurity", "Roaming Solutions"]
const company   = ["About Us", "Careers", "Partners", "News & Events", "Contact Us"]

export function Footer() {
  const { ref, inView } = useInView()

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ background: "#020818" }}>

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(#00c8ff 1px,transparent 1px),linear-gradient(90deg,#00c8ff 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

      <div className="container mx-auto px-6 lg:px-20 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div
            className={`lg:col-span-1 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tayanaLogo-8sVpBPeIrRvCl3lnLcOCv1ZyvX8gSH.png"
              alt="Tayana Mobility"
              width={160} height={50}
              className="object-contain mb-5 brightness-110"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering Communication Service Providers worldwide with cutting-edge digital transformation solutions since 1999.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "in", href: "#" },
                { label: "tw", href: "#" },
                { label: "fb", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-cyan-400/20 flex items-center justify-center text-slate-400 hover:border-cyan-400/70 hover:text-cyan-400 hover:bg-cyan-400/8 transition-all duration-300 text-[11px] font-bold uppercase"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "120ms" }}
          >
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#" className="group text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors duration-200 flex-shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "230ms" }}
          >
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="group text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors duration-200 flex-shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "340ms" }}
          >
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-6">Contact</h4>
            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  text: "Bangalore, India",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  text: "info@tayanamobility.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                    </svg>
                  ),
                  text: "tayanamobility.com",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "460ms" }}
        >
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Tayana Mobility Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-slate-500 text-xs hover:text-cyan-400 transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
