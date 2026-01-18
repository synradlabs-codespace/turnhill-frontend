import Link from "next/link";

type ServiceDetail = {
  title: string;
  intro: string;
  subcopy?: string;
  process: { title: string; desc: string }[];
  outcomes: string[];
  deliverables: string[];
  engagement: { title: string; desc: string }[];
  timeline: { phase: string; duration: string; desc: string }[];
  faqs: { q: string; a: string }[];
};


const SERVICES: Record<string, ServiceDetail> = {
  "start-your-business": {
    title: "Start Your Business",
    intro:
      "Build your business on a strong legal and financial foundation from day one.",
    subcopy:
      "Turnhill helps entrepreneurs and founders choose the right structure, complete registrations, and set up governance frameworks that enable compliant, scalable, and future ready growth.",
    process: [
      {
        title: "Understand",
        desc: "We assess your business idea, ownership goals, risk appetite, and growth plans.",
      },
      {
        title: "Structure",
        desc: "Selection of optimal entity type with capital, tax, and governance planning.",
      },
      {
        title: "Register",
        desc: "End-to-end incorporation, statutory registrations, and documentation.",
      },
      {
        title: "Enable",
        desc: "Post incorporation setup including compliance calendars and advisory guidance.",
      },
    ],
    outcomes: [
      "Correct entity structure aligned with long-term goals",
      "Regulatory compliant business setup",
      "Clear ownership, governance, and accountability",
      "Reduced legal and tax risk from inception",
    ],
    deliverables: [
      "Company incorporation / registration certificates",
      "Foundational legal and statutory documents",
      "Compliance roadmap and advisory notes",
      "Post setup guidance and support",
    ],
    engagement: [
      {
        title: "Incorporation Package",
        desc: "Fixed scope setup with all mandatory registrations.",
      },
      {
        title: "Founders Advisory",
        desc: "Ongoing guidance during early operational stages.",
      },
    ],
    timeline: [
      {
        phase: "Discovery & Structuring",
        duration: "3–5 days",
        desc: "Entity selection and planning.",
      },
      {
        phase: "Registration & Filings",
        duration: "7–15 days",
        desc: "Government approvals and documentation.",
      },
    ],
    faqs: [
      {
        q: "Which entity is best for my business?",
        a: "We evaluate ownership, funding plans, and compliance burden before recommending.",
      },
      {
        q: "Can you handle everything end-to-end?",
        a: "Yes. We manage documentation, filings, and follow-ups.",
      },
    ],
  },

  "protect-your-business": {
    title: "Protect Your Business",
    intro:
      "Safeguard your brand, contracts, and commercial interests with proactive legal and risk advisory.",
    subcopy:
      "Turnhill helps businesses protect what they build intellectual property, contractual rights, and commercial viability through structured legal frameworks and practical risk mitigation.",
    process: [
      {
        title: "Assess",
        desc: "Review of brand assets, contracts, and potential legal exposures.",
      },
      {
        title: "Secure",
        desc: "Trademark filings, agreements drafting, and IP protection measures.",
      },
      {
        title: "Validate",
        desc: "Name availability checks, feasibility assessments, and risk evaluation.",
      },
      {
        title: "Defend",
        desc: "Ongoing advisory for objections, renewals, and enforcement.",
      },
    ],
    outcomes: [
      "Protected brand identity and intellectual property",
      "Reduced contractual and commercial risk",
      "Stronger legal positioning with stakeholders",
      "Improved long-term business credibility",
    ],
    deliverables: [
      "Trademark filings and certificates",
      "Contracts and legal documentation",
      "Feasibility and risk advisory notes",
      "IP protection roadmap",
    ],
    engagement: [
      {
        title: "IP Protection Package",
        desc: "Trademark registration, renewals, and objections handling.",
      },
      {
        title: "Legal Advisory Retainer",
        desc: "Ongoing contracts and risk advisory support.",
      },
    ],
    timeline: [
      {
        phase: "Assessment & Filing",
        duration: "5–10 days",
        desc: "Trademark search, documentation, and filing.",
      },
      {
        phase: "Follow-ups & Advisory",
        duration: "Ongoing",
        desc: "Replies, renewals, and enforcement support.",
      },
    ],
    faqs: [
      {
        q: "Do I need a trademark if I’m just starting?",
        a: "Early registration prevents disputes and protects future brand value.",
      },
      {
        q: "Can you draft custom contracts?",
        a: "Yes. All agreements are tailored to your business model and risk profile.",
      },
    ],
  },


  "manage-your-business": {
    title: "Manage Your Business",
    intro:
      "Compliance, accounting, and governance handled professionally and proactively.",
    subcopy:
      "Turnhill ensures your business remains compliant, transparent, and well-governed while you focus on operations and growth.",
    process: [
      {
        title: "Assess",
        desc: "Review current compliance status and financial systems.",
      },
      {
        title: "Organize",
        desc: "Set up structured accounting, filings, and reporting mechanisms.",
      },
      {
        title: "Execute",
        desc: "Ongoing statutory, tax, and regulatory compliance.",
      },
      {
        title: "Monitor",
        desc: "Periodic reviews, risk checks, and advisory updates.",
      },
    ],
    outcomes: [
      "Zero missed statutory deadlines",
      "Clean financial records and audit readiness",
      "Reduced regulatory and penalty risk",
      "Management clarity through accurate reporting",
    ],
    deliverables: [
      "ROC, GST, TDS, and income-tax filings",
      "Books of accounts and financial statements",
      "Compliance trackers and advisory notes",
    ],
    engagement: [
      {
        title: "Compliance Retainer",
        desc: "Monthly or annual managed compliance support.",
      },
      {
        title: "Accounting Supervision",
        desc: "Oversight of internal or external accounting teams.",
      },
    ],
    timeline: [
      {
        phase: "Onboarding",
        duration: "1–2 weeks",
        desc: "Data collection and system alignment.",
      },
      {
        phase: "Ongoing",
        duration: "Monthly / Quarterly",
        desc: "Continuous execution and reporting.",
      },
    ],
    faqs: [
      {
        q: "Do you take responsibility for deadlines?",
        a: "Yes. Accountability and tracking are core to our service.",
      },
      {
        q: "Can you work with our internal team?",
        a: "Absolutely. We collaborate or fully manage based on need.",
      },
    ],
  },
  "registrations-licenses": {
    title: "Registrations & Licenses",
    intro:
      "Obtain mandatory registrations and licenses accurately, efficiently, and without delays.",
    subcopy:
      "Turnhill manages statutory registrations and certifications required at different stages of your business lifecycle ensuring eligibility, compliance, and operational readiness.",
    process: [
      {
        title: "Identify",
        desc: "Determine applicable registrations based on business activity.",
      },
      {
        title: "Prepare",
        desc: "Documentation collation and application preparation.",
      },
      {
        title: "Submit",
        desc: "Filing with authorities and follow-ups.",
      },
      {
        title: "Confirm",
        desc: "Receipt of certificates and advisory on usage.",
      },
    ],
    outcomes: [
      "Faster approvals and registrations",
      "Reduced application errors",
      "Regulatory-compliant operations",
      "Clear eligibility positioning",
    ],
    deliverables: [
      "GST, Udyam, DPIIT, FSSAI certificates",
      "IEC, TAN, ISO documentation",
      "Application acknowledgements",
      "Advisory notes",
    ],
    engagement: [
      {
        title: "Single Registration",
        desc: "One time application and approval support.",
      },
      {
        title: "Registration Bundle",
        desc: "Multiple registrations handled together.",
      },
    ],
    timeline: [
      {
        phase: "Documentation & Filing",
        duration: "2–7 days",
        desc: "Application submission.",
      },
      {
        phase: "Approval",
        duration: "7–20 days",
        desc: "Authority processing timelines.",
      },
    ],
    faqs: [
      {
        q: "Can you handle multiple registrations together?",
        a: "Yes. We bundle registrations to save time and cost.",
      },
      {
        q: "Do you assist with post-registration compliance?",
        a: "Yes. We guide usage and ongoing obligations.",
      },
    ],
  },

  "financial-management": {
    title: "Financial Management",
    intro:
      "Gain financial clarity, control, and confidence through disciplined financial oversight.",
    subcopy:
      "Turnhill provides structured financial management that enables informed decision making, sustainable cash flows, and long term value creation.",
    process: [
      {
        title: "Record",
        desc: "Accurate bookkeeping and accounting supervision.",
      },
      {
        title: "Analyze",
        desc: "Dashboards, cash flow, and working capital analysis.",
      },
      {
        title: "Optimize",
        desc: "Cost control, tax planning, and efficiency advisory.",
      },
      {
        title: "Support",
        desc: "Audit coordination and regulatory liaison.",
      },
    ],
    outcomes: [
      "Clear financial visibility",
      "Improved cash flow discipline",
      "Optimized tax positions",
      "Audit ready financials",
    ],
    deliverables: [
      "Books of accounts",
      "Financial dashboards and reports",
      "Tax planning notes",
      "Audit support documentation",
    ],
    engagement: [
      {
        title: "Monthly Finance Support",
        desc: "Ongoing accounting and reporting.",
      },
      {
        title: "Advisory Engagement",
        desc: "Targeted financial analysis and planning.",
      },
    ],
    timeline: [
      {
        phase: "Setup",
        duration: "5–7 days",
        desc: "Accounting framework and controls.",
      },
      {
        phase: "Ongoing",
        duration: "Monthly",
        desc: "Reporting and advisory.",
      },
    ],
    faqs: [
      {
        q: "Do you work with existing accountants?",
        a: "Yes. We complement internal or external teams.",
      },
      {
        q: "Can you provide management dashboards?",
        a: "Yes. Customized dashboards for leadership.",
      },
    ],
  },


  "business-growth": {
    title: "Business Growth Advisory",
    intro:
      "Strategic clarity, financial discipline, and execution support for sustainable growth.",
    subcopy:
      "We help businesses scale responsibly through structuring, fundraising support, financial modelling, and Virtual CFO services.",
    process: [
      {
        title: "Diagnose",
        desc: "Assess financial health, structure, and growth readiness.",
      },
      {
        title: "Plan",
        desc: "Design growth, funding, and governance strategies.",
      },
      {
        title: "Execute",
        desc: "Hands-on implementation and investor readiness.",
      },
      {
        title: "Sustain",
        desc: "Ongoing advisory and performance monitoring.",
      },
    ],
    outcomes: [
      "Improved capital efficiency",
      "Investor ready financials and structures",
      "Clear growth and expansion roadmap",
      "Founder confidence in decision-making",
    ],
    deliverables: [
      "Financial models and projections",
      "Valuation and due diligence support",
      "Investor decks and advisory notes",
    ],
    engagement: [
      {
        title: "Project Advisory",
        desc: "Fundraise, valuation, or restructuring engagements.",
      },
      {
        title: "Virtual CFO",
        desc: "Ongoing strategic financial leadership.",
      },
    ],
    timeline: [
      {
        phase: "Assessment",
        duration: "2–3 weeks",
        desc: "Diagnostics and planning.",
      },
      {
        phase: "Execution",
        duration: "Ongoing",
        desc: "Support through growth phases.",
      },
    ],
    faqs: [
      {
        q: "Do you work with early stage startups?",
        a: "Yes. We support from idea stage to expansion.",
      },
      {
        q: "Are you involved in investor discussions?",
        a: "We support preparation, documentation, and advisory.",
      },
    ],
  },
  "franchise-advisory": {
    title: "Franchise Advisory",
    intro:
      "Build scalable, compliant, and investor ready franchise models.",
    subcopy:
      "Turnhill enables businesses to expand through structured franchise frameworks, legal protection, tax efficiency, and investor alignment.",
    process: [
      {
        title: "Design",
        desc: "Franchise model structuring and documentation.",
      },
      {
        title: "Protect",
        desc: "IP protection and legal agreements.",
      },
      {
        title: "Align",
        desc: "Tax structuring and investor frameworks.",
      },
      {
        title: "Scale",
        desc: "Master franchising and expansion advisory.",
      },
    ],
    outcomes: [
      "Scalable franchise structure",
      "Protected IP and brand consistency",
      "Investor confidence",
      "Compliant expansion",
    ],
    deliverables: [
      "Franchise agreements",
      "Tax and compliance frameworks",
      "IP protection documentation",
      "Investor advisory support",
    ],
    engagement: [
      {
        title: "Franchise Setup",
        desc: "End-to-end franchise modelling and launch.",
      },
      {
        title: "Ongoing Advisory",
        desc: "Support during expansion.",
      },
    ],
    timeline: [
      {
        phase: "Structuring",
        duration: "3–6 weeks",
        desc: "Model and documentation.",
      },
      {
        phase: "Launch & Scale",
        duration: "Ongoing",
        desc: "Expansion support.",
      },
    ],
    faqs: [
      {
        q: "Can any business franchise?",
        a: "We assess scalability and standardization first.",
      },
      {
        q: "Do you support master franchising?",
        a: "Yes. Including legal and tax structuring.",
      },
    ],
  },
  "international-business": {
    title: "International Business",
    intro:
      "Expand globally with clarity, compliance, and local expertise.",
    subcopy:
      "Turnhill supports cross-border incorporation, accounting, compliance, and tax advisory simplifying international operations and reducing risk.",
    process: [
      {
        title: "Plan",
        desc: "Market entry and structuring strategy.",
      },
      {
        title: "Incorporate",
        desc: "Overseas entity setup and registrations.",
      },
      {
        title: "Operate",
        desc: "Accounting, compliance, and filings.",
      },
      {
        title: "Optimize",
        desc: "Tax and operational advisory.",
      },
    ],
    outcomes: [
      "Compliant global presence",
      "Reduced cross-border risk",
      "Operational clarity",
      "Sustainable international growth",
    ],
    deliverables: [
      "Incorporation documents",
      "Accounting and compliance reports",
      "Tax advisory notes",
      "Ongoing management support",
    ],
    engagement: [
      {
        title: "Market Entry Package",
        desc: "Incorporation and initial compliance.",
      },
      {
        title: "Ongoing International Support",
        desc: "Continuous advisory and management.",
      },
    ],
    timeline: [
      {
        phase: "Setup",
        duration: "2–6 weeks",
        desc: "Incorporation and registrations.",
      },
      {
        phase: "Operations",
        duration: "Ongoing",
        desc: "Accounting and compliance.",
      },
    ],
    faqs: [
      {
        q: "Do you support multiple countries?",
        a: "Yes. Based on jurisdiction and requirements.",
      },
      {
        q: "Can you manage ongoing compliance?",
        a: "Yes. We act as long-term advisors.",
      },
    ],
  },


};



