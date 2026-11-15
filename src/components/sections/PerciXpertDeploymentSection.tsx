"use client";

import React from "react";
import { ArrowRight, Check, Sparkles, Activity } from "lucide-react";

interface PerciXpertDeploymentSectionProps {
  onOpenModal?: () => void;
}

export default function PerciXpertDeploymentSection({
  onOpenModal,
}: PerciXpertDeploymentSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading (Clean, light sans-serif, matching Monday.com) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-light text-[#191923] tracking-tight leading-tight mb-2.5">
            Built for every stage of the ERP lifecycle
          </h2>
          <p className="text-sm sm:text-base text-[#676879] max-w-xl mx-auto font-normal">
            Two specialized deployment modules used by Percipere for greenfield rollouts and live system audits.
          </p>
        </div>

        {/* 2 Large Side-by-Side Cards (Monday.com exact layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1100px] mx-auto">
          {/* ============================================================== */}
          {/* CARD 1: Greenfield Implementation Module */}
          {/* ============================================================== */}
          <div className="bg-[#F6F7FA] rounded-[28px] p-6 sm:p-8 border border-[#EBECEF] flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="text-center mb-5">
                <h3 className="font-sans text-xl sm:text-2xl font-normal text-[#191923] tracking-tight mb-1">
                  Greenfield Implementation Module
                </h3>
                <p className="text-xs text-[#787885] font-normal">
                  Built for Cloud ERP implementations from the ground up
                </p>
              </div>

              {/* Pastel Sky-Blue Visual Canvas */}
              <div className="bg-[#BED6FE] rounded-[20px] h-[250px] sm:h-[270px] relative flex items-center justify-center overflow-hidden mb-6 shadow-inner select-none">
                {/* Floating Badge on Left */}
                <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_6px_20px_rgba(0,115,234,0.18)] flex items-center justify-center border border-white/80 z-10">
                  <Sparkles className="w-4 h-4 text-[#0073EA]" />
                </div>

                {/* Floating Greenfield Activate Steps Card */}
                <div className="w-[230px] sm:w-[250px] bg-white rounded-xl shadow-[0_16px_36px_rgba(20,40,90,0.14)] p-3.5 sm:p-4 border border-slate-100 text-left relative z-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-[#0073EA] font-medium uppercase tracking-wider">
                      Greenfield Module
                    </span>
                    <span className="text-[9px] bg-blue-50 text-[#0073EA] font-semibold px-2 py-0.5 rounded-full">
                      AI-Enabled
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#191923] mb-2.5">
                    ERP Activate Methodology
                  </div>

                  {/* Clean 5-Stage Stepper */}
                  <div className="space-y-1 text-[10px]">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 text-[#787885]">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-500 text-[8px] font-semibold flex items-center justify-center">1</span>
                      <span>Discover &amp; Strategy</span>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-0.5 text-[#787885]">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-500 text-[8px] font-semibold flex items-center justify-center">2</span>
                      <span>Prepare  AS-IS Scope</span>
                    </div>

                    {/* Active Explore Step */}
                    <div className="flex items-center gap-2 px-2 py-1 bg-[#0073EA] text-white rounded-md shadow-xs font-medium">
                      <span className="w-3.5 h-3.5 rounded-full bg-white/20 text-white text-[8px] font-bold flex items-center justify-center">3</span>
                      <span>Explore  FIT-GAP Design</span>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-0.5 text-[#787885]">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-500 text-[8px] font-semibold flex items-center justify-center">4</span>
                      <span>Realize  Build &amp; Test</span>
                    </div>

                    <div className="flex items-center gap-2 px-2 py-0.5 text-[#787885]">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-100 text-slate-500 text-[8px] font-semibold flex items-center justify-center">5</span>
                      <span>Deploy  Go-Live</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Bottom Right Badge */}
                <div className="absolute bottom-3 right-3 sm:right-6 bg-white rounded-full py-1 px-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-1.5 border border-slate-100 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00CA72] animate-pulse" />
                  <span className="text-[10px] font-medium text-[#191923]">
                    Solution Verified
                  </span>
                </div>
              </div>

              {/* 3 Structured, Uncluttered Feature Points */}
              <div className="space-y-3.5">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#191923] mb-0.5">
                    Automated ERP Activate Phases
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#676879] leading-relaxed">
                    Automates scoping, AS-IS mapping, and FIT-GAP analysis to replace manual workshop notes with verified system logic.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#191923] mb-0.5">
                    End-to-End Requirements Traceability
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#676879] leading-relaxed">
                    Workshop audio and transcripts are mathematically traced through to the final Solution Design Document.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#191923] mb-0.5">
                    Zero Rework Foundation
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#676879] leading-relaxed">
                    Prevents scope creep upfront by matching business requirements directly to standard Clean Core scope.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="mt-6 pt-3 border-t border-[#EAECEF]/60">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#191923] hover:text-[#FF00B7] transition-colors group cursor-pointer"
              >
                <span>Explore greenfield module</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ============================================================== */}
          {/* CARD 2: System Audit Module */}
          {/* ============================================================== */}
          <div className="bg-[#F6F7FA] rounded-[28px] p-6 sm:p-8 border border-[#EBECEF] flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="text-center mb-5">
                <h3 className="font-sans text-xl sm:text-2xl font-normal text-[#191923] tracking-tight mb-1">
                  System Audit Module
                </h3>
                <p className="text-xs text-[#787885] font-normal">
                  Built for AMS transitions, handovers &amp; in-flight recovery
                </p>
              </div>

              {/* Pastel Lilac Visual Canvas */}
              <div className="bg-[#E5DCFD] rounded-[20px] h-[250px] sm:h-[270px] relative flex items-center justify-center overflow-hidden mb-6 shadow-inner select-none">
                {/* Floating System Audit Card */}
                <div className="w-[230px] sm:w-[250px] bg-white rounded-xl shadow-[0_16px_36px_rgba(40,20,80,0.14)] p-3.5 sm:p-4 border border-purple-50 text-left relative z-0">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-[#784DF0] font-medium uppercase tracking-wider">
                      Audit Module
                    </span>
                    <span className="bg-[#784DF0] text-white text-[8px] font-medium px-2 py-0.5 rounded shadow-xs">
                      Live Scan
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#191923] mb-2.5">
                    Live System Intelligence
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-[#784DF0] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-white stroke-[3]" />
                      </div>
                      <span className="text-[#22232E]">Connects to live ERP Cloud</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-[#784DF0] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-white stroke-[3]" />
                      </div>
                      <span className="text-[#22232E]">Extracts all customisations</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-[#784DF0] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-white stroke-[3]" />
                      </div>
                      <span className="text-[#22232E]">Maps to original requirements</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-[#FF007A] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-white stroke-[3]" />
                      </div>
                      <span className="text-[#22232E]">Surfaces undocumented gaps</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-[#00CA72] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-white stroke-[3]" />
                      </div>
                      <span className="text-[#22232E] font-medium">100% verified baseline</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Bottom Left Badge */}
                <div className="absolute bottom-3 left-3 sm:left-6 bg-white rounded-lg py-1 px-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-1.5 border border-slate-100 z-10">
                  <Activity className="w-3 h-3 text-[#784DF0]" />
                  <span className="text-[10px] font-medium text-[#191923]">
                    Pre-Contract Truth
                  </span>
                </div>
              </div>

              {/* 3 Structured, Uncluttered Feature Points */}
              <div className="space-y-3.5">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#191923] mb-0.5">
                    De-Risk AMS Transitions &amp; Recovery
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#676879] leading-relaxed">
                    Closes visibility gaps during partner handovers where legacy documentation is missing or outdated.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#191923] mb-0.5">
                    Direct Live Environment Extraction
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#676879] leading-relaxed">
                    Logs securely into your live ERP tenant to extract configurations, custom code, and undocumented Z-tables.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#191923] mb-0.5">
                    Day-One Technical Truth
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#676879] leading-relaxed">
                    Gives incoming support teams a verified picture of system realities before contracts begin.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="mt-6 pt-3 border-t border-[#EAECEF]/60">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#191923] hover:text-[#FF00B7] transition-colors group cursor-pointer"
              >
                <span>Explore system audit module</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
