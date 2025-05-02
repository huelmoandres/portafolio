import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/i18n-config"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <Hero dictionary={dictionary} lang={lang} />
      <About dictionary={dictionary} lang={lang} />
      <Skills dictionary={dictionary} lang={lang} />
      <Projects dictionary={dictionary} lang={lang} />
      <Contact dictionary={dictionary} lang={lang} />
      <Footer dictionary={dictionary} lang={lang} />
    </main>
  )
}
