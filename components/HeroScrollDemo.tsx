"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ContainerScroll } from "./ui/container-scroll-animation";

const desktopImages = [
  "/templates/brainwave.png",
  "/templates/t2.png",
  "/templates/disha.png",
  "/templates/pqc.png",
  "/templates/reed.png",
  "/templates/parshwa.png",
  "/templates/t1.png",

  // Add more desktop images
];

const mobileImages = [
  "/templates/mobile-1.png",
  "/templates/mobile-2.png",
  "/templates/mobile-3.png",
  // Add more mobile images
];

export function HeroScrollDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Turn every scroll into a spectacle with <br />
              <span className="text-3xl md:text-[6rem] text-[#169ed9] font-bold mt-1 leading-none">
                Trivinsai templates
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full h-[400px] md:h-[720px] overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`slide-${index}`}
                width={1400}
                height={720}
                className="w-full flex-shrink-0 object-cover object-top"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
