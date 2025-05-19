"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, Retail Solutions",
    quote:
      "TRIVINSAI Digital transformed our online presence. Conversions increased by 40% in just two months.",
    image: "/avatars/A5.png",
  },
  {
    name: "Mark Williams",
    position: "Product Manager, TechStart",
    quote:
      "The app they built received rave reviews. Their UX and attention to detail are unmatched.",
    image: "/avatars/A4.png",
  },
  {
    name: "Jennifer Lee",
    position: "Marketing Director, GrowFast",
    quote:
      "They brought our vision to life with pixel-perfect execution. Incredible engagement!",
    image: "/avatars/A3.png",
  },
  {
    name: "Daniel Kim",
    position: "CTO, InnovateX",
    quote:
      "A seamless process from start to finish. We’re thrilled with the final product.",
    image: "/avatars/A2.png",
  },
  {
    name: "Ayesha Patel",
    position: "Founder, EcoMart",
    quote:
      "Professional, creative, and easy to work with. Highly recommended.",
    image: "/avatars/A1.png",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (i: number) => {
    const offset = (i - index + total) % total;
    if (offset === 0) return "z-20 scale-100 opacity-100";
    if (offset === 1 || offset === total - 1)
      return "z-10 scale-90 opacity-60 translate-x-1/2 md:translate-x-0";
    return "hidden md:block opacity-0 scale-75";
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="relative flex items-center justify-center overflow-hidden h-[400px]">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className={`absolute w-full md:w-1/2 transition-all duration-500 ease-in-out transform ${getPositionClass(i)}`}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-border text-center mx-4">
              <div className="flex justify-center text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Buttons */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30">
        <button
          onClick={prev}
          className="p-2 dark:bg-[#6D819C] dark:hover:bg-[#39599c] hover:bg-orange-600 rounded-full bg-primary text-white hover:bg-primary/90 shadow"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30">
        <button
          onClick={next}
          className="p-2 dark:bg-[#6D819C] dark:hover:bg-[#39599c] hover:bg-orange-600 rounded-full bg-primary text-white hover:bg-primary/90 shadow"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}