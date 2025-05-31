"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"



export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className=" dark:-rotate-90 dark:scale-0 dark:text-white text-white" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all text-[#1F2A3C] dark:text-white dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme </span>
    </Button>
  )
}
