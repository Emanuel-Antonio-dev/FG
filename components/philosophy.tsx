"use client"

import { useEffect, useRef, useState } from "react"

const principles = [
  {
    number: "01",
    title: "Usuário sempre em primeiro lugar.",
    description:
      "Cada feature começa com a pergunta: como isso melhora a vida do usuário? Design e código existem para servir pessoas, não para impressionar outros devs.",
  },
  {
    number: "02",
    title: "Interface sem backend robusto é ficção.",
    description:
      "Beleza visual é importante, mas precisa de um sistema confiável por trás. Dedico tanto cuidado ao código do servidor quanto ao design da tela.",
  },
  {
    number: "03",
    title: "Simplicidade é a sofisticação suprema.",
    description:
      "Código simples é mais fácil de manter, testar e escalar. Escolho soluções elegantes sobre complexas, sempre que possível.",
  },
  {
    number: "04",
    title: "Performance é um direito do usuário.",
    description:
      "Aplicações lentas frustram e alienam. Otimizo desde o carregamento da página até a sincronização de dados, porque cada milissegundo conta.",
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="filosofia"
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      <div
        className={`mb-16 transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-3 font-mono text-xs tracking-[0.3em] text-primary uppercase">
          04 / Filosofia
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Como eu penso software
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
        {principles.map((principle, index) => (
          <div
            key={principle.number}
            className={`group bg-background p-8 transition-all duration-700 hover:bg-secondary md:p-10 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
          >
            <span className="mb-4 block font-mono text-xs text-primary">
              {principle.number}
            </span>
            <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {principle.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
