import { Rocket, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import SecureTeamSection from "@/components/secure-team-section"

export const metadata = {
  title: "About Us - TRIVINSAI Digital and Company",
  description: "Learn more about TRIVINSAI Digital and Company's mission, vision, and team",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Devki M.",
      role: "Founder & CEO",
      
      image: "/ppl/c1.png",
    },
    {
      name: "Saroja D.",
      role: "General Manager (GM) ",
       
      image: "/ppl/c2.png",
    },
    {
      name: "Sahil P. ",
      role: "Cheif Technology Officer (CTO)",
       
      image: "/ppl/c3-2.png",
    },
    {
      name: "Saiyash M.",
      role: "Head of Digital Marketing",
       
      image: "/ppl/c4.png",
    },
        {
      name: "Rohan S.",
      role: "Head of Designer",
      
      image: "/ppl/c4.png",
    },
            
    {
      name: "Saloni S.",
      role: "Senior frentend Developer",
      
      image: "/ppl/c4.png",
    },       
     {
      name: "Prashant S.",
      role: "frontend developer",
      
      image: "/ppl/parasweb.png",
    },
     {
      name: "to be added.....",
      role: "you are the next member",
      image: "/ppl/c4.png",
    },
  ]

  return (
    <div className="pt-20 bg-gradient-to-r from-[#d8f1ff] via-white to-[#d8f1ff]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1e293b] dark:text-white">
                  About Us
                </h1>
                <p className="text-xl text-[#1e293b] dark:text-white leading-relaxed">
                  TRIVINSAI Digital is a creative agency that helps businesses transform their digital presence through
                  innovative websites, apps, and digital marketing.
                </p>
              </ScrollAnimation>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollAnimation>
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/ppl/us.png"
                    alt="About TRIVINSAI Digital team collaboration"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <ScrollAnimation>
              <div className="bg-white dark:bg-[#111827] rounded-xl shadow-lg p-8 border border-[#edeef0] hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#169ed9]/10 p-4 inline-block rounded-lg mb-6">
                  <Rocket className="h-8 w-8 text-[#169ed9]" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#1e293b] dark:text-white">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with digital solutions that drive growth, enhance user experience, and deliver
                  measurable results. We blend creativity with technology to create digital experiences that stand out.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="bg-white dark:bg-[#111827] rounded-xl shadow-lg p-8 border border-[#edeef0] hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#169ed9]/10 p-4 inline-block rounded-lg mb-6">
                  <Heart className="h-8 w-8 text-[#169ed9]" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#1e293b] dark:text-white">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the go-to digital partner for innovative, user-centered digital solutions. We're committed to
                  excellence and results.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#111827]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">Our Story</h2>
              <div className="w-24 h-1 bg-[#169ed9] mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <ScrollAnimation>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/carousel/slide4.jpg"
                    alt="TRIVINSAI Digital company story and growth"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <ScrollAnimation>
                <div className="space-y-4">
                  <p className="text-lg text-[#1e293b] dark:text-white leading-relaxed">
                    TRIVINSAI Digital was founded in 2024 to help businesses harness the power of technology and reach
                    their full potential.
                  </p>
                  <p className="text-lg text-[#1e293b] dark:text-white leading-relaxed">
                    What started as a small, passionate team has grown into a full-service agency of designers,
                    developers, and marketers.
                  </p>
                  <p className="text-lg text-[#1e293b] dark:text-white leading-relaxed">
                    We've worked with startups and enterprises alike to help them grow digitally and meet their business
                    goals.
                  </p>
                  <p className="text-lg text-[#1e293b] dark:text-white leading-relaxed">
                    Today, we continue to evolve and innovate to give our clients cutting-edge digital solutions.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Team Section */}
      <SecureTeamSection id="team" teamMembers={teamMembers} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#169ed9] dark:bg-[#1e293b]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Want to Work With Us?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Reach out today to discuss how we can help bring your digital vision to life.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#169ed9] hover:bg-gray-100 dark:bg-[#edeef0] dark:text-[#1e293b] dark:hover:bg-white transition-colors duration-300 px-8 py-3"
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
