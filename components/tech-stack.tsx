"use client"

import { useEffect, useRef, useState } from "react"
import { Code2 } from 'lucide-react';

interface StackCategory {
  category: string
  items: string[]
}

const stack: StackCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "TypeScript", "Prisma ORM"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "TypeScript"],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    category: "Ferramentas & DevOps",
    items: ["Git", "GitHub", "Docker", "Vercel", "npm/pnpm"],
  },
  {
    category: "Testes & Qualidade",
    items: ["Jest", "React Testing Library", "ESLint", "Prettier"],
  },
]

export function TechStack() {
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
      id="stack"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
    >
      {/* Header alinhado à esquerda */}
<div
  className={`mb-12 sm:mb-16 transition-all duration-1000 ${
    visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
  }`}
>
  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-4">
    <Code2 className="h-3 w-3 text-primary" />
    <span className="font-mono text-xs text-primary uppercase">03 / Stack</span>
  </div>
  
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
    Tecnologias que domino
  </h2>
  
  <p className="mt-4 text-muted-foreground max-w-2xl">
    Ferramentas que utilizo no dia a dia
  </p>
</div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((category, catIndex) => (
          <div
            key={category.category}
            className={`transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: visible ? `${catIndex * 100}ms` : "0ms" }}
          >
            <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="border border-border px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}