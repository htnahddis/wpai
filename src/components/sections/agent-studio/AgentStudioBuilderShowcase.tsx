"use client";

import React, { useState } from "react";
import { BUILDER_PRESETS } from "@/data/agentStudio.data";
import {
  Database,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface AgentStudioBuilderShowcaseProps {
  onOpenModal?: () => void;
}

export default function AgentStudioBuilderShowcase({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onOpenModal,
}: AgentStudioBuilderShowcaseProps) {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const currentPreset = BUILDER_PRESETS[activePresetIndex];
  const [approvalRequested, setApprovalRequested] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E9E9EF]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F3FB] text-[#1B1466] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2.5">
            NO-CODE VISUAL CANVAS
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-[#191923] leading-tight">
            Build custom enterprise agents in minutes
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#777783] max-w-xl mx-auto leading-relaxed">
            Configure autonomous teammates by describing their goals, pointing them to your SAP tables
            and internal data sources, and enforcing human-in-the-loop guardrails.
          </p>

          {/* Preset Selector Tabs */}
          <div className="mt-7 inline-flex p-1 rounded-full bg-[#F4F3FB] border border-[#E2E1F0] max-w-full overflow-x-auto">
            {BUILDER_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  setActivePresetIndex(idx);
                  setApprovalRequested(false);
                }}
                className={`text-xs font-medium px-4 sm:px-5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activePresetIndex === idx
                    ? "bg-[#1B1466] text-white shadow-xs"
                    : "text-[#777783] hover:text-[#191923]"
                }`}
              >
                {preset.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Builder Studio 2-Column Split: Config Left, Live Execution Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Visual Agent Canvas (Step 1, 2, 3) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Step 1: Prompt & Persona */}
            <div className="bg-[#FAFAFC] rounded-2xl p-5 border border-[#E9E9EF]">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1B1466] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    1
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#191923]">
                    Define Role &amp; Persona Instructions
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#6161FF] bg-[#F0EFFF] px-2 py-0.5 rounded-md">
                  Persona: {currentPreset.role}
                </span>
              </div>
              <div className="bg-white rounded-xl p-3.5 border border-[#E9E9EF] text-xs text-[#191923] font-mono leading-relaxed">
                &ldquo;{currentPreset.promptDescription}&rdquo;
              </div>
            </div>

            {/* Step 2: Connected Data & Systems */}
            <div className="bg-[#FAFAFC] rounded-2xl p-5 border border-[#E9E9EF]">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1B1466] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    2
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#191923]">
                    Connect Knowledge &amp; SAP Systems
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#00CA72] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  {currentPreset.dataSources.length} Connected Sources
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentPreset.dataSources.map((source, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-2.5 border border-[#E9E9EF] flex items-center gap-2 text-xs font-medium text-[#191923]"
                  >
                    <Database className="w-3.5 h-3.5 text-[#6161FF] shrink-0" />
                    <span className="truncate">{source}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Guardrails & Autonomous Actions */}
            <div className="bg-[#FAFAFC] rounded-2xl p-5 border border-[#E9E9EF]">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1B1466] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                    3
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-[#191923]">
                    Guardrails &amp; Human Approval Gates
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#FF00B7] bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
                  Clean Core Active
                </span>
              </div>
              <div className="space-y-1.5">
                {currentPreset.guardrails.map((g, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-2.5 border border-[#E9E9EF] flex items-start gap-2 text-xs text-[#555567]"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#00CA72] shrink-0 mt-0.5" />
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulated Execution Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E1F0] shadow-sm sticky top-24">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#EAE9F8]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#6161FF] text-white flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-semibold text-[#191923]">
                    {currentPreset.name}
                  </h4>
                  <span className="text-[10px] text-[#777783] font-mono">Status: Live In Sandbox</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                Listening
              </span>
            </div>

            {/* Trigger Simulation Header */}
            <div className="mt-4 p-2.5 rounded-xl bg-white border border-[#E9E9EF] text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#777783] block mb-0.5">
                Trigger Event
              </span>
              <p className="font-semibold text-[#191923]">
                {currentPreset.simulation.triggerEvent}
              </p>
            </div>

            {/* Reasoning Steps */}
            <div className="mt-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#777783] block">
                Agent Reasoning Trace
              </span>
              {currentPreset.simulation.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#F0F0F4] text-xs text-[#191923]"
                >
                  <div className="flex items-center gap-2 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00CA72] shrink-0" />
                    <span className="truncate">{step.text}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8C8CA1] shrink-0">0.3s</span>
                </div>
              ))}
            </div>

            {/* Output Briefing Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#F0EFFF] border border-[#DCDAF7] text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1B1466]">
                  {currentPreset.simulation.outputTitle}
                </span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-full text-[#6161FF] font-medium border border-[#D5D4E6]">
                  Confidence: 99.2%
                </span>
              </div>
              <p className="text-[#444458] leading-relaxed text-[11px]">
                {currentPreset.simulation.outputBody}
              </p>
            </div>

            {/* Human Gate Action */}
            <div className="mt-5 pt-3.5 border-t border-[#EAE9F8] flex items-center justify-between">
              <span className="text-[11px] text-[#777783]">
                {approvalRequested ? "Approved by Lead" : "Requires Delivery Lead sign-off"}
              </span>
              <button
                type="button"
                onClick={() => setApprovalRequested(!approvalRequested)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  approvalRequested
                    ? "bg-emerald-600 text-white"
                    : "bg-[#1B1466] hover:bg-[#140F4D] text-white"
                }`}
              >
                {approvalRequested ? "Approved ✓" : "Review & Approve"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
