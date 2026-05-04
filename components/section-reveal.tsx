"use client"

import { useEffect, useRef, useState } from "react"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  /** Visual style of the reveal animation */
  variant?: "default" | "blur" | "clip"
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  variant = "blur",
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const getTransform = () => {
    if (visible) return "translateY(0) translateX(0) scale(1)"
    if (direction === "up") return "translateY(56px) scale(0.97)"
    if (direction === "left") return "translateX(-56px)"
    if (direction === "right") return "translateX(56px)"
    return "none"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        filter: variant === "blur" ? (visible ? "blur(0px)" : "blur(6px)") : undefined,
        transition: [
          `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          variant === "blur" ? `filter 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms` : "",
        ]
          .filter(Boolean)
          .join(", "),
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  )
}
