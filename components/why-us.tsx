import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export function WhyUs() {
    return (
        <section
            id="whyus"
            className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16"
        >
            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                <SectionHeading
                    eyebrow="Why Turnhill?"
                    title="Clarity, Structure, and Accountability at Every Stage"
                    description="We help founders and leadership teams navigate critical decisions with discipline, insight, and institutional-grade execution."
                    align="left"
                />

                <div className="md:col-span-2">
                    <br />

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Turnhill International LLP partners with entrepreneurs, startups, and
                        growth-stage businesses to simplify complex legal, financial, and
                        strategic challenges. Backed by Chartered Accountants, lawyers, and
                        corporate leaders, we take ownership of compliance, structuring,
                        governance, and execution allowing founders to stay focused on
                        building and scaling their businesses.
                    </p>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        Our approach combines deep domain expertise with hands-on execution.
                        From corporate structuring and regulatory compliance to financial
                        modelling, cross-border advisory, and investor readiness, we bring
                        clarity and discipline to every engagement. With a client retention
                        rate of 94% and experience across multiple industries and
                        geographies, we deliver solutions that are practical, compliant, and
                        built for sustainable growth.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-black bg-[#6BAE3A] text-white"
                            aria-label="Get in touch"
                        >
                            Get in Touch Now
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
