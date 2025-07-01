import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ParallaxSection() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover rounded-2xl"
        style={{ backgroundImage: "url('/carousel/slide3.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-200/50 backdrop-blur-sm rounded-2xl" />

      {/* Foreground Content */}
      <div className="relative z-10 flex h-full items-center justify-center flex-col text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1e293b] font-bold mb-4">
          Ready to Elevate Your Digital Presence?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#1e293b] mb-6 max-w-xl">
          Join the hundreds of businesses that have transformed their digital strategy with TRIVINSAI Digital.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-[#0d597d] hover:bg-[#169ed9] text-white">
            Get Started Today
          </Button>
        </Link>
      </div>
    </div>
  )
}
