"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
};

export function InsightsSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[calc(100vh-56px)] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((item, index) => (
        <div
          key={item._id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          )}

          {/* Gradient: heavy at bottom-left, light at top-right */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      ))}

      {/* Bottom-left text block*/}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 pb-14 sm:pb-16">

          {/* Top meta row */}
          <div className="flex items-center gap-4 mb-5">
            {/* Green accent bar */}
            <span className="block w-8 h-[2px] bg-[#6BAE3A]" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">
              Insights
            </span>
            {/* Slide counter */}
            <span className="ml-auto text-xs text-white/40 tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <Link href={`/insights/${slides[current]?.slug}`} className="group inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-3xl text-left leading-[1.1] group-hover:text-[#6BAE3A] transition-colors duration-300">
              {slides[current]?.title}
            </h2>
          </Link>

          {/* Excerpt */}
          <p className="mt-4 text-sm sm:text-base max-w-xl text-white/70 leading-relaxed line-clamp-2">
            {slides[current]?.excerpt}
          </p>

          {/* Bottom row: CTA + dots */}
          <div className="mt-8 flex items-center gap-6">
            <Link
              href={`/insights/${slides[current]?.slug}`}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white border-b border-white/40 pb-0.5 hover:border-[#6BAE3A] hover:text-[#6BAE3A] transition-colors duration-200"
            >
              Read Insight
              <span className="text-base leading-none">→</span>
            </Link>

            {/* Dot indicators inline with CTA */}
            {slides.length > 1 && (
              <div className="flex gap-2 ml-auto">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`transition-all duration-300 rounded-full ${index === current
                      ? "bg-[#6BAE3A] w-6 h-1.5"
                      : "bg-white/30 w-1.5 h-1.5 hover:bg-white/60"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}