import type { Metadata } from "next"
import { BusinessContactForm } from "@/components/business-contact-form"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact | Turnhill Business Inquiry",
  description: "Comprehensive consultation to understand your business, vision, and strategic objectives.",
}

export default function ContactPage() {
  return (
    <main id="contact" className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
      <section className="mx-auto max-w-5xl">
        <header className="mb-10 md:mb-14">
          <p className="text-sm text-muted-foreground">Contact</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance mt-2">
            Let’s Build Something Great
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            Share a few details about your team, project, and objectives. The Turnhill team will review your inquiry and get back to you within 1–2 business days.
          </p>
        </header>

        <div className="grid gap-8 md:gap-10 md:grid-cols-[1.1fr,1fr]">
          {/* Left: context & contact info */}
          <div className="flex flex-col gap-6">
<div className="rounded-lg border bg-card p-6">
  <h2 className="text-xl font-medium mb-2">What to expect</h2>
  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
    <li>Comprehensive consultation to understand your business, vision, and strategic objectives</li>
    <li>Guidance on company structuring, compliance, governance, and financial planning</li>
    <li>Actionable next steps to simplify execution, mitigate risks, and accelerate growth</li>
  </ul>
</div>



            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-base font-medium mb-2">Prefer email?</h3>
              <p className="text-sm text-muted-foreground">
                Reach us directly at{" "}
                <a className="underline underline-offset-2" href="mailto:hello@turnhill.com">
                  relations@turnhill.com
                </a>{" "}
                and we’ll follow up promptly.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline">
                  <a href="/">Back to home</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <BusinessContactForm
            title="Start Your Project Conversation"
            description="Fill out the form below and our Turnhill experts will get in touch to discuss your business needs."
            namePlaceholder="Your full name"
            emailPlaceholder="Your email address"
            companyPlaceholder="Your company or team"
            projectPlaceholder="Briefly describe your project or challenge"
            buttonText="Send Inquiry"
          />
        </div>
      </section>
    </main>
  )
}
