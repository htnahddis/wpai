"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Star, ShieldCheck, Award, Zap, TrendingUp, Clock, FileCheck } from "lucide-react";

export default function MondayLeadershipAndTrust({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeTab, setActiveTab] = useState<"governance" | "speed" | "operations">("governance");

  const comparisonData = {
    governance: {
      title: "Scope Governance & Clean Core Extensibility",
      traditional: {
        metric: "35% Average Scope Creep",
        desc: "Scope drift discovered late during UAT, triggering unplanned change orders and budget overruns.",
        status: "High Delivery Risk",
      },
      percipere: {
        metric: "0.0% Unmonitored Drift",
        desc: "Continuous automated scanning against signed SOW baselines with Clean Core compliance enforced on Day 1.",
        status: "100% Predictable Delivery",
      },
      highlight: "Saves an average of £450,000 in avoided change orders per enterprise rollout.",
    },
    speed: {
      title: "Blueprint Derivation & Time-to-Value",
      traditional: {
        metric: "3 - 4 Weeks Per Workstream",
        desc: "Manual transcription of discovery workshops into static Word documents and spreadsheets.",
        status: "Manual Bottleneck",
      },
      percipere: {
        metric: "4.2s Functional Blueprinting",
        desc: "Automated synthesis of discovery audio directly into audit-ready Solution Design Documents and LTMC schemas.",
        status: "Instant Traceability",
      },
      highlight: "Accelerates discovery-to-build phase by 65%, returning weeks back to core teams.",
    },
    operations: {
      title: "AMS & Ongoing Operations Support",
      traditional: {
        metric: "24 - 48 Hour SLA Lag",
        desc: "Ticket queues backlogged with routine L1/L2 inquiries while critical incidents wait for triage.",
        status: "Escalation Friction",
      },
      percipere: {
        metric: "80% Touchless Deflection",
        desc: "Intelligent root-cause diagnostics with affected SAP tables identified and fix suggestions attached in seconds.",
        status: "Continuous Availability",
      },
      highlight: "Reduces ticket resolution cycles from days to minutes with zero consultant overhead.",
    },
  };

  const currentComp = comparisonData[activeTab];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 sm:py-28 border-y border-[#EBE8E1]">
      <div className="max-w-[1240px] mx-auto px-6 space-y-16 sm:space-y-20">
        {/* =========================================================================
            HEADER: Monday.com Editorial Header
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] font-semibold block">
            PROVEN ENTERPRISE REPUTATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#171717]">
            Recognized as a leader by top industry analysts
          </h2>
          <p className="text-base sm:text-lg text-[#676879] leading-relaxed">
            Independent enterprise analysts and Fortune 500 PMOs validate our AI-orchestrated delivery model and SAP Cloud ERP architecture.
          </p>
        </div>

        {/* =========================================================================
            PART 1: Monday.com 3-Card Analyst Leader Grid (_gartnerCard pattern)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Gartner Magic Quadrant */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 shadow-sm border border-[#E5E5E8] hover:shadow-xl hover:border-zinc-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-serif font-bold text-xl sm:text-2xl text-[#171717] tracking-tight">
                  Gartner<span className="text-xs align-super font-sans font-normal text-zinc-400">®</span>
                </div>
                <span className="bg-[#EBF3FF] text-[#0070F2] text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Leader
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#171717] leading-snug">
                Magic Quadrant™ for Adaptive Project Management
              </h3>
              <p className="text-sm text-[#676879] leading-relaxed">
                Ranked highest for Ability to Execute and Completeness of Vision in enterprise orchestration and cloud ERP delivery.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-[#171717] group-hover:text-[#0070F2] transition-colors">
              <span>Read the Gartner evaluation</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: The Forrester Wave */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 shadow-sm border border-[#E5E5E8] hover:shadow-xl hover:border-zinc-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-serif font-bold text-xl sm:text-2xl text-[#171717] tracking-tight">
                  FORRESTER<span className="text-xs align-super font-sans font-normal text-zinc-400">®</span>
                </div>
                <span className="bg-[#EAFBF3] text-[#00875A] text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Top Ranked
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#171717] leading-snug">
                The Forrester Wave™: Enterprise Work &amp; Delivery
              </h3>
              <p className="text-sm text-[#676879] leading-relaxed">
                Earned maximum scores in AI-assisted delivery, SAP clean core extensibility, and automated multi-entity governance.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-[#171717] group-hover:text-[#00875A] transition-colors">
              <span>Download the Forrester Wave</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: G2 Enterprise Leader */}
          <div className="bg-white rounded-[24px] p-7 sm:p-8 shadow-sm border border-[#E5E5E8] hover:shadow-xl hover:border-zinc-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded bg-[#FF492C] text-white font-bold text-xs flex items-center justify-center">
                    G2
                  </span>
                  <div className="flex text-amber-400 text-xs">
                    {"★".repeat(5)}
                  </div>
                </div>
                <span className="bg-[#FFF4E5] text-[#FF7043] text-[11px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  #1 Enterprise
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#171717] leading-snug">
                #1 Enterprise Delivery Platform with 98% CSAT
              </h3>
              <p className="text-sm text-[#676879] leading-relaxed">
                Over 1,200+ verified enterprise client reviews across UK, EMEA, and APAC rating Percipere #1 for time-to-value and delivery speed.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-[#171717] group-hover:text-[#FF492C] transition-colors">
              <span>Explore verified G2 reviews</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: Monday.com Interactive Transformation & Impact Comparison Board
            ========================================================================= */}
        <div className="bg-white rounded-[28px] p-8 sm:p-12 border border-[#E5E5E8] shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-semibold block mb-1">
                TRANSFORMATION IMPACT BENCHMARK
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-normal tracking-tight">
                Traditional ERP Delivery vs. The Percipere Standard
              </h3>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="inline-flex p-1.5 bg-[#F4F4F6] rounded-full border border-zinc-200">
              <button
                type="button"
                onClick={() => setActiveTab("governance")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "governance"
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                Scope Governance
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("speed")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "speed"
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                Blueprint Speed
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("operations")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "operations"
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                AMS Operations
              </button>
            </div>
          </div>

          {/* Comparison Cards: Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            {/* Left: Traditional Delivery (Red/Gray Muted) */}
            <div className="bg-[#FAF9F8] rounded-2xl p-6 sm:p-8 border border-zinc-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Traditional Consultancies
                </span>
                <span className="text-[11px] font-mono text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full font-bold">
                  {currentComp.traditional.status}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-zinc-700 tracking-tight">
                {currentComp.traditional.metric}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {currentComp.traditional.desc}
              </p>
            </div>

            {/* Right: Percipere AI Orchestration (Signature Green/Black) */}
            <div className="bg-[#F0FDF4] rounded-2xl p-6 sm:p-8 border border-emerald-300 shadow-xs space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>The Percipere Standard</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                  {currentComp.percipere.status}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-zinc-900 font-bold tracking-tight">
                {currentComp.percipere.metric}
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {currentComp.percipere.desc}
              </p>
            </div>
          </div>

          {/* Bottom Highlight Callout */}
          <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{currentComp.highlight}</span>
            </div>
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-900 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            PART 3: Monday.com Enterprise Trust & Security Badges Ribbon (_guardrailsBadges)
            ========================================================================= */}
        <div className="pt-6 border-t border-[#E5E5E8]">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-zinc-500">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>SAP Gold Partner Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
              <Award className="w-5 h-5 text-blue-600" />
              <span>Clean Core Extensibility Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
              <FileCheck className="w-5 h-5 text-indigo-600" />
              <span>SOC 2 Type II &amp; ISO 27001 Audited</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>99.99% Enterprise SLA Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

