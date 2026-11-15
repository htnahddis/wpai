"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

interface AgentStudioImpactProps {
  onOpenModal?: () => void;
}

export default function AgentStudioImpact({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onOpenModal,
}: AgentStudioImpactProps) {
  const metrics = [
    {
      value: "4.8x",
      label: "Faster Process Velocity",
      subtext: "End-to-end task completion reduced from days to minutes",
    },
    {
      value: "85%",
      label: "Repetitive Overhead Saved",
      subtext: "Manual data entry, follow-ups, and triage automated",
    },
    {
      value: "99.4%",
      label: "Decision Accuracy",
      subtext: "Deterministic guardrails eliminate hallucinations and drift",
    },
    {
      value: "100%",
      label: "Traceable Audit Trails",
      subtext: "Every reasoning step and system call permanently logged",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAFAFC] border border-[#E9E9EF] flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-normal tracking-tight text-[#191923] block mb-1.5">
                  {m.value}
                </span>
                <h4 className="font-sans text-sm font-semibold text-[#191923] mb-1">
                  {m.label}
                </h4>
                <p className="text-xs text-[#777783] leading-relaxed font-normal">
                  {m.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise System Telemetry Banner */}
        <div className="bg-[#FAF9FF] rounded-2xl p-6 sm:p-10 border border-[#E0DFF5] shadow-xs">
          <div className="max-w-3xl">
            <blockquote className="font-sans text-lg sm:text-xl text-[#191923] font-normal leading-relaxed tracking-tight">
              &ldquo;Deploying AI agents across enterprise PMO and delivery pipelines shifts organizational
              cadence from manual latency to real-time execution. Critical workflows that previously stalled
              waiting for multi-hop email approvals now resolve autonomously in seconds with complete Clean
              Core auditability.&rdquo;
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1B1466] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#FF00B7]" />
              </div>
              <div>
                <div className="font-semibold text-xs text-[#191923] font-mono uppercase tracking-wider">
                  Verified Enterprise Architecture Telemetry
                </div>
                <div className="text-[11px] text-[#777783]">
                  Validated across 50+ SAP S/4HANA Public Cloud and Greenfield Programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
