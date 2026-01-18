import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

import {
  getAllInsights,
  getInsightBySlug,
  type Insight,
} from "@/lib/insights";

/**
 * Generate static paths
 */
export async function generateStaticParams() {
  const insights = getAllInsights();

  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params promise
  const { slug } = await params;

  const post: Insight | null = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
      {/* Back */}
      <div className="py-6">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 rounded border border-neutral-300 px-3 py-1.5 text-xs uppercase tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to Insights
        </Link>
      </div>

      {/* Header */}
      <header className="text-center space-y-6 pb-8 max-w-4xl mx-auto">
        <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900">
          {post.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          {post.excerpt}
        </p>
      </header>

      {/* Hero Image */}
      <div className="mb-12 overflow-hidden rounded-lg">
        <img
          src={
            post.image ||
            "/placeholder.svg?height=600&width=1200&query=insight cover image"
          }
          alt={post.title}
          className="aspect-[2/1] w-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {/* Content */}
        <article
          className="lg:col-span-3 prose prose-neutral max-w-none
          prose-headings:font-semibold
          prose-headings:text-neutral-900
          prose-p:text-neutral-700
          prose-a:text-emerald-600
          hover:prose-a:text-emerald-700
          prose-strong:text-neutral-900"
        >
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="mt-8 mb-4 text-2xl font-semibold">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="mt-6 mb-3 text-xl font-semibold">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }

            if (!paragraph.trim()) return null;

            return (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Metadata */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                Published
              </h3>
              <p className="text-sm font-medium text-neutral-900">
                {publishedDate.toUpperCase()}
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                Topics
              </h3>
              <div className="flex flex-wrap gap-1">
                {post.categories.map((category, index) => (
                  <span key={category} className="text-sm font-medium">
                    {category.toUpperCase()}
                    {index < post.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                Reading Time
              </h3>
              <p className="text-sm font-medium text-neutral-900">
                {post.readTime.toUpperCase()}
              </p>
            </div>
          </div>

          {/* Author */}
          <div className="border-t border-neutral-200 pt-6">
            <h3 className="text-xs uppercase tracking-wide text-neutral-500 mb-4">
              Author
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center">
                <User className="h-6 w-6 text-neutral-500" />
              </div>
              <p className="font-medium text-neutral-900">{post.author}</p>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <div className="border-t border-neutral-200 py-10 mt-16">
        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition-colors"
          >
            Explore More Insights
          </Link>
        </div>
      </div>
    </main>
  );
}
