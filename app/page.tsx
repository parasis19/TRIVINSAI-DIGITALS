import { Code, Smartphone, PenTool, ArrowRightCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 animate-slide-in">
              <h1 className=" text-[#040866] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your <span className="text-primary">Digital Presence</span> With Us
              </h1>
              <p className="text-xl text-muted-foreground">
                TRIVINSAI Digital helps businesses thrive in the digital landscape with expert website development, app
                creation, and digital marketing services.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-[#040866] transition-all duration-300 hover:shadow-2xl text-white">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#040866] text-[#040866] hover:bg-primary hover:border-primary hover:shadow-2xl hover:text-white"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-2/4">
              <div className="relative h-[400px] md:h-[400px]  rounded-lg overflow-hidden">
                <Image
                  src="/logos/navlogo.png"
                  alt="Digital services illustration"
                  fill
                  className="h-100 w-400"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-trivinsai-light dark:from-background dark:to-gray-900/80">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer comprehensive digital solutions tailored to your unique business needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover-lift border border-border">
                <div className="bg-primary/10 p-4 inline-block rounded-lg mb-6">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Website Development</h3>
                <p className="text-muted-foreground mb-6">
                  Modern, responsive websites that captivate your audience and drive conversions.
                </p>
                <Link href="/services#websites" className="flex items-center text-primary font-medium">
                  Learn More <ArrowRightCircle className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover-lift border border-border">
                <div className="bg-primary/10 p-4 inline-block rounded-lg mb-6">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">App Development</h3>
                <p className="text-muted-foreground mb-6">
                  Native and cross-platform mobile applications that deliver exceptional user experiences.
                </p>
                <Link href="/services#apps" className="flex items-center text-primary font-medium">
                  Learn More <ArrowRightCircle className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover-lift border border-border">
                <div className="bg-primary/10 p-4 inline-block rounded-lg mb-6">
                  <PenTool className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ad Creation</h3>
                <p className="text-muted-foreground mb-6">
                  Eye-catching ads and digital marketing strategies that boost your brand visibility.
                </p>
                <Link href="/services#ads" className="flex items-center text-primary font-medium">
                  Learn More <ArrowRightCircle className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-border">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "TRIVINSAI Digital transformed our online presence completely. Our new website has increased
                  conversions by 40% in just two months."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">CEO, Retail Solutions</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-border">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "The app TRIVINSAI developed for us has received rave reviews from our users. Their attention to
                  detail and user experience is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Mark Williams</h4>
                    <p className="text-sm text-muted-foreground">Product Manager, TechStart</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-border">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6">
                  "Their digital marketing campaign doubled our lead generation within weeks. The team is responsive,
                  creative, and results-driven."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jennifer Lee</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director, GrowFast</p>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the hundreds of businesses that have transformed their digital strategy with TRIVINSAI Digital.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-secondary text-white">
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
