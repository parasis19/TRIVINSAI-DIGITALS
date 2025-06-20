"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const slides = [
  { id: 0, image: "/carousel/slide5.jpg", highlight: "Build it" },
  { id: 1, image: "/carousel/slide1.jpg", highlight: "DESIGN" },
  { id: 2, image: "/carousel/slide2.jpg", highlight: "DEVELOP" },
  { id: 3, image: "/carousel/slide3.jpg", highlight: "CREATE" },
];

const variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 1, ease: "easeIn" },
  },
};

export default function FullscreenCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden rounded-b-3xl bg-black shadow-2xl">
      {/* Background fallback */}
      <div className="absolute inset-0 bg-black rounded-b-2xl" />

      {/* Carousel Images */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              className="absolute inset-0 overflow-hidden rounded-b-2xl"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Image
                src={slide.image}
                alt="Slide"
                fill
                className="object-cover rounded-b-2xl"
                priority
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-b-2xl" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-10">
        <div className="text-center max-w-4xl">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
            Your Digital Future starts here.{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={slides[current].highlight}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="inline-block rounded-xl bg-orange-400/40 dark:bg-blue-500/40 px-4 py-1 text-white backdrop-blur-sm"
              >
                {slides[current].highlight}
              </motion.span>
            </AnimatePresence>{" "}
            with TRIVINSAI
          </h2>

          <p className="mt-6 text-sm md:text-base text-neutral-200">
            "Trivinsai is the digital engine behind bold brands—empowering businesses to design smarter, develop faster, and create experiences that drive results."
          </p>

<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
  <Link href="/templates">
    <button className="rounded-md bg-orange-400 dark:bg-[#2858a5] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-500 dark:hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black">
      Explore Templates
    </button>
  </Link>
  <Link href="/contact">
    <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black">
      Get Started
    </button>
  </Link>
</div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
