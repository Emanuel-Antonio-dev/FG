"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { User, Code2, Award, Zap, Layers} from "lucide-react"

import Image from "next/image"

interface Project {
  title: string
  stack: string[]
  description: string
  details: string
  images: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "Dashboard de Análise de Vendas",
    stack: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "Recharts", "Express"],
    description:
      "Dashboard interativo para visualização de métricas de vendas em tempo real com gráficos dinâmicos e relatórios personalizáveis.",
    details:
      "Interface responsiva com React Hooks e Context API para gerenciamento de estado. Integração com API REST para carregamento de dados em tempo real. Gráficos interativos usando Chart.js e Recharts com animações suaves. Sistema de filtros avançados por período, categoria, região e vendedor. Exportação de dados em PDF, CSV e Excel. Design mobile-first com suporte a temas claro e escuro. Sistema de notificações em tempo real para metas atingidas. Implementação de cache com React Query para otimização de performance. Testes unitários com Jest e React Testing Library. Documentação completa com Storybook.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    ],
    github: "https://github.com/marinasilva/dashboard-vendas",
    demo: "https://dashboard-vendas-demo.vercel.app",
  },
  {
    title: "Plataforma de E-Learning",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "NextAuth"],
    description:
      "Plataforma completa de educação online com cursos, aulas, quizzes, sistema de certificados e comunidade de estudantes.",
    details:
      "Full stack com Next.js 13+ App Router e Server Components. Autenticação com NextAuth.js e JWT com suporte a Google e GitHub. Banco de dados relacional com Prisma ORM e PostgreSQL. Sistema de upload de vídeos otimizado com Mux. Dashboard do instrutor para criar e gerenciar cursos com editor rich-text. Rastreamento de progresso do aluno com gráficos de desempenho. Sistema de quizzes com pontuação e feedback instantâneo. Geração automática de certificados em PDF. Integração com Stripe para monetização de cursos. Sistema de avaliações e comentários. Fórum de discussão por curso. Sistema de conquistas e gamificação. WebSockets para chat em tempo real durante aulas ao vivo. SEO otimizado com metadados dinâmicos e sitemap automático. PWA para instalação em dispositivos móveis.",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    ],
    github: "https://github.com/marinasilva/elearning-platform",
    demo: "https://elearning-platform-demo.vercel.app",
  },
  {
    title: "App de Gerenciamento de Tarefas",
    stack: ["React Native", "Node.js", "MongoDB", "Socket.io", "Express", "Redux Toolkit"],
    description:
      "Aplicativo mobile para organizar tarefas em equipe com sincronização em tempo real, chat integrado e produtividade.",
    details:
      "Desenvolvimento multiplataforma com React Native e Expo para iOS e Android. Backend escalável em Node.js com Express e TypeScript. Banco de dados MongoDB Atlas para flexibilidade e escalabilidade. Comunicação real-time com Socket.io para atualizações instantâneas. Sistema de notificações push com Firebase Cloud Messaging. Compartilhamento de tarefas entre usuários com diferentes níveis de permissão. Autenticação biométrica no mobile (FaceID/TouchID). Dashboard com gráficos de produtividade. Sistema de labels, prioridades e datas de vencimento. Calendário integrado com visualização mensal/semanal. Chat em tempo real para discussão de tarefas. Sistema de anexos com upload para Cloudinary. Modo offline com sincronização automática. Backup e restauração de dados. Widgets para tela inicial do dispositivo. Integração com Google Calendar e Trello API.",
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800",
    ],
    github: "https://github.com/marinasilva/task-manager-app",
    demo: "",
  },
  {
    title: "E-Commerce com Checkout Seguro",
    stack: ["Next.js", "Stripe", "Prisma", "TailwindCSS", "PostgreSQL", "Redis"],
    description:
      "Loja online completa com carrinho de compras, checkout seguro, painel administrativo e sistema de recomendação.",
    details:
      "Frontend moderno com Next.js 14 e Server Components. Componentes Headless UI e Radix UI para acessibilidade. Integração com Stripe para pagamentos seguros (cartão, PIX, boleto). Sistema de gerenciamento de produtos, estoque e pedidos. Autenticação de usuários com Google OAuth e magic links. Email marketing integrado com Resend e React Email. Analytics com Google Analytics 4 e Mixpanel. SEO otimizado com metadados dinâmicos e geração de sitemap. Sistema de cupons de desconto e programas de fidelidade. Avaliações e classificação de produtos com fotos. Carrinho persistente com Redis. Sistema de wishlist e compartilhamento. Recomendação de produtos baseada em histórico. Dashboard administrativo completo com gráficos de vendas. Sistema de rastreamento de pedidos. Páginas de produto com variações (tamanho, cor, etc). Integração com WhatsApp para suporte ao cliente. Webhooks para processamento assíncrono de pedidos. Rate limiting e proteção contra DDoS. Monitoramento com Sentry e LogRocket.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800",
    ],
    github: "https://github.com/marinasilva/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Rede Social para Artistas",
    stack: ["Next.js", "GraphQL", "Apollo", "Prisma", "TailwindCSS", "AWS S3"],
    description:
      "Rede social focada em artistas para portfólio, networking, vendas de arte e comunidade criativa.",
    details:
      "Plataforma completa para artistas compartilharem seus trabalhos e construírem portfólio digital. GraphQL API com Apollo Server para consultas eficientes. Upload otimizado de imagens com compressão e lazy loading. Sistema de feed algorítmico com relevância baseada em engajamento. Comentários, curtidas e compartilhamentos em tempo real. Sistema de follows para construir rede de contatos. Marketplace para venda de obras de arte originais e prints. Sistema de comissões e pedidos personalizados. Chat privado entre artistas e compradores. Eventos online (workshops, lives, exposições virtuais). Sistema de assinatura para conteúdo exclusivo. Desafios semanais com premiação. Galerias temáticas e curadoria manual. Integração com blockchain para autenticidade de obras. Sistema de reputação e verificação de artistas. Exportação de portfólio em PDF.",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800",
    ],
    github: "https://github.com/marinasilva/artists-social-network",
    demo: "https://artists-network.vercel.app",
  },
  {
    title: "Sistema de Reservas para Restaurantes",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS", "Jest"],
    description:
      "Sistema completo de reservas para restaurantes com gerenciamento de mesas, cardápio digital e feedback.",
    details:
      "Aplicação web e mobile para gestão de reservas em restaurantes. Sistema de busca e reserva de mesas em tempo real. Mapa interativo do restaurante com visualização de mesas disponíveis. Cardápio digital com fotos, descrições e alergênicos. Sistema de pedidos integrado com a cozinha via WebSocket. Gestão de fila de espera com notificações SMS. Sistema de avaliações e feedback pós-experiência. Programa de fidelidade e pontos por reserva. Dashboard do gerente com métricas de ocupação. Relatórios de faturamento e horários de pico. Integração com iFood e Uber Eats. Sistema de comandas digitais para garçons. Gestão de eventos e festas privadas. Integração com Google Maps e Waze. Sistema de newsletters e ofertas personalizadas. Acessibilidade para pessoas com deficiência (WCAG 2.1).",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    ],
    github: "https://github.com/marinasilva/restaurant-booking",
    demo: "https://restaurant-booking-demo.herokuapp.com",
  },
  {
    title: "App de Saúde e Bem-estar",
    stack: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS", "TensorFlow"],
    description:
      "Aplicativo mobile para monitoramento de saúde, atividades físicas, meditação e acompanhamento médico.",
    details:
      "App completo para gestão de saúde pessoal com interface amigável e gamificação. Rastreamento de atividades físicas (passos, calorias, distância). Monitoramento de sono com análise de qualidade. Registro de alimentação com scanner de código de barras. Integração com Apple HealthKit e Google Fit. Sistema de meditação guiada com áudio e vídeo. Acompanhamento de medicamentos com lembretes personalizados. Integração com dispositivos wearables (Apple Watch, Garmin, Fitbit). IA com TensorFlow para análise de padrões de saúde. Consultas por vídeo com profissionais de saúde. Histórico médico centralizado com criptografia. Gráficos de progresso e tendências de saúde. Desafios semanais e sistema de recompensas. Modo escuro e tema personalizável. Exportação de dados em JSON/CSV. Integração com laboratórios para resultados de exames.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    ],
    github: "https://github.com/marinasilva/health-wellness-app",
    demo: "",
  },
  {
    title: "Plataforma de Freelas e Serviços",
    stack: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "Stripe", "ElasticSearch"],
    description:
      "Marketplace conectando freelancers a clientes com sistema de propostas, contratos e pagamentos seguros.",
    details:
      "Plataforma completa para gestão de trabalhos freelancer com foco em segurança e transparência. Sistema de busca avançada com ElasticSearch e filtros inteligentes. Perfis detalhados com portfólio, avaliações e histórico. Sistema de propostas em tempo real com chat integrado. Contratos digitais com assinatura eletrônica. Escrow de pagamentos com Stripe Connect. Sistema de milestones e entregas parciais. Disputas e mediação de conflitos. Verificação de identidade e antecedentes. Sistema de avaliações com reputação baseada em blockchain. Integração com GitHub e Behance para portfólio. API pública para desenvolvedores terceiros. Dashboard de analytics com métricas de performance. Sistema de recomendações baseado em habilidades. Programa de afiliados e indicação. Blog com dicas para freelancers. Fórum da comunidade com categorias.",
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    ],
    github: "https://github.com/marinasilva/freelance-platform",
    demo: "https://freelance-platform.vercel.app",
  },
]

