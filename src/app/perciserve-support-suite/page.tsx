"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Cpu, Layers } from "lucide-react";
import EcosystemStrip from "@/components/EcosystemStrip";
import ConsultationModal from "@/components/ConsultationModal";

export default function PerciServePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
          <div className="bg-white text-[#191923]">
            {/* HERO — Slack Homepage Hero Reference */}
            <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
              <div className="max-w-[1240px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left */}
                  <div className="lg:col-span-5 text-left">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D] block mb-3">
                        PerciServe • Support Suite
                      </span>
                      <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-[#191923]">
                        Fewer support tickets. Instant SAP answers.
                      </h1>
                        <p className="mt-4 text-base sm:text-lg text-[#64676D] leading-relaxed max-w-md">
                          Answers everyday SAP questions in seconds and hands complex bugs to technical teams with the root cause already identified.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setModalOpen(true)}
                            className="px-6 py-3 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                          >
                            Book a Demo
                          </button>
                        </div>
                      </div>

                      {/* Right: Clean Slack-Style Chat Interface Demonstration */}
                      <div className="lg:col-span-7">
                              <div className="bg-white border border-[#EAEAEA] rounded-2xl shadow-subtle overflow-hidden">
                                <div className="bg-[#F8F8FA] border-b border-[#EAEAEA] px-4 py-3 flex items-center justify-between text-xs">
                                  <div className="flex items-center gap-2 font-mono">
                                    <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                                    <span className="font-semibold text-[#191923]">PerciDesk • SAP Assistant</span>
                                  </div>
                                  <span className="text-[10px] text-[#64676D] font-mono">Instant L1 Support</span>
                                </div>

                                  <div className="p-6 space-y-4">
                                    {/* User Message */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-7 h-7 rounded-full bg-[#EAEAEA] flex items-center justify-center text-xs font-semibold text-[#191923] shrink-0">
                                          U
                                        </div>
                                          <div className="bg-[#F8F8FA] p-3.5 rounded-xl text-xs text-[#191923] max-w-md border border-[#EAEAEA]">
                                            <p className="font-semibold mb-1">Business User:</p>
                                            <p className="text-[#64676D]">How do I release a purchase order over £50k that is blocked in approval?</p>
                                          </div>
                                        </div>

                                        {/* Instant AI Answer */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-7 h-7 rounded-full bg-[#191923] text-white flex items-center justify-center text-xs font-semibold shrink-0">
                                              AI
                                            </div>
                                                <div className="bg-white border border-[#EAEAEA] p-4 rounded-xl text-xs text-[#191923] max-w-lg shadow-subtle">
                                                  <div className="flex items-center justify-between text-[11px] font-mono text-[#0D5CE5] mb-2 pb-1 border-b border-[#F0F0F0]">
                                                    <span>Answered from Company SOPs</span>
                                                    <span className="text-[#10B981]">Resolved in 1.4s</span>
                                                  </div>
                                                    <p className="leading-relaxed mb-2">
                                                      POs over £50k require dual finance authorization:
                                                    </p>
                                                      <ol className="list-decimal pl-4 space-y-1 text-[#64676D] mb-3">
                                                        <li>Open the <strong>Manage Purchase Orders</strong> app.</li>
                                                        <li>Filter by status: <em>Awaiting Flexible Workflow</em>.</li>
                                                        <li>Click <strong>Release with Dual Authorization</strong>.</li>
                                                      </ol>
                                                        <div className="text-[11px] font-mono text-[#10B981] flex items-center gap-1">
                                                          <CheckCircle2 className="w-3.5 h-3.5" />
                                                          <span>Resolved at L1 • Zero tickets created</span>
                                                        </div>
                                                      </div>
                                                    </div>

                                                      {/* Context pass to L2 */}
                                                      <div className="p-3 bg-[#F8F8FA] border border-[#EAEAEA] rounded-xl text-xs text-[#64676D] flex items-center justify-between">
                                                        <span>Unresolved issues pass automatically to <strong>PerciXpert L2/L3</strong></span>
                                                        <span className="font-mono text-[#0D5CE5] text-[11px]">Full Context Included</span>
                                                      </div>
                                                    </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </section>

                                            {/* THE 3-STAGE SUPPORT WORKFLOW — Rocketlane Clean Architecture */}
                                            <section className="py-24 bg-[#F8F8FA] border-b border-[#EAEAEA]">
                                              <div className="max-w-[1240px] mx-auto px-6">
                                                <div className="max-w-2xl mb-12">
                                                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                                    Intelligent Support Journey
                                                  </span>
                                                  <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mt-2 text-[#191923]">
                                                    From instant answer to root-cause diagnosis.
                                                  </h2>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
                                                      <div>
                                                        <span className="text-xs font-mono font-bold text-[#0D5CE5]">STAGE 01</span>
                                                        <h3 className="font-serif text-2xl font-normal mt-2 mb-2">L1 — Self-Service</h3>
                                                        <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                                                          Users ask questions in natural language. The system searches your documentation, SOPs, and past tickets to deliver an instant answer.
                                                        </p>
                                                    </div>
                                                      <div className="pt-3 border-t border-[#EAEAEA] text-xs font-mono text-[#10B981]">
                                                        ✓ Resolves routine questions in seconds
                                                      </div>
                                                    </div>

                                                      <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
                                                        <div>
                                                            <span className="text-xs font-mono font-bold text-[#191923]">STAGE 02</span>
                                                            <h3 className="font-serif text-2xl font-normal mt-2 mb-2">L2/L3 — Technical Fix</h3>
                                                            <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                                                              Complex issues escalate with full conversation context. PerciXpert inspects live SAP configurations and recommends a root-cause fix for consultants to apply.
                                                            </p>
                                                        </div>
                                                          <div className="pt-3 border-t border-[#EAEAEA] text-xs font-mono text-[#0D5CE5]">
                                                            ✓ No blank tickets or lost context
                                                          </div>
                                                        </div>

                                                          <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
                                                            <div>
                                                                <span className="text-xs font-mono font-bold text-[#64676D]">STAGE 03</span>
                                                                <h3 className="font-serif text-2xl font-normal mt-2 mb-2">Process Intelligence</h3>
                                                                <p className="text-xs text-[#64676D] leading-relaxed mb-4">
                                                                  FUTUROOT analyzes ticket history and event telemetry to identify recurring bottlenecks and flag potential issues before they cause disruption.
                                                                </p>
                                                            </div>
                                                              <div className="pt-3 border-t border-[#EAEAEA] text-xs font-mono text-[#10B981]">
                                                                ✓ Solves root causes permanently
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </section>

                                                            {/* CONTINUOUS FEEDBACK LOOP — Notion Minimal Loop */}
                                                            <section className="py-20 bg-white border-b border-[#EAEAEA]">
                                                              <div className="max-w-[1000px] mx-auto px-6 text-center">
                                                                <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
                                                                  Continuous Learning
                                                                </span>
                                                                <h2 className="font-serif text-3xl font-normal text-[#191923] mt-2 mb-4">
                                                                  Every resolved issue makes the system smarter.
                                                                </h2>
                                                                <p className="text-xs sm:text-sm text-[#64676D] max-w-xl mx-auto leading-relaxed mb-8">
                                                                  When a technical consultant resolves an escalated ticket, the solution writes back into PerciServe&apos;s knowledge base. The next user with the same question gets an instant L1 answer.
                                                                </p>

                                                                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-left">
                                                                    <div className="p-4 bg-[#F8F8FA] rounded-xl border border-[#EAEAEA]">
                                                                      <span className="text-[10px] font-mono text-[#0D5CE5]">01. NEW ISSUE</span>
                                                                      <p className="text-xs text-[#191923] font-medium mt-1">Novel query raised by business user</p>
                                                                    </div>
                                                                    <div className="p-4 bg-[#F8F8FA] rounded-xl border border-[#EAEAEA]">
                                                                      <span className="text-[10px] font-mono text-[#0D5CE5]">02. DIAGNOSIS</span>
                                                                      <p className="text-xs text-[#191923] font-medium mt-1">Root cause identified & consultant applies fix</p>
                                                                    </div>
                                                                      <div className="p-4 bg-[#F8F8FA] rounded-xl border border-[#EAEAEA]">
                                                                        <span className="text-[10px] font-mono text-[#0D5CE5]">03. INGESTION</span>
                                                                        <p className="text-xs text-[#191923] font-medium mt-1">Resolution saved to enterprise knowledge base</p>
                                                                      </div>
                                                                        <div className="p-4 bg-[#191923] text-white rounded-xl">
                                                                          <span className="text-[10px] font-mono text-[#10B981]">04. RESOLUTION</span>
                                                                          <p className="text-xs font-medium mt-1">Next identical query resolved instantly at L1</p>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </section>

                                                                  {/* Ecosystem Strip */}
                                                                  <EcosystemStrip current="PerciServe" />

                                                                      {/* CLOSING CTA */}
                                                                      <section className="py-24 bg-white text-center">
                                                                        <div className="max-w-[600px] mx-auto px-6">
                                                                          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#191923]">
                                                                            Reduce your SAP support overhead.
                                                                          </h2>
                                                                          <p className="text-xs text-[#64676D] mt-2 mb-8">
                                                                            Schedule a walkthrough to see PerciServe answer questions from real enterprise documentation.
                                                                          </p>
                                                                          <button
                                                                            onClick={() => setModalOpen(true)}
                                                                            className="px-8 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
                                                                          >
                                                                            Schedule a Demo
                                                                          </button>
                                                                        </div>
                                                                      </section>

                                                                      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTopic="PerciServe Support Suite" />
                                                                    </div>
                                                                    );
}
