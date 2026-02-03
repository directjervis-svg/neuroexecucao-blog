import { Metadata } from 'next'
import Link from 'next/link'
import { Brain, Target, Lightbulb, Heart, ArrowRight, BookOpen, Zap } from 'lucide-react'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: 'Sobre | NeuroExecução',
  description: 'Conheça a abordagem NeuroExecução: gestão de projetos neurocompatível baseada na ciência de Russell Barkley para empreendedores TDAH.',
}

const principles = [
  {
    icon: Brain,
    title: 'Neurociência Primeiro',
    description: 'Todas as estratégias são fundamentadas na ciência de como o cérebro TDAH realmente funciona, especialmente os trabalhos de Russell Barkley sobre função executiva.',
  },
  {
    icon: Target,
    title: 'Execução sobre Planejamento',
    description: 'Foco em sistemas que facilitam a ação imediata, reduzindo a distância entre intenção e execução. Menos planos, mais pontos de execução.',
  },
  {
    icon: Lightbulb,
    title: 'Ambiente sobre Motivação',
    description: 'Em vez de depender de motivação interna, criamos ambientes e sistemas que tornam a ação correta a mais fácil de tomar.',
  },
  {
    icon: Heart,
    title: 'Compaixão Radical',
    description: 'Sem culpa, sem vergonha. O TDAH não é uma falha de caráter. Abraçamos nossas diferenças neurológicas e trabalhamos com elas, não contra elas.',
  },
]

const journey = [
  {
    year: '2018',
    title: 'O Diagnóstico',
    description: 'Após anos lutando contra padrões de procrastinação e inconsistência, finalmente recebi o diagnóstico de TDAH aos 30 anos.',
  },
  {
    year: '2019',
    title: 'A Descoberta',
    description: 'Encontrei os trabalhos de Russell Barkley e comecei a entender que o TDAH é fundamentalmente um problema de performance, não de conhecimento.',
  },
  {
    year: '2021',
    title: 'A Metodologia',
    description: 'Comecei a desenvolver e testar sistemas de gestão de projetos especificamente desenhados para o cérebro neurodivergente.',
  },
  {
    year: '2024',
    title: 'NeuroExecução',
    description: 'Nasceu o NeuroExecução: um framework completo para ajudar empreendedores TDAH a transformar ideias em resultados consistentes.',
  },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container-blog">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Sobre o <span className="text-gradient">NeuroExecução</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              NeuroExecução é uma abordagem de gestão de projetos desenvolvida especificamente 
              para o cérebro neurodivergente. Combinamos neurociência, tecnologia e arquitetura 
              de sistemas para criar frameworks que realmente funcionam para mentes que pensam diferente.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/blog" className="btn-primary">
                Explorar Artigos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/recursos" className="btn-secondary">
                <BookOpen className="w-5 h-5" />
                Ver Recursos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-blog">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-4 block">
                Nossa Missão
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Transformar conhecimento em execução consistente
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                O cérebro TDAH é extraordinário em gerar ideias, fazer conexões criativas 
                e resolver problemas complexos. Mas transformar essas ideias em resultados 
                consistentes é onde muitos de nós travamos.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Nossa missão é preencher essa lacuna entre intenção e ação, criando sistemas 
                neurocompatíveis que trabalham a favor do seu cérebro, não contra ele.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 flex items-center justify-center">
                <Brain className="w-48 h-48 text-white/80" />
                <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-[1px]" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-100 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-blog">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-4 block">
              Fundamentos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Os Princípios do NeuroExecução
            </h2>
            <p className="text-neutral-600">
              Quatro pilares que guiam toda nossa abordagem de gestão de projetos neurocompatível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-100 text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <principle.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="container-blog">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4 block">
              A Jornada
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Como Tudo Começou
            </h2>
            <p className="text-neutral-400">
              Do diagnóstico tardio ao desenvolvimento de uma metodologia completa.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 hidden md:block" />

            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={item.year} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-brand-600 text-white font-bold text-sm shrink-0 z-10">
                    {item.year}
                  </div>
                  
                  <div className="flex-1 p-6 rounded-xl bg-neutral-800/50 border border-neutral-700">
                    <span className="text-sm font-semibold text-brand-400 md:hidden mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-neutral-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-blog">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Zap className="w-12 h-12 text-brand-500 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-neutral-600 mb-8">
              Explore nossos artigos ou inscreva-se na newsletter para receber 
              estratégias neurocompatíveis diretamente no seu email.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/blog" className="btn-primary">
                Explorar Artigos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <Newsletter variant="minimal" />
          </div>
        </div>
      </section>
    </div>
  )
}
