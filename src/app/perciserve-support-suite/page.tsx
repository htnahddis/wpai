"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Check, Bot } from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";
import { SUPPORT_STAGES, LEARNING_LOOP_STEPS } from "@/data/perciserve.data";

export default function PerciServePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* HERO — No Eyebrows, Magenta keyword */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EFFF] border border-[#1B1466]/10 text-xs font-mono text-[#1B1466] mb-5">
                <Bot className="w-3.5 h-3.5 text-[#FF00B7]" />
                <span>Enterprise Support &amp; Telemetry Suite</span>
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-[#191923]">
                Fewer support tickets. <span className="text-[#FF00B7]">Instant</span> SAP answers.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#777783] font-normal leading-relaxed max-w-md">
                PerciServe answers routine user questions in seconds and hands complex bugs to technical teams with the root cause already identified.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Slack-Style Chat Interface Demonstration */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E9E9EF] rounded-2xl shadow-card overflow-hidden">
                <div className="bg-[#F8F8FA] border-b border-[#E9E9EF] px-5 py-3.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#00B7FF] animate-pulse"></span>
                    <span className="font-semibold text-[#191923]">PerciServe • SAP Support Assistant</span>
                  </div>
                  <span className="text-[10px] text-[#777783] font-mono font-medium">Instant L1 Deflection</span>
                </div>

                <div className="p-6 space-y-4">
                  {/* User Message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1B1466] flex items-center justify-center text-xs font-semibold text-white shrink-0">
                      U
                    </div>
                    <div className="bg-[#F8F8FA] p-4 rounded-xl text-xs text-[#191923] max-w-md border border-[#E9E9EF]">
                      <p className="font-semibold text-[#191923] mb-1">Business User:</p>
                      <p className="text-[#777783]">How do I release a purchase order over £50k that is blocked in approval?</p>
                    </div>
                  </div>

                  {/* Instant AI Answer */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF00B7] text-white flex items-center justify-center text-xs font-semibold shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="bg-white border border-[#1B1466]/20 p-5 rounded-xl text-xs text-[#191923] max-w-lg shadow-card">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#1B1466] mb-2 pb-1.5 border-b border-[#E9E9EF]">
                        <span className="font-semibold">Answered from Enterprise SOPs</span>
                        <span className="text-[#0088CC] font-semibold">Resolved in 1.4s</span>
                      </div>
                      <p className="leading-relaxed mb-2 text-[#191923]">
                        POs over £50k require dual finance authorization:
                      </p>
                      <ol className="list-decimal pl-4 space-y-1 text-[#777783] mb-3">
                        <li>Open the <strong className="text-[#191923]">Manage Purchase Orders</strong> app.</li>
                        <li>Filter by status: <em>Awaiting Approval</em>.</li>
                        <li>Click <strong className="text-[#191923]">Release with Dual Authorization</strong>.</li>
                      </ol>
                      <div className="text-[11px] font-mono text-[#0088CC] flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B7FF]" />
                        <span>Resolved at L1 • Zero tickets created</span>
                      </div>
                    </div>
                  </div>

                  {/* Context pass to L2 */}
                  <div className="p-3.5 bg-[#F8F8FA] border border-[#E9E9EF] rounded-xl text-xs text-[#777783] flex items-center justify-between">
                    <span>Unresolved issues pass automatically to <strong className="text-[#191923]">Technical L2/L3</strong></span>
                    <span className="font-mono text-[#1B1466] text-[11px] font-medium">Full Context &amp; Logs Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STAGE SUPPORT WORKFLOW */}
      <section className="py-24 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-sans text-3xl sm:text-4xl font-normal tracking-tight text-[#191923]">
              From instant answer to <span className="text-[#FF00B7]">root-cause fix</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUPPORT_STAGES.map((s) => (
              <div key={s.code} className="p-7 bg-white rounded-2xl border border-[#E9E9EF] shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold" style={{ color: s.color }}>{s.code}</span>
                  <h3 className="font-sans text-2xl font-medium mt-2 mb-2 text-[#191923]">{s.title}</h3>
                  <p className="text-xs text-[#777783] leading-relaxed mb-4">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E9E9EF] text-xs font-mono text-[#1B1466] flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#00B7FF]" />
                  <span>{s.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS LEARNING LOOP */}
      <section className="py-20 bg-white border-b border-[#E9E9EF]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="font-sans text-3xl font-normal text-[#191923] mb-4">
            Every resolved issue makes your system <span className="text-[#FF00B7]">smarter</span>.
          </h2>
          <p className="text-sm text-[#777783] max-w-xl mx-auto leading-relaxed mb-8">
            When a consultant resolves an escalated ticket, the solution is saved to the knowledge base so it never has to be investigated twice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-left">
            {LEARNING_LOOP_STEPS.map((step, idx) => (
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
                  style={{ color: idx === 3 ? "#00B7FF" : step.color }}
                >
                  {step.step}
                </span>
                <p className={`text-xs font-medium mt-1 ${idx === 3 ? "text-white" : "text-[#191923]"}`}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="PerciServe" />

      {/* CLOSING CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-normal text-[#191923]">
            Reduce your <span className="text-[#FF00B7]">SAP support overhead</span>.
          </h2>
          <p className="text-sm text-[#777783] mt-2 mb-8">
            See PerciServe answer questions from real enterprise documentation.
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

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciServe Support Suite" />
    </div>
  );
}
