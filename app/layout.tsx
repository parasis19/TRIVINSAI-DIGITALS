import { Poppins } from "next/font/google"
import "./globals.css"
// import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"
import NavbarDemo from "@/components/resizable-navbar-demo"
// import HoverDropdownNavbar from "@/components/HoverDropdownNavbar"
// import  {SmoothScrollHero } from "@/components/SmoothScrollHero"


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
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
          <div className="flex min-h-screen flex-col">
             
              {/* <Navbar /> */}
             
              

              <NavbarDemo/>
              
              <main className="flex-1">{children}</main>
              <Footer />
              <CookieConsent />
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
