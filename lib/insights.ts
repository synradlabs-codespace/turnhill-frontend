import insightsData from "@/data/insights.json";

export type Insight = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categories: string[];
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
};

export function getAllInsights(): Insight[] {
  return insightsData.insights;
}

export function getInsightBySlug(slug: string): Insight | null {
  return insightsData.insights.find(
    (insight) => insight.slug === slug
  ) || null;
}

export function getInsightById(id: string): Insight | null {
  return insightsData.insights.find(
    (insight) => insight.id === id
  ) || null;
}

export function getAllInsightCategories(): string[] {
  const categories = new Set<string>();

  insightsData.insights.forEach((insight) => {
    insight.categories.forEach((category) =>
      categories.add(category)
    );
  });

  return Array.from(categories).sort();
}

export function getInsightsByCategory(category: string): Insight[] {
  return insightsData.insights.filter((insight) =>
    insight.categories.some(
      (cat) => cat.toLowerCase() === category.toLowerCase()
    )
  );
}
