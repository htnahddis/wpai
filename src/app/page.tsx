"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import PerciXpertVideoExplainer from "@/components/PerciXpertVideoExplainer";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Capture",
      tagline: "Tracked Requirements",
      desc: "Workshop discussions turn into verified scope items automatically.",
    },
    {
      title: "2. Match",
      tagline: "Standard Fit",
      desc: "Compare needs against standard SAP features to prevent costly custom code.",
    },
    {
      title: "3. Map",
      tagline: "Clean Migration",
      desc: "Convert legacy ERP data into SAP-ready files with zero manual typing.",
    },
    {
      title: "4. Blueprint",
      tagline: "Auto Documentation",
      desc: "Generate complete, audit-ready system blueprints directly from verified facts.",
    },
    {
      title: "5. Support",
      tagline: "Instant Answers",
      desc: "Resolve routine user questions in seconds; pass complex bugs to experts.",
    },
  ];

  return (
    <div className="bg-white text-[#191923]">
      {/* HERO — Auctor Ultra-Minimalist Hero */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D] block mb-3">
              Enterprise SAP Intelligence
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.08] tracking-tight text-[#191923]">
              Make SAP simple, predictable, and fast.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#64676D] font-normal leading-relaxed max-w-xl">
              De-risk implementations, automate daily tasks, and answer support questions in seconds.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
              >
                Book a Consultation
              </button>
              <a
                href="#how-it-works"
                className="px-6 py-3 bg-[#F8F8FA] text-[#191923] border border-[#EAEAEA] text-sm font-medium rounded-full hover:bg-[#F0F0F0] transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Product UI Demonstration */}
          <div className="mt-10">
            <PerciXpertVideoExplainer />
          </div>
        </div>
      </section>

      {/* THE PROBLEM vs THE FIX vs THE RESULT */}
      <section className="py-20 bg-[#F8F8FA] border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#8A8D93]">THE CHALLENGE</span>
              <h3 className="font-serif text-xl font-normal mt-2 mb-2">Lost in Spreadsheets</h3>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Requirements buried in meeting notes and emails lead to misunderstandings, rework, and costly project delays.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#0D5CE5]">THE FIX</span>
              <h3 className="font-serif text-xl font-normal mt-2 mb-2">System-Verified Facts</h3>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Every requirement is digitally tracked, matched against standard SAP features, and automatically documented.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle">
              <span className="text-xs font-mono text-[#10B981]">THE RESULT</span>
              <h3 className="font-serif text-xl font-normal mt-2 mb-2">On-Time Delivery</h3>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Preparation time cut in half. Clear scope, verified data migration, and zero surprise rework at go-live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Interactive 5-Step Plain-English Flow */}
      <section id="how-it-works" className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
              How It Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mt-2 text-[#191923]">
              Five steps from workshop to go-live.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 border-b border-[#EAEAEA] pb-4 mb-6">
            {steps.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3 rounded-xl transition-all ${
                  activeStep === idx
                    ? "bg-[#F8F8FA] border border-[#EAEAEA]"
                    : "hover:bg-[#FAFAFA]"
                }`}
              >
                <div className="text-xs font-bold text-[#191923]">{s.title}</div>
                <div className="text-[11px] text-[#64676D] mt-0.5">{s.tagline}</div>
              </button>
            ))}
          </div>

          <div className="p-6 bg-[#F8F8FA] rounded-xl border border-[#EAEAEA] max-w-2xl">
            <span className="text-xs font-mono font-semibold text-[#0D5CE5]">
              {steps[activeStep].title}: {steps[activeStep].tagline}
            </span>
            <p className="text-sm text-[#191923] mt-2 leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>
      </section>

      {/* FOUR CORE PRODUCTS */}
      <section className="py-24 bg-[#F8F8FA] border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64676D]">
              Products
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mt-2 text-[#191923]">
              Four focused solutions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. PerciXpert */}
            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#0D5CE5]">IMPLEMENTATION</span>
                <h3 className="font-serif text-2xl font-normal mt-1 mb-2">PerciXpert</h3>
                <p className="text-xs text-[#64676D] leading-relaxed mb-6">
                  Replaces manual scoping with verified data. Cuts discovery time in half and automates migration files.
                </p>
              </div>
              <Link
                href="/percixpert"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
              >
                Learn about PerciXpert <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 2. PerciServe */}
            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#0D5CE5]">SUPPORT</span>
                <h3 className="font-serif text-2xl font-normal mt-1 mb-2">PerciServe</h3>
                <p className="text-xs text-[#64676D] leading-relaxed mb-6">
                  Answers user questions instantly from company documents. Escalates complex issues with full diagnosis.
                </p>
              </div>
              <Link
                href="/perciserve-support-suite"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
              >
                Learn about PerciServe <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3. PerciHub */}
            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#10B981]">AUTOMATION</span>
                <h3 className="font-serif text-2xl font-normal mt-1 mb-2">PerciHub</h3>
                <p className="text-xs text-[#64676D] leading-relaxed mb-6">
                  Intelligent agents built into SAP to process Purchase Orders, Quality Checks, and Bank Matching automatically.
                </p>
              </div>
              <Link
                href="/percihub-business-suite"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
              >
                Learn about PerciHub <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4. xP&A */}
            <div className="p-8 bg-white rounded-2xl border border-[#EAEAEA] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#0D5CE5]">PLANNING</span>
                <h3 className="font-serif text-2xl font-normal mt-1 mb-2">xP&A Planning</h3>
                <p className="text-xs text-[#64676D] leading-relaxed mb-6">
                  Connects finance, sales, and supply chain into one unified live plan on SAP Analytics Cloud.
                </p>
              </div>
              <Link
                href="/what-we-do/intelligence-enterprise-offerings/xpa-epm"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191923] hover:text-[#0D5CE5] transition-colors"
              >
                Learn about xP&A <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS — 3 Clear Facts */}
      <section className="py-20 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#191923]">50% Faster</div>
              <div className="text-xs font-semibold text-[#191923] mt-2">Implementation Scoping</div>
              <p className="text-xs text-[#64676D] mt-0.5">3–5 weeks instead of 6–10 weeks</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#0D5CE5]">95% Less</div>
              <div className="text-xs font-semibold text-[#191923] mt-2">Manual Migration Errors</div>
              <p className="text-xs text-[#64676D] mt-0.5">Automated formatting directly into SAP</p>
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#10B981]">100%</div>
              <div className="text-xs font-semibold text-[#191923] mt-2">Delivery Track Record</div>
              <p className="text-xs text-[#64676D] mt-0.5">Over 70+ successful enterprise rollouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAIN ENGLISH FAQS — 3 Simple Answers for Business Leaders */}
      <section className="py-24 bg-[#F8F8FA] border-b border-[#EAEAEA]">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="font-serif text-3xl font-normal text-center mb-10 text-[#191923]">
            Common Questions
          </h2>
          <div className="divide-y divide-[#EAEAEA] border-y border-[#EAEAEA]">
            <div className="py-5">
              <div className="text-sm font-semibold text-[#191923] mb-1">
                Does this replace our SAP system?
              </div>
              <p className="text-xs text-[#64676D] leading-relaxed">
                No. It works alongside your existing SAP system to speed up projects, automate manual steps, and provide instant user support.
              </p>
            </div>
            <div className="py-5">
              <div className="text-sm font-semibold text-[#191923] mb-1">
                Does AI make changes in SAP automatically?
              </div>
              <p className="text-xs text-[#64676D] leading-relaxed">
                No. The software prepares data, checks business rules, and recommends actions. Your managers and consultants retain full review and approval.
              </p>
            </div>
            <div className="py-5">
              <div className="text-sm font-semibold text-[#191923] mb-1">
                Is enterprise data kept secure?
              </div>
              <p className="text-xs text-[#64676D] leading-relaxed">
                Yes. Everything runs within your secure private cloud under ISO 27000:2022 standards. Data is never shared with public models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#191923] tracking-tight">
            Deliver SAP with certainty.
          </h2>
          <p className="text-sm text-[#64676D] mt-3 mb-8">
            Speak with an enterprise solution architect about your implementation or support roadmap.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-[#191923] text-white text-sm font-medium rounded-full hover:bg-black transition-all shadow-sm"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
