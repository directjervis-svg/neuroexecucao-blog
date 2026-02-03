import Link from 'next/link'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ArticleCardProps {
  title: string
  description: string
  slug: string
  date: string
  readTime: string
  category: string
  index?: number
}

const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
  'Neurociência': { 
    bg: 'bg-brand-50', 
    text: 'text-brand-700',
    gradient: 'from-brand-400 to-brand-600'
  },
  'TDAH': { 
    bg: 'bg-purple-50', 
    text: 'text-purple-700',
    gradient: 'from-purple-400 to-purple-600'
  },
  'Produtividade': { 
    bg: 'bg-accent-50', 
    text: 'text-accent-700',
    gradient: 'from-accent-400 to-accent-600'
  },
  'Frameworks': { 
    bg: 'bg-emerald-50', 
    text: 'text-emerald-700',
    gradient: 'from-emerald-400 to-emerald-600'
  },
  'default': { 
    bg: 'bg-neutral-50', 
    text: 'text-neutral-700',
    gradient: 'from-neutral-400 to-neutral-600'
  },
}

// Abstract icon patterns for article cards (similar to Anthropic style)
const iconPatterns = [
  // Pattern 1: Concentric circles
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
    <circle cx="50" cy="50" r="28" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>
    <circle cx="50" cy="50" r="16" fill="none" stroke="white" stroke-width="1" opacity="0.5"/>
    <circle cx="50" cy="50" r="6" fill="white" opacity="0.6"/>
  </svg>`,
  // Pattern 2: Radiating lines
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="50" y1="10" x2="50" y2="40" stroke="white" stroke-width="1" opacity="0.4"/>
    <line x1="50" y1="60" x2="50" y2="90" stroke="white" stroke-width="1" opacity="0.4"/>
    <line x1="10" y1="50" x2="40" y2="50" stroke="white" stroke-width="1" opacity="0.4"/>
    <line x1="60" y1="50" x2="90" y2="50" stroke="white" stroke-width="1" opacity="0.4"/>
    <circle cx="50" cy="50" r="12" fill="none" stroke="white" stroke-width="1.5" opacity="0.6"/>
  </svg>`,
  // Pattern 3: Neural network
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="30" r="6" fill="white" opacity="0.5"/>
    <circle cx="30" cy="60" r="6" fill="white" opacity="0.5"/>
    <circle cx="70" cy="60" r="6" fill="white" opacity="0.5"/>
    <circle cx="50" cy="80" r="6" fill="white" opacity="0.5"/>
    <line x1="50" y1="36" x2="30" y2="54" stroke="white" stroke-width="1" opacity="0.3"/>
    <line x1="50" y1="36" x2="70" y2="54" stroke="white" stroke-width="1" opacity="0.3"/>
    <line x1="30" y1="66" x2="50" y2="74" stroke="white" stroke-width="1" opacity="0.3"/>
    <line x1="70" y1="66" x2="50" y2="74" stroke="white" stroke-width="1" opacity="0.3"/>
  </svg>`,
  // Pattern 4: Hexagonal grid
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,20 70,35 70,65 50,80 30,65 30,35" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>
    <polygon points="50,30 62,40 62,60 50,70 38,60 38,40" fill="none" stroke="white" stroke-width="1" opacity="0.5"/>
    <circle cx="50" cy="50" r="8" fill="white" opacity="0.4"/>
  </svg>`,
]

export default function ArticleCard({ 
  title, 
  description, 
  slug, 
  date, 
  readTime, 
  category,
  index = 0 
}: ArticleCardProps) {
  const colors = categoryColors[category] || categoryColors.default
  const pattern = iconPatterns[index % iconPatterns.length]
  
  return (
    <article className="group relative flex flex-col h-full bg-white rounded-xl border border-neutral-100 overflow-hidden card-hover">
      {/* Abstract Icon Header */}
      <Link href={`/blog/${slug}`} className="block">
        <div 
          className={`relative h-40 bg-gradient-to-br ${colors.gradient} overflow-hidden`}
        >
          <div 
            className="absolute inset-0 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: pattern.replace(/100/g, '120') }}
            style={{ transform: 'scale(1.5)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category Badge */}
        <div className="mb-3">
          <span className={`category-badge ${colors.bg} ${colors.text}`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`} className="group/title">
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover/title:text-brand-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-neutral-600 line-clamp-2 mb-4 flex-1">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {format(new Date(date), 'dd MMM yyyy', { locale: ptBR })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>

          <Link 
            href={`/blog/${slug}`}
            className="flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Ler
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
