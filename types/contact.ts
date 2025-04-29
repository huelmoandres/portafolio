import { z } from "zod"

// Esquema de validación para el formulario de contacto
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido" }),
  subject: z.string().min(3, { message: "El asunto debe tener al menos 3 caracteres" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

// Tipo derivado del esquema
export type ContactFormData = z.infer<typeof contactFormSchema>

// Tipo para los errores del formulario
export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

// Tipo para el estado de envío
export type SubmitStatus = "success" | "error" | null
