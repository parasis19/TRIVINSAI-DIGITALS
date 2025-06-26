"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Smartphone, PenTool, Megaphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites that captivate your audience and drive conversions.",
    icon: Code,
    benefits: ["SEO optimized design", "Fast-loading and mobile-friendly", "Built with latest frameworks"],
    link: "/services#websites",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver a seamless user experience.",
    icon: Smartphone,
    benefits: ["Cross-platform support", "User-centric design", "Robust performance and scalability"],
    link: "/services#apps",
  },
{
  title: "Visual Design",
  description: "Striking videos and graphic posters tailored to elevate your brand presence.",
  icon: PenTool,
  benefits: ["Engaging video production", "Custom poster design", "Cross-platform compatibility"],
  link: "/services#ads",
},

  {
    title: "Digital Marketing",
    description: "Strategies that boost online visibility and drive measurable business growth.",
    icon: Megaphone,
    benefits: ["Social media campaigns", "Performance tracking", "Content marketing"],
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
      {/* Background Image with Fade Effects */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 top-[-120px] w-full h-full z-0 pointer-events-none">
        <img
          src="/blob.jpg" // Replace with your image path
          alt="Background decoration"
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
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
                    <h3 className="text-2xl font-semibold mb-2 text-[#0f1e25] dark:text-white">{service.title}</h3>
                    <p className="text-[#334155] dark:text-gray-400 mb-4">{service.description}</p>
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
