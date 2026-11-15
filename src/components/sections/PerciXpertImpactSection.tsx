"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PerciXpertImpactSectionProps {
  onOpenModal?: () => void;
}

interface ImpactCard {
  id: string;
  type: "quote" | "stat";
  theme: "dark" | "lavender" | "ice" | "mint";
  category?: string;
  stat?: string;
  statLabel?: string;
  quote?: string;
  highlightedText?: string;
  author?: string;
  role?: string;
  clientName: string;
  clientBadge: string;
  imageSrc: string;
  linkText: string;
}

const IMPACT_CARDS: ImpactCard[] = [
  {
    id: "impact-1",
    type: "quote",
    theme: "dark",
    quote: "We replaced 8 weeks of manual workshop churn with PerciXpert, delivering verified blueprints",
    highlightedText: "in 18 days with zero rework.",
    author: "Marcus Vance",
    role: "VP of Enterprise Architecture",
    clientName: "Industrial Group",
    clientBadge: "Global Manufacturing",
    imageSrc: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    linkText: "Read engagement story",
  },
  {
    id: "impact-2",
    type: "stat",
    theme: "lavender",
    category: "Retail and Supply Chain",
    stat: "50%",
    statLabel: "Reduction in Cloud ERP prepare & explore timelines",
    author: "Sarah Jenkins",
    role: "Chief Digital Officer",
    clientName: "Retail Global Corp",
    clientBadge: "Retail & CPG",
    imageSrc: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    linkText: "Read the case study",
  },
  {
    id: "impact-3",
    type: "stat",
    theme: "ice",
    category: "Financial Services",
    stat: "Zero",
    statLabel: "Rework cost leakage across 14 enterprise rollouts",
    author: "David Chen",
    role: "Global Head of ERP Delivery",
    clientName: "Apex Financial",
    clientBadge: "Banking & Capital",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    linkText: "Read the case study",
  },
  {
    id: "impact-4",
    type: "quote",
    theme: "dark",
    quote: "During our AMS takeover, PerciXpert's System Audit module surfaced 230+ undocumented Z-table macros",
    highlightedText: "before our contract even began.",
    author: "Elena Rostova",
    role: "Global Head of Applications",
    clientName: "EuroLogistics",
    clientBadge: "Logistics & Transport",
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    linkText: "Read audit story",
  },
  {
    id: "impact-5",
    type: "stat",
    theme: "mint",
    category: "Energy & Utilities",
    stat: "3.8x",
    statLabel: "Sprint velocity with automated FIT-GAP documentation",
    author: "Jonathan Cole",
    role: "Managing Director of Technology",
    clientName: "Vanguard Power",
    clientBadge: "Renewable Utilities",
    imageSrc: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
    linkText: "Read the case study",
  },
];

