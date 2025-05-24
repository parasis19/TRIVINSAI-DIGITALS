"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = `relative font-medium duration-300 transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
    scrolled ? "text-black dark:text-white" : "text-white"
  }`

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-[#6D819C]/90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <img src="/logos/navlogo.png" alt="nav" className="h-14 w-auto mr-2" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={linkClass}>Home</Link>
            <Link href="/services" className={linkClass}>Services</Link>
            <Link href="/about" className={linkClass}>About</Link>
            <Link href="/templates" className={linkClass}>Templates</Link>
            <a href="#contact-section">
              <Button className="bg-primary text-primary-foreground rounded-full hover:bg-secondary">Contact Us</Button>
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#111827] border-t animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <ThemeToggle />
            <Link href="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className={linkClass} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/templates" className={linkClass} onClick={() => setIsOpen(false)}>Templates</Link>
            <Link href="/faq" className={linkClass} onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link
              href="/contact"
              className="block py-2 px-3 bg-primary text-primary-foreground hover:bg-secondary rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
