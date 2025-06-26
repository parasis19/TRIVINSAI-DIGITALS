
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
      image: "/ppl/c1.png?height=300&width=300",
    },
    {
      name: "Saran Johnson",
      role: "Creative Director",
      bio: "Sarah brings 10+ years of design experience, crafting beautiful, user-centered interfaces for our clients.",
      image: "/ppl/c2.png?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      bio: "Michael specializes in cutting-edge web technologies, ensuring our projects are built with the best practices.",
      image: "/ppl/c3-2.png?height=300&width=300",
    },
    {
      name: "Emma Thompson",
      role: "Marketing Strategist",
      bio: "Emma develops data-driven marketing strategies that deliver measurable results for our clients.",
      image: "/ppl/c4.png?height=300&width=300",
    },
  ]

  return (
<div className="pt-20 bg-gradient-to-r from-[#d8f1ff] via-white to-[#d8f1ff] ">
{/* Hero Section */}
<section className="py-16 md:py-24 bg-gradient-to-r from-[#d8f1ff] via-white to-[#d8f1ff] transition-all duration-300">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-6">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1e293b] dark:text-white">
            About Us
          </h1>
          <p className="text-xl text-[#1e293b] dark:text-white">
            TRIVINSAI Digital is a creative agency that helps businesses transform their digital presence through
            innovative websites, apps, and digital marketing.
          </p>
        </ScrollAnimation>
      </div>
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <ScrollAnimation>
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/ppl/us.png?height=400&width=600"
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
      <section className="py-16 md:py-24 bg-[#edeef0] dark:bg-[#1e293b]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollAnimation>
              <div className="bg-white dark:bg-[#111827] rounded-xl shadow-lg p-8 border border-[#edeef0]">
                <div className="bg-[#169ed9]/10 p-4 inline-block rounded-lg mb-6">
                  <Rocket className="h-8 w-8 text-[#169ed9]" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#1e293b] dark:text-white">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses with digital solutions that drive growth, enhance user experience, and deliver
                  measurable results. We blend creativity with technology to create digital experiences that stand out.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-white dark:bg-[#111827] rounded-xl shadow-lg p-8 border border-[#edeef0]">
                <div className="bg-[#169ed9]/10 p-4 inline-block rounded-lg mb-6">
                  <Heart className="h-8 w-8 text-[#169ed9]" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#1e293b] dark:text-white">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the go-to digital partner for innovative, user-centered digital solutions. We're committed to excellence and results.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-[#edeef0] dark:bg-[#1e293b]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">Our Story</h2>
            </div>
          </ScrollAnimation>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <ScrollAnimation>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image src="/carousel/slide4.jpg?height=400&width=600" alt="Our Story" fill className="object-cover" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <p className="text-lg text-[#1e293b] dark:text-white">
                  TRIVINSAI Digital was founded in 2024 to help businesses harness the power of technology and reach their full potential.
                </p>
                <p className="text-lg text-[#1e293b] dark:text-white">
                  What started as a small, passionate team has grown into a full-service agency of designers, developers, and marketers.
                </p>
                <p className="text-lg text-[#1e293b] dark:text-white">
                  We've worked with startups and enterprises alike to help them grow digitally and meet their business goals.
                </p>
                <p className="text-lg text-[#1e293b] dark:text-white">
                  Today, we continue to evolve and innovate to give our clients cutting-edge digital solutions.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#edeef0] dark:bg-[#1e293b]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">Meet Our Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The talented people behind TRIVINSAI Digital's success.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} delay={index * 100}>
                <div className="bg-white dark:bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-[#edeef0] hover:shadow-2xl">
                  <div className="relative h-80 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1e293b] dark:text-white">{member.name}</h3>
                    <p className="text-[#169ed9] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#169ed9] dark:bg-[#1e293b]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1e293b] dark:text-[#edeef0]">
                Want to Work With Us?
              </h2>
              <p className="text-xl text-[#1e293b] dark:text-[#edeef0] mb-8">
                Reach out today to discuss how we can help bring your digital vision to life.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#1e293b] text-white hover:bg-[#111827] dark:bg-[#edeef0] dark:text-[#1e293b] dark:hover:bg-white"
                >
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