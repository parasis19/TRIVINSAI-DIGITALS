import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  benefits: string[]
  link: string
}

export default function ServiceCard({ title, description, icon: Icon, benefits, link }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-[#1F2A3C]  shadow-lg p-8   border-border border-4 transition-all duration-500 hover:shadow-2xl hover:border-[#FFA500] rounded-xl">
      <div className="bg-primary/10 p-4 inline-block rounded-lg mb-6 ">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>

      <h4 className="font-semibold mb-3">Benefits:</h4>
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-muted-foreground">{benefit}</span>
          </li>
        ))}
      </ul>

      <Link href={link}>
        <Button className="w-full bg-primary hover:bg-secondary text-white">Learn More</Button>
      </Link>
    </div>
  )
}
