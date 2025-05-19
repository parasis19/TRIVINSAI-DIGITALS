import { Rocket, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "About Us - TRIVINSAI Digital and Company",
  description: "Learn more about TRIVINSAI Digital and Company's mission, vision, and team",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Davis",
      role: "Founder & CEO",
      bio: "With over 15 years in digital strategy and web development, John leads TRIVINSAI Digital with vision and expertise.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Sarah brings 10+ years of design experience, crafting beautiful, user-centered interfaces for our clients.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      bio: "Michael specializes in cutting-edge web technologies, ensuring our projects are built with the best practices.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emma Thompson",
      role: "Marketing Strategist",
      bio: "Emma develops data-driven marketing strategies that deliver measurable results for our clients.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
                <p className="text-xl text-muted-foreground">
                  TRIVINSAI Digital is a creative agency that helps businesses transform their digital presence through
                  innovative websites, apps, and digital marketing.
                </p>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 sm:w-auto" >
              <ScrollAnimation>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="About TRIVINSAI Digital"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollAnimation>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-border">
                <div className="bg-primary/10 p-4 inline-block rounded-lg mb-6">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower businesses with digital solutions that drive growth, enhance user experience, and deliver
                  measurable results. We strive to blend creativity with technology to create digital experiences that
                  stand out in the crowded digital landscape.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-border">
                <div className="bg-primary/10 p-4 inline-block rounded-lg mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the go-to digital partner for businesses seeking innovative, effective, and user-centered
                  digital solutions. We aim to be recognized for our commitment to excellence, creativity, and
                  results-driven approach in every project we undertake.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            </div>
          </ScrollAnimation>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <ScrollAnimation>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Our Story" fill className="object-cover" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <p className="text-lg text-muted-foreground">
                  TRIVINSAI Digital was founded in 2015 with a simple yet powerful idea: to help businesses harness the
                  power of digital technology to reach their full potential.
                </p>
                <p className="text-lg text-muted-foreground">
                  What started as a small team of passionate digital experts has grown into a comprehensive digital
                  agency with a diverse team of developers, designers, and marketers.
                </p>
                <p className="text-lg text-muted-foreground">
                  Over the years, we've had the privilege of working with businesses of all sizes, from startups to
                  established enterprises, helping them transform their digital presence and achieve their business
                  goals.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we continue to evolve and innovate, staying ahead of digital trends to provide our clients with
                  cutting-edge solutions that drive real business results.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The talented people behind TRIVINSAI Digital's success
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift border border-border">
                  <div className="relative h-80 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Work With Us?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Reach out today to discuss how we can help bring your digital vision to life.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-secondary text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
