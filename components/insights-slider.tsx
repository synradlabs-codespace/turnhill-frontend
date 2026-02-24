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
    <section className="relative w-full h-[calc(100vh-56px)] overflow-hidden">
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

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6 text-white">

              {/* Title with hover underline */}
              <Link href={`/insights/${item.slug}`} className="group inline-block">
                <h2 className="text-3xl sm:text-3xl font-semibold max-w-3xl text-left leading-tight border-b border-transparent group-hover:border-white transition">
                  {item.title}
                </h2>
              </Link>

              <p className="mt-6 text-base sm:text-md max-w-2xl text-white/80">
                {item.excerpt}
              </p>

              <Link
                href={`/insights/${item.slug}`}
                className="inline-block mt-8 px-6 py-3 border border-white text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
              >
                Read Insight
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition ${index === current ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}