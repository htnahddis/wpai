"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface PerciXpertHeroSectionProps {
  onOpenModal: () => void;
}

export default function PerciXpertHeroSection({ onOpenModal }: PerciXpertHeroSectionProps) {
  return (
    <section className="w-full bg-white min-h-[calc(100dvh-64px)] flex items-center border-b border-[#E9E9EF] overflow-hidden py-10 lg:py-0">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 lg:py-12 w-full">
          {/* =========================================================================
              LEFT COLUMN: Concise, Self-Explanatory Product Value Proposition & CTA
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[50px] font-normal leading-[1.08] tracking-tight text-[#191923]">
              The AI engine for <br />
              <span className="text-[#FF00B7]">predictable</span> ERP delivery
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#777783] leading-relaxed max-w-md font-normal">
              Percipere&apos;s internal delivery engine. We automate scoping, generate verified blueprints, and eliminate rework across your ERP journey.
            </p>

            {/* CTA Buttons & Trust Line */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#6161FF] hover:bg-[#4E4ED9] text-white text-sm font-medium rounded-full transition-all shadow-md group hover:scale-[1.02]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Compact Video Blending with White Background
              ========================================================================= */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-[620px]">
              <video
                src="/percixpert_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-h-[380px] sm:max-h-[440px] h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
