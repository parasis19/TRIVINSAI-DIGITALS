"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  scrollY,
  scrollRange,
  mouseX,
  mouseY,
  mouseSensitivity = 0.5,
  mouseDirection = 1,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  scrollY: any
  scrollRange: [number, number]
  mouseX: any
  mouseY: any
  mouseSensitivity?: number
  mouseDirection?: number
}) {
  const scrollYTransform = useTransform(scrollY, [0, 1000], scrollRange)
  const mouseXTransform = useTransform(
    mouseX,
    [0, window?.innerWidth || 1920],
    [-20 * mouseSensitivity * mouseDirection, 20 * mouseSensitivity * mouseDirection],
  )
  const mouseYTransform = useTransform(
    mouseY,
    [0, window?.innerHeight || 1080],
    [-15 * mouseSensitivity * mouseDirection, 15 * mouseSensitivity * mouseDirection],
  )

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      style={{
        y: scrollYTransform,
        x: mouseXTransform,
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
          y: mouseYTransform,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[3px] border-2 border-white/[0.25]",
            "shadow-[0_12px_40px_0_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  badge = "Kokonut UI",
  title1 = "Elevate Your",
  title2 = "Digital Vision",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smooth mouse tracking with spring animation
  const mouseX = useSpring(mousePosition.x, { stiffness: 100, damping: 30 })
  const mouseY = useSpring(mousePosition.y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const titleY = useTransform(scrollY, [0, 500], [0, -100])
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const badgeY = useTransform(scrollY, [0, 400], [0, -80])
  const descriptionY = useTransform(scrollY, [0, 600], [0, -120])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
    >
      {/* Luxurious background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.08] via-transparent to-purple-600/[0.08] blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/[0.05] via-transparent to-cyan-500/[0.05] blur-2xl" />

      {/* Animated geometric shapes with smooth scroll and cursor movement */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-400/[0.25] via-indigo-400/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          scrollY={scrollY}
          scrollRange={[0, -120]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.3}
          mouseDirection={1}
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-purple-400/[0.25] via-pink-400/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          scrollY={scrollY}
          scrollRange={[0, 150]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.4}
          mouseDirection={-1}
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-cyan-400/[0.25] via-blue-400/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          scrollY={scrollY}
          scrollRange={[0, -80]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.6}
          mouseDirection={1}
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-400/[0.25] via-yellow-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          scrollY={scrollY}
          scrollRange={[0, 100]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.8}
          mouseDirection={-1}
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-emerald-400/[0.25] via-teal-400/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          scrollY={scrollY}
          scrollRange={[0, -60]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.7}
          mouseDirection={1}
        />

        <ElegantShape
          delay={0.8}
          width={250}
          height={70}
          rotate={18}
          gradient="from-violet-400/[0.25] via-purple-400/[0.15]"
          className="right-[8%] md:right-[12%] bottom-[20%] md:bottom-[25%]"
          scrollY={scrollY}
          scrollRange={[0, 90]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.5}
          mouseDirection={-1}
        />

        <ElegantShape
          delay={0.9}
          width={180}
          height={50}
          rotate={-12}
          gradient="from-rose-400/[0.25] via-pink-400/[0.15]"
          className="left-[35%] md:left-[40%] top-[80%] md:top-[85%]"
          scrollY={scrollY}
          scrollRange={[0, -70]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.4}
          mouseDirection={1}
        />

        <ElegantShape
          delay={1.0}
          width={120}
          height={35}
          rotate={30}
          gradient="from-indigo-400/[0.25] via-blue-400/[0.15]"
          className="right-[35%] md:right-[40%] top-[25%] md:top-[30%]"
          scrollY={scrollY}
          scrollRange={[0, 110]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.9}
          mouseDirection={-1}
        />

        <ElegantShape
          delay={1.1}
          width={220}
          height={65}
          rotate={-20}
          gradient="from-teal-400/[0.25] via-cyan-400/[0.15]"
          className="left-[60%] md:left-[65%] bottom-[40%] md:bottom-[45%]"
          scrollY={scrollY}
          scrollRange={[0, -50]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.3}
          mouseDirection={1}
        />

        <ElegantShape
          delay={1.2}
          width={160}
          height={45}
          rotate={25}
          gradient="from-orange-400/[0.25] via-red-400/[0.15]"
          className="right-[50%] md:right-[55%] bottom-[10%] md:bottom-[15%]"
          scrollY={scrollY}
          scrollRange={[0, 80]}
          mouseX={mouseX}
          mouseY={mouseY}
          mouseSensitivity={0.6}
          mouseDirection={-1}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ y: badgeY }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] mb-8 md:mb-12 backdrop-blur-sm shadow-lg"
          >
            <Image src="https://kokonutui.com/logo.svg" alt="Kokonut UI" width={20} height={20} />
            <span className="text-sm text-blue-100/80 tracking-wide font-medium">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-50 to-blue-100/90">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-200 to-pink-300",
                  pacifico.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ y: descriptionY }}
          >
            <p className="text-base sm:text-lg md:text-xl text-blue-100/60 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Crafting exceptional digital experiences through innovative design and cutting-edge technology that
              transforms your vision into reality.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/[0.08] text-blue-100 font-semibold rounded-full border border-white/20 hover:bg-white/[0.12] transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Luxurious overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-blue-950/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40 pointer-events-none" />
    </div>
  )
}
 