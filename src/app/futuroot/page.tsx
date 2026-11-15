"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Activity,
  CheckCircle2,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Cpu,
  Layers,
  LineChart,
  Workflow,
  Radio,
  Gauge,
  Check,
} from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function FuturootPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"o2c" | "p2p" | "r2r">("o2c");

  const workflows = {
    o2c: {
      name: "Order to Cash (O2C)",
      steps: [
        { name: "Sales Order Created", time: "0.2s", status: "Clean Core", clean: true },
        { name: "Credit Check Verified", time: "1.1s", status: "Automated", clean: true },
        { name: "Delivery Dispatch", time: "4.8h", status: "Optimized", clean: true },
        { name: "Billing Document", time: "0.4s", status: "Standard", clean: true },
        { name: "Payment Clearing", time: "2.1h", status: "No Friction", clean: true },
      ],
      conformance: "99.2%",
      throughput: "1.8 Days avg",
      friction: "0 Bottlenecks",
    },
    p2p: {
      name: "Procure to Pay (P2P)",
      steps: [
        { name: "PR Auto-Generated", time: "0.5s", status: "Clean Core", clean: true },
        { name: "PO Dual Approval", time: "1.2h", status: "Standard", clean: true },
        { name: "Goods Receipt (MIGO)", time: "3.4h", status: "Verified", clean: true },
        { name: "Invoice 3-Way Match", time: "0.8s", status: "Automated", clean: true },
        { name: "Electronic Remittance", time: "0.3s", status: "Clean Core", clean: true },
      ],
      conformance: "98.7%",
      throughput: "1.4 Days avg",
      friction: "0 Bottlenecks",
    },
    r2r: {
      name: "Record to Report (R2R)",
      steps: [
        { name: "GL Subledger Postings", time: "0.1s", status: "Clean Core", clean: true },
        { name: "Intercompany Reconcile", time: "12m", status: "Automated", clean: true },
        { name: "Asset Depreciation", time: "4.5m", status: "Standard", clean: true },
        { name: "Trial Balance Validated", time: "1.2s", status: "Verified", clean: true },
        { name: "Financial Close Signoff", time: "45m", status: "Optimized", clean: true },
      ],
      conformance: "99.8%",
      throughput: "4.2 Hours avg",
      friction: "0 Bottlenecks",
    },
  };

  const capabilities = [
    {
      icon: Activity,
      title: "Real-Time Process Mining",
      desc: "Discovers and visualizes end-to-end transaction flows by extracting live event logs directly from SAP S/4HANA & ECC systems.",
      metric: "100% Flow Visibility",
      color: "#00B7FF",
    },
    {
      icon: ShieldCheck,
      title: "Clean Core Conformance",
      desc: "Continuously checks transactions against SAP standard fit-to-standard scope, flagging custom Z-table leaks and deviation patterns.",
      metric: "99.4% Conformance",
      color: "#FF00B7",
    },
    {
      icon: Gauge,
      title: "Adoption & Friction Telemetry",
      desc: "Measures actual user behavior, identifying training gaps, abandoned workflows, and manual workaround habits across global teams.",
      metric: "4.2x Faster Adoption",
      color: "#1B1466",
    },
    {
      icon: Workflow,
      title: "Closed-Loop Remediation",
      desc: "Triggers autonomous agent playbooks in Agentic Studio and updates PerciXpert delivery blueprints as soon as friction is detected.",
      metric: "Zero-Latency Fixes",
      color: "#00B7FF",
    },
  ];

  const steps = [
    {
      step: "01. EXTRACT",
      title: "Non-Intrusive Telemetry Ingestion",
      desc: "Connects via SAP RFC/BAPI and REST APIs without disrupting transactional workloads or requiring local agent installations.",
    },
    {
      step: "02. RECONSTRUCT",
      title: "Digital Process Twin Synthesis",
      desc: "Maps raw event logs into interactive Petri-nets and process variants, highlighting actual user journeys versus design specs.",
    },
    {
      step: "03. DIAGNOSE",
      title: "Conformance & Bottleneck AI",
      desc: "Detects cycle time bloat, rework loops, SLA violations, and custom code bypasses with pinpoint transaction attribution.",
    },
    {
      step: "04. AUTOMATE",
      title: "Autonomous Action Execution",
      desc: "Hands recommendations directly to PerciServe and Agentic Studio bots to deflect issues and re-train users automatically.",
    },
  ];

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* HERO SECTION */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EFFF] border border-[#1B1466]/10 text-xs font-mono text-[#1B1466] mb-5">
                <Radio className="w-3.5 h-3.5 text-[#FF00B7] animate-pulse" />
                <span>Enterprise Telemetry &amp; Process Mining</span>
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-[#191923]">
                Continuous process mining for <span className="text-[#FF00B7]">enterprise SAP adoption</span>.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#777783] font-normal leading-relaxed max-w-md">
                FUTUROOT captures deep operational telemetry, identifies user adoption friction, and monitors Clean Core conformance across your entire SAP landscape in real time.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Live Process Mining Telemetry Visual Card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E9E9EF] rounded-2xl shadow-card overflow-hidden">
                {/* Header */}
                <div className="bg-[#F8F8FA] border-b border-[#E9E9EF] px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B7FF] animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-[#191923]">
                      FUTUROOT • Live Process Digital Twin
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {(["o2c", "p2p", "r2r"] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          activeTab === tab
                            ? "bg-[#1B1466] text-white font-medium"
                            : "bg-white text-[#777783] hover:text-[#191923] border border-[#E9E9EF]"
                        }`}
                      >
                        {tab.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Telemetry Stats Bar */}
                <div className="grid grid-cols-3 border-b border-[#E9E9EF] bg-[#FCFCFD] p-4 text-center">
                  <div>
                    <span className="text-[10px] font-mono text-[#777783] block">CLEAN CORE CONFORMANCE</span>
                    <span className="text-lg font-bold text-[#1B1466] font-mono">
                      {workflows[activeTab].conformance}
                    </span>
                  </div>
                  <div className="border-x border-[#E9E9EF]">
                    <span className="text-[10px] font-mono text-[#777783] block">THROUGHPUT CYCLE</span>
                    <span className="text-lg font-bold text-[#0088CC] font-mono">
                      {workflows[activeTab].throughput}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#777783] block">FRICTION POINTS</span>
                    <span className="text-lg font-bold text-[#FF00B7] font-mono">
                      {workflows[activeTab].friction}
                    </span>
                  </div>
                </div>

                {/* Workflow Node Chain */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-mono font-semibold text-[#191923] mb-3 flex items-center justify-between">
                    <span>{workflows[activeTab].name} Process Stream</span>
                    <span className="text-[#0088CC] text-[11px]">Real-time Telemetry Active</span>
                  </div>

                  {workflows[activeTab].steps.map((s, idx) => (
                    <div
                      key={s.name}
                      className="p-3.5 bg-[#F8F8FA] border border-[#E9E9EF] rounded-xl flex items-center justify-between transition-all hover:bg-white hover:border-[#1B1466]/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#1B1466]/10 text-[#1B1466] text-[10px] font-mono font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-medium text-[#191923]">{s.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-[#777783]">{s.time}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E6F8FF] text-[#0088CC] font-medium border border-[#00B7FF]/20">
                          {s.status}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#777783]">
                    <span className="flex items-center gap-1.5 text-[#0088CC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B7FF]" />
                      Zero custom code deviations identified
                    </span>
                    <span>Sample rate: 100% events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE CAPABILITIES */}
      <section className="py-24 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-sans text-3xl sm:text-4xl font-normal tracking-tight text-[#191923]">
              From raw event logs to <span className="text-[#FF00B7]">frictionless execution</span>.
            </h2>
            <p className="mt-3 text-sm text-[#777783] leading-relaxed">
              FUTUROOT continuously validates how employees actually use SAP versus intended Clean Core architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="p-7 bg-white rounded-2xl border border-[#E9E9EF] shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F0EFFF] flex items-center justify-center text-[#1B1466] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans text-xl font-medium mb-2 text-[#191923]">{c.title}</h3>
                    <p className="text-xs text-[#777783] leading-relaxed mb-6">
                      {c.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E9E9EF] text-xs font-mono text-[#1B1466] flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#00B7FF]" />
                    <span>{c.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-STAGE ARCHITECTURE PIPELINE */}
      <section className="py-20 bg-white border-b border-[#E9E9EF]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="font-sans text-3xl font-normal text-[#191923] mb-4">
            How FUTUROOT powers <span className="text-[#FF00B7]">enterprise adoption</span>.
          </h2>
          <p className="text-sm text-[#777783] max-w-xl mx-auto leading-relaxed mb-8">
            An always-on process intelligence pipeline that converts SAP transaction exhaust into actionable Clean Core optimization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-left">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border ${
                  idx === 3
                    ? "bg-[#1B1466] text-white border-[#1B1466] shadow-card"
                    : "bg-[#F8F8FA] border-[#E9E9EF]"
                }`}
              >
                <span
                  className="text-[10px] font-mono font-medium"
                  style={{ color: idx === 3 ? "#00B7FF" : "#1B1466" }}
                >
                  {st.step}
                </span>
                <p className={`text-xs font-semibold mt-1 mb-1.5 ${idx === 3 ? "text-white" : "text-[#191923]"}`}>
                  {st.title}
                </p>
                <p className={`text-[11px] leading-relaxed ${idx === 3 ? "text-[#E9E9EF]" : "text-[#777783]"}`}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="Futuroot" />

      {/* CLOSING CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-normal text-[#191923]">
            Gain full visibility into your <span className="text-[#FF00B7]">SAP operations</span>.
          </h2>
          <p className="text-sm text-[#777783] mt-2 mb-8">
            Connect FUTUROOT to your SAP environment in under 48 hours with zero interruption to live business users.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="FUTUROOT Process Mining & Telemetry"
      />
    </div>
  );
}
