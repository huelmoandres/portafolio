import { Code, Layout, Database, Smartphone, Server, Figma, GitBranch, Cpu } from "lucide-react"
import type { Project } from "@/types/project"

// Datos de proyectos
export const PROJECTS: Project[] = [
  {
    title: "EIRE - Escuela Integral Region Este",
    description:
        "Sitio web educativo para la Escuela Integral Region Este, con secciones informativas y acceso a aulas virtuales.",
    image: "/eire.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://eire.uy/",
  },
  {
    title: "Hawkers Store",
    description:
        "Tienda en línea para la marca de lentes de sol Hawkers, con catálogo de productos y sistema de compras.",
    image: "/hawkers.png",
    tags: ["E-commerce", "Web Design", "UX/UI"],
    liveUrl: "https://hwkstore.com.uy/",
  },
  {
    title: "Sistema de Gestión AMV Store",
    description:
        "Sistema de administración personalizado para AMV Store, con gestión de inventario, ventas y clientes.",
    image: "/business-performance-overview.png",
    tags: ["Sistema de Gestión", "Full-Stack", "Dashboard"],
    liveUrl: "https://gestion.amvstore.com.uy/",
  },
  {
    title: "Mi Portafolio Personal",
    description: "Sitio web personal mostrando mis proyectos y habilidades como desarrollador web.",
    image: "/portafolio.png",
    tags: ["Next.js 15", "Tailwind CSS", "React"],
    liveUrl: "#",
  },
]

// Datos de habilidades
export const SKILLS = [
  {
    title: "Desarrollo Frontend",
    description: "Creación de interfaces modernas y responsivas con React, Next.js y Tailwind CSS.",
    icon: <Layout className="h-10 w-10 text-primary" />,
  },
  {
    title: "Desarrollo Backend",
    description: "Construcción de APIs y servicios con Node.js, Express y bases de datos SQL/NoSQL.",
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: "Sistemas de Gestión",
    description: "Desarrollo de aplicaciones personalizadas para administración de negocios e inventario.",
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: "E-commerce",
    description: "Implementación de tiendas en línea con sistemas de pago y gestión de productos.",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
  },
  {
    title: "Diseño Web",
    description: "Creación de interfaces intuitivas y experiencias de usuario atractivas.",
    icon: <Figma className="h-10 w-10 text-primary" />,
  },
  {
    title: "Control de Versiones",
    description: "Gestión de código con Git, GitHub y metodologías de trabajo en equipo.",
    icon: <GitBranch className="h-10 w-10 text-primary" />,
  },
  {
    title: "Lenguajes de Programación",
    description: "JavaScript, TypeScript, HTML, CSS, PHP y más.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "Despliegue y Hosting",
    description: "Implementación y despliegue de aplicaciones en servidores y servicios en la nube.",
    icon: <Cpu className="h-10 w-10 text-primary" />,
  },
]

// Datos de navegación
export const NAV_LINKS = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
]

// Datos de contacto
export const CONTACT_INFO = {
  email: "huelmoandres@gmail.com",
  whatsapp: "+598 9138 3578",
  whatsappLink:
      "https://api.whatsapp.com/send?phone=59891383578&text=Hola%20Andrés,%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20sobre%20un%20proyecto",
  location: "Uruguay",
  linkedin: "https://linkedin.com/in/andres-huelmo-rijo",
}