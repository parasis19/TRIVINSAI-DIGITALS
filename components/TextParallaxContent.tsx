import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-gradient-to-b dark:from-[#1F2A3C] dark:to-[#111827]   from-[#ffebd4] to-[#ffecd7] ">
      <TextParallaxContent
        imgUrl="/carousel/webs.jpg"
        subheading="Web Development"
        heading="Build. Launch. Convert."
      >
        <ExampleContent1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/carousel/slide2.jpg"
        subheading="APP Development"
        heading="Sleek, fast, on-point apps."
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/carousel/slide5.jpg"
        subheading="ADs Creations"
        heading="Ads that sell."
      >
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

type TextParallaxContentProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

type StickyImageProps = {
  imgUrl: string;
};

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

type OverlayCopyProps = {
  subheading: string;
  heading: string;
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

export const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Web Development Services
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-primary dark:text-white md:text-2xl">
        Our expert team crafts intuitive, high-performance mobile and desktop applications designed to engage users and drive growth.
         We focus on clean code, smooth functionality, and cross-platform compatibility for lasting impact.
      </p>
      <p className="mb-8 text-xl italic text-[#1F2A3C] dark:text-white md:text-2xl">
        Craft your digital presence with us..
      </p>
      <a href="/services">
        <button  className="w-full rounded-xl dark:bg-orange-400 dark:hover:bg-orange-600 px-9 py-4 text-xl text-white transition-colors bg-primary hover:bg-orange-600  md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
      </a>
    </div>
  </div>
)
  export const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      App Development Services
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-primary dark:text-white md:text-2xl">
        Our expert team crafts intuitive, high-performance mobile and desktop applications designed to engage users and drive growth. We focus on clean code, smooth functionality, and cross-platform compatibility for lasting impact.
      </p>
      <p className="mb-8 text-xl italic text-[#1F2A3C] dark:text-white md:text-2xl">
        Innovate with seamless app experiences.


      </p>
      <a href="/services">
      <button  className="w-full rounded-xl dark:bg-orange-400 dark:hover:bg-orange-600 px-9 py-4 text-xl text-white transition-colors bg-primary hover:bg-orange-600  md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
      </a>
    </div>
  </div>
  )
  export const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      ADs Creation Services
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-primary dark:text-white md:text-2xl">
        We create compelling, targeted ad campaigns that capture attention and convert. Leveraging data-driven insights, creative storytelling, and optimized visuals, we ensure your brand reaches the right audience effectively.
      </p>
      <p className="mb-8 text-xl italic text-[#1F2A3C] dark:text-white md:text-2xl">
        Maximize reach, boost engagement
      </p>
      <a href="/services">
      <button  className="w-full rounded-xl dark:bg-orange-400 dark:hover:bg-orange-600 px-9 py-4 text-xl text-white transition-colors bg-primary hover:bg-orange-600  md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
      </a>
    </div>
  </div>
);