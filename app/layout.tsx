import { Poppins } from "next/font/google"
import "./globals.css"
// import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"
import ClientWrapper from "../components/client-wrapper"
import { NavbarDemo } from "@/components/NavbarDemo"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-poppins" })

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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <ClientWrapper>
              {/* <Navbar /> */}
              <NavbarDemo/>
              <main className="flex-1">{children}</main>
              <Footer />
              <CookieConsent />
            </ClientWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
