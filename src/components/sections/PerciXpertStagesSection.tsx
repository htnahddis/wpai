"use client";

import React, { useEffect } from "react";
import { PERCIXPERT_STAGES } from "@/data/percixpert.data";
import PerciXpertStageStackCard from "@/components/cards/PerciXpertStageStackCard";

interface PerciXpertStagesSectionProps {
  onOpenModal?: () => void;
}

export default function PerciXpertStagesSection({
  onOpenModal,
}: PerciXpertStagesSectionProps) {
  // Monday.com's signature scroll-stack scaling and dimming effect
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-stack-card]"));
    if (cards.length < 2) return;

    let ticking = false;

    function update() {
      ticking = false;
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        cards.forEach((card) => {
          card.style.transform = "";
          card.style.opacity = "";
        });
        return;
      }

      for (let i = 0; i < cards.length - 1; i++) {
        const current = cards[i];
        const next = cards[i + 1];
        if (!current || !next) continue;

        const nextRect = next.getBoundingClientRect();
        const stickyTop = parseFloat(window.getComputedStyle(next).top) || 88;
        const distance = window.innerHeight * 0.6;
        const raw = 1 - (nextRect.top - stickyTop) / distance;
        const progress = Math.min(Math.max(raw, 0), 1);

        current.style.transform = `scale(${1 - progress * 0.04})`;
        current.style.opacity = String(1 - progress * 0.3);
      }
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="stages" className="py-16 sm:py-20 bg-white ">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading (Clean, concise) */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="font-sans text-3xl sm:text-4xl font-medium tracking-tight text-black leading-tight mb-2.5">
            How Percipere executes your ERP delivery with{" "}
            <span className="text-[#FF00B7]">PerciXpert</span>
          </h2>
          <p className="text-sm sm:text-base text-[#676879] leading-relaxed max-w-lg mx-auto font-normal">
            Seven automated stages converting complex ERP milestones into verified, predictable progress.
          </p>
        </div>

        {/* Scroll-Stacking Cards Deck */}
        <div className="relative stack-cards">
          {PERCIXPERT_STAGES.map((stage, index) => (
            <PerciXpertStageStackCard
              key={stage.num}
              stage={stage}
              index={index}
              total={PERCIXPERT_STAGES.length}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
