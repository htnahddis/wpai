"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface AgentStudioCtaProps {
  onOpenModal?: () => void;
}

export default function AgentStudioCta({ onOpenModal }: AgentStudioCtaProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#1B1466] p-8 sm:p-14 text-center text-white shadow-xl">

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-wider uppercase mb-5 text-white">
              <span>EARLY ACCESS AVAILABLE NOW</span>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-[42px] font-normal tracking-tight text-white leading-tight">
              Expand your enterprise capabilities with Agent Studio
            </h2>

            <p className="mt-3.5 text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed font-normal">
              Deploy pre-built autonomous agents or design custom multi-step specialists tailored to
              your enterprise SAP processes in minutes.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full sm:w-auto text-xs sm:text-sm font-medium py-3 px-7 rounded-full bg-white text-[#1B1466] hover:bg-[#F4F3FB] transition-all shadow-md shadow-black/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free with Agent Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={onOpenModal}
                className="w-full sm:w-auto text-xs sm:text-sm font-medium py-3 px-7 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Architecture Demo</span>
              </button>
            </div>

            {/* Micro assurances */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-[11px] text-white/70 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero model training on customer data</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>No code required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
