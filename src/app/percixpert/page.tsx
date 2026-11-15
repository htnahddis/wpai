"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import PerciXpertVideoExplainer from "@/components/PerciXpertVideoExplainer";
import ComparisonTable from "@/components/ComparisonTable";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

import {
  PERCIXPERT_STAGES,
  PERCIXPERT_COMPARISONS,
  PERCIXPERT_RISKS,
} from "@/data/percixpert.data";

export default function PerciXpertPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* HERO — No Eyebrows, Magenta keyword */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="font-sans text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              Make SAP implementations <span className="text-[#FF00B7]">predictable</span>.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#777783] font-normal leading-relaxed max-w-xl">
              From first workshop to go-live, PerciXpert brings digital tracking and automated verification to every project phase.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#stages"
                className="px-6 py-3.5 bg-[#F8F8FA] hover:bg-[#F0EFFF] text-[#191923] border border-[#E9E9EF] text-sm font-medium rounded-full transition-colors"
              >
                View 7 Stages
              </a>
            </div>
          </div>

          {/* Video Explainer Player */}
          <div className="mt-10">
            <PerciXpertVideoExplainer />
          </div>
        </div>
      </section>

      {/* THE THREE RISKS PERCIXPERT ELIMINATES (No Eyebrows) */}
      <section className="py-20 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-xl mb-10">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              Three risks that derail <span className="text-[#FF00B7]">SAP rollouts</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERCIXPERT_RISKS.map((risk) => (
              <div key={risk.code} className="p-7 bg-white rounded-2xl border border-[#E9E9EF] shadow-card">
                <span className="text-xs font-mono font-medium" style={{ color: risk.color }}>
                  {risk.code}
                </span>
                <h3 className="font-sans text-xl font-medium mt-2 mb-2 text-[#191923]">{risk.title}</h3>
                <p className="text-xs text-[#777783] leading-relaxed">
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-STAGE LIFECYCLE (No Eyebrows) */}
      <section id="stages" className="py-24 bg-white border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-sans text-3xl sm:text-4xl font-normal tracking-tight text-[#191923]">
              Seven stages of <span className="text-[#FF00B7]">automated delivery</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERCIXPERT_STAGES.map((s) => (
              <div key={s.num} className="p-6 bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] flex flex-col justify-between hover:border-[#1B1466] transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-[#1B1466]">{s.num}</span>
                  <h3 className="text-base font-medium text-[#191923] mt-2 mb-1">{s.name}</h3>
                  <p className="text-xs text-[#777783] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
            <div className="p-6 bg-[#1B1466] text-white rounded-2xl flex flex-col justify-between shadow-card">
              <div>
                <span className="text-xs font-mono text-[#00B7FF] font-medium">RESULT</span>
                <h3 className="font-sans text-xl font-medium mt-2 mb-1 text-white">Zero Blindspots</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Every step is documented, auditable, and verified before go-live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO WAYS TO DEPLOY (No Eyebrows) */}
      <section className="py-20 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              Two deployment options.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-8 bg-white rounded-2xl border border-[#E9E9EF] shadow-card">
              <span className="text-xs font-mono text-[#00B7FF] font-medium">OPTION 01</span>
              <h3 className="font-sans text-2xl font-medium mt-2 mb-2 text-[#191923]">New Implementations</h3>
              <p className="text-xs text-[#777783] leading-relaxed mb-4">
                For organizations moving to SAP S/4HANA Cloud. Automates scoping, standard matching, data migration, and documentation.
              </p>
              <div className="text-xs font-semibold text-[#1B1466] font-mono flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00B7FF]" />
                <span>3–5 week prepare phase vs 6–10 weeks</span>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-[#E9E9EF] shadow-card">
              <span className="text-xs font-mono text-[#FF00B7] font-medium">OPTION 02</span>
              <h3 className="font-sans text-2xl font-medium mt-2 mb-2 text-[#191923]">System Audit &amp; Recovery</h3>
              <p className="text-xs text-[#777783] leading-relaxed mb-4">
                For existing systems or support transitions. Audits live SAP configurations to highlight gaps and undocumented custom logic.
              </p>
              <div className="text-xs font-semibold text-[#1B1466] font-mono flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00B7FF]" />
                <span>Eliminates support transition risk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE (No Eyebrows) */}
      <section className="py-20 bg-white border-b border-[#E9E9EF]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="max-w-xl mb-10">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              Traditional Consulting vs. <span className="text-[#FF00B7]">PerciXpert</span>
            </h2>
          </div>

          <ComparisonTable rows={PERCIXPERT_COMPARISONS} />
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="PerciXpert" />

      {/* CLOSING CTA (No Eyebrows) */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-normal text-[#191923]">
            De-risk your next <span className="text-[#FF00B7]">SAP rollout</span>.
          </h2>
          <p className="text-sm text-[#777783] mt-2 mb-8">
            Discuss your implementation roadmap or request a system audit.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciXpert SAP Delivery" />
    </div>
  );
}
