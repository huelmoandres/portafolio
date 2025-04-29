import { SKILLS } from "@/lib/constants"

export default function Skills() {
  // Verificamos que SKILLS sea un array antes de usar map
  if (!Array.isArray(SKILLS)) {
    console.error("SKILLS no es un array:", SKILLS)
    return (
        <section id="skills" className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">Mis Habilidades</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground">Error al cargar las habilidades.</p>
            </div>
          </div>
        </section>
    )
  }

  return (
      <section id="skills" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">Mis Habilidades</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Estas son las tecnologías y habilidades con las que trabajo para crear soluciones digitales excepcionales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skill, index) => (
                <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}