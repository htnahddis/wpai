"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  Database, 
  PieChart, 
  Users, 
  Building, 
  ArrowUpRight, 
  Check, 
  Sparkles,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ComparisonTable, { ComparisonRow } from "@/components/ComparisonTable";
import EcosystemStrip from "@/components/EcosystemStrip";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ConsultationModal from "@/components/ConsultationModal";

export default function XpaEpmPage() {
  const [modalOpen, setModalOpen] = useState(false);

  // Comparison between Traditional FP&A and xP&A
  const xpaComparisonRows: ComparisonRow[] = [
    {
      aspect: "Scope & Integration",
      traditional: "Finance-only budgeting within isolated spreadsheets and teams",
      percipere: "Enterprise-wide planning uniting finance, sales, HR, and operations",
    },
    {
      aspect: "Data & Planning Cycles",
      traditional: "Historical data updated quarterly in static, rigid cycles",
      percipere: "Real-time data with continuous, dynamic rolling forecasts",
    },
    {
      aspect: "Technology & Collaboration",
      traditional: "Disconnected spreadsheets with finance-centric bottleneck workflows",
      percipere: "Cloud SAP platforms enabling cross-functional executive partnership",
    },
    {
      aspect: "Outcome Focus",
      traditional: "Tracks past performance and static budget compliance",
      percipere: "Drives predictive decisions for growth and risk management",
    },
  ];

  const faqItems: FaqItem[] = [
    {
      question: "What is extended planning and analysis (xP&A)?",
      answer:
        "Extended Planning & Analysis (xP&A) is an enterprise-wide planning approach that connects finance, operations, supply chain, workforce, and commercial planning through integrated analytics and forecasting. Unlike traditional FP&A built around siloed spreadsheets and static budgets, xP&A enables continuous planning, predictive forecasting, and cross-functional collaboration.",
    },
    {
      question: "How does xP&A improve enterprise forecasting accuracy?",
      answer:
        "xP&A integrates real-time operational and financial data into a unified planning environment. Organizations can model multiple what-if business scenarios, automate forecasting updates, and align planning assumptions across departments, accelerating decision responsiveness.",
    },
    {
      question: "What are the benefits of enterprise performance management software?",
      answer:
        "Modern EPM platforms streamline budgeting, rolling forecasts, financial consolidation, period-end closing, and multi-entity reporting while embedding predictive analytics and governance across all operating units.",
    },
    {
      question: "How does SAP Analytics Cloud support enterprise planning?",
      answer:
        "SAP Analytics Cloud (SAC) combines real-time dashboards, machine-learning forecasting, scenario modeling, and enterprise reporting into a single cloud-native environment that connects directly with S/4HANA transactional data.",
    },
    {
      question: "What makes Percipere's xP&A packages superior?",
      answer:
        "Percipere brings pre-built industry-tailored data models, ready-to-run best practice dashboards, and a 100% completion track record backed by 275+ certified EPM, ERP, and analytics specialists.",
    },
  ];

  return (
    <div className="bg-white">
      {/* SECTION A: HERO — Reference Auctor editorial hero + Airtable product preview */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0D5CE5] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5CE5]"></span>
              SAP ENTERPRISE PERFORMANCE MANAGEMENT
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-[#292A2E] tracking-tight">
              Bring every business plan together.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed text-balance">
              Connect finance, sales, HR and operations through integrated planning, forecasting and analytics powered by SAP.
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
                href="#comparison"
                className="px-6 py-3 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-sm font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
              >
                Traditional FP&A vs xP&A
              </a>
            </div>
          </div>

          {/* Airtable-Style Consolidated Enterprise Planning Dashboard Preview */}
          <div className="max-w-4xl mx-auto bg-white border border-[#E8E8E8] rounded-2xl shadow-card overflow-hidden">
            {/* Window bar */}
            <div className="bg-[#F8F8F8] border-b border-[#E8E8E8] px-4 py-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                <span className="font-semibold text-[#292A2E]">
                  SAP Analytics Cloud • Consolidated xP&A Matrix
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Single Governed Source of Truth
              </span>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 bg-white space-y-6">
              {/* Feeder streams uniting into one plan */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8]">
                  <span className="text-[10px] uppercase font-mono text-[#8A8D93]">Finance Stream</span>
                  <div className="text-sm font-bold text-[#292A2E] mt-0.5">P&L & Cash Flow</div>
                  <span className="text-[10px] text-[#10B981]">Auto-Consolidated</span>
                </div>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8]">
                  <span className="text-[10px] uppercase font-mono text-[#8A8D93]">Sales Stream</span>
                  <div className="text-sm font-bold text-[#292A2E] mt-0.5">Pipeline & Quotas</div>
                  <span className="text-[10px] text-[#10B981]">Real-time Sync</span>
                </div>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8]">
                  <span className="text-[10px] uppercase font-mono text-[#8A8D93]">HR Stream</span>
                  <div className="text-sm font-bold text-[#292A2E] mt-0.5">Headcount & Comp</div>
                  <span className="text-[10px] text-[#10B981]">Aligned to Budget</span>
                </div>
                <div className="p-3 bg-[#F8F8F8] rounded-xl border border-[#E8E8E8]">
                  <span className="text-[10px] uppercase font-mono text-[#8A8D93]">Operations</span>
                  <div className="text-sm font-bold text-[#292A2E] mt-0.5">Supply & Capacity</div>
                  <span className="text-[10px] text-[#10B981]">MRP Connected</span>
                </div>
              </div>

              {/* Central Consolidated Plan Visual */}
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#0D5CE5] uppercase tracking-wider">
                    Executive Consolidated Outcome
                  </span>
                  <h4 className="text-base font-semibold text-[#292A2E] mt-0.5">
                    Rolling 52-Week Continuous Forecast Model
                  </h4>
                  <p className="text-xs text-[#64676D] mt-1">
                    What-if scenario simulations with instant cross-departmental impact calculation.
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0 text-right">
                  <div>
                    <span className="text-xs font-mono text-[#8A8D93]">Planning Cycle:</span>
                    <div className="text-base font-bold text-[#10B981]">50% Faster</div>
                  </div>
                  <div className="w-px h-8 bg-blue-200"></div>
                  <div>
                    <span className="text-xs font-mono text-[#8A8D93]">Reporting Errors:</span>
                    <div className="text-base font-bold text-[#10B981]">-95% Cut</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: WHAT IS xP&A? — Reference Atlassian's simple product explanations */}
      <section id="comparison" className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Paradigm Shift"
            title="What is Extended Planning & Analysis (xP&A)?"
            description="xP&A transforms static, isolated finance budgeting into continuous, enterprise-wide planning uniting strategy, finance, and operational reality."
          />

          <ComparisonTable
            title="Traditional FP&A vs. Extended Planning & Analysis (xP&A)"
            traditionalHeader="Traditional FP&A (Siloed)"
            percipereHeader="Extended Planning & Analysis (xP&A)"
            rows={xpaComparisonRows}
          />
        </div>
      </section>

      {/* SECTION C: CORE PLANNING CAPABILITIES — Reference Airtable bento grid */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solution Packages"
            title="Four core enterprise planning capabilities"
            description="Designed to eliminate data wrangling, accelerate period-end closes, and empower forward-looking executive governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Package 01</span>
                <h3 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                  Strategic Financial & Operational Planning
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Replaces static budgeting with driver-based dynamic models tied to operations. Run instant what-if scenarios to test business assumptions and pivot with agility.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#E8E8E8] text-xs text-[#292A2E]">
                  <strong>Business Outcome:</strong> Finance spends 75% less time collecting data and pivots to forward-looking strategy based on real-time operational drivers.
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Package 02</span>
                <h3 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                  Business Analytics & Data Governance
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Establishes a single, governed source of truth across all SAP and non-SAP datasets. Self-service analytics puts trusted figures in every leader&apos;s hands.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#E8E8E8] text-xs text-[#292A2E]">
                  <strong>Business Outcome:</strong> Zero data preparation bottlenecks; unified data fabrics deliver out-of-the-box dashboards with immediate executive trust.
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Package 03</span>
                <h3 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                  Accelerated Financial Consolidation & Closing
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Automates complex multi-entity consolidation, inter-company eliminations, currency conversions, and adjustments into a fully auditable close.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#E8E8E8] text-xs text-[#292A2E]">
                  <strong>Business Outcome:</strong> Instant generation of standalone and consolidated financial statements, eliminating reconciliation pitfalls.
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] hover:border-blue-200 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Package 04</span>
                <h3 className="font-serif text-2xl font-normal text-[#292A2E] mt-1 mb-2">
                  Forecasting & Scenario Modelling
                </h3>
                <p className="text-sm text-[#64676D] leading-relaxed mb-4">
                  Embeds machine-learning algorithms to calculate rolling multi-period forecasts, sensitivity curves, and cash-flow impact across changing market conditions.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#E8E8E8] text-xs text-[#292A2E]">
                  <strong>Business Outcome:</strong> Proactive risk management; operational decisions are stress-tested before capital is committed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: HOW PERCIPERE DELIVERS xP&A — Reference Rocketlane process presentation */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Delivery Methodology"
            title="Four stages to unified enterprise planning"
            description="Our structured transformation roadmap balances technology integration with organizational adoption."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Stage 01</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Assessment
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Mapping existing finance and operational data flows, KPI definitions, and compliance requirements to identify governance gaps.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Stage 02</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Integrated Setup
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Deploying pre-built industry data models and SAC integration layers connecting SAP S/4HANA with commercial systems.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Stage 03</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Adoption
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Comprehensive change management, finance team upskilling, and role-based dashboard enablement for lasting usage.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5] font-semibold">Stage 04</span>
              <h4 className="font-semibold text-base text-[#292A2E] mt-1 mb-2">
                Optimisation
              </h4>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Continuous performance tuning, rolling forecast automation, and sustained predictive model calibration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: RESULTS AND CREDIBILITY — Reference Ramp statistics */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Credibility in Numbers"
            title="Proven outcomes across finance and supply chain"
            description="Preserving exact leadership metrics from enterprise client transformations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="p-8 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <div className="font-serif text-5xl font-normal text-[#292A2E] tracking-tight">
                40+
              </div>
              <p className="text-sm font-semibold text-[#292A2E] mt-2">
                Engagements Delivered
              </p>
              <p className="text-xs text-[#64676D] mt-1">
                Deep expertise in Finance & Supply Chain integration
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <div className="font-serif text-5xl font-normal text-[#0D5CE5] tracking-tight">
                275
              </div>
              <p className="text-sm font-semibold text-[#292A2E] mt-2">
                Enterprise Experts
              </p>
              <p className="text-xs text-[#64676D] mt-1">
                Specialized in EPM, ERP, AI & Automation
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8]">
              <div className="font-serif text-5xl font-normal text-[#10B981] tracking-tight">
                100%
              </div>
              <p className="text-sm font-semibold text-[#292A2E] mt-2">
                Project Completion Rate
              </p>
              <p className="text-xs text-[#64676D] mt-1">
                Zero abandoned or stalled implementations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: CASE STUDIES — Reference Dropbox customer stories */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client Success"
            title="Real-world results delivered by Percipere"
            description="Documented outcomes from multi-national corporate performance management programs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Case Study 1 */}
            <div className="p-7 bg-white rounded-2xl border border-[#E8E8E8] shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Global Engineering Enterprise
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2 mb-2">
                  5,000+ Employee Solutions Leader
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                  Integrated SAP ERP with SAP Analytics Cloud to unify decentralized operational reports into a single executive interface.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Reporting Errors</span>
                    <span className="text-[#10B981] font-bold text-sm">95% Cut</span>
                  </div>
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Processing Speed</span>
                    <span className="text-[#0D5CE5] font-bold text-sm">80% Faster</span>
                  </div>
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Analytics FTEs</span>
                    <span className="text-[#292A2E] font-bold text-sm">75% Reduced</span>
                  </div>
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Forecast Horizon</span>
                    <span className="text-[#292A2E] font-bold text-sm">52-Wk Rolling</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-[#64676D]">
                Delivered real-time executive dashboards with complete audit readiness.
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="p-7 bg-white rounded-2xl border border-[#E8E8E8] shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Consumer Goods Conglomerate
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2 mb-2">
                  135+ Years in Business, £689m Turnover
                </h4>
                <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                  Delivered a unified global BPC planning model across 20+ operating countries in just 8 months, replacing manual spreadsheets.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Delivery Speed</span>
                    <span className="text-[#10B981] font-bold text-sm">8 Months</span>
                  </div>
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Global Reach</span>
                    <span className="text-[#0D5CE5] font-bold text-sm">20+ Countries</span>
                  </div>
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Planning Horizon</span>
                    <span className="text-[#292A2E] font-bold text-sm">2-Year Rolling</span>
                  </div>
                  <div className="p-2.5 bg-[#F8F8F8] rounded border border-[#E8E8E8]">
                    <span className="text-[#64676D] block text-[10px]">Offline Rework</span>
                    <span className="text-[#10B981] font-bold text-sm">Eliminated</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-[#64676D]">
                Accelerated forecast turnaround times across regional markets.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: PERCIPLAN CONNECTION */}
      <section className="py-16 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-semibold text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded">
                Also Built on SAP Analytics Cloud
              </span>
              <h4 className="font-serif text-2xl font-normal text-[#292A2E] mt-2">
                PerciPlan — Dedicated Demand Planning
              </h4>
              <p className="text-xs sm:text-sm text-[#64676D] mt-1 max-w-xl leading-relaxed">
                For mid-market manufacturers and wholesalers needing structured consensus forecasting without the massive overhead of enterprise IBP. Connects demand forecasts directly into S/4HANA for automated procurement.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-[#292A2E] text-white text-xs font-semibold rounded-lg hover:bg-[#101214] transition-colors shrink-0"
            >
              Learn About PerciPlan
            </button>
          </div>
        </div>
      </section>

      {/* Ecosystem strip */}
      <EcosystemStrip current="xP&A / PerciPlan" />

      {/* SECTION H: FAQ AND CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />

          <div className="mt-16 p-8 sm:p-12 bg-[#F8F8F8] border border-[#E8E8E8] rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#292A2E] font-normal">
              Modernise your enterprise planning.
            </h3>
            <p className="text-sm text-[#64676D] mt-2 max-w-lg mx-auto">
              Schedule an executive consultation with our EPM and SAP Analytics Cloud architects to unify your financial and operational plans.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
              >
                Schedule xP&A Advisory Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="xP&A & EPM" />
    </div>
  );
}
