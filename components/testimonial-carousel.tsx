"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    content:
      "TRIVINSAI Digital transformed our online presence completely. Their website design not only looks stunning but has significantly improved our conversion rates. The team was professional, responsive, and delivered beyond our expectations.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "GrowthBrand",
    content:
      "The app TRIVINSAI developed for us has received outstanding feedback from our users. Their attention to detail and focus on user experience is exceptional. They took our concept and elevated it to something truly remarkable.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder",
    company: "Artisan Collective",
    content:
      "Our digital marketing campaign with TRIVINSAI yielded a 200% increase in qualified leads. Their strategic approach and creative execution were exactly what we needed. I highly recommend their services to any business looking to grow.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative glassmorphism rounded-xl p-8 overflow-hidden">
      <div className="absolute top-8 left-6 text-primary/20">
        <Quote size={50} />
      </div>

      <div className="relative z-10">
        <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
              <div>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-neutral-dark">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-neutral"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full bg-white/80 hover:bg-primary/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white/80 hover:bg-primary/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
