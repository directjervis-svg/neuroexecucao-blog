'use client'

interface ArticleContentProps {
  content: string
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div 
      className="article-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
