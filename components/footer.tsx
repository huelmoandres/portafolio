import Link from "next/link"
import { Linkedin, MessageSquare } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"
import type { Dictionary } from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"

export default function Footer({
  dictionary,
  lang,
}: {
  dictionary: Dictionary
  lang: Locale
}) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href={`/${lang}#home`}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]"
            >
              Andrés Huelmo
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">{dictionary.footer.description}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#3a5ecf] transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#a855f7] transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              © {currentYear} Andrés Huelmo - {dictionary.footer.allRights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
