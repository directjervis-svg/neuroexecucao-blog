import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostFrontmatter {
  title: string
  slug: string
  description: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  seoKeywords: string[]
  ogImage: string
  featured?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.md$/, '')
          return getPostBySlug(slug)
        })
    )

    // Filter out null values and sort by date (newest first)
    return allPostsData
      .filter((post): post is Post => post !== null)
      .sort((a, b) => {
        if (a.frontmatter.date < b.frontmatter.date) {
          return 1
        } else {
          return -1
        }
      })
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category.toLowerCase()
  )
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.frontmatter.featured)
}

export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const categories = new Set(allPosts.map((post) => post.frontmatter.category))
  return Array.from(categories).sort()
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<Post[]> {
  const allPosts = await getAllPosts()
  const currentPost = allPosts.find((post) => post.slug === currentSlug)
  
  if (!currentPost) return []

  // Find posts with same category or overlapping tags
  const related = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0
      
      // Same category
      if (post.frontmatter.category === currentPost.frontmatter.category) {
        score += 3
      }
      
      // Overlapping tags
      const currentTags = new Set(currentPost.frontmatter.tags || [])
      const postTags = post.frontmatter.tags || []
      postTags.forEach((tag) => {
        if (currentTags.has(tag)) {
          score += 1
        }
      })

      return { post, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)

  return related
}
