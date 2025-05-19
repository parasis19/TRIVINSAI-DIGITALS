import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Smartphone, PenTool, BarChart, Search, Palette, Shield } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  image: string
}

const services: Service[] = [
  {
    id: "websites",
    title: "Website Development",
    description:
      "Custom, responsive websites that engage visitors and drive conversions. We build with the latest technologies for optimal performance and user experience.",
    features: [
      "Responsive design for all devices",
      "SEO-friendly architecture",
      "Fast loading speeds",
      "Content management systems",
      "E-commerce functionality",
      "Custom web applications",
    ],
    icon: <Globe size={24} className="text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "apps",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that provide seamless user experiences and solve real business problems.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "User-centered design",
      "API integration",
      "Performance optimization",
      "Ongoing maintenance and support",
    ],
    icon: <Smartphone size={24} className="text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "ads",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that increase brand awareness, drive traffic, and generate qualified leads for your business.",
    features: [
      "Social media marketing",
      "Search engine marketing (SEM)",
      "Email marketing campaigns",
      "Content marketing strategy",
      "Analytics and reporting",
      "Conversion rate optimization",
    ],
    icon: <PenTool size={24} className="text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
  },
]

const additionalServices = [
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    icon: <Search size={24} className="text-primary" />,
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive, engaging user experiences that keep visitors coming back.",
    icon: <Palette size={24} className="text-primary" />,
  },
  {
    title: "Analytics & Reporting",
    description: "Gain insights into your digital performance with comprehensive analytics.",
    icon: <BarChart size={24} className="text-primary" />,
  },
  {
    title: "Web Security",
    description: "Protect your digital assets with robust security measures and regular updates.",
    icon: <Shield size={24} className="text-primary" />,
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-neutral-dark text-lg mb-8">
              Comprehensive digital solutions tailored to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="mb-24 last:mb-0">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <ScrollAnimation>
                  <div className="space-y-6">
                    <div className="bg-white/80 p-3 rounded-lg w-fit">{service.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                    <p className="text-neutral-dark text-lg">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-primary hover:bg-orange-400 text-white px-6 py-3 rounded-full transition-colors duration-300 mt-4"
                    >
                      Get Started
                      <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={200}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-md transform rotate-2"></div>
                    <div className="glassmorphism rounded-2xl p-6 relative">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
              <p className="text-neutral-dark max-w-2xl mx-auto">
                Complementary services to enhance your digital presence and performance.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 100}>
                <div className="glassmorphism rounded-xl p-6 h-full">
                  <div className="bg-white/80 p-3 rounded-lg w-fit mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-dark">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 dark:bg-[#111827]">
        <div className="container mx-auto dark:bg-[#111827]  px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center dark:bg-[#111827]  mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-neutral-dark max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results for every project.
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative max-w-4xl dark:bg-[#111827] mx-auto">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              <ScrollAnimation>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">1. Discovery</h3>
                    <p className="text-neutral-dark">
                      We learn about your business, goals, and requirements to understand your unique needs.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-12 md:text-right"></div>
                  <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">2. Strategy</h3>
                    <p className="text-neutral-dark">
                      We develop a comprehensive strategy tailored to your specific objectives and target audience.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">3. Design</h3>
                    <p className="text-neutral-dark">
                      Our creative team crafts visually appealing designs that align with your brand identity.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-12 md:text-right"></div>
                  <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">4. Development</h3>
                    <p className="text-neutral-dark">
                      Our technical team brings the designs to life with clean, efficient code and robust functionality.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">5. Testing</h3>
                    <p className="text-neutral-dark">
                      Rigorous testing ensures everything works flawlessly across all devices and platforms.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={500}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-12 md:text-right"></div>
                  <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="font-bold">6</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">6. Launch</h3>
                    <p className="text-neutral-dark">
                      We deploy your project and ensure a smooth transition to the live environment.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={600}>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2">7. Support</h3>
                    <p className="text-neutral-dark">
                      Ongoing support and maintenance to keep your digital assets performing at their best.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                    <span className="font-bold">7</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Contact us today to discuss your project and how TRIVINSAI Digital can help you achieve your digital
                goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full transition-colors duration-300 font-medium"
              >
                Request a Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
