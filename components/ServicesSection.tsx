'use client'

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Smartphone, PenTool, Megaphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites that captivate your audience and drive conversions.",
    icon: Code,
    benefits: [
      "SEO optimized design",
      "Fast-loading and mobile-friendly",
      "Built with latest frameworks",
    ],
    link: "/services#websites",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver a seamless user experience.",
    icon: Smartphone,
    benefits: [
      "Cross-platform support",
      "User-centric design",
      "Robust performance and scalability",
    ],
    link: "/services#apps",
  },
  {
    title: "Ad Creation",
    description: "Eye-catching ads and digital strategies that grow your brand visibility.",
    icon: PenTool,
    benefits: [
      "Creative visual design",
      "Optimized ad placement",
      "Multi-platform reach",
    ],
    link: "/services#ads",
  },
  {
    title: "Digital Marketing",
    description: "Strategies that boost online visibility and drive measurable business growth.",
    icon: Megaphone,
    benefits: [
      "Social media campaigns",
      "Performance tracking",
      "Content marketing",
    ],
    link: "/services#marketing",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function ServicesSection() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section className="relative overflow-hidden py-20 bg-white">
      
      {/* Blob Above Title */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto z-10 pointer-events-none opacity-20 blur-sm"
      >
        <svg
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path
            fill="#169fda"
            fillOpacity="0.5"
            d="M0,320L40,314.7C80,309,160,299,240,282.7C320,267,400,245,480,234.7C560,224,640,224,720,234.7C800,245,880,267,960,282.7C1040,299,1120,309,1200,288C1280,267,1360,213,1400,186.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </motion.div>

      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0f1e25]">Our Services</h2>
          <p className="text-lg text-[#0f1e25] dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your unique business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl shadow-lg bg-white dark:bg-[#11222c] transition-all duration-300 hover:shadow-2xl"
              >
                <div className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <Icon className="h-10 w-10 text-[#169fda] mb-4" />
                    <h3 className="text-2xl font-semibold mb-2 text-[#0f1e25] dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-[#334155] dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="text-sm text-[#0f1e25] dark:text-gray-300 list-disc list-inside space-y-1 mb-6">
                      {service.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={service.link}
                    className="inline-block mt-auto bg-[#169fda] text-white px-4 py-2 rounded-lg hover:bg-[#128bc3] transition duration-300 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
