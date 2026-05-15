"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "Emanuel António",
    role: "CTO nas Industrias Emaricar",
    content: "Trabalhar com ela foi uma experiência incrível. Código limpo, entregas no prazo e comunicação excepcional. Superou todas as expectativas.",
    rating: 5,
  },
  {
    name: "Formoza Manuel",
    role: "Product Manager na StartupX",
    content: "Profissional extremamente competente. Entendeu rapidamente as necessidades do projeto e entregou uma solução robusta e escalável.",
    rating: 5,
  },
  {
    name: "Gersia Nsiona",
    role: "Fundadora da Nsiona Tech",
    content: "Uma das melhores desenvolvedoras com quem já trabalhei. Atenção aos detalhes e comprometimento com a qualidade impressionantes.",
    rating: 5,
  },
]

export function Testimonials() {
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
      id="depoimentos"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
    >
<div
  className={`mb-12 sm:mb-16 transition-all duration-1000 ${
    visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
  }`}
>
  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-4">
    <MessageCircle className="h-3 w-3 text-primary" />
    <span className="font-mono text-xs text-primary uppercase">06 / DEPOIMENTOS</span>
  </div>
  
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
    O que dizem sobre meu trabalho
  </h2>
  
  <p className="mt-4 text-muted-foreground max-w-2xl">
    Feedback de clientes e colegas com quem tive o prazer de colaborar
  </p>
</div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`group border border-border bg-card p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-lg ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
          >
            <Quote className="mb-4 h-8 w-8 text-primary/40" />
            
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
              ))}
            </div>
            
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}