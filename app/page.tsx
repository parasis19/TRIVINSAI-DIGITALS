'use client'
import React, { useState, useEffect } from "react";
import { Code, Smartphone, PenTool, ArrowRightCircle, Star, Megaphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import StatsSection from "@/components/StatsSection"
import ServiceCard from "@/components/service-card"
// import TemplatesPreviewSection from "@/components/TemplatesPreviewSection"
import FullscreenCarousel from "@/components/fullscreen-carousel"
// import { TextParallaxContentExample } from "../components/TextParallaxContent"
import ParallaxSection from "../components/ParallaxExample"
// import { SmoothScrollHero }  from "@/components/SmoothScrollHero"
// import { TimelineDemo } from "@/components/TimelineDemo"

import FlipWordsDemo from "@/components/FlipWordsDemo"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import DeviceMockupCarousel from "@/components/device-mockup-carousel"
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel"
// import HeroGeometric from "@/components/hero-geometric"
import ParallaxExample from "@/components/ParallaxExample"




export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    
    <div className="flex flex-col min-h-screen">
      {/* <HeroGeometric /> */}
     <DeviceMockupCarousel/>
     <HorizontalScrollCarousel/>
      
      <div className="bg-[#dbebff]">
        <ParallaxSection />
      </div>


    </div>
  )
}
