import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import {Dictionary, getDictionary} from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
                                         params,
                                       }: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: "Andrés Huelmo | Web Developer",
    description:
        params.lang === "en"
            ? "Personal portfolio of Andrés Huelmo, web developer specialized in creating innovative digital solutions"
            : "Portafolio personal de Andrés Huelmo, desarrollador web especializado en crear soluciones digitales innovadoras",
    keywords: ["web developer", "frontend", "backend", "full-stack", "Uruguay", "Andrés Huelmo", "portfolio"],
    authors: [{ name: "Andrés Huelmo" }],
    creator: "Andrés Huelmo",
  }
}

export default async function RootLayout({
                                           children,
                                           params,
                                         }: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  // Asegurarse de que params.lang sea una de las locales válidas
  const lang = params.lang && ["en", "es"].includes(params.lang) ? (params.lang as Locale) : "en"

  // Cargar el diccionario
  let dictionary
  try {
    dictionary = await getDictionary(lang)
  } catch (error) {
    console.error("Error loading dictionary:", error)
    // Fallback a un diccionario básico si hay error
    dictionary = {
      navigation: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
    } as Dictionary
  }

  return (
      <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {/* Navbar con key única para forzar remontaje completo */}
        <Navbar key={`navbar-${lang}`} dictionary={dictionary} lang={lang} />
        {children}
      </ThemeProvider>
      </body>
      </html>
  )
}
