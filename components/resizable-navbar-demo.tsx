"use client"

import { useState, useEffect, useRef } from "react"
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
} from "@/components/ui/resizable-navbar"
import {
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconBrandGoogle,
  IconUsers,
  IconTarget,
  IconAward,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react"

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Services",
      link: "/services",
      dropdown: [
        {
          name: "Web Development",
          description: "Custom websites and web applications built with modern technologies",
          href: "/services#web",
          icon: <IconCode size={20} />,
        },
        {
          name: "App Development",
          description: "Native and cross-platform mobile applications for iOS and Android",
          href: "/services#app",
          icon: <IconDeviceMobile size={20} />,
        },
        {
          name: "Graphic Design",
          description: "Creative visual solutions including branding, logos, and marketing materials",
          href: "/services#ads",
          icon: <IconPalette size={20} />,
        },
        {
          name: "Digital Marketing",
          description: "SEO, social media marketing, and online advertising strategies",
          href: "/services#marketing",
          icon: <IconBrandGoogle size={20} />,
        },
      ],
    },
    {
      name: "About Us",
      link: "/about",
      dropdown: [
        {
          name: "Our Team",
          description: "Meet the talented professionals behind our success",
          href: "/about#team",
          icon: <IconUsers size={20} />,
        },
        {
          name: "Our Mission",
          description: "Learn about our vision and commitment to excellence",
          href: "/about#mission",
          icon: <IconTarget size={20} />,
        },
        {
          name: "Testimonials",
          description: "See what our clients say about us",
          href: "/about#review",
          icon: <IconAward size={20} />,
        },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
      dropdown: [
        {
          name: "Email Support",
          description: "Get help via email within 24 hours",
          href: "/contact",
          icon: <IconMail size={20} />,
        },
        {
          name: "Phone Support",
          description: "Speak directly with our support team",
          href: "/contact",
          icon: <IconPhone size={20} />,
        },
        {
          name: "Office Location",
          description: "Visit us at our headquarters",
          href: "/contact",
          icon: <IconMapPin size={20} />,
        },
      ],
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true) // State to control navbar visibility
  const [isDesktop, setIsDesktop] = useState(false) // State to track desktop view
  const lastScrollY = useRef(0) // Ref to store the last scroll position

  useEffect(() => {
    // Function to update isDesktop state based on window width
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768) // Assuming 'md' breakpoint for desktop
    }

    // Function to handle scroll behavior
    const handleScroll = () => {
      if (!isDesktop) {
        // If not desktop, ensure navbar is always visible and exit
        setIsVisible(true)
        return
      }

      const currentScrollY = window.scrollY

      // Hide navbar if scrolling down and past a certain scroll threshold (e.g., 100px)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      }
      // Show navbar if scrolling up
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    // Initial check on mount
    handleResize()

    // Add event listeners
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isDesktop]) // Re-run effect if isDesktop changes

  return (
    <div className="relative w-full">
      <Navbar
        className={`fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          isDesktop && !isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="/templates" className="rounded-full" variant="primary">
              Templates
            </NavbarButton>
          </div>
        </NavBody>
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <div key={`mobile-section-${idx}`} className="w-full">
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mb-2 font-medium text-neutral-900 dark:text-neutral-100 hover:text-[#0b486e] transition-colors block"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 space-y-2">
                    {item.dropdown.map((dropdownItem, dropdownIdx) => (
                      <a
                        key={`mobile-dropdown-${idx}-${dropdownIdx}`}
                        href={dropdownItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
                      >
                        {dropdownItem.icon}
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <NavbarButton
                href="/templates"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Templates
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

    </div>
  )
}
