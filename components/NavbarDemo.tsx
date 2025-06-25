"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useEffect, useState } from "react";

import Link from "next/link";
import clsx from "clsx";

export function NavbarDemo() {
  const navItems = [
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const heroThreshold = 300; // adjust based on your hero height

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsScrolled(currentY > 10);

      if (currentY > heroThreshold) {
        if (currentY > lastScrollY) {
          setShowNavbar(false); // scroll down
        } else {
          setShowNavbar(true); // scroll up
        }
      } else {
        // Always show navbar within hero section
        setShowNavbar(true);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<Navbar
  className={clsx(
    "fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out",
    {
      "translate-y-0": showNavbar,
      "-translate-y-full": !showNavbar,
      "  text-[#111827] ": isScrolled && showNavbar,
      "bg-transparent text-white": !isScrolled,
    }
  )}
>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={navItems}
          className={clsx({
            "text-black": isScrolled,
            "text-white": !isScrolled,
          })}
        />
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary">
            
          </NavbarButton>
          <Link href="/templates">
            <NavbarButton className="bg-[#0d597d] hover:bg-[#009fd9]">Templates</NavbarButton>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <Link href="/templates">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Templates
              </NavbarButton>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
