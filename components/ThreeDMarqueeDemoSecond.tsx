"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemoSecond() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden sm:hidden">
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 text-center text-white">
        <h2 className="mx-auto max-w-xl text-xl font-semibold text-balance">
          Build your digital presence with{" "}
          <span className="inline-block rounded-xl bg-blue-500/40 px-3 py-1 underline decoration-sky-500 decoration-[4px] underline-offset-[10px] backdrop-blur-sm">
            TRIVINSAI
          </span>{" "}
          at a time.
        </h2>
        <p className="mx-auto max-w-md py-6 text-xs text-neutral-200">
          Create. Launch. Dominate. Web, apps, and ads — all powered by TRIVINSAI.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button className="rounded-md bg-sky-600 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-sky-700">
            Join the club
          </button>
          <button className="rounded-md border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-sm hover:bg-white/20">
            Read more
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-orange-200/80 dark:bg-[#1F2A3C]/50" />

      {/* 3D Marquee Background */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        images={images}
      />
    </section>
  );
}
