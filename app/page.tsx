import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Philosophy } from "@/components/philosophy"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-border" />
      </div>
      <About />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-border" />
      </div>
      <Projects />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-border" />
      </div>
      <TechStack />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-border" />
      </div>
      <Philosophy />
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-border" />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
