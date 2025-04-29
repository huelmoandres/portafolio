import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/constants"

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Mis Proyectos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Aquí hay una selección de proyectos en los que he trabajado. Cada uno representa diferentes habilidades y
            soluciones para distintos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-center" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Sitio
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
