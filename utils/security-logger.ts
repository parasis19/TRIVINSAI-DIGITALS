export class SecurityLogger {
  private endpoint = "/api/security-log" // You'll need to implement this API endpoint
  private deviceInfo: any = null

  async initialize(deviceInfo: any) {
    this.deviceInfo = deviceInfo
  }

  async logViolation(violation: {
    type: string
    severity: string
    timestamp: number
    deviceInfo: any
    url: string
    userAgent: string
  }) {
    try {
      // Get IP and location info
      const ipInfo = await this.getIPInfo()

      const logData = {
        ...violation,
        ipInfo,
        sessionId: this.getSessionId(),
        browserFingerprint: this.deviceInfo?.id,
        additionalInfo: {
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          screen: `${screen.width}x${screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          platform: navigator.platform,
        },
      }

      // Log to console for development
      console.warn("Security Violation Logged:", logData)

      // Send to server (implement your API endpoint)
      if (typeof window !== "undefined") {
        try {
          await fetch(this.endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(logData),
          })
        } catch (error) {
          console.warn("Failed to send security log to server:", error)
          // Fallback: store in localStorage for later sync
          this.storeLocalLog(logData)
        }
      }
    } catch (error) {
      console.warn("Security logging failed:", error)
    }
  }

  private async getIPInfo() {
    try {
      // Using a free IP geolocation service
      const response = await fetch("https://ipapi.co/json/")
      const data = await response.json()
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        isp: data.org,
      }
    } catch (error) {
      return null
    }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem("security-session-id")
    if (!sessionId) {
      sessionId = crypto.randomUUID()
      sessionStorage.setItem("security-session-id", sessionId)
    }
    return sessionId
  }

  private storeLocalLog(logData: any) {
    try {
      const logs = JSON.parse(localStorage.getItem("security-logs") || "[]")
      logs.push(logData)
      // Keep only last 50 logs
      if (logs.length > 50) {
        logs.splice(0, logs.length - 50)
      }
      localStorage.setItem("security-logs", JSON.stringify(logs))
    } catch (error) {
      console.warn("Failed to store security log locally:", error)
    }
  }
}
