"use client";

import React, { useState } from "react";
import { ArrowRight, Bot, Database, Layers, CheckCircle2 } from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function PerciHubPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const availableAgents = [
    {
      name: "PR to PO Agent",
      department: "Procurement",
      desc: "Evaluates approved purchase requisitions, validates supplier contract pricing, and auto-generates SAP Purchase Orders.",
      output: "Zero manual PO typing",
    },
    {
      name: "Quality Inspection Agent",
      department: "Manufacturing",
      desc: "Compares lab test measurements against recipe specifications and automatically posts Accept or Reject decisions in SAP QM.",
      output: "Instant batch clearance",
    },
    {
      name: "Bank Reconciliation Agent",
      department: "Finance",
      desc: "Matches daily electronic bank statements against open customer invoices and vendor payables with automated variance posting.",
      output: "95%+ touchless clearing",
    },
  ];

  return (
              <div className="bg-white text-[#191923]">
                {/* HERO — Notion Homepage Hero Style */}
                <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D] block mb-3">
                        PerciHub • Business Suite
                      </span>
                      <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
                        AI agents that execute SAP tasks for you.
                      </h1>
                      <p className="mt-4 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed max-w-xl">
                        Intelligent agents built into SAP to automate procurement, quality inspections, and bank reconciliations with built-in business context.
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

                            {/* Clean Agent Activity Board */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {availableAgents.map((agent) => (
              <div key={agent.name} className="p-7 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-[#0D5CE5] font-semibold">{agent.department}</span>
                    <span className="text-[#10B981]">Available Now</span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#191923] mb-2">{agent.name}</h3>
                  <p className="text-xs text-[#64676D] leading-relaxed mb-6">{agent.desc}</p>
                </div>
                                  <div className="pt-4 border-t border-[#EAEAEA] text-xs font-mono text-[#191923] font-medium flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                                    <span>{agent.output}</span>
                                  </div>
                                </div>
            ))}
                            </div>
                          </div>
                        </section>

                              {/* HOW IT WORKS — Airtable 3-Component Diagram */}
                              <section className="py-20 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                                <div className="max-w-[1240px] mx-auto px-6">
                                  <div className="max-w-2xl mb-12">
                                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                      Architecture
                                    </span>
                                    <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
                                      Why generic AI fails in SAP — and how PerciHub works.
                                    </h2>
                                  </div>

                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
                                          <span className="text-xs font-mono text-[#8A8D93]">LAYER 01</span>
                                          <h3 className="font-serif text-xl font-normal mt-2 mb-2">Live SAP Data</h3>
                                          <p className="text-xs text-[#64676D] leading-relaxed">
                                            Connects directly to your enterprise database, respecting existing user roles, authorizations, and validation rules.
                                          </p>
                                        </div>

                                            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
                                              <span className="text-xs font-mono text-[#0D5CE5]">LAYER 02</span>
                                              <h3 className="font-serif text-xl font-normal mt-2 mb-2">AI Execution Agents</h3>
                                              <p className="text-xs text-[#64676D] leading-relaxed">
                                                Task-specific agents follow strict business criteria to evaluate documents, match records, and post transactions.
                                              </p>
                                            </div>

                                                <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
                                                  <span className="text-xs font-mono text-[#10B981]">LAYER 03</span>
                                                  <h3 className="font-serif text-xl font-normal mt-2 mb-2">Process Context</h3>
                                                  <p className="text-xs text-[#64676D] leading-relaxed">
                                                    Enriched by FUTUROOT process intelligence, so the agent acts with intent based on your actual business rules.
                                                  </p>
                                                </div>
                                              </div>
        </div>
      </section>

                                          {/* THREE INDUSTRY EXAMPLES — Plain English */}
                                          <section className="py-24 bg-white border-b border-[#EAEAEA]">
                                            <div className="max-w-[1240px] mx-auto px-6">
                                              <div className="max-w-2xl mb-12">
                                                <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                                  Industry Use Cases
                                                </span>
                                                <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
                                                  Built for how your industry runs.
                                                </h2>
                                              </div>

                                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    <div className="p-7 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA]">
                                                      <h4 className="text-base font-bold text-[#191923] mb-1">Manufacturing</h4>
                                                      <p className="text-xs text-[#64676D] leading-relaxed">
                                                        Load levelling, recipe batch traceability, and automated quality usage decisions in SAP QM.
                                                      </p>
                                                    </div>

                                                      <div className="p-7 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA]">
                                                        <h4 className="text-base font-bold text-[#191923] mb-1">Engineering & EPC</h4>
                                                        <p className="text-xs text-[#64676D] leading-relaxed">
                                                          Subcontractor duplicate invoice detection, intelligent GL coding, and project milestone cash-flow forecasting.
                                                        </p>
                                                      </div>

                                                        <div className="p-7 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA]">
                                                          <h4 className="text-base font-bold text-[#191923] mb-1">Supply Chain</h4>
                                                          <p className="text-xs text-[#64676D] leading-relaxed">
                                                            Demand forecasting on SAC, shelf-life monitoring for perishable ingredients, and route clustering.
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>

                                                  {/* Ecosystem Strip */}
                                                  <EcosystemStrip current="PerciHub" />

                                                      {/* CLOSING CTA */}
                                                      <section className="py-24 bg-white text-center">
                                                        <div className="max-w-[600px] mx-auto px-6">
                                                          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#191923]">
                                                            Have a manual process to automate?
                                                          </h2>
                                                          <p className="text-xs text-[#64676D] mt-2 mb-8">
                                                            Tell us which workflow costs your team the most time.
                                                          </p>
                                                          <button
                                                            onClick={() => setModalOpen(true)}
                                                            className="px-8 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                                                          >
                                                            Request Agent Walkthrough
                                                          </button>
                                                        </div>
                                                      </section>

                                                      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciHub AI Agents" />
                                                    </div>
                                                    );
}
