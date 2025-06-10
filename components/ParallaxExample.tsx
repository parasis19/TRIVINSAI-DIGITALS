import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ParallaxSection() {
  return (
    <>
      {/* Section Above */}
      {/* <section className="relative z-10 bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Above Parallax</h2>
        <p className="max-w-xl mx-auto text-gray-600">This is some content above the parallax section.</p>
      </section> */}

      {/* Parallax Section */}
<div className="relative h-[500px] rounded-lg overflow-hidden">
  <div
    className="absolute inset-0 bg-fixed bg-center  bg-cover"
    style={{ backgroundImage: "url('/carousel/slide3.jpg')" }}
  />
  <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
  <div className="relative z-10 flex h-full items-center justify-center flex-col text-center px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
      Ready to Elevate Your Digital Presence?
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-xl">
      Join the hundreds of businesses that have transformed their digital strategy with TRIVINSAI Digital.
    </p>
    <Link href="/contact">
      <Button size="lg" className="dark:bg-[#1F2937] hover:bg-secondary text-white">
        Get Started Today
      </Button>
    </Link>
  </div>
</div>


      {/* Section Below */}
      {/* <section className="relative z-10 bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Below Parallax</h2>
        <p className="max-w-xl mx-auto text-gray-600">This is some content below the parallax section.</p>
      </section> */}
    </>
  )
}
