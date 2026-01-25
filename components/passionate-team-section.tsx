"use client";

import { Features } from "./features";

export function PassionateTeamSection() {
    return (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                {/* Heading */}
                <div>
                    <h2 className="text-pretty text-2xl font-semibold tracking-tight">
                        Expertise, Insight, and Strategic Partnership
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        We are a team of experienced advisors, strategists, and analysts
                        committed to helping businesses grow with clarity, discipline, and
                        actionable insights. From structuring and compliance to cross-border
                        advisory and operational excellence, we provide professional guidance
                        every step of the way.
                    </p>
                </div>

                {/* Features */}
                <div className="md:col-span-2">
                    <Features />
                </div>
            </div>
        </section>
    );
}
