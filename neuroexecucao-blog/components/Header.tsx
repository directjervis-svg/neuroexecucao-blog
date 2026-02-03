'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Brain, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Recursos', href: '/recursos' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-blog" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="NeuroExecução - Página inicial"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 shadow-md shadow-brand-500/20 group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-all duration-300">
              <Brain className="w-5 h-5 text-white" />
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-brand-400 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-neutral-900 tracking-tight leading-none">
                Neuro<span className="text-brand-600">Execução</span>
              </span>
              <span className="text-[10px] font-medium text-neutral-400 tracking-wider uppercase">
                Gestão Neurocompatível
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-neutral-600 rounded-lg transition-colors hover:text-neutral-900 hover:bg-neutral-50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="/newsletter"
              className="px-4 py-2 text-sm font-medium text-neutral-600 rounded-lg transition-colors hover:text-neutral-900 hover:bg-neutral-50"
            >
              Newsletter
            </Link>
            <Link
              href="/contato"
              className="btn-primary text-sm"
            >
              Começar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-neutral-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-neutral-600 rounded-lg transition-colors hover:text-neutral-900 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-neutral-100 space-y-2">
              <Link
                href="/newsletter"
                className="block px-4 py-3 text-base font-medium text-neutral-600 rounded-lg transition-colors hover:text-neutral-900 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Newsletter
              </Link>
              <div className="px-4">
                <Link
                  href="/contato"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Começar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
