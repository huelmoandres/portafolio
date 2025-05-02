import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "@/i18n-config"

// Esta función determina el idioma predeterminado basado en las cabeceras Accept-Language
function getLocale(request: NextRequest): string {
  // Simplificamos para evitar errores con Negotiator
  const acceptLanguage = request.headers.get("accept-language") || ""

  // Verificamos si el idioma español está en las cabeceras
  if (acceptLanguage.includes("es")) {
    return "es"
  }

  // Por defecto, usamos inglés
  return "en"
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Verificar si la ruta ya tiene un idioma
  const pathnameHasLocale = i18n.locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  // Si la ruta no tiene un idioma, redirigir
  if (!pathnameHasLocale) {
    // No redirigir si es un archivo estático
    if (
        pathname.includes(".") || // Archivos con extensión (imágenes, CSS, JS, etc.)
        pathname.startsWith("/api/") || // Rutas de API
        pathname.startsWith("/_next/") || // Archivos de Next.js
        pathname.startsWith("/images/") || // Carpeta de imágenes
        pathname.startsWith("/cv-") // Archivos CV
    ) {
      return NextResponse.next()
    }

    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)

    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  // Matcher ignorando _next, api, y archivos estáticos
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
}
