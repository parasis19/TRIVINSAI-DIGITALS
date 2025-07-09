"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Shield, Eye, AlertTriangle, X } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import SecurityAlert from "@/components/security-alert"
import { DeviceFingerprinter } from "@/utils/device-fingerprinter"
import { SecurityLogger } from "@/utils/security-logger"

interface TeamMember {
  name: string
  role: string
   
  image: string
}

interface SecureTeamSectionProps {
  teamMembers: TeamMember[]
}

interface Violation {
  type: string
  message: string
  timestamp: number
  severity: "low" | "medium" | "high"
  deviceInfo?: any
}

export default function SecureTeamSection({ teamMembers }: SecureTeamSectionProps) {
  const [isBlurred, setIsBlurred] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [violations, setViolations] = useState<Violation[]>([])
  const [showAlert, setShowAlert] = useState(false)
  const [currentAlert, setCurrentAlert] = useState<Violation | null>(null)
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false)
  const [deviceFingerprint, setDeviceFingerprint] = useState<any>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const lastScreenshotAttempt = useRef<number>(0)
  const securityLogger = useRef<SecurityLogger | null>(null)
  const [showSecurityPanel, setShowSecurityPanel] = useState(false)

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showSecurityPanel && !target.closest(".fixed.top-24.right-4")) {
        setShowSecurityPanel(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [showSecurityPanel])

  // Initialize security logger and device fingerprinting
  useEffect(() => {
    const initSecurity = async () => {
      try {
        // Initialize device fingerprinter
        const fingerprinter = new DeviceFingerprinter()
        const fingerprint = await fingerprinter.generateFingerprint()
        setDeviceFingerprint(fingerprint)

        // Initialize security logger
        securityLogger.current = new SecurityLogger()
        await securityLogger.current.initialize(fingerprint)

        // Show privacy notice on first visit
        const hasSeenNotice = localStorage.getItem("trivinsai-security-notice")
        if (!hasSeenNotice) {
          setShowPrivacyNotice(true)
        }
      } catch (error) {
        console.warn("Security initialization failed:", error)
      }
    }

    initSecurity()
  }, [])

  // Mobile device detection
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
      setIsMobile(isMobileDevice || isTouchDevice)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reset violations after 5 minutes of no activity
  useEffect(() => {
    const resetTimer = setInterval(() => {
      const now = Date.now()
      setViolations((prev) => prev.filter((v) => now - v.timestamp < 300000))
    }, 60000)

    return () => clearInterval(resetTimer)
  }, [])

  // Get violation messages
  const getViolationMessage = (type: string): { message: string; severity: "low" | "medium" | "high" } => {
    const messages = {
      "key-combo-screenshot": {
        message: "Screenshot attempt detected and logged. Team member images are protected.",
        severity: "high" as const,
      },
      "visibility-screenshot-attempt": {
        message: "Suspicious app switching detected and logged. Please browse normally.",
        severity: "high" as const,
      },
      "mobile-screenshot-gesture": {
        message: "Mobile screenshot gesture detected and logged. Images are protected.",
        severity: "high" as const,
      },
      "image-context-menu": {
        message: "Right-click attempt logged. Team images are protected.",
        severity: "medium" as const,
      },
      "image-drag-attempt": {
        message: "Image download attempt detected and logged.",
        severity: "medium" as const,
      },
      "image-long-press": {
        message: "Long press attempt logged. Please browse normally.",
        severity: "medium" as const,
      },
      "devtools-detected": {
        message: "Developer tools usage detected and logged.",
        severity: "high" as const,
      },
      default: {
        message: "Unauthorized action detected and logged.",
        severity: "medium" as const,
      },
    }

    return messages[type as keyof typeof messages] || messages.default
  }

  // Enhanced security violation handler with device tracking
  const handleSecurityViolation = useCallback(
    async (type: string) => {
      const now = Date.now()

      // Prevent spam violations
      if (now - lastScreenshotAttempt.current < 1000) return

      const { message, severity } = getViolationMessage(type)

      // Collect additional device information for high-severity violations
      let enhancedDeviceInfo = deviceFingerprint
      if (severity === "high") {
        try {
          const fingerprinter = new DeviceFingerprinter()
          enhancedDeviceInfo = await fingerprinter.getDetailedInfo()
        } catch (error) {
          console.warn("Failed to collect enhanced device info:", error)
        }
      }

      const newViolation: Violation = {
        type,
        message,
        timestamp: now,
        severity,
        deviceInfo: enhancedDeviceInfo,
      }

      setViolations((prev) => [...prev, newViolation])
      setCurrentAlert(newViolation)
      setShowAlert(true)
      lastScreenshotAttempt.current = now

      // Log to security system
      if (securityLogger.current) {
        try {
          await securityLogger.current.logViolation({
            type,
            severity,
            timestamp: now,
            deviceInfo: enhancedDeviceInfo,
            url: window.location.href,
            userAgent: navigator.userAgent,
          })
        } catch (error) {
          console.warn("Failed to log security violation:", error)
        }
      }

      // Blur effect for high severity violations
      if (severity === "high") {
        setIsBlurred(true)
        setTimeout(() => setIsBlurred(false), 2000)
      }

      // Vibration for mobile high severity violations
      if (navigator.vibrate && isMobile && severity === "high") {
        try {
          navigator.vibrate([100, 50, 100])
        } catch (error) {
          // Ignore vibration errors
        }
      }

      // Auto-hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    },
    [deviceFingerprint, isMobile],
  )

  // Developer tools detection
  useEffect(() => {
    const devtools = { open: false, orientation: null }

    const threshold = 160

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true
          handleSecurityViolation("devtools-detected")
        }
      } else {
        devtools.open = false
      }
    }, 500)

    // Console detection
    let consoleOpened = false
    const originalConsole = console.log
    console.log = (...args) => {
      if (!consoleOpened) {
        consoleOpened = true
        handleSecurityViolation("devtools-detected")
      }
      originalConsole.apply(console, args)
    }

    return () => {
      console.log = originalConsole
    }
  }, [handleSecurityViolation])

  useEffect(() => {
    // Enhanced screenshot detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e) return

      const isScreenshotCombo =
        e.key === "PrintScreen" ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "S") ||
        (e.metaKey && e.shiftKey && e.key === "4") ||
        (e.metaKey && e.shiftKey && e.key === "3") ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u")

      if (isScreenshotCombo) {
        e.preventDefault()
        handleSecurityViolation("key-combo-screenshot")
        return false
      }
    }

    // Enhanced app switching detection
    let visibilityChangeCount = 0
    const handleVisibilityChange = () => {
      if (document.hidden) {
        visibilityChangeCount++
        if (visibilityChangeCount >= 2) {
          handleSecurityViolation("visibility-screenshot-attempt")
          visibilityChangeCount = 0
        }
      }
    }

    // Mobile screenshot gesture detection
    const handleMobileScreenshot = () => {
      if (!isMobile) return

      let volumePressed = false
      let powerPressed = false

      const handleKeyEvent = (e: KeyboardEvent) => {
        if (e.code === "VolumeDown" || e.code === "VolumeUp") volumePressed = true
        if (e.code === "Power") powerPressed = true

        if (volumePressed && powerPressed) {
          handleSecurityViolation("mobile-screenshot-gesture")
          volumePressed = false
          powerPressed = false
        }
      }

      document.addEventListener("keydown", handleKeyEvent)
      document.addEventListener("keyup", () => {
        setTimeout(() => {
          volumePressed = false
          powerPressed = false
        }, 500)
      })
    }

    // Image-specific protections
    const handleImageInteraction = (e: Event) => {
      const target = e.target as HTMLElement
      if (!target || !target.closest(".secure-image")) return

      if (e.type === "contextmenu") {
        e.preventDefault()
        handleSecurityViolation("image-context-menu")
        return false
      }

      if (e.type === "dragstart") {
        e.preventDefault()
        handleSecurityViolation("image-drag-attempt")
        return false
      }
    }

    // Long press detection
    let touchTimer: NodeJS.Timeout
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      if (!target || !target.closest(".secure-image")) return

      touchTimer = setTimeout(() => {
        handleSecurityViolation("image-long-press")
      }, 1200)
    }

    const handleTouchEnd = () => {
      if (touchTimer) {
        clearTimeout(touchTimer)
      }
    }

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown, { passive: false })
    document.addEventListener("visibilitychange", handleVisibilityChange)

    const section = sectionRef.current
    if (section) {
      section.addEventListener("contextmenu", handleImageInteraction, { passive: false })
      section.addEventListener("dragstart", handleImageInteraction, { passive: false })

      if (isMobile) {
        section.addEventListener("touchstart", handleTouchStart, { passive: true })
        section.addEventListener("touchend", handleTouchEnd, { passive: true })
      }
    }

    handleMobileScreenshot()

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      if (section) {
        section.removeEventListener("contextmenu", handleImageInteraction)
        section.removeEventListener("dragstart", handleImageInteraction)

        if (isMobile) {
          section.removeEventListener("touchstart", handleTouchStart)
          section.removeEventListener("touchend", handleTouchEnd)
        }
      }

      if (touchTimer) clearTimeout(touchTimer)
    }
  }, [handleSecurityViolation, isMobile])

  // Accept privacy notice
  const acceptPrivacyNotice = () => {
    localStorage.setItem("trivinsai-security-notice", "accepted")
    setShowPrivacyNotice(false)
  }

  // Get violation count by severity
  const getViolationStats = () => {
    const now = Date.now()
    const recentViolations = violations.filter((v) => now - v.timestamp < 300000)

    return {
      total: recentViolations.length,
      high: recentViolations.filter((v) => v.severity === "high").length,
      medium: recentViolations.filter((v) => v.severity === "medium").length,
      low: recentViolations.filter((v) => v.severity === "low").length,
    }
  }

  const stats = getViolationStats()

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-[#edeef0] dark:bg-[#1e293b] transition-all duration-300 ${
        isBlurred ? "blur-sm" : ""
      } relative`}
    >
      {/* Privacy Notice Modal */}
      {showPrivacyNotice && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg  max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-[#169ed9]" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Notice</h3>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This page contains protected content. For security purposes, we monitor and log:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>• Screenshot attempts and unauthorized downloads</li>
                <li>• Device information (browser, OS, screen resolution)</li>
                <li>• IP address and approximate location</li>
                <li>• Interaction patterns and timestamps</li>
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                This data is used solely for security purposes and is not shared with third parties.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={acceptPrivacyNotice}
                className="flex-1 bg-[#169ed9] text-white px-4 py-2 rounded-lg hover:bg-[#1485b8] transition-colors"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Alert */}
      <SecurityAlert
        show={showAlert}
        violation={currentAlert}
        onClose={() => setShowAlert(false)}
        violationCount={stats.total}
      />

      {/* Collapsible Security Status Indicator */}
      <div className="fixed top-24 right-4 z-40">
        <div className="relative">
          {/* Collapsed Eye Icon */}
          {!showSecurityPanel && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowSecurityPanel(true)
              }}
              className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 group"
              aria-label="Security monitoring status"
            >
              <div className="relative">
                <Eye className="h-5 w-5 text-[#169ed9] group-hover:text-[#1485b8] transition-colors" />
                {/* Active indicator dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white dark:border-gray-800"></div>
                {/* Violation indicator */}
                {stats.total > 0 && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">{stats.total > 9 ? "9+" : stats.total}</span>
                  </div>
                )}
              </div>
            </button>
          )}

          {/* Expanded Security Panel */}
          {showSecurityPanel && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 min-w-[200px] animate-in slide-in-from-right-2 duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#169ed9]" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Security Status</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowSecurityPanel(false)
                  }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close security panel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Active Monitoring</span>
                  </div>
                  <Eye className="h-3 w-3 text-gray-400" />
                </div>

                {deviceFingerprint && (
                  <div className="flex items-center justify-between py-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Device ID</span>
                    <span className="text-xs font-mono text-gray-600 dark:text-gray-300">
                      {deviceFingerprint.id?.slice(0, 8)}...
                    </span>
                  </div>
                )}

                {stats.total > 0 && (
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-600 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Violations</span>
                      <span className="text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                        {stats.total}
                      </span>
                    </div>

                    {stats.high > 0 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-xs text-red-600 dark:text-red-400">High Risk</span>
                        </div>
                        <span className="text-xs font-medium text-red-600 dark:text-red-400">{stats.high}</span>
                      </div>
                    )}

                    {stats.medium > 0 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-orange-600 dark:text-orange-400">Medium</span>
                        </div>
                        <span className="text-xs font-medium text-orange-600 dark:text-orange-400">{stats.medium}</span>
                      </div>
                    )}

                    {stats.low > 0 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs text-yellow-600 dark:text-yellow-400">Low</span>
                        </div>
                        <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">{stats.low}</span>
                      </div>
                    )}

                    {stats.total >= 3 && (
                      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3 text-orange-500" />
                          <span className="text-xs text-orange-600 dark:text-orange-400">Device Logged</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {stats.total === 0 && (
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-600 dark:text-green-400">No Violations</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e293b] dark:text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The talented people behind TRIVINSAI Digital's success.
            </p>
            <div className="w-24 h-1 bg-[#169ed9] mx-auto rounded-full mt-4"></div>
          </div>
        </ScrollAnimation>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamMembers.map((member, index) => (
    <ScrollAnimation key={member.name} delay={index * 100}>
      <div className="bg-[#edeef0] rounded-xl overflow-hidden border border-[#edeef0] transition-all duration-300 group">
        <div className="relative w-full aspect-square overflow-hidden secure-image">
          <SecureImage
            src={member.image || "/placeholder.svg"}
            alt={`${member.name} - ${member.role}`}
            memberName={member.name}
            onSecurityViolation={handleSecurityViolation}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-[#1e293b] dark:text-white mb-1">{member.name}</h3>
          <p className="text-[#169ed9] font-medium mb-3">{member.role}</p>
        </div>
      </div>
    </ScrollAnimation>
  ))}
</div>


        {/* Enhanced security notice */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-[#169ed9]" />
              <span className="font-medium text-[#169ed9]">Protected Content - Monitored</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Team member images are protected by advanced security measures with activity logging.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Screenshots, downloads, and unauthorized access attempts are detected and logged with device information.
            </p>

            {stats.total > 0 && (
              <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  <p className="text-xs text-orange-600 dark:text-orange-400">
                    {stats.total} security violation{stats.total !== 1 ? "s" : ""} logged from this device.
                  </p>
                </div>
                {stats.total >= 3 && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                    Multiple violations detected. Device information has been recorded.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Secure Image Component (no watermark)
function SecureImage({
  src,
  alt,
  memberName,
  onSecurityViolation,
}: {
  src: string
  alt: string
  memberName: string
  onSecurityViolation: (type: string) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new window.Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      try {
        canvas.width = 400
        canvas.height = 400

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
          const noise = (Math.random() - 0.5) * 4
          data[i] = Math.max(0, Math.min(255, data[i] + noise))
          data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
          data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
        }

        ctx.putImageData(imageData, 0, 0)

        setImageLoaded(true)
      } catch (error) {
        console.warn("Canvas rendering failed:", error)
        onSecurityViolation("canvas-error")
      }
    }

    img.onerror = () => {
      onSecurityViolation("image-load-error")
    }

    img.src = src
  }, [src, onSecurityViolation])

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onSecurityViolation("image-context-menu")
    return false
  }

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onSecurityViolation("image-drag-attempt")
    return false
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-0" : "opacity-100"}`}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
        }}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        draggable={false}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
          pointerEvents: "none",
        }}
        onContextMenu={handleContextMenu}
      />
    </div>
  )
}
