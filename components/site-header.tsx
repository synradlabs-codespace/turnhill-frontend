"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

const services = [
  {
    category: "START YOUR BUSINESS",
    href: "/services/start-your-business",
  },
  {
    category: "PROTECT YOUR BUSINESS",
    href: "/services/protect-your-business",
  },
  {
    category: "MANAGE YOUR BUSINESS",
    href: "/services/manage-your-business",
  },
  {
    category: "REGISTRATIONS & LICENSES",
    href: "/services/registrations-licenses",
  },
  {
    category: "FINANCIAL MANAGEMENT",
    href: "/services/financial-management",
  },
  {
    category: "BUSINESS GROWTH",
    href: "/services/business-growth",
  },
  {
    category: "FRANCHISE ADVISORY",
    href: "/services/franchise-advisory",
  },
  {
    category: "INTERNATIONAL BUSINESS",
    href: "/services/international-business",
  },
]

export function SiteHeader() {
  const [expanded, setExpanded] = useState(false)          // desktop mega menu
  const [mobileOpen, setMobileOpen] = useState(false)      // mobile drawer
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  // Close on route change
  useEffect(() => {
    setExpanded(false)
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  return (
    <header
      className="border-b bg-background/70 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* Top nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-14 relative">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Turnhill International Home"
        >
          <span className="sr-only">Turnhill International</span>

          <Image
            src="/turnhill-full-logo.svg"
            alt="Turnhill International"
            width={420}
            height={150}
            priority
            className="h-16 sm:h-14 md:h-20 w-auto object-contain pt-4"
          />

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-foreground">
          <Link href="/#insights" className="hover:text-[#6BAE3A]">
            Home
          </Link>

          <Link href="/why-us" className="hover:text-[#6BAE3A]">
            Why Turnhill
          </Link>

          {/* SERVICES TRIGGER */}
          <button
            type="button"
            className="hover:text-[#6BAE3A] cursor-pointer"
            onMouseEnter={() => setExpanded(true)}   // desktop hover
            onClick={() => setExpanded((prev) => !prev)} // mobile tap
          >
            Services
          </button>

          <Link href="/insights" className="hover:text-[#6BAE3A]">
            Insights
          </Link>

          <Link href="/contact" className="hover:text-[#6BAE3A]">
            Contact
          </Link>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
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
            onMouseLeave={() => setExpanded(false)}  // closes when mouse leaves mega menu
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((category) => (
                <div key={category.category}>
                  <Link
                    href={category.href}
                    className="block font-semibold uppercase pb-1 mb-2 text-sm hover:text-[#6BAE3A]"
                    onClick={() => setExpanded(false)}
                  >
                    {category.category}
                  </Link>
                </div>
              ))}
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
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-16 border-b">
              <Image
                src="/turnhill-full-logo.svg"
                alt="Turnhill International"
                width={220}
                height={80}
                className="h-10 w-auto object-contain"
              />
              <button onClick={() => setMobileOpen(false)}>
                <X size={26} />
              </button>
            </div>

            {/* Menu */}
            <div className="px-5 py-6 space-y-5 text-sm bg-background">

              <Link href="/#insights" className="block font-medium">Home</Link>
              <Link href="/why-us" className="block font-medium">Why Turnhill</Link>

              {/* Mobile Services */}
              <button
                className="flex items-center justify-between w-full font-medium"
                onClick={() => setMobileServicesOpen((p) => !p)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  size={18}
                />
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
                        className="block text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.category}
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
