"use client"

import React, { useEffect, useRef, useState, createContext, useContext } from "react"

import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

import { AnimatePresence, motion } from "motion/react"

import Image, { type ImageProps } from "next/image"

import { useOutsideClick } from "@/hooks/use-outside-click"

import type { CardData } from "@/app/templates/data/cards-data"

import { TemplatePreview } from "./template-preview"

interface CarouselProps {
  items: React.ReactNode[]
  initialScroll?: number
  title?: string
  subtitle?: string
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const Carousel = ({
  items,
  initialScroll = 0,
  title = "Featured Templates",
  subtitle = "Discover our collection of beautiful, responsive templates",
}: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [canScrollUp, setCanScrollUp] = React.useState(false)
  const [canScrollDown, setCanScrollDown] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  useEffect(() => {
    if (!isAutoSliding) return

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const isMobileView = window.innerWidth < 768

        if (isMobileView) {
          // Vertical scrolling for mobile
          const { scrollTop, scrollHeight, clientHeight } = carouselRef.current
          const isAtEnd = scrollTop >= scrollHeight - clientHeight - 10

          if (isAtEnd) {
            // Reset to beginning
            carouselRef.current.scrollTo({ top: 0, behavior: "smooth" })
          } else {
            // Scroll to next
            carouselRef.current.scrollBy({ top: 250, behavior: "smooth" })
          }
          checkScrollability()
        } else {
          // Horizontal scrolling for desktop
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
          const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10

          if (isAtEnd) {
            // Reset to beginning
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
          } else {
            // Scroll to next
            carouselRef.current.scrollBy({ left: 400, behavior: "smooth" })
          }
          checkScrollability()
        }
      }
    }, 3000) // Auto-slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoSliding])

  useEffect(() => {
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768
      if (isMobileView) {
        carouselRef.current.scrollTop = initialScroll
      } else {
        carouselRef.current.scrollLeft = initialScroll
      }
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768

      if (isMobileView) {
        // Check vertical scrollability
        const { scrollTop, scrollHeight, clientHeight } = carouselRef.current
        setCanScrollUp(scrollTop > 0)
        setCanScrollDown(scrollTop < scrollHeight - clientHeight)
      } else {
        // Check horizontal scrollability
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
      }
    }
  }

