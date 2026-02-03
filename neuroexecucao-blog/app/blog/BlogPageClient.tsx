'use client'

import { useState, useMemo } from 'react'
import ArticleCard from '@/components/ArticleCard'
import { Brain, Search, Filter, Grid, List, X } from 'lucide-react'

interface PostData {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

interface BlogPageClientProps {
  initialPosts: PostData[]
  categories: string[]
}

export default function BlogPageClient({ initialPosts, categories }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredPosts = useMemo(() => {
    let posts = [...initialPosts]

    // Filter by category
    if (activeCategory !== 'all') {
      posts = posts.filter(post => post.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
      )
    }

    // Sort
    posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })

    return posts
  }, [initialPosts, activeCategory, searchQuery, sortOrder])

  const clearFilters = () => {
    setActiveCategory('all')
    setSearchQuery('')
    setSortOrder('newest')
  }

  const hasActiveFilters = activeCategory !== 'all' || searchQuery.trim() || sortOrder !== 'newest'

  return (
    <>
      {/* Filters Section */}
      <div className="mb-8 space-y-4">
        {/* Search and View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center gap-2">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
              className="px-3 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            >
              <option value="newest">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </select>

            <div className="hidden sm:flex items-center border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 ${
                  viewMode === 'grid'
                    ? 'bg-brand-50 text-brand-600'
                    : 'bg-white text-neutral-500 hover:bg-neutral-50'
                }`}
                aria-label="Visualização em grade"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 ${
                  viewMode === 'list'
                    ? 'bg-brand-50 text-brand-600'
                    : 'bg-white text-neutral-500 hover:bg-neutral-50'
                }`}
                aria-label="Visualização em lista"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-neutral-500 mr-2">
            <Filter className="w-4 h-4 inline mr-1" />
            Filtrar:
          </span>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300'
              }`}
            >
              {category}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-2 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-neutral-500">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
        </p>
      </div>

      {/* Articles Grid/List */}
      {filteredPosts.length > 0 ? (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
              : 'flex flex-col gap-4'
          }
        >
          {filteredPosts.map((post, index) => (
            <ArticleCard
              key={post.slug}
              title={post.title}
              description={post.description}
              slug={post.slug}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Brain className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-neutral-700 mb-2">
            Nenhum artigo encontrado
          </h3>
          <p className="text-neutral-500 max-w-md mx-auto mb-6">
            {searchQuery
              ? `Não encontramos artigos para "${searchQuery}".`
              : 'Não há artigos nesta categoria ainda.'}
          </p>
          <button
            onClick={clearFilters}
            className="btn-secondary"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  )
}
