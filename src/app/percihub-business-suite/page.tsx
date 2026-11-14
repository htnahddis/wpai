"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  Database, 
  ShieldCheck, 
  Factory, 
  Building2, 
  Truck, 
  ArrowUpRight, 
  Check, 
  FileText,
  Activity,
  Zap
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import EcosystemStrip from "@/components/EcosystemStrip";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ConsultationModal from "@/components/ConsultationModal";

export default function PerciHubPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndustryTab, setActiveIndustryTab] = useState<"manufacturing" | "construction" | "supplychain">("manufacturing");

  const faqItems: FaqItem[] = [
    {
      question: "What is PerciHub?",
      answer:
        "PerciHub is Percipere's business suite — a library of context-aware AI agents built for finance, procurement, supply chain, and operations teams that plug directly into your SAP environment.",
    },
    {
      question: "What agents are available in PerciHub right now?",
      answer:
        "Three agents are currently available as standard: the Purchase Requisition to Purchase Order Agent, the Quality Inspection Agent, and the Bank Reconciliation Agent. New agents are continuously being added to the catalog.",
    },
    {
      question: "Can Percipere build a custom agent for our specific process?",
      answer:
        "Yes. Where an existing agent does not fit your unique workflow, Percipere builds custom agents tailored to your specific process parameters, approval thresholds, and SAP configuration.",
    },
    {
      question: "What makes PerciHub agents different from generic AI agents?",
      answer:
        "Every PerciHub agent is contextually aware of your industry and processes, powered by FUTUROOT's process intelligence layer. This means they act with intent rather than following generic instructions — evaluating suppliers against your specific scoring criteria and ERP rules.",
    },
    {
      question: "What technology do PerciHub agents run on?",
      answer:
        "Depending on the workflow and enterprise architecture, agents are engineered on SAP Joule Studio, n8n, LangChain, LangGraph, and Azure AI Foundry.",
    },
    {
      question: "How are PerciHub agents deployed?",
      answer:
        "PerciHub agents are deployed as part of a structured Percipere engagement, configured to your specific SAP S/4HANA security roles, communication scenarios, and private network governance.",
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION A: HERO — Reference Notion homepage hero */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Headline, description, CTA */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0D5CE5] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D5CE5]"></span>
                CONTEXT-AWARE SAP AGENTS
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[50px] font-normal leading-[1.12] text-[#292A2E] tracking-tight">
                AI agents that understand how your business works.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#64676D] font-normal leading-relaxed text-balance">
                PerciHub brings intelligent agents into SAP to simplify finance, procurement, supply chain and operational workflows.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-[#0D5CE5] text-white text-sm font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle inline-flex items-center gap-2"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#agents"
                  className="px-5 py-3 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-sm font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
                >
                  Explore Available Agents
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-[#F0F0F0] flex items-center gap-6 text-xs text-[#64676D]">
                <div>
                  <span className="font-semibold text-[#292A2E] block">Built for SAP</span>
                  <span>Direct ERP Integration</span>
                </div>
                <div className="w-px h-6 bg-[#E8E8E8]"></div>
                <div>
                  <span className="font-semibold text-[#292A2E] block">FUTUROOT</span>
                  <span>Process-Aware Context</span>
                </div>
                <div className="w-px h-6 bg-[#E8E8E8]"></div>
                <div>
                  <span className="font-semibold text-[#292A2E] block">ISO 27000:2022</span>
                  <span>Data Sovereignty</span>
                </div>
              </div>
            </div>

            {/* Right: Notion-Style Agent Workspace Dashboard Preview */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-2xl shadow-card overflow-hidden">
                {/* Dashboard topbar */}
                <div className="bg-[#F8F8F8] border-b border-[#E8E8E8] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                    <span className="text-xs font-semibold text-[#292A2E]">
                      PerciHub Agent Workspace
                    </span>
                    <span className="text-[10px] text-[#8A8D93] font-mono">
                      Environment: S/4HANA Public Cloud
                    </span>
                  </div>
                  <span className="text-[11px] font-mono bg-blue-50 text-[#0D5CE5] px-2 py-0.5 rounded border border-blue-100">
                    3 Active Standard Agents
                  </span>
                </div>

                {/* Agent Activity Board */}
                <div className="p-5 sm:p-6 space-y-3 bg-white">
                  {/* Task in execution */}
                  <div className="p-3.5 bg-[#F8F8F8] border border-[#E8E8E8] rounded-xl flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] shrink-0 text-xs font-semibold">
                        PO
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#292A2E]">
                            PR-to-PO Conversion Agent
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
                            Task Executed
                          </span>
                        </div>
                        <p className="text-xs text-[#64676D] mt-1">
                          Evaluated Supplier Quote against contract tiered pricing; converted PR #45009 to PO #80012 with agreed incoterms.
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#8A8D93] font-mono shrink-0">1.2s</span>
                  </div>

                  {/* Second Agent in Progress */}
                  <div className="p-3.5 bg-[#F8F8F8] border border-[#E8E8E8] rounded-xl flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 text-xs font-semibold">
                        QC
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#292A2E]">
                            Quality Inspection Agent
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-50 text-[#0D5CE5] rounded border border-blue-200">
                            Usage Decision
                          </span>
                        </div>
                        <p className="text-xs text-[#64676D] mt-1">
                          Matched Lot #482 lab test against recipe spec limits. Recorded &apos;Accept&apos; usage decision in SAP QM.
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#8A8D93] font-mono shrink-0">2.1s</span>
                  </div>

                  {/* Third Agent */}
                  <div className="p-3.5 bg-[#F8F8F8] border border-[#E8E8E8] rounded-xl flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 shrink-0 text-xs font-semibold">
                        BK
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#292A2E]">
                            Bank Reconciliation Agent
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
                            98% Matched
                          </span>
                        </div>
                        <p className="text-xs text-[#64676D] mt-1">
                          Cleared 148 electronic bank statement items against open AR receivables with automated currency differential post.
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#8A8D93] font-mono shrink-0">0.9s</span>
                  </div>

                  {/* FUTUROOT Process Intelligence notice */}
                  <div className="p-2.5 bg-blue-50/50 border border-blue-100 rounded-lg text-xs text-[#0D5CE5] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Process Context: Enriched by FUTUROOT mining layer</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#64676D]">Zero Guesswork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: HOW PERCIHUB WORKS — Reference Airtable product explanation */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Architecture & Context"
            title="How PerciHub makes AI agents act with intent"
            description="Unlike generic LLMs that lack enterprise grounding, PerciHub binds live SAP business data with process intelligence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Component 1 */}
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 shadow-subtle text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] mx-auto mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#8A8D93]">Layer 01</span>
                <h3 className="font-serif text-xl font-normal text-[#292A2E] mt-1 mb-2">
                  SAP Business Data
                </h3>
                <p className="text-xs sm:text-sm text-[#64676D] leading-relaxed">
                  Your live enterprise core: S/4HANA master data, purchase requisitions, production orders, inventory records, and financial ledgers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F0] text-xs font-mono text-[#0D5CE5]">
                Target System of Record
              </div>
            </div>

            {/* Component 2 */}
            <div className="bg-white border-2 border-[#0D5CE5] rounded-2xl p-6 shadow-card text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 shadow-subtle">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Layer 02</span>
                <h3 className="font-serif text-xl font-normal text-[#292A2E] mt-1 mb-2">
                  PerciHub AI Agents
                </h3>
                <p className="text-xs sm:text-sm text-[#64676D] leading-relaxed">
                  Task-specific autonomous agents execute end-to-end workflows: evaluating quotes, matching lab tests, posting accruals, and raising POs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-100 text-xs font-mono text-[#0D5CE5] font-semibold">
                Autonomous Action Engine
              </div>
            </div>

            {/* Component 3 */}
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 shadow-subtle text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#8A8D93]">Layer 03</span>
                <h3 className="font-serif text-xl font-normal text-[#292A2E] mt-1 mb-2">
                  FUTUROOT Context
                </h3>
                <p className="text-xs sm:text-sm text-[#64676D] leading-relaxed">
                  Provides industry, process, and organizational context. Ensures the agent understands how your specific business operates, not generic theory.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F0] text-xs font-mono text-purple-600">
                Process Intelligence Layer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: EXPLORE AI AGENTS — Reference Airtable and Folk bento grids */}
      <section id="agents" className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ready-to-Deploy Library"
            title="Available standard PerciHub agents"
            description="The three core agents currently available for production deployment, engineered for instant SAP S/4HANA connectivity."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Agent 1: PR to PO Agent */}
            <div className="bg-white rounded-2xl border-2 border-[#0D5CE5] p-7 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    Procurement
                  </span>
                  <span className="text-xs font-mono text-[#10B981] font-semibold">Available Now</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#292A2E] mb-2">
                  PR to PO Agent
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Evaluates incoming purchase requisitions, scores supplier quotes against contracted pricing and delivery performance, and automatically creates SAP Purchase Orders without manual intervention.
                </p>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between text-[#64676D]">
                    <span>Trigger:</span>
                    <span className="text-[#292A2E]">PR creation in S/4HANA</span>
                  </div>
                  <div className="flex justify-between text-[#64676D]">
                    <span>Logic:</span>
                    <span className="text-[#0D5CE5]">Contract tiered validation</span>
                  </div>
                  <div className="flex justify-between text-[#64676D]">
                    <span>Output:</span>
                    <span className="text-[#10B981]">Release-ready PO created</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 w-full py-2.5 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors"
              >
                Request Agent Demo
              </button>
            </div>

            {/* Agent 2: Quality Inspection Agent */}
            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-7 shadow-card hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#292A2E] bg-[#F4F5F6] px-2 py-0.5 rounded border border-[#E8E8E8]">
                    Manufacturing & Quality
                  </span>
                  <span className="text-xs font-mono text-[#10B981] font-semibold">Available Now</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#292A2E] mb-2">
                  Quality Inspection Agent
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Automatically compares actual lab inspection parameters against recipe specification limits in SAP QM. Calculates deviation scoring and executes usage decisions (Accept, Rework, Reject).
                </p>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between text-[#64676D]">
                    <span>Trigger:</span>
                    <span className="text-[#292A2E]">Inspection lot completion</span>
                  </div>
                  <div className="flex justify-between text-[#64676D]">
                    <span>Logic:</span>
                    <span className="text-[#0D5CE5]">Spec tolerance scoring</span>
                  </div>
                  <div className="flex justify-between text-[#64676D]">
                    <span>Output:</span>
                    <span className="text-[#10B981]">Usage decision posted</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 w-full py-2.5 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-xs font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
              >
                Request Agent Demo
              </button>
            </div>

            {/* Agent 3: Bank Reconciliation Agent */}
            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-7 shadow-card hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#292A2E] bg-[#F4F5F6] px-2 py-0.5 rounded border border-[#E8E8E8]">
                    Finance Operations
                  </span>
                  <span className="text-xs font-mono text-[#10B981] font-semibold">Available Now</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#292A2E] mb-2">
                  Bank Reconciliation Agent
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Reconciles electronic bank statements with open receivables and payables in S/4HANA. Automatically handles multi-currency variance postings, partial payments, and discount deductions.
                </p>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between text-[#64676D]">
                    <span>Trigger:</span>
                    <span className="text-[#292A2E]">Daily MT940 / CAMT statement</span>
                  </div>
                  <div className="flex justify-between text-[#64676D]">
                    <span>Logic:</span>
                    <span className="text-[#0D5CE5]">Fuzzy match & clearing rules</span>
                  </div>
                  <div className="flex justify-between text-[#64676D]">
                    <span>Output:</span>
                    <span className="text-[#10B981]">95%+ touchless clearing</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="mt-6 w-full py-2.5 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-xs font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
              >
                Request Agent Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: INDUSTRY APPLICATIONS — Reference Atlassian product/category presentation */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Domain-Specific Workflows"
            title="AI built for your industry, not just generic automation"
            description="Every industry runs SAP differently. PerciHub models map to specific sector processes and compliance mandates."
          />

          {/* Industry Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveIndustryTab("manufacturing")}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeIndustryTab === "manufacturing"
                  ? "bg-[#292A2E] text-white shadow-subtle"
                  : "bg-white text-[#64676D] border border-[#E8E8E8] hover:text-[#292A2E]"
              }`}
            >
              Manufacturing
            </button>
            <button
              onClick={() => setActiveIndustryTab("construction")}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeIndustryTab === "construction"
                  ? "bg-[#292A2E] text-white shadow-subtle"
                  : "bg-white text-[#64676D] border border-[#E8E8E8] hover:text-[#292A2E]"
              }`}
            >
              Construction & Engineering
            </button>
            <button
              onClick={() => setActiveIndustryTab("supplychain")}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeIndustryTab === "supplychain"
                  ? "bg-[#292A2E] text-white shadow-subtle"
                  : "bg-white text-[#64676D] border border-[#E8E8E8] hover:text-[#292A2E]"
              }`}
            >
              Supply Chain
            </button>
          </div>

          {/* Tab 1: Manufacturing */}
          {activeIndustryTab === "manufacturing" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Discrete Manufacturing</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  AI Capacity Planning & Load Levelling
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Senses real-time work center loads from SAP production orders and shopfloor IoT feeds. Proactively reschedules lower-priority batches to eliminate bottleneck shifts.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Process Manufacturing</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  AI Batch Traceability & Genealogy
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  End-to-end batch lineage tracked in SAP — from raw material lot through blending to finished goods. Flags forward and backward traceability gaps before recall scenarios escalate.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Agro & Food Processing</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  Crop Yield & Harvest Forecasting
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Integrates satellite imagery, weather patterns, and soil readings to forecast harvest volumes per field zone, auto-adjusting S/4HANA production schedules.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Construction & Engineering */}
          {activeIndustryTab === "construction" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">EPC Procurement</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  Duplicate Invoice & Coding AI
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Scans subcontractor partial billings for duplicate submissions and learns historical AP posting patterns to auto-suggest GL account codes.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Project Finance</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  Cash Flow & Milestone Forecasting
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  AI-driven cash flow projection modeling open AR/AP against project milestone completion schedules, crucial for multi-year EPC contracts.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Pre-Sales & Tendering</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  PerciEstimate AI Bid Engine
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Analyzes historical EPC project actuals to generate pre-sales cost estimates and margin predictions for competitive tenders.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Supply Chain */}
          {activeIndustryTab === "supplychain" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Demand Planning</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  PerciPlan on SAP Analytics Cloud
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Combines adjusted historical sales, commercial input, and ML demand modeling into a single consensus forecast passed to S/4HANA MRP.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Perishable Operations</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  Shelf-Life & Expiry Management
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Real-time cold-chain tracking across incoming ingredients, automatically proposing menu substitutions before perishable inventory expires.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
                <span className="text-xs font-mono text-[#0D5CE5]">Logistics Optimization</span>
                <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                  Last-Mile & Route Clustering
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Clusters delivery routes by postcode density, time commitments, and cold-chain distance limits, scoring breach risk against live weather feeds.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION E: BUILT FOR YOUR PROCESSES — Reference Dropbox */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Context Advantage"
            title="Why generic AI agents fail in enterprise SAP"
            description="Four fundamental disciplines that separate PerciHub from generic conversational chatbots."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">01</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Understand SAP
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Native mastery of Fiori apps, BAPIs, CDS views, flexible workflows, and transactional validation rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">02</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Understand Industry
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Pre-configured for the exact operational realities of discrete manufacturing, process batches, and EPC construction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">03</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                FUTUROOT Context
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Understands your company&apos;s actual historical execution telemetry, not hypothetical textbook process models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">04</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Custom Extensibility
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Where a standard agent does not fit, Percipere engineers bespoke agents matching your exact custom parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: TECHNOLOGY FOUNDATION STRIP */}
      <section className="py-12 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8D93]">
            Enterprise Technology Foundation
          </span>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#64676D]">
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E8E8E8] text-[#292A2E]">
              SAP Joule Studio
            </span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E8E8E8] text-[#292A2E]">
              n8n Workflow Engine
            </span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E8E8E8] text-[#292A2E]">
              LangChain & LangGraph
            </span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E8E8E8] text-[#292A2E]">
              Azure AI Foundry
            </span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-[#E8E8E8] text-[#292A2E]">
              ISO 27000:2022 Private Cloud
            </span>
          </div>
        </div>
      </section>

      {/* PerciVerse Ecosystem Connection */}
      <EcosystemStrip current="PerciHub" />

      {/* SECTION G: FAQ AND CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />

          <div className="mt-16 p-8 sm:p-12 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal">
              Have a process that could use an agent?
            </h3>
            <p className="text-sm text-[#64676D] mt-2 max-w-lg mx-auto">
              Whether deploying standard PR-to-PO, Quality, or Bank Reconciliation agents, or building a bespoke agent for your plant, talk with our engineering leads.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
              >
                Schedule PerciHub Agent Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciHub AI Agents" />
    </div>
  );
}
