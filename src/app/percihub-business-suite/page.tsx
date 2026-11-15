"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

import {
  PERCIHUB_AGENTS,
  PERCIHUB_LAYERS,
  PERCIHUB_INDUSTRIES,
} from "@/data/percihub.data";

export default function PerciHubPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* HERO — No Eyebrows, Magenta keyword */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="font-sans text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              AI agents that <span className="text-[#FF00B7]">execute</span> SAP tasks for you.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#777783] font-normal leading-relaxed max-w-xl">
              Automate procurement, quality inspections, and bank reconciliations with built-in business rules.
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
            </div>
          </div>

          {/* Clean Agent Activity Board */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERCIHUB_AGENTS.map((agent) => (
              <div key={agent.name} className="p-7 bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] flex flex-col justify-between shadow-card hover:border-[#1B1466] transition-colors">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-[#1B1466] font-semibold">{agent.department}</span>
                    <span className="text-[#0088CC] font-medium bg-[#E6F8FF] px-2.5 py-0.5 rounded border border-[#00B7FF]/30">
                      Ready to Deploy
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl font-medium text-[#191923] mb-2">{agent.name}</h3>
                  <p className="text-xs text-[#777783] leading-relaxed mb-6">{agent.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#E9E9EF] text-xs font-mono text-[#191923] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00B7FF]" />
                  <span>{agent.output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3-Component Architecture (No Eyebrows) */}
      <section className="py-20 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              How PerciHub agents execute securely inside <span className="text-[#FF00B7]">SAP</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERCIHUB_LAYERS.map((layer) => (
              <div key={layer.code} className="p-7 bg-white rounded-2xl border border-[#E9E9EF] shadow-card">
                <span className="text-xs font-mono font-medium" style={{ color: layer.color }}>{layer.code}</span>
                <h3 className="font-sans text-xl font-medium mt-2 mb-2 text-[#191923]">{layer.title}</h3>
                <p className="text-xs text-[#777783] leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE INDUSTRY EXAMPLES (No Eyebrows) */}
      <section className="py-24 bg-white border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              Automations tailored to your <span className="text-[#FF00B7]">industry</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERCIHUB_INDUSTRIES.map((ind) => (
              <div key={ind.title} className="p-7 bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] shadow-card hover:border-[#1B1466] transition-colors">
                <h4 className="font-sans text-base font-medium text-[#191923] mb-1">{ind.title}</h4>
                <p className="text-xs text-[#777783] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="PerciHub" />

      {/* CLOSING CTA (No Eyebrows) */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-normal text-[#191923]">
            Have a manual task to <span className="text-[#FF00B7]">automate</span>?
          </h2>
          <p className="text-sm text-[#777783] mt-2 mb-8">
            Tell us which workflow costs your team the most time.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
          >
            <span>Request Agent Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciHub AI Agents" />
    </div>
  );
}
