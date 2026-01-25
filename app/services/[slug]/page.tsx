import Link from "next/link";

type ServiceDetail = {
  title: string;
  intro: string;
  subcopy?: string;
  offerings: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  engagement: { title: string; desc: string }[];
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

    offerings: [
      { title: "Private Limited Company", desc: "Incorporation and setup of a private limited entity." },
      { title: "One Person Company", desc: "Registration of a single owner corporate structure." },
      { title: "LLP", desc: "Formation of a limited liability partnership." },
      { title: "Partnership", desc: "Drafting and registration of partnership firms." },
      { title: "Public Limited Company", desc: "Incorporation of a public limited business." },
      { title: "NGO / Section 8 Company", desc: "Setup of non profit and charitable organizations." },
      { title: "Company", desc: "General company incorporation services." },
      { title: "Proprietorship", desc: "Registration of sole proprietorship businesses." },
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


    faqs: [
      {
        q: "What type of company is best for me?",
        a: "There is no one size fits all structure. The right choice depends on your business vision, scale, funding plans, risk appetite, and long term goals.",
      },
      {
        q: "What is the minimum number of directors and shareholders in a Private Limited Company?",
        a: "A Private Limited Company requires a minimum of two directors and two shareholders.",
      },
      {
        q: "What is the difference between an LLP and a Partnership Firm?",
        a: "LLP offers limited liability, a separate legal identity, and better corporate structuring. A Partnership Firm generally involves unlimited liability and less formal recognition.",
      },
      {
        q: "Should I start with a Proprietorship and convert later, or start with a Private Limited from day one?",
        a: "It depends on your business ideology, scalability plans, and future funding or branding vision. Both approaches are valid when planned correctly.",
      },
      {
        q: "Is my company name secure once registered as LLP or Private or Public Limited?",
        a: "Yes. Once registered under the Companies Act or LLP Act, no other entity in India can register the same or deceptively similar name.",
      },
      {
        q: "Are compliance requirements a headache for LLPs or Private or Public Limited companies?",
        a: "No. With proper professionals and systems in place, compliance becomes a routine process and not a burden.",
      },
      {
        q: "Is a Proprietorship separate from its owner?",
        a: "No. A Proprietorship has no separate legal identity from its owner, although a current account can be opened to separate business transactions operationally.",
      },
      {
        q: "OPC or Private Limited Company which is better?",
        a: "Private Limited is generally preferred for growth, credibility, and expansion. OPC is suitable when there is a single promoter seeking a corporate structure with minimal compliance.",
      },
      {
        q: "Registered Partnership or LLP which should I choose?",
        a: "If opting for a registered structure, LLP is always the better choice. An unregistered partnership may have a PAN but lacks legal and structural advantages.",
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

    offerings: [
      { title: "Trademark Registration", desc: "Legal protection for brand names and logos." },
      { title: "Reply Queries", desc: "Responses to trademark and legal objections." },
      { title: "Renew Your Trademark", desc: "Renewal services for existing trademarks." },
      { title: "Name Availability", desc: "Verification of company and brand name availability." },
      { title: "Contracts & Agreements", desc: "Drafting and review of business agreements." },
      { title: "Project Feasibility", desc: "Evaluation of financial and operational viability." },
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

    // protect your business
    faqs: [
      {
        q: "Should we test our brand first and then register the trademark?",
        a: "No. If your brand vision is clear, trademarks should be applied for before or at the time of launch to prevent misuse or duplication.",
      },
      {
        q: "Is a trademark valid for a lifetime?",
        a: "No. A trademark is registered for ten years and can be renewed indefinitely every ten years.",
      },
      {
        q: "If a trademark is registered in one class, is it protected in other classes as well?",
        a: "No. Trademark protection is class specific. Separate classes are required for different business activities or products.",
      },
      {
        q: "Why is Intellectual Property important?",
        a: "IP protects brand identity, goodwill, and market position. It prevents misuse, enhances valuation, and builds investor confidence.",
      },
      {
        q: "How much time does trademark registration usually take?",
        a: "There is no fixed timeline. Currently, registration usually takes around one and a half to two years, subject to examination and opposition.",
      },
      {
        q: "Is there any way to expedite trademark registration?",
        a: "Yes. Government processing can be expedited, but the public opposition period cannot be shortened.",
      },
      {
        q: "Do you handle international trademark registrations?",
        a: "Yes. We assist with registrations in jurisdictions such as the USA, Canada, UAE, Australia, UK, and others.",
      },
      {
        q: "Why is there a price difference in contracts drafted for the same purpose?",
        a: "Agreements are not templates. Pricing depends on experience, foresight, and risk anticipation. They are investments, not expenses.",
      },
      {
        q: "What is Project Feasibility Analysis?",
        a: "It evaluates commercial viability through cost analysis, timelines, scalability, execution practicality, and probability of success.",
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

    offerings: [
      { title: "Pvt Ltd ROC Compliances", desc: "Annual and event based ROC filings for Pvt Ltd companies." },
      { title: "Public Ltd Compliance", desc: "Regulatory compliance for public limited companies." },
      { title: "LLP ROC Compliances", desc: "Mandatory ROC filings for LLP entities." },
      { title: "GST Compliances", desc: "GST returns, filings, and compliance management." },
      { title: "TDS Compliances", desc: "TDS calculation, filing, and reporting services." },
      { title: "Books Finalisation", desc: "Year end accounting and books closure." },
      { title: "Income Tax Returns", desc: "Preparation and filing of income tax returns." },
      { title: "Closure of Company", desc: "Legal and regulatory company closure support." },
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

    // manage your business
    faqs: [
      {
        q: "Is compliance mandatory even if my business is small?",
        a: "Yes. Business size does not exempt any entity from statutory compliances.",
      },
      {
        q: "What happens if I miss ROC or GST filings?",
        a: "Delays lead to late fees, interest, penalties, and possible legal notices from authorities.",
      },
      {
        q: "Can I manage compliances myself to save costs?",
        a: "You may, but errors or missed deadlines often cost more than professional advisory fees.",
      },
      {
        q: "Do compliances apply even if there is no business activity?",
        a: "Yes. Inactive or dormant entities must still file mandatory returns, depending on structure and registrations.",
      },
      {
        q: "Can past non compliances be corrected later?",
        a: "Yes, but usually with additional fees, interest, penalties, and procedural complexity.",
      },
      {
        q: "Do startups also need ROC, GST, and tax compliances?",
        a: "Yes. Startups carry the same statutory obligations as other registered businesses.",
      },
      {
        q: "What risks arise from ignoring compliances?",
        a: "Risks include penalties, director disqualification, loss of credibility, and business disruption.",
      },
      {
        q: "When should I hire a professional for compliances?",
        a: "From day one. Early involvement prevents future disputes, notices, and avoidable costs.",
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
    // registrations
    offerings: [
      { title: "GST Registration", desc: "Registration under the Goods and Services Tax." },
      { title: "Udyam Registration", desc: "MSME registration for small and medium businesses." },
      { title: "Startup India DPIIT", desc: "DPIIT recognition for startup benefits." },
      { title: "FSSAI Registration", desc: "Food business licensing and registration." },
      { title: "Shop & Establishment", desc: "Local business establishment registration." },
      { title: "ISO Certification", desc: "Assistance in obtaining ISO certifications." },
      { title: "Import Export Code", desc: "IEC registration for international trade." },
      { title: "TAN", desc: "Tax Deduction and Collection Account Number registration." },
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

    // registrations
    faqs: [
      {
        q: "What is the turnover limit below which GST registration is not required?",
        a: "GST is not mandatory below twenty lakh rupees for services and forty lakh rupees for goods, subject to state and activity based exceptions.",
      },
      {
        q: "Are UDYAM Registration and MSME Registration the same?",
        a: "Yes. UDYAM Registration is the official MSME registration notified by the Government of India.",
      },
      {
        q: "What is DPIIT Startup Registration?",
        a: "It is a recognition by the Department for Promotion of Industry and Internal Trade providing startup benefits and tax incentives.",
      },
      {
        q: "Is FSSAI registration compulsory for food businesses?",
        a: "Yes. Any food manufacturing, processing, storage, distribution, or selling activity requires FSSAI registration or licence.",
      },
      {
        q: "Can we engage in import or export without an IEC Code?",
        a: "No. An Import Export Code is mandatory for import or export activities in India.",
      },
      {
        q: "What is TAN?",
        a: "TAN is required for deducting or collecting TDS or TCS and filing related returns.",
      },
      {
        q: "Should we take GST registration from day one or wait?",
        a: "It depends on business nature. Delaying GST may result in loss of input tax credit and limit client opportunities.",
      },
      {
        q: "Can we sell on Amazon or Flipkart without GST registration?",
        a: "No. GST registration is mandatory for selling on e commerce platforms irrespective of turnover.",
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

    offerings: [
      { title: "Bookkeeping", desc: "Daily and periodic accounting record maintenance." },
      { title: "Supervision Accounts", desc: "Oversight and review of accounting processes." },
      { title: "Financial Dashboards", desc: "Visual reports for business financial performance." },
      { title: "Cash Flow Analysis", desc: "Tracking and optimization of cash movement." },
      { title: "Working Capital Analysis", desc: "Assessment of short term financial health." },
      { title: "Cost Control Advisory", desc: "Advisory to reduce and manage operational costs." },
      { title: "Tax Planning", desc: "Strategic planning to optimize tax liabilities." },
      { title: "Audit Support", desc: "Preparation and assistance during audits." },
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

    // financial management
    faqs: [
      {
        q: "Is bookkeeping compulsory?",
        a: "It depends on the type of firm and turnover. Companies and LLPs require compulsory bookkeeping.",
      },
      {
        q: "What is the real use of financial dashboards?",
        a: "Dashboards provide a real time snapshot of profits, losses, cash position, and risks in one view.",
      },
      {
        q: "Why is cash flow more important than profit?",
        a: "Profit is theoretical while cash flow is practical. Expenses are paid through available cash.",
      },
      {
        q: "What happens if working capital is mismanaged?",
        a: "Operations suffer despite strong sales, leading to delays, stress, and growth stagnation.",
      },
      {
        q: "Is tax planning legal or risky?",
        a: "Legal tax planning is permitted and advisable. Tax evasion is illegal.",
      },
      {
        q: "Do small businesses really need financial analysis?",
        a: "Yes. Most failures occur due to poor financial planning, not lack of sales.",
      },
      {
        q: "When should a business start financial management services?",
        a: "From the first year to build a strong, scalable, and compliant foundation.",
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

    offerings: [
      { title: "Business Structuring", desc: "Optimizing business structure for growth." },
      { title: "Financial Modelling", desc: "Forecasting and financial projections." },
      { title: "Due Diligence", desc: "Financial and legal due diligence services." },
      { title: "Fund Raising / Loans", desc: "Support for raising capital and business loans." },
      { title: "Valuation", desc: "Business and startup valuation services." },
      { title: "Virtual CFO Services", desc: "Strategic financial leadership on demand." },
      { title: "International Expansion", desc: "Advisory for entering global markets." },
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

    // business growth
    faqs: [
      {
        q: "Is financial modelling only for fundraising?",
        a: "No. It helps plan growth, costs, and risks in advance.",
      },
      {
        q: "What is due diligence and why does it matter?",
        a: "Investors verify everything. Clean records build trust and confidence.",
      },
      {
        q: "Can you help raise funds or arrange loans?",
        a: "Yes. We assist through structured projections and lender readiness.",
      },
      {
        q: "How is business valuation useful?",
        a: "It defines true worth during funding, exit, or partnerships.",
      },
      {
        q: "What is a Virtual CFO and when is it needed?",
        a: "A Virtual CFO provides strategic financial management without full time cost.",
      },
      {
        q: "Is a Virtual CFO better than a regular accountant?",
        a: "Yes for strategy. Both serve different but complementary roles.",
      },
      {
        q: "What challenges arise during international expansion?",
        a: "Regulatory compliance, taxation, structuring, and currency risks.",
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


    offerings: [
      { title: "Franchise Modelling", desc: "Designing scalable franchise business models." },
      { title: "Investor Agreements", desc: "Drafting agreements for franchise investors." },
      { title: "Compliances", desc: "Regulatory compliance for franchise operations." },
      { title: "Tax Structuring", desc: "Optimized tax structure for franchise businesses." },
      { title: "Investor Relations", desc: "Managing communication with franchise investors." },
      { title: "IP Protection", desc: "Safeguarding brand and intellectual property." },
      { title: "Master Franchising", desc: "Setup and management of master franchise rights." },
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


    faqs: [
      {
        q: "What is Franchise Modelling?",
        a: "It is the strategic design of a franchise system covering investment, royalties, services, control, scalability, and revenue sharing.",
      },
      {
        q: "Are there compliances specific to franchising?",
        a: "India has no separate franchising law, but international franchising involves country specific compliance requirements.",
      },
      {
        q: "Which franchise model is best FICO FOCO or FOFO?",
        a: "There is no universal best model. The right structure depends on capital, control, risk appetite, and expansion goals.",
      },
      {
        q: "Is registering brand name and IP important in franchising?",
        a: "Yes. Trademark and IP protection is essential for scaling and protecting franchise systems.",
      },
      {
        q: "What franchising support do you provide?",
        a: "We offer financial modelling, legal structuring, agreements, SOPs, process design, and scalable compliance frameworks.",
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

    offerings: [
      { title: "Company Incorporation", desc: "Overseas company registration services." },
      { title: "Bookkeeping", desc: "Accounting support for international entities." },
      { title: "Accounting Support", desc: "Ongoing financial reporting and assistance." },
      { title: "Compliance & Filings", desc: "Regulatory filings for global operations." },
      { title: "Tax & Advisory Support", desc: "International tax planning and advisory." },
      { title: "International Business Management", desc: "End to end management of global businesses." },
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

    faqs: [
      {
        q: "Is it legal to outsource accounting for a foreign company?",
        a: "Yes. Outsourcing accounting is legal and widely practiced.",
      },
      {
        q: "Why outsource instead of hiring locally abroad?",
        a: "It reduces cost, ensures expertise, and improves consistency.",
      },
      {
        q: "Can I incorporate a company abroad while staying in India?",
        a: "Yes. Foreign incorporation can be done remotely.",
      },
      {
        q: "Is accounting different for international businesses?",
        a: "Yes. Each country follows its own accounting rules.",
      },
      {
        q: "Can Indian CAs manage overseas compliance?",
        a: "Yes, with jurisdiction specific partners and frameworks.",
      },
      {
        q: "What happens if overseas filings are missed?",
        a: "It can result in heavy penalties, late fees, or entity strike off.",
      },
      {
        q: "Do I need separate bank accounts abroad?",
        a: "Yes. Local banking is usually mandatory.",
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

      {/* Service Offerings */}
      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">Service Offerings</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-2">
          {service.offerings.map((step, i) => (
            <li key={i} className="rounded-xl border bg-card p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6BAE3A] text-white text-sm font-semibold">
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
      {/* Process */}
      <section className="py-8 md:py-12">
        <h2 className="text-xl font-semibold md:text-2xl">Our Process</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-2">
          {service.process.map((step, i) => (
            <li key={i} className="rounded-xl border bg-card p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6BAE3A] text-white text-sm font-semibold">
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
        <h2 className="text-xl font-semibold md:text-2xl">FAQs</h2>
        <div className="mt-6 space-y-3">
          {service.faqs.map((f, i) => (
            <details key={i} className="group rounded-lg border bg-card p-4">
              <summary className="cursor-pointer list-none font-medium">
                <span className="mr-2 text-[#6BAE3A]">Q{i + 1}.</span> {f.q}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-[#6BAE3A] px-5 text-white hover:bg-black"
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
