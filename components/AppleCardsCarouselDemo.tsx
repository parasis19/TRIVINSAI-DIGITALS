"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { cardsData } from "@/app/templates/data/cards-data"

export default function AppleCardsCarouselDemo() {
  const cards = cardsData.map((card, index) => (
    <Card key={card.id} card={card} index={index} isTemplateCard={card.isTemplateCard} />
  ))

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl  font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Discover Amazing Templates
      </h2>
      <Carousel items={cards} />
    </div>
  )
}
