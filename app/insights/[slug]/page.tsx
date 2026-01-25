// import { notFound } from "next/navigation"
// import Link from "next/link"
// import { ArrowLeft, User } from "lucide-react"
// import { getAllInsights, getInsightBySlug } from "@/lib/insights"

// export async function generateStaticParams() {
//   return getAllInsights().map((i) => ({ slug: i.slug }))
// }

// export default async function InsightPage(props: { params: Promise<{ slug: string }> }) {
//    const { slug } = await props.params
//   const post = await getInsightBySlug(slug)

//   if (!post) notFound()

//   const publishedDate = new Date(post.publishedAt).toLocaleDateString(
//     "en-US",
//     { year: "numeric", month: "long", day: "numeric" }
//   )


//   return (
//     <main className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
//       {/* Back */}
//       <div className="py-6">
//         <Link
//           href="/insights"
//           className="inline-flex items-center gap-2 rounded border border-neutral-300 px-3 py-1.5 text-xs uppercase tracking-wide text-neutral-600 hover:text-neutral-900"
//         >
//           <ArrowLeft className="h-3 w-3" />
//           Back to Insights
//         </Link>
//       </div>

//       {/* Header */}
//       <header className="text-center space-y-6 pb-8 max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
//           {post.title}
//         </h1>
//         <p className="text-lg text-neutral-600">{post.excerpt}</p>
//       </header>

//       {/* Image */}
//       <div className="mb-12 overflow-hidden rounded-lg">
//         <img src={post.image!} alt={post.title} className="w-full object-cover" />
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
//         {/* Content */}
//         <article
//           className="lg:col-span-3 prose prose-neutral max-w-none"
//           dangerouslySetInnerHTML={{ __html: post.content }}
//         />

//         {/* Sidebar */}
//         <aside className="space-y-8">
//           <div>
//             <h3 className="text-xs uppercase text-neutral-500 mb-2">
//               Published
//             </h3>
//             <p className="text-sm font-medium">
//               {publishedDate.toUpperCase()}
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xs uppercase text-neutral-500 mb-2">
//               Topics
//             </h3>
//             {post.categories.map((c, i) => (
//               <span key={c}>{c.toUpperCase()}{i < post.categories.length - 1 ? ", " : ""}</span>
//             ))}
//           </div>

//           <div>
//             <h3 className="text-xs uppercase text-neutral-500 mb-2">
//               Reading Time
//             </h3>
//             <p className="text-sm font-medium">{post.readTime}</p>
//           </div>

//           <div className="border-t pt-6 flex items-center gap-3">
//             <User />
//             <p className="font-medium">{post.author}</p>
//           </div>
//         </aside>
//       </div>
//     </main>
//   )
// }

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, User } from "lucide-react"
import { getAllInsights, getInsightBySlug } from "@/lib/insights"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export async function generateStaticParams() {
  return getAllInsights().map((i) => ({ slug: i.slug }))
}

export default async function InsightPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = await getInsightBySlug(slug)

  if (!post) notFound()

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

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
        <img src={post.image!} alt={post.title} className="w-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {/* Content */}
        <article className="lg:col-span-3 prose prose-neutral max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>

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
              <span key={c}>
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
  )
}
