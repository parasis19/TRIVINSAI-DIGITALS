import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "Contact Us - TRIVINSAI Digital and Company",
  description: "Get in touch with TRIVINSAI Digital and Company for your website, app, and ad creation needs",
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? We'd love to hear from you. Fill out the form below or reach out to us directly.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 space-y-8">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-6"></h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Digital Avenue
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+91 81048 80343" className="hover:text-primary transition-colors">
                          +91 81048 80343
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:marketing@trivinsai.com" className="hover:text-primary transition-colors">
                          marketing@trivinsai.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold mb-3">Business Hours</h3>
                  <p className="text-muted-foreground mb-2">Monday - Friday: 9am - 6pm</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:w-2/3">
              <ScrollAnimation>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Visit our office or send us mail at this address
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-[500px] border border-border">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
                  {/* <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5876321140017!2d72.84761467466427!3d19.03788430316911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9867b4edd23%3A0xe76e2685670d674d!2sRatna%20Mahal%20tower!5e0!3m2!1sen!2sin!4v1747513450801!5m2!1sen!2sin" 
    width="100%"
    height="100%"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0 w-full h-full"
  ></iframe> */}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Find quick answers to common questions about our services
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto">
            <ScrollAnimation>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-2">What is the typical timeline for a website project?</h3>
                  <p className="text-muted-foreground">
                    Most website projects take between 4-8 weeks from start to finish, depending on complexity and
                    scope. We'll provide you with a detailed timeline during our initial consultation.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support after launch?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer various maintenance and support packages to keep your website or app running smoothly
                    after launch. Our team is always available to help with updates, security, and optimization.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-2">How do I get started with a project?</h3>
                  <p className="text-muted-foreground">
                    Simply fill out our contact form or give us a call. We'll schedule an initial consultation to
                    discuss your project requirements, timeline, and budget before creating a customized proposal.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="text-center mt-12">
                <p className="mb-4 text-muted-foreground">Have more questions?</p>
                <Link href="/faq" className="text-primary font-medium hover:underline">
                  View our full FAQ page
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
