"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"

const Example = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Heading Section */}
      <div className="flex h-64 items-center justify-center flex-col">
        <h1 className="text-5xl font-light mb-4 text-gray-200 tracking-wide">Gallery</h1>
        <span className="font-light text-gray-500 text-sm tracking-widest">scroll</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-light text-gray-500 text-sm tracking-widest">end</span>
      </div>
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-gray-800 border border-gray-700"
    >
      {/* Full Size Image */}
      <img
        src={card.imageUrl || "/placeholder.svg?height=450&width=450"}
        alt={card.alt}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-all duration-500 z-10"></div>
    </div>
  )
}

export default Example

type CardType = {
  imageUrl: string
  alt: string
  id: number
}

const cards: CardType[] = [
  {
    imageUrl: "/placeholder.svg?height=450&width=450",
    alt: "Image 1",
    id: 1,
  },
  {
    imageUrl: "/placeholder.svg?height=450&width=450",
    alt: "Image 2",
    id: 2,
  },
  {
    imageUrl: "/placeholder.svg?height=450&width=450",
    alt: "Image 3",
    id: 3,
  },
  {
    imageUrl: "/placeholder.svg?height=450&width=450",
    alt: "Image 4",
    id: 4,
  },
  {
    imageUrl: "/placeholder.svg?height=450&width=450",
    alt: "Image 5",
    id: 5,
  },
  {
    imageUrl: "/placeholder.svg?height=450&width=450",
    alt: "Image 6",
    id: 6,
  },
  {
    imageUrl: "/placeholder.svg?height=450&width=450",
    alt: "Image 7",
    id: 7,
  },
]
