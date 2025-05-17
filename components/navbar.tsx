"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-background/90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              
              <img src="/logos/navlogo.png" 
              alt="nav"
              className="h-14 w-auto mr-2" 
              />
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>            
            <Link href="/services" className="text-foreground hover:text-primary font-medium transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link href="/templates" className="text-foreground hover:text-primary font-medium transition-colors">
              Templates
            </Link>

            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-secondary">Contact Us</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-background border-t animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block py-2 px-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 px-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 px-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/templates"
              className="block py-2 px-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/faq"
              className="block py-2 px-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
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
