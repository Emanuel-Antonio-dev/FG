"use client"

import { useEffect, useState } from "react"

export function InitialLoading({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 800)
          return 100
        }
        // Velocidade mais lenta e natural
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="w-full max-w-md px-6">
        {/* Nome */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Geovânia Fransisca
          </h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Full Stack Developer
          </p>
        </div>

        {/* Barra de progresso */}
        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono">Carregando...</span>
            <span className="font-mono">{Math.floor(progress)}%</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}