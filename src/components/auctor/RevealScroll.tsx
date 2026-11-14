"use client";

import React, { useEffect, useRef } from "react";

interface RevealScrollProps {
  staticLead: string;
  paragraphs: string[];
  lastLine: string;
  mark?: React.ReactNode;
}

const clamp = (val: number) => Math.min(1, Math.max(0, val));

export default function RevealScroll({
  staticLead,
  paragraphs,
  lastLine,
  mark,
}: RevealScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const lastLineEl = el.querySelector<HTMLElement>(".reveal-last");
    const words = Array.from(el.querySelectorAll<HTMLElement>(".word"));
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 479px)");

    let rafId = 0;

    const update = () => {
      rafId = 0;
      if (!el || !lastLineEl) return;

      if (prefersReduced) {
        words.forEach((w) => (w.style.opacity = "1"));
        lastLineEl.style.opacity = "1";
        return;
      }

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const startTrigger = (isMobile.matches ? 0.62 : 0.58) * vh;
      const endTrigger = (isMobile.matches ? 0.48 : 0.44) * vh - rect.height / 2;

      // Linear progress
      const progress = clamp((startTrigger - rect.top) / (startTrigger - endTrigger));

      // Ease in-out quadratic easing curve directly from Auctor JS:
      // u = (m < .5 ? 2 * m * m : 1 - (-2 * m + 2) ** 2 / 2) * (a.length + 1)
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const wordProgress = eased * (words.length + 1);

      words.forEach((w, idx) => {
        const factor = clamp(wordProgress - idx);
        w.style.opacity = String(0.22 + 0.78 * factor);
      });

      lastLineEl.style.opacity = String(clamp(wordProgress - words.length));
    };

    const onScroll = () => {
      if (rafId === 0) {
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== 0) cancelAnimationFrame(rafId);
    };
  }, [paragraphs, lastLine]);

  return (
    <div ref={wrapperRef} id="reveal-wrapper" className="reveal-scroll">
      <div className="reveal-scroll__inner">
        {/* Static lead */}
        <p className="reveal-para reveal-para--static heading-3">{staticLead}</p>

        {/* Word-by-word opacity reveal paragraphs matching Auctor's exact DOM shape */}
        {paragraphs.map((paraText, pIdx) => {
          const words = paraText.split(" ");
          return (
            <p key={pIdx} className="reveal-para heading-3">
              {words.map((word, wIdx) => (
                <span key={wIdx}>
                  {wIdx > 0 ? " " : null}
                  <span className="word" style={{ opacity: 0.22 }}>
                    {word}
                  </span>
                </span>
              ))}
            </p>
          );
        })}

        {/* Last line with mark */}
        <p
          id="last-line"
          className="reveal-last heading-3"
          aria-live="polite"
          style={{ opacity: 0 }}
        >
          {mark && (
            <span className="reveal-last__mark" aria-hidden="true">
              {mark}
            </span>
          )}
          <span className="reveal-last__text">{lastLine}</span>
        </p>
      </div>
    </div>
  );
}

