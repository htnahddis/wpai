"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface LifecycleStage {
  step: string;
  title: string;
  phase?: string;
  description: string;
  outcome: string;
  tag?: string;
}

interface WorkflowTimelineProps {
  stages: LifecycleStage[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function WorkflowTimeline({
  stages,
  eyebrow,
  title,
  description,
}: WorkflowTimelineProps) {
  return (
    <div className="w-full">
      {(title || eyebrow) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {eyebrow && (
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 rounded-full mb-3 border border-blue-100/50">
              {eyebrow}
            </span>
          )}
          {title && (
            <h3 className="font-serif text-3xl sm:text-4xl text-[#292A2E] font-normal tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-base text-[#64676D] mt-3">{description}</p>
          )}
        </div>
      )}

      {/* Grid of Lifecycle stages with clean horizontal progression */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-[#E8E8E8] rounded-xl p-5 hover:border-blue-300 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-[#0D5CE5] px-2 py-0.5 bg-blue-50 rounded">
                  {stage.step}
                </span>
                {stage.phase && (
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#8A8D93]">
                    {stage.phase}
                  </span>
                )}
              </div>
              <h4 className="text-base font-semibold text-[#292A2E] mb-2">
                {stage.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#64676D] leading-relaxed mb-4">
                {stage.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#F0F0F0] mt-auto">
              <div className="flex items-start gap-1.5 text-xs text-[#292A2E] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] mt-0.5 shrink-0" />
                <span>
                  <strong className="text-[#101214]">Outcome:</strong> {stage.outcome}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
