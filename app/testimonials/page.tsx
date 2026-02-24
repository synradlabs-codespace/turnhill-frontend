"use client";

import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/number-ticker";
import { BusinessContactForm } from "@/components/business-contact-form";
import { Button } from "@/components/ui/button";


const testimonials = [
    {
        name: "Rushil Sehgal",
        role: "Director, Synrad Labs Pvt Ltd",
        quote:
            "We had a great experience working with this consulting service during the early stages of our startup. They guided us through the legal setup with clarity and efficiency, making what could have been a complicated process feel manageable and well-structured. Their team was responsive, knowledgeable, and genuinely invested in helping us build a solid foundation. We highly recommend them to any startup looking for reliable legal consulting support.",
    },
    {
        name: "Yatin Goyal",
        role: "",
        quote:
            "Very good consultant company. They guided me properly regarding banking and business matters. Also helped with my firm’s documents, gave good advice, and prepared everything professionally.",
    },
    {
        name: "Anchal Thakur",
        role: "",
        quote:
            "One of the best consultancy experiences I’ve had. They guided me step by step and ensured smooth completion of work I am happy with their services and would recommend them to others.",
    },
    {
        name: "Chetan Bhardwaj",
        role: "",
        quote:
            "Best consultancy firm I've worked with! 😊 They helped me land my dream job with their expert guidance and support. Highly recommend! 👍",
    },

    {
        name: "Rajni Goyal",
        role: "",
        quote:
            "Excellent business consultancy with clear and practical guidance. They helped us maintain proper books, stock records, and accurate reporting. Professional, reliable, and very helpful for smooth business management.",
    },
    {
        name: "Dhruv Chauhan",
        role: "",
        quote:
            "My experience so far has been excellent. The team has guided me through every step of the company registration process with clarity and professionalism. Everything was handled smoothly, neatly, and without confusion. I truly appreciate how supportive they have been throughout the entire process. Highly recommended, especially for those looking to register a company in Delhi!",
    },
    {
        name: "Manpreet Singh",
        role: "",
        quote:
            "I had a great Experience with them. I truly appreciate their dedication and would higly recommend consultancy to anyone looking for reliable service and good work.",
    },
    {
        name: "Sushmita Bhardwaj",
        role: "",
        quote:
            "Best business experts in town. Starting my business was such an ease with their guidance. Highly recommended",
    },
    {
        name: "Shipu Verma",
        role: "",
        quote:
            "Very cooperative staff, quick response, and proper guidance. Completely satisfied with their work.",
    },
    {
        name: "Harman Sandhu",
        role: "",
        quote:
            "Experts in startup expansion. Truly the best guides in Aerocity, Mohali. Highly recommended for anyone looking to scale their business😇😇",
    },
    {
        name: "Satyarth Sethi",
        role: "",
        quote:
            "Excellent consultancy service! They provided clear guidance and support throughout the entire process. Highly recommended for anyone seeking reliable and professional consulting.",
    },
    {
        name: "Anshul Arora",
        role: "",
        quote:
            "I had a fantastic experience with this consultancy. They were incredibly helpful and guided me through every step of the process with clarity and professionalism. I highly recommend their services to anyone looking for expert advice and support.",
    }
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

                {/* Contact form */}
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
            </section>
        </main>
    );
}



