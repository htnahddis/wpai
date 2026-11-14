"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, ArrowRight, Check, Sparkles, Layers, Shield, Database } from "lucide-react";

export interface StepItem {
  key: string;
  title: string;
  iconAlt?: string;
  body: string;
  tag: string;
  metric: string;
  preview: React.ReactNode;
}

interface ProductHeroStepsProps {
  steps?: StepItem[];
}

const DEFAULT_STEPS: StepItem[] = [
  {
    key: "capture",
    title: "1. Capture discovery without missing a detail",
    body: "AI agents join workshops, transcribe conversations live, and surface historical SAP best practices to guide requirements in real time.",
    tag: "DISCOVERY AGENT",
    metric: "0% Context Loss",
    preview: (
      <div className="p-6 bg-[#0E0F14] text-white rounded-xl border border-[#242530] h-full flex flex-col justify-between font-mono text-xs">
        <div className="flex justify-between items-center text-[#8E8E93] pb-3 border-b border-[#23242B]">
          <span>LIVE WORKSHOP TRANSCRIPT</span>
          <span className="text-[#10B981] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            ACTIVE
          </span>
        </div>
        <div className="my-auto space-y-3 py-4">
          <div className="p-3 bg-[#161722] rounded-lg border border-[#2B2C3B]">
            <div className="text-[#FF4400] text-[11px] mb-1">Speaker 1 (VP Supply Chain):</div>
            <div className="text-white text-[13px] font-sans">
              "We need automated cross-company stock transport orders with EDI 856 ASN triggers for European DCs."
            </div>
          </div>
          <div className="p-3 bg-[#10B981]/10 rounded-lg border border-[#10B981]/30 text-[#10B981]">
            <div className="text-[10px] font-bold tracking-wider mb-0.5">AGENT MATCH:</div>
            <div>SAP Best Practice Scope Item BME (Cross-Company Stock Transport Order)</div>
          </div>
        </div>
        <div className="pt-3 border-t border-[#23242B] flex justify-between text-[#8E8E93] text-[11px]">
          <span>Traceability Key: REQ-MM-104</span>
          <span>Validated against Clean Core</span>
        </div>
      </div>
    ),
  },
  {
    key: "blueprint",
    title: "2. Generate living blueprints in minutes",
    body: "Turn raw workshop inputs into comprehensive, audit-ready Solution Design Documents (SDD), business process flows, and LTMC migration specs instantly.",
    tag: "SPECIFICATION ENGINE",
    metric: "4.2s Generation",
    preview: (
      <div className="p-6 bg-[#0E0F14] text-white rounded-xl border border-[#242530] h-full flex flex-col justify-between font-mono text-xs">
        <div className="flex justify-between items-center text-[#8E8E93] pb-3 border-b border-[#23242B]">
          <span>ARTIFACT SYNTHESIS</span>
          <span className="text-[#3B82F6]">SDD GENERATED</span>
        </div>
        <div className="my-auto space-y-2 py-4">
          <div className="p-3 bg-[#161722] rounded-lg border border-[#2B2C3B] flex items-center justify-between">
            <span className="text-white font-sans font-medium text-[13px]">Functional Spec: SDD-MM-STO.docx</span>
            <span className="text-[#10B981] text-[11px]">100% Complete</span>
          </div>
          <div className="p-3 bg-[#161722] rounded-lg border border-[#2B2C3B] flex items-center justify-between">
            <span className="text-white font-sans font-medium text-[13px]">LTMC Data Migration Mapping</span>
            <span className="text-[#10B981] text-[11px]">Validated</span>
          </div>
          <div className="p-3 bg-[#161722] rounded-lg border border-[#2B2C3B] flex items-center justify-between">
            <span className="text-white font-sans font-medium text-[13px]">Jira Epic &amp; User Stories</span>
            <span className="text-[#3B82F6] text-[11px]">18 Stories Synced</span>
          </div>
        </div>
        <div className="pt-3 border-t border-[#23242B] flex justify-between text-[#8E8E93] text-[11px]">
          <span>Signoff Workflow: Ready</span>
          <span>Zero Manual Transcription</span>
        </div>
      </div>
    ),
  },
  {
    key: "handoff",
    title: "3. Handoff to delivery with 100% shared context",
    body: "Pre-sales commitments, customer constraints, and technical design decisions stay perpetually linked directly to your agile delivery sprint backlogs.",
    tag: "UNIFIED HUB",
    metric: "Zero Scope Rework",
    preview: (
      <div className="p-6 bg-[#0E0F14] text-white rounded-xl border border-[#242530] h-full flex flex-col justify-between font-mono text-xs">
        <div className="flex justify-between items-center text-[#8E8E93] pb-3 border-b border-[#23242B]">
          <span>CONTINUOUS DIGITAL THREAD</span>
          <span className="text-[#10B981]">CONNECTED</span>
        </div>
        <div className="my-auto space-y-3 py-4">
          <div className="p-3 bg-[#161722] rounded-lg border border-[#2B2C3B]">
            <div className="text-[#8E8E93] text-[11px] mb-1">Scope Item: #48 (S/4HANA Finance)</div>
            <div className="text-white font-sans text-[13px]">
              "Originating SOW Agreement &rarr; Architecture Blueprint &rarr; Sprint 03 Task #104"
            </div>
          </div>
          <div className="p-3 bg-[#FF4400]/10 rounded-lg border border-[#FF4400]/30 text-[#FF4400]">
            <div className="text-[10px] font-bold tracking-wider mb-0.5">SCOPE GUARD:</div>
            <div>Any delta between SOW and Sprint backlog triggers proactive risk notification.</div>
          </div>
        </div>
        <div className="pt-3 border-t border-[#23242B] flex justify-between text-[#8E8E93] text-[11px]">
          <span>Traceability: Guaranteed</span>
          <span>SOW Variance: 0.0%</span>
        </div>
      </div>
    ),
  },
];

