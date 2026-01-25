export function CTA() {
  return (
    <section className="mt-16 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-center text-pretty text-3xl sm:text-4xl font-semibold">
          Let’s Grow Your Business Together
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm/6 opacity-80">
          Ready to simplify complex legal, financial, and strategic challenges? Contact Turnhill to discuss how we
          can structure, protect, and scale your business while keeping you focused on your vision.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#6BAE3A] px-4 py-2 text-sm text-white"
          >
            Start Your Consultation <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
