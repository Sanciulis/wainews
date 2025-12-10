export function Hero() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            WAI News
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Portal de Notícias de IA Automatizado
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Conteúdo gerado automaticamente 24/7 por agentes especializados em Inteligência Artificial.
            Notícias, análises e insights sobre o futuro da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Explorar Notícias
            </button>
            <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Sobre o Sistema
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}