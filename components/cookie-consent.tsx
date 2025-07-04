"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasConsented = localStorage.getItem("cookieConsent")
      if (!hasConsented) {
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", "true")
    }
    setIsVisible(false)
  }

  const handleDecline = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", "false")
    }
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-800 border-t border-border shadow-lg animate-fade-in"
      aria-live="polite"
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Cookie Consent</h3>
            <p className="text-muted-foreground text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you'll accept our privacy policy directlty and  consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" type="button" onClick={handleDecline}>
              Decline
            </Button>
            <Button className="bg-[#169ed9] hover:bg-[#146587] text-white" size="sm" type="button" onClick={handleAccept}>
              Accept All
            </Button>
            <Button variant="ghost" size="icon" className="ml-2" type="button" onClick={handleClose} aria-label="Close">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
