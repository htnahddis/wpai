"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Search, 
  Cpu, 
  Layers, 
  RefreshCw, 
  ShieldCheck, 
  TrendingDown, 
  Clock, 
  Database,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import EcosystemStrip from "@/components/EcosystemStrip";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ConsultationModal from "@/components/ConsultationModal";

export default function PerciServePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const faqItems: FaqItem[] = [
    {
      question: "What is PerciServe?",
      answer:
        "PerciServe is Percipere's support suite — an AI-powered support journey covering L1 self-service resolution through PerciServe, L2/L3 root-cause investigation through PerciXpert's support module, and process intelligence through FUTUROOT.",
    },
    {
      question: "What is PerciDesk?",
      answer:
        "PerciDesk is the L1 conversational component of PerciServe — an AI assistant trained on your SAP documentation, SOPs, ticket knowledge base, and training materials. Business users ask questions via chat and receive instant answers.",
    },
    {
      question: "What happens when PerciServe cannot resolve a query?",
      answer:
        "PerciServe automatically raises a ticket and passes it — along with the full conversation and all relevant knowledge base context — to PerciXpert's support module for L2/L3 investigation. The consultant receives a structured starting point, not a blank ticket.",
    },
    {
      question: "Does PerciXpert's support module take action on the SAP system?",
      answer:
        "No. PerciXpert's support module reads live SAP objects — ABAP objects, CDS views, configuration, custom logic, and communication scenarios — to identify the root cause and recommend a resolution. A consultant reviews and applies the fix. The module does not make changes to the system itself.",
    },
    {
      question: "How does the feedback loop work?",
      answer:
        "When PerciXpert resolves an issue, that resolution is written back into PerciServe's knowledge base. The next time a similar query arises, PerciServe can resolve it at L1 — without escalation.",
    },
    {
      question: "What does FUTUROOT add to PerciServe?",
      answer:
        "FUTUROOT sits underneath both PerciServe and PerciXpert, consuming context from both. It surfaces process-level insights — P2P and O2C mining, cycle time analysis, bottleneck detection, conformance checking, and AI alerts — giving IT leadership visibility into process health, not just ticket counts.",
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION A: HERO — Reference Slack homepage hero */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline, subtext, CTA */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0D5CE5] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D5CE5]"></span>
                INTELLIGENT SAP SUPPORT SUITE
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[50px] font-normal leading-[1.12] text-[#292A2E] tracking-tight">
                Smarter SAP support. Fewer tickets. Faster resolutions.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#64676D] font-normal leading-relaxed text-balance">
                PerciServe answers everyday SAP questions instantly and helps technical teams investigate complex issues with the right context.
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
                  href="#workflow"
                  className="px-5 py-3 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-sm font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
                >
                  See 3-Stage Support Flow
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-[#F0F0F0] flex items-center gap-6 text-xs text-[#64676D]">
                <div>
                  <span className="font-semibold text-[#292A2E] block">Instant L1</span>
                  <span>SOP & Doc Search</span>
                </div>
                <div className="w-px h-6 bg-[#E8E8E8]"></div>
                <div>
                  <span className="font-semibold text-[#292A2E] block">L2/L3 Root Cause</span>
                  <span>PerciXpert Diagnostics</span>
                </div>
                <div className="w-px h-6 bg-[#E8E8E8]"></div>
                <div>
                  <span className="font-semibold text-[#292A2E] block">Process Mining</span>
                  <span>FUTUROOT Intelligence</span>
                </div>
              </div>
            </div>

            {/* Right Column: Slack-Style Hero Interactive Chat Preview */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-2xl shadow-card overflow-hidden">
                {/* Chat window chrome */}
                <div className="bg-[#F8F8F8] border-b border-[#E8E8E8] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                    <span className="text-xs font-semibold text-[#292A2E]">
                      PerciDesk • SAP Assistant
                    </span>
                    <span className="text-[10px] text-[#8A8D93] font-mono">
                      Connected to S/4HANA SOP Knowledge Base
                    </span>
                  </div>
                  <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-[#E8E8E8] text-[#64676D]">
                    Ticket #TKT-8921
                  </span>
                </div>

                {/* Conversation Body */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  {/* User Question */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F4F5F6] border border-[#E8E8E8] flex items-center justify-center text-xs font-semibold text-[#292A2E] shrink-0">
                      JS
                    </div>
                    <div className="bg-[#F8F8F8] border border-[#E8E8E8] rounded-xl rounded-tl-sm p-3.5 max-w-md text-xs sm:text-sm text-[#292A2E]">
                      <p className="font-medium text-[#101214] mb-1">Jane Smith (Procurement Lead):</p>
                      <p className="text-[#64676D]">
                        How do I release a blocked purchase order over £50k that is stalled in workflow approval in S/4HANA Cloud?
                      </p>
                      <span className="text-[10px] text-[#8A8D93] mt-1.5 block">10:14 AM</span>
                    </div>
                  </div>

                  {/* PerciServe Instant Answer */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-semibold text-[#0D5CE5] shrink-0">
                      PS
                    </div>
                    <div className="bg-white border border-blue-100 rounded-xl rounded-tl-sm p-4 max-w-lg text-xs sm:text-sm shadow-subtle">
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#F0F0F0]">
                        <span className="font-semibold text-[#0D5CE5] text-xs flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          PerciServe Instant L1 Resolution
                        </span>
                        <span className="text-[10px] text-[#8A8D93] font-mono">Searched 4 SOPs</span>
                      </div>
                      <p className="text-[#292A2E] leading-relaxed mb-2">
                        For POs exceeding £50k, the approval tier requires dual finance sign-off.
                      </p>
                      <ol className="list-decimal pl-4 space-y-1 text-xs text-[#64676D] mb-3">
                        <li>Navigate to SAP Fiori app <strong>Manage Purchase Orders (F0842A)</strong>.</li>
                        <li>Filter by PO Status: <em>Awaiting Flexible Workflow</em>.</li>
                        <li>Verify the attached Cost Center budget clearance in Tab 4.</li>
                        <li>Click <strong>Release with Dual Authorization</strong>.</li>
                      </ol>
                      <div className="p-2.5 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8] flex items-center justify-between text-xs">
                        <span className="text-[#10B981] font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Resolved at L1 in 1.4s (No ticket escalated)
                        </span>
                        <span className="text-[10px] font-mono text-[#8A8D93]">SOP-PROC-412</span>
                      </div>
                    </div>
                  </div>

                  {/* Context pass to PerciXpert indicator */}
                  <div className="p-3 bg-[#FAFAFA] border border-dashed border-[#D2D4D7] rounded-xl flex items-center justify-between text-xs text-[#64676D]">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#0D5CE5]" />
                      <span>If unresolved, full context auto-hands off to <strong>PerciXpert L2/L3</strong></span>
                    </span>
                    <span className="text-[10px] font-mono text-[#0D5CE5] font-semibold">Zero Blank Tickets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: THE PROBLEM — Reference Dropbox feature sections */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Cost of Reactive Support"
            title="Why traditional SAP support drains enterprise teams"
            description="SAP environments degrade after go-live. The same questions repeat continuously while complex issues consume expensive senior consultants."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CFO Block */}
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-7 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] mb-5">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8D93]">
                  For the CFO
                </span>
                <h3 className="font-serif text-xl font-normal text-[#292A2E] mt-1 mb-3">
                  The Financial Drain
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#64676D] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>No visibility into whether support spend reduces recurring issues or just processes them.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>AMS contracts take 8–12 weeks of expensive onboarding before value starts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Ticket volumes demand linear headcount to manage rather than intelligence to reduce.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#F0F0F0] mt-6 text-xs text-[#0D5CE5] font-medium">
                Goal: Lower TCO through ticket volume reduction
              </div>
            </div>

            {/* IT Leader Block */}
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-7 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] mb-5">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8D93]">
                  For the IT Leader
                </span>
                <h3 className="font-serif text-xl font-normal text-[#292A2E] mt-1 mb-3">
                  The Operational Burden
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#64676D] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Senior consultants spending hours on L1 &apos;how-to&apos; questions that should never reach them.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Every L2/L3 investigation starts from a blank page with no structured access to past context.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>System knowledge locked in consultant heads, lost every time someone rotates off the account.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#F0F0F0] mt-6 text-xs text-[#0D5CE5] font-medium">
                Goal: Start investigations with diagnosis, not blank pages
              </div>
            </div>

            {/* COO Block */}
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-7 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] mb-5">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8D93]">
                  For the COO
                </span>
                <h3 className="font-serif text-xl font-normal text-[#292A2E] mt-1 mb-3">
                  The Business Impact
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#64676D] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Zero early warning before process bottlenecks become enterprise business disruptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Business users blocked on critical SAP tasks, waiting days for support tickets to clear.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✕</span>
                    <span>Root causes never resolved, leading to recurring operational friction across plants and hubs.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-[#F0F0F0] mt-6 text-xs text-[#0D5CE5] font-medium">
                Goal: Immediate user unblocking & process health
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: INTELLIGENT SUPPORT WORKFLOW — Reference Rocketlane lifecycle */}
      <section id="workflow" className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The 3-Stage Support Architecture"
            title="Intelligent AMS Flow: From instant answer to root cause"
            description="PerciServe connects L1 self-service with PerciXpert's deep technical diagnostics and FUTUROOT's process intelligence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stage 1: L1 PerciServe */}
            <div className="bg-[#FFFFFF] border-2 border-[#0D5CE5] rounded-2xl p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-blue-50 text-[#0D5CE5] text-xs font-semibold rounded-full border border-blue-100">
                    Stage 01 • L1
                  </span>
                  <span className="text-xs font-mono text-[#10B981]">Instant Resolution</span>
                </div>
                <h3 className="font-serif text-2xl text-[#292A2E] font-normal mb-2">
                  L1 — PerciServe
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Business user asks a question via chat. PerciServe searches across SAP documentation, standard operating procedures (SOPs), previous tickets, and training materials to provide an instant, verifiable answer.
                </p>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-xs text-[#292A2E] space-y-1">
                  <p><strong>Input:</strong> Natural language user question</p>
                  <p><strong>Action:</strong> Semantic vector search over enterprise SOPs</p>
                  <p className="text-[#10B981]"><strong>Outcome:</strong> Resolves 40–60% of common how-to queries</p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#F0F0F0] mt-6 text-xs text-[#64676D]">
                If unresolved, auto-escalates with full context to Stage 02.
              </div>
            </div>

            {/* Stage 2: L2/L3 PerciXpert */}
            <div className="bg-[#FFFFFF] border-2 border-[#292A2E] rounded-2xl p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#F4F5F6] text-[#292A2E] text-xs font-semibold rounded-full border border-[#E8E8E8]">
                    Stage 02 • L2 & L3
                  </span>
                  <span className="text-xs font-mono text-[#0D5CE5]">Root Cause Pinpoint</span>
                </div>
                <h3 className="font-serif text-2xl text-[#292A2E] font-normal mb-2">
                  L2/L3 — PerciXpert Module
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  When an issue requires deeper investigation, the entire conversation context is passed to PerciXpert. It inspects live SAP objects to pinpoint the exact root cause and recommend an auditable fix.
                </p>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-xs text-[#292A2E] space-y-1">
                  <p className="font-medium text-[#101214]">SAP objects PerciXpert reads:</p>
                  <p className="text-[11px] font-mono text-[#64676D]">
                    ABAP Objects • CDS Views • Configuration • Custom Logic • Communication Scenarios • Analytical Queries
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#F0F0F0] mt-6 p-2 bg-blue-50/60 rounded-lg text-xs text-[#0D5CE5]">
                <strong>Governance Rule:</strong> PerciXpert diagnoses & recommends. A certified human consultant reviews and applies the fix to SAP.
              </div>
            </div>

            {/* Stage 3: FUTUROOT Process Intelligence */}
            <div className="bg-[#FFFFFF] border-2 border-[#E8E8E8] rounded-2xl p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#F4F5F6] text-[#64676D] text-xs font-semibold rounded-full border border-[#E8E8E8]">
                    Stage 03 • Intelligence
                  </span>
                  <span className="text-xs font-mono text-purple-600">Process Mining</span>
                </div>
                <h3 className="font-serif text-2xl text-[#292A2E] font-normal mb-2">
                  FUTUROOT — Process Intelligence
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Sits underneath both PerciServe and PerciXpert. It analyzes end-to-end process telemetry to identify systemic bottlenecks, recurring issues, and cycle-time friction before they turn into tickets.
                </p>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-xs text-[#292A2E] space-y-1">
                  <p><strong>Capabilities:</strong> P2P and O2C process mining</p>
                  <p><strong>Detection:</strong> Cycle time outliers & conformance checks</p>
                  <p className="text-purple-600"><strong>AI Alerts:</strong> Proactive flags before disruption</p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#F0F0F0] mt-6 text-xs text-[#64676D]">
                Gives IT leadership full process visibility, not just ticket counts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: CONTINUOUS FEEDBACK LOOP — Reference Notion connected workspace */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E8E8] rounded-3xl p-8 sm:p-12 shadow-card">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D5CE5]">
                Self-Reinforcing Knowledge
              </span>
              <h3 className="font-serif text-3xl text-[#292A2E] font-normal mt-2">
                The continuous support feedback loop
              </h3>
              <p className="text-sm sm:text-base text-[#64676D] mt-2">
                When PerciXpert and the consultant resolve an L2/L3 issue, that resolution automatically becomes part of PerciServe&apos;s knowledge base.
              </p>
            </div>

            {/* Connected loop visual */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="p-4 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-center">
                <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Step 01</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1">Novel Ticket Raised</h4>
                <p className="text-xs text-[#64676D] mt-1">L1 query exceeds SOP scope and auto-escalates.</p>
              </div>

              <div className="p-4 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-center">
                <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Step 02</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1">PerciXpert Diagnosis</h4>
                <p className="text-xs text-[#64676D] mt-1">Live SAP objects parsed; root-cause fix verified.</p>
              </div>

              <div className="p-4 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-center">
                <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Step 03</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1">KB Ingestion</h4>
                <p className="text-xs text-[#64676D] mt-1">Resolution path vectorized and added to knowledge store.</p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Step 04</span>
                <h4 className="text-sm font-semibold text-[#0D5CE5] mt-1">L1 Instant Answer</h4>
                <p className="text-xs text-[#292A2E] mt-1">Next identical query resolved instantly at L1.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: BENEFITS — Reference Folk asymmetric bento grid */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Key Business Outcomes"
            title="Measurable benefits across support and operations"
            description="Built to eliminate recurring questions, shorten resolution times, and reduce SAP total cost of ownership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Benefit 01</span>
              <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                Faster First-Level Resolution
              </h4>
              <p className="text-sm text-[#64676D] leading-relaxed">
                Everyday questions about SAP transactions, period-end steps, and Fiori workflows are resolved in seconds rather than sitting in ticket queues for days.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Benefit 02</span>
              <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                Less Repetitive Work for Consultants
              </h4>
              <p className="text-sm text-[#64676D] leading-relaxed">
                Senior SAP functional leads and technical developers no longer answer basic SOP inquiries, reserving their expertise for true business enhancements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Benefit 03</span>
              <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                Context-Rich Technical Investigations
              </h4>
              <p className="text-sm text-[#64676D] leading-relaxed">
                When complex bugs escalate to L2/L3, consultants start with live SAP object traces, configuration context, and diagnostic recommendations already prepared.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Benefit 04</span>
              <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                Better Visibility into Process Health
              </h4>
              <p className="text-sm text-[#64676D] leading-relaxed">
                FUTUROOT process mining transforms support telemetry into proactive alerts, enabling IT leadership to fix process bottlenecks before they trigger tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: PERCIVERSE CONNECTION */}
      <EcosystemStrip current="PerciServe" />

      {/* SECTION G: FAQ AND CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />

          <div className="mt-16 p-8 sm:p-12 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal">
              Ready to transform your SAP support?
            </h3>
            <p className="text-sm text-[#64676D] mt-2 max-w-lg mx-auto">
              See a live demonstration of PerciServe and learn how to reduce repetitive tickets while accelerating complex SAP investigations.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
              >
                Schedule PerciServe Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciServe Support Suite" />
    </div>
  );
}
