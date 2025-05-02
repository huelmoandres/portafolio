import { redirect } from "next/navigation"
import { i18n } from "@/i18n-config"

export default function GlobalNotFound() {
  // Redirigir a la página 404 en el idioma predeterminado
  redirect(`/${i18n.defaultLocale}`)
}
