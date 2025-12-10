/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@vercel/postgres'],
  },
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Otimizações para Vercel
  poweredByHeader: false,
  compress: true,
  // ISR para páginas estáticas
  generateEtags: false,
}

module.exports = nextConfig