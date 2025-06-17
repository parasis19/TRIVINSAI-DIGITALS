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
        <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 text-center text-white">
            <h2 className="mx-auto max-w-4xl text-2xl font-bold text-balance md:text-4xl lg:text-6xl">
            build your digital presence with {" "}
            <span className="inline-block rounded-xl bg-blue-500/40 px-4 py-1 underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                TRIVINSAI
            </span>{" "}
            at a time.
            </h2>
            <p className="mx-auto max-w-2xl py-8 text-sm text-neutral-200 md:text-base">
            Create. Launch. Dominate. Web, apps, and ads — all powered by TRIVINSAI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black">
                Join the club
            </button>
            <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black">
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
