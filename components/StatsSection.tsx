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

const useCountUp = (target: number, duration: number = 2000, start: boolean) => {
  const [count, setCount] = useState(0)
  const frame = useRef<number>()

  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }

    let startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        frame.current = requestAnimationFrame(animate)
      }
    }

    frame.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frame.current!)
  }, [target, duration, start])

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
          observer.disconnect() // Only trigger once
        }
      },
      {
        threshold: 0.3,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#e5f6fd] to-[#ffffff]"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1e293b]">
          Trusted by Thousands
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.target, 2000, isVisible)

            return (
              <div
                key={index}
                className="group bg-white hover:shadow-2xl rounded-xl p-6 shadow-md transition-all duration-300 hover:scale-105 border border-[#dbeeff]"
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#169ed9]">
                  {count.toLocaleString()}
                </div>
                <div className="text-[#4b5563] mt-2 text-lg">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
