"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { 
  Menu, 
  X, 
  User, 
  FolderGit2, 
  Layers, 
  Brain, 
  Mail, 
  Sun, 
  Moon,
  Code2 
} from "lucide-react"

const navLinks = [
  { label: "Sobre", href: "#sobre", icon: User },
  { label: "Projetos", href: "#projetos", icon: FolderGit2 },
  { label: "Stack", href: "#stack", icon: Layers },
  { label: "Filosofia", href: "#filosofia", icon: Brain },
  { label: "Contato", href: "#contato", icon: Mail },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevenir scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileOpen(false)
    }
  }

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="font-mono text-sm tracking-widest text-primary">{'{Hello World!}'}</span>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="group relative flex items-center gap-2 font-mono text-sm font-semibold tracking-widest text-primary transition-all duration-300 hover:opacity-80"
          >
            <Code2 className="h-4 w-4" />
            <span>{'{Hello World!}'}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 rounded-lg hover:text-foreground hover:bg-transparent"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative h-9 w-9 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center bg-transparent hover:bg-transparent"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 md:hidden bg-transparent hover:bg-transparent"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Sidebar - Simplificado */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-background shadow-xl transition-transform duration-500 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm font-semibold text-primary">{'{Hello World!}'}</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-full p-2 transition-colors hover:bg-secondary/50"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation Links - Simplificado */}
        <nav className="flex flex-col p-6">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group flex items-center gap-4 px-4 py-4 text-foreground transition-all duration-300 hover:bg-transparent hover:pl-6 border-b border-border/50 last:border-0"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-base font-medium">{link.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Footer - Simplificado */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">Disponível</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 transition-colors hover:bg-secondary/50"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}