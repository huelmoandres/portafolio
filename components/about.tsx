import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/me.jpg" alt="Andrés Huelmo" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">Sobre Mí</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>

            <p className="mb-4">
              Soy un desarrollador web con experiencia en la creación de aplicaciones web modernas y responsivas. Mi
              pasión es construir soluciones digitales que no solo se vean bien, sino que también resuelvan problemas
              reales para mis clientes.
            </p>

            <p className="mb-6">
              Me especializo en desarrollo web full-stack, creando tanto sitios web corporativos como sistemas de
              gestión personalizados. Mi enfoque se centra en crear experiencias de usuario intuitivas y funcionales que
              ayuden a las empresas a alcanzar sus objetivos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Especialidad</h3>
                <p className="text-muted-foreground">
                  Desarrollo Web Full-Stack
                  <br />
                  Sistemas de Gestión
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Disponibilidad</h3>
                <p className="text-muted-foreground">Freelance / Tiempo Completo</p>
              </div>
            </div>

            <Button asChild>
              <Link href="/cv.pdf" target="_blank" download>
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
