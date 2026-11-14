"use client";

import React, { useState } from "react";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import ComparisonTable, { ComparisonRow } from "@/components/ComparisonTable";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function XpaEpmView() {
  const [modalOpen, setModalOpen] = useState(false);

  const xpaComparison: ComparisonRow[] = [
    {
      aspect: "Planning Scope",
      traditional: "Isolated within finance spreadsheets",
      percipere: "Unites Finance, Sales, HR, and Supply Chain in one plan",
    },
    {
      aspect: "Forecast Cycles",
      traditional: "Static annual budgets updated quarterly",
      percipere: "Continuous 52-week rolling forecasts with real-time data",
    },
    {
      aspect: "Decision Speed",
      traditional: "Weeks spent wrangling spreadsheet discrepancies",
      percipere: "Instant what-if scenario models to test business choices",
    },
    {
      aspect: "Financial Close",
      traditional: "Painful manual intercompany eliminations",
      percipere: "Automated, fully auditable multi-entity close",
    },
  ];

  return (
    <div className="bg-white text-[#191923]">
      {/* HERO — Auctor Editorial Layout */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D] block mb-3">
              xP&A & EPM Solutions
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              Bring every business plan together.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed max-w-xl">
              Connect finance, sales, HR, and operations through integrated forecasting on SAP Analytics Cloud. No more broken spreadsheets.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
              >
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Visual Consolidated Matrix */}
          <div className="p-8 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA]">
            <div className="text-xs font-mono text-[#64676D] mb-4">ONE CONSOLIDATED ENTERPRISE PLAN</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-xl border border-[#EAEAEA]">
                <div className="text-xs text-[#8A8D93] font-mono">FINANCE</div>
                <div className="text-sm font-bold text-[#191923] mt-1">P&L & Cash Flow</div>
                <div className="text-[11px] text-[#10B981] mt-0.5">Automated</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#EAEAEA]">
                <div className="text-xs text-[#8A8D93] font-mono">SALES</div>
                <div className="text-sm font-bold text-[#191923] mt-1">Pipeline & Quotas</div>
                <div className="text-[11px] text-[#10B981] mt-0.5">Live Sync</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#EAEAEA]">
                <div className="text-xs text-[#8A8D93] font-mono">HR & TEAMS</div>
                <div className="text-sm font-bold text-[#191923] mt-1">Headcount & Cost</div>
                <div className="text-[11px] text-[#10B981] mt-0.5">Aligned</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#EAEAEA]">
                <div className="text-xs text-[#8A8D93] font-mono">SUPPLY CHAIN</div>
                <div className="text-sm font-bold text-[#191923] mt-1">Demand & Capacity</div>
                <div className="text-[11px] text-[#10B981] mt-0.5">MRP Linked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS xP&A — Comparison Table */}
      <section className="py-20 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
              The Difference
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
              Traditional FP&A vs. Extended Planning (xP&A)
            </h2>
          </div>

          <ComparisonTable rows={xpaComparison} traditionalHeader="Traditional FP&A" percipereHeader="xP&A with Percipere" />
        </div>
      </section>

      {/* FOUR CORE PACKAGES — Clean Cards */}
      <section className="py-24 bg-[#F8F8FA] border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
              Four enterprise planning packages.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5]">PACKAGE 01</span>
              <h3 className="font-serif text-xl font-normal mt-1 mb-2">Strategic Financial & Operational Planning</h3>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Replaces static budgets with dynamic models tied to real-time operations, allowing instant strategy pivots.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5]">PACKAGE 02</span>
              <h3 className="font-serif text-xl font-normal mt-1 mb-2">Business Analytics & Single Source of Truth</h3>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Harmonizes SAP and non-SAP data into unified, governed dashboards that business leaders can trust.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5]">PACKAGE 03</span>
              <h3 className="font-serif text-xl font-normal mt-1 mb-2">Accelerated Financial Consolidation & Close</h3>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Automates inter-company eliminations, currency translations, and audit reporting for a stress-free close.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5]">PACKAGE 04</span>
              <h3 className="font-serif text-xl font-normal mt-1 mb-2">Continuous Forecasting & Scenario Modelling</h3>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Machine learning algorithms predict demand, cost variance, and cash impact across shifting economic conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & CLIENT RESULTS */}
      <section className="py-20 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center sm:text-left">
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#191923]">40+</div>
              <div className="text-xs font-semibold mt-2">Engagements Delivered</div>
              <p className="text-xs text-[#64676D]">Finance & Supply Chain transformations</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#0D5CE5]">275</div>
              <div className="text-xs font-semibold mt-2">Certified Specialists</div>
              <p className="text-xs text-[#64676D]">In EPM, ERP, and Automation</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#10B981]">100%</div>
              <div className="text-xs font-semibold mt-2">Completion Record</div>
              <p className="text-xs text-[#64676D]">Every planned engagement delivered</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#F8F8FA] rounded-xl border border-[#EAEAEA]">
              <span className="text-xs font-mono text-[#0D5CE5]">GLOBAL ENGINEERING LEADER (5,000+ EMPLOYEES)</span>
              <p className="text-xs text-[#191923] font-semibold mt-1 mb-1">
                95% fewer reporting errors, 75% fewer analytics FTEs, and rolling 52-week forecasts.
              </p>
            </div>

            <div className="p-6 bg-[#F8F8FA] rounded-xl border border-[#EAEAEA]">
              <span className="text-xs font-mono text-[#0D5CE5]">INTERNATIONAL CONSUMER GOODS (£689M TURNOVER)</span>
              <p className="text-xs text-[#191923] font-semibold mt-1 mb-1">
                Global BPC planning model delivered across 20+ countries in just 8 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="xP&A / PerciPlan" />

      {/* CLOSING CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#191923]">
            Unify your enterprise planning.
          </h2>
          <p className="text-xs text-[#64676D] mt-2 mb-8">
            Speak with an SAP Analytics Cloud architect about your company&apos;s planning cycles.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="xP&A & EPM" />
    </div>
  );
}
