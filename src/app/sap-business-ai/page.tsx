"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Check, CheckCircle2 } from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function SapBusinessAiPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const functions = [
    { title: "Finance", desc: "Up to 95% touchless invoice processing and continuous cash-flow prediction." },
    { title: "Supply Chain", desc: "SKU demand forecasts, lower safety-stock costs, and shipment delay alerts." },
    { title: "Manufacturing", desc: "Predictive machine maintenance, automated quality checks, and production schedules." },
    { title: "HR & People", desc: "Objective candidate matching, workforce sentiment tracking, and career paths." },
    { title: "Sales & Service", desc: "Win-rate forecast scoring and automated customer service responses in SAP." },
  ];

  return (
              <div className="bg-white text-[#191923]">
                {/* HERO — Slack + Notion */}
                <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D] block mb-3">
                        SAP Business AI
                      </span>
                      <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
                        AI embedded into your daily SAP workflows.
                      </h1>
                      <p className="mt-4 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed max-w-xl">
                        Bring intelligence directly into finance, supply chain, and manufacturing using SAP Joule and purpose-built models.
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

                        {/* Joule Interactive UI Preview */}
                        <div className="p-8 bg-[#F8F8FA] rounded-2xl border border-[#EAEAEA] max-w-3xl">
                          <div className="flex items-center justify-between text-xs font-mono mb-4 pb-2 border-b border-[#EAEAEA]">
                            <span className="font-bold text-[#191923]">SAP Joule Copilot • Live Session</span>
                            <span className="text-[#0D5CE5]">S/4HANA Cloud</span>
                          </div>
                              <div className="space-y-3">
                                <div className="p-3 bg-white rounded-xl border border-[#EAEAEA] text-xs">
                                  <span className="font-bold text-[#191923]">CFO Query: </span>
                                  <span className="text-[#64676D]">Joule, show Q3 cost variance in Europe and flag unposted invoices.</span>
                                </div>
                                    <div className="p-4 bg-white rounded-xl border border-[#EAEAEA] text-xs shadow-subtle">
                                      <div className="text-[#0D5CE5] font-mono text-[11px] mb-1">Joule Answer (0.8s):</div>
                                      <p className="text-[#191923] leading-relaxed">
                                        Variance is <strong>+3.2%</strong> above baseline in Düsseldorf due to raw material spot price shifts. 12 invoices (€142,000) are awaiting approval; auto-accrual is prepared.
                                      </p>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </section>

                                {/* WHY AI PILOTS FAIL — 5 Scannable Cards */}
                                <section className="py-20 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                                  <div className="max-w-[1240px] mx-auto px-6">
                                    <div className="max-w-xl mb-10">
                                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                        The Adoption Gap
                                      </span>
                                      <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
                                        Over 80% of enterprise AI projects get stuck in pilots.
                                      </h2>
                                    </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                          <div className="p-6 bg-white rounded-xl border border-[#EAEAEA]">
                                            <h4 className="text-sm font-bold text-[#191923] mb-1">Disconnected Data</h4>
                                            <p className="text-xs text-[#64676D]">Data trapped across legacy databases prevents models from understanding your business.</p>
                                          </div>
                                            <div className="p-6 bg-white rounded-xl border border-[#EAEAEA]">
                                              <h4 className="text-sm font-bold text-[#191923] mb-1">Unclear ROI</h4>
                                              <p className="text-xs text-[#64676D]">Experimental chatbots without direct links to P&L levers fail board review.</p>
                                            </div>
                                              <div className="p-6 bg-white rounded-xl border border-[#EAEAEA]">
                                                <h4 className="text-sm font-bold text-[#191923] mb-1">Security Fears</h4>
                                                <p className="text-xs text-[#64676D]">Legitimate privacy concerns stall rollouts without private perimeter governance.</p>
                                              </div>
                                            </div>
                                          </div>
                                        </section>

                                              {/* 5 ENTERPRISE FUNCTIONS */}
                                              <section className="py-24 bg-white border-b border-[#EAEAEA]">
                                                <div className="max-w-[1240px] mx-auto px-6">
                                                  <div className="max-w-2xl mb-12">
                                                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                                      Capabilities
                                                    </span>
                                                    <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2">
                                                      AI across five core departments.
                                                    </h2>
                                                  </div>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                          {functions.map((f) => (
              <div key={f.title} className="p-6 bg-[#F8F8FA] rounded-xl border border-[#EAEAEA]">
                <h4 className="text-sm font-bold text-[#191923] mb-1">{f.title}</h4>
                <p className="text-xs text-[#64676D] leading-relaxed">{f.desc}</p>
              </div>
            ))}
            <div className="p-6 bg-[#191923] text-white rounded-xl">
              <h4 className="text-sm font-bold mb-1">Responsible AI</h4>
              <p className="text-xs text-[#EAEAEA]/80 leading-relaxed">
                ISO 27000:2022 certified private perimeter. Your enterprise data never touches public models.
              </p>
            </div>
          </div>
        </div>
                                                      </section>

                                                      {/* Ecosystem Strip */}
                                                      <EcosystemStrip current="SAP Business AI" />

                                                          {/* CLOSING CTA */}
                                                          <section className="py-24 bg-white text-center">
                                                            <div className="max-w-[600px] mx-auto px-6">
                                                              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#191923]">
                                                                Make SAP Business AI work for your enterprise.
                                                              </h2>
                                                              <p className="text-xs text-[#64676D] mt-2 mb-8">
                                                                Identify high-ROI use cases with our certified SAP AI architects.
                                                              </p>
                                                              <button
                                                                onClick={() => setModalOpen(true)}
                                                                className="px-8 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                                                              >
                                                                Schedule AI Roadmap Session
                                                              </button>
                                                            </div>
                                                          </section>

                                                          <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="SAP Business AI" />
                                                        </div>
                                                        );
}
