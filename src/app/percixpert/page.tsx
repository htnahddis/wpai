"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, FileCheck, Layers, Database, ArrowUpRight, Check, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PerciXpertVideoExplainer from "@/components/PerciXpertVideoExplainer";
import ComparisonTable, { ComparisonRow } from "@/components/ComparisonTable";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function PerciXpertPage() {
  const [modalOpen, setModalOpen] = useState(false);

  // Lifecycle 7 stages (Rocketlane style)
  const lifecycleStages = [
    {
      num: "01",
      name: "Requirements",
      phase: "Prepare",
      desc: "Converts workshop inputs into a structured, traceable requirement set aligned with SAP Activate.",
      uiSnippet: "REQ-0192: 100% Traceability",
      outcome: "Eliminates change-request creep; build matches exact requirements.",
    },
    {
      num: "02",
      name: "AS-IS Discovery",
      phase: "Prepare",
      desc: "Captures operational reality through discussion-driven baseline discovery workshops.",
      uiSnippet: "Baseline: 87 Active Workflows",
      outcome: "Surfaces hidden legacy customizations and undocumented decisions early.",
    },
    {
      num: "03",
      name: "FIT-GAP & Solutions",
      phase: "Explore",
      desc: "Evaluates every requirement against the full SAP scope item library for full fit, partial fit, or gap.",
      uiSnippet: "Full Fit / Partial / Blueprint",
      outcome: "Consultants enter Realize with a validated, proven solution blueprint.",
    },
    {
      num: "04",
      name: "Data Migration",
      phase: "Realize",
      desc: "AI analyzes legacy data schemas and automatically maps them into LTMC-ready download packages.",
      uiSnippet: "Legacy → S/4 LTMC Schema",
      outcome: "Dramatic reduction in extraction errors and post-go-live data rework.",
    },
    {
      num: "05",
      name: "Integration Mapping",
      phase: "Realize",
      desc: "Performs first-level AI mapping of third-party systems against standard SAP Business APIs.",
      uiSnippet: "Business API Simulation: 200 OK",
      outcome: "Verified API starting point before technical developer allocation.",
    },
    {
      num: "06",
      name: "Solution Documentation",
      phase: "AMS Handover",
      desc: "Automatically compiles a comprehensive, SAP-compliant Solution Design Document (SDD).",
      uiSnippet: "Auto-Generated SDD v1.0",
      outcome: "A permanent, auditable blueprint reflecting the actual system build.",
    },
    {
      num: "07",
      name: "AMS Transition",
      phase: "AMS Handover",
      desc: "Structured, AI-mapped system view for seamless transition to Application Managed Services.",
      uiSnippet: "Handover: 8-12 wks → Days",
      outcome: "Zero knowledge loss when project implementation consultants roll off.",
    },
  ];

  // Comparison metrics (Ramp style)
  const comparisonRows: ComparisonRow[] = [
    {
      aspect: "Scope & Prepare/Explore Phase",
      traditional: "6–10 weeks, manual notes, partial accuracy",
      percipere: "3–5 weeks, system-validated traceable outputs",
    },
    {
      aspect: "Change Request Exposure",
      traditional: "10–25% cost creep originating before configuration",
      percipere: "Structurally reduced through early requirement precision",
    },
    {
      aspect: "Solution Documentation (SDD)",
      traditional: "Partial, outdated, dependent on individual memory",
      percipere: "Complete, auditable, system-generated record",
    },
    {
      aspect: "AMS Support Onboarding",
      traditional: "8–12 weeks of consultant shadowing and knowledge gaps",
      percipere: "Significantly accelerated into days with full system context",
    },
  ];

  // FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "How does AI reduce SAP implementation risks?",
      answer:
        "PerciXpert uses AI to automate discovery, requirement structuring, and legacy schema mapping, eliminating human error from the earliest workshops. This ensures the foundational implementation blueprint is grounded in system facts rather than subjective assumptions.",
    },
    {
      question: "Can PerciXpert help with SAP project recovery?",
      answer:
        "Yes. If an in-flight implementation is suffering from scope drift, delay, or rework, PerciXpert's System Audit Module inspects the live environment to surface gaps between requirements and actual configurations, stabilizing delivery roadmaps.",
    },
    {
      question: "Which SAP deployments does PerciXpert support?",
      answer:
        "PerciXpert is built specifically for SAP S/4HANA Public Cloud implementations — including greenfield migrations from legacy ERPs. The System Audit Module also supports AMS transitions and in-flight recovery on Public Cloud environments.",
    },
    {
      question: "What makes PerciXpert different from standard SAP tooling?",
      answer:
        "SAP does not provide tooling that automates the Prepare and Explore phases of the SAP Activate methodology. PerciXpert fills this critical void — structuring requirements, capturing AS-IS baselines, executing FIT-GAP analysis against the complete scope library, and generating Solution Design Documents automatically.",
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION A: HERO — Reference Linear product hero + Auctor typography */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-20 border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0D5CE5] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5CE5]"></span>
              AI-POWERED SAP DELIVERY ENGINE
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-[#292A2E] tracking-tight">
              Make every SAP implementation more predictable.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed text-balance">
              PerciXpert replaces manual assumptions with AI-driven intelligence across the SAP project lifecycle — from the first workshop to go-live.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-sm font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle inline-flex items-center gap-2"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#lifecycle"
                className="px-6 py-3 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-sm font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
              >
                Explore 7 Implementation Stages
              </a>
            </div>
          </div>

          {/* Primary Product Explainer Video Component directly below hero text */}
          <div className="mt-8">
            <PerciXpertVideoExplainer />
          </div>
        </div>
      </section>

      {/* SECTION B: THE PROBLEM — Reference Ramp outcome-led layout */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Big Statistic Proof */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                The Root Cause of SAP Failures
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#292A2E] font-normal mt-2 leading-tight">
                10–25% of project cost overruns originate before a single configuration is made.
              </h2>
              <p className="text-sm sm:text-base text-[#64676D] mt-4 leading-relaxed">
                Most SAP S/4HANA implementations face severe financial pressure early. Manual notes, undocumented legacy customizations, and subjective workshops create structural blindspots that surface as late-stage rework in Realize.
              </p>
              <div className="mt-6 p-4 bg-white rounded-xl border border-[#E8E8E8] text-xs space-y-2">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[#64676D]">Traditional Workshop Loss:</span>
                  <span className="text-red-500 font-semibold">High rework exposure</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[#64676D]">PerciXpert Fact-Based Blueprint:</span>
                  <span className="text-[#10B981] font-semibold">Zero assumption drift</span>
                </div>
              </div>
            </div>

            {/* Right Column: 5 Key Implementation Challenges */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#8A8D93]">Challenge 01</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Incomplete Requirements
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Fragmented meeting notes and lost verbal decisions turn scope into a moving target.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#8A8D93]">Challenge 02</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Undocumented Legacy Processes
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Decades of unrecorded operational workarounds remain hidden until target testing.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#8A8D93]">Challenge 03</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Manual FIT-GAP Analysis
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Subjective evaluations miss optimal standard SAP scope items, forcing unnecessary customization.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#8A8D93]">Challenge 04</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Data Migration Complexity
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Legacy schemas do not conform to LTMC templates, stalling project timelines with manual reformatting.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle sm:col-span-2">
                <span className="text-xs font-mono text-[#8A8D93]">Challenge 05</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Poor Documentation & Handover
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Implementation teams roll off without leaving an auditable build record, resulting in 8–12 weeks of AMS paralysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: SAP IMPLEMENTATION LIFECYCLE — Reference Rocketlane horizontal lifecycle */}
      <section id="lifecycle" className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="End-to-End Lifecycle Precision"
            title="Seven stages of AI-enabled SAP delivery"
            description="Unlike tools that automate only the initial workshop, PerciXpert maintains a continuous chain of truth from requirements to AMS handover."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifecycleStages.map((stage, idx) => (
              <div
                key={idx}
                className={`bg-[#FFFFFF] border rounded-xl p-5 hover:border-blue-400 hover:shadow-card transition-all flex flex-col justify-between ${
                  idx === 6 ? "lg:col-span-2 bg-[#F8F8F8]" : "border-[#E8E8E8]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded">
                      Stage {stage.num}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-[#8A8D93]">
                      {stage.phase}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#292A2E] mt-2 mb-1.5">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0F0F0] mt-auto space-y-2">
                  <div className="bg-[#F8F8F8] px-2.5 py-1.5 rounded text-[11px] font-mono text-[#292A2E] border border-[#E8E8E8] truncate">
                    {stage.uiSnippet}
                  </div>
                  <div className="text-[11px] text-[#292A2E] flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{stage.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: DETAILED PRODUCT CAPABILITIES — Reference Dropbox alternating sections */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <SectionHeader
            eyebrow="Capability Deep Dive"
            title="Organized across three implementation pillars"
            description="Clear architectural separation between project initiation, solution validation, and production transition."
          />

          {/* Pillar 1: PREPARE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0D5CE5]">
                Pillar 01 • PREPARE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal mt-2">
                Requirements Capture & AS-IS Discovery
              </h3>
              <p className="text-sm text-[#64676D] mt-3 leading-relaxed">
                Traditional workshops rely on human memory and scattered notes. PerciXpert ingests workshop transcripts and converts them into structured requirement cards digitally linked to their source and SAP Activate scope items.
              </p>
              <div className="mt-5 space-y-2.5 text-xs text-[#292A2E]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>Discussion-driven operational baseline reflecting actual business practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>Hidden gaps and undocumented legacy decisions surfaced prior to build</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>Eliminates change-request culture before configuration begins</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-5 shadow-card">
              <div className="text-[11px] font-mono text-[#8A8D93] mb-3 pb-2 border-b border-[#F0F0F0]">
                PerciXpert / Workshop Requirements Repository
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8]">
                  <div className="flex justify-between font-semibold text-[#292A2E]">
                    <span>REQ-FIN-0192: Touchless 3-Way Consignment</span>
                    <span className="text-[#10B981] font-mono text-[10px]">Verified</span>
                  </div>
                  <p className="text-[11px] text-[#64676D] mt-1">
                    Source: Finance Strategy Workshop Day 2 (14:32). Digitally tied to S/4HANA Public Cloud Scope 2BM.
                  </p>
                </div>
                <div className="p-3 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8]">
                  <div className="flex justify-between font-semibold text-[#292A2E]">
                    <span>REQ-SCM-0418: EWM Cold-Chain Quarantine</span>
                    <span className="text-[#10B981] font-mono text-[10px]">Verified</span>
                  </div>
                  <p className="text-[11px] text-[#64676D] mt-1">
                    Source: Supply Chain Lead Discovery. Linked to SAP Warehouse Management Scope J45.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: EXPLORE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-white border border-[#E8E8E8] rounded-xl p-5 shadow-card">
              <div className="text-[11px] font-mono text-[#8A8D93] mb-3 pb-2 border-b border-[#F0F0F0]">
                PerciXpert / Scope Item Matching Engine
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-emerald-50/50 border border-emerald-100 rounded flex justify-between items-center">
                  <span className="font-medium text-[#292A2E]">Standard Order-to-Cash (BD9)</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">100% Fit</span>
                </div>
                <div className="p-2.5 bg-amber-50/50 border border-amber-100 rounded flex justify-between items-center">
                  <span className="font-medium text-[#292A2E]">Advanced Intercompany Sales (5D2)</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800">Partial Fit (BTP Extension)</span>
                </div>
                <div className="p-2.5 bg-blue-50/50 border border-blue-100 rounded flex justify-between items-center">
                  <span className="font-medium text-[#292A2E]">Custom Formula Pricing Rule</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-[#0D5CE5]">Gap → Blueprint Created</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0D5CE5]">
                Pillar 02 • EXPLORE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal mt-2">
                FIT-GAP Analysis & Solution Thinking
              </h3>
              <p className="text-sm text-[#64676D] mt-3 leading-relaxed">
                Rather than relying on individual consultant exposure, PerciXpert evaluates requirements against the full SAP scope item library. When a gap is surfaced, the Solution Thinking Module recommends the optimal architecture.
              </p>
              <div className="mt-5 space-y-2.5 text-xs text-[#292A2E]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>3-state evaluation: Full Fit, Partial Fit, or Gap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>Pre-tested solution patterns for identified customizations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>Consultants enter Realize with a validated, complete blueprint</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: REALIZE & AMS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0D5CE5]">
                Pillar 03 • REALIZE & AMS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal mt-2">
                Data Migration, API Mapping & SDD Generation
              </h3>
              <p className="text-sm text-[#64676D] mt-3 leading-relaxed">
                Legacy systems like JD Edwards hold critical records that do not match SAP LTMC templates. PerciXpert maps legacy schemas into load-ready templates, maps third-party Business APIs, and compiles a comprehensive Solution Design Document automatically.
              </p>
              <div className="mt-5 space-y-2.5 text-xs text-[#292A2E]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>Verified LTMC-ready data packages directly downloadable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>System-generated Solution Design Document reflecting the actual build</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5CE5]" />
                  <span>AMS support transition accelerated from 8–12 weeks to days</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-5 shadow-card">
              <div className="text-[11px] font-mono text-[#8A8D93] mb-3 pb-2 border-b border-[#F0F0F0]">
                PerciXpert / AMS Transition & SDD Package
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 bg-[#F8F8F8] rounded text-xs">
                  <span className="font-medium text-[#292A2E]">Solution Design Document (SDD)</span>
                  <span className="text-[#10B981] font-mono text-[10px]">Auto-Generated (100%)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#F8F8F8] rounded text-xs">
                  <span className="font-medium text-[#292A2E]">Business API Testing & Simulation</span>
                  <span className="text-[#0D5CE5] font-mono text-[10px]">Verified 200 OK</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#F8F8F8] rounded text-xs">
                  <span className="font-medium text-[#292A2E]">AMS Knowledge Handover Dossier</span>
                  <span className="text-[#10B981] font-mono text-[10px]">Ready for Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: TWO WAYS TO DEPLOY — Reference Atlassian product cards */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Deployment Flexibility"
            title="Two ways to deploy PerciXpert"
            description="Whether executing a new implementation from scratch or auditing an in-flight system transition."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Module 1 */}
            <div className="bg-white border-2 border-[#0D5CE5] rounded-2xl p-7 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-blue-50 text-[#0D5CE5] text-xs font-semibold rounded-full border border-blue-100">
                    Module 1
                  </span>
                  <span className="text-xs font-mono text-[#64676D]">Greenfield Focus</span>
                </div>
                <h3 className="font-serif text-2xl text-[#292A2E] font-normal mb-3">
                  Greenfield Implementation Module
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                  Built for SAP S/4HANA Public Cloud implementations from the ground up. PerciXpert automates the most error-prone phases of SAP Activate — from requirement capture to solution design — replacing manual notes with a structured, verified process.
                </p>
                <ul className="space-y-2 text-xs text-[#292A2E] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D5CE5]" />
                    <span>Captures and links every workshop transcript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D5CE5]" />
                    <span>Automated FIT-GAP matching with standard scope items</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D5CE5]" />
                    <span>Generates complete Solution Design Document (SDD)</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-2.5 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors"
              >
                Discuss Greenfield Implementation
              </button>
            </div>

            {/* Module 2 */}
            <div className="bg-white border-2 border-[#292A2E] rounded-2xl p-7 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-[#F4F5F6] text-[#292A2E] text-xs font-semibold rounded-full border border-[#E8E8E8]">
                    Module 2
                  </span>
                  <span className="text-xs font-mono text-[#64676D]">Audit & Recovery</span>
                </div>
                <h3 className="font-serif text-2xl text-[#292A2E] font-normal mb-3">
                  System Audit Module
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                  Built for AMS transitions and in-flight project recovery. Logs into live SAP Public Cloud environments, extracts configurations and customizations, and maps them against original requirements to highlight gaps and undocumented changes.
                </p>
                <ul className="space-y-2 text-xs text-[#292A2E] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#292A2E]" />
                    <span>Audits live SAP configurations and custom ABAP logic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#292A2E]" />
                    <span>Surfaces undocumented modifications prior to handover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#292A2E]" />
                    <span>Protects client stability during partner transition</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-2.5 bg-[#292A2E] text-white text-xs font-semibold rounded-lg hover:bg-[#101214] transition-colors"
              >
                Request System Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: RESULTS AND PARTNER VALUE — Reference Ramp comparison table */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Measurable Advantage"
            title="Traditional consulting vs. PerciXpert delivery"
            description="Preserving exact benchmark performance figures from real enterprise SAP implementations."
          />

          <ComparisonTable
            title="SAP Implementation Performance Metrics"
            traditionalHeader="Traditional Consulting Model"
            percipereHeader="PerciXpert AI Delivery Engine"
            rows={comparisonRows}
          />
        </div>
      </section>

      {/* SECTION G: PARTNER APPLICATIONS — GSI vs Mid-Market */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ecosystem Scale"
            title="Engineered for SAP system integrators & partners"
            description="Whether protecting fixed-price margins or scaling client delivery without ballooning senior headcount."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-[#E8E8E8] bg-[#F8F8F8]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-[#292A2E]">
                  Global System Integrators (GSIs)
                </h4>
                <span className="text-[11px] font-mono text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded">
                  Margin Protection
                </span>
              </div>
              <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                In a market where fixed-price RFP margins are under extreme pressure, PerciXpert provides a proprietary, AI-led delivery model that competitors cannot replicate.
              </p>
              <ul className="space-y-2 text-xs text-[#292A2E]">
                <li>• <strong>Win Rates:</strong> Differentiate RFPs with system-generated delivery certainty.</li>
                <li>• <strong>Margin Protection:</strong> Curtail rework leakage by locking in Prepare & Explore phases.</li>
                <li>• <strong>Pre-Takeover Audit:</strong> Rapidly audit legacy systems before assuming delivery liability.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-[#E8E8E8] bg-[#F8F8F8]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-[#292A2E]">
                  Mid-Market SAP Partners
                </h4>
                <span className="text-[11px] font-mono text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded">
                  Scale & Repeatability
                </span>
              </div>
              <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                Scale implementation delivery across concurrent client projects without relying solely on scarce senior lead consultant availability.
              </p>
              <ul className="space-y-2 text-xs text-[#292A2E]">
                <li>• <strong>Consistency:</strong> Enforces standard system-driven logic across every engagement.</li>
                <li>• <strong>Capability Elevation:</strong> Delivers top-tier technical precision to mid-market clients.</li>
                <li>• <strong>Faster Onboarding:</strong> Standardized outputs enable agile team staffing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem strip */}
      <EcosystemStrip current="PerciXpert" />

      {/* SECTION H: FAQ & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />

          <div className="mt-16 p-8 sm:p-12 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal">
              De-risk your next SAP implementation.
            </h3>
            <p className="text-sm text-[#64676D] mt-2 max-w-lg mx-auto">
              Discuss your project timeline, public cloud migration, or system audit requirements with our SAP delivery leads.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
              >
                Schedule Architecture Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciXpert SAP Delivery" />
    </div>
  );
}
