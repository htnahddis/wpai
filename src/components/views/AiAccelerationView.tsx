"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";
import { AI_TOOLS, AI_PIPELINE, AI_ENGAGEMENT_MODELS } from "@/data/aiAcceleration.data";

export default function AiAccelerationView() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* HERO  No Eyebrows, Magenta keyword */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="font-sans text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              Turn enterprise data into <span className="text-[#FF00B7]">business action</span>.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#777783] font-normal leading-relaxed max-w-xl">
              Embed predictive models and automations directly into your core systems to cut inventory waste and speed up operations.
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

          {/* Simple 4-Step Pipeline Visual */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] shadow-card">
            {AI_PIPELINE.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border ${idx === 3
                    ? "bg-[#1B1466] text-white border-[#1B1466] shadow-card"
                    : "bg-white border-[#E9E9EF] shadow-card"
                  }`}
              >
                <span
                  className="text-[10px] font-mono font-medium"
                  style={{ color: idx === 3 ? "#00B7FF" : item.color }}
                >
                  {item.code}
                </span>
                <div className={`text-xs font-medium mt-1 font-sans ${idx === 3 ? "text-white" : "text-[#191923]"}`}>
                  {item.name}
                </div>
                <p className={`text-[11px] ${idx === 3 ? "text-white/80" : "text-[#777783]"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PATHS TO VALUE (No Eyebrows) */}
      <section className="py-20 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-xl mb-10">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              Two ways to implement <span className="text-[#FF00B7]">enterprise AI</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {AI_ENGAGEMENT_MODELS.map((model) => (
              <div key={model.code} className="p-8 bg-white rounded-2xl border border-[#E9E9EF] shadow-card hover:border-[#1B1466] transition-colors">
                <span className="text-xs font-mono font-medium" style={{ color: model.color }}>{model.code}</span>
                <h3 className="font-sans text-2xl font-medium mt-2 mb-2 text-[#191923]">{model.title}</h3>
                <p className="text-xs text-[#777783] leading-relaxed mb-4">
                  {model.desc}
                </p>
                <div className="text-xs font-semibold text-[#1B1466] font-mono flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#00B7FF]" />
                  <span>{model.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR POPULAR TOOLS (No Eyebrows) */}
      <section className="py-24 bg-white border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              Pre-built tools ready for <span className="text-[#FF00B7]">deployment</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_TOOLS.map((t) => (
              <div key={t.name} className="p-6 bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] shadow-card hover:border-[#1B1466] transition-colors">
                <div className="text-[10px] font-mono text-[#1B1466] mb-1 font-medium">{t.role}</div>
                <h4 className="font-sans text-base font-medium text-[#191923] mb-1.5">{t.name}</h4>
                <p className="text-xs text-[#777783] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="AI Acceleration" />

      {/* CLOSING CTA (No Eyebrows) */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-normal text-[#191923]">
            Start your <span className="text-[#FF00B7]">AI acceleration</span>.
          </h2>
          <p className="text-sm text-[#777783] mt-2 mb-8">
            Discuss your company&apos;s data assets and highest-ROI operational targets.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
          >
            <span>Schedule a Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="AI Acceleration" />
    </div>
  );
}
