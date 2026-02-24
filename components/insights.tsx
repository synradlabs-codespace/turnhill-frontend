// components/insights.tsx
import { getAllSanityInsights } from "@/lib/sanity.insights";
import { InsightsSlider } from "./insights-slider";


export async function Insights() {
  const allInsights = await getAllSanityInsights();
  const slides = allInsights.slice(0, 5);

  if (!slides.length) return null;

  return <InsightsSlider slides={slides} />;
}