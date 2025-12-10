'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Brain, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { data: session, status } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">WAI News</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Início
          </Link>
          <Link href="/categorias" className="text-sm font-medium hover:text-primary transition-colors">
            Categorias
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {status === 'loading' ? (
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : session ? (
            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
              >
                Sair
              </Button>
            </div>
          ) : (
            <Button
              variant="default"
              size="sm"
              onClick={() => signIn('github')}
            >
              Entrar
            </Button>
          )}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/categorias"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link
              href="/sobre"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}