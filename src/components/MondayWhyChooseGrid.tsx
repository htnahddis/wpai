"use client";

import React, { useState } from "react";
import { Plus, Check, Sparkles } from "lucide-react";

export default function MondayWhyChooseGrid() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const teamAvatars = [
    { name: "Finance Lead", bg: "bg-emerald-500", initials: "MK" },
    { name: "Supply Chain Director", bg: "bg-blue-500", initials: "SR" },
    { name: "Procurement Lead", bg: "bg-purple-500", initials: "AL" },
    { name: "Enterprise Architect", bg: "bg-amber-500", initials: "DK" },
    { name: "Commercial Ops", bg: "bg-pink-500", initials: "VP" },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-[#EBEBED]">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[46px] font-normal text-zinc-900 tracking-tight leading-[1.12]">
            Why enterprise leaders choose<br className="hidden sm:inline" /> Percipere for SAP Business AI
          </h2>
        </div>

        {/* 3-Row Monday.com Bento Grid */}
        <div className="space-y-5 sm:space-y-6">
          {/* =========================================================================
              ROW 1: Card 1 (Wide Interactive Visual) + Card 2 (Value Speed)
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Card 1: Interactive Agent Automation Scene (7 Cols) */}
            <div className="lg:col-span-7 bg-[#E8E8EC] rounded-[28px] relative overflow-hidden min-h-[300px] sm:min-h-[340px] flex items-center p-6 sm:p-10 group">
              {/* Leader Photo with transparent crop */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
                alt="SAP Business Leader"
                className="absolute bottom-0 right-2 sm:right-8 h-[90%] sm:h-[95%] w-auto object-cover object-top rounded-t-2xl opacity-95 group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
              />

              {/* Floating UI Simulation Widget */}
              <div className="relative z-10 space-y-3 max-w-[260px] sm:max-w-[280px]">
                {/* Status Reporter Pill */}
                <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-zinc-900">Joule S/4HANA Copilot</div>
                    <div className="text-[11px] text-zinc-500">Auto-cleared 14 overdue tasks</div>
                  </div>
                </div>

                {/* Floating "Done" Action Button with Cursor */}
                <div className="inline-flex items-center gap-2 pl-3">
                  <div className="bg-[#00C875] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-md flex items-center gap-1.5 -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Done</span>
                  </div>

                  {/* SVG Cursor Pointer */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-purple-600 drop-shadow-sm animate-bounce"
                    fill="currentColor"
                  >
                    <path d="M4 2l16 8-8 3-3 8-5-19z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Easy to start, fast to show value (5 Cols) */}
            <div className="lg:col-span-5 bg-[#F4F4F6] hover:bg-[#EFEFEA] transition-colors rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] group cursor-pointer">
              <div>
                <h3 className="text-2xl sm:text-[26px] font-semibold text-zinc-900 tracking-tight leading-snug">
                  Easy to start, fast to show value
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
                  Get your SAP AI accelerators and Joule extensions up and running in days, not months.
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 shadow-2xs group-hover:scale-110 transition-all">
                  <Plus className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              ROW 2: Card 3 (Adoption & Avatars) + Card 4 (Signature Purple Quote)
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Card 3: An AI platform teams actually adopt (5 Cols) */}
            <div className="lg:col-span-5 bg-[#F4F4F6] hover:bg-[#EFEFEA] transition-colors rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] group cursor-pointer">
              <div>
                <h3 className="text-2xl sm:text-[26px] font-semibold text-zinc-900 tracking-tight leading-snug">
                  An AI system teams actually adopt
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed">
                  Embedded directly into daily SAP Fiori, Microsoft Teams, and Excel workflows so data is always accurate.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-200/60 mt-4">
                {/* Overlapping User Avatars */}
                <div className="flex items-center -space-x-2">
                  {teamAvatars.map((u, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${u.bg} text-white font-mono text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-2xs`}
                      title={u.name}
                    >
                      {u.initials}
                    </div>
                  ))}
                </div>

                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 shadow-2xs group-hover:scale-110 transition-all">
                  <Plus className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Card 4: Signature Monday.com Purple Testimonial Card (7 Cols) */}
            <div className="lg:col-span-7 bg-[#6161FF] rounded-[28px] p-8 sm:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] text-white shadow-sm relative overflow-hidden group">
              <div>
                {/* Large Subtle Quote Mark */}
                <div className="text-white/35 font-serif text-6xl leading-none select-none mb-3">
                  &ldquo;
                </div>
                <blockquote className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug text-white">
                  It&rsquo;s the first time we&rsquo;ve seen a real AI solution that is actually useful.
                </blockquote>
              </div>

              {/* Author & Client Monogram */}
              <div className="flex items-end justify-between pt-6 border-t border-white/20 mt-6">
                <div>
                  <div className="text-sm sm:text-base font-semibold text-white">Alex Boulder</div>
                  <div className="text-xs text-white/80 mt-0.5">Director of Operations &bull; Global Enterprise</div>
                </div>

                {/* Arcaise-style enterprise brandmark */}
                <div className="font-serif text-lg tracking-wider font-bold text-white/90">
                  Arca&iuml;se
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              ROW 3: Card 5 (Team Collaboration Scene) + Card 6 (Whole Business)
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Card 5: Collaboration Photo Card (5 Cols) */}
            <div className="lg:col-span-5 rounded-[28px] overflow-hidden min-h-[260px] sm:min-h-[300px] relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Enterprise Team Collaboration"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white text-xs font-mono font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Collaboration &bull; SAP S/4HANA</span>
              </div>
            </div>

            {/* Card 6: Built for the whole business, not just projects (7 Cols) */}
            <div className="lg:col-span-7 bg-[#F4F4F6] hover:bg-[#EFEFEA] transition-colors rounded-[28px] p-8 sm:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] group cursor-pointer">
              <div>
                <h3 className="text-2xl sm:text-[26px] font-semibold text-zinc-900 tracking-tight leading-snug">
                  Built for the whole business, not just projects
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed max-w-xl">
                  Finance, HR, &amp; marketing on the same platform, so projects connect to the entire business.
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 shadow-2xs group-hover:scale-110 transition-all">
                  <Plus className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

