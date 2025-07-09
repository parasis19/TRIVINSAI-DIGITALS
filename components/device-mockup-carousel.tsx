"use client"

import { useState, useEffect } from "react"
import { Code, Smartphone, Megaphone, Monitor, Laptop, Tablet, ArrowRightCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import AppleCardsCarouselDemo from "@/components/AppleCardsCarouselDemo"
import ParallaxSection from "@/components/ParallaxExample"
import StatsSection from "@/components/StatsSection"
import ServicesSection from "@/components/ServicesSection"
import { ClipPathLinks } from "@/components/ClipPathLinks"

const devices = [
  {
    id: "desktop",
    name: "Desktop",
    icon: Monitor,
    component: "DesktopMockup",
  },
  {
    id: "laptop",
    name: "Laptop",
    icon: Laptop,
    component: "LaptopMockup",
  },
  {
    id: "tablet",
    name: "Tablet",
    icon: Tablet,
    component: "TabletMockup",
  },
  {
    id: "phone",
    name: "Phone",
    icon: Smartphone,
    component: "PhoneMockup",
  },
]

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites that captivate your audience and drive conversions.",
    icon: Code,
    price: "$2,500+",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experience.",
    icon: Smartphone,
    price: "$5,000+",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Digital Marketing",
    description: "Eye-catching ads and digital strategies that grow your brand visibility.",
    icon: Megaphone,
    price: "$1,000+",
    color: "from-pink-500 to-pink-600",
  },
]

// Desktop Mockup Component
const DesktopMockup = () => (
  <div className="relative transform hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 bg-[rgba(14,159,218,0.2)] rounded-3xl blur-3xl scale-110 translate-x-4 translate-y-4"></div>
    <div className="relative">
      {/* Monitor */}
      <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-t-2xl p-2 sm:p-4 shadow-[0_35px_60px_-15px_rgba(14,159,218,0.3)]">
        {/* Screen */}
        <div className="w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl overflow-hidden relative">
          {/* Browser Bar */}
          <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-white/90 backdrop-blur-sm flex items-center px-2 sm:px-4 border-b border-gray-200">
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <div className="bg-gray-100 rounded-full px-2 sm:px-4 py-0.5 sm:py-1 text-xs text-gray-600 max-w-xs mx-auto">
                trivinsai.com
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="pt-6 sm:pt-8 p-3 sm:p-6 lg:p-8 h-full">
            <div className="text-center mb-3 sm:mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-blue-800 mb-1 sm:mb-2">Trivinsai</h1>
              <p className="text-xs sm:text-sm lg:text-lg text-sky-600">Digital Solutions</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-blue-100"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:w-10 lg:w-12 lg:h-12 bg-gradient-to-r ${service.color} rounded-md sm:rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto`}
                  >
                    <service.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm text-center mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-600 text-center mb-1 sm:mb-2 hidden sm:block">
                    {service.description.substring(0, 50)}...
                  </p>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm font-bold text-blue-600">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Button with Link */}
            <div className="text-center">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor Stand */}
      <div className="w-16 sm:w-24 lg:w-32 h-4 sm:h-6 lg:h-8 bg-gray-800 mx-auto rounded-b-lg"></div>
      <div className="w-24 sm:w-36 lg:w-48 h-2 sm:h-3 lg:h-4 bg-gray-700 mx-auto rounded-full"></div>
    </div>
  </div>
)

