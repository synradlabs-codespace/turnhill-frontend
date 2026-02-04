import { groq } from "next-sanity";

// Get all insights ordered by publication date
export const insightsQuery = groq`
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    categories,
    image,
    author,
    publishedAt,
    readTime
  }
`;

// Get a single insight by slug
export const insightBySlugQuery = groq`
  *[_type == "insight" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    categories,
    image,
    author,
    publishedAt,
    readTime
  }
`;

// Get all insight slugs for static generation
export const insightSlugsQuery = groq`
  *[_type == "insight"] {
    "slug": slug.current
  }
`;

// Get all unique categories from insights
export const categoriesQuery = groq`
  *[_type == "insight"].categories[]
`;

// Get insights by category
export const insightsByCategoryQuery = groq`
  *[_type == "insight" && $category in categories] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    categories,
    image,
    author,
    publishedAt,
    readTime
  }
`;
