"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Check,
  CheckCircle2,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import EcosystemStrip from "@/components/EcosystemStrip";
import MondayWhyChooseGrid from "@/components/MondayWhyChooseGrid";
import MondayNymeriaIntegrations from "@/components/MondayNymeriaIntegrations";

// Separated Data File
import {
  JOULE_SCENARIOS,
  ENTERPRISE_HURDLES,
  AGENT_WORKFLOWS,
  TELEMETRY_METRICS,
} from "@/data/sapBusinessAi.data";

export default function SapBusinessAiPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeScenarioId, setActiveScenarioId] = useState<string>("finance");
  const activeScenario = JOULE_SCENARIOS.find((s) => s.id === activeScenarioId) || JOULE_SCENARIOS[0];

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* =========================================================================
          1. HERO — Display Proportions + Modern Clean Feel (No Eyebrows)
          ========================================================================= */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="font-sans text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              AI embedded into your daily <span className="text-[#FF00B7]">SAP workflows</span>.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#777783] font-normal leading-relaxed max-w-2xl">
              Transform finance, procurement, and operations using SAP Joule, SAP BTP AI Foundation, and secure LangGraph autonomous agents grounded in business process context.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
              >
                <span>Book an AI Architecture Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#joule-demo"
                className="px-6 py-3.5 bg-[#F8F8FA] hover:bg-[#F0EFFF] text-[#191923] border border-[#E9E9EF] text-sm font-medium rounded-full transition-colors"
              >
                Explore Joule Capabilities
              </a>
            </div>
          </div>

          {/* =========================================================================
              2. JOULE INTERACTIVE WORKSPACE TERMINAL
              ========================================================================= */}
          <div id="joule-demo" className="bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] overflow-hidden shadow-card">
            {/* Console Toolbar Header */}
            <div className="px-5 py-3.5 bg-white border-b border-[#E9E9EF] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF00B7]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00B7FF]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1B1466]"></span>
                </div>
                <div className="h-4 w-[1px] bg-[#E9E9EF]"></div>
                <span className="font-semibold text-[#191923]">SAP Joule Copilot v2.4</span>
                <span className="text-[#777783] hidden sm:inline">•</span>
                <span className="text-[#777783] hidden sm:inline">SAP S/4HANA Cloud (Clean Core)</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E6F8FF] text-[#0088CC] border border-[#00B7FF]/30 text-[10px] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF] animate-pulse"></span>
                  <span>Grounded in CDS Views</span>
                </span>
                <span className="text-[#777783] text-[11px] font-mono">{activeScenario.metrics}</span>
              </div>
            </div>

            {/* Scenario Navigation Tabs */}
            <div className="p-4 bg-[#F8F8FA] border-b border-[#E9E9EF] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#777783] mr-2 font-medium">
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
                        ? "bg-white text-[#1B1466] shadow-xs border border-[#1B1466]/30 font-medium ring-1 ring-[#1B1466]/10"
                        : "text-[#777783] hover:text-[#191923] hover:bg-white/60"
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
                <div className="w-8 h-8 rounded-full bg-[#1B1466] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  VP
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F8FA] border border-[#E9E9EF] text-sm text-[#191923] leading-relaxed">
                  <div className="text-[10px] font-mono text-[#777783] mb-1">
                    Process Owner &bull; {activeScenario.domain}
                  </div>
                  {activeScenario.userPrompt}
                </div>
              </div>

              {/* Joule Copilot Response */}
              <div className="flex items-start gap-3.5 max-w-2xl ml-auto">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EFFF] border border-[#1B1466]/20 text-sm text-[#191923] shadow-card leading-relaxed space-y-3">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#1B1466] font-mono text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF00B7]" />
                      <span>SAP Joule Copilot</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${activeScenario.statusBadge.bg}`}>
                      {activeScenario.statusBadge.text}
                    </span>
                  </div>

                  <p className="text-[#191923] text-[13px] leading-relaxed">
                    {activeScenario.jouleResponse}
                  </p>

                  {/* System Context Pills */}
                  <div className="pt-2 border-t border-[#1B1466]/10 flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#777783]">
                    <span className="text-[#777783]">Context Grounding:</span>
                    {activeScenario.affectedObjects.map((obj, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white rounded border border-[#E9E9EF] text-[#191923]">
                        {obj}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FF00B7] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="px-6 py-3 bg-[#F8F8FA] border-t border-[#E9E9EF] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#777783]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B7FF]" />
                <span>Zero Core Modifications &bull; SAP Clean Core Extensibility Certified</span>
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-[#1B1466] font-medium hover:text-[#00B7FF] flex items-center gap-1 transition-colors"
              >
                <span>Request Custom Joule Demo</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. BENTO GRID — Why Enterprise Leaders Choose Percipere
          ========================================================================= */}
      <MondayWhyChooseGrid />

      {/* =========================================================================
          4. THE THREE CRITICAL ENTERPRISE AI HURDLES (No Eyebrows)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="font-sans text-3xl sm:text-4xl text-[#191923] font-normal tracking-tight leading-tight">
              Why generic chatbots fail in <span className="text-[#FF00B7]">enterprise SAP</span>.
            </h2>
            <p className="mt-3 text-base text-[#777783]">
              Enterprise ERP requires verified business process context, strict schema integrity, and private cloud governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ENTERPRISE_HURDLES.map((h, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-[#E9E9EF] hover:border-[#1B1466] hover:shadow-card transition-all flex flex-col justify-between shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-medium text-[#1B1466] bg-[#F0EFFF] px-2.5 py-1 rounded-full">
                      {h.subtitle}
                    </span>
                    <span className="text-[10px] font-mono text-[#0088CC] bg-[#E6F8FF] px-2.5 py-0.5 rounded border border-[#00B7FF]/30 font-medium">
                      {h.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-medium text-[#191923] mb-3">
                    {h.title}
                  </h3>

                  <div className="text-xs text-[#FF00B7] font-mono mb-2 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B7]"></span>
                    <span>The Hurdle:</span>
                  </div>
                  <p className="text-xs text-[#777783] leading-relaxed mb-4">
                    {h.problem}
                  </p>

                  <div className="pt-3 border-t border-[#E9E9EF]">
                    <div className="text-xs text-[#1B1466] font-mono mb-1.5 flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#00B7FF]" />
                      <span>The Percipere Architecture:</span>
                    </div>
                    <p className="text-xs text-[#191923] leading-relaxed font-normal">
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
          5. AUTONOMOUS AGENT FLEET FOR DAILY SAP WORKFLOWS (No Eyebrows)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="font-sans text-3xl sm:text-4xl text-[#191923] font-normal tracking-tight leading-tight">
              Autonomous AI agents executing daily <span className="text-[#FF00B7]">SAP transactions</span>.
            </h2>
            <p className="mt-3 text-base text-[#777783]">
              Grounded agents performing touchless clearing, predictive maintenance, and reconciliation directly within your standard business processes.
            </p>
          </div>

          {/* Clean Table Board */}
          <div className="bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] overflow-hidden shadow-card">
            <div className="px-5 py-3.5 bg-white border-b border-[#E9E9EF] flex items-center justify-between text-xs font-mono">
              <span className="font-medium text-[#191923]">Active Business Agent Fleet</span>
              <span className="text-[#777783]">6 Domains Orchestrated</span>
            </div>

            <div className="divide-y divide-[#E9E9EF] text-xs">
              {AGENT_WORKFLOWS.map((agent, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F8F8FA] transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-medium text-[#777783]">
                        {agent.domain}
                      </span>
                      <span className="text-[#E9E9EF]">&bull;</span>
                      <span className="font-sans text-sm sm:text-base font-medium text-[#191923]">
                        {agent.role}
                      </span>
                    </div>
                    <p className="text-xs text-[#777783] leading-relaxed">{agent.task}</p>
                  </div>

                  <div className="shrink-0 flex items-center gap-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-medium ${agent.statusBg}`}>
                      {agent.status}
                    </span>
                    <span className="text-[11px] font-mono text-[#777783] w-24 text-right">
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
          6. VERIFIED AI TELEMETRY METRICS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            {TELEMETRY_METRICS.map((metric, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-[#E9E9EF] shadow-card">
                <div className="font-sans text-4xl sm:text-5xl font-normal" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-[#191923] mt-2 font-mono">
                  {metric.label}
                </div>
                <p className="text-xs text-[#777783] mt-1">{metric.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="SAP Business AI" />

      {/* =========================================================================
          Connected SAP Ecosystem — Nymeria Grid (200+ Enterprise Connectors)
          ========================================================================= */}
      <MondayNymeriaIntegrations onOpenModal={() => setModalOpen(true)} />

      {/* =========================================================================
          7. CLOSING CTA BANNER (No Eyebrows)
          ========================================================================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[620px] mx-auto px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-normal text-[#191923] tracking-tight">
            Make SAP Business AI work for your <span className="text-[#FF00B7]">enterprise</span>.
          </h2>
          <p className="text-sm text-[#777783] mt-3 mb-8 leading-relaxed">
            Collaborate with our certified SAP AI architects to audit your data readiness, establish Clean Core guardrails, and build a high-ROI 30-day value roadmap.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
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
