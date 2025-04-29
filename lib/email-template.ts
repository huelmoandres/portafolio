// Plantilla HTML para el correo electrónico
export function generateEmailHtml(name: string, email: string, subject: string, message: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #3b82f6;">Nuevo mensaje desde tu portafolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
        Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
      </p>
    </div>
  `
}