export default function ProductHeroSteps({ steps = DEFAULT_STEPS }: ProductHeroStepsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    const timer = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
      setRun((prev) => prev + 1);
    }, 10000); // 10s auto-advancing as in Auctor module 14377

    return () => clearTimeout(timer);
  }, [activeIdx, run, steps.length]);

  const handleToggle = (idx: number) => {
    setActiveIdx(idx);
    setRun((prev) => prev + 1);
  };

  return (
    <div className="product-hero max-w-[1240px] mx-auto px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Accordion Steps */}
        <div className="lg:col-span-6 text-container-column narrow space-y-8">
          <div className="text-container-title auto-width space-y-3">
            <div className="technical text-[11px] font-mono uppercase tracking-widest text-[#737373]">
              What Percipere Does
            </div>
            <h2 className="heading-2 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#171717] leading-tight">
              A collaborative system for implementation work, built for the full lifecycle.
            </h2>
          </div>

          <div className="accordion-group space-y-4">
            {steps.map((step, idx) => {
              const isOpen = idx === activeIdx;
              return (
                <div key={step.key} className="accordion border-b border-[#EBEBED] pb-4">
                  {/* Accordion Progress Bar */}
                  <div className="accordion-progress h-[2px] w-full bg-[#EBEBED] rounded-full overflow-hidden mb-3">
                    <div
                      className={`accordion-progress-fill h-full bg-[#171717] ${
                        isOpen ? "filling" : ""
                      }`}
                      key={isOpen ? run : "idle"}
                      style={{ width: isOpen ? undefined : idx < activeIdx ? "100%" : "0%" }}
                    ></div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => handleToggle(idx)}
                    className="dropdown-toggle w-dropdown-toggle w-full flex items-center justify-between text-left py-2 group"
                  >
                    <div className="heading-4-skandia font-serif text-xl sm:text-2xl font-normal text-[#171717] group-hover:text-[#FF4400] transition-colors">
                      {step.title}
                    </div>
                    <div className="text-[#737373] p-1 rounded-full group-hover:bg-[#F5F5F7] transition-colors">
                      {isOpen ? <Minus className="w-5 h-5 text-[#171717]" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="accordion-content pt-2 pb-4 text-[#737373] text-base leading-relaxed animate-in fade-in duration-200">
                      <div className="body-text-1 top-padding">{step.body}</div>
                      {/* Mobile video/preview fallback */}
                      <div className="lg:hidden mt-4 pt-2">
                        {step.preview}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Synchronized High-Fidelity Active Preview Card */}
        <div className="hidden lg:block lg:col-span-6 image-container">
          <div className="mux-media-slot aspect-square rounded-2xl overflow-hidden border border-[#E5E5E8] shadow-xl p-2 bg-[#090A0E]">
            {steps[activeIdx]?.preview}
          </div>
        </div>
      </div>
    </div>
  );
}

