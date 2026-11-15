"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ComparisonTable from "@/components/ComparisonTable";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";
import { XPA_COMPARISONS, XPA_PACKAGES } from "@/data/xpaEpm.data";

export default function XpaEpmView() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white text-[#191923] selection:bg-[#F0EFFF] selection:text-[#1B1466]">
      {/* HERO — No Eyebrows, Magenta keyword */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="font-sans text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              One connected plan for your <span className="text-[#FF00B7]">entire business</span>.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#777783] font-normal leading-relaxed max-w-xl">
              Connect finance, sales, HR, and operations through integrated forecasting on SAP Analytics Cloud. Replace fragile spreadsheets.
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

          {/* Visual Consolidated Matrix */}
          <div className="p-8 bg-[#F8F8FA] rounded-2xl border border-[#E9E9EF] shadow-card">
            <div className="text-xs font-mono text-[#777783] mb-4 font-medium">
              Consolidated enterprise planning model
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-xl border border-[#E9E9EF] shadow-card">
                <div className="text-xs text-[#1B1466] font-mono font-medium">Finance</div>
                <div className="text-sm font-medium text-[#191923] mt-1 font-sans">P&amp;L &amp; Cash Flow</div>
                <div className="text-[11px] text-[#0088CC] mt-0.5 font-mono">Automated</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#E9E9EF] shadow-card">
                <div className="text-xs text-[#00B7FF] font-mono font-medium">Sales</div>
                <div className="text-sm font-medium text-[#191923] mt-1 font-sans">Pipeline &amp; Quotas</div>
                <div className="text-[11px] text-[#0088CC] mt-0.5 font-mono">Live Sync</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#E9E9EF] shadow-card">
                <div className="text-xs text-[#FF00B7] font-mono font-medium">HR &amp; Operations</div>
                <div className="text-sm font-medium text-[#191923] mt-1 font-sans">Headcount &amp; Cost</div>
                <div className="text-[11px] text-[#0088CC] mt-0.5 font-mono">Aligned</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#E9E9EF] shadow-card">
                <div className="text-xs text-[#1B1466] font-mono font-medium">Supply Chain</div>
                <div className="text-sm font-medium text-[#191923] mt-1 font-sans">Demand &amp; Capacity</div>
                <div className="text-[11px] text-[#0088CC] mt-0.5 font-mono">Inventory Linked</div>
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
              Traditional FP&amp;A vs. <span className="text-[#FF00B7]">Extended Planning (xP&amp;A)</span>
            </h2>
          </div>

          <ComparisonTable rows={XPA_COMPARISONS} traditionalHeader="Traditional FP&A" percipereHeader="xP&A with Percipere" />
        </div>
      </section>

      {/* FOUR CORE PACKAGES (No Eyebrows) */}
      <section className="py-24 bg-[#F8F8FA] border-b border-[#E9E9EF]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-sans text-3xl font-normal text-[#191923]">
              Four enterprise <span className="text-[#FF00B7]">planning packages</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {XPA_PACKAGES.map((pkg) => (
              <div key={pkg.code} className="p-7 bg-white rounded-2xl border border-[#E9E9EF] shadow-card hover:border-[#1B1466] transition-colors">
                <span className="text-xs font-mono font-medium" style={{ color: pkg.color }}>{pkg.code}</span>
                <h3 className="font-sans text-xl font-medium mt-1 mb-2 text-[#191923]">{pkg.title}</h3>
                <p className="text-xs text-[#777783] leading-relaxed">
                  {pkg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Strip */}
      <EcosystemStrip current="xP&A" />

      {/* CLOSING CTA (No Eyebrows) */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-normal text-[#191923]">
            Unify your enterprise <span className="text-[#FF00B7]">planning</span>.
          </h2>
          <p className="text-sm text-[#777783] mt-2 mb-8">
            See how SAP Analytics Cloud replaces spreadsheet sprawl with continuous forecasting.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-all shadow-sm inline-flex items-center gap-2"
          >
            <span>Schedule a Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="xP&A & EPM Solutions" />
    </div>
  );
}
