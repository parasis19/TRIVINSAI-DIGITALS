import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "Privacy Policy - TRIVINSAI Digital and Company",
  description: "Privacy Policy for TRIVINSAI Digital and Company",
}

export default function PrivacyPage() {
  return (
<div className="pt-20 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 dark:from-[#1E293B] dark:via-[#334155] dark:to-[#1E293B] ">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">Last updated: May 17, 2025</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Introduction</h2>
                <p>
                  TRIVINSAI Digital and Company ("we," "our," or "us") respects your privacy and is committed to
                  protecting your personal data. This privacy policy will inform you about how we look after your
                  personal data when you visit our website and tell you about your privacy rights and how the law
                  protects you.
                </p>
                <p>
                  This privacy policy applies to all information collected through our website, as well as any related
                  services, sales, marketing, or events.
                </p>

                <h2>Data Collection</h2>
                <p>
                  We collect personal information that you voluntarily provide to us when you express an interest in
                  obtaining information about us or our products and services, when you participate in activities on the
                  website, or otherwise when you contact us.
                </p>
                <p>
                  The personal information that we collect depends on the context of your interactions with us and the
                  website, the choices you make, and the products and features you use. The personal information we
                  collect may include:
                </p>
                <ul>
                  <li>Name and contact data (such as your email address, phone number, and address)</li>
                  <li>Credentials (such as passwords and similar security information used for authentication)</li>
                  <li>Payment data (such as credit card information)</li>
                  <li>Business information (such as company name, department, job title)</li>
                </ul>

                <h2>Use of Your Information</h2>
                <p>
                  We use personal information collected via our website for a variety of business purposes described
                  below. We process your personal information for these purposes in reliance on our legitimate business
                  interests, in order to enter into or perform a contract with you, with your consent, and/or for
                  compliance with our legal obligations. We use the information we collect or receive:
                </p>
                <ul>
                  <li>To facilitate account creation and login process</li>
                  <li>To send administrative information to you</li>
                  <li>To send you marketing and promotional communications</li>
                  <li>To respond to your inquiries and provide customer service</li>
                  <li>To deliver targeted advertising to you</li>
                  <li>To protect our services</li>
                  <li>To respond to legal requests and prevent harm</li>
                </ul>

                <h2>Cookie Usage</h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our website and store
                  certain information. Cookies are files with a small amount of data which may include an anonymous
                  unique identifier. Cookies are sent to your browser from a website and stored on your device.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
                <p>We use the following types of cookies:</p>
                <ul>
                  <li>Essential cookies: These cookies are necessary for the website to function properly.</li>
                  <li>Preference cookies: These cookies remember your preferences and settings.</li>
                  <li>Analytics cookies: These cookies help us understand how visitors interact with our website.</li>
                  <li>
                    Marketing cookies: These cookies track your online activity to help advertisers deliver more
                    relevant advertising.
                  </li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We have implemented appropriate technical and organizational security measures designed to protect the
                  security of any personal information we process. However, despite our safeguards and efforts to secure
                  your information, no electronic transmission over the Internet or information storage technology can
                  be guaranteed to be 100% secure.
                </p>

                <h2>Your Privacy Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, such as:
                </p>
                <ul>
                  <li>The right to access the personal information we have about you</li>
                  <li>The right to request that we correct any personal information we have about you</li>
                  <li>The right to request that we delete any personal information we have about you</li>
                  <li>The right to opt-out of marketing communications</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the contact information provided below.</p>

                <h2>Contact Information</h2>
                <p>If you have questions or comments about this privacy policy, you may contact us at:</p>
                <p>
                  TRIVINSAI Digital and Company
                  <br />
                  123 Digital Avenue
                  <br />
                  Tech City, TC 12345
                  <br />
                  United States
                  <br />
                  Email: privacy@trivinsai.com
                  <br />
                  Phone: +1 (123) 456-7890
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions About Our Privacy Policy?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us if you have any questions or concerns about how we handle your data.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-secondary text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
