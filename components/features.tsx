"use client";

import { CheckCircle2, Globe, Shield, Target, Clock, Repeat } from "lucide-react";

const items = [
  {
    icon: Globe,
    title: "Industries We Serve",
    desc: "Start-ups, E-Commerce, Finance, Professional Services, Manufacturing, Retail, Real Estate, Hospitality & F&B. Wide sector experience ensures we deliver relevant insights for every business.",
  },
  {
    icon: Target,
    title: "Cross-Border & Expansion Advisory",
    desc: "Strategic insight and hands-on support for international expansion. Market entry structuring, regulatory compliance, and financial planning to grow with clarity and confidence.",
  },
  {
    icon: CheckCircle2,
    title: "How We Create Impact",
    desc: "Understand → Structure → Execute → Sustain → Accountability → Continuous Partnership. Our methodology turns strategy into measurable results with ongoing advisory support.",
  },
  {
    icon: Shield,
    title: "Why Choose Us",
    desc: "Accountability, global perspective, integrity, client-centric solutions, and responsibility. We combine expertise with ethical, structured, and sustainable growth.",
  },
  {
    icon: Clock,
    title: "Precision & Timely Execution",
    desc: "Every engagement is delivered with discipline, careful planning, and adherence to milestones. Timely execution ensures strategies translate into real results.",
  },
  {
    icon: Repeat,
    title: "Long-Term Partnership",
    desc: "We provide continuity, institutional knowledge, and strategic counsel to help your business adapt and grow sustainably over time.",
  },
];

export function Features() {
  return (
    <section id="whyus">
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((f) => (
          <div key={f.title} className="rounded-xl border bg-background p-5 flex flex-col items-start text-start">
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-[#70AD47]">
              <f.icon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-medium">{f.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
