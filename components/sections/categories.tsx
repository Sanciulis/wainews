const categories = [
  { name: 'IA Generativa', slug: 'ia-generativa', color: 'bg-blue-500', count: 45 },
  { name: 'Big Tech', slug: 'big-tech', color: 'bg-purple-500', count: 32 },
  { name: 'Automação', slug: 'automacao', color: 'bg-green-500', count: 28 },
  { name: 'Startups', slug: 'startups', color: 'bg-orange-500', count: 21 },
  { name: 'Ética em IA', slug: 'etica-ia', color: 'bg-red-500', count: 18 },
]

export function Categories() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg mb-4`}></div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} artigos</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}