import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    // Simplemente permitimos que la solicitud continúe sin redirecciones
    return NextResponse.next()
}

// Configuramos en qué rutas se ejecuta el middleware
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}