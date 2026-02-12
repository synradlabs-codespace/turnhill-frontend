import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TagMarquee } from "@/components/tag-marquee";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";
import { BigFlexMarquee } from "@/components/big-flex-marquee";
import { WhyUs } from "@/components/why-us";
import { PassionateTeamSection } from "@/components/passionate-team-section";

export default function Page() {
  return (
    <main className="w-full">
      <SiteHeader />

      <Hero />


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
