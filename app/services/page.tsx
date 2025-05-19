import { Code, Smartphone, PenTool, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import ServiceCard from "@/components/service-card"

export const metadata = {
  title: "Services - TRIVINSAI Digital and Company",
  description: "Explore our website development, app creation, and digital marketing services",
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 dark:bg-[#6D819C] md:py-24 ">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help businesses thrive in the digital landscape.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Website Development Section */}
      <section id="websites" className="py-16 md:py-24 dark:bg-[#111827]">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row items-center gap-12 dark:bg-[#111827] ">
            <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden  ">
              <ScrollAnimation>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/services/webC.jpg?height=400&width=600"
                    alt="Website Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Development</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We create beautiful, responsive websites that captivate your audience and drive conversions. Our
                  websites are built with the latest technologies and optimized for performance and search engines.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Responsive Design:</span> Websites that look great on any device
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">SEO Optimization:</span> Built to rank well in search engines
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Performance:</span> Fast loading times and smooth interactions
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Content Management:</span> Easy-to-use systems for updating
                      content
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-primary dark:hover:bg-[#111827] dark:bg-[#6D819C] hover:bg-secondary text-white">Get a Quote</Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section id="apps" className="py-16 md:py-24  bg-gray-50 dark:bg-[#070c17]  ">
        <div className="container mx-auto px-4 dark:bg-[#070c17]">
          <div className="flex flex-col  lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden ">
              <ScrollAnimation>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/services/appC.jpg?height=400&width=600"
                    alt="App Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">App Development</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We develop native and cross-platform mobile applications that deliver exceptional user experiences.
                  Our team ensures your app is intuitive, stable, and performant.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Native Apps:</span> iOS and Android applications
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Cross-Platform:</span> Apps that work on multiple platforms
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">UX/UI Design:</span> Intuitive and engaging user interfaces
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Maintenance:</span> Ongoing support and updates
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-primary dark:hover:bg-[#111827] dark:bg-[#6D819C] hover:bg-secondary text-white">Get a Quote</Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Creation Section */}
      <section id="ads" className="py-16 md:py-24 dark:bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 dark:bg-[#111827]">
            <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden ">
              <ScrollAnimation>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/services/addC.jpg?height=400&width=600" alt="Ad Creation" fill className="object-cover" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ad Creation</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We design eye-catching ads and implement digital marketing strategies that boost your brand visibility
                  and drive conversions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Digital Marketing:</span> Comprehensive campaigns
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Visual Ads:</span> Eye-catching designs
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">Analytics:</span> Data-driven optimization
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 text-xl">•</span>
                    <p className="text-foreground">
                      <span className="font-semibold">ROI Tracking:</span> Measure campaign success
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-primary dark:hover:bg-[#111827] dark:bg-[#6D819C] hover:bg-secondary text-white">Get a Quote</Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 md:py-24  bg-gradient-to-b from-white to-orange-100 dark:from-[#111827] dark:to-[#6D819C]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive range of digital services
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <ServiceCard
                title="Website Development"
                description="Modern, responsive websites that captivate your audience and drive conversions."
                icon={Code}
                benefits={[
                  "Responsive design for all devices",
                  "SEO-optimized structure",
                  "Fast loading speeds",
                  "User-friendly CMS",
                ]}
                link="/contact?service=website"
              />
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <ServiceCard
                title="App Development"
                description="Native and cross-platform mobile applications that deliver exceptional user experiences."
                icon={Smartphone}
                benefits={[
                  "iOS and Android support",
                  "Intuitive user interfaces",
                  "Performance optimization",
                  "Regular updates & maintenance",
                ]}
                link="/contact?service=app"
              />
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <ServiceCard
                title="Ad Creation"
                description="Eye-catching ads and digital marketing strategies that boost your brand visibility."
                icon={PenTool}
                benefits={[
                  "Strategic campaign planning",
                  "Creative visual designs",
                  "Data-driven optimization",
                  "Performance tracking & reporting",
                ]}
                link="/contact?service=ad"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

                {/* Process Section */}
      <section className="py-20 flex justify-center dark:bg-[#111827] ">
        <div className="container mx-auto px-4 md:px-6 ">
          <ScrollAnimation>
            <div className="text-center mb-12 ">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-neutral-dark max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results for every project.
              </p>
            </div>
          </ScrollAnimation>

<div className="relative dark:bg-[#111827]  max-w-4xl mx-auto">
  {/* Vertical Line for Timeline */}
  <div className="hidden md:block absolute inset-y-0 left-1/2 w-[3px] rounded-full bg-gray-300 -translate-x-1/2 z-0" />

  <div className="space-y-12 relative z-10">
    {[
      {
        title: "1. Discovery",
        content: "We learn about your business, goals, and requirements to understand your unique needs.",
      },
      {
        title: "2. Strategy",
        content:
          "We develop a comprehensive strategy tailored to your specific objectives and target audience.",
      },
      {
        title: "3. Design",
        content:
          "Our creative team crafts visually appealing designs that align with your brand identity.",
      },
      {
        title: "4. Development",
        content:
          "Our technical team brings the designs to life with clean, efficient code and robust functionality.",
      },
      {
        title: "5. Testing",
        content:
          "Rigorous testing ensures everything works flawlessly across all devices and platforms.",
      },
      {
        title: "6. Launch",
        content:
          "We deploy your project and ensure a smooth transition to the live environment.",
      },
      {
        title: "7. Support",
        content:
          "Ongoing support and maintenance to keep your digital assets performing at their best.",
      },
    ].map((step, index) => (
      <ScrollAnimation key={index} delay={index * 100}>
        <div className="md:flex items-center relative">
          {/* Left Side */}
          <div className={`md:w-1/2 ${index % 2 === 0 ? "pr-12 md:text-right" : ""}`}>
            {index % 2 === 0 && (
              <>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-neutral-dark">{step.content}</p>
              </>
            )}
          </div>

          {/* Center Circle */}
          {/* <div className="md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2 z-10">
            <span className="font-bold">{index + 1}</span>
          </div> */}

          {/* Right Side */}
          <div className={`md:w-1/2 ${index % 2 === 1 ? "md:pl-12 mt-4 md:mt-0" : ""}`}>
            {index % 2 === 1 && (
              <>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-neutral-dark">{step.content}</p>
              </>
            )}
          </div>
        </div>
      </ScrollAnimation>
    ))}
  </div>
</div>
</div>
</section> 

       
      

      {/* CTA Section */}
      <section className="py-20 bg-orange-400 text-white">
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
