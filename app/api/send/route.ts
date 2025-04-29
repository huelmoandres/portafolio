import { NextResponse } from "next/server"
import { Resend } from "resend"
import { generateEmailHtml } from "@/lib/email-template"
import { CONTACT_INFO } from "@/lib/constants"
import { contactFormSchema } from "@/types/contact"

// Verificar que la API key exista antes de inicializar Resend
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("RESEND_API_KEY no está configurada en las variables de entorno")
}

// Inicializar Resend con tu API key
const resend = new Resend(resendApiKey)

export async function POST(request: Request) {
  try {
    // Verificar que la API key esté configurada
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "La API key de Resend no está configurada. Contacta al administrador del sitio." },
        { status: 500 },
      )
    }

    // Obtener y validar los datos del formulario
    const formData = await request.json()

    try {
      contactFormSchema.parse(formData)
    } catch (error) {
      return NextResponse.json({ error: "Datos de formulario inválidos" }, { status: 400 })
    }

    const { name, email, subject, message } = formData

    // Generar el HTML del correo
    const html = generateEmailHtml(name, email, subject, message)

    // Enviar el correo electrónico
    const { data, error } = await resend.emails.send({
      from: "Formulario de Contacto <onboarding@resend.dev>", // Cambiar cuando verifiques tu dominio
      to: [CONTACT_INFO.email],
      subject: `Nuevo mensaje de contacto: ${subject}`,
      reply_to: email,
      html,
    })

    if (error) {
      console.error("Error al enviar el correo:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error en el servidor:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
