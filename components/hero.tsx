"use client"

import { Link } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiCss,
  SiHtml5,
  SiJavascript,
} from "react-icons/si"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  const [currentStackIndex, setCurrentStackIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const stacks = [
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      code: `const App = () => {
  return <h1>Hello World</h1>
}`,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      code: `interface User {
  name: string
  age: number
}

const user: User = {
  name: "Fransisca",
  age: 25
}`,
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      code: `app.get('/api', (req, res) => {
  res.json({ message: "API OK" })
})`,
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
      code: `def hello_world():
    print("Hello from Python!")
    
hello_world()`,
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26",
      code: `<section class="hero">
  <h1>Bem-vindo</h1>
</section>`,
    },
    {
      name: "CSS3",
      icon: SiCss,
      color: "#1572B6",
      code: `.container {
  display: flex;
  gap: 1rem;
  animation: fadeIn 0.5s;
}`,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      code: `const data = await fetch('/api')
  .then(res => res.json())
  console.log(data)`,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Typing effect logic
  useEffect(() => {
    if (!visible) return

    const currentStack = stacks[currentStackIndex]
    const fullCode = currentStack.code
    const timeout = 200

    if (!isDeleting && displayedCode !== fullCode) {
      // Typing
      const timer = setTimeout(() => {
        setDisplayedCode(fullCode.slice(0, displayedCode.length + 1))
      }, timeout / 2)
      return () => clearTimeout(timer)
    } else if (!isDeleting && displayedCode === fullCode) {
      // Pause before deleting
      const timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else if (isDeleting && displayedCode !== "") {
      // Deleting
      const timer = setTimeout(() => {
        setDisplayedCode(displayedCode.slice(0, -1))
      }, timeout / 3)
      return () => clearTimeout(timer)
    } else if (isDeleting && displayedCode === "") {
      // Move to next stack
      setIsDeleting(false)
      setCurrentStackIndex((prev) => (prev + 1) % stacks.length)
    }
  }, [displayedCode, isDeleting, currentStackIndex, visible, stacks])

  useEffect(() => {
    if (visible && currentStackIndex === stacks.length - 1 && !isDeleting) {
      setTypingComplete(true)
    }
  }, [currentStackIndex, visible, isDeleting, stacks.length])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative min-h-screen mx-auto max-w-7xl px-6 py-20 flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side - Hero Info */}
        <div
          className={`transition-all duration-1000 ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Fransisca
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Gelvânia
            </span>
          </h1>

          <div className="mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-3">
              Full Stack Developer
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Criando soluções digitais que unem{" "}
            <span className="text-foreground font-semibold">design elegante</span> e{" "}
            <span className="text-foreground font-semibold">código robusto</span>. 
            Especialista em construir experiências web completas, do frontend ao backend, 
            com foco em performance e escalabilidade.
          </p>

          <div className="flex gap-4">
            <a href="#projetos" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
              Ver Projetos
            </a>
            <a href="#contato" className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-all">
              Contato
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { value: "3+", label: "Anos de experiência" },
              { value: "15+", label: "Projetos" },
              { value: "100%", label: "Dedicada" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Roadmap com Typing Effect */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
            <div className="mb-6">

              <p className="text-xs text-muted-foreground">
                Tecnologias que domino no dia a dia
              </p>
            </div>

            {/* Timeline Roadmap */}
            <div className="relative mb-8">
              <div className="flex justify-between items-center">
                {stacks.map((stack, idx) => {
                  const Icon = stack.icon
                  const isActive = idx === currentStackIndex
                  const isPast = idx < currentStackIndex
                  return (
                    <div
                      key={stack.name}
                      className="flex flex-col items-center gap-2 flex-1 relative"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                            : isPast
                            ? "bg-primary/30"
                            : "bg-border"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isActive || isPast ? "text-white" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <p className="text-xs font-mono hidden md:block">{stack.name}</p>
                      {idx < stacks.length - 1 && (
                        <div
                          className={`absolute top-5 left-[60%] w-full h-0.5 ${
                            idx < currentStackIndex ? "bg-primary" : "bg-border"
                          }`}
                          style={{ width: "calc(100% - 2rem)" }}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Typing Effect Terminal */}
            <div className="bg-black/90 rounded-xl p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-xs text-gray-400 ml-2">
                  {stacks[currentStackIndex].name}.code
                </p>
              </div>

              <div className="relative">
                <pre className="text-gray-300 whitespace-pre-wrap break-words">
                  <code>{displayedCode}</code>
                  <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" />
                </pre>
              </div>

              {typingComplete && (
                <div className="mt-3 pt-2 border-t border-gray-700 animate-fade-in">
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span>✓</span> Roadmap completo! +30 tecnologias no repertório
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}