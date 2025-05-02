import Image from "next/image"
import { Download } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"
import type { Dictionary } from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"
import { cn } from "@/lib/utils"

export default function About({
                                dictionary,
                                lang,
                              }: {
  dictionary: Dictionary
  lang: Locale
}) {
  // Determinar el nombre del archivo según el idioma
  const cvFileName = lang === "en" ? "cv-en.pdf" : "cv-es.pdf"

  return (
      <section id="about" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] bg-clip-border p-1">
                <div className="rounded-full overflow-hidden w-full h-full">
                  <Image src="/me.png" alt="Andrés Huelmo" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
                {dictionary.about.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] mb-6"></div>

              <p className="mb-4">{dictionary.about.paragraph1}</p>

              <p className="mb-6">{dictionary.about.paragraph2}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
                    {dictionary.about.specialty}
                  </h3>
                  <p className="text-muted-foreground">{dictionary.about.specialtyDesc}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
                    {dictionary.about.location}
                  </h3>
                  <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
                    Email
                  </h3>
                  <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
                    {dictionary.about.availability}
                  </h3>
                  <p className="text-muted-foreground">{dictionary.about.availabilityDesc}</p>
                </div>
              </div>

              <div className="max-w-xs">
                <a
                    href={`/api/download/${cvFileName}`}
                    className={cn(
                        "rounded-full h-12 flex items-center justify-center bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] hover:from-[#3a5ecf] hover:to-[#9333ea]",
                        "w-full text-white text-sm font-medium transition-all duration-300",
                    )}
                >
                <span className="flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  {dictionary.about.downloadCV}
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}