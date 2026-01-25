"use client";

import { useEffect, useRef, useState } from "react";

// I need to use IntersectionObserver directly or a simple hook.

// RETHINK: I don't have framer-motion. I'll use standard IntersectionObserver.

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in seconds
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const element = ref.current;
    if (!element) return;

    const duration = 2000; // 2 seconds
    const startTimestamp = performance.now();
    const startValue = direction === "up" ? 0 : value;
    const endValue = direction === "up" ? value : 0;

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function
      
      const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      element.textContent = current.toLocaleString(); // Add commas

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [hasAnimated, value, direction, delay]);

  return <span ref={ref} className={className}>0</span>;
}
