import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    title: "WhatsApp Chat",
    description: "Quickly reach us via WhatsApp for instant support and queries.",
    icon: FaWhatsapp,
    link: "https://wa.me/+919167885997",
    target: "_blank",
    color: "text-green-600",
    buttonLabel: "Start Chat",
  },
  {
    title: "Call Us",
    description: "We're just a phone call away. Available during business hours.",
    icon: FaPhoneAlt,
    link: "tel:+1234567890",
    target: "_self",
    color: "text-blue-600",
    buttonLabel: "Call Now",
  },
  {
    title: "Email Us",
    description: "Send us your questions, feedback, or support requests anytime.",
    icon: FaEnvelope,
    link: "mailto:support@example.com",
    target: "_blank",
    color: "text-red-600",
    buttonLabel: "Send Email",
  },
];


export default function ContactSection() {

  
  return (
    <section className="py-20 px-10 bg-gray-100 dark:bg-gray-900" id="contact-section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map(({ title, description, icon: Icon, link, color, buttonLabel, target }, index) => (
            <a
              key={index}
              href={link}
              target={target}
              rel={target === "_blank" ? "noopener noreferrer" : undefined}
              className="bg-white dark:bg-gray-800 shadow-lg p-8 border-4 border-border hover:border-[#FFA500] transition-all duration-500 rounded-xl hover:shadow-2xl group block"
            >
              <div className={`bg-primary/10 p-4 inline-block rounded-lg mb-6 ${color}`}>
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-muted-foreground mb-6">{description}</p>

              <a
                href={link}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
              >
                <Button className="w-full bg-primary hover:bg-secondary text-white transition-colors">
                  {buttonLabel}
                </Button>
              </a>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
