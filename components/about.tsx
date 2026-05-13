"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { User, Code2, Award, Zap } from "lucide-react"

export function About() {
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

  const stats = [
    { value: "3+", label: "Anos de experiência", icon: Award },
    { value: "15+", label: "Projetos entregues", icon: Code2 },
    { value: "100%", label: "Foco em qualidade", icon: Zap },
  ]

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-24"
    >
      {/* Background decoration suave */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left Side - Content */}
        <div
          className={`flex-1 transition-all duration-700 ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <User className="h-3 w-3 text-primary" />
            <span className="text-xs font-mono text-primary">01 / SOBRE MIM</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Criando{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              experiências digitais
            </span>{" "}
            que fazem a diferença
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sou uma desenvolvedora full stack apaixonada por criar aplicações que
              resolvem problemas reais. Trabalho com{" "}
              <span className="text-foreground font-semibold">React</span>,{" "}
              <span className="text-foreground font-semibold">TypeScript</span> e{" "}
              <span className="text-foreground font-semibold">Node.js</span>,
              construindo experiências intuitivas no frontend e backends robustos que
              escalam com confiança.
            </p>
            <p>
              Acredito que o melhor código é aquele que equilibra{" "}
              <span className="text-foreground font-semibold">elegância técnica</span>{" "}
              com <span className="text-foreground font-semibold">usabilidade</span>.
              Penso sempre no usuário final e como cada funcionalidade impacta sua
              experiência, mantendo o código limpo, testável e sustentável.
            </p>
          </div>
        </div>

        {/* Right Side - Image Card */}
        <div
          className={`flex-1 transition-all duration-700 delay-200 ${
            visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-transparent p-1">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary/20">
              {/* Placeholder enquanto não tem imagem */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <User className="w-20 h-20 mb-4 opacity-20" />
                <p className="text-sm text-center px-4">Foto de perfil</p>
              </div>
              
              {/* Quando tiver a imagem, descomente isso e remova o placeholder acima */}
              {/* <Image
                src="/fransisca-profile.jpg"
                alt="Fransisca Gelvânia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}