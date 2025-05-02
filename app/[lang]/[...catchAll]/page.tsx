import { notFound } from "next/navigation"
import type { Locale } from "@/i18n-config"

interface CatchAllProps {
  params: {
    lang: Locale
    catchAll: string[]
  }
}

export default function CatchAll({ params }: CatchAllProps) {
  // Activar la página 404
  notFound()
}
