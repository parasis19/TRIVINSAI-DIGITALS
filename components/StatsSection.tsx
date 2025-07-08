"use client"

import { useEffect, useRef, useState } from "react"
import { Users, ShieldCheck, CheckCircle } from "lucide-react"

const stats = [
  {
    label: "Customers Served",
    target: 3500,
    icon: <Users className="w-10 h-10 text-[#169ed9]" />,
  },
  {
    label: "Trusted Consumers",
    target: 1200,
    icon: <ShieldCheck className="w-10 h-10 text-[#169ed9]" />,
  },
  {
    label: "Projects Completed",
    target: 950,
    icon: <CheckCircle className="w-10 h-10 text-[#169ed9]" />,
  },
]

const useCountUp = (target: number, duration = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    if (!shouldStart) {
      setCount(0)
      return
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      startTimeRef.current = 0
    }
  }, [target, duration, shouldStart])

  return count
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    const container = containerRef.current
    if (container) {
      observer.observe(container)
    }

    return () => {
      if (container) observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#e5f6fd] to-[#ffffff]"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#0b486e]">
          Trusted by Thousands
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.target, 2000, isVisible)

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#dbeeff] shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#169ed9]">
                  {count.toLocaleString()}
                </div>
                <div className="text-[#0b486e] mt-2 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
