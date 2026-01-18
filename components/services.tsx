"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Start Your Business",
    desc: "Entity formation and structuring for startups and entrepreneurs, from incorporation to regulatory readiness.",
    slug: "start-your-business",
  },
  {
    title: "Protect Your Business",
    desc: "Safeguarding your brand, contracts, and commercial interests through IP, legal, and feasibility advisory.",
    slug: "protect-your-business",
  },
  {
    title: "Manage Your Business",
    desc: "End-to-end compliance, taxation, accounting, and statutory management so operations remain stress-free.",
    slug: "manage-your-business",
  },
  {
    title: "Registrations & Licenses",
    desc: "Business registrations, certifications, and statutory approvals handled accurately and efficiently.",
    slug: "registrations-licenses",
  },
  {
    title: "Financial Management",
    desc: "Structured financial oversight, reporting, tax planning, and audit support for informed decision-making.",
    slug: "financial-management",
  },
  {
    title: "Business Growth Advisory",
    desc: "Strategic structuring, fundraising support, valuation, and Virtual CFO services to enable sustainable growth.",
    slug: "business-growth",
  },
  {
    title: "Franchise Advisory",
    desc: "End-to-end franchise structuring, compliance, IP protection, and investor readiness for scalable expansion.",
    slug: "franchise-advisory",
  },
  {
    title: "International Business",
    desc: "Cross-border incorporation, compliance, accounting, and advisory support for global operations.",
    slug: "international-business",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-pretty text-2xl sm:text-3xl font-semibold tracking-tight">
          Our Services
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Turnhill simplifies complex legal, financial, and strategic challenges
          for startups, SMEs, and growing enterprises. We take ownership of
          structuring, compliance, governance, and execution—so founders can
          focus on building and scaling with confidence.
        </p>
      </div>

      {/* Services List */}
      <ul className="mt-10 divide-y rounded-xl border">
        {services.map((s) => (
          <li key={s.title}>
            <Link
              href={`/services/${s.slug}`}
              className="group grid gap-2 px-4 py-5 sm:px-6 sm:py-6 md:grid-cols-[1fr_auto]"
              aria-label={`${s.title} – view details`}
            >
              <div>
                <h3 className="text-sm font-medium group-hover:underline">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground max-w-2xl leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="flex items-center justify-end">
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border group-hover:bg-muted"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <span className="sr-only">View {s.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
