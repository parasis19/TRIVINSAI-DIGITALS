import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "Versetile", "Unique", "modern"];

  return (
    <div className="h-[10rem] dark:bg-[#334155] bg-orange-100 flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with TRIVINSAI
      </div>
    </div>
  );
}
