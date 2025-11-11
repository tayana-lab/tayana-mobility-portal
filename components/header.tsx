"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center mt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tayanaLogo-8sVpBPeIrRvCl3lnLcOCv1ZyvX8gSH.png"
              alt="Tayana Mobility"
              width={280}
              height={90}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-white hover:text-cyan-400 transition-colors font-medium">
              HOME
            </Link>

            <div className="group relative">
              <button className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
                PRODUCTS
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="min-w-[240px] py-2">
                  <Link
                    href="#product1"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>5G Solutions</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#product2"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>Network Infrastructure</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#product3"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>IoT Platforms</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#product4"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>Cloud Services</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
                SOLUTIONS
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="min-w-[260px] py-2">
                  <Link href="#solution1" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Core Offerings
                  </Link>
                  <Link href="#solution2" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Digital Onboarding Solutions
                  </Link>
                  <Link
                    href="#solution3"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>Digital VAS Services</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#solution4"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>Cybersecurity</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="#solution5" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Device Management
                  </Link>
                  <Link href="#solution6" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Spam Call
                  </Link>
                  <Link
                    href="#solution7"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>Roaming Solutions</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="#solution8" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Testing Solutions
                  </Link>
                  <Link
                    href="#solution9"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>IoT & M2M</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#solution10"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>Telcovas OSS</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="#solution11" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Voice Fraud solutions
                  </Link>
                  <Link href="#solution12" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Storage Solutions
                  </Link>
                  <Link href="#solution13" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    Location-Based Services (LBS)
                  </Link>
                  <Link
                    href="#solution14"
                    className="flex items-center justify-between px-4 py-2.5 text-white hover:text-cyan-400 transition-all"
                  >
                    <span>Telcovas AI</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="#solution15" className="block px-4 py-2.5 text-white hover:text-cyan-400 transition-all">
                    ARA-Automated roaming assist
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              ABOUT
            </Link>
            <Link href="#contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              CONTACT
            </Link>
            <Link href="#careers" className="text-white hover:text-cyan-400 transition-colors font-medium">
              CAREERS
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-black/80 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <Link href="#home" className="text-white hover:text-cyan-400 transition-colors font-medium">
                HOME
              </Link>
              <Link href="#products" className="text-white hover:text-cyan-400 transition-colors font-medium">
                PRODUCTS
              </Link>
              <Link href="#solutions" className="text-white hover:text-cyan-400 transition-colors font-medium">
                SOLUTIONS
              </Link>
              <Link href="#about" className="text-white hover:text-cyan-400 transition-colors font-medium">
                ABOUT
              </Link>
              <Link href="#contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
                CONTACT
              </Link>
              <Link href="#careers" className="text-white hover:text-cyan-400 transition-colors font-medium">
                CAREERS
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
