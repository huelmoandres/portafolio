import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest, { params }: { params: { file: string } }) {
    const { file } = params

    // Validar que el archivo solicitado es un PDF y tiene un nombre válido
    if (!file.match(/^cv-(en|es)\.pdf$/)) {
        return new NextResponse("Archivo no válido", { status: 400 })
    }

    try {
        // Construir la ruta al archivo en el sistema de archivos
        const filePath = path.join(process.cwd(), "public", file)

        // Verificar si el archivo existe
        if (!fs.existsSync(filePath)) {
            console.error(`Archivo no encontrado: ${filePath}`)
            return new NextResponse("Archivo no encontrado", { status: 404 })
        }

        // Leer el archivo
        const fileBuffer = fs.readFileSync(filePath)

        // Devolver el archivo con los encabezados adecuados
        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename=${file}`,
            },
        })
    } catch (error) {
        console.error("Error al servir el archivo:", error)
        return new NextResponse("Error al procesar la solicitud", { status: 500 })
    }
}