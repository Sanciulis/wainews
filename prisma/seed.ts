import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar categorias
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'ia-generativa' },
      update: {},
      create: {
        name: 'IA Generativa',
        slug: 'ia-generativa',
        description: 'Avanços em modelos de IA generativa como GPT, DALL-E, Stable Diffusion',
        color: '#3b82f6',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'big-tech' },
      update: {},
      create: {
        name: 'Big Tech',
        slug: 'big-tech',
        description: 'Notícias sobre Google, Microsoft, Meta, Amazon e outras grandes empresas',
        color: '#8b5cf6',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'automacao' },
      update: {},
      create: {
        name: 'Automação',
        slug: 'automacao',
        description: 'Soluções de automação, RPA e transformação digital',
        color: '#10b981',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'startups' },
      update: {},
      create: {
        name: 'Startups',
        slug: 'startups',
        description: 'Novidades sobre startups de IA e empreendedorismo tecnológico',
        color: '#f59e0b',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'etica-ia' },
      update: {},
      create: {
        name: 'Ética em IA',
        slug: 'etica-ia',
        description: 'Discussões sobre ética, regulamentação e impacto social da IA',
        color: '#ef4444',
      },
    }),
  ])

  console.log('✅ Categorias criadas:', categories.length)

  // Criar usuário admin (opcional)
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@wainews.com' },
    update: {},
    create: {
      email: 'admin@wainews.com',
      name: 'WAI News Admin',
      role: 'admin',
    },
  })

  console.log('✅ Usuário admin criado:', adminUser.email)

  // Criar alguns posts de exemplo
  const samplePosts = [
    {
      title: 'OpenAI Lança GPT-5 com Capacidades Multimodais Avançadas',
      slug: 'openai-lanca-gpt-5-capacidades-multimodais',
      content: 'A OpenAI anunciou hoje o lançamento do GPT-5, seu modelo de linguagem mais avançado até agora...',
      excerpt: 'Novo modelo da OpenAI traz avanços significativos em processamento multimodal.',
      categoryId: categories[0].id,
      authorId: adminUser.id,
      published: true,
      publishedAt: new Date('2024-12-08T10:00:00Z'),
      tags: ['OpenAI', 'GPT-5', 'IA Generativa'],
      seoTitle: 'GPT-5: O Futuro da IA Generativa | WAI News',
      seoDesc: 'Descubra as novas capacidades do GPT-5 da OpenAI e seu impacto na indústria de IA.',
      readTime: 5,
    },
    {
      title: 'Google Investe R$ 2 Bilhões em Centro de Pesquisa de IA no Brasil',
      slug: 'google-investe-2-bilhoes-centro-pesquisa-ia-brasil',
      content: 'O Google anunciou um investimento de R$ 2 bilhões para estabelecer um centro de pesquisa...',
      excerpt: 'Gigante da tecnologia expande suas operações de pesquisa no Brasil.',
      categoryId: categories[1].id,
      authorId: adminUser.id,
      published: true,
      publishedAt: new Date('2024-12-07T15:30:00Z'),
      tags: ['Google', 'Brasil', 'Pesquisa'],
      seoTitle: 'Google Investe em Pesquisa de IA no Brasil | WAI News',
      seoDesc: 'Novo centro de pesquisa da Google no Brasil representa marco importante para a IA nacional.',
      readTime: 4,
    },
  ]

  for (const post of samplePosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }

  console.log('✅ Posts de exemplo criados:', samplePosts.length)

  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })