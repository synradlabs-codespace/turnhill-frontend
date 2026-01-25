"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const services = [
  {
    category: "START YOUR BUSINESS",
    href: "/services/start-your-business",
    items: [
      "Private Limited Company",
      "One Person Company",
      "LLP",
      "Partnership",
      "Public Limited Company",
      "NGO / Section 8 Company",
      "Proprietorship",
    ],
  },
  {
    category: "PROTECT YOUR BUSINESS",
    href: "/services/protect-your-business",
    items: [
      "Trademark Registration",
      "Reply Queries",
      "Renew Your Trademark",
      "Name Availability",
      "Contracts & Agreements",
      "Project Feasibility",
    ],
  },
  {
    category: "MANAGE YOUR BUSINESS",
    href: "/services/manage-your-business",
    items: [
      "Pvt Ltd ROC Compliances",
      "Public Ltd Compliance",
      "LLP - ROC Compliances",
      "GST Compliances",
      "Tds Compliances",
      "Books Finalisation",
      "Income Tax Returns",
      "Closure of Company",
    ],
  },
  {
    category: "REGISTRATIONS & LICENSES",
    href: "/services/registrations-licenses",
    items: [
      "GST Registration",
      "Udyam Registration",
      "Startup India - DPIIT",
      "FSSAI Registration",
      "Shop & Establishment",
      "ISO Certification",
      "Import Export Code",
      "TAN",
    ],
  },
  {
    category: "FINANCIAL MANAGEMENT",
    href: "/services/financial-management",
    items: [
      "Bookkeeping",
      "Supervision - Accounts",
      "Financial Dashboards",
      "Cash Flow Analysis",
      "Working Capital Analysis",
      "Cost Control Advisory",
      "Tax Planning",
      "Audit Support",
    ],
  },
  {
    category: "BUSINESS GROWTH",
    href: "/services/business-growth",
    items: [
      "Business Structuring",
      "Financial Modelling",
      "Due Diligence & Fund-Raising / Loans",
      "Valuation",
      "Virtual CFO Services",
      "International Expansion",
    ],
  },
  {
    category: "FRANCHISE ADVISORY",
    href: "/services/franchise-advisory",
    items: [
      "Franchise Modelling",
      "Investor Agreements",
      "Compliances",
      "Tax Structuring",
      "Investor Relations",
      "IP Protection",
      "Master Franchising",
    ],
  },
  {
    category: "INTERNATIONAL BUSINESS",
    href: "/services/international-business",
    items: [
      "Company Incorporation",
      "Bookkeeping",
      "Accounting Support",
      "Compliance & Filings",
      "Tax & Advisory Support",
      "International Business Management",
    ],
  },
]

export function SiteHeader() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return (
    <header
      className="border-b bg-background/70 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Top nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-14 relative">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Turnhill International Home"
        >
          {/* Visually hidden text for accessibility */}
          <span className="sr-only">Turnhill International</span>

          <Image
            src="/turnhill-full-logo.png"
            alt="Turnhill International"
            width={420}
            height={120}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-foreground">
          <Link href="/#home" className="hover:text-[#6BAE3A]">
            Home
          </Link>
          <Link href="/#whyus" className="hover:text-[#6BAE3A]">
            Why Turnhill
          </Link>
          <Link href="/#services" className="hover:text-[#6BAE3A]">
            Services
          </Link>
          <Link href="/insights" className="hover:text-[#6BAE3A]">
            Insights
          </Link>
          <Link href="/contact" className="hover:text-[#6BAE3A]">
            Contact
          </Link>
        </nav>
      </div>

      {/* Expanded Mega Header */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white border-t border-gray-200 shadow-lg overflow-y-auto max-h-[50vh] text-sm"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((category) => (
                <div key={category.category}>
                  <Link
                    href={category.href}
                    className="block font-semibold uppercase border-b-2 border-[#6BAE3A]/50 pb-1 mb-2 text-sm hover:text-[#6BAE3A]"
                  >
                    {category.category}
                  </Link>

                  <ul className="space-y-1 ml-2 text-xs">
                    {category.items.map((item) => (
                      <li key={item}>
                        <Link
                          href={category.href}
                          className="text-muted-foreground hover:text-[#6BAE3A] block"
                        >
                          • {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
