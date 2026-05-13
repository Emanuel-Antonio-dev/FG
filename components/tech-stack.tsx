"use client"

import { useEffect, useRef, useState } from "react"

interface StackCategory {
  category: string
  items: string[]
}

const stack: StackCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Headless UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "TypeScript", "Prisma ORM", "NextAuth.js"],
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      <div
        className={`mb-16 transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-3 font-mono text-xs tracking-[0.3em] text-primary uppercase">
          03 / Stack
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Tecnologias que domino
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((category, catIndex) => (
          <div
            key={category.category}
            className={`transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: visible ? `${catIndex * 100}ms` : "0ms" }}
          >
            <h3 className="mb-5 font-mono text-xs tracking-[0.2em] text-primary uppercase">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <span className="h-px w-4 bg-border transition-all duration-300 group-hover:w-8 group-hover:bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
