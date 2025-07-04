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
import { useEffect, useRef, useState } from "react";
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
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const heroThreshold = 300;

  // Scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);

      if (currentY > heroThreshold) {
        if (currentY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close mobile nav
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <Navbar
      className={clsx(
        "fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out",
        {
          "translate-y-0": showNavbar,
          "-translate-y-full": !showNavbar,
          "text-[#111827]": isScrolled && showNavbar,
          "bg-transparent text-white": !isScrolled,
        }
      )}
    >
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={navItems}
          className={clsx("flex gap-6", {
            "text-black": isScrolled,
            "text-white": !isScrolled,
          })}
        />
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary"></NavbarButton>
          <Link href="/templates">
            <NavbarButton className="bg-[#0d597d] hover:bg-[#009fd9]">
              Templates
            </NavbarButton>
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

        {/* Transparent Overlay to close menu on outside click */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div
            ref={mobileMenuRef}
            className="flex w-full flex-col gap-6 px-6 py-6"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-600 dark:text-neutral-300 text-lg"
              >
                {item.name}
              </a>
            ))}
            <Link href="/templates">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-[#0d597d] hover:bg-[#009fd9]"
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
