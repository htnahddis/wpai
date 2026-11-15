"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PerciVerseOrbitalEcosystem from "@/components/PerciVerseOrbitalEcosystem";

interface HomepageHeroSectionProps {
  onOpenModal: () => void;
}

export default function HomepageHeroSection({ onOpenModal }: HomepageHeroSectionProps) {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center max-w-[1240px] mx-auto px-6 py-6 lg:py-0">
      <div data-nav-cta-sentinel="" className="w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Text Content (5 columns for ample copy width) */}
          <div className="lg:col-span-5 text-left py-4">
            {/* Main Headline with Magenta & Indigo Keyword Accents */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-normal leading-[1.08] tracking-tight text-[#191923] max-w-xl">
              Modernising <span className="text-[#FF00B7]">ERP</span>.<br />
              Automating <span className="text-[#1B1466]">What Matters</span>.
            </h1>

            {/* Subtext and Action Buttons */}
            <div className="mt-6 sm:mt-8">
              <p className="font-sans text-base sm:text-lg text-[#777783] max-w-lg leading-relaxed font-normal">
                SAP Gold Partner delivering Cloud ERP implementation, intelligent automation, and managed services for growing and complex enterprises worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="button-primary inline-flex items-center gap-2.5 text-sm sm:text-base px-8 py-3.5 shadow-sm bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium transition-all hover:scale-[1.02] cursor-pointer"
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

          {/* Right: Enlarged PerciVerse Orbital Ecosystem (7 columns for expansive visual scale) */}
          <div className="hidden lg:flex lg:col-span-7 items-center justify-center overflow-visible">
            <div className="relative w-full h-[500px] lg:h-[560px] xl:h-[600px] flex items-center justify-center overflow-visible">
              <PerciVerseOrbitalEcosystem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
