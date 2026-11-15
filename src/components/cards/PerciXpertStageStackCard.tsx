"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { PerciXpertStage } from "@/data/percixpert.data";
import PerciXpertStageVisual from "./PerciXpertStageVisual";

interface PerciXpertStageStackCardProps {
  stage: PerciXpertStage;
  index: number;
  total: number;
  onOpenModal?: () => void;
}

export default function PerciXpertStageStackCard({
  stage,
  index,
  total,
  onOpenModal,
}: PerciXpertStageStackCardProps) {
  return (
    <article
      data-stack-card
      style={{
        top: "88px",
        zIndex: index + 1,
        backgroundColor: stage.bgColor,
      }}
      className="stack-card sticky min-h-[380px] sm:min-h-[420px] max-w-[1040px] mx-auto rounded-[24px] sm:rounded-[28px] border border-black/[0.06] mb-6 sm:mb-8 overflow-hidden transition-all duration-300 origin-top shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-8 lg:p-10 w-full">
        {/* Left Column: Direct, Clean Headline & Copy (Zero Eyebrows, Zero AI Slop) */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black/[0.06] text-black font-medium text-[11px] mb-3">
            Stage {stage.num} &bull; {stage.name}
          </span>

          <h3 className="font-sans text-2xl sm:text-[28px] lg:text-[32px] font-medium tracking-tight text-black leading-[1.2] mb-3">
            {stage.headline}
          </h3>

          <p className="text-sm sm:text-[15px] text-black/70 font-normal leading-relaxed max-w-[36ch] mb-6">
            {stage.desc}
          </p>

          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-black hover:bg-black/85 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 cursor-pointer shadow-xs group"
          >
            <span>Get started</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Right Column: Distinct Architectural Diagram */}
        <div className="lg:col-span-7 w-full">
          <PerciXpertStageVisual
            visualType={stage.visualType}
            stageNum={stage.num}
          />
        </div>
      </div>
    </article>
  );
}
