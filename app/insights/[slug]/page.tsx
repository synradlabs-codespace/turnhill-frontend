import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";
import {
  getAllSanityInsightSlugs,
  getSanityInsightBySlug,
} from "@/lib/sanity.insights";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getSanityInsightBySlug(params.slug);

  if (!post) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.categories,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image
        ? [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllSanityInsightSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

// Portable Text components for rich content rendering
const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-8 mb-4 text-2xl font-semibold text-neutral-900">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-900">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mt-4 mb-2 text-lg font-semibold text-neutral-900">
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 text-neutral-700 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-neutral-400 pl-4 my-4 italic text-neutral-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode;
      value?: { href?: string };
    }) => (
      <a
        href={value?.href}
        className="text-neutral-900 hover:text-neutral-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-neutral-100 rounded px-1 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline">{children}</span>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 text-neutral-700 space-y-1">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 text-neutral-700 space-y-1">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li>{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li>{children}</li>
    ),
  },
};

export default async function InsightPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getSanityInsightBySlug(params.slug);

  if (!post) notFound();

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
      {/* Back */}
      <div className="py-6">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 rounded border border-neutral-300 px-3 py-1.5 text-xs uppercase tracking-wide text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to Insights
        </Link>
      </div>

      {/* Header */}
      <header className="text-center space-y-6 pb-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{post.title}</h1>
        <p className="text-lg text-neutral-600">{post.excerpt}</p>
      </header>

      {/* Image */}
      <div className="mb-12 overflow-hidden rounded-lg">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {/* Content */}
        <article className="lg:col-span-3 prose prose-neutral max-w-none">
          <PortableText value={post.content} components={portableTextComponents} />
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-neutral-500 mb-2">Published</h3>
            <p className="text-sm font-medium">{publishedDate.toUpperCase()}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase text-neutral-500 mb-2">Topics</h3>
            {post.categories.map((c, i) => (
              <span key={c} className="text-left tracking-tighter">
                {c.toUpperCase()}
                {i < post.categories.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>

          <div>
            <h3 className="text-xs uppercase text-neutral-500 mb-2">Reading Time</h3>
            <p className="text-sm font-medium">{post.readTime}</p>
          </div>

          <div className="border-t pt-6 flex items-center gap-3">
            <User />
            <p className="font-medium">{post.author}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
