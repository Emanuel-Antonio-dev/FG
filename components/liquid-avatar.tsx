"use client"

export function LiquidAvatar() {
  return (
    <div className="relative flex h-80 w-80 items-center justify-center">
      {/* Animated background blur */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {/* Primary gradient circle */}
        <div 
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        {/* Secondary gradient circle */}
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-tl from-primary/20 via-transparent to-transparent blur-3xl"
          style={{ animation: "float 10s ease-in-out infinite 1s" }}
        />
      </div>

      {/* Avatar container with glass morphism */}
      <div className="relative z-10 flex h-72 w-72 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Placeholder avatar - replace with your image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary to-secondary">
          <svg 
            className="h-32 w-32 text-primary/40" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        {/* Optional: Add image if available */}
        <img
          src="/images/avatar.jpg"
          alt="Marina Silva"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />

        {/* Floating border animation */}
        <div 
          className="absolute inset-0 rounded-full border border-transparent pointer-events-none"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(57, 255, 20, 0.1), transparent)",
            animation: "spin 8s linear infinite",
            borderImage: "linear-gradient(45deg, rgba(57, 255, 20, 0.3), transparent) 1"
          }}
        />
      </div>

      {/* Subtle accent dots */}
      <div className="absolute -top-3 -right-3 h-2 w-2 rounded-full bg-primary/50" />
      <div className="absolute -bottom-3 -left-3 h-2 w-2 rounded-full bg-primary/30" />
    </div>
  )
}
