"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showContent, setShowContent] = useState(true); // <-- NEW state for hiding content

  const pathname = usePathname();
  const isHome = pathname === "/";
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      setShowNavbar(true);
      setShowContent(true); // always show content on non-home pages
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar on scroll direction and position
      if (currentScrollY > 50) {
        if (currentScrollY < lastScrollY.current) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      } else {
        setShowNavbar(true);
      }

      setScrolled(currentScrollY > 20);

      // THIS IS THE KEY: Hide content only if at very top (scrollY === 0)
      setShowContent(currentScrollY > 0);

      lastScrollY.current = currentScrollY;
    };

    // Initial check in case page loads scrolled
    setShowContent(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const baseStyles =
    "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out transform";

  const hiddenStyles = "-translate-y-full";
  const transparentTop = "bg-transparent backdrop-blur-0 shadow-none";
  const visibleBg = `
    bg-gradient-to-r 
    from-orange-200/70 via-orange-100/70 to-orange-200/70 
    dark:from-[#1F2A3C]/90 dark:via-[#2A3B52]/90 dark:to-[#111827]/90
    backdrop-blur-md shadow-sm
  `;
  const nonHomeBg = visibleBg;

  const navbarClassName = `${baseStyles} ${
    showNavbar ? "translate-y-0" : hiddenStyles
  } ${isHome ? (scrolled ? visibleBg : transparentTop) : nonHomeBg}`;

  // Add opacity and pointer-events-none when hiding content
  const contentVisibilityClass = showContent ? "opacity-100 pointer-events-auto transition-opacity duration-500" : "opacity-0 pointer-events-none transition-opacity duration-500";

  return (
    <header className={navbarClassName}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${contentVisibilityClass}`}>
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <img src="/logos/navlogo.png" alt="nav" className="h-14 w-auto mr-2" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/templates" className="nav-link">Templates</Link>
            <a href="/contact">
              <Button className="bg-primary text-primary-foreground rounded-full hover:bg-secondary">
                Contact Us
              </Button>
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden dark:bg-[#111827] bg-white border-t animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <ThemeToggle />
            <Link href="/" className="block py-2 px-3 dark:text-white text-[#111827] dark:hover:bg-[#6D819C] hover:bg-orange-200 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block py-2 px-3 dark:text-white text-[#111827] dark:hover:bg-[#6D819C] hover:bg-orange-200 rounded-md" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="block py-2 px-3 dark:text-white text-[#111827] dark:hover:bg-[#6D819C] hover:bg-orange-200 rounded-md" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/templates" className="block py-2 px-3 dark:text-white text-[#111827] dark:hover:bg-[#6D819C] hover:bg-orange-200 rounded-md" onClick={() => setIsOpen(false)}>Templates</Link>
            <Link href="/faq" className="block py-2 px-3 dark:text-white text-[#111827] dark:hover:bg-[#6D819C] hover:bg-orange-200 rounded-md" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link href="/contact" className="block py-2 px-3 bg-primary text-primary-foreground hover:bg-secondary rounded-md" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
