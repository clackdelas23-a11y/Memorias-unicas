import { Scissors } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/bkm-logo.png"
          alt="BKM Logo"
          className="h-full w-full object-cover opacity-15"
        />
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#c9a961"
                strokeWidth="0.2"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 p-3">
            <Scissors className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-balance text-6xl font-bold leading-tight md:text-7xl">
          <span className="text-white">Beldo K</span>
          <br />
          <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
            Muhalaque
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-4 text-xl font-light text-gray-300 md:text-2xl">
          Barbershop Premium
        </p>

        {/* Tagline */}
        <p className="mx-auto mb-12 max-w-2xl text-balance text-lg text-gray-400">
          Mais do que cortes, criamos <span className="font-semibold text-yellow-500">confiança</span> e <span className="font-semibold text-yellow-500">estilo</span>
        </p>

        {/* CTA Button */}
        <a
          href="https://wa.me/258852990478"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-16 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 md:px-10 md:py-5"
        >
          Agende já via WhatsApp
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
          <svg
            className="h-6 w-6 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
