import React, { MouseEvent } from "react";
import {
  SiPython,
  SiReact,
  SiMongodb,
  SiAdobe,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";


export const ClipPathLinks = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl text-center mb-12">
        <h2 className="text-5xl font-bold text-[#0b486e]">What We Use</h2>
        <p className="text-gray-600 mt-2">
          Technologies and Tools powering our work
        </p>
      </div>
      <div className="divide-y" style={{ border: "1px solid #0b486e", borderColor: "#0b486e" }}>
        <div className="grid grid-cols-3" style={{ borderBottom: "1px solid #0b486e" }}>
          <LinkBox Icon={SiPython} />
          <LinkBox Icon={SiReact} />
          <LinkBox Icon={FaJava} />
        </div>
        <div className="grid grid-cols-3" style={{ borderBottom: "1px solid #0b486e" }}>
          <LinkBox Icon={SiMongodb} />
          <LinkBox Icon={SiAdobe} />
          <LinkBox Icon={SiHtml5} />
        </div>
        <div className="grid grid-cols-3">
          <LinkBox Icon={SiCss3} />
          <LinkBox Icon={SiNodedotjs} />
          <LinkBox Icon={SiPhp} />
        </div>
      </div>
    </>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon }: { Icon: IconType }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 cursor-default"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl text-[#0b486e]" />
      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
          backgroundColor: "#0b486e",
        }}
        className="absolute inset-0 grid place-content-center text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </div>
  );
};
