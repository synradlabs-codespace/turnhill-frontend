"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const values = [
    {
        title: "Accountability",
        desc: "We own our actions and deliver with responsibility.",
    },
    {
        title: "Global Perspective",
        desc: "We apply global thinking to local and international needs.",
    },
    {
        title: "Integrity",
        desc: "We act ethically, transparently, and with unwavering honesty.",
    },
    {
        title: "Client Centric",
        desc: "We deliver tailored solutions built around client goals.",
    },
    {
        title: "Responsibility",
        desc: "We create sustainable value for stakeholders and society.",
    },
]

export default function WhyTurnhillPage() {
    return (
        <main className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
            <section className="mx-auto max-w-6xl space-y-20">

                {/* Header */}
                <header className="mb-12 md:mb-16 text-center">
                    <p className="text-sm text-muted-foreground">Why Turnhill?</p>
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance mt-2">
                        Clarity, Structure, and Accountability at Every Stage
                    </h1>
                    <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
                        We help founders and leadership teams navigate critical decisions with discipline, insight, and institutional-grade execution.
                    </p>
                </header>

                {/* Row 1 — 1:3 wide layout */}
                <div className="grid gap-10 md:grid-cols-4 items-center">
                    <div className="md:col-span-1">
                        <div className="relative overflow-hidden">
                            <Image
                                src="/hill.png"
                                alt="Turnhill Advisory"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-3 space-y-5">
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
                                <Link href="/contact">Get in Touch Now →</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Row 2 — Turn */}
                <div className="grid gap-8 md:grid-cols-3 items-center border-t pt-16">
                    <div className="md:col-span-1">
                        <div className="relative w-40 h-40 overflow-hidden rounded-xl">
                            <Image
                                src="/turn.png"
                                alt="Turn"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#6BAE3A] font-semibold">01</p>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Turn</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                            Navigating critical business decisions with precision and care. Every strategic turn requires thoughtful consideration, expert guidance, and clear vision to ensure you're moving in the right direction.
                        </p>
                    </div>
                </div>

                {/* Row 3 — Hill */}
                <div className="grid gap-8 md:grid-cols-3 items-center border-t pt-16">
                    <div className="md:col-span-1">
                        <div className="relative w-40 h-40 overflow-hidden rounded-xl">
                            <Image
                                src="/hill-orange.png"
                                alt="Hill"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#6BAE3A] font-semibold">02</p>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hill</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                            Building steady, sustainable growth towards long-term success. Like climbing a hill, business excellence requires consistent effort, strategic planning, and unwavering commitment to reaching new heights.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="border-t pt-16">
                    <div className="mb-10">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#6BAE3A] font-semibold mb-2">Our Values</p>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why Choose Us?</h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {values.map((v, i) => (
                            <div key={i} className="flex gap-4 items-start rounded-xl border bg-card p-5">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6BAE3A] text-white text-xs font-semibold">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="font-medium">{v.title}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4">
                        <Button asChild className="bg-[#6BAE3A] hover:bg-black text-white">
                            <Link href="/contact">Get in Touch Now →</Link>
                        </Button>
                    </div>
                </div>

            </section>
        </main>
    )
}