  const scrollLeft = () => {
    setIsAutoSliding(false)
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768
      if (isMobileView) {
        carouselRef.current.scrollBy({ top: -250, behavior: "smooth" })
      } else {
        carouselRef.current.scrollBy({ left: -400, behavior: "smooth" })
      }
    }
    // Resume auto-slide after 5 seconds
    setTimeout(() => setIsAutoSliding(true), 5000)
  }

  const scrollRight = () => {
    setIsAutoSliding(false)
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768
      if (isMobileView) {
        carouselRef.current.scrollBy({ top: 250, behavior: "smooth" })
      } else {
        carouselRef.current.scrollBy({ left: 400, behavior: "smooth" })
      }
    }
    // Resume auto-slide after 5 seconds
    setTimeout(() => setIsAutoSliding(true), 5000)
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const isMobileView = window.innerWidth < 768

      if (isMobileView) {
        // Calculate based on fixed height (180px) + gap
        const cardHeight = 180
        const gap = 24 // 6 * 4px (gap-6)
        const scrollPosition = (cardHeight + gap) * (index + 1)
        carouselRef.current.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        })
      } else {
        // Calculate based on fixed width (576px) + gap
        const cardWidth = 576
        const gap = 32 // 8 * 4px (gap-8)
        const scrollPosition = (cardWidth + gap) * (index + 1)
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="px-4 md:px-16">
          <div
            className={cn(
              "flex w-full py-10 md:py-20 scroll-smooth [scrollbar-width:none]",
              // Mobile: vertical scroll, Desktop: horizontal scroll
              "overflow-y-scroll overscroll-y-auto md:overflow-x-scroll md:overscroll-x-auto md:overflow-y-hidden",
            )}
            ref={carouselRef}
            onScroll={checkScrollability}
            onMouseEnter={() => setIsAutoSliding(false)}
            onMouseLeave={() => setIsAutoSliding(true)}
          >
            <div
              className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l md:block hidden")}
            ></div>
            <div
              className={cn(
                "flex mx-auto max-w-7xl",
                // Mobile: vertical layout with gaps, Desktop: horizontal layout with gaps
                "flex-col gap-6 items-center md:flex-row md:justify-start md:gap-8 md:items-start md:pl-4",
              )}
            >
              {items.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                      once: true,
                    },
                  }}
                  key={"card" + index}
                  className="rounded-3xl flex-shrink-0 last:pb-[5%] md:last:pb-0 md:last:pr-[33%]"
                >
                  {item}
                </motion.div>
              ))}
              {/* Templates Button Card - Exact same dimensions as other cards */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * items.length,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                className="rounded-3xl flex-shrink-0 pb-[5%] md:pb-0 md:pr-[33%]"
              >
                <motion.button
                  onClick={() => (window.location.href = "/templates")}
                  className="relative z-10 flex w-80 h-[180px] md:w-[576px] md:h-[324px] flex-col items-start justify-start overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 border-4 border-blue-400 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/20 via-transparent to-transparent" />
                  <div className="relative z-40 p-4 md:p-8">
                    <motion.p className="text-left font-sans text-xs font-medium text-white/80 md:text-lg">
                      Explore More
                    </motion.p>
                    <motion.p className="mt-1 md:mt-2 max-w-xs md:max-w-lg text-left font-sans text-sm font-semibold [text-wrap:balance] text-white md:text-3xl">
                      View All Templates
                    </motion.p>
                  </div>
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-full backdrop-blur-sm">
                    <svg
                      className="w-4 h-4 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Navigation buttons positioned on sides */}
          <button
            className="absolute left-1 md:left-4 top-1/2 z-40 flex h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 hover:bg-white disabled:opacity-50 shadow-lg transition-all duration-200 backdrop-blur-sm"
            onClick={scrollLeft}
            disabled={isMobile() ? !canScrollUp : !canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>
          <button
            className="absolute right-1 md:right-4 top-1/2 z-40 flex h-10 w-10 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 hover:bg-white disabled:opacity-50 shadow-lg transition-all duration-200 backdrop-blur-sm"
            onClick={scrollRight}
            disabled={isMobile() ? !canScrollDown : !canScrollRight}
          >
            <IconArrowNarrowRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const Card = ({
  card,
  index,
  layout = false,
  isTemplateCard = false,
}: {
  card: CardData
  index: number
  layout?: boolean
  isTemplateCard?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
  const { onCardClose, currentIndex } = useContext(CarouselContext)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  useOutsideClick(containerRef, () => handleClose())

  const handleOpen = () => {
    if (isTemplateCard) {
      window.location.href = "/templates"
      return
    }
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    onCardClose(index)
  }

  return (
    <>
      {!isTemplateCard && (
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                ref={containerRef}
                className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto max-w-lg md:max-w-3xl"
              >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700 p-6 rounded-t-2xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{card.category}</p>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white pr-8">{card.title}</h2>
                    </div>
                    <button
                      onClick={handleClose}
                      title="Close"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <IconX className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <TemplatePreview card={card} />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      )}

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex w-80 h-[180px] md:w-[576px] md:h-[324px] flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 hover:scale-105 transition-transform duration-300 border-4 border-gray-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-4 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-xs font-medium text-white md:text-lg"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-1 md:mt-2 max-w-xs md:max-w-lg text-left font-sans text-sm font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage src={card.src} alt={card.title} fill className="absolute inset-0 z-10 object-cover" />
      </motion.button>
    </>
  )
}

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      className={cn("h-full w-full transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={(src as string) || "/placeholder.svg"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}
