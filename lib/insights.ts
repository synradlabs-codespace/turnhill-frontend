import "server-only"

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type Insight = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  categories: string[]
  image?: string
  author: string
  publishedAt: string
  readTime: string
}

const insightsDir = path.join(process.cwd(), "data/insights")

// Get all insights
export function getAllInsights(): Insight[] {
  const files = fs.readdirSync(insightsDir)

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(insightsDir, file), "utf-8")
    const { data, content } = matter(raw)

    return {
      ...(data as Insight),
      content,
    }
  })
}

// Get a single insight by slug
export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const filePath = path.join(insightsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    ...(data as Insight),
    content,
  }
}
