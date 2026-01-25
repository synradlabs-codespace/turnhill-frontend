"use client";

import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/number-ticker";
import { BusinessContactForm } from "@/components/business-contact-form";
import { Button } from "@/components/ui/button";

// Example static testimonials
const testimonials = [
    {
        name: "Rohan Mehta",
        role: "Founder, Chai Churi",
        quote:
            "Turnhill helped us structure our compliance and finance processes from day one. Their guidance made fundraising and scaling much smoother.",
    },
    {
        name: "Priya Sharma",
        role: "CEO, Bun & Caffeine",
        quote:
            "Professional, detail-oriented, and always ahead of the curve. Turnhill's insights are invaluable for our strategic decisions.",
    },
    {
        name: "Amit Verma",
        role: "Managing Director, Velvet Vista",
        quote:
            "Their team helped us navigate complex legal frameworks effortlessly. Highly recommend for any growing business.",
    },
];

export default function TestimonialsPage() {
    return (
        <main className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
            <section className="mx-auto max-w-5xl">
                {/* Header */}
                <header className="mb-12 md:mb-16 text-center">
                    <p className="text-sm text-muted-foreground">Testimonials</p>
                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance mt-2">
                        Hear From Our Clients
                    </h1>
                    <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
                        Turnhill partners with founders and enterprises across sectors. Here's what some of our clients have to say about working with us.
                    </p>
                </header>

                {/* Testimonials grid */}
                <div className="grid gap-8 md:grid-cols-3 mb-16">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="p-6 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="flex flex-col h-full justify-between">
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">“{t.quote}”</p>
                                <div className="mt-4">
                                    <p className="text-sm font-medium">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 text-center">
                    <Card className="rounded-2xl bg-[#6BAE3A]/10">
                        <CardContent>
                            <div className="text-3xl md:text-4xl font-bold text-[#6BAE3A]">
                                <NumberTicker value={200} />+
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Active Clients</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl bg-[#6BAE3A]/10">
                        <CardContent>
                            <div className="text-3xl md:text-4xl font-bold text-[#6BAE3A]">4+</div>
                            <p className="text-sm text-muted-foreground mt-1">Countries</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl bg-[#6BAE3A]/10">
                        <CardContent>
                            <div className="text-3xl md:text-4xl font-bold text-[#6BAE3A]">
                                <NumberTicker value={2000} />+
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Clients Catered</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl bg-[#6BAE3A]/10">
                        <CardContent>
                            <div className="text-3xl md:text-4xl font-bold text-[#6BAE3A]">
                                94%
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Client Retention</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}



{/* Contact form */ }
<div className="grid gap-8 md:gap-10 md:grid-cols-[1.1fr,1fr]">
    {/* Left: context & contact info */}
    <div className="flex flex-col gap-6">
        <div className="rounded-lg border bg-card p-6">
            <h3 className="text-base font-medium mb-2">Prefer email?</h3>
            <p className="text-sm text-muted-foreground">
                Reach us directly at{" "}
                <a className="underline underline-offset-2" href="mailto:relations@turnhill.in">
                    relations@turnhill.in
                </a>{" "}
                and we’ll follow up promptly.
            </p>
            <div className="mt-4">
                <Button asChild variant="outline">
                    <a href="/">Back to home</a>
                </Button>
            </div>
        </div>
    </div>

    {/* Right: form */}
    <BusinessContactForm
        title="Start Your Project Conversation"
        description="Fill out the form below and our Turnhill experts will get in touch to discuss your business needs."
        namePlaceholder="Your full name"
        emailPlaceholder="Your email address"
        companyPlaceholder="Your company or team"
        projectPlaceholder="Briefly describe your project or challenge"
        buttonText="Send Inquiry"
    />
</div>