"use client"

import { useState, useEffect } from "react"
import { X, Shield, Eye, Camera } from "lucide-react"

interface Violation {
  type: string
  message: string
  timestamp: number
  severity: "low" | "medium" | "high"
}

interface SecurityAlertProps {
  show: boolean
  violation: Violation | null
  onClose: () => void
  violationCount: number
}

export default function SecurityAlert({ show, violation, onClose, violationCount }: SecurityAlertProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [show])

  if (!isVisible || !violation) return null

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "high":
        return {
          bgColor: "bg-red-50 dark:bg-red-900/20",
          borderColor: "border-red-200 dark:border-red-800",
          textColor: "text-red-800 dark:text-red-200",
          iconColor: "text-red-600",
          icon: Camera,
        }
      case "medium":
        return {
          bgColor: "bg-orange-50 dark:bg-orange-900/20",
          borderColor: "border-orange-200 dark:border-orange-800",
          textColor: "text-orange-800 dark:text-orange-200",
          iconColor: "text-orange-600",
          icon: Eye,
        }
      default:
        return {
          bgColor: "bg-blue-50 dark:bg-blue-900/20",
          borderColor: "border-blue-200 dark:border-blue-800",
          textColor: "text-blue-800 dark:text-blue-200",
          iconColor: "text-blue-600",
          icon: Shield,
        }
    }
  }

  const config = getSeverityConfig(violation.severity)
  const Icon = config.icon

  const getActionAdvice = (type: string) => {
    switch (type) {
      case "key-combo-screenshot":
        return "Screenshots of team images are not permitted. Please browse normally."
      case "image-context-menu":
        return "Right-click is disabled on team images. You can still navigate normally."
      case "image-long-press":
        return "Long press is disabled on images. Tap normally to continue browsing."
      case "mobile-screenshot-gesture":
        return "Mobile screenshot gestures are blocked for team images."
      default:
        return "Please continue browsing normally. Only image protection is active."
    }
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div
        className={`${config.bgColor} ${config.borderColor} border rounded-lg shadow-lg p-4 transition-all duration-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex items-start gap-3">
          <Icon className={`h-5 w-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className={`text-sm font-medium ${config.textColor}`}>Security Alert</h4>
              <button
                onClick={onClose}
                className={`${config.iconColor} hover:opacity-70 transition-opacity`}
                aria-label="Close alert"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className={`text-sm ${config.textColor} mb-2`}>{violation.message}</p>

            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{getActionAdvice(violation.type)}</p>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500 dark:text-gray-400">
                Violations: {violationCount} {violationCount === 1 ? "time" : "times"}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}>
                {violation.severity.toUpperCase()}
              </span>
            </div>

            {violationCount >= 3 && (
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                  ⚠️ Multiple violations detected. Activity is being monitored for security purposes.
                </p>
              </div>
            )}

            {violationCount >= 5 && (
              <div className="mt-1">
                <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                  🚨 Excessive violations may result in restricted access.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
