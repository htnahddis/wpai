"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface HomepageHeroSectionProps {
  onOpenModal: () => void;
}

export default function HomepageHeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="max-width">
      <div data-nav-cta-sentinel="" className="cta-container pt-14 sm:pt-20 pb-10 sm:pb-14">
        <div className="text-container-large-center">
          {/* Main Headline with Magenta & Indigo Keyword Accents - No eyebrows */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-[72px] font-normal leading-[1.04] tracking-tight text-[#191923] text-center max-w-4xl mx-auto">
            Modernising <span className="text-[#FF00B7]">ERP</span>.<br />
            Automating <span className="text-[#1B1466]">What Matters</span>.
          </h1>

          {/* Subtext and Action Buttons */}
          <div className="text-button-center mt-6">
            <p className="font-sans text-base sm:text-xl text-[#777783] text-center max-w-2xl mx-auto leading-relaxed font-normal">
              SAP Gold Partner delivering Cloud ERP implementation, intelligent automation, and managed services for growing and complex enterprises worldwide.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={onOpenModal}
                className="button-primary inline-flex items-center gap-2.5 text-sm sm:text-base px-8 py-3.5 shadow-sm bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium transition-all hover:scale-[1.02]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#offerings"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium py-3.5 px-7 rounded-full border border-[#E9E9EF] text-[#191923] hover:bg-[#F8F8FA] transition-colors"
              >
                <span>Explore Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
