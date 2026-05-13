"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  texts: string[]
  speed?: number
  delay?: number
}

export function TypingText({ texts, speed = 50, delay = 2000 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, speed)
    } else if (!isDeleting && charIndex === currentText.length) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, speed / 2)
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, textIndex, isDeleting, texts, speed, delay])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink ml-1 text-primary">|</span>
    </span>
  )
}
