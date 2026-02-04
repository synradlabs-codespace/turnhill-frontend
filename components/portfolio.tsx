import Image from "next/image";
import Link from "next/link";
import { getAllSanityInsights } from "@/lib/sanity.insights";

export async function Portfolio() {
  const allInsights = await getAllSanityInsights();
  const insights = allInsights.slice(0, 3);

  return (
    <section
      id="insights"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16"
    >
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {/* Left intro */}
        <div className="md:col-span-1">
          <h2 className="text-pretty text-2xl sm:text-3xl font-semibold tracking-tight text-left">
            Insights from Real Business Scenarios
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Our insights are drawn from real advisory engagements across
            startups, SMEs, and growth-stage enterprises. We share practical
            perspectives on structuring, compliance, governance, and financial
            decision making designed for founders and leadership teams.
          </p>

          <div className="mt-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-muted transition"
            >
              View All Insights <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Insight cards */}
        <div className="md:col-span-2 grid gap-6">
          {insights.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No insights available yet. Configure Sanity to add content.
            </p>
          ) : (
            insights.map((item) => (
              <Link
                key={item._id}
                href={`/insights/${item.slug}`}
                className="group grid gap-4 rounded-2xl border p-4 sm:grid-cols-[220px_1fr] hover:bg-muted/30 transition"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-xl bg-muted">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="(min-width: 640px) 220px, 100vw"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-sm font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                  <span className="mt-3 text-xs font-medium text-[#6BAE3A]">
                    Read Insight →
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
