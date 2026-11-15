"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ScopeTraceabilityVisual from "@/components/cards/showcase/ScopeTraceabilityVisual";
import CleanCoreMatrixVisual from "@/components/cards/showcase/CleanCoreMatrixVisual";
import IntegrationsHexVisual from "@/components/cards/showcase/IntegrationsHexVisual";
import { PERCIXPERT_SHOWCASE_ITEMS } from "@/data/percixpert.data";

interface PerciXpertProblemsSectionProps {
  onOpenModal?: () => void;
}

export default function PerciXpertProblemsSection({ onOpenModal }: PerciXpertProblemsSectionProps) {
  const [item1, item2, item3] = PERCIXPERT_SHOWCASE_ITEMS;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Centered Header & Pill CTA (Clear Problems & Solutions Framing) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#191923] tracking-tight leading-tight">
            The core problems in ERP delivery  solved by{" "}
            <span className="text-[#FF00B7]">PerciXpert</span>
          </h2>
          <p className="text-sm sm:text-base text-[#676879] mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            Eliminating the three critical failure points that cause scope creep, custom code debt, and go-live delays.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-7 py-2.5 bg-[#6161FF] hover:bg-[#4E4ED9] text-white text-sm font-medium rounded-full transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Columns: Visual Graphic + Title + Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center">
          {/* Column 1: Scope Traceability (Views) */}
          <div className="flex flex-col items-center">
            <ScopeTraceabilityVisual />
            <h3 className="font-sans text-xl font-medium text-[#191923] mt-4 mb-2 tracking-tight">
              {item1.title}
            </h3>
            <p className="text-sm text-[#777783] leading-relaxed max-w-xs mx-auto font-normal">
              {item1.desc}
            </p>
          </div>

          {/* Column 2: Clean Core Fit (Workload) */}
          <div className="flex flex-col items-center">
            <CleanCoreMatrixVisual />
            <h3 className="font-sans text-xl font-medium text-[#191923] mt-4 mb-2 tracking-tight">
              {item2.title}
            </h3>
            <p className="text-sm text-[#777783] leading-relaxed max-w-xs mx-auto font-normal">
              {item2.desc}
            </p>
          </div>

          {/* Column 3: Integrations */}
          <div className="flex flex-col items-center">
            <IntegrationsHexVisual />
            <h3 className="font-sans text-xl font-medium text-[#191923] mt-4 mb-2 tracking-tight">
              {item3.title}
            </h3>
            <p className="text-sm text-[#777783] leading-relaxed max-w-xs mx-auto font-normal">
              {item3.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
