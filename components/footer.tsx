import Link from "next/link"
import {
  Mail,
  PhoneCall,
  Phone,
  MapPin,
  Facebook,
  PenOff,
  Instagram,
  Linkedin,
} from "lucide-react"
import { DragCloseDrawerExample } from "../components/DragCloseDrawer"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#e0f4ff] via-[#f2fbff] to-[#d3edff] dark:from-[#0f1e25] dark:via-[#11222c] dark:to-[#0f1e25] transition-all duration-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#169ed9]">TRIVINSAI Digital</h2>
            <p className="text-[#1e293b] dark:text-gray-400 mb-4">
              Transforming ideas into digital experiences. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Trivinsai/61565733548186/?mibextid=ZbWKwL"
                target="_blank"
                className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/trivinsai"
                target="_blank"
                className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                aria-label="PenOff"
              >
                <PenOff className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/trivinsai"
                target="_blank"
                className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/trivinsai-techpacktron-solutions-pvt-ltd/"
                target="_blank"
                className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#169ed9]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#websites"
                  className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#apps"
                  className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ads"
                  className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                >
                  Visual Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#design"
                  className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#169ed9]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#1e293b] dark:text-gray-400 hover:text-[#169ed9]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <DragCloseDrawerExample />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#169ed9]">Contact Us</h3>
            <ul className="space-y-4 text-[#1e293b] dark:text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#169ed9] mr-2 mt-0.5 flex-shrink-0" />
                <span>Ratna Mahal Tower, Matunga, Mumbai</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#169ed9] mr-2 flex-shrink-0" />
                <a href="tel:+918104880343" className="hover:text-[#169ed9] transition-colors">
                  +91 81048 80343
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#169ed9] mr-2 flex-shrink-0" />
                <a href="tel:+919768979213" className="hover:text-[#169ed9] transition-colors">
                  +91 97689 79213
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#169ed9] mr-2 flex-shrink-0" />
                <a
                  href="mailto:marketing@trivinsai.com"
                  className="hover:text-[#169ed9] transition-colors"
                >
                  marketing@trivinsai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-[#1e293b] dark:text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} TRIVINSAI Digital and Company. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Call Button */}
      <a
        href="tel:+918104880343"
        className="fixed bottom-7 right-7 dark:bg-[#1e3a8a] dark:hover:bg-[#3b82f6] bg-[#169ed9] hover:bg-[#128bc3] transition-colors p-4 rounded-full shadow-lg"
        aria-label="Call us"
      >
        <PhoneCall className="h-5 w-5 text-white" />
      </a>
    </footer>
  )
}
