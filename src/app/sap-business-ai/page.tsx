"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Check,
  Shield,
  Zap,
  Bot,
  Layers,
  Database,
  Cpu,
  Workflow,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import EcosystemStrip from "@/components/EcosystemStrip";
import MondayWhyChooseGrid from "@/components/MondayWhyChooseGrid";

interface JouleScenario {
  id: string;
  name: string;
  domain: string;
  userPrompt: string;
  jouleResponse: string;
  affectedObjects: string[];
  metrics: string;
  statusBadge: { text: string; bg: string };
}

const JOULE_SCENARIOS: JouleScenario[] = [
  {
    id: "finance",
    name: "Finance & Treasury",
    domain: "S/4HANA Finance",
    userPrompt: "Joule, analyze Q3 European cost variance and highlight unposted supplier accruals.",
    jouleResponse:
      "Cost variance is +3.2% above baseline in Düsseldorf DC, driven by spot-rate shifts on raw aluminum. 14 vendor invoices (€164,200) are pending approval; automated journal accruals have been prepared for posting run #FI-902.",
    affectedObjects: ["Table BSEG / ACDOCA", "Cost Center 4010-EMEA", "Scope Item J58"],
    metrics: "0.8s Latency • Auto-Accrued",
    statusBadge: { text: "Standard Clean Core", bg: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  },
  {
    id: "supply-chain",
    name: "Supply Chain & Sourcing",
    domain: "S/4HANA SCM & MM",
    userPrompt: "Joule, detect potential stockout risks across UK distribution hubs for next week's promotions.",
    jouleResponse:
      "Critical stockout risk flagged for SKU #PR-4402 (OS Doors line) at Birmingham DC due to a 3-day port delay. Recommending auto-reallocation of 420 units from Manchester hub with automatic Stock Transport Order (STO) generation.",
    affectedObjects: ["Table MARC / MARD", "Plant 1010-UK", "Scope Item 18J"],
    metrics: "Instant Reallocation Plan",
    statusBadge: { text: "Autonomous Reorder", bg: "bg-blue-50 text-blue-700 border border-blue-200" },
  },
  {
    id: "commercial",
    name: "Commercial & Sales",
    domain: "Order-to-Cash (O2C)",
    userPrompt: "Joule, extract pricing conditions from incoming customer agreement PDF and validate rebate tiers.",
    jouleResponse:
      "Agreement OCR processed via SAP BTP Document Information Extraction. Identified tiered rebate structure: 4.5% above €500k annual volume. Validated against standard VK11 condition records without custom pricing exits.",
    affectedObjects: ["Table KONV / VBAK", "Pricing Procedure ZPR001", "Scope Item BD9"],
    metrics: "100% Side-by-Side BTP",
    statusBadge: { text: "BTP Microservice", bg: "bg-purple-50 text-purple-700 border border-purple-200" },
  },
  {
    id: "support-ams",
    name: "AMS Diagnostics",
    domain: "Technical Operations",
    userPrompt: "Joule, diagnose ST22 runtime dump #DBIF_RSQL_SQL_ERROR on batch settlement job.",
    jouleResponse:
      "Root cause identified: Table lock contention on BSEG during simultaneous payment run and depreciation calculation. Fix suggested: Reschedule payment run #PR-801 to off-peak slot (23:00 UTC) with parallel background work processes.",
    affectedObjects: ["Dump DBIF_RSQL_SQL_ERROR", "Job /PERCI/PAY_RUN", "Affected Table BSEG"],
    metrics: "Root Cause Logged (0.4s)",
    statusBadge: { text: "Diagnostic Resolved", bg: "bg-amber-50 text-amber-700 border border-amber-200" },
  },
];

export default function SapBusinessAiPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeScenarioId, setActiveScenarioId] = useState<string>("finance");
  const activeScenario = JOULE_SCENARIOS.find((s) => s.id === activeScenarioId) || JOULE_SCENARIOS[0];

  const enterpriseHurdles = [
    {
      title: "Context Isolation & Data Silos",
      subtitle: "The Generic AI Blocker",
      problem:
        "Generic LLMs have zero understanding of real-time transactional context, master data dependencies, and proprietary SAP tables like ACDOCA and MARC.",
      solution:
        "Percipere grounds SAP Business AI natively in SAP BTP Vector Foundation and live Core Data Services (CDS) views, keeping intelligence real-time and context-aware.",
      badge: "GROUNDED IN SAP CDS",
    },
    {
      title: "Custom Code & Extensibility Drift",
      subtitle: "The Clean Core Blocker",
      problem:
        "Modifying core ERP tables for custom AI logic prevents smooth cloud upgrades, creates technical debt, and violates SAP Clean Core certification.",
      solution:
        "All Percipere AI agents and extensions run strictly side-by-side on SAP BTP, utilizing public released APIs and standard event streams.",
      badge: "100% SIDE-BY-SIDE BTP",
    },
    {
      title: "Data Sovereignty & Enterprise Privacy",
      subtitle: "The Governance Blocker",
      problem:
        "Public foundation models risk enterprise confidentiality, trade secrets, and non-compliance with GDPR, SOC 2, and data protection mandates.",
      solution:
        "Complete customer tenant isolation. Models run within your private VPC perimeter under ISO 27001:2022 standards. Zero customer data trains foundation models.",
      badge: "PRIVATE PERIMETER",
    },
  ];

  const agentWorkflows = [
    {
      domain: "Finance & Control",
      role: "Autonomous Cash & Accruals Agent",
      task: "Continuous bank statement reconciliation and automated FX hedging adjustments.",
      status: "Autonomous 99.4%",
      sla: "< 1s SLA",
      statusBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    {
      domain: "Procurement (P2P)",
      role: "3-Way Invoice Matching Agent",
      task: "Autonomous matching of complex multi-line supplier invoices against Purchase Orders and Goods Receipts.",
      status: "Touchless 98.2%",
      sla: "Instant Clearance",
      statusBg: "bg-blue-50 text-blue-700 border border-blue-200",
    },
    {
      domain: "Supply Chain",
      role: "Disruption & Inventory Predictive Agent",
      task: "Predicts vendor lead-time deviations and automatically recalculates safety stocks in SAP S/4HANA.",
      status: "Active SCM Monitor",
      sla: "Real-time Alerts",
      statusBg: "bg-purple-50 text-purple-700 border border-purple-200",
    },
    {
      domain: "Manufacturing",
      role: "Quality Inspection & Batch Release",
      task: "Sensor IoT telemetry analysis for automatic usage decision (UD) and non-conformance logging.",
      status: "Quality Certified",
      sla: "Continuous Sync",
      statusBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    {
      domain: "Commercial (O2C)",
      role: "Contract OCR & Dynamic Pricing Agent",
      task: "Extracts terms from customer agreements and updates standard condition records automatically.",
      status: "BTP Stream",
      sla: "1.2s Turnaround",
      statusBg: "bg-amber-50 text-amber-700 border border-amber-200",
    },
    {
      domain: "Application AMS",
      role: "Root-Cause Diagnostic Telemetry Agent",
      task: "Instantly correlates SAP ST22 runtime dumps with table lock traces and recommends engineering fixes.",
      status: "80% Deflection",
      sla: "Instant Triage",
      statusBg: "bg-blue-50 text-blue-700 border border-blue-200",
    },
  ];

  return (
    <div className="bg-white text-[#171717] selection:bg-[#FFF5F0] selection:text-[#FF4400]">
      {/* =========================================================================
          1. HERO — Auctor Display Proportions + Monday.com Modern Clean Feel
          ========================================================================= */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EBEBED]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] block mb-3 font-medium">
              SAP GOLD PARTNER • SAP BUSINESS AI &amp; JOULE ARCHITECTURE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#171717]">
              AI embedded into your daily SAP workflows.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#676879] font-normal leading-relaxed max-w-2xl">
              Transform finance, procurement, and operations using SAP Joule, SAP BTP AI Foundation, and secure LangGraph autonomous agents grounded in business process context.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-8 py-3.5 bg-[#171717] hover:bg-black text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
              >
                <span>Book an AI Architecture Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#joule-demo"
                className="px-6 py-3.5 bg-[#F8F8FA] hover:bg-[#EFEFEA] text-[#171717] border border-[#E5E5E8] text-sm font-medium rounded-full transition-colors"
              >
                Explore Joule Capabilities
              </a>
            </div>
          </div>

          {/* =========================================================================
              2. JOULE INTERACTIVE WORKSPACE TERMINAL (Monday.com / Auctor Hybrid)
              ========================================================================= */}
          <div id="joule-demo" className="bg-[#FAFBFD] rounded-2xl border border-zinc-200 overflow-hidden shadow-md">
            {/* Console Toolbar Header */}
            <div className="px-5 py-3.5 bg-white border-b border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></span>
                </div>
                <div className="h-4 w-[1px] bg-zinc-200"></div>
                <span className="font-semibold text-zinc-900">SAP Joule Copilot v2.4</span>
                <span className="text-zinc-400 hidden sm:inline">•</span>
                <span className="text-zinc-500 hidden sm:inline">SAP S/4HANA Cloud (Clean Core)</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Grounded in CDS Views</span>
                </span>
                <span className="text-zinc-400 text-[11px] font-mono">{activeScenario.metrics}</span>
              </div>
            </div>

            {/* Scenario Navigation Tabs */}
            <div className="p-4 bg-zinc-100/60 border-b border-zinc-200 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mr-2 font-medium">
                Scenario:
              </span>
              {JOULE_SCENARIOS.map((scenario) => {
                const isActive = scenario.id === activeScenarioId;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setActiveScenarioId(scenario.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-white text-zinc-900 shadow-xs border border-zinc-300 font-semibold ring-1 ring-zinc-900/5"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-white/60"
                    }`}
                  >
                    {scenario.name}
                  </button>
                );
              })}
            </div>

            {/* Interactive Simulation Chat Pane */}
            <div className="p-6 sm:p-8 space-y-5 bg-white">
              {/* User Prompt */}
              <div className="flex items-start gap-3.5 max-w-2xl">
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  VP
                </div>
                <div className="p-4 rounded-2xl bg-[#F6F6F3] border border-[#ECECEC] text-sm text-zinc-800 leading-relaxed">
                  <div className="text-[10px] font-mono text-zinc-400 mb-1">
                    Process Owner &bull; {activeScenario.domain}
                  </div>
                  {activeScenario.userPrompt}
                </div>
              </div>

              {/* Joule Copilot Response */}
              <div className="flex items-start gap-3.5 max-w-2xl ml-auto">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFBFD] border border-blue-200 text-sm text-zinc-800 shadow-xs leading-relaxed space-y-3">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#0070F2] font-mono text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#0070F2]" />
                      <span>SAP Joule Copilot</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${activeScenario.statusBadge.bg}`}>
                      {activeScenario.statusBadge.text}
                    </span>
                  </div>

                  <p className="text-zinc-800 text-[13px] leading-relaxed">
                    {activeScenario.jouleResponse}
                  </p>

                  {/* System Context Pills */}
                  <div className="pt-2 border-t border-zinc-200/60 flex flex-wrap items-center gap-2 text-[10px] font-mono text-zinc-500">
                    <span className="text-zinc-400">Context Grounding:</span>
                    {activeScenario.affectedObjects.map((obj, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white rounded border border-zinc-200 text-zinc-700">
                        {obj}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FF4400] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="px-6 py-3 bg-[#FAFBFD] border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Core Modifications &bull; SAP Clean Core Extensibility Certified</span>
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-[#0070F2] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Request Custom Joule Demo</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MONDAY.COM BENTO GRID — Why Enterprise Leaders Choose Percipere
          ========================================================================= */}
      <MondayWhyChooseGrid />

      {/* =========================================================================
          4. THE THREE CRITICAL ENTERPRISE AI HURDLES (Monday.com Clean Cards)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#FAFAFC] border-b border-[#EBEBED]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] block mb-2 font-medium">
              THE ENTERPRISE ADOPTION HURDLES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] tracking-tight leading-tight">
              Why generic chatbots fail in enterprise SAP.
            </h2>
            <p className="mt-3 text-base text-[#676879]">
              Enterprise ERP requires verified business process context, strict schema integrity, and private cloud governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {enterpriseHurdles.map((h, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-[#EBEBED] hover:border-[#171717] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-medium text-[#737373] bg-[#F4F4F6] px-2.5 py-1 rounded-full uppercase">
                      {h.subtitle}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
                      {h.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#171717] mb-3">
                    {h.title}
                  </h3>

                  <div className="text-xs text-red-600/90 font-mono mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>The Hurdle:</span>
                  </div>
                  <p className="text-xs text-[#676879] leading-relaxed mb-4">
                    {h.problem}
                  </p>

                  <div className="pt-3 border-t border-[#F0F0F2]">
                    <div className="text-xs text-emerald-700 font-mono mb-1.5 flex items-center gap-1.5 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      <span>The Percipere Architecture:</span>
                    </div>
                    <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                      {h.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. AUTONOMOUS AGENT FLEET FOR DAILY SAP WORKFLOWS (Monday.com Table)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#EBEBED]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] block mb-2 font-medium">
              CAPABILITIES &amp; AGENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] tracking-tight leading-tight">
              Autonomous AI agents executing daily SAP transactions.
            </h2>
            <p className="mt-3 text-base text-[#676879]">
              Grounded agents performing touchless clearing, predictive maintenance, and reconciliation directly within your standard business processes.
            </p>
          </div>

          {/* Monday.com Clean Table Board */}
          <div className="bg-[#FAFBFD] rounded-2xl border border-zinc-200 overflow-hidden shadow-xs">
            <div className="px-5 py-3.5 bg-white border-b border-zinc-200 flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-zinc-900">Active Business Agent Fleet</span>
              <span className="text-zinc-500">6 Domains Orchestrated</span>
            </div>

            <div className="divide-y divide-zinc-200/70 text-xs">
              {agentWorkflows.map((agent, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-50/80 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        {agent.domain}
                      </span>
                      <span className="text-zinc-300">&bull;</span>
                      <span className="font-serif text-sm sm:text-base font-medium text-zinc-900">
                        {agent.role}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">{agent.task}</p>
                  </div>

                  <div className="shrink-0 flex items-center gap-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-medium ${agent.statusBg}`}>
                      {agent.status}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 w-24 text-right">
                      {agent.sla}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. VERIFIED AI TELEMETRY METRICS (Auctor / Material UI Stat Counters)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAFBFD] border-b border-[#EBEBED]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-2xs">
              <div className="font-serif text-4xl sm:text-5xl font-normal text-zinc-900">0.8s</div>
              <div className="text-xs font-semibold text-zinc-900 mt-2 font-mono uppercase tracking-wide">
                Average Query Latency
              </div>
              <p className="text-xs text-zinc-500 mt-1">Live semantic synthesis across CDS views</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-2xs">
              <div className="font-serif text-4xl sm:text-5xl font-normal text-blue-600">98.4%</div>
              <div className="text-xs font-semibold text-zinc-900 mt-2 font-mono uppercase tracking-wide">
                Touchless P2P Clearance
              </div>
              <p className="text-xs text-zinc-500 mt-1">Automated PO and supplier invoice matching</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-2xs">
              <div className="font-serif text-4xl sm:text-5xl font-normal text-emerald-600">0.0%</div>
              <div className="text-xs font-semibold text-zinc-900 mt-2 font-mono uppercase tracking-wide">
                External Data Leakage
              </div>
              <p className="text-xs text-zinc-500 mt-1">100% private perimeter under ISO 27001</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-2xs">
              <div className="font-serif text-4xl sm:text-5xl font-normal text-zinc-900">100%</div>
              <div className="text-xs font-semibold text-zinc-900 mt-2 font-mono uppercase tracking-wide">
                Clean Core Adherence
              </div>
              <p className="text-xs text-zinc-500 mt-1">Zero ERP modifications via side-by-side BTP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="SAP Business AI" />

      {/* =========================================================================
          6. CLOSING CTA BANNER
          ========================================================================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[620px] mx-auto px-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] block mb-3 font-medium">
            ENTERPRISE ROADMAPPING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#171717] tracking-tight">
            Make SAP Business AI work for your enterprise.
          </h2>
          <p className="text-sm text-[#676879] mt-3 mb-8 leading-relaxed">
            Collaborate with our certified SAP AI architects to audit your data readiness, establish Clean Core guardrails, and build a high-ROI 30-day value roadmap.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#171717] hover:bg-black text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
          >
            <span>Schedule AI Architecture Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Booking Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="SAP Business AI & Joule Architecture"
      />
    </div>
  );
}
