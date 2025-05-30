// "use client"

// import { useState, useEffect } from "react"
// import { AnimatePresence, motion } from "framer-motion"
// import Image from "next/image"

// const slides = [
//   {
//     id: 1,
//     image: "/carousel/slide1.jpg",
//     heading: "Build Stunning Websites",
//     subheading: "With our premium templates and components",
//   },
//   {
//     id: 2,
//     image: "/carousel/slide2.jpg",
//     heading: "Design Without Limits",
//     subheading: "Flexible layouts for any industry or use case",
//   },
//   {
//     id: 3,
//     image: "/carousel/slide3.jpg",
//     heading: "Speed Up Your Workflow",
//     subheading: "Start your project with our production-ready designs",
//   },
// ]

// const variants = {
//   initial: { opacity: 0, filter: "blur(10px)" },
//   animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } },
//   exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 1, ease: "easeIn" } },
// }

// export default function FullscreenCarousel() {
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-black">
//       {/* Background layer to prevent black flash */}
//       <div className="absolute inset-0 bg-black" />

//       <AnimatePresence mode="wait">
//         {slides.map((slide, index) =>
//           index === current ? (
//             <motion.div
//               key={slide.id}
//               className="absolute inset-0"
//               variants={variants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               style={{ pointerEvents: index === current ? "auto" : "none" }}
//             >
//               <Image
//                 src={slide.image}
//                 alt={slide.heading}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
//               <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//                 <div className="text-white max-w-3xl">
//                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-xl">
//                     {slide.heading}
//                   </h1>
//                   <p className="text-lg md:text-xl lg:text-2xl drop-shadow-md">
//                     {slide.subheading}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ) : null
//         )}
//       </AnimatePresence>

//       {/* Slide indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === current ? "bg-white" : "bg-white/40"
//             }`}
//             onClick={() => setCurrent(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
