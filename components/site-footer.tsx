import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Company + Address */}
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">
              Turnhill International LLP
            </span>
            <span>
              DSS-122, MCC-1, Aerocity, Mohali
            </span>
            <span>
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Right: Contact */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
          >
            <span>
              📞{" "}
              <a
                href="tel:+917370000088"
                className="hover:text-foreground"
              >
                +91 73700 00088
              </a>
            </span>

            <span>
              ✉️{" "}
              <a
                href="mailto:relations@turnhill.in"
                className="hover:text-foreground"
              >
                relations@turnhill.in
              </a>
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
