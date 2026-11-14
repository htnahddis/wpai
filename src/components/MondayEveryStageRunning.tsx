"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Send,
  Paperclip,
  AtSign,
  Mic,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

interface StageConfig {
  id: string;
  label: string;
  cardType: "planned" | "dependencies" | "risks" | "resources" | "intake" | "status" | "actions" | "delivered";
}

const STAGES: StageConfig[] = [
  { id: "intake", label: "Intake prioritized", cardType: "intake" },
  { id: "planned", label: "Project planned", cardType: "planned" },
  { id: "resources", label: "Resource assigned", cardType: "resources" },
  { id: "dependencies", label: "Dependencies mapped", cardType: "dependencies" },
  { id: "risks", label: "Risks flagged", cardType: "risks" },
  { id: "status", label: "Status updated", cardType: "status" },
  { id: "actions", label: "Action items captured", cardType: "actions" },
  { id: "delivered", label: "Report delivered", cardType: "delivered" },
];

export default function MondayEveryStageRunning({ onOpenModal }: { onOpenModal: () => void }) {
  // null = "Before hover" state (All 8 stages in muted warm beige, cards hidden)
  // number = "After hover" state (Hovered stage in bold black, floating cards rendered ON TOP with z-30/z-40)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeStage = hoveredIndex !== null ? STAGES[hoveredIndex] : null;

  return (
    <section className="w-full bg-[#FAF7F2] py-20 sm:py-28 overflow-hidden border-y border-[#EBE6DC] select-none">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px] lg:min-h-[640px]">
          {/* =========================================================================
              LEFT COLUMN: Big Editorial Typography & Clear Messaging
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.06] tracking-tight text-[#1C1D21]">
              Every stage of project delivery, always running.
            </h2>

            <p className="text-base sm:text-lg text-[#555660] font-normal leading-relaxed max-w-lg">
              One platform where project teams and agents always have the full picture, and every project is always moving forward.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black hover:bg-zinc-800 text-white text-sm font-medium rounded-full transition-all shadow-sm group"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Layered Stage Switcher (Cards strictly ON TOP of text)
              ========================================================================= */}
          <div
            className="lg:col-span-7 relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Layer 1 (z-10): Vertical Stack of 8 Stages (Background text) */}
            <div className="flex flex-col items-center justify-center space-y-3.5 sm:space-y-4 py-8 z-10 w-full relative">
              {STAGES.map((stage, idx) => {
                const isHovered = hoveredIndex === idx;

                return (
                  <div
                    key={stage.id}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
                    className={`font-sans tracking-tight transition-all duration-200 cursor-pointer text-center py-1 px-5 rounded-xl ${
                      isHovered
                        ? "text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1C1D21] scale-105 z-10 drop-shadow-2xs"
                        : "text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#E2D8CC] hover:text-[#B0A699]"
                    }`}
                  >
                    {stage.label}
                  </div>
                );
              })}
            </div>

            {/* Layer 2 (z-30): Floating Contextual Cards (Rendered ABOVE the text) */}
            <div
              className={`absolute inset-0 z-30 transition-all duration-300 pointer-events-none ${
                activeStage !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full h-full">
                {/* =====================================================================
                    SCENARIO A: "Dependencies mapped" (Image 1 Exact Reference)
                    ===================================================================== */}
                {activeStage?.cardType === "dependencies" && (
                  <>
                    {/* Top-Left Card: Blue Gantt Card (Rendered ON TOP of text) */}
                    <div className="absolute top-3 sm:top-6 left-0 sm:left-4 lg:-left-2 z-40 transform -rotate-2 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
                      <div className="w-[240px] sm:w-[270px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/90 bg-white">
                        {/* Blue Gantt Header */}
                        <div className="bg-[#0073EA] px-4 py-3 flex items-center justify-between text-white">
                          <span className="font-bold text-sm tracking-tight">Gantt</span>
                          <div className="flex items-center gap-1.5">
                            <span className="bg-white/20 text-[10px] px-2.5 py-0.5 rounded-full font-medium backdrop-blur-xs">
                              Planning
                            </span>
                            <span className="bg-white/20 text-[10px] px-2.5 py-0.5 rounded-full font-medium backdrop-blur-xs">
                              PMO
                            </span>
                          </div>
                        </div>

                        {/* White Body with Task & Timeline Bars */}
                        <div className="p-4 space-y-3 bg-white">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 text-zinc-900 font-bold text-[9px] flex items-center justify-center shadow-xs">
                              NS
                            </div>
                            <span className="text-xs font-bold text-zinc-800">New store opening</span>
                          </div>

                          {/* Gantt Timeline Simulation */}
                          <div className="relative py-2 border-t border-zinc-100 space-y-2.5">
                            {/* Row 1 */}
                            <div className="flex items-center">
                              <div className="w-6 border-b border-dashed border-zinc-200"></div>
                              <div className="h-2 w-16 bg-[#0073EA] rounded-full shadow-2xs"></div>
                            </div>
                            {/* Connector line */}
                            <div className="ml-18 w-0.5 h-2 bg-blue-300"></div>
                            {/* Row 2 */}
                            <div className="flex items-center ml-16">
                              <div className="h-2 w-20 bg-[#0073EA] rounded-full shadow-2xs"></div>
                            </div>
                            {/* Connector line */}
                            <div className="ml-32 w-0.5 h-2 bg-blue-300"></div>
                            {/* Row 3 */}
                            <div className="flex items-center ml-28">
                              <div className="h-2 w-16 bg-[#00C875] rounded-full shadow-2xs"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Top-Right Card: White Avatar Stack Pill (Rendered ON TOP of text) */}
                    <div className="absolute top-6 sm:top-10 right-2 sm:right-6 lg:-right-2 z-40 transform rotate-4 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
                      <div className="bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-zinc-200/90 flex items-center gap-2">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                            JD
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                            MR
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                            SK
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 text-zinc-900 text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                            AL
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-500 to-pink-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                            DK
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom-Right Card: Scheduling Conflicts (1/3) (Rendered ON TOP of text) */}
                    <div className="absolute bottom-2 sm:bottom-6 right-1 sm:right-4 lg:-right-4 z-40 transform rotate-2 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
                      <div className="w-[270px] sm:w-[300px] bg-white rounded-2xl p-4 shadow-2xl border border-zinc-200/90">
                        {/* Header with Carousel Arrows */}
                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-100">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                            <span className="text-xs font-bold text-zinc-900">Scheduling conflicts (1/3)</span>
                          </div>
                          <div className="flex items-center gap-1 text-zinc-400">
                            <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-zinc-700 transition-colors" />
                            <ChevronRight className="w-4 h-4 cursor-pointer hover:text-zinc-700 transition-colors" />
                          </div>
                        </div>

                        {/* Workflow Flowchart Canvas */}
                        <div className="bg-[#EEF2F9] p-3 rounded-xl space-y-2.5 relative">
                          {/* Task 1 Box */}
                          <div className="bg-white p-2.5 rounded-lg shadow-2xs border border-zinc-200/80 flex items-center justify-between text-[11px]">
                            <div>
                              <div className="font-bold text-zinc-800">1st task/milestone</div>
                              <div className="text-[9px] text-zinc-400 font-mono">21 Mar - 14 Apr</div>
                            </div>
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                          </div>

                          {/* Connector Label */}
                          <div className="flex items-center justify-center gap-1.5 text-[9px] text-zinc-500 font-medium">
                            <div className="w-6 border-b border-zinc-300"></div>
                            <span>Creating new logic</span>
                            <div className="w-6 border-b border-zinc-300"></div>
                          </div>

                          {/* Task 2 Box */}
                          <div className="bg-white p-2.5 rounded-lg shadow-2xs border border-zinc-200/80 flex items-center justify-between text-[11px]">
                            <div>
                              <div className="font-bold text-zinc-800">QA research</div>
                              <div className="text-[9px] text-zinc-400 font-mono">12 Apr - 28 Apr</div>
                            </div>
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                          </div>

                          {/* Conflict Alert Banner */}
                          <div className="bg-[#FFE8E8] border border-rose-200 text-rose-700 rounded-lg p-2 text-center font-bold text-[10px] tracking-wide flex items-center justify-center gap-1.5 shadow-2xs">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                            <span>1-day overlap</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* =====================================================================
                    SCENARIO B: "Project planned" (Turn 10 Reference Image)
                    ===================================================================== */}
                {activeStage?.cardType === "planned" && (
                  <>
                    {/* Top-Left Card: Purple Q3 Plan Pill (Rendered ON TOP of text) */}
                    <div className="absolute top-4 sm:top-8 left-1 sm:left-4 lg:-left-2 z-40 transform -rotate-3 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
                      <div className="bg-[#6C5CE7] text-white p-4 rounded-2xl shadow-2xl border border-white/20 max-w-[290px]">
                        <div className="text-xs sm:text-[13px] font-semibold leading-snug">
                          Q3 plan is ready. 12 projects created
                        </div>
                        <div className="flex items-center -space-x-1.5 mt-3 pt-2.5 border-t border-white/20">
                          <div className="w-6 h-6 rounded-full bg-amber-400 text-zinc-900 font-bold text-[9px] flex items-center justify-center border-2 border-white">
                            JD
                          </div>
                          <div className="w-6 h-6 rounded-full bg-pink-400 text-white font-bold text-[9px] flex items-center justify-center border-2 border-white">
                            SK
                          </div>
                          <div className="w-6 h-6 rounded-full bg-blue-400 text-white font-bold text-[9px] flex items-center justify-center border-2 border-white">
                            AL
                          </div>
                          <div className="w-6 h-6 rounded-full bg-emerald-400 text-zinc-900 font-bold text-[9px] flex items-center justify-center border-2 border-white">
                            MK
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Top-Right Card: Jack Intake & Prioritization Telemetry */}
                    <div className="absolute top-2 sm:top-6 right-1 sm:right-4 lg:-right-2 z-40 transform rotate-2 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200/90 w-[250px] sm:w-[270px]">
                        <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-100">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-[9px]">
                            <Sparkles className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">Jack</div>
                            <div className="text-[10px] text-zinc-400">Intake &amp; prioritization agent</div>
                          </div>
                        </div>

                        <div className="space-y-2.5 py-3 text-[10px] font-mono">
                          <div>
                            <div className="flex justify-between text-zinc-600 mb-1">
                              <span>Strategy fit</span>
                              <span className="text-purple-600 font-bold">9/10</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                              <div className="h-full bg-purple-600 rounded-full w-[90%]"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-zinc-600 mb-1">
                              <span>Feasibility</span>
                              <span className="text-blue-600 font-bold">7/10</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                              <div className="h-full bg-blue-500 rounded-full w-[70%]"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-zinc-600 mb-1">
                              <span>Capacity allocation</span>
                              <span className="text-amber-600 font-bold">6.8/10</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                              <div className="h-full bg-amber-500 rounded-full w-[68%]"></div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-zinc-100 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-zinc-900 text-white text-[8px] font-bold flex items-center justify-center">
                            SP
                          </div>
                          <div className="text-[9px] text-zinc-500 leading-tight">
                            <span className="font-semibold text-zinc-800">Routed to Sarah (PMO Director)</span>
                            <div className="text-zinc-400">Approval sent: 2 hrs ago</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom-Right Card: Prompt to Project Royal Blue Dialog */}
                    <div className="absolute bottom-2 sm:bottom-6 right-1 sm:right-4 lg:-right-4 z-40 transform -rotate-1 hover:rotate-0 transition-transform duration-300 pointer-events-auto">
                      <div className="bg-[#5034FF] text-white p-4.5 rounded-2xl shadow-2xl border border-white/20 w-[280px] sm:w-[330px]">
                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/20 text-xs font-semibold">
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>Prompt to project</span>
                          </span>
                          <span className="text-white/60 hover:text-white cursor-pointer text-xs">&times;</span>
                        </div>
                        <div className="text-xs text-white/95 leading-relaxed bg-white/10 p-3 rounded-xl border border-white/15">
                          Create a project to manage a product launch: focusing on timeline, marketing activities, and stakeholder coordination.
                        </div>
                        <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/20">
                          <div className="flex items-center gap-2 text-white/70">
                            <Paperclip className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                            <AtSign className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                            <Mic className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                          </div>
                          <div className="w-6 h-6 rounded-full bg-white text-[#5034FF] flex items-center justify-center shadow-xs cursor-pointer hover:scale-105 transition-transform">
                            <Send className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* =====================================================================
                    SCENARIOS C - H: Remaining Stages (Tailored contextual cards)
                    ===================================================================== */}
                {activeStage?.cardType === "intake" && (
                  <>
                    <div className="absolute top-6 left-2 sm:left-6 z-40 transform -rotate-2 pointer-events-auto">
                      <div className="bg-[#E27600] text-white p-4 rounded-2xl shadow-2xl max-w-[270px]">
                        <div className="text-xs font-bold">18 requirements synthesized</div>
                        <div className="text-[10px] text-white/80 mt-1">4.2s extraction from workshop audio</div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-2 sm:right-6 z-40 transform rotate-1 pointer-events-auto">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200/90 w-[280px]">
                        <div className="text-xs font-bold text-zinc-900">Discovery Baseline Confirmed</div>
                        <div className="text-[11px] text-zinc-500 mt-1">98% Fit-to-Standard rating across finance &amp; SCM</div>
                      </div>
                    </div>
                  </>
                )}

                {activeStage?.cardType === "resources" && (
                  <>
                    <div className="absolute top-6 left-2 sm:left-6 z-40 transform -rotate-2 pointer-events-auto">
                      <div className="bg-[#00875A] text-white p-4 rounded-2xl shadow-2xl max-w-[270px]">
                        <div className="text-xs font-bold">16 cross-functional leads assigned</div>
                        <div className="text-[10px] text-white/80 mt-1">Zero capacity conflicts across London &amp; EMEA</div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-2 sm:right-6 z-40 transform rotate-2 pointer-events-auto">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200/90 w-[270px]">
                        <div className="text-xs font-bold text-zinc-900">Workload Heatmap: 91%</div>
                        <div className="text-[11px] text-zinc-500 mt-1">Resource allocation locked for 8-month delivery sprint</div>
                      </div>
                    </div>
                  </>
                )}

                {activeStage?.cardType === "risks" && (
                  <>
                    <div className="absolute top-6 left-2 sm:left-6 z-40 transform -rotate-3 pointer-events-auto">
                      <div className="bg-[#DE350B] text-white p-4 rounded-2xl shadow-2xl max-w-[270px]">
                        <div className="text-xs font-bold">Scope variance preempted</div>
                        <div className="text-[10px] text-white/80 mt-1">+2 days buffer auto-injected into critical path</div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-2 sm:right-6 z-40 transform rotate-1 pointer-events-auto">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200/90 w-[280px]">
                        <div className="text-xs font-bold text-zinc-900">Mitigation Playbook Active</div>
                        <div className="text-[11px] text-zinc-500 mt-1">Zero unmonitored scope changes across active sprints</div>
                      </div>
                    </div>
                  </>
                )}

                {activeStage?.cardType === "status" && (
                  <>
                    <div className="absolute top-6 left-2 sm:left-6 z-40 transform -rotate-2 pointer-events-auto">
                      <div className="bg-[#0070F2] text-white p-4 rounded-2xl shadow-2xl max-w-[270px]">
                        <div className="text-xs font-bold">98.4% touchless telemetry sync</div>
                        <div className="text-[10px] text-white/80 mt-1">S/4HANA CDS views polling continuously</div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-2 sm:right-6 z-40 transform rotate-2 pointer-events-auto">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200/90 w-[270px]">
                        <div className="text-xs font-bold text-zinc-900">Continuous Rolling Forecast</div>
                        <div className="text-[11px] text-zinc-500 mt-1">SAC 52-week dashboard refreshed in real time</div>
                      </div>
                    </div>
                  </>
                )}

                {activeStage?.cardType === "actions" && (
                  <>
                    <div className="absolute top-6 left-2 sm:left-6 z-40 transform -rotate-2 pointer-events-auto">
                      <div className="bg-[#008DA6] text-white p-4 rounded-2xl shadow-2xl max-w-[270px]">
                        <div className="text-xs font-bold">7 action items transcribed</div>
                        <div className="text-[10px] text-white/80 mt-1">Auto-assigned to stream leads with deadlines</div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-2 sm:right-6 z-40 transform rotate-1 pointer-events-auto">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200/90 w-[270px]">
                        <div className="text-xs font-bold text-zinc-900">Governance SLA Tracked</div>
                        <div className="text-[11px] text-zinc-500 mt-1">Actions linked directly to SAP WBS elements</div>
                      </div>
                    </div>
                  </>
                )}

                {activeStage?.cardType === "delivered" && (
                  <>
                    <div className="absolute top-6 left-2 sm:left-6 z-40 transform -rotate-2 pointer-events-auto">
                      <div className="bg-[#7B1FA2] text-white p-4 rounded-2xl shadow-2xl max-w-[270px]">
                        <div className="text-xs font-bold">Board-ready dossier compiled</div>
                        <div className="text-[10px] text-white/80 mt-1">120-page Solution Design Document verified</div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-2 sm:right-6 z-40 transform rotate-2 pointer-events-auto">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-zinc-200/90 w-[270px]">
                        <div className="text-xs font-bold text-zinc-900">Formal Sign-Off Confirmed</div>
                        <div className="text-[11px] text-zinc-500 mt-1">CIO &amp; Steering Committee sign-off completed</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
