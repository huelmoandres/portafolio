import { ArrowLeft } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import type { Locale } from "@/i18n-config"

// Definimos un diccionario simple para los mensajes de error 404
const errorMessages = {
  en: {
    title: "Page Not Found",
    description: "Sorry, the page you are looking for doesn't exist or has been moved.",
    button: "Back to Home",
  },
  es: {
    title: "Página No Encontrada",
    description: "Lo sentimos, la página que estás buscando no existe o ha sido movida.",
    button: "Volver al Inicio",
  },
}

export default function NotFound({
  params,
}: {
  params?: { lang?: Locale }
}) {
  // Determinar el idioma, con inglés como respaldo
  const lang = params?.lang && ["en", "es"].includes(params.lang) ? (params.lang as Locale) : "en"

  // Usamos los mensajes de error específicos
  const messages = errorMessages[lang as keyof typeof errorMessages] || errorMessages.en

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      {/* Elementos de fondo con gradiente */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#3a5ecf]/20 to-[#a855f7]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#3a5ecf]/10 to-[#a855f7]/10 rounded-full blur-3xl"></div>

      <div className="text-center z-10 max-w-md">
        <h1 className="text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4">{messages.title}</h2>
        <p className="text-muted-foreground mb-8">{messages.description}</p>

        <div className="max-w-[200px] mx-auto">
          <GradientButton href={`/${lang}`} variant="solid">
            <span className="flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {messages.button}
            </span>
          </GradientButton>
        </div>
      </div>
    </div>
  )
}
