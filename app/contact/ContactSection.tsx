"use client"

import type React from "react"
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
  FaStar,
  FaProjectDiagram
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

const contactMethods = [
  {
    title: "WhatsApp Chat",
    description: "Quickly reach us via WhatsApp for instant support and queries.",
    icon: FaWhatsapp,
    link: "https://wa.me/+918104880343",
    target: "_blank",
    color: "text-[#169ed9]",
    buttonLabel: "Start Chat",
  },
  {
    title: "Call Us",
    description: "We're just a phone call away. Available during business hours.",
    icon: FaPhoneAlt,
    link: "tel:+1234567890",
    target: "_self",
    color: "text-[#169ed9]",
    buttonLabel: "Call Now",
  },
  {
    title: "Email Us",
    description: "Send us your questions, feedback, or support requests anytime.",
    icon: FaEnvelope,
    link: "mailto:admin@trivinsai.com",
    target: "_blank",
    color: "text-[#169ed9]",
    buttonLabel: "Send Email",
  },
];

const trustedStats = [
  {
    icon: FaUsers,
    label: "Customers Served",
    value: 3500,
  },
  {
    icon: FaStar,
    label: "Trusted Consumers",
    value: 1200,
  },
  {
    icon: FaProjectDiagram,
    label: "Projects Done",
    value: 800,
  },
];

function TrustedByCustomers() {
  return (
    <section className="py-16 bg-[#edeef0] dark:bg-[#1e293b]" aria-label="Trusted by customers statistics">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-[#1e293b] dark:text-white">Trusted by Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustedStats.map(({ icon: Icon, label, value }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-[#1e293b] rounded-xl shadow-lg p-8 flex flex-col items-center justify-center"
            >
              <Icon className="text-[#169ed9] h-12 w-12 mb-4" />
              <p className="text-5xl font-extrabold text-[#169ed9] mb-2">{value.toLocaleString()}</p>
              <p className="text-lg font-medium text-gray-500 dark:text-gray-300">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
<div className="pt-20 bg-gradient-to-r from-[#a2e3ff] via-[#edeef0] to-[#a2e3ff] ">
  {/* Hero Section */}
  <section className="py-16 md:py-24 transition-all duration-300">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1e293b] dark:text-white">
        Contact Us
      </h1>
      <p className="text-xl text-[#1e293b] dark:text-white max-w-3xl mx-auto">
        Get in touch via call, email, or WhatsApp chat.
      </p>
    </div>
  </section>


      {/* Contact Methods */}
      <section className="py-20 px-10 bg-[#edeef0] dark:bg-[#1e293b]" id="contact-us">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#1e293b] dark:text-white">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map(({ title, description, icon: Icon, link, color, buttonLabel, target }, index) => (
              <a
                key={index}
                href={link}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className="bg-white dark:bg-[#1e293b] shadow-lg p-8 border-4 border-[#edeef0] hover:border-[#169ed9] transition-all duration-500 rounded-xl hover:shadow-2xl group block"
              >
                <div className={`bg-[#169ed9] bg-opacity-10 p-4 inline-block rounded-lg mb-6 ${color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b] dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

                <Button className="w-full bg-[#169ed9] hover:bg-[#1e293b] text-white transition-colors">
                  {buttonLabel}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>
    
    </div>
  );
}