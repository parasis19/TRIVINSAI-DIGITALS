"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          "dark:-rotate-90 dark:scale-0 dark:text-white",
          {
            "text-white": !isScrolled,
            "text-black": isScrolled,
          }
        )}
      />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all text-[#1F2A3C] dark:text-white dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
