import Link from "next/link";

const items = [
  {
    slug: "innovative-technology-solutions",
    title: "Innovative Technology Solutions",
    blurb:
      "Modernize, secure, automate, and unlock AI to turn tech into a growth engine.",
  },
  {
    slug: "aerospace-defense-solutions",
    title: "Aerospace & Defense Solutions",
    blurb:
      "Satellites, UAVs, and aerial defense engineered for mission‑critical reliability.",
  },
  {
    slug: "renewable-energy-systems",
    title: "Renewable Energy Systems",
    blurb:
      "Solar, wind, and storage with smart energy management that maximizes ROI.",
  },
  {
    slug: "product-design-development",
    title: "Product Design & Development",
    blurb: "End‑to‑end design and engineering to ship market‑winning products.",
  },
];

export default function ServicesIndex() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <header className="border-b pb-8 md:pb-10">
        <p className="text-sm tracking-wide text-muted-foreground uppercase">
          Services
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
          Tailored Solutions
        </h1>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground">
          Explore our core offerings. Each service is delivered through a
          repeatable, quality‑focused process.
        </p>
      </header>

      <section className="grid gap-6 py-8 md:grid-cols-2 md:py-12">
        {items.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-xl border bg-card p-6 hover:bg-muted"
          >
            <h3 className="text-lg font-medium group-hover:underline">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            <div className="mt-4 text-sm font-medium text-emerald-700">
              Learn more →
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
