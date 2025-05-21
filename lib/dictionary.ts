import "server-only"
import type { Locale } from "@/i18n-config"

// Define el tipo para el diccionario
export type Dictionary = {
  navigation: {
    home: string
    about: string
    skills: string
    projects: string
    contact: string
    downloadCV: string
  }
  hero: {
    greeting: string
    role: string
    description: string
    viewProjects: string
    contactMe: string
    scrollDown: string
  }
  about: {
    title: string
    paragraph1: string
    paragraph2: string
    specialty: string
    specialtyDesc: string
    location: string
    availability: string
    availabilityDesc: string
    downloadCV: string
  }
  skills: {
    title: string
    description: string
    frontend: {
      title: string
      description: string
    }
    backend: {
      title: string
      description: string
    }
    management: {
      title: string
      description: string
    }
    ecommerce: {
      title: string
      description: string
    }
    webdesign: {
      title: string
      description: string
    }
    versioncontrol: {
      title: string
      description: string
    }
    programming: {
      title: string
      description: string
    }
    deployment: {
      title: string
      description: string
    }
  }
  projects: {
    title: string
    description: string
    viewSite: string
    projectTitles: {
      eire: string
      hawkers: string
      amv: string
      portfolio: string
      charruashop: string
    }
    projectDescriptions: {
      eire: string
      hawkers: string
      amv: string
      portfolio: string
      charruashop: string
    }
  }
  contact: {
    title: string
    description: string
    name: string
    email: string
    subject: string
    message: string
    sending: string
    send: string
    success: string
    error: string
    contactInfo: string
    location: string
    clickToChat: string
    socialNetworks: string
  }
  footer: {
    description: string
    madeWith: string
    allRights: string
  }
  languageSelector: {
    en: string
    es: string
  }
}

// Diccionarios
const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Error loading dictionary for ${locale}:`, error)
    // Si falla, intentamos cargar el inglés como respaldo
    if (locale !== "en") {
      try {
        return await dictionaries.en()
      } catch (fallbackError) {
        console.error("Error loading fallback dictionary:", fallbackError)
      }
    }
    // Si todo falla, devolvemos un objeto vacío con la estructura correcta
    return {
      navigation: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        downloadCV: "Download CV",
      },
      hero: { greeting: "", role: "", description: "", viewProjects: "", contactMe: "", scrollDown: "" },
      about: {
        title: "",
        paragraph1: "",
        paragraph2: "",
        specialty: "",
        specialtyDesc: "",
        location: "",
        availability: "",
        availabilityDesc: "",
        downloadCV: "",
      },
      skills: {
        title: "",
        description: "",
        frontend: { title: "", description: "" },
        backend: { title: "", description: "" },
        management: { title: "", description: "" },
        ecommerce: { title: "", description: "" },
        webdesign: { title: "", description: "" },
        versioncontrol: { title: "", description: "" },
        programming: { title: "", description: "" },
        deployment: { title: "", description: "" },
      },
      projects: {
        title: "",
        description: "",
        viewSite: "",
        projectTitles: { eire: "", hawkers: "", amv: "", portfolio: "" },
        projectDescriptions: { eire: "", hawkers: "", amv: "", portfolio: "" },
      },
      contact: {
        title: "",
        description: "",
        name: "",
        email: "",
        subject: "",
        message: "",
        sending: "",
        send: "",
        success: "",
        error: "",
        contactInfo: "",
        location: "",
        clickToChat: "",
        socialNetworks: "",
      },
      footer: { description: "", madeWith: "", allRights: "" },
      languageSelector: { en: "English", es: "Español" },
    }
  }
}
