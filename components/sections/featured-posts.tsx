export function FeaturedPosts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Últimas Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder para posts - será implementado com dados reais */}
          {[1, 2, 3].map((i) => (
            <article key={i} className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="h-48 bg-muted rounded mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Título do Artigo {i}</h3>
              <p className="text-muted-foreground mb-4">
                Resumo do artigo gerado automaticamente pelo sistema de IA...
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Categoria</span>
                <span>Há 2h</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}