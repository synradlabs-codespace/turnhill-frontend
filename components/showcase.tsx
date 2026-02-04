"use client";

import Image from "next/image";
import Link from "next/link";

export function Showcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Content */}
        <div>
          <h2 className="text-pretty text-2xl sm:text-3xl font-semibold tracking-tight text-left">
            Strategic Clarity for Confident Decisions
          </h2>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            At Turnhill, we help founders and leadership teams navigate complex
            legal, financial, and strategic decisions with clarity and control.
            Our approach combines institutional-grade advisory with hands-on
            execution ensuring every decision is structured, compliant, and
            aligned with long-term growth.
          </p>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            From business structuring and compliance to cross-border expansion
            and financial management, we act as a trusted partner through every
            critical phase of your journey.
          </p>

          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-black transition bg-[#6BAE3A] text-white"
            >
              Speak to an Advisor <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-72 w-full overflow-hidden rounded-2xl border bg-muted">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661526579038-aea87aecd898?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional advisory workspace representing strategic business decisions"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 560px, 100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
