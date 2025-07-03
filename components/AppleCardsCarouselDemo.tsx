"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { cardsData } from "@/app/templates/data/cards-data"

export default function AppleCardsCarouselDemo() {
  const cards = cardsData.map((card, index) => (
    <Card key={card.id} card={card} index={index} isTemplateCard={card.isTemplateCard} />
  ))

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  )
}
