"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Database, 
  Bot, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  FileText, 
  Building, 
  Factory, 
  Zap, 
  ArrowUpRight, 
  Check, 
  Briefcase,
  AlertTriangle
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import EcosystemStrip from "@/components/EcosystemStrip";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ConsultationModal from "@/components/ConsultationModal";

export default function AiAccelerationPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const faqItems: FaqItem[] = [
    {
      question: "What are Percipere's AI acceleration services?",
      answer:
        "Percipere's AI acceleration services help organizations rapidly deploy, scale, and operationalize AI across enterprise systems and workflows. These include strategic consulting, machine-learning implementation, process automation, predictive analytics, and ready-to-run PerciSuite applications.",
    },
    {
      question: "Can Percipere's AI acceleration services integrate with ERP systems like SAP?",
      answer:
        "Yes. Percipere offers direct integration with SAP S/4HANA, SAC, and BTP as well as non-SAP enterprise databases. We embed SAP Joule, custom LangGraph agents, and predictive ML models directly into live operational workflows.",
    },
    {
      question: "What is the difference between Percipere AI Services and PerciSuite?",
      answer:
        "Percipere AI Services is our consulting-led practice covering bespoke AI strategy, data fabrics, agentic design, and enterprise architecture. PerciSuite is our catalog of modular, pre-built AI applications (e.g. PerciDesk, PerciRio, Fraud Detection) that deploy rapidly without custom code cycles.",
    },
    {
      question: "What ROI should organizations expect from AI acceleration initiatives?",
      answer:
        "Typical outcomes include 50%+ reduction in manual processing, improved inventory working capital, higher forecast accuracy, and touchless document extraction. Many customers begin realizing measurable ROI within the first 90 days of engagement.",
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION A: HERO — Reference Auctor + Linear */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0D5CE5] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5CE5]"></span>
              ENTERPRISE AI ACCELERATION
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-[#292A2E] tracking-tight">
              Turn enterprise data into business intelligence.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed text-balance">
              Move beyond reporting. Embed AI into your existing enterprise systems to automate processes, predict outcomes and make better decisions.
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
                href="#paths"
                className="px-6 py-3 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-sm font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
              >
                Explore Services & PerciSuite
              </a>
            </div>
          </div>

          {/* Auctor/Linear Style Data-to-Intelligence Transformation Visual */}
          <div className="max-w-4xl mx-auto bg-white border border-[#E8E8E8] rounded-2xl shadow-card p-6 sm:p-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8D93]">
                The Intelligent Transformation Pipeline
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
              {/* Step 1 */}
              <div className="p-4 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-center">
                <span className="text-[10px] font-mono text-[#0D5CE5] font-semibold">Stage 01</span>
                <div className="text-sm font-bold text-[#292A2E] mt-1">Enterprise Data</div>
                <p className="text-[11px] text-[#64676D] mt-1">
                  10+ years of ERP, procurement, and transactional history.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-center">
                <span className="text-[10px] font-mono text-[#0D5CE5] font-semibold">Stage 02</span>
                <div className="text-sm font-bold text-[#292A2E] mt-1">AI Processing</div>
                <p className="text-[11px] text-[#64676D] mt-1">
                  Predictive ML algorithms, agentic logic, and Joule copilot.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] text-center">
                <span className="text-[10px] font-mono text-[#0D5CE5] font-semibold">Stage 03</span>
                <div className="text-sm font-bold text-[#292A2E] mt-1">Business Insight</div>
                <p className="text-[11px] text-[#64676D] mt-1">
                  Predictive cash flow, inventory risk, and anomaly detection.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <span className="text-[10px] font-mono text-[#0D5CE5] font-semibold">Stage 04</span>
                <div className="text-sm font-bold text-[#0D5CE5] mt-1">Autonomous Action</div>
                <p className="text-[11px] text-[#292A2E] mt-1">
                  Auto-raised POs, dynamic rescheduling, and touchless closes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: WHY AI ACCELERATION MATTERS — Reference Ramp */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Enterprise Imperative"
            title="Why companies turn to Percipere for AI acceleration"
            description="ERP was built to record past transactions. AI acceleration enables the same systems to anticipate and decide."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">01</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Your Data Is a Goldmine
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                You sit on 10–15 years of transaction records. We convert passive databases into active decision engines.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">02</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Off-the-Shelf Isn&apos;t Enough
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Standard AI copilots lack your custom workflows. Percipere tailors intelligence to how your company actually runs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">03</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Proven Implementation
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Navigating the crowded AI market is overwhelming. We deploy what saves cost and delivers edge, cutting hype.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">04</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                ROI Over Hype
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                We embed intelligence only where it creates measurable competitive advantage, not disconnected science experiments.
              </p>
            </div>
          </div>

          {/* Proven Outcomes in Numbers (Ramp style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-6 bg-white rounded-xl border border-[#E8E8E8]">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#292A2E]">70+</div>
              <div className="text-xs text-[#64676D] mt-1 font-medium">Successful Implementations</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[#E8E8E8]">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#0D5CE5]">30+</div>
              <div className="text-xs text-[#64676D] mt-1 font-medium">Countries Served</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[#E8E8E8]">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#292A2E]">60+</div>
              <div className="text-xs text-[#64676D] mt-1 font-medium">AI & ML Champions</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[#E8E8E8]">
              <div className="font-serif text-3xl sm:text-4xl font-normal text-[#10B981]">20+</div>
              <div className="text-xs text-[#64676D] mt-1 font-medium">AI/ML Extensions</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: TWO PATHS TO VALUE — Reference Atlassian product-category cards */}
      <section id="paths" className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Engagement Model"
            title="Two distinct paths to AI value"
            description="Whether you need strategic enterprise consulting or modular, ready-to-run AI applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Path 1: Percipere AI Services */}
            <div className="bg-white border-2 border-[#292A2E] rounded-2xl p-7 shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#292A2E] bg-[#F4F5F6] px-2.5 py-1 rounded-full border border-[#E8E8E8]">
                  Consulting-Led
                </span>
                <h3 className="font-serif text-2xl text-[#292A2E] font-normal mt-3 mb-2">
                  Percipere AI Services
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                  A consulting-led approach building foundations: enterprise AI strategy, unified data fabrics, agentic workflows, and ERP intelligence embedded directly into core operations.
                </p>
                <ul className="space-y-2 text-xs text-[#292A2E]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#292A2E]" />
                    <span>Custom AI roadmap tailored to business KPIs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#292A2E]" />
                    <span>Data governance and private cloud modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#292A2E]" />
                    <span>SAP Gold Partner integration with BTP & Joule</span>
                  </li>
                </ul>
              </div>
              <a
                href="#services"
                className="mt-6 w-full py-2.5 bg-[#292A2E] text-white text-xs font-semibold rounded-lg hover:bg-[#101214] transition-colors text-center block"
              >
                View 6 Consulting Services
              </a>
            </div>

            {/* Path 2: PerciSuite */}
            <div className="bg-white border-2 border-[#0D5CE5] rounded-2xl p-7 shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  Ready-to-Deploy
                </span>
                <h3 className="font-serif text-2xl text-[#292A2E] font-normal mt-3 mb-2">
                  PerciSuite Tools
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                  A toolkit of modular, ready-to-run AI applications developed in our labs and tested with enterprise clients. Each tool plugs directly into existing systems without lengthy development cycles.
                </p>
                <ul className="space-y-2 text-xs text-[#292A2E]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D5CE5]" />
                    <span>Modular plug-and-play AI applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D5CE5]" />
                    <span>Immediate impact on forecasting, fraud & inventory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D5CE5]" />
                    <span>Rapid deployment timeline measured in weeks</span>
                  </li>
                </ul>
              </div>
              <a
                href="#percie-suite"
                className="mt-6 w-full py-2.5 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors text-center block"
              >
                View 8 PerciSuite Applications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: PERCIPERE AI SERVICES — Reference Airtable capability grid */}
      <section id="services" className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Consulting Practice"
            title="Percipere AI Services"
            description="Six specialized consulting capabilities designed to build scalable, governed AI architectures."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Service 01</span>
              <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                AI Strategic Consulting
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Define the &apos;why&apos; before the &apos;what.&apos; Percipere aligns enterprise AI initiatives directly with board goals, P&L levers, and operational KPIs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Service 02</span>
              <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                Business Intelligence Consulting
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Unify fragmented enterprise data fabrics into real-time analytics, continuous rolling forecasts, and automated decision intelligence.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Service 03</span>
              <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                AI/ML & Data Science Consulting
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Predict demand, identify risk, and optimize working capital using enterprise-grade machine learning models grounded in actual business history.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Service 04</span>
              <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                GenAI Consulting
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Deploy enterprise copilots, LLM-driven interfaces, and automated content workflows securely aligned to confidential enterprise parameters.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Service 05</span>
              <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                Agentic AI Consulting
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Build autonomous AI agents capable of planning, acting, and self-correcting across multi-step enterprise workflows using LangGraph and n8n.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Service 06</span>
              <h4 className="text-base font-semibold text-[#292A2E] mt-1 mb-2">
                Enterprise AI Consulting (SAP)
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                As an SAP Gold Partner, Percipere embeds Joule, SAC, and BTP to turn ERP from a transaction ledger into an active decision-making engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: PERCISUITE PRODUCT BENTO GRID — Reference Folk / Airtable */}
      <section id="percie-suite" className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ready-to-Run Product Suite"
            title="PerciSuite: Business-friendly, ready-to-deploy AI tools"
            description="Modular AI solutions developed in Percipere's labs and tested with clients, plugging directly into your existing infrastructure."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. PerciDesk */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Copilot</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  PERCIDESK
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Enterprise conversational assistant making policies, compliance rules, and process knowledge instantly accessible.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Eliminates SOP searching
              </div>
            </div>

            {/* 2. PerciBot */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Analytics</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  PERCIBOT
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Conversational AI for analytics. Ask questions in natural language and receive instant charts and executive summaries from SAP.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Dynamic real-time insight
              </div>
            </div>

            {/* 3. PerciHire */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Talent</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  PERCIHIRE
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  AI-powered ATS matching resumes to open roles with objective scoring and auto-scheduled first-level evaluations.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Accelerated HR hiring
              </div>
            </div>

            {/* 4. PerciPlan */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Planning</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  PERCIPLAN
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Machine learning on SAP Business Data Cloud to predict demand, automate ABC/XYZ classification, and calculate safety stock.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Embedded in SAC
              </div>
            </div>

            {/* 5. PerciRio */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Inventory</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  PERCIRIO
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Transforms static MRP into a dynamic inventory strategy, analyzing lead times and cost to free working capital.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Right stock, right time
              </div>
            </div>

            {/* 6. Commodity Price Prediction */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Procurement</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  Commodity Prediction
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Forecasts raw material and commodity prices based on market trends, enabling optimized forward purchasing contracts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Spot vs Forward insights
              </div>
            </div>

            {/* 7. Fraud Detection */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Compliance</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  Fraud Detection
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Maintains historical invoice image libraries, detecting duplicate claims, pinpointing tampering, and scoring authenticity.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Strengthened compliance
              </div>
            </div>

            {/* 8. Document Extraction */}
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#0D5CE5] uppercase font-semibold">Automation</span>
                <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-1.5">
                  AI Document Extraction
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Automates high-volume processing of invoices, POs, and delivery notes using SAP Document AI to eliminate data entry.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] font-mono text-[#10B981]">
                ✓ Drastic error reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: RESPONSIBLE AI — Reference Notion */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Security & Trust"
            title="Responsible AI, by design"
            description="Governed by our ISO 27000:2022 framework to ensure enterprise data privacy, sovereignty, and auditability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8]">
              <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Principle 01</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Data Sovereignty
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Data never leaves enterprise boundaries. All models are deployed within private VPC networks; zero data shared with public LLMs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8]">
              <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Principle 02</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Enhanced Privacy
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Automated data masking obfuscates sensitive customer, employee, and supplier records while maintaining analytical precision.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8]">
              <span className="text-xs font-mono font-semibold text-[#0D5CE5]">Principle 03</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Robust Governance
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Full algorithmic audit trails, role-based access control, and model explainability to fulfill strict enterprise compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: INDUSTRY APPLICATIONS — Reference Atlassian category cards */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Cross-Sector Delivery"
            title="AI applications across key industries"
            description="Documented implementations delivering measurable margin, throughput, and inventory outcomes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <h4 className="text-base font-semibold text-[#292A2E] mb-2">Manufacturing</h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Minimize machine downtime with predictive maintenance, optimize shopfloor production schedules, and automate quality inspection in SAP QM.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <h4 className="text-base font-semibold text-[#292A2E] mb-2">Wholesale & Distribution</h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Boost margins through warehouse layout optimization, SKU demand forecasting to prevent stockouts, and intelligent route clustering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <h4 className="text-base font-semibold text-[#292A2E] mb-2">Distillery & Beverages</h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Optimize raw ingredient sourcing, manage barrel aging and inventory with precision, and model seasonal consumer preference shifts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <h4 className="text-base font-semibold text-[#292A2E] mb-2">Agri & Food Processing</h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Satellite crop yield forecasting, perishability shelf-life tracking, and automated batch traceability across farm-to-table supply chains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <h4 className="text-base font-semibold text-[#292A2E] mb-2">Chemicals & Fertilisers</h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Formula optimization, commodity raw-material price shift predictions, and regulatory REACH compliance automation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <h4 className="text-base font-semibold text-[#292A2E] mb-2">Energy & Utilities</h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Avoid critical grid downtime with predictive equipment monitoring, and run consumption demand forecasting models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem strip */}
      <EcosystemStrip current="AI Acceleration" />

      {/* SECTION H: FAQ AND CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />

          <div className="mt-16 p-8 sm:p-12 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal">
              Accelerate your enterprise AI journey.
            </h3>
            <p className="text-sm text-[#64676D] mt-2 max-w-lg mx-auto">
              Discuss an enterprise AI opportunity with our certified data science and SAP architecture leads.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
              >
                Schedule AI Acceleration Briefing
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="Enterprise AI Acceleration" />
    </div>
  );
}
