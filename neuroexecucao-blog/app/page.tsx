import Link from 'next/link'
import { ArrowRight, Brain, Zap, Target, Layers } from 'lucide-react'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import { getAllPosts } from '@/lib/markdown'

const features = [
  {
    icon: Brain,
    title: 'Baseado em Neurociência',
    description: 'Estratégias fundamentadas na ciência de como o cérebro neurodivergente realmente funciona.',
  },
  {
    icon: Zap,
    title: 'Execução Prática',
    description: 'Templates, frameworks e sistemas prontos para implementar imediatamente.',
  },
  {
    icon: Target,
    title: 'Foco no TDAH',
    description: 'Desenvolvido especificamente para as características únicas do TDAH empreendedor.',
  },
  {
    icon: Layers,
    title: 'Arquitetura de Sistemas',
    description: 'Construa sistemas que funcionam mesmo quando a motivação não está presente.',
  },
]

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 6)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

        <div className="container-blog relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full text-sm font-medium text-brand-700 mb-6 animate-fade-in">
              <Brain className="w-4 h-4" />
              <span>Gestão de Projetos Neurocompatível</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight animate-fade-in-up">
              Neurociência aplicada à{' '}
              <span className="text-gradient">execução</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Estratégias baseadas na ciência de Russell Barkley para empreendedores TDAH 
              que querem parar de lutar contra seu cérebro e começar a trabalhar com ele.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2">
              <Link href="/blog" className="btn-primary text-base">
                Explorar Artigos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/sobre" className="btn-secondary text-base">
                Conhecer a Abordagem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-blog">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-600 mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-blog">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                Artigos Recentes
              </h2>
              <p className="text-neutral-600">
                Estratégias e insights para mentes que funcionam diferente.
              </p>
            </div>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors"
            >
              Ver todos os artigos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Articles Grid */}
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {recentPosts.map((post, index) => (
                <ArticleCard
                  key={post.slug}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  slug={post.slug}
                  date={post.frontmatter.date}
                  readTime={post.frontmatter.readTime}
                  category={post.frontmatter.category}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Brain className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                Em breve: novos artigos
              </h3>
              <p className="text-neutral-500 max-w-md mx-auto">
                Estamos preparando conteúdo incrível sobre gestão neurocompatível. 
                Inscreva-se na newsletter para ser notificado!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-blog max-w-3xl">
          <Newsletter />
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Por que "NeuroExecução"?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Porque conhecimento sem execução é apenas entretenimento intelectual. 
              O cérebro TDAH é brilhante em gerar ideias, mas precisa de sistemas 
              neurocompatíveis para transformá-las em resultados consistentes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/sobre"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Conheça a Abordagem
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
