'use client'

import { useState } from 'react'
import { Menu, X, Scissors } from 'lucide-react'

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'História', href: '#historia' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-600/20 bg-black/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 p-2">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-white">Beldo K</h1>
              <p className="text-xs text-yellow-500">Muhalaque</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="relative text-gray-300 transition-colors hover:text-yellow-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-yellow-600 after:to-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 px-6 py-2 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
            Agende já
            <svg
              className="h-4 w-4"
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
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-yellow-500 hover:text-yellow-400"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-yellow-600/20 bg-black/50 py-4 backdrop-blur-md">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-gray-300 transition-colors hover:bg-yellow-600/10 hover:text-yellow-500"
                >
                  {item.label}
                </a>
              ))}
              <button className="mx-4 w-[calc(100%-2rem)] rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 py-2 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                Agende já
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
