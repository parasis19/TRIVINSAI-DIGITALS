"use client"
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
import { useState } from "react"
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

  return (
    <div className="relative w-full">
      <Navbar>
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
