import Link from "next/link"
import { SiWhatsapp, SiLinkedin, SiGmail } from "react-icons/si"
import { MdCall } from "react-icons/md";


export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: Company + Address + Description */}
          <div className="flex flex-col gap-2 text-xs text-muted-foreground max-w-sm">
            <span className="font-medium text-foreground">
              Turnhill International LLP
            </span>
            <span>DSS-122, MCC-1, Aerocity, Mohali</span>
            <p>
              A group backed by Chartered Accountants, Lawyers, Company Secretaries, Corporate Leaders and experienced consultants who get you exactly what you need.
            </p>
            <Link
              href="/legal-and-privacy"
              className="text-foreground hover:underline underline-offset-2"
            >
              Legal and Privacy
            </Link>
          </div>

          {/* Right: Contact & Social Media */}
          <div className="flex flex-col gap-4 text-xs text-muted-foreground w-full sm:w-auto sm:items-end sm:text-right">
            {/* Contact */}
            <div className="flex flex-col gap-1 sm:items-end">
              <span className="inline-flex items-center gap-1">
                <span style={{ color: "#6BAE3A" }}><MdCall /></span>
                <a href="tel:+917370000088" className="hover:text-foreground">
                  +91 73700 00088
                </a>
              </span>
              <span className="inline-flex items-center gap-1">
                ✉️
                <a
                  href="mailto:relations@turnhill.in"
                  className="hover:text-foreground"
                >
                  relations@turnhill.in
                </a>
              </span>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-2 sm:justify-end">
              <a
                href="https://wa.me/917370000088"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/turnhill"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" style={{ color: "#0A66C2" }} />
              </a>

              {/* Gmail */}
              <a
                href="mailto:relations@turnhill.in"
                className="hover:opacity-80"
                aria-label="Email"
              >
                <SiGmail className="h-5 w-5" style={{ color: "#D14836" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
