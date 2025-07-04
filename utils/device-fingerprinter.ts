export class DeviceFingerprinter {
  async generateFingerprint() {
    const components = await this.getComponents()
    const fingerprint = await this.hashComponents(components)

    return {
      id: fingerprint,
      timestamp: Date.now(),
      components,
    }
  }

  async getComponents() {
    const components: Record<string, any> = {}

    // Basic browser information
    components.userAgent = navigator.userAgent
    components.language = navigator.language
    components.languages = navigator.languages
    components.platform = navigator.platform
    components.cookieEnabled = navigator.cookieEnabled
    components.doNotTrack = navigator.doNotTrack

    // Screen information
    components.screenResolution = `${screen.width}x${screen.height}`
    components.screenColorDepth = screen.colorDepth
    components.screenPixelDepth = screen.pixelDepth
    components.availableScreenResolution = `${screen.availWidth}x${screen.availHeight}`

    // Window information
    components.windowResolution = `${window.innerWidth}x${window.innerHeight}`
    components.timezoneOffset = new Date().getTimezoneOffset()

    // Hardware information
    components.hardwareConcurrency = navigator.hardwareConcurrency
    components.deviceMemory = (navigator as any).deviceMemory
    components.maxTouchPoints = navigator.maxTouchPoints

    // Network information
    if ("connection" in navigator) {
      const connection = (navigator as any).connection
      components.connectionType = connection?.effectiveType
      components.connectionDownlink = connection?.downlink
      components.connectionRtt = connection?.rtt
    }

    // Canvas fingerprinting
    components.canvasFingerprint = this.getCanvasFingerprint()

    // WebGL fingerprinting
    components.webglFingerprint = this.getWebGLFingerprint()

    // Audio fingerprinting
    components.audioFingerprint = await this.getAudioFingerprint()

    // Font detection
    components.fonts = this.getAvailableFonts()

    // Plugin information
    components.plugins = Array.from(navigator.plugins).map((plugin) => ({
      name: plugin.name,
      description: plugin.description,
      filename: plugin.filename,
    }))

    return components
  }

  async getDetailedInfo() {
    const basicInfo = await this.getComponents()

    // Additional detailed information for high-severity violations
    const detailedInfo = {
      ...basicInfo,
      timestamp: Date.now(),
      url: window.location.href,
      referrer: document.referrer,
      localTime: new Date().toISOString(),
      sessionStorage: this.getStorageInfo("sessionStorage"),
      localStorage: this.getStorageInfo("localStorage"),
      batteryLevel: await this.getBatteryInfo(),
      geolocation: await this.getLocationInfo(),
      permissions: await this.getPermissionsInfo(),
    }

    return detailedInfo
  }

  private getCanvasFingerprint(): string {
    try {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) return ""

      canvas.width = 200
      canvas.height = 50

      ctx.textBaseline = "top"
      ctx.font = "14px Arial"
      ctx.fillStyle = "#f60"
      ctx.fillRect(125, 1, 62, 20)
      ctx.fillStyle = "#069"
      ctx.fillText("TRIVINSAI Security", 2, 15)
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)"
      ctx.fillText("Device Fingerprint", 4, 35)

      return canvas.toDataURL()
    } catch (error) {
      return ""
    }
  }

  private getWebGLFingerprint(): string {
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) return ""

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info")
      if (!debugInfo) return ""

      const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)

      return `${vendor}~${renderer}`
    } catch (error) {
      return ""
    }
  }

  private async getAudioFingerprint(): Promise<string> {
    return new Promise((resolve) => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const analyser = audioContext.createAnalyser()
        const gainNode = audioContext.createGain()
        const scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1)

        oscillator.type = "triangle"
        oscillator.frequency.setValueAtTime(10000, audioContext.currentTime)

        gainNode.gain.setValueAtTime(0, audioContext.currentTime)

        oscillator.connect(analyser)
        analyser.connect(scriptProcessor)
        scriptProcessor.connect(gainNode)
        gainNode.connect(audioContext.destination)

        scriptProcessor.onaudioprocess = (bins) => {
          const samples = bins.inputBuffer.getChannelData(0)
          let sum = 0
          for (let i = 0; i < samples.length; i++) {
            sum += Math.abs(samples[i])
          }
          resolve(sum.toString())
          audioContext.close()
        }

        oscillator.start(0)
      } catch (error) {
        resolve("")
      }
    })
  }

  private getAvailableFonts(): string[] {
    const testFonts = [
      "Arial",
      "Arial Black",
      "Comic Sans MS",
      "Courier New",
      "Georgia",
      "Helvetica",
      "Impact",
      "Lucida Console",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Verdana",
    ]

    const availableFonts: string[] = []
    const testString = "mmmmmmmmmmlli"
    const testSize = "72px"
    const baseFonts = ["monospace", "sans-serif", "serif"]

    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    if (!context) return []

    for (const font of testFonts) {
      let detected = false
      for (const baseFont of baseFonts) {
        context.font = `${testSize} ${baseFont}`
        const baseWidth = context.measureText(testString).width

        context.font = `${testSize} ${font}, ${baseFont}`
        const testWidth = context.measureText(testString).width

        if (baseWidth !== testWidth) {
          detected = true
          break
        }
      }
      if (detected) {
        availableFonts.push(font)
      }
    }

    return availableFonts
  }

  private getStorageInfo(storageType: "localStorage" | "sessionStorage"): any {
    try {
      const storage = window[storageType]
      return {
        length: storage.length,
        keys: Object.keys(storage),
      }
    } catch (error) {
      return null
    }
  }

  private async getBatteryInfo(): Promise<any> {
    try {
      if ("getBattery" in navigator) {
        const battery = await (navigator as any).getBattery()
        return {
          charging: battery.charging,
          level: battery.level,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime,
        }
      }
    } catch (error) {
      return null
    }
  }

  private async getLocationInfo(): Promise<any> {
    return new Promise((resolve) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
            })
          },
          () => resolve(null),
          { timeout: 5000 },
        )
      } else {
        resolve(null)
      }
    })
  }

  private async getPermissionsInfo(): Promise<any> {
    try {
      if ("permissions" in navigator) {
        const permissions = ["camera", "microphone", "geolocation", "notifications"]
        const results: Record<string, string> = {}

        for (const permission of permissions) {
          try {
            const result = await navigator.permissions.query({ name: permission as PermissionName })
            results[permission] = result.state
          } catch (error) {
            results[permission] = "unknown"
          }
        }

        return results
      }
    } catch (error) {
      return null
    }
  }

  private async hashComponents(components: Record<string, any>): Promise<string> {
    const jsonString = JSON.stringify(components, Object.keys(components).sort())
    const encoder = new TextEncoder()
    const data = encoder.encode(jsonString)
    const hashBuffer = await crypto.subtle.digest("SHA-256", data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  }
}
