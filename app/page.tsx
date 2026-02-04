import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TagMarquee } from "@/components/tag-marquee";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";
import { BigFlexMarquee } from "@/components/brand-wall";
import { WhyUs } from "@/components/why-us";
import { PassionateTeamSection } from "@/components/passionate-team-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
      </div>

      <TagMarquee />

      <WhyUs />

      <BigFlexMarquee />

      <PassionateTeamSection />

      <Services />

      <Showcase />

      <Portfolio />

      <CTA />

      <SiteFooter />
    </main >
  );
}
