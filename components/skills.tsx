import { SKILLS } from "@/lib/constants"
import type { Dictionary } from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"

export default function Skills({
  dictionary,
  lang,
}: {
  dictionary: Dictionary
  lang: Locale
}) {
  // Verificamos que SKILLS sea un array antes de usar map
  if (!Array.isArray(SKILLS)) {
    console.error("SKILLS no es un array:", SKILLS)
    return (
      <section id="skills" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2 gradient-text">{dictionary.skills.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] mx-auto mb-6"></div>
            <p className="text-muted-foreground">Error al cargar las habilidades.</p>
          </div>
        </div>
      </section>
    )
  }

  // Mapeo de índices a claves de traducción
  const skillTranslations = [
    "frontend",
    "backend",
    "management",
    "ecommerce",
    "webdesign",
    "versioncontrol",
    "programming",
    "deployment",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 gradient-text">{dictionary.skills.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3a5ecf] to-[#a855f7] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">{dictionary.skills.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-transparent hover:gradient-border transition-all duration-300"
            >
              <div className="mb-4 text-[#3a5ecf] group-hover:text-[#a855f7] transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-hover">
                {dictionary.skills[skillTranslations[index] as keyof typeof dictionary.skills]?.title || skill.title}
              </h3>
              <p className="text-muted-foreground">
                {dictionary.skills[skillTranslations[index] as keyof typeof dictionary.skills]?.description ||
                  skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
