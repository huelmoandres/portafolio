import Link from "next/link"
import { Linkedin, Heart, Phone } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              Andrés Huelmo
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Desarrollador web especializado en crear experiencias digitales excepcionales y soluciones web innovadoras
              para empresas y organizaciones.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground flex items-center">
              Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> © {currentYear} Andrés Huelmo
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
