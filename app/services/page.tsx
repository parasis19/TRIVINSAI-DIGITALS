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
  <div className="pt-20 bg-gradient-to-r from-[#a2e3ff] via-[#edeef0] to-[#a2e3ff]">
  {/* Hero Section */}
  <section className="py-16 md:py-24 border-b transition-all duration-300 bg-gradient-to-r from-[#a2e3ff] via-[#edeef0] to-[#a2e3ff]">
    <div className="container mx-auto px-4 text-center">
      <ScrollAnimation>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1e293b] dark:text-white">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer comprehensive digital solutions to help businesses thrive in the digital landscape.
        </p>
      </ScrollAnimation>
    </div>
  </section>


      {/* Website Development */}
      <section id="websites" className="py-16 md:py-24 dark:bg-[#1e293b] bg-[#edeef0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <ScrollAnimation>
                <div className="relative h-[220px] xs:h-[260px] sm:h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/services/webC.jpg"
                    alt="Website Development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">
                  Website Development
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We create beautiful, responsive websites that captivate your audience and drive conversions.
                </p>
                <ul className="space-y-4">
                  {[
                    ["Responsive Design:", "Websites that look great on any device"],
                    ["SEO Optimization:", "Built to rank well in search engines"],
                    ["Performance:", "Fast loading times and smooth interactions"],
                    ["Content Management:", "Easy-to-use systems for updating content"],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#169ed9] mr-2 text-xl">•</span>
                      <p className="text-foreground">
                        <span className="font-semibold">{title}</span> {desc}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <a href="mailto:marketing@trivinsai.com" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#169ed9] hover:bg-[#127bb0] text-white">
                      Get a Quote
                    </Button>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* App Development */}
      <section id="apps" className="py-16 md:py-24 bg-[#edeef0] dark:bg-[#1e293b]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <ScrollAnimation>
                <div className="relative h-[220px] xs:h-[260px] sm:h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/services/appC.jpg"
                    alt="App Development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">
                  App Development
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We develop native and cross-platform mobile applications that deliver exceptional user experiences.
                </p>
                <ul className="space-y-4">
                  {[
                    ["Native Apps:", "iOS and Android applications"],
                    ["Cross-Platform:", "Apps that work on multiple platforms"],
                    ["UX/UI Design:", "Intuitive and engaging user interfaces"],
                    ["Maintenance:", "Ongoing support and updates"],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#169ed9] mr-2 text-xl">•</span>
                      <p className="text-foreground">
                        <span className="font-semibold">{title}</span> {desc}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <a href="mailto:marketing@trivinsai.com" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#169ed9] hover:bg-[#127bb0] text-white">
                      Get a Quote
                    </Button>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Creation */}
      <section id="ads" className="py-16 md:py-24 dark:bg-[#1e293b] bg-[#edeef0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <ScrollAnimation>
                <div className="relative h-[220px] xs:h-[260px] sm:h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/services/addC.jpg"
                    alt="Ad Creation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">
                  Ad Creation
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We design eye-catching ads and implement digital marketing strategies that boost your brand.
                </p>
                <ul className="space-y-4">
                  {[
                    ["Digital Marketing:", "Comprehensive campaigns"],
                    ["Visual Ads:", "Eye-catching designs"],
                    ["Analytics:", "Data-driven optimization"],
                    ["ROI Tracking:", "Measure campaign success"],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#169ed9] mr-2 text-xl">•</span>
                      <p className="text-foreground">
                        <span className="font-semibold">{title}</span> {desc}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <a href="mailto:marketing@trivinsai.com" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#169ed9] hover:bg-[#127bb0] text-white">
                      Get a Quote
                    </Button>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>


 {/* Digital Marketing */}
<section id="marketing" className="py-16 md:py-24 bg-[#edeef0] dark:bg-[#1e293b]">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
      
      {/* Right Image (will appear on top in mobile) */}
      <div className="lg:w-1/2 w-full">
        <ScrollAnimation>
          <div className="relative h-[220px] xs:h-[260px] sm:h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/services/digi.jpg"
              alt="Digital Marketing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </ScrollAnimation>
      </div>

      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-6">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">
            Digital Marketing
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            We create and execute results-driven digital marketing strategies tailored to grow your brand online.
          </p>
          <ul className="space-y-4">
            {[
              ["SEO:", "Optimize your website to rank higher on search engines"],
              ["Social Media:", "Build brand awareness through engaging content"],
              ["PPC Ads:", "Drive targeted traffic with paid advertising"],
              ["Analytics:", "Track performance and refine strategies"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#169ed9] mr-2 text-xl">•</span>
                <p className="text-foreground">
                  <span className="font-semibold">{title}</span> {desc}
                </p>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <a href="mailto:marketing@trivinsai.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#169ed9] hover:bg-[#127bb0] text-white">
                Get a Quote
              </Button>
            </a>
          </div>
        </ScrollAnimation>
      </div>

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

      {/* Call To Action */}
      <section className="py-20 bg-[#169ed9] text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Contact us today to discuss your project and how TRIVINSAI Digital can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-[#169ed9] hover:bg-gray-200 px-8 py-4 rounded-full transition-colors duration-300 font-medium"
            >
              Request a Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
