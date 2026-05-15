"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Globe, 
  Smartphone, 
  Database, 
  Brush, 
  Rocket, 
  Settings, 
  Layers,
  FolderGit2
} from "lucide-react"

const services = [
  {
    title: "Desenvolvimento Web",
    icon: Globe,
    description: "Sites e aplicações web responsivas, rápidas e otimizadas para SEO utilizando React, Next.js e TypeScript.",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Apps nativos e cross-platform com React Native, Expo e integração com APIs e serviços em nuvem.",
  },
  {
    title: "Backend & API",
    icon: Database,
    description: "APIs RESTful e GraphQL, bancos de dados relacionais e NoSQL, autenticação e segurança.",
  },
  {
    title: "UI/UX Design",
    icon: Brush,
    description: "Design de interfaces intuitivas e atraentes, protótipos interativos e experiência do usuário.",
  },
  {
    title: "Otimização & Performance",
    icon: Rocket,
    description: "Melhoria de performance, SEO, acessibilidade e Core Web Vitals para melhor rankeamento.",
  },
  {
    title: "Consultoria & Manutenção",
    icon: Settings,
    description: "Code review, arquitetura de software, migração de tecnologias e manutenção contínua.",
  }
]

export function Services() {
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
      id="servicos"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
    >
      {/* Header */}
<div
  className={`mb-12 sm:mb-16 transition-all duration-1000 ${
    visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
  }`}
>
  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-4">
    <FolderGit2 className="h-3 w-3 text-primary" />
    <span className="font-mono text-xs text-primary uppercase">05 / Serviços</span>
  </div>
  
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">Meus Serviços</h2>
  
  <p className="mt-4 text-muted-foreground max-w-2xl">
    Soluções completas para transformar sua ideia em realidade
  </p>
</div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className={`group border border-border bg-card p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-lg ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

            </div>
          )
        })}
      </div>
    </section>
  )
}