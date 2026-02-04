import { getAllSanityInsights, type SanityInsight } from "@/lib/sanity.insights";
import Link from "next/link";

// Revalidate every 60 seconds
export const revalidate = 60;

const PER_PAGE = 6;

function getPageParam(
  searchParams: Record<string, string | string[] | undefined>
) {
  const raw =
    typeof searchParams?.page === "string"
      ? searchParams.page
      : Array.isArray(searchParams?.page)
        ? searchParams.page[0]
        : "1";

  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

/* ---------- Insight Card ---------- */
function InsightCard({ insight }: { insight: SanityInsight }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={insight.image || "/placeholder.svg"}
          alt={insight.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="space-y-2 p-4">
        <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
          {insight.categories.join(", ")}
        </div>

        <h3 className="text-balance text-lg font-semibold text-neutral-900 md:text-xl">
          <Link
            href={`/insights/${insight.slug}`}
            className="hover:underline"
          >
            {insight.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}

/* ---------- Pagination ---------- */
function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const prev = page > 1 ? page - 1 : 1;
  const next = page < totalPages ? page + 1 : totalPages;

  return (
    <div className="flex items-center justify-between py-6">
      <Link
        aria-disabled={page === 1}
        href={`/insights?page=${prev}`}
        className="rounded-md border border-neutral-300 px-3 py-1 text-sm text-neutral-800 aria-disabled:pointer-events-none aria-disabled:opacity-50"
      >
        Previous
      </Link>

      <Link
        aria-disabled={page === totalPages}
        href={`/insights?page=${next}`}
        className="rounded-md border border-neutral-300 px-3 py-1 text-sm text-neutral-800 aria-disabled:pointer-events-none aria-disabled:opacity-50"
      >
        Next
      </Link>
    </div>
  );
}

/* ---------- Page ---------- */
export default async function InsightsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const allInsights = await getAllSanityInsights();
  const resolvedParams = await searchParams;
  const page = getPageParam(resolvedParams ?? {});
  const totalPages = Math.max(
    1,
    Math.ceil(allInsights.length / PER_PAGE)
  );

  const start = (page - 1) * PER_PAGE;
  const current = allInsights.slice(start, start + PER_PAGE);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
      {/* Header */}
      <section className="border-b border-neutral-200 py-8 md:py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-5xl">
            <h1 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
              Insights
            </h1>
            <p className="mt-3 text-pretty text-neutral-600">
              Actionable branding, design, and growth strategies from the Turnhill team.
              Learn how to structure, scale, and position your business for success.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-6 md:py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {current.map((insight) => (
            <InsightCard key={insight._id} insight={insight} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} />
      </section>
    </main>
  );
}
