import { redirect } from "next/navigation"
import { i18n } from "@/i18n-config"

export default function Home() {
  // Redirigir a la página en el idioma predeterminado
  redirect(`/${i18n.defaultLocale}`)
}
