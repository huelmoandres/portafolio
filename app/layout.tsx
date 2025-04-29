import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andrés Huelmo | Desarrollador Web",
  description:
      "Portafolio personal de Andrés Huelmo, desarrollador web especializado en crear soluciones digitales innovadoras",
  keywords: ["desarrollador web", "frontend", "backend", "full-stack", "Uruguay", "Andrés Huelmo", "portafolio"],
  authors: [{ name: "Andrés Huelmo" }],
  creator: "Andrés Huelmo",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://andreshuelmo.com",
    title: "Andrés Huelmo | Desarrollador Web",
    description: "Desarrollador web especializado en crear soluciones digitales innovadoras",
    siteName: "Portafolio de Andrés Huelmo",
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Navbar />
        {children}
      </ThemeProvider>
      </body>
      </html>
  )
}