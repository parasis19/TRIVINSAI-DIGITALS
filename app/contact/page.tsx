import ContactSection from "./ContactSection"

import ContactExtraSection from "@/components/ContactExtraSection"

export const metadata = {
  title: "Contact Us - Tivinsai Digitals",
  description: "Get in touch with us for inquiries, support, or collaboration opportunities.",
}

export default function ContactPage() {
  return (
    <>
    <ContactSection />
      <ContactExtraSection />
    </>
  )
}