export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const key = params.slug;
  const service = SERVICES[key];

  if (!service) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Service Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          The service you’re looking for doesn’t exist. Explore our full list of
          offerings.
        </p>
        <div className="mt-6">
          <Link className="underline hover:no-underline" href="/#services">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      {/* Header */}
      <header className="border-b pb-8 md:pb-10">
        <p className="text-sm tracking-wide text-muted-foreground uppercase">
          Service
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground">
          {service.intro}
        </p>
        {service.subcopy ? (
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            {service.subcopy}
          </p>
        ) : null}
      </header>

      {/* Process */}
      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">Our Process</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-2">
          {service.process.map((step, i) => (
            <li key={i} className="rounded-xl border bg-card p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-[#70AD47] text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Results */}
      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">
          How We Deliver Results
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {service.outcomes.map((o, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg border bg-card p-4"
            >
              <span
                className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#70AD47]"
                aria-hidden="true"
              />
              <span className="text-sm text-muted-foreground">{o}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-[#70AD47] px-5 text-white hover:bg-black"
          >
            Get a Proposal
          </Link>
          <Link
            href="/#services"
            className="inline-flex h-10 items-center rounded-full border px-5 hover:bg-muted"
          >
            Back to Services
          </Link>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">
          What You’ll Receive
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {service.deliverables.map((d, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg border bg-card p-4"
            >
              <span
                className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#70AD47]"
                aria-hidden="true"
              />
              <span className="text-sm text-muted-foreground">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">Ways to Engage</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {service.engagement.map((e, i) => (
            <div key={i} className="rounded-xl border bg-card p-5">
              <h3 className="font-medium">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">Typical Timeline</h2>
        <ol className="mt-6 space-y-3">
          {service.timeline.map((t, i) => (
            <li key={i} className="rounded-lg border bg-card p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-[#70AD47]text-sm font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="font-medium">{t.phase}</h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t.duration}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </li>
          ))}
        </ol>
      </section>


      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">FAQs</h2>
        <div className="mt-6 space-y-3">
          {service.faqs.map((f, i) => (
            <details key={i} className="group rounded-lg border bg-card p-4">
              <summary className="cursor-pointer list-none font-medium">
                <span className="mr-2 text-[#70AD47]">Q{i + 1}.</span> {f.q}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-[#70AD47] px-5 text-white hover:bg-black"
          >
            Get a Proposal
          </Link>
          <Link
            href="/#services"
            className="inline-flex h-10 items-center rounded-full border px-5 hover:bg-muted"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
