"use client";

import React, { useState } from "react";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function AiAccelerationView() {
  const [modalOpen, setModalOpen] = useState(false);

  const tools = [
    { name: "PerciDesk", role: "Enterprise Assistant", desc: "Instant company SOP and system guidance for employees." },
    { name: "PerciRio", role: "Inventory Optimizer", desc: "Reduces excess safety stock and frees working capital dynamically." },
    { name: "Invoice Integrity", role: "Fraud & Error Shield", desc: "Scans invoices to catch duplicate billings and pricing errors before payment." },
    { name: "Document Extraction", role: "Automated Data Capture", desc: "Extracts line items from PDF invoices into SAP with zero manual retyping." },
  ];

  return (
    <div className="bg-white text-[#191923]">
      {/* HERO — Auctor + Linear */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D] block mb-3">
              AI Acceleration
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              Turn enterprise data into business action.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed max-w-xl">
              Embed predictive models and automations directly into your core systems to cut inventory waste and speed up operations.
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

          {/* Simple 4-Step Pipeline Visual */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-6 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA]">
            <div className="p-4 bg-white rounded-xl border border-[#EAEAEA]">
              <span className="text-[10px] font-mono text-[#0D5CE5]">01. DATA</span>
              <div className="text-xs font-bold mt-1">Enterprise ERP</div>
              <p className="text-[11px] text-[#64676D]">Historical transaction records</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#EAEAEA]">
              <span className="text-[10px] font-mono text-[#0D5CE5]">02. PROCESSING</span>
              <div className="text-xs font-bold mt-1">Predictive AI</div>
              <p className="text-[11px] text-[#64676D]">Trained machine learning models</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#EAEAEA]">
              <span className="text-[10px] font-mono text-[#0D5CE5]">03. INSIGHT</span>
              <div className="text-xs font-bold mt-1">Actionable Signals</div>
              <p className="text-[11px] text-[#64676D]">Cash-flow and stockout predictions</p>
            </div>
            <div className="p-4 bg-[#191923] text-white rounded-xl">
              <span className="text-[10px] font-mono text-[#10B981]">04. ACTION</span>
              <div className="text-xs font-bold mt-1">Automated Work</div>
              <p className="text-[11px] text-[#EAEAEA]/80">POs raised and records posted</p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PATHS TO VALUE */}
      <section className="py-20 bg-[#F8F8FA] border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
              Engagement Models
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
              Two ways to implement enterprise AI.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#191923]">MODEL 01</span>
              <h3 className="font-serif text-2xl font-normal mt-2 mb-2">Custom AI Engineering</h3>
              <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                Tailored enterprise architecture: data pipeline design, custom agent workflows, and private cloud deployment.
              </p>
              <div className="text-xs font-semibold text-[#0D5CE5] font-mono">
                ✓ Bespoke enterprise solutions
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5]">MODEL 02</span>
              <h3 className="font-serif text-2xl font-normal mt-2 mb-2">Pre-Built PerciSuite Tools</h3>
              <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                Ready-to-deploy applications that plug directly into SAP to solve common operational bottlenecks in weeks.
              </p>
              <div className="text-xs font-semibold text-[#10B981] font-mono">
                ✓ Rapid ROI in under 90 days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR POPULAR TOOLS */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
              Modular Tools
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
              Pre-built tools ready for deployment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((t) => (
              <div key={t.name} className="p-6 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA]">
                <div className="text-[10px] font-mono text-[#0D5CE5] mb-1">{t.role}</div>
                <h4 className="text-base font-bold text-[#191923] mb-1.5">{t.name}</h4>
                <p className="text-xs text-[#64676D] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="AI Acceleration" />

      {/* CLOSING CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#191923]">
            Start your AI acceleration.
          </h2>
          <p className="text-xs text-[#64676D] mt-2 mb-8">
            Discuss your company&apos;s data assets and highest-ROI operational targets.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
          >
            Schedule a Briefing
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="AI Acceleration" />
    </div>
  );
}
