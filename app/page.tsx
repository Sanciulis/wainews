import { Suspense } from 'react'
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { FeaturedPosts } from '@/components/sections/featured-posts'
import { Categories } from '@/components/sections/categories'
import { Newsletter } from '@/components/sections/newsletter'
import { Footer } from '@/components/layout/footer'
import { Loading } from '@/components/ui/loading'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loading />}>
          <FeaturedPosts />
        </Suspense>
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}