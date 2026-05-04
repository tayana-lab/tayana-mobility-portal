"use client"

import { useEffect, useRef, useState } from "react"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Direction the section slides in from */
  direction?: "up" | "left" | "right" | "none"
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.07 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const translate =
    direction === "up"
      ? "translateY(48px)"
      : direction === "left"
      ? "translateX(-48px)"
      : direction === "right"
      ? "translateX(48px)"
      : "none"

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0) scale(1)" : `${translate} scale(0.98)`,
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