// Componente de imagem com fallback
function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false)
  
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-secondary/20 ${className}`}>
        <svg className="h-8 w-8 text-muted-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
        </svg>
      </div>
    )
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Salvar elemento focado antes de abrir
  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement
    modalRef.current?.focus()
    
    return () => {
      previousFocusRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do projeto ${project.title}`}
    >
      <div
        ref={modalRef}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-border bg-card p-6 md:p-8 lg:p-10 outline-none"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fade-up 0.4s ease forwards" }}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Fechar modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="mb-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
          Detalhes do Projeto
        </p>
        <h3 className="mb-4 text-2xl font-bold text-foreground">{project.title}</h3>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Images */}
        {project.images.length > 0 && (
          <div className="mb-6">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Screenshots
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="group overflow-hidden border border-border bg-secondary/10"
                >
                  <ProjectImage
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-40 w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No images placeholder */}
        {project.images.length === 0 && (
          <div className="mb-6 flex items-center justify-center border border-dashed border-border py-8 transition-all hover:border-primary/50">
            <div className="text-center">
              <svg className="mx-auto mb-2 h-8 w-8 text-muted-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              <p className="font-mono text-xs text-muted-foreground/40">Sem imagens ainda</p>
            </div>
          </div>
        )}

        <p className="mb-6 text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="border-t border-border pt-6">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Detalhes Técnicos
          </p>
          <p className="text-sm text-muted-foreground text-justify leading-relaxed">{project.details}</p>
        </div>

        {/* Links Section */}
        {(project.github || project.demo) && (
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 border-t border-border pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs text-foreground transition-all duration-300 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <svg className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-mono text-xs text-primary-foreground transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <span>Live Demo</span>
                <svg className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Estilos para animações
const styles = `
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.scroll-indicator {
  animation: fade-in 0.3s ease forwards;
}
`

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

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

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
      return () => {
        container.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [checkScroll])

  // Drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 640 ? 280 : 320
      const gap = 24
      const scrollAmount = cardWidth + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <style>{styles}</style>
      <section
        ref={sectionRef}
        id="projetos"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
      >
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 mb-4">
          <Layers className="h-3 w-3 text-primary" />
          <span className="font-mono text-xs text-primary uppercase">02 / PROJETOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Alguns dos meus projetos mais recentes 
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
            Estes são alguns dos projetos em que trabalhei recentemente. </p>
              </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons - Mobile hide, show on hover */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-2 sm:-ml-4 hidden sm:flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Scroll left"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-2 sm:-mr-4 hidden sm:flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-110 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Scroll right"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Scroll Indicator (optional) */}
          {canScrollRight && visible && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 sm:hidden flex items-center gap-1 text-xs text-muted-foreground scroll-indicator">
              <span>Arraste para ver mais</span>
              <svg className="h-3 w-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-8 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className={`group relative flex-shrink-0 w-[280px] sm:w-80 overflow-hidden border border-border transition-all duration-700 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
                aria-label={`Ver detalhes do projeto ${project.title}`}
              >
                <div className="bg-card p-5 sm:p-6 min-h-[280px] flex flex-col">
                  <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-muted-foreground text-justify leading-relaxed line-clamp-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground font-mono transition-colors group-hover:bg-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground font-mono transition-colors group-hover:bg-secondary">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Hover Action */}
                  <div className="flex items-center gap-2 text-primary text-sm font-mono group-hover:translate-x-1 transition-transform duration-300 mt-auto">
                    <span>Ver Detalhes</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}