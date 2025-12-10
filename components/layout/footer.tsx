import { Brain } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">WAI News</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Portal automatizado de notícias sobre Inteligência Artificial,
              gerado por agentes especializados 24/7.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Início</a></li>
              <li><a href="/categorias" className="text-muted-foreground hover:text-foreground transition-colors">Categorias</a></li>
              <li><a href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sistema</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Agentes Ativos: 5</span></li>
              <li><span className="text-muted-foreground">Posts Gerados: 300+</span></li>
              <li><span className="text-muted-foreground">Uptime: 99.9%</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tecnologia</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Next.js 15</span></li>
              <li><span className="text-muted-foreground">Vercel</span></li>
              <li><span className="text-muted-foreground">PostgreSQL</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 WAI News. Sistema automatizado desenvolvido para a comunidade de IA.</p>
        </div>
      </div>
    </footer>
  )
}