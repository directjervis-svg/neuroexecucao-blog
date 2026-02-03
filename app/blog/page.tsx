import { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import { getAllPosts, getAllCategories } from '@/lib/markdown'
import { Brain, Search } from 'lucide-react'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog | Artigos sobre Gestão Neurocompatível',
  description: 'Artigos sobre neurociência, TDAH, produtividade e gestão de projetos para empreendedores neurodivergentes.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container-blog">
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-neutral-600">
            Estratégias baseadas em neurociência, frameworks práticos e insights 
            para mentes que funcionam diferente.
          </p>
        </div>

        {/* Client-side filtering component */}
        <BlogPageClient 
          initialPosts={posts.map(p => ({
            slug: p.slug,
            title: p.frontmatter.title,
            description: p.frontmatter.description,
            date: p.frontmatter.date,
            readTime: p.frontmatter.readTime,
            category: p.frontmatter.category,
          }))} 
          categories={categories} 
        />

        {/* Newsletter CTA */}
        <div className="mt-16 lg:mt-24">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
