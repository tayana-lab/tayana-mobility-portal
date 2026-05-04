"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function useCountUp(target: number, from: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(from)
  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    const range = target - from

    function easeOutQuart(t: number) {
      return 1 - Math.pow(1 - t, 4)
    }

    function tick(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      setCount(Math.round(from + range * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, from, duration])
  return count
}