export default function PerciXpertImpactSection({
  onOpenModal,
}: PerciXpertImpactSectionProps) {
  const N = IMPACT_CARDS.length;
  // Duplicate array 3 times for seamless infinite wrap
  const ALL_CARDS = [...IMPACT_CARDS, ...IMPACT_CARDS, ...IMPACT_CARDS];

  // Start in the middle set (index N)
  const [currentIndex, setCurrentIndex] = useState(N);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // When transition completes, check if we need to silently snap to the middle set
  const handleTransitionEnd = () => {
    setIsMoving(false);
    if (currentIndex >= 2 * N) {
      // Reached the right boundary: snap back to middle set silently
      setEnableTransition(false);
      setCurrentIndex((prev) => prev - N);
    } else if (currentIndex < N) {
      // Reached the left boundary: snap forward to middle set silently
      setEnableTransition(false);
      setCurrentIndex((prev) => prev + N);
    }
  };

  // Re-enable transition after silent snap
  useEffect(() => {
    if (!enableTransition) {
      const frame = requestAnimationFrame(() => {
        // Force reflow to commit transform without animation
        if (trackRef.current) {
          void trackRef.current.offsetHeight;
        }
        setEnableTransition(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [enableTransition]);

  const handleNext = () => {
    if (isMoving) return;
    setIsMoving(true);
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isMoving) return;
    setIsMoving(true);
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Touch swipe support for smooth mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#F0F0F4] overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Top Header Row (Matching Monday.com's clean "Our customers achieve more") */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <h2 className="font-sans text-3xl sm:text-[44px] font-normal text-[#191923] tracking-tight leading-tight">
              Our customers achieve more
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#191923] text-sm font-medium text-[#191923] hover:bg-[#191923] hover:text-white transition-all cursor-pointer flex-shrink-0 active:scale-95"
          >
            <span>Contact sales</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Sliding Track Viewport */}
        <div
          className="overflow-hidden [--card-width:100%] [--card-gap:24px] lg:[--card-width:calc(50%-14px)] lg:[--card-gap:28px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Silky Smooth Transform Track */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className="flex gap-6 lg:gap-7 will-change-transform"
            style={{
              transform: `translate3d(calc(-1 * ${currentIndex} * (var(--card-width) + var(--card-gap))), 0, 0)`,
              transition: enableTransition
                ? "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
            }}
          >
            {ALL_CARDS.map((card, index) => {
              const isDark = card.theme === "dark";
              const isLavender = card.theme === "lavender";
              const isMint = card.theme === "mint";

              return (
                <div
                  key={`${card.id}-${index}`}
                  className={`w-full lg:w-[calc(50%-14px)] flex-shrink-0 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[410px] relative transition-shadow duration-300 shadow-xs hover:shadow-md ${
                    isDark
                      ? "bg-[#0A0B0E] text-white"
                      : isLavender
                      ? "bg-[#F3E3FD] text-[#191923]"
                      : isMint
                      ? "bg-[#E6F7F0] text-[#191923]"
                      : "bg-[#EBF3FF] text-[#191923]"
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch h-full">
                    {/* Left Column: Quote or Stat */}
                    <div className="sm:col-span-7 flex flex-col justify-between py-1">
                      {card.type === "quote" ? (
                        <>
                          <div>
                            {/* Pink Quotation Mark */}
                            <span className="text-5xl sm:text-6xl text-[#FF1F8E] font-serif leading-none block mb-4 select-none">
                              “
                            </span>

                            <p className="text-base sm:text-[17px] font-normal leading-relaxed text-white/95 mb-6">
                              {card.quote}{" "}
                              <span className="text-[#FF1F8E] font-medium">
                                {card.highlightedText}
                              </span>
                            </p>
                          </div>

                          <div className="text-xs sm:text-[13px] text-white/70 pt-2">
                            <span className="text-white font-normal block">
                              - {card.author}
                            </span>
                            <span className="text-white/60 text-xs">
                              {card.role}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            {/* Category Pill Tag */}
                            <div className="mb-6">
                              <span className="inline-block px-3 py-1 bg-white text-[#191923] text-xs font-normal rounded-md shadow-xs">
                                {card.category}
                              </span>
                            </div>

                            {/* Huge Impact Stat */}
                            <div className="text-5xl sm:text-[68px] font-sans font-light tracking-tight text-[#191923] leading-none mb-3">
                              {card.stat}
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#444654] font-normal leading-snug max-w-[240px]">
                              {card.statLabel}
                            </p>
                          </div>

                          {/* Case Study Link */}
                          <div className="pt-6">
                            <button
                              type="button"
                              onClick={onOpenModal}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#191923] hover:opacity-75 transition-opacity group cursor-pointer"
                            >
                              <span>{card.linkText}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right Column: High-End Visual with Client Badge */}
                    <div className="sm:col-span-5 relative min-h-[220px] sm:min-h-[280px] rounded-2xl overflow-hidden group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={card.imageSrc}
                        alt={card.clientName}
                        className="w-full h-full object-cover brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Glassmorphic Client Pill */}
                      <div className="absolute bottom-3 left-3 right-3 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/40 flex items-center justify-between shadow-xs">
                        <span className="text-xs font-medium text-[#191923] truncate">
                          {card.clientName}
                        </span>
                        <span className="text-[10px] text-[#676879] font-normal uppercase tracking-wider ml-1">
                          {card.clientBadge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Carousel Controls (Infinite, always active) */}
        <div className="flex items-center justify-end gap-3 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous story"
            className="w-11 h-11 rounded-full border border-[#191923] text-[#191923] hover:bg-[#191923] hover:text-white transition-all duration-300 shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next story"
            className="w-11 h-11 rounded-full border border-[#191923] text-[#191923] hover:bg-[#191923] hover:text-white transition-all duration-300 shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
