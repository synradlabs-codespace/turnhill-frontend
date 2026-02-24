"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhyTurnhillPage() {
    return (
        <main className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
            <section className="mx-auto max-w-6xl">

                {/* Header (matching testimonials style) */}
                <header className="mb-12 md:mb-16 text-center">
                    <p className="text-sm text-muted-foreground">Why Turnhill?</p>
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance mt-2">
                        Clarity, Structure, and Accountability at Every Stage
                    </h1>
                    <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
                        We help founders and leadership teams navigate critical decisions with discipline, insight, and institutional-grade execution.
                    </p>
                </header>

                {/* 1:3 Layout */}
                <div className="grid gap-10 md:grid-cols-4 items-center">

                    {/* LEFT — Image (1 column) */}
                    <div className="md:col-span-1">
                        <div className="relative overflow-hidden bg-card items-center">
                            <Image
                                src="/hill.png"
                                alt="Turnhill Advisory"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT — Content (3 columns) */}
                    <div className="md:col-span-3">
                        <div className="space-y-5">

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Turnhill International LLP partners with entrepreneurs, startups, and growth-stage businesses to simplify complex legal, financial, and strategic challenges. Backed by Chartered Accountants, lawyers, and corporate leaders, we take ownership of compliance, structuring, governance, and execution allowing founders to stay focused on building and scaling their businesses.
                            </p>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our approach combines deep domain expertise with hands-on execution. From corporate structuring and regulatory compliance to financial modelling, cross-border advisory, and investor readiness, we bring clarity and discipline to every engagement.
                            </p>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                With a client retention rate of 94% and experience across multiple industries and geographies, we deliver solutions that are practical, compliant, and built for sustainable growth.
                            </p>

                            <div className="pt-4">
                                <Button asChild className="bg-[#6BAE3A] hover:bg-black text-white">
                                    <Link href="/contact">
                                        Get in Touch Now →
                                    </Link>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}