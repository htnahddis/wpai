"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Sparkles, 
  Cpu, 
  Activity, 
  Bot, 
  Database, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  CheckCircle2 
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const pages = [
    {
      num: "01",
      name: "PerciXpert",
      badge: "Flagship Delivery Engine",
      tagline: "Make every SAP implementation more predictable.",
      desc: "Replaces manual assumptions with AI-driven intelligence across the entire SAP lifecycle — from first workshop to go-live.",
      href: "/percixpert",
      metrics: "3–5 wks scope vs 6–10 wks • Zero CR creep",
      accent: "#0D5CE5",
      reference: "Linear + Auctor + Rocketlane + Ramp",
    },
    {
      num: "02",
      name: "PerciServe Support Suite",
      badge: "Support & AMS",
      tagline: "Smarter SAP support. Fewer tickets. Faster resolutions.",
      desc: "Instant L1 answers from SOP documentation connected to PerciXpert L2/L3 root-cause diagnostics and FUTUROOT process mining.",
      href: "/perciserve-support-suite",
      metrics: "Instant L1 answers • Diagnosis before blank tickets",
      accent: "#0D5CE5",
      reference: "Slack + Dropbox + Rocketlane + Folk",
    },
    {
      num: "03",
      name: "PerciHub Business Suite",
      badge: "AI Agent Library",
      tagline: "AI agents that understand how your business works.",
      desc: "A growing library of context-aware agents (PR-to-PO, Quality Inspection, Bank Reconciliation) that plug directly into SAP.",
      href: "/percihub-business-suite",
      metrics: "3 Standard Agents • Discrete & Process Mfg",
      accent: "#0D5CE5",
      reference: "Notion + Airtable + Folk + Atlassian",
    },
    {
      num: "04",
      name: "xP&A & EPM Solutions",
      badge: "Enterprise Planning",
      tagline: "Bring every business plan together.",
      desc: "Extended Planning & Analysis connecting finance, sales, HR, and operations with real-time continuous forecasting on SAP Analytics Cloud.",
      href: "/what-we-do/intelligence-enterprise-offerings/xpa-epm",
      metrics: "40+ Engagements • 275 Experts • 100% Rate",
      accent: "#0D5CE5",
      reference: "Auctor + Atlassian + Airtable + Ramp",
    },
    {
      num: "05",
      name: "SAP Business AI",
      badge: "Joule Integration",
      tagline: "Make your enterprise smarter with SAP Business AI.",
      desc: "Bridge the AI adoption gap. Embed SAP Joule Copilot and custom agents directly into core finance, supply chain, and manufacturing workflows.",
      href: "/sap-business-ai",
      metrics: "95% touchless invoices • Predictive maintenance",
      accent: "#0D5CE5",
      reference: "Slack + Atlassian + Airtable + Notion",
    },
    {
      num: "06",
      name: "AI Acceleration",
      badge: "Services & PerciSuite",
      tagline: "Turn enterprise data into business intelligence.",
      desc: "Move beyond reporting. Strategic consulting and 8 ready-to-run PerciSuite applications (PerciDesk, PerciRio, Fraud Detection).",
      href: "/what-we-do/intelligence-enterprise-offerings/ai-acceleration",
      metrics: "70+ Implementations • 8 Modular AI Tools",
      accent: "#0D5CE5",
      reference: "Auctor + Linear + Ramp + Airtable",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0D5CE5] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D5CE5]"></span>
              PERCIPERE WEBSITE MODERNISATION • SIX PRODUCT SUITES
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.1] text-[#292A2E] tracking-tight">
              Enterprise SAP intelligence, de-risked and delivered.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed text-balance">
              The modernised digital presence for Percipere&apos;s six flagship products and service suites — calibrated between Auctor&apos;s editorial restraint and Atlassian&apos;s enterprise clarity.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 bg-[#0D5CE5] text-white text-sm font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle inline-flex items-center gap-2"
              >
                Book Executive Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/percixpert"
                className="px-6 py-3.5 bg-[#F8F8F8] text-[#292A2E] border border-[#E8E8E8] text-sm font-semibold rounded-lg hover:bg-[#F2F3F5] transition-colors"
              >
                View Benchmark: PerciXpert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Six Product Suites Showcase Grid */}
      <section className="py-20 bg-[#F8F8F8] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Six Redesigned Offerings"
            title="Six modernised products & services"
            description="Restructured with concise business copy, intuitive workflow diagrams, and light-mode enterprise credibility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl border border-[#E8E8E8] p-7 shadow-subtle hover:shadow-card hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Page {item.num}
                    </span>
                    <span className="text-[11px] font-semibold text-[#8A8D93] uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#292A2E] group-hover:text-[#0D5CE5] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#292A2E] mt-1 mb-2">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0F0F0] mt-auto">
                  <div className="text-[11px] font-mono text-[#10B981] mb-3 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.metrics}</span>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-between w-full py-2.5 px-3.5 bg-[#F8F8F8] group-hover:bg-[#0D5CE5] group-hover:text-white text-xs font-semibold rounded-lg text-[#292A2E] transition-all"
                  >
                    <span>Explore {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Proof Bar (Ramp Reference) */}
      <section className="py-16 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#292A2E]">70+</div>
              <div className="text-xs font-semibold text-[#292A2E] mt-1">Enterprise Deliveries</div>
              <p className="text-[11px] text-[#64676D] mt-0.5">Across 30+ countries</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#0D5CE5]">275+</div>
              <div className="text-xs font-semibold text-[#292A2E] mt-1">Certified Specialists</div>
              <p className="text-[11px] text-[#64676D] mt-0.5">EPM, ERP, AI & Automation</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#10B981]">100%</div>
              <div className="text-xs font-semibold text-[#292A2E] mt-1">Completion Record</div>
              <p className="text-[11px] text-[#64676D] mt-0.5">Zero stalled implementations</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#292A2E]">ISO 27000</div>
              <div className="text-xs font-semibold text-[#292A2E] mt-1">Security Governance</div>
              <p className="text-[11px] text-[#64676D] mt-0.5">100% Data Sovereignty</p>
            </div>
          </div>
        </div>
      </section>

      {/* PerciVerse Ecosystem Strip */}
      <EcosystemStrip />

      {/* Consultation CTA Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 bg-[#F8F8F8] border border-[#E8E8E8] rounded-3xl text-center max-w-3xl mx-auto shadow-card">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D5CE5]">
              Executive Advisory
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#292A2E] font-normal mt-2 leading-tight">
              Start with facts. Deliver with confidence.
            </h3>
            <p className="text-sm sm:text-base text-[#64676D] mt-3 max-w-lg mx-auto">
              Discuss your enterprise SAP landscape with our practice directors in London, Mumbai, Singapore, and Dubai.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
