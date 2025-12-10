import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WAI News - Portal de Notícias de IA Automatizado',
  description: 'Notícias sobre Inteligência Artificial geradas automaticamente 24/7 por agentes especializados.',
  keywords: 'IA, inteligência artificial, notícias, automação, tecnologia',
  authors: [{ name: 'WAI News' }],
  openGraph: {
    title: 'WAI News - Portal de Notícias de IA Automatizado',
    description: 'Notícias sobre Inteligência Artificial geradas automaticamente 24/7.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAI News - Portal de Notícias de IA Automatizado',
    description: 'Notícias sobre Inteligência Artificial geradas automaticamente 24/7.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}