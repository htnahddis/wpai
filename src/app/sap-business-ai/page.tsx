"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Bot, 
  Lock, 
  Database, 
  TrendingUp, 
  Factory, 
  Users, 
  DollarSign, 
  Truck, 
  Briefcase,
  AlertCircle,
  ArrowUpRight,
  Check
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import EcosystemStrip from "@/components/EcosystemStrip";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ConsultationModal from "@/components/ConsultationModal";

export default function SapBusinessAiPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const faqItems: FaqItem[] = [
    {
      question: "What is SAP Business AI?",
      answer:
        "SAP Business AI embeds artificial intelligence directly into core business applications — across finance, supply chain, manufacturing, HR, and sales. Powered by the SAP Joule copilot and purpose-built machine learning, it turns passive ERP databases into active decision engines.",
    },
    {
      question: "What is SAP Joule Copilot?",
      answer:
        "Joule is SAP's generative AI copilot embedded across S/4HANA, SuccessFactors, Ariba, and SAC. It understands natural language business queries, generates contextual recommendations, and automates multi-step transactional processes.",
    },
    {
      question: "Can we build custom AI agents in SAP?",
      answer:
        "Yes. Using SAP Joule Studio and Business Technology Platform (BTP), Percipere develops custom AI agents tailored to your unique approval hierarchies, operational exceptions, and industry requirements.",
    },
    {
      question: "How does Percipere guarantee enterprise data security?",
      answer:
        "Under our ISO 27000:2022 Responsible AI Framework, your enterprise data never leaves your controlled private network. Advanced data masking protects confidential customer and financial records, and zero data is transmitted to public commercial models.",
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION A: HERO — Reference Slack + Notion */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Headline, description, CTA */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0D5CE5] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D5CE5]"></span>
                EMBEDDED ENTERPRISE INTELLIGENCE
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[50px] font-normal leading-[1.12] text-[#292A2E] tracking-tight">
                Make your enterprise smarter with SAP Business AI.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#64676D] font-normal leading-relaxed text-balance">
                Bring AI into finance, supply chain, manufacturing, HR and customer experience with SAP Joule and purpose-built enterprise intelligence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-[#0D5CE5] text-white text-sm font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle inline-flex items-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#gap"
                  className="px-5 py-3 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-sm font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
                >
                  Solve the AI Adoption Gap
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-[#F0F0F0] flex items-center gap-6 text-xs text-[#64676D]">
                <div>
                  <span className="font-semibold text-[#292A2E] block">SAP Gold Partner</span>
                  <span>Native Core Integration</span>
                </div>
                <div className="w-px h-6 bg-[#E8E8E8]"></div>
                <div>
                  <span className="font-semibold text-[#292A2E] block">SAP Joule</span>
                  <span>Generative Copilot</span>
                </div>
                <div className="w-px h-6 bg-[#E8E8E8]"></div>
                <div>
                  <span className="font-semibold text-[#292A2E] block">ISO 27000:2022</span>
                  <span>Data Sovereignty</span>
                </div>
              </div>
            </div>

            {/* Right: Slack/Notion-Style Clean Business Application Interface with Joule */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-2xl shadow-card overflow-hidden">
                {/* Header */}
                <div className="bg-[#F8F8F8] border-b border-[#E8E8E8] px-4 py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                    <span className="font-semibold text-[#292A2E]">
                      SAP S/4HANA Cloud • Joule CoPilot Session
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    S/4HANA Public Edition
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  {/* User Question */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F4F5F6] border border-[#E8E8E8] flex items-center justify-center text-xs font-semibold text-[#292A2E] shrink-0">
                      CFO
                    </div>
                    <div className="bg-[#F8F8F8] border border-[#E8E8E8] rounded-xl rounded-tl-sm p-3.5 max-w-md text-xs sm:text-sm text-[#292A2E]">
                      <p className="font-medium text-[#101214] mb-1">Chief Financial Officer:</p>
                      <p className="text-[#64676D]">
                        Joule, highlight Q3 operating variance across European plants and identify any unposted goods receipts impacting cash forecast.
                      </p>
                    </div>
                  </div>

                  {/* Joule Answer */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-semibold text-[#0D5CE5] shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="bg-white border border-blue-100 rounded-xl rounded-tl-sm p-4 max-w-lg text-xs sm:text-sm shadow-subtle">
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#F0F0F0]">
                        <span className="font-semibold text-[#0D5CE5] text-xs">
                          SAP Joule Copilot • Live Synthesis
                        </span>
                        <span className="text-[10px] font-mono text-[#10B981]">Confidence: 99.4%</span>
                      </div>
                      <p className="text-[#292A2E] leading-relaxed mb-3">
                        Q3 operational variance is currently <strong>+3.2%</strong> above baseline, concentrated in Plant 1020 (Düsseldorf) due to raw material spot price shifts.
                      </p>
                      <div className="space-y-1.5 text-xs text-[#64676D] mb-3 font-mono">
                        <div className="p-2 bg-[#F8F8F8] rounded flex justify-between">
                          <span>Unposted GR Items:</span>
                          <span className="text-[#292A2E] font-semibold">12 Purchase Orders (€142,000)</span>
                        </div>
                        <div className="p-2 bg-[#F8F8F8] rounded flex justify-between">
                          <span>Cash Forecast Impact:</span>
                          <span className="text-[#10B981] font-semibold">Auto-Adjusted in SAC Model</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-blue-50 text-[#0D5CE5] text-xs font-medium rounded hover:bg-blue-100 transition-colors">
                          Trigger Auto-Accrual Post
                        </button>
                        <button className="px-3 py-1 bg-[#F8F8F8] text-[#64676D] text-xs font-medium rounded hover:bg-[#F2F3F5] transition-colors">
                          Open SAC Drilldown
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: THE AI ADOPTION GAP — Reference Atlassian problem/solution layout */}
      <section id="gap" className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Enterprise Reality"
            title="Are you trapped in the AI adoption gap?"
            description="While AI is critical for growth, over 80% of CEOs find their enterprise AI initiatives stuck in perpetual pilot mode without board-level ROI."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">01</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Data Paralysis
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Data is an asset, but spread across disconnected ERP and legacy silos, preventing proper enterprise model training.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">02</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Unclear ROI
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Projects started without a defined business case make defending outcomes to the board an uphill battle.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">03</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Skill Shortages
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Teams know their daily business, but have limited internal capability to engineer and govern enterprise-grade SAP AI.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">04</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Fragmented Efforts
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Pockets of decentralized experimentation without unified architecture create brittle, unmanageable shadow IT.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E8E8E8] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">05</span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-1 mb-1">
                  Trust & Governance
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Legitimate concerns around privacy, data leakage, and compliance stall progress without strict governance frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: AI ACROSS THE ENTERPRISE — Reference Airtable capability grid */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Enterprise Reach"
            title="Intelligent by design, not an afterthought"
            description="Percipere deploys SAP Business AI across five core enterprise functions, turning routine transactions into predictive intelligence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Finance */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Finance
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2 mb-2">
                  Smarter Finance, Fewer Touches
                </h4>
                <ul className="space-y-2 text-xs text-[#64676D]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Up to 95% touchless invoice processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Accurate continuous cash-flow prediction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Generative variance insights across business units</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Supply Chain */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Supply Chain
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2 mb-2">
                  Proactive & Resilient Supply
                </h4>
                <ul className="space-y-2 text-xs text-[#64676D]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Enhanced demand forecasts per SKU and region</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Reduced holding and safety-stock inventory costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Predictive shipment delays & alternative suppliers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Manufacturing
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2 mb-2">
                  Factories That Think Ahead
                </h4>
                <ul className="space-y-2 text-xs text-[#64676D]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>AI-driven predictive asset maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Automated quality control & spec scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Optimized constraint-based production scheduling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* HR & People */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  HR & People
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2 mb-2">
                  People at the Center
                </h4>
                <ul className="space-y-2 text-xs text-[#64676D]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Improved hiring accuracy & role candidate scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Workforce sentiment insights to curb attrition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Personalized employee career growth pathways</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sales & Services */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 transition-all flex flex-col justify-between lg:col-span-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Sales & Services
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2 mb-2">
                  Revenue with Intelligence
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                  <div className="p-3 bg-white rounded-lg border border-[#E8E8E8] text-xs">
                    <div className="font-semibold text-[#292A2E]">Accurate Forecasts</div>
                    <p className="text-[#64676D] mt-0.5">Win/loss probability scoring across pipeline.</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E8E8E8] text-xs">
                    <div className="font-semibold text-[#292A2E]">Scale Personalization</div>
                    <p className="text-[#64676D] mt-0.5">Automated B2B account messaging and tenders.</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E8E8E8] text-xs">
                    <div className="font-semibold text-[#292A2E]">Service Automation</div>
                    <p className="text-[#64676D] mt-0.5">Accelerated case resolution in SAP Service Cloud.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: HOW PERCIPERE MAKES AI WORK — Reference Rocketlane four-stage process */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Implementation Roadmap"
            title="How Percipere makes AI relevant, reliable and responsible"
            description="We de-risk the enterprise AI journey by tying implementations directly to measurable business KPIs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">01</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Strategic AI Roadmap
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Starting with executive business goals, Percipere collaboratively prioritizes high-ROI use cases to accelerate value.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">02</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Data Foundation & Governance
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Prepares and harmonizes SAP and non-SAP data landscapes under strict ethical, security, and ISO compliance frameworks.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">03</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Embedded Intelligence
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                As an SAP Gold Partner, Percipere activates SAP Joule directly into the S/4HANA core and business applications.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">04</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Scaling & Innovation
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Builds internal capability through knowledge transfer, operating governance models, and continuous performance tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: SAP JOULE DEDICATED SECTION — Reference Slack UI demonstration */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F8F8] border border-[#E8E8E8] rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0D5CE5]">
                  The Conversational ERP Interface
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#292A2E] font-normal mt-2 leading-tight">
                  SAP Joule: The Enterprise Copilot
                </h3>
                <p className="text-sm sm:text-base text-[#64676D] mt-3 leading-relaxed">
                  SAP Joule Copilot is redefining how over 300 million users interact with SAP systems. Rather than memorizing transaction codes, users interact via natural language to receive contextual recommendations and automate complex multi-app tasks.
                </p>
                <div className="mt-6 space-y-3 text-xs text-[#292A2E]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5CE5]" />
                    <span>Embedded across S/4HANA, SAC, SuccessFactors, and Ariba</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5CE5]" />
                    <span>Context-aware assistance trained on real enterprise data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5CE5]" />
                    <span>Custom agents engineered in Joule Studio for bespoke company rules</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 shadow-card">
                <div className="text-xs font-mono text-[#8A8D93] pb-2 border-b border-[#F0F0F0] mb-3">
                  SAP Joule Studio • Custom Agent Capability
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8]">
                    <span className="font-semibold text-[#292A2E] block">Bespoke Approval Agent</span>
                    <p className="text-[#64676D] mt-0.5">
                      Evaluates EPC subcontracting variances against contractual liquidated damages clauses before routing for sign-off.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8]">
                    <span className="font-semibold text-[#292A2E] block">Perishable Inventory Dispatch</span>
                    <p className="text-[#64676D] mt-0.5">
                      Monitors warehouse cold storage sensors and dynamically reallocates expiring batch deliveries to nearest distribution hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: RESPONSIBLE AI — Reference Notion feature blocks */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Security & Trust"
            title="Responsible AI, by design"
            description="AI is not just about capability — it is about trust. Governed under our ISO 27000:2022 framework."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-base text-[#292A2E] mb-2">
                Data Sovereignty
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Your data never leaves your enterprise control. Deployed in private networks; zero proprietary data is ever sent to public models like OpenAI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-base text-[#292A2E] mb-2">
                Enhanced Privacy
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Advanced techniques such as automated data masking protect sensitive customer and financial records, keeping confidential data anonymized.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D5CE5] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-base text-[#292A2E] mb-2">
                Robust Governance
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Strict role-based access controls, complete audit trails, and algorithmic compliance monitoring guarantee ethical and transparent operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem strip */}
      <EcosystemStrip current="SAP Business AI" />

      {/* SECTION G: FAQ AND CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />

          <div className="mt-16 p-8 sm:p-12 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal">
              Put SAP Business AI to work in your enterprise.
            </h3>
            <p className="text-sm text-[#64676D] mt-2 max-w-lg mx-auto">
              Schedule an architecture workshop to identify your highest-ROI AI use cases and review our ISO-governed implementation approach.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
              >
                Schedule SAP AI Roadmap Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="SAP Business AI" />
    </div>
  );
}
