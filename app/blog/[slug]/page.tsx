import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Share2, ExternalLink } from 'lucide-react'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/markdown'
import ArticleContent from '@/components/ArticleContent'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import ShareButtons from '@/components/ShareButtons'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  const { frontmatter } = post

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.seoKeywords,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: [
        {
          url: frontmatter.ogImage || '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [frontmatter.ogImage || '/images/og-default.jpg'],
    },
  }
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Neurociência': { bg: 'bg-brand-50', text: 'text-brand-700' },
  'TDAH': { bg: 'bg-purple-50', text: 'text-purple-700' },
  'Produtividade': { bg: 'bg-accent-50', text: 'text-accent-700' },
  'Frameworks': { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'default': { bg: 'bg-neutral-50', text: 'text-neutral-700' },
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { frontmatter, content } = post
  const relatedPosts = await getRelatedPosts(params.slug, 3)
  const colors = categoryColors[frontmatter.category] || categoryColors.default

  // Generate share URL
  const shareUrl = `https://neuroexecucao.com/blog/${params.slug}`

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <article className="container-blog max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
          <Link href="/" className="hover:text-brand-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-brand-600 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-neutral-700 truncate max-w-[200px]">
            {frontmatter.title}
          </span>
        </nav>

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-brand-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Voltar para o Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Category */}
          <div className="mb-4">
            <Link
              href={`/blog/categoria/${frontmatter.category.toLowerCase()}`}
              className={`category-badge ${colors.bg} ${colors.text}`}
            >
              {frontmatter.category}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            {frontmatter.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
            {frontmatter.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-neutral-500 pb-8 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <div className="font-medium text-neutral-900">{frontmatter.author}</div>
                <div className="text-xs">Especialista em Gestão Neurocompatível</div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {format(new Date(frontmatter.date), 'dd MMM yyyy', { locale: ptBR })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {frontmatter.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="relative">
          {/* Share buttons - desktop */}
          <aside className="hidden xl:block absolute -left-20 top-0 w-12">
            <div className="sticky top-32">
              <span className="text-xs text-neutral-400 font-medium mb-3 block">Compartilhar</span>
              <ShareButtons url={shareUrl} variant="sidebar" />
            </div>
          </aside>

          <ArticleContent content={content} />
        </div>

        {/* Tags */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h4 className="text-sm font-medium text-neutral-500 mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase()}`}
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-600 text-sm rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Share buttons - mobile */}
        <div className="xl:hidden mt-8 pt-8 border-t border-neutral-200">
          <h4 className="text-sm font-medium text-neutral-500 mb-3">Compartilhar</h4>
          <ShareButtons url={shareUrl} variant="inline" />
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <Newsletter />
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <ArticleCard
                  key={relatedPost.slug}
                  title={relatedPost.frontmatter.title}
                  description={relatedPost.frontmatter.description}
                  slug={relatedPost.slug}
                  date={relatedPost.frontmatter.date}
                  readTime={relatedPost.frontmatter.readTime}
                  category={relatedPost.frontmatter.category}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: frontmatter.title,
            description: frontmatter.description,
            image: frontmatter.ogImage,
            datePublished: frontmatter.date,
            author: {
              '@type': 'Person',
              name: frontmatter.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'NeuroExecução',
              logo: {
                '@type': 'ImageObject',
                url: 'https://neuroexecucao.com/logo.png',
              },
            },
          }),
        }}
      />

      {/* Bottom spacing */}
      <div className="pb-16 lg:pb-24" />
    </div>
  )
}
