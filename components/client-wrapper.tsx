"use client"

import { useEffect, useState } from "react"
import BlurFade from "@/components/BlurFade"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    window.scrollTo({ top: 0, left: 0 })

    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto"
      setIsHydrated(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <BlurFade />
      {children}
    </>
  )
}
