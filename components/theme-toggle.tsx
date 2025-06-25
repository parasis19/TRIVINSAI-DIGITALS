"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun
        className={clsx(
          "h-5 w-5 transition-all absolute",
          "rotate-0 scale-100",
          "dark:-rotate-90 dark:scale-0",
          scrolled
            ? "text-[#1F2A3C] dark:text-[#1F2A3C]"
            : "text-white dark:text-white"
        )}
      />
      <Moon
        className={clsx(
          "absolute h-5 w-5 rotate-90 scale-0 transition-all",
          "dark:rotate-0 dark:scale-100",
          scrolled
            ? "text-[#1F2A3C] dark:text-[#1F2A3C]"
            : "text-white dark:text-white"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
