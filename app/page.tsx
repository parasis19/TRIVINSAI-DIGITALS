import { Code, Smartphone, PenTool, ArrowRightCircle, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import TestimonialsCarousel from "@/components/testimonial-carousel";
import ServiceCard from "@/components/service-card"


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
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 light:bg-white  dark:bg-[#111827] md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 animate-slide-in">
              <h1 className=" ligh:text-[#040866] dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your <span className="text-[#FFA500]">Digital Presence</span> With Us
              </h1>
              <p className="text-xl text-muted-foreground">
                TRIVINSAI Digital helps businesses thrive in the digital landscape with expert website development, app
                creation, and digital marketing services.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="dark:bg-primary dark:hover:bg-orange-600 hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl text-white">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary hover:bg-orange-400 dark:text-primary dark:hover:bg-primary hover:text-white dark:hover:text-white dark:bg-white hover:border-primary hover:shadow-2xl text-primary"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/4 px-4">
               <div className="aspect-square relative rounded-3xl overflow-hidden border-4 border-gray-300 hover:border-yellow-100 shadow-2xl transition-all duration-300 ease-in-out">
                  <video
                className="absolute inset-0 w-full h-full object-cover"
                 src="/logos/vidlogo.mp4"
                  autoPlay
               loop
               muted
              playsInline
                />
             </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-100 dark:from-[#111827] dark:to-[#334155]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    




{/* Testimonials Section */}
{/* Testimonials Section */}
<section className="py-16 md:py-24 bg-gradient-to-t from-white to-orange-100 dark:from-[#111827] dark:to-[#334155]">
  <div className="container mx-auto px-4">
    <ScrollAnimation>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say.
        </p>
      </div>
    </ScrollAnimation>

    <ScrollAnimation delay={100}>
      <TestimonialsCarousel />
    </ScrollAnimation>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 light: dark:bg-[#6D819C] from- bg-orange-200    ">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl text-[#1F2937] md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
              <p className="text-xl text-[#1F2937] text-muted-foreground mb-8">
                Join the hundreds of businesses that have transformed their digital strategy with TRIVINSAI Digital.
              </p>
              <Link href="/contact">
                <Button size="lg" className="dark:bg-[#1F2937] hover:bg-secondary text-white">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
