"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Server, Sparkles, Gauge } from "lucide-react"

const principles = [
  {
    number: "01",
    title: "Usuário sempre em primeiro lugar.",
    description:
      "Cada feature começa com a pergunta: como isso melhora a vida do usuário? Design e código existem para servir pessoas, não para impressionar outros devs.",
    icon: Target,
  },
  {
    number: "02",
    title: "Interface sem backend robusto é ficção.",
    description:
      "Beleza visual é importante, mas precisa de um sistema confiável por trás. Dedico tanto cuidado ao código do servidor quanto ao design da tela.",
    icon: Server,
  },
  {
    number: "03",
    title: "Simplicidade é a sofisticação suprema.",
    description:
      "Código simples é mais fácil de manter, testar e escalar. Escolho soluções elegantes sobre complexas, sempre que possível.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Performance é um direito do usuário.",
    description:
      "Aplicações lentas frustram e alienam. Otimizo desde o carregamento da página até a sincronização de dados, porque cada milissegundo conta.",
    icon: Gauge,
  },
]

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1, rootMargin: "50px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="filosofia"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
    >
      {/* Header alinhado à esquerda */}
      <div
        className={`mb-12 sm:mb-16 transition-all duration-1000 ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-4">
          <span className="font-mono text-xs text-primary uppercase">04 / Manifesto</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
          Meu credo de desenvolvimento
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Princípios que guiam minhas decisões técnicas e de design
        </p>
      </div>

      {/* Grid de princípios */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {principles.map((principle, index) => {
          const Icon = principle.icon
          return (
            <div
              key={principle.number}
              className={`group border border-border bg-card p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-lg ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="mb-4 flex items-center gap-3">
                {Icon && <Icon className="h-5 w-5 text-primary" />}
                <span className="font-mono text-sm font-bold text-primary">
                  {principle.number}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}