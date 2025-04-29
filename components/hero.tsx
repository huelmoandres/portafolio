import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Linkedin, Phone } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-primary font-medium mb-4">¡Hola! Mi nombre es</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Andrés Huelmo</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-8">
            Desarrollador Web & Diseñador
          </h2>
          <p className="max-w-2xl text-muted-foreground mb-10">
            Soy un apasionado desarrollador web especializado en crear experiencias digitales excepcionales. Transformo
            ideas en soluciones web innovadoras y funcionales, desde sitios web corporativos hasta sistemas de gestión
            personalizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contáctame</Link>
            </Button>
          </div>

          <div className="flex space-x-6 mb-16">
            <Link
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>

          <Link href="#about" className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
