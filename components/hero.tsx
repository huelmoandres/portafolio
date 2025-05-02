import Link from "next/link"
import { ArrowDown, Linkedin, MessageSquare } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"
import type { Dictionary } from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"
import { GradientButton } from "@/components/ui/gradient-button"

export default function Hero({
  dictionary,
  lang,
}: {
  dictionary: Dictionary
  lang: Locale
}) {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a5ecf]/10 to-background z-0"></div>

      {/* Animated background elements with gradient */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#3a5ecf]/20 to-[#a855f7]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#3a5ecf]/10 to-[#a855f7]/10 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] font-medium mb-4">
            {dictionary.hero.greeting}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Andrés Huelmo</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-8">
            {dictionary.hero.role}
          </h2>
          <p className="max-w-2xl text-muted-foreground mb-10">{dictionary.hero.description}</p>

          {/* Contenedor de botones con grid para alineación perfecta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-md mx-auto w-full">
            <GradientButton href={`/${lang}#projects`} variant="solid">
              {dictionary.hero.viewProjects}
            </GradientButton>

            <GradientButton href={`/${lang}#contact`} variant="outline">
              {dictionary.hero.contactMe}
            </GradientButton>
          </div>

          <div className="flex space-x-6 mb-16">
            <Link
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#3a5ecf] transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#a855f7] transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>

          <Link
            href={`/${lang}#about`}
            className="animate-bounce hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#3a5ecf] hover:to-[#a855f7] transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">{dictionary.hero.scrollDown}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
