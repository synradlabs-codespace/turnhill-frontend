"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-background/70 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
          aria-label="Turnhill International Home"
        >
          <span className="whitespace-nowrap text-lg font-bold">
            Turnhill International
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6 text-sm text-muted-foreground"
        >
          <Link href="/#home" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/#whyus" className="hover:text-foreground">
            Why Turnhill
          </Link>
          <Link href="/#services" className="hover:text-foreground">
            Services
          </Link>

          <Link href="/insights" className="hover:text-foreground">
            Insights
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-xs mx-auto">
              <nav
                aria-label="Mobile Primary"
                className="mt-6 grid gap-4 text-base px-4"
              >
                <Link href="/#home" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/#whyus" onClick={() => setOpen(false)}>
                  Why Turnhill
                </Link>
                <Link href="/#services" onClick={() => setOpen(false)}>
                  Services
                </Link>
                <Link href="/insights" onClick={() => setOpen(false)}>
                  Insights
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