// Laptop Mockup Component
const LaptopMockup = () => (
  <div className="relative transform hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 bg-[rgba(14,159,218,0.2)] rounded-3xl blur-3xl scale-110 translate-x-4 translate-y-4"></div>
    <div className="relative max-w-4xl mx-auto">
      {/* Laptop Screen */}
      <div className="bg-gray-900 rounded-t-2xl p-2 sm:p-3 shadow-[0_35px_60px_-15px_rgba(14,159,218,0.3)]">
        <div className="w-full h-40 sm:h-56 lg:h-72 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg overflow-hidden relative">
          {/* Content similar to desktop but more compact */}
          <div className="p-3 sm:p-4 lg:p-6 h-full">
            <div className="text-center mb-2 sm:mb-4">
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-1">Trivinsai</h1>
              <p className="text-xs sm:text-sm text-sky-600">Digital Solutions</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3 shadow-lg border border-blue-100"
                >
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${service.color} rounded-md flex items-center justify-center mb-1 sm:mb-2 mx-auto`}
                  >
                    <service.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xs text-center mb-1">{service.title}</h3>
                  <div className="text-center">
                    <span className="text-xs font-bold text-blue-600">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-xs px-3 py-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base with Keyboard */}
      <div className="bg-gray-800 rounded-b-2xl p-2 sm:p-4 relative">
        <div className="bg-gray-700 rounded-lg p-1 sm:p-2">
          {/* Keyboard Keys */}
          <div className="grid grid-cols-12 gap-0.5 sm:gap-1 mb-1 sm:mb-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gray-600 rounded h-2 sm:h-3 lg:h-4"></div>
            ))}
          </div>
          <div className="grid grid-cols-10 gap-0.5 sm:gap-1 mb-1 sm:mb-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-gray-600 rounded h-2 sm:h-3 lg:h-4"></div>
            ))}
          </div>
          <div className="grid grid-cols-8 gap-0.5 sm:gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-600 rounded h-2 sm:h-3 lg:h-4"></div>
            ))}
          </div>
          {/* Trackpad */}
          <div className="w-10 h-6 sm:w-16 sm:h-10 bg-gray-600 rounded mx-auto mt-1 sm:mt-2"></div>
        </div>
      </div>
    </div>
  </div>
)

// Tablet Mockup Component
const TabletMockup = () => (
  <div className="relative transform hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 bg-[rgba(14,159,218,0.2)] rounded-3xl blur-3xl scale-110 translate-x-4 translate-y-4"></div>
    <div className="relative mx-auto w-80 h-96 bg-gray-900 rounded-3xl p-3 shadow-[0_35px_60px_-15px_rgba(14,159,218,0.3)]">
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl overflow-hidden relative">
        <div className="p-6 h-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">Trivinsai</h1>
            <p className="text-sm text-sky-600">Digital Solutions</p>
          </div>

          <div className="space-y-3 mb-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100 flex items-center space-x-3"
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}
                >
                  <service.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">{service.title}</h3>
                  <p className="text-xs text-gray-600">{service.description.substring(0, 40)}...</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-blue-600">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white w-full">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Phone Mockup Component
const PhoneMockup = () => (
  <div className="relative transform hover:scale-105 transition-transform duration-500">
    <div className="absolute inset-0 bg-[rgba(14,159,218,0.2)] rounded-full blur-3xl scale-110 translate-x-4 translate-y-4"></div>
    <div className="relative mx-auto w-72 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-[0_35px_60px_-15px_rgba(14,159,218,0.3)]">
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-[2.5rem] overflow-hidden relative">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 text-xs font-medium text-gray-800 z-10">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
            <div className="w-6 h-3 border border-gray-800 rounded-sm">
              <div className="w-4 h-2 bg-gray-800 rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        <div className="pt-8 p-6 h-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Trivinsai</h2>
            <p className="text-sm text-sky-600">Digital Solutions</p>
          </div>

          <div className="space-y-4 mb-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-xs text-gray-600">{service.description.substring(0, 30)}...</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-blue-600">{service.price}</div>
                    <div className="text-xs text-gray-500">Starting</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 rounded-2xl shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
    </div>
  </div>
)

export default function DeviceMockupCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % devices.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const renderCurrentDevice = () => {
    switch (devices[currentSlide].component) {
      case "DesktopMockup":
        return <DesktopMockup />
      case "LaptopMockup":
        return <LaptopMockup />
      case "TabletMockup":
        return <TabletMockup />
      case "PhoneMockup":
        return <PhoneMockup />
      default:
        return <PhoneMockup />
    }
  }
return (
<div className="mt-20 sm:mt-0"> {/* 👈 This moves the entire page 10 units up */}
    <div className="bg-gradient-to-br -mt-20 from-blue-100 via-blue-50 to-blue-200 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-32 left-32 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">


            <div className="space-y-8 pr-10 mt-20 lg:space-y-8">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {/* Main Hero Text Layout */}
                <div className="space-y-4 lg:space-y-6">
                  {/* First Line: "your DIGITAL FUTURE" */}
                  <div className="flex flex-wrap items-baseline gap-2 lg:gap-3">
                    <span
                      className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold italic text-gray-700 leading-none"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                      your
                    </span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase text-[#0b486e] tracking-tight leading-none">
                      DIGITAL FUTURE
                    </span>
                  </div>

                  {/* Second Line: "starts here BUILD IT with" */}
                  <div className="flex flex-wrap items-baseline gap-2 lg:gap-3 ml-2 lg:ml-4">
                    <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-600 leading-none">
                      starts here
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black uppercase text-[#0b486e] tracking-tight leading-none">
                      BUILD IT
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-600 leading-none">
                      with
                    </span>
                  </div>

                  {/* TRIVINSAI with reflection effect */}
                  <div className="mt-8 lg:mt-12 mb-8 lg:mb-12">
                    <div className="relative inline-block">
                      <h1
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-wider leading-none"
                        style={{
                          background:
                            "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 25%, #1e40af 50%, #1e3a8a 75%, #312e81 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          filter: "drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))",
                        }}
                      >
                        TRIVINSAI
                      </h1>
                      {/* Reflection effect */}
                      <div
                        className="absolute top-full left-0 w-full overflow-hidden pointer-events-none"
                        style={{ height: "40%" }}
                      >
                        <h1
                          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-wider leading-none transform scale-y-[-1] origin-top"
                          style={{
                            background:
                              "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 25%, #1e40af 50%, #1e3a8a 75%, #312e81 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            opacity: 0.25,
                            filter: "blur(1px)",
                            maskImage:
                              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
                          }}
                        >
                          TRIVINSAI
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

 <div
        className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <a href="/contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Start Your Project
            <ArrowRightCircle className="ml-2 h-5 w-5" />
          </Button>
        </a>
        <a href="/templates">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-300 text-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Explore Templates 
          </Button>
        </a>
      </div>
   


              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-6 lg:gap-8 pt-8 lg:pt-12 transition-all duration-1000 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-blue-700 text-xs sm:text-sm lg:text-base font-medium">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-blue-700 text-xs sm:text-sm lg:text-base font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-blue-700 text-xs sm:text-sm lg:text-base font-medium">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Device Carousel */}
            <div className="relative lg:mt-[40px]">
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                {/* Fixed Device Mockup Container - Accommodates all device sizes */}
                <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
                  <div
                    key={currentSlide}
                    className="animate-in slide-in-from-right-5 fade-in duration-700 absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {renderCurrentDevice()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroScrollDemo />
      <StatsSection />

      {/* Services Section */}
      <div className="top-0">
        <ServicesSection />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
      <div
        className="absolute bottom-20 right-10 w-6 h-6 bg-teal-500 rounded-full animate-bounce opacity-80"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse opacity-80"></div>

      <AppleCardsCarouselDemo />
    <ClipPathLinks/>

      <div className="bg-[#dbebff]">
        <ParallaxSection />
      </div>
    </div>
    </div>
  )
}
