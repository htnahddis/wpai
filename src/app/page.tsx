"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ArrowUpRight, ShieldCheck, Database, Cpu, Activity, GitBranch } from "lucide-react";
import PerciXpertVideoExplainer from "@/components/PerciXpertVideoExplainer";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      name: "Discover",
      desc: "Captures actual operational baselines from discovery workshops and legacy ERP data.",
      outcome: "Surfaces hidden legacy customizations early.",
    },
    {
      num: "02",
      name: "Prepare",
      desc: "Converts workshop inputs into structured, traceable requirements aligned with SAP Activate.",
      outcome: "Every decision digitally linked to target scope.",
    },
    {
      num: "03",
      name: "Explore",
      desc: "Evaluates requirements against the SAP scope library to identify full fits, partial fits, and gaps.",
      outcome: "Validated blueprint before configuration begins.",
    },
    {
      num: "04",
      name: "Realize",
      desc: "Automates legacy schema mapping to LTMC templates and simulates Business API connections.",
      outcome: "Load-ready migration packages with zero reformatting.",
    },
    {
      num: "05",
      name: "Run",
      desc: "L1 self-service support resolves routine queries, passing deep investigations to L2/L3.",
      outcome: "Support onboarding cut from weeks to days.",
    },
  ];

  const faqs = [
    {
      q: "What is Percipere's core focus?",
      a: "We turn enterprise SAP systems into active decision engines, replacing manual implementation assumptions with structured, AI-driven precision from first workshop to AMS support.",
    },
    {
      q: "Does PerciXpert modify our live SAP system autonomously?",
      a: "No. PerciXpert reads live objects, structures requirements, and generates diagnostics. Certified SAP consultants review and validate every action.",
    },
    {
      q: "Which environments are supported?",
      a: "SAP S/4HANA Public and Private Cloud, SAP ECC migrations, SAP Analytics Cloud (SAC), and Business Technology Platform (BTP).",
    },
    {
      q: "How is data protected?",
      a: "Under our ISO 27000:2022 framework, all AI models run within your private enterprise perimeter. No client data is ever transmitted to public commercial models.",
    },
  ];

  return (
              <div className="bg-white text-[#191923]">
                {/* 1. HERO — Auctor Editorial Layout */}
                <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                      <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#64676D] mb-4">
                        AI System of Action for SAP
                      </span>
                      <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-normal leading-[1.08] tracking-tight text-[#191923]">
                        Make every SAP implementation predictable.
                      </h1>
                        <p className="mt-5 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed max-w-2xl">
                          Replace manual assumptions with AI-driven intelligence across the entire SAP lifecycle — from requirements to go-live.
                        </p>
                          <div className="mt-8 flex flex-wrap items-center gap-3">
                            <button
                              onClick={() => setModalOpen(true)}
                              className="px-6 py-3 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                            >
                              Book a Consultation
                            </button>
              <a
                              href="#lifecycle"
                              className="px-6 py-3 bg-[#F8F8F8] text-[#191923] border border-[#EAEAEA] text-sm font-medium rounded-full hover:bg-[#F0F0F0] transition-colors"
                            >
                            Explore the System
                          </a>
                        </div>
                    </div>

                    {/* Auctor Product-as-Hero UI Demonstration (PerciXpert) */}
                    <div className="mt-10">
                      <PerciXpertVideoExplainer />
                    </div>
                  </div>
                </section>

                    {/* 2. THE PROBLEM — Clean Contrast (Auctor / Ramp Style) */}
                    <section className="py-24 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                      <div className="max-w-[1240px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                          <div className="lg:col-span-5">
                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                              The Root Cause
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight mt-3 text-[#191923]">
                              10–25% of SAP project cost overruns originate before a single configuration is made.
                            </h2>
                            <p className="text-sm text-[#64676D] mt-4 leading-relaxed">
                              Manual workshop notes, undocumented legacy workarounds, and subjective scoping create blind spots that surface as expensive rework in the Realize phase.
                            </p>
                          </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 bg-white rounded-xl border border-[#EAEAEA] shadow-subtle">
                <span className="text-xs font-mono text-[#8A8D93]">01</span>
                <h4 className="text-sm font-semibold mt-2 mb-1">Incomplete Scoping</h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Decisions lost in meeting notes turn scope into a moving target.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-[#EAEAEA] shadow-subtle">
                <span className="text-xs font-mono text-[#8A8D93]">02</span>
                <h4 className="text-sm font-semibold mt-2 mb-1">Undocumented Legacy</h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Decades of unrecorded operational fixes remain hidden until cutover.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-[#EAEAEA] shadow-subtle">
                <span className="text-xs font-mono text-[#8A8D93]">03</span>
                <h4 className="text-sm font-semibold mt-2 mb-1">Knowledge Loss</h4>
                <p className="text-xs text-[#64676D] leading-relaxed">
                  Consultants roll off, leaving teams with 8–12 weeks of support drag.
                </p>
              </div>
            </div>
          </div>
                        </div>
                    </section>

                    {/* 3. THE 5-STAGE LIFECYCLE (Rocketlane / Auctor Flow) */}
                    <section id="lifecycle" className="py-24 bg-white border-b border-[#EAEAEA]">
                      <div className="max-w-[1240px] mx-auto px-6">
                        <div className="max-w-2xl mb-12">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                            Continuous Lifecycle
                          </span>
                          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mt-2 text-[#191923]">
                            Five stages of structured SAP delivery.
                          </h2>
                          <p className="text-sm text-[#64676D] mt-2">
                            Every workshop decision is tracked through configuration to post-go-live support.
                          </p>
                        </div>

                        {/* Interactive Step Navigator */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#EAEAEA] pb-4 mb-8">
                          {stages.map((stage, idx) => (
                            <button
                              key={stage.num}
                              onClick={() => setActiveStage(idx)}
                              className={`text-left p-3 rounded-lg transition-all ${activeStage === idx
                                  ? "bg-[#F8F8FA] border border-[#EAEAEA]"
                                  : "hover:bg-[#FAFAFA]"
                                }`}
                            >
                                <div className="text-[11px] font-mono text-[#64676D]">{stage.num}</div>
                                <div className="text-sm font-semibold text-[#191923] mt-0.5">{stage.name}</div>
                            </button>
                          ))}
                        </div>

                        {/* Active Stage Display */}
                        <div className="p-8 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA] max-w-3xl">
                          <span className="text-xs font-mono text-[#0D5CE5] font-semibold">
                            Stage {stages[activeStage].num} — {stages[activeStage].name}
                          </span>
                          <p className="text-base text-[#191923] mt-2 mb-4 leading-relaxed font-normal">
                            {stages[activeStage].desc}
                          </p>
                          <div className="pt-4 border-t border-[#EAEAEA] flex items-center gap-2 text-xs text-[#10B981] font-mono">
                            <Check className="w-3.5 h-3.5 shrink-0" />
                            <span>{stages[activeStage].outcome}</span>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* 4. PLATFORM ARCHITECTURE — Asymmetric Bento (Auctor / Folk) */}
                    <section className="py-24 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                      <div className="max-w-[1240px] mx-auto px-6">
                        <div className="max-w-2xl mb-14">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                            Platform Engines
                          </span>
                          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mt-2 text-[#191923]">
                            Four purpose-built modules. One system.
                          </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Bento 1: PerciXpert */}
                          <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-3">
                                <span className="font-mono text-[#64676D]">DELIVERY ENGINE</span>
                                <span className="text-[#0D5CE5] font-mono">Prepare & Explore</span>
                              </div>
                              <h3 className="font-serif text-2xl font-normal mb-2">PerciXpert</h3>
                              <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                                Automates workshop requirements structuring, FIT-GAP matching, LTMC data migration templates, and Solution Design Documentation.
                              </p>
                            </div>
                            <Link
                              href="/percixpert"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
                            >
                              Explore PerciXpert <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                            {/* Bento 2: PerciServe */}
                            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between text-xs mb-3">
                                  <span className="font-mono text-[#64676D]">SUPPORT SUITE</span>
                                  <span className="text-[#0D5CE5] font-mono">L1 to L3 Escalation</span>
                                </div>
                                <h3 className="font-serif text-2xl font-normal mb-2">PerciServe</h3>
                                <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                                  Instant L1 self-service answers from SOPs. Unresolved issues escalate with full conversation context to PerciXpert for deep diagnosis.
                                </p>
                              </div>
                              <Link
                                href="/perciserve-support-suite"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
                              >
                                Explore PerciServe <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            {/* Bento 3: PerciHub */}
                            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between text-xs mb-3">
                                  <span className="font-mono text-[#64676D]">BUSINESS AGENTS</span>
                                  <span className="text-[#10B981] font-mono">Available Now</span>
                                </div>
                                <h3 className="font-serif text-2xl font-normal mb-2">PerciHub</h3>
                                <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                                  Context-aware agents for PR-to-PO conversion, Quality Inspection, and Bank Reconciliation that execute workflows directly inside SAP.
                                </p>
                              </div>
                              <Link
                                href="/percihub-business-suite"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
                              >
                                Explore PerciHub <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>

                            {/* Bento 4: xP&A & FUTUROOT */}
                            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between text-xs mb-3">
                                  <span className="font-mono text-[#64676D]">PLANNING & MINING</span>
                                  <span className="text-[#0D5CE5] font-mono">SAP Analytics Cloud</span>
                                </div>
                                <h3 className="font-serif text-2xl font-normal mb-2">xP&A & FUTUROOT</h3>
                                <p className="text-sm text-[#64676D] leading-relaxed mb-6">
                                  Continuous rolling financial forecasts across departments paired with P2P/O2C process mining to detect bottlenecks and alerts.
                                </p>
                              </div>
                              <Link
                                href="/what-we-do/intelligence-enterprise-offerings/xpa-epm"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
                              >
                                Explore xP&A <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                    </section>

                          {/* 5. VERIFIED METRICS — Ramp / Auctor Restraint */}
                          <section className="py-20 bg-white border-b border-[#EAEAEA]">
                            <div className="max-w-[1240px] mx-auto px-6">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                  <div className="font-serif text-4xl sm:text-5xl font-normal text-[#191923]">3–5 wks</div>
                                  <div className="text-xs font-semibold text-[#191923] mt-2">Scope & Prepare</div>
                                  <p className="text-xs text-[#64676D] mt-0.5">vs. 6–10 weeks manual</p>
                                </div>
                                <div>
                                  <div className="font-serif text-4xl sm:text-5xl font-normal text-[#0D5CE5]">95% cut</div>
                                  <div className="text-xs font-semibold text-[#191923] mt-2">Reporting Errors</div>
                                  <p className="text-xs text-[#64676D] mt-0.5">Verified in enterprise builds</p>
                                </div>
                                <div>
                                  <div className="font-serif text-4xl sm:text-5xl font-normal text-[#10B981]">100%</div>
                                  <div className="text-xs font-semibold text-[#191923] mt-2">Completion Rate</div>
                                  <p className="text-xs text-[#64676D] mt-0.5">70+ implementations delivered</p>
                                </div>
                                <div>
                                  <div className="font-serif text-4xl sm:text-5xl font-normal text-[#191923]">ISO 27000</div>
                                  <div className="text-xs font-semibold text-[#191923] mt-2">Private Perimeter</div>
                                  <p className="text-xs text-[#64676D] mt-0.5">Zero public model exposure</p>
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* 6. EDITORIAL CASE PROOF (Dropbox / Auctor) */}
                          <section className="py-24 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                            <div className="max-w-[1240px] mx-auto px-6">
                              <div className="max-w-2xl mb-12">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                  Proven Results
                                </span>
                                <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mt-2 text-[#191923]">
                                  Real outcomes from enterprise client transformations.
                                </h2>
                              </div>

                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
                                          <span className="text-xs font-mono text-[#0D5CE5]">GLOBAL ENGINEERING LEADER (5,000+ EMPLOYEES)</span>
                                          <h4 className="text-base font-semibold mt-2 mb-2">95% Fewer Errors, 75% Lower Analytics FTEs</h4>
                                          <p className="text-xs text-[#64676D] leading-relaxed">
                                            Integrated SAP ERP with SAP Analytics Cloud to deliver 52-week rolling forecasts and 80% faster processing across multi-region units.
                                          </p>
                                        </div>

                                        <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
                                          <span className="text-xs font-mono text-[#0D5CE5]">CONSUMER GOODS GROUP (£689M REVENUE)</span>
                                          <h4 className="text-base font-semibold mt-2 mb-2">20+ Countries Consolidated in 8 Months</h4>
                                          <p className="text-xs text-[#64676D] leading-relaxed">
                                            Replaced manual offline spreadsheets with a unified global BPC model, eliminating offline rework across all operating subsidiaries.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  {/* 7. FAQ — Auctor Minimal Accordion */}
                                  <section className="py-24 bg-white border-b border-[#EAEAEA]">
                                    <div className="max-w-[800px] mx-auto px-6">
                                      <h2 className="font-serif text-3xl font-normal text-center mb-12 text-[#191923]">
                                        Frequently asked questions.
                                      </h2>
                                      <div className="divide-y divide-[#EAEAEA] border-y border-[#EAEAEA]">
                                        {faqs.map((f, i) => (
                                          <div key={i} className="py-5">
                                            <div className="text-sm font-semibold text-[#191923] mb-1.5">{f.q}</div>
                                            <div className="text-xs text-[#64676D] leading-relaxed">{f.a}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </section>

                                  {/* 8. CLOSING CTA — Auctor Clean Banner */}
                                  <section className="py-28 bg-[#F8F8FA] text-center">
                                    <div className="max-w-[700px] mx-auto px-6">
                                      <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#191923] tracking-tight">
                                        Start with facts. Deliver with confidence.
                                      </h2>
                                      <p className="text-sm text-[#64676D] mt-4 mb-8">
                                        Speak with an enterprise SAP solution lead in London, Mumbai, Singapore, or Dubai.
                                      </p>
                                      <button
                                        onClick={() => setModalOpen(true)}
                                        className="px-7 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                                      >
                                        Book a Consultation
                                      </button>
                                    </div>
                                  </section>

                                  <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                                </div>
                                );
}
