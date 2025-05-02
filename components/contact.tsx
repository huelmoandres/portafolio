"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, MessageSquare } from "lucide-react"
import { useContactForm } from "@/lib/form-utils"
import { CONTACT_INFO } from "@/lib/constants"
import type { ContactFormData } from "@/types/contact"
import type { Dictionary } from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"

export default function Contact({
  dictionary,
  lang,
}: {
  dictionary: Dictionary
  lang: Locale
}) {
  // Estado inicial del formulario
  const initialFormState: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

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
        throw new Error(data.error || dictionary.contact.error)
      }

      // Éxito
      setSubmitStatus("success")
      setSubmitMessage(dictionary.contact.success)
      setFormData(initialFormState)

      // Limpiar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitMessage("")
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      // Error
      setSubmitStatus("error")
      setSubmitMessage(error instanceof Error ? `Error: ${error.message}` : dictionary.contact.error)
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 gradient-text">{dictionary.contact.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">{dictionary.contact.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {dictionary.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={dictionary.contact.name}
                    className={`${errors.name ? "border-red-500" : ""} focus-within:border-[#3a5ecf]`}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {dictionary.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`${errors.email ? "border-red-500" : ""} focus-within:border-[#3a5ecf]`}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  {dictionary.contact.subject}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={dictionary.contact.subject}
                  className={`${errors.subject ? "border-red-500" : ""} focus-within:border-[#3a5ecf]`}
                />
                {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {dictionary.contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={`${dictionary.contact.message}...`}
                  rows={6}
                  className={`${errors.message ? "border-red-500" : ""} focus-within:border-[#3a5ecf]`}
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto rounded-full"
                variant="gradient"
              >
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
                    {dictionary.contact.sending}
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    {dictionary.contact.send}
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
              <h3 className="text-xl font-semibold mb-4 gradient-text">{dictionary.contact.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#3a5ecf] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <MessageSquare className="h-5 w-5 text-[#a855f7] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <a
                      href={CONTACT_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-text hover:underline"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{dictionary.contact.clickToChat}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#3a5ecf] mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">{dictionary.contact.location}</h4>
                    <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">{dictionary.contact.socialNetworks}</h3>
              <div className="flex items-start">
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-text hover:underline"
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
