"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Phone } from "lucide-react"
import { useContactForm } from "@/lib/form-utils"
import { CONTACT_INFO } from "@/lib/constants"
import type { ContactFormData } from "@/types/contact"

// Estado inicial del formulario
const initialFormState: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export default function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    submitMessage,
    submitStatus,
    handleChange,
    validateForm,
    setIsSubmitting,
    setSubmitMessage,
    setSubmitStatus,
    setFormData,
  } = useContactForm(initialFormState)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar el formulario antes de procesar
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage("")

    try {
      // Enviar los datos del formulario a nuestra API
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      // Éxito
      setSubmitStatus("success")
      setSubmitMessage("¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.")
      setFormData(initialFormState)

      // Limpiar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitMessage("")
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      // Error
      setSubmitStatus("error")
      setSubmitMessage(
        error instanceof Error
          ? `Error: ${error.message}`
          : "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
      )
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Contáctame</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            ¿Tienes un proyecto en mente o necesitas una solución digital personalizada? Completa el formulario a
            continuación o contáctame directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto de tu mensaje"
                  className={errors.subject ? "border-red-500" : ""}
                />
                {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje..."
                  rows={6}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </span>
                )}
              </Button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <a
                      href={CONTACT_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Haz clic para iniciar una conversación</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Ubicación</h4>
                    <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
              <div className="flex items-start">
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/andres-huelmo-rijo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
