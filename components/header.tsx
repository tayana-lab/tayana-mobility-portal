"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "5G Solutions", href: "#" },
      { label: "Network Infrastructure", href: "#" },
      { label: "IoT Platforms", href: "#" },
      { label: "Cloud Services", href: "#" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Core Offerings", href: "#" },
      { label: "Digital Onboarding Solutions", href: "#" },
      { label: "Digital VAS Services", href: "#" },
      { label: "Cybersecurity", href: "#" },
      { label: "Device Management", href: "#" },
      { label: "Spam Call", href: "#" },
      { label: "Roaming Solutions", href: "#" },
      { label: "Testing Solutions", href: "#" },
      { label: "IoT & M2M", href: "#" },
      { label: "Voice Fraud Solutions", href: "#" },
      { label: "Storage Solutions", href: "#" },
      { label: "Location-Based Services (LBS)", href: "#" },
      { label: "ARA - Automated Roaming Assist", href: "#" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-0"
        : "bg-transparent py-0"
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tayanaLogo-8sVpBPeIrRvCl3lnLcOCv1ZyvX8gSH.png"
            alt="Tayana Mobility"
            width={200}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium tracking-wide transition-colors duration-200 ${isScrolled
                    ? "text-gray-700 hover:text-purple-700"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div
                    className={`min-w-[240px] rounded-xl overflow-hidden ${isScrolled
                      ? "bg-white shadow-xl border border-gray-100"
                      : "bg-transparent"
                      }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-5 py-2.5 text-sm transition-colors duration-150 ${isScrolled
                          ? "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                          : "text-white/90 hover:text-white"
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium tracking-wide transition-colors duration-200 ${isScrolled
                  ? "text-gray-700 hover:text-purple-700"
                  : "text-white/90 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* CTA */}
          <Link
            href="#contact"
            className={`ml-4 px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${isScrolled
              ? "bg-purple-700 text-white hover:bg-purple-800 shadow-md hover:shadow-lg"
              : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
              }`}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } ${isScrolled ? "bg-white border-t border-gray-100" : "bg-black/70 backdrop-blur-md"}`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)
                  }
                  className={`w-full flex items-center justify-between py-2.5 text-sm font-medium ${isScrolled ? "text-gray-700" : "text-white"
                    }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${openMobileMenu === item.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openMobileMenu === item.label && (
                  <div className="pl-4 flex flex-col gap-1 mb-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`py-2 text-sm ${isScrolled ? "text-gray-500 hover:text-purple-700" : "text-white/75 hover:text-white"
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 text-sm font-medium ${isScrolled ? "text-gray-700 hover:text-purple-700" : "text-white hover:text-white/80"
                  }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 py-2.5 px-4 rounded-full text-sm font-semibold text-center bg-purple-700 text-white"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}
