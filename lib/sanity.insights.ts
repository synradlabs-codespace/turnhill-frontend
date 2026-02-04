import { client, isSanityConfigured } from "./sanity.client";
import {
  insightsQuery,
  insightBySlugQuery,
  insightSlugsQuery,
  categoriesQuery,
  insightsByCategoryQuery,
} from "./sanity.queries";
import type { PortableTextBlock } from "@portabletext/react";

export type SanityInsight = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: PortableTextBlock[];
  categories: string[];
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
};

export async function getAllSanityInsights(): Promise<SanityInsight[]> {
  if (!isSanityConfigured || !client) {
    console.warn("Sanity is not configured. Returning empty insights.");
    return [];
  }
  return client.fetch(insightsQuery, {}, { next: { revalidate: 60 } });
}

export async function getSanityInsightBySlug(
  slug: string
): Promise<SanityInsight | null> {
  if (!isSanityConfigured || !client) {
    console.warn("Sanity is not configured. Returning null.");
    return null;
  }
  return client.fetch(
    insightBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllSanityInsightSlugs(): Promise<{ slug: string }[]> {
  if (!isSanityConfigured || !client) {
    return [];
  }
  return client.fetch(insightSlugsQuery, {}, { next: { revalidate: 60 } });
}

export async function getAllSanityCategories(): Promise<string[]> {
  if (!isSanityConfigured || !client) {
    return [];
  }
  const categories = await client.fetch<string[]>(
    categoriesQuery,
    {},
    { next: { revalidate: 60 } }
  );
  return Array.from(new Set(categories)).sort();
}

export async function getSanityInsightsByCategory(
  category: string
): Promise<SanityInsight[]> {
  if (!isSanityConfigured || !client) {
    return [];
  }
  return client.fetch(
    insightsByCategoryQuery,
    { category },
    { next: { revalidate: 60 } }
  );
}
