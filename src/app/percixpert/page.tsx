"use client";

import React, { useState } from "react";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import PerciXpertVideoExplainer from "@/components/PerciXpertVideoExplainer";
import ComparisonTable, { ComparisonRow } from "@/components/ComparisonTable";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function PerciXpertPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const stages = [
    { num: "01", name: "Requirements", desc: "Turns workshop discussions into structured, tracked requirements automatically." },
    { num: "02", name: "Discovery", desc: "Reveals legacy workarounds and custom processes before project planning begins." },
    { num: "03", name: "Standard Match", desc: "Evaluates needs against standard SAP features to prevent expensive custom code." },
    { num: "04", name: "Data Migration", desc: "Converts old ERP data into SAP-compliant load files with zero manual extraction errors." },
    { num: "05", name: "API Mapping", desc: "Pre-tests third-party connections against SAP Business APIs before developers write code." },
    { num: "06", name: "Documentation", desc: "Generates an auditable Solution Design Document directly from system data." },
    { num: "07", name: "Support Handover", desc: "Transfers complete system knowledge to support teams in days instead of months." },
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      aspect: "Scoping & Discovery",
      traditional: "6–10 weeks of manual notes and guesswork",
      percipere: "3–5 weeks with automated, system-verified outputs",
    },
    {
      aspect: "Change Requests & Creep",
      traditional: "10–25% budget overruns from missed requirements",
      percipere: "Prevented by matching scope to standard SAP upfront",
    },
    {
      aspect: "System Documentation",
      traditional: "Scattered documents that quickly become outdated",
      percipere: "Auto-generated Solution Design Document (SDD)",
    },
    {
      aspect: "Support Handover",
      traditional: "8–12 weeks of consultant shadowing",
      percipere: "Seamless handover in days with zero knowledge loss",
    },
  ];

  return (
              <div className="bg-white text-[#191923]">
                {/* HERO — Linear + Auctor */}
                <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D] block mb-3">
                        PerciXpert • Delivery Engine
                      </span>
                      <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
                        Make SAP implementations predictable.
                      </h1>
                        <p className="mt-4 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed max-w-xl">
                          From first workshop to go-live, PerciXpert brings structure, traceability, and automated verification to every project phase.
                        </p>
                          <div className="mt-8 flex flex-wrap items-center gap-3">
                            <button
                              onClick={() => setModalOpen(true)}
                              className="px-6 py-3 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                            >
                              Book a Consultation
                            </button>
                            <a
                              href="#stages"
                              className="px-6 py-3 bg-[#F8F8FA] text-[#191923] border border-[#EAEAEA] text-sm font-medium rounded-full hover:bg-[#F0F0F0] transition-colors"
                            >
                              View 7 Stages
                            </a>
                          </div>
                        </div>

                          {/* 50-60s Explainer Video Player */}
                          <div className="mt-10">
                            <PerciXpertVideoExplainer />
                          </div>
                        </div>
                      </section>

                          {/* THE PROBLEM — 1 Big Fact, 3 Plain-English Risks */}
                          <section className="py-20 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                            <div className="max-w-[1240px] mx-auto px-6">
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                                <div className="lg:col-span-5">
                                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                      Why SAP Projects Slip
                                    </span>
                                      <h2 className="font-serif text-3xl font-normal mt-2 leading-tight">
                                        10–25% of cost overruns originate before a single configuration is made.
                                      </h2>
                                        <p className="text-xs text-[#64676D] mt-3 leading-relaxed">
                                          When requirements rely on human memory and scattered notes, misunderstandings only appear months later during testing.
                                        </p>
                                      </div>

                                          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div className="p-6 bg-white rounded-xl border border-[#EAEAEA]">
                                              <h4 className="text-xs font-bold text-[#191923] mb-1">Missed Scope</h4>
                                              <p className="text-xs text-[#64676D]">Verbal requirements fail to reach the build team.</p>
                                            </div>
                                              <div className="p-6 bg-white rounded-xl border border-[#EAEAEA]">
                                                <h4 className="text-xs font-bold text-[#191923] mb-1">Manual Mapping</h4>
                                                <p className="text-xs text-[#64676D]">Formatting legacy data wastes weeks of consultant time.</p>
                                              </div>
                                                <div className="p-6 bg-white rounded-xl border border-[#EAEAEA]">
                                                  <h4 className="text-xs font-bold text-[#191923] mb-1">Weak Handover</h4>
                                                  <p className="text-xs text-[#64676D]">Critical knowledge disappears when implementation teams leave.</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </section>

                                            {/* 7-STAGE LIFECYCLE — Rocketlane Scannable Stage Cards */}
                                            <section id="stages" className="py-24 bg-white border-b border-[#EAEAEA]">
                                              <div className="max-w-[1240px] mx-auto px-6">
                                                <div className="max-w-2xl mb-12">
                                                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                                    Full Lifecycle Support
                                                  </span>
                                                  <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mt-2 text-[#191923]">
                                                    Seven stages of automated precision.
                                                  </h2>
                                                </div>

                                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                        {stages.map((s) => (
                                                          <div key={s.num} className="p-6 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA] flex flex-col justify-between">
                                                            <div>
                                                              <span className="text-xs font-mono font-bold text-[#0D5CE5]">{s.num}</span>
                                                              <h3 className="text-base font-bold text-[#191923] mt-2 mb-1">{s.name}</h3>
                                                              <p className="text-xs text-[#64676D] leading-relaxed">{s.desc}</p>
                                                            </div>
                                                          </div>
                                                        ))}
                                                        <div className="p-6 bg-[#191923] text-white rounded-2xl flex flex-col justify-between">
                                                          <div>
                                                            <span className="text-xs font-mono text-[#0D5CE5]">RESULT</span>
                                                            <h3 className="font-serif text-xl font-normal mt-2 mb-1">Zero Blindspots</h3>
                                                            <p className="text-xs text-[#EAEAEA]/80 leading-relaxed">
                                                              Every step is documented, traceable, and validated by certified experts.
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
      </section>

                                                      {/* TWO WAYS TO DEPLOY — Atlassian Cards */}
                                                      <section className="py-20 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                                                        <div className="max-w-[1240px] mx-auto px-6">
                                                          <div className="max-w-2xl mb-10">
                                                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                                              Deployment
                                                            </span>
                                                            <h2 className="font-serif text-3xl font-normal text-[#191923]">
                                                              Two deployment modules.
                                                            </h2>
                                                          </div>

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                                                                  <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
                                                                    <span className="text-xs font-mono text-[#0D5CE5]">MODULE 1</span>
                                                                    <h3 className="font-serif text-2xl font-normal mt-2 mb-2">New Implementations</h3>
                                                                    <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                                                                      For organizations moving to SAP S/4HANA Cloud. Automates scoping, standard matching, data migration, and documentation.
                                                                    </p>
                                                                      <div className="text-xs font-semibold text-[#10B981] font-mono">
                                                                        ✓ 3–5 week prepare phase vs 6–10 weeks
                                                                      </div>
                                                                    </div>

                                                                        <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
                                                                          <span className="text-xs font-mono text-[#191923]">MODULE 2</span>
                                                                          <h3 className="font-serif text-2xl font-normal mt-2 mb-2">System Audit & Recovery</h3>
                                                                          <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                                                                            For in-flight projects experiencing delays, or during support transitions. Audits live SAP configurations to highlight gaps and undocumented fixes.
                                                                          </p>
                                                                            <div className="text-xs font-semibold text-[#0D5CE5] font-mono">
                                                                              ✓ Eliminates support transition risk
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                    </div>
                                                                  </section>

                                                                        {/* METRICS COMPARISON TABLE — Ramp Style */}
                                                                        <section className="py-20 bg-white border-b border-[#EAEAEA]">
                                                                          <div className="max-w-[1000px] mx-auto px-6">
                                                                            <div className="max-w-xl mb-10">
                                                                              <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                                                                Measurable Outcomes
                                                                              </span>
                                                                              <h2 className="font-serif text-3xl font-normal text-[#191923]">
                                                                                Traditional Consulting vs. PerciXpert
                                                                              </h2>
                                                                            </div>

                                                                            <ComparisonTable rows={comparisonRows} />
                                                                          </div>
                                                                        </section>

                                                                        {/* Ecosystem Strip */}
                                                                        <EcosystemStrip current="PerciXpert" />

                                                                            {/* CLOSING CTA */}
                                                                            <section className="py-24 bg-white text-center">
                                                                              <div className="max-w-[600px] mx-auto px-6">
                                                                                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#191923]">
                                                                                  De-risk your next SAP rollout.
                                                                                </h2>
                                                                                <p className="text-xs text-[#64676D] mt-2 mb-8">
                                                                                  Discuss your implementation roadmap or request a system audit.
                                                                                </p>
                                                                                <button
                                                                                  onClick={() => setModalOpen(true)}
                                                                                  className="px-8 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                                                                                >
                                                                                  Book a Consultation
                                                                                </button>
                                                                              </div>
                                                                            </section>

                                                                            <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciXpert SAP Delivery" />
                                                                          </div>
                                                                          );
}
