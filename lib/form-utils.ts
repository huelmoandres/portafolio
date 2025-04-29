"use client"

import type React from "react"

import { useState } from "react"
import type { ContactFormData, ContactFormErrors, SubmitStatus } from "@/types/contact"
import { contactFormSchema } from "@/types/contact"
import { z } from "zod"

// Hook personalizado para manejar el formulario de contacto
export function useContactForm(initialState: ContactFormData) {
  const [formData, setFormData] = useState<ContactFormData>(initialState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar el error del campo cuando el usuario comienza a escribir de nuevo
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: ContactFormErrors = {}
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof ContactFormData
          newErrors[path] = err.message
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const resetForm = () => {
    setFormData(initialState)
    setErrors({})
    setSubmitMessage("")
    setSubmitStatus(null)
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitMessage,
    submitStatus,
    setFormData,
    setErrors,
    setIsSubmitting,
    setSubmitMessage,
    setSubmitStatus,
    handleChange,
    validateForm,
    resetForm,
  }
}
