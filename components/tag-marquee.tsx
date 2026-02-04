export function TagMarquee() {
  const tags = [
    "Business Advisory",
    "Corporate Structuring",
    "Compliance & Governance",
    "Startup Advisory",
    "SME Consulting",
    "Tax Planning",
    "Financial Management",
    "ROC & Regulatory Compliance",
    "GST & Direct Tax",
    "Due Diligence",
    "Fund Raising Advisory",
    "Virtual CFO",
    "Valuation",
    "Cross-Border Advisory",
    "International Expansion",
    "Risk Management",
    "Investor Readiness",
    "Strategic Execution",
    "Sustainable Growth",
    "Institutional Discipline",
  ];

  return (
    <div className="w-full border-y bg-muted/40 overflow-hidden">
      <div className="relative">
        <div className="animate-scroll flex w-max whitespace-nowrap py-3 hover:pause">
          {[...tags, ...tags].map((t, i) => (
            <span
              key={i}
              className="mx-2 rounded-full bg-[#6BAE3A]/10 border-[#6BAE3A] text-[#6BAE3A] px-3 py-1 text-xs border whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
