"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "./ui/button"

const services = [
  { category: "Start Your Business", href: "/services/start-your-business", desc: "Incorporation, structuring & launch" },
  { category: "Protect Your Business", href: "/services/protect-your-business", desc: "IP, legal shields & risk management" },
  { category: "Manage Your Business", href: "/services/manage-your-business", desc: "Governance, ops & compliance" },
  { category: "Registration & Licenses", href: "/services/registrations-licenses", desc: "All statutory registrations" },
  { category: "Financial Management", href: "/services/financial-management", desc: "Accounting, audits & reporting" },
  { category: "Business Growth", href: "/services/business-growth", desc: "Strategy, funding & scale-up" },
  { category: "Franchise Advisory", href: "/services/franchise-advisory", desc: "Expand through franchising" },
  { category: "International Business", href: "/services/international-business", desc: "Cross-border setup & advisory" },
]

export function SiteHeader() {
  const [expanded, setExpanded] = useState(false)
  const [hoveredService, setHoveredService] = useState<typeof services[0] | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setExpanded(false)
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  return (
    <header className="border-b bg-background/70 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between pt-2 px-4 sm:px-6 h-14 relative">

        {/* Logo — Timeburner text */}
        <Link href="/" aria-label="Turnhill International Home">
          <span className="font-[family-name:var(--font-timeburner)] text-2xl md:text-4xl font-bold select-none">
            <span className="text-black">Turn</span><span className="text-[#6BAE3A]">hill</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-end gap-6 text-sm text-foreground">
          <Link href="/#insights" className="hover:text-[#6BAE3A]">Home</Link>
          <Link href="/why-us" className="hover:text-[#6BAE3A]">Why Turnhill</Link>
          <a href="/about-us.pdf" download className="hover:text-[#6BAE3A] cursor-pointer">About Us</a>

          <button
            type="button"
            className="flex items-center gap-1 hover:text-[#6BAE3A] cursor-pointer"
            onMouseEnter={() => setExpanded(true)}
            onClick={() => setExpanded((prev) => !prev)}
          >
            Services
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          <Link href="/insights" className="hover:text-[#6BAE3A]">Insights</Link>
          <Link href="/contact" className="hover:text-[#6BAE3A]">Contact</Link>
        </nav>

        <Button
          onClick={() => setMobileOpen(true)}
          variant="outline"
          size="icon"
          className="md:hidden rounded-full bg-transparent"
          aria-label="Open navigation menu"
        >
          <Menu size={26} />
        </Button>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-t border-gray-100 shadow-xl text-sm"
            onMouseLeave={() => {
              setExpanded(false)
              setHoveredService(null)
            }}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 flex">

              {/* LEFT — Featured panel */}
              <div className="w-64 shrink-0 border-r border-gray-100 py-6 pr-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6BAE3A] font-semibold mb-4">
                  Our Services
                </p>
                <AnimatePresence mode="wait">
                  {hoveredService ? (
                    <motion.div
                      key={hoveredService.category}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="text-base font-semibold text-gray-900 leading-snug">
                        {hoveredService.category}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {hoveredService.desc}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-muted-foreground"
                    >
                      Hover a service to learn more.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* RIGHT — Service list */}
              <div className="flex-1 py-6 pl-6 grid grid-cols-2 gap-x-6 gap-y-1 content-start">
                {services.map((s) => (
                  <Link
                    key={s.category}
                    href={s.href}
                    onClick={() => setExpanded(false)}
                    onMouseEnter={() => setHoveredService(s)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`group flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors duration-150 ${hoveredService?.category === s.category
                      ? "bg-[#6BAE3A]/10 text-[#6BAE3A]"
                      : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    <span className="font-medium text-sm">{s.category}</span>
                    <ArrowUpRight
                      size={13}
                      className={`transition-opacity duration-150 ${hoveredService?.category === s.category ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-100 bg-gray-50/60">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Not sure where to start?</p>
                <Link
                  href="/contact"
                  onClick={() => setExpanded(false)}
                  className="text-xs font-medium text-[#6BAE3A] hover:underline flex items-center gap-1"
                >
                  Talk to an advisor <ArrowUpRight size={11} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[60] bg-white"
          >
            <div className="flex items-center justify-between px-4 h-16 border-b">
              {/* Mobile logo also uses Timeburner */}
              <span className="font-[family-name:var(--font-timeburner)] text-2xl tracking-wide select-none">
                <span className="text-black">Turn</span><span className="text-[#6BAE3A]">hill</span>
              </span>
              <button onClick={() => setMobileOpen(false)}><X size={26} /></button>
            </div>

            <div className="px-5 py-6 space-y-5 text-sm bg-background">
              <Link href="/#insights" className="block font-medium">Home</Link>
              <Link href="/why-us" className="block font-medium">Why Turnhill</Link>
              <a href="/about-us.pdf" download className="block font-medium" onClick={() => setMobileOpen(false)}>
                About Us
              </a>

              <button
                className="flex items-center justify-between w-full font-medium"
                onClick={() => setMobileServicesOpen((p) => !p)}
              >
                <span>Services</span>
                <ChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} size={18} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-3 overflow-hidden"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.category}
                        href={s.href}
                        className="flex items-center justify-between text-muted-foreground hover:text-[#6BAE3A] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{s.category}</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/insights" className="block font-medium">Insights</Link>
              <Link href="/contact" className="block font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}