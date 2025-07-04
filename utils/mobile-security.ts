export class MobileSecurity {
  private static violations = 0
  private static isMonitoring = false

  static startMonitoring(onViolation?: (type: string, count: number) => void) {
    if (this.isMonitoring || typeof window === "undefined") return
    this.isMonitoring = true

    // Detect mobile screenshot gestures
    this.detectScreenshotGestures(onViolation)

    // Monitor app switching
    this.monitorAppSwitching(onViolation)

    // Monitor device orientation
    this.monitorOrientation(onViolation)
  }

  private static detectScreenshotGestures(callback?: (type: string, count: number) => void) {
    if (typeof document === "undefined") return

    let volumeDownPressed = false
    let powerPressed = false
    let homePressed = false

    const resetFlags = () => {
      setTimeout(() => {
        volumeDownPressed = false
        powerPressed = false
        homePressed = false
      }, 1000)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e || !e.code) return

      switch (e.code) {
        case "VolumeDown":
          volumeDownPressed = true
          break
        case "Power":
          powerPressed = true
          break
        case "Home":
          homePressed = true
          break
      }

      // Common screenshot combinations
      if ((volumeDownPressed && powerPressed) || (volumeDownPressed && homePressed) || (powerPressed && homePressed)) {
        this.violations++
        callback?.("screenshot-gesture", this.violations)
        resetFlags()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", resetFlags)
  }

  private static monitorAppSwitching(callback?: (type: string, count: number) => void) {
    if (typeof document === "undefined") return

    let switchCount = 0

    const handleVisibilityChange = () => {
      if (document.hidden) {
        switchCount++
        if (switchCount > 2) {
          this.violations++
          callback?.("app-switching", this.violations)
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Reset switch count after 30 seconds
    setInterval(() => {
      switchCount = 0
    }, 30000)
  }

  private static monitorOrientation(callback?: (type: string, count: number) => void) {
    if (typeof window === "undefined") return

    let orientationChanges = 0

    const handleOrientationChange = () => {
      orientationChanges++
      if (orientationChanges > 3) {
        this.violations++
        callback?.("orientation-abuse", this.violations)
        orientationChanges = 0
      }
    }

    window.addEventListener("orientationchange", handleOrientationChange)

    // Reset orientation change count
    setInterval(() => {
      orientationChanges = 0
    }, 60000)
  }

  static getViolationCount(): number {
    return this.violations
  }

  static resetViolations(): void {
    this.violations = 0
  }

  static stopMonitoring(): void {
    this.isMonitoring = false
  }
}
