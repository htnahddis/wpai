"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export function StatCounter({ value, suffix = "", label, sublabel }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();

          let elapsed = 0;
          const intervalId = window.setInterval(() => {
            elapsed += 40;
            const progress = elapsed / 800;
            if (progress >= 1) {
              window.clearInterval(intervalId);
              setDisplayValue(value);
              return;
            }

            // Scramble formula directly from Auctor JS module 75715:
            const range = Math.max(1, Math.round(value * (1 - progress)));
            const scrambled = Math.round(value - range + Math.random() * range * 2);
            setDisplayValue(Math.max(1, scrambled));
          }, 40);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={containerRef} className="flex flex-col text-left p-6 rounded-xl border border-[#EBEBED] bg-white">
      <div className="heading-1 text-4xl sm:text-6xl font-serif font-normal text-[#171717] tracking-tight">
        {displayValue}
        {suffix}
      </div>
      <div className="text-[13px] font-mono font-medium text-[#171717] mt-3">{label}</div>
      {sublabel && <div className="text-[12px] text-[#737373] mt-1">{sublabel}</div>}
    </div>
  );
}

