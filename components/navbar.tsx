"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dictionary } from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"

export default function Navbar({
                                 dictionary,
                                 lang,
                               }: {
  dictionary: Dictionary
  lang: Locale
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Determinar el nombre del archivo según el idioma
  const cvFileName = lang === "en" ? "cv-en.pdf" : "cv-es.pdf"

  // Definir los enlaces de navegación directamente
  const navLinks = [
    { name: dictionary?.navigation?.home || "Home", href: `/${lang}#home` },
    { name: dictionary?.navigation?.about || "About", href: `/${lang}#about` },
    { name: dictionary?.navigation?.skills || "Skills", href: `/${lang}#skills` },
    { name: dictionary?.navigation?.projects || "Projects", href: `/${lang}#projects` },
    { name: dictionary?.navigation?.contact || "Contact", href: `/${lang}#contact` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  // Función para cambiar de idioma
  const changeLanguage = (newLang: string) => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname
      const segments = currentPath.split("/")
      segments[1] = newLang
      window.location.href = segments.join("/")
    }
  }

  return (
      <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
              scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl">
              <Link
                  href={`/${lang}#home`}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]"
              >
                Andrés Huelmo
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <div className="flex items-center space-x-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="px-3 py-2 text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#3a5ecf] hover:to-[#a855f7] transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                ))}
                {/* Modificar el botón de descarga en la barra de navegación */}
                <a
                    href={`/api/download/${cvFileName}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] text-white shadow-md shadow-primary/20 hover:from-[#3a5ecf] hover:to-[#9333ea] transition-all duration-300"
                >
                  {dictionary?.navigation?.downloadCV || "Download CV"}
                </a>

                {/* Selector de idioma simplificado */}
                <div className="relative inline-block text-left">
                  <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-1 rounded-full"
                      onClick={() => {
                        const newLang = lang === "en" ? "es" : "en"
                        changeLanguage(newLang)
                      }}
                  >
                    <span>{lang === "en" ? "🇬🇧" : "🇪🇸"}</span>
                    <span>{lang === "en" ? "EN" : "ES"}</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              {/* Selector de idioma simplificado para móvil */}
              <Button
                  variant="ghost"
                  size="sm"
                  className="mr-2 rounded-full"
                  onClick={() => {
                    const newLang = lang === "en" ? "es" : "en"
                    changeLanguage(newLang)
                  }}
              >
                <span>{lang === "en" ? "🇬🇧" : "🇪🇸"}</span>
              </Button>

              <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={toggleMenu}
                        className="block px-3 py-2 text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#3a5ecf] hover:to-[#a855f7] transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                ))}
                <a
                    href={`/api/download/${cvFileName}`}
                    className="block w-full mt-4 text-center rounded-full px-4 py-2 bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] text-white shadow-md shadow-primary/20 hover:from-[#3a5ecf] hover:to-[#9333ea] transition-all duration-300"
                    onClick={toggleMenu}
                >
                  {dictionary?.navigation?.downloadCV || "Download CV"}
                </a>
              </div>
            </div>
        )}
      </nav>
  )
}
