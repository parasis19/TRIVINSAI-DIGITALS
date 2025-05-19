import Link from "next/link"
import { Mail, PhoneCall , Phone, MapPin, Facebook, PenOff, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-foreground">TRIVINSAI Digital</h2>
            <p className="text-muted-foreground mb-4">
              Transforming ideas into digital experiences. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/trivinsai" 
              target="_blank"
              className="text-muted-foreground hover:text-primary" aria-label="PenOff">
                <PenOff className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/trivinsai" 
              target="_blank"
              className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/trivinsai-techpacktron-solutions-pvt-ltd/"
              target="_blank"
              className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#websites" className="text-muted-foreground hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#apps" className="text-muted-foreground hover:text-primary transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ads" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#design" className="text-muted-foreground hover:text-primary transition-colors">
                  Visual Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-muted-foreground hover:text-primary transition-colors">
                  Template Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">123 Digital Avenue, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a href="tel:+91 81048 80343" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 81048 80343
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a
                  href="mailto:marketing@trivinsai.com
"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                marketing@trivinsai.com

                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TRIVINSAI Digital and Company. All rights reserved.</p>
        </div>
      </div>
        <a
        href="tel:+11234567890"
        className="fixed bottom-6 right-6 dark:bg-[#6D819C] dark:hover:bg-[#39599c] bg-orange-400 hover:bg-orange-600 transition-colors p-4 rounded-full "
        aria-label="call us"
      >
        <PhoneCall  className="h-5 w-5 text-white" />
      </a>
    </footer>
  )
}
