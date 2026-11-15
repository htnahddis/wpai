"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface PerciXpertPartnerAdvantageSectionProps {
  onOpenModal?: () => void;
}

type AudienceMode = "enterprise" | "partners";

interface CompactComparisonItem {
  phase: string;
  traditional: string;
  percipere: string;
}

const ENTERPRISE_COMPARISONS: CompactComparisonItem[] = [
  {
    phase: "Scope & Discovery",
    traditional: "6–10 weeks of manual notes & guesswork",
    percipere: "3–5 weeks, system-generated specs",
  },
  {
    phase: "Scope Creep & Budget",
    traditional: "10–25% budget overruns from missed scope",
    percipere: "Zero rework leakage with Clean Core",
  },
  {
    phase: "Architecture Blueprint",
    traditional: "Static 400-page obsolete Word documents",
    percipere: "Living, auditable digital twin",
  },
  {
    phase: "Support Handover",
    traditional: "8–12 weeks of shadowing with lost context",
    percipere: "Day-one verified system baseline",
  },
];

const PARTNER_COMPARISONS: CompactComparisonItem[] = [
  {
    phase: "RFP Scoping Velocity",
    traditional: "6–10 weeks manual RFP estimation",
    percipere: "3–5 weeks automated RFP scoping",
  },
  {
    phase: "Margin Protection",
    traditional: "Margin erosion from unbilled rework",
    percipere: "Protected fixed-price project margins",
  },
  {
    phase: "Documentation Standard",
    traditional: "Varies widely by consultant seniority",
    percipere: "Standardized, audit-ready blueprints",
  },
  {
    phase: "AMS Transition",
    traditional: "8–12 week manual AMS onboarding",
    percipere: "Automated live tenant system audit",
  },
];

export default function PerciXpertPartnerAdvantageSection({
  onOpenModal,
}: PerciXpertPartnerAdvantageSectionProps) {
  const [mode, setMode] = useState<AudienceMode>("enterprise");
  const data = mode === "enterprise" ? ENTERPRISE_COMPARISONS : PARTNER_COMPARISONS;

  return (
    <section className="py-14 sm:py-18 bg-[#FAFAFC] border-b border-[#F0F0F4]">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#191923] tracking-tight leading-tight">
              Traditional consulting vs. Percipere
            </h2>
            <p className="text-xs sm:text-sm text-[#777783] mt-1 font-normal">
              How PerciXpert replaces hourly guesswork with system-driven certainty.
            </p>
          </div>

          {/* Minimalist Switcher */}
          <div className="inline-flex p-1 bg-[#EBEBEF] rounded-full self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setMode("enterprise")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                mode === "enterprise"
                  ? "bg-white text-[#191923] shadow-xs"
                  : "text-[#777783] hover:text-[#191923]"
              }`}
            >
              For Enterprise
            </button>
            <button
              type="button"
              onClick={() => setMode("partners")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                mode === "partners"
                  ? "bg-white text-[#191923] shadow-xs"
                  : "text-[#777783] hover:text-[#191923]"
              }`}
            >
              For Partners
            </button>
          </div>
        </div>

        {/* Compact Matrix (Desktop Table View) */}
        <div className="hidden sm:block bg-white rounded-2xl border border-[#E9E9EF] overflow-hidden shadow-xs">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#F8F8FA] border-b border-[#E9E9EF] text-[11px] font-medium text-[#777783] uppercase tracking-wider py-3 px-6">
            <div className="col-span-3">Phase</div>
            <div className="col-span-4">Traditional Consulting</div>
            <div className="col-span-5 text-[#191923] font-semibold">With Percipere &bull; Powered by PerciXpert</div>
          </div>

          {/* Compact Rows */}
          <div className="divide-y divide-[#F0F0F4]">
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center py-3.5 px-6 hover:bg-[#FAFAFC] transition-colors text-xs sm:text-[13px]"
              >
                {/* Phase */}
                <div className="col-span-3 pr-4 font-medium text-[#191923]">
                  {item.phase}
                </div>

                {/* Traditional */}
                <div className="col-span-4 pr-4 text-[#777783]">
                  {item.traditional}
                </div>

                {/* Percipere */}
                <div className="col-span-5 text-[#191923] font-medium">
                  {item.percipere}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-[#E9E9EF] shadow-xs space-y-2 text-xs"
            >
              <div className="font-medium text-[#191923] pb-1.5 border-b border-[#F0F0F4]">
                {item.phase}
              </div>
              <div className="text-[#777783]">
                <span className="text-[10px] uppercase text-[#9999A5] block">Traditional</span>
                {item.traditional}
              </div>
              <div className="text-[#191923] font-medium pt-1">
                <span className="text-[10px] uppercase text-[#191923] block">With Percipere</span>
                {item.percipere}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
