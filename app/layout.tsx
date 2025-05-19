import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TRIVINSAI Digital and Company",
  description: "Digital agency providing website, app, and ad creation services",
    icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
