import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/constants"
import type { Dictionary } from "@/lib/dictionary"
import { GradientButton } from "@/components/ui/gradient-button"

export default function Projects({
  dictionary
}: {
  dictionary: Dictionary
}) {
  // Mapeo de proyectos a claves de traducción
  const projectKeys = ["eire", "hawkers", "amv", "portfolio"]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
            {dictionary.projects.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">{dictionary.projects.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:shadow-[#3a5ecf]/10 transition-all duration-300"
            >
              <div className="relative w-full h-48 md:h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-center" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3a5ecf] to-[#a855f7]">
                  {dictionary.projects.projectTitles[
                    projectKeys[index] as keyof typeof dictionary.projects.projectTitles
                  ] || project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {dictionary.projects.projectDescriptions[
                    projectKeys[index] as keyof typeof dictionary.projects.projectDescriptions
                  ] || project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gradient-to-r from-[#3a5ecf]/10 to-[#a855f7]/10 text-foreground text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="max-w-[180px]">
                  <GradientButton href={project.liveUrl} target="_blank" variant="outline">
                    <span className="flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {dictionary.projects.viewSite}
                    </span>
                  </GradientButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
