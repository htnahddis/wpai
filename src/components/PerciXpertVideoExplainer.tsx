"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, Check, FileText, ArrowRight, Layers, Database, Shield, Cpu, Sparkles } from "lucide-react";

interface Scene {
  id: number;
  timeRange: [number, number];
  title: string;
  overlay: string;
  subOverlay?: string;
}

const SCENES: Scene[] = [
  {
    id: 1,
    timeRange: [0, 7],
    title: "1. The Challenge",
    overlay: "SAP projects often start with scattered notes and spreadsheets.",
    subOverlay: "Undocumented assumptions lead to scope creep and surprise costs.",
  },
  {
    id: 2,
    timeRange: [7, 15],
    title: "2. Capture",
    overlay: "Capture every requirement from day one.",
    subOverlay: "Workshops turn into tracked, verified scope items automatically.",
  },
  {
    id: 3,
    timeRange: [15, 25],
    title: "3. Standard Fit",
    overlay: "Match needs against standard SAP features.",
    subOverlay: "Identify real gaps early to avoid expensive custom code.",
  },
  {
    id: 4,
    timeRange: [25, 37],
    title: "4. Data & APIs",
    overlay: "Move legacy data into SAP with zero manual errors.",
    subOverlay: "Automated data formatting and pre-tested system connections.",
  },
  {
    id: 5,
    timeRange: [37, 47],
    title: "5. Auto-Blueprint",
    overlay: "Generate audit-ready system blueprints in seconds.",
    subOverlay: "Accurate documentation that reflects the live system, not outdated notes.",
  },
  {
    id: 6,
    timeRange: [47, 55],
    title: "6. Two Deployments",
    overlay: "New SAP implementations or health checks on existing systems.",
    subOverlay: "Fast-track new rollouts or identify hidden risks in your current setup.",
  },
  {
    id: 7,
    timeRange: [55, 60],
    title: "7. Outcome",
    overlay: "Delivered on time. Zero surprise rework.",
    subOverlay: "PerciXpert • System-verified precision for enterprise SAP delivery.",
  },
];

export default function PerciXpertVideoExplainer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showCaptions, setShowCaptions] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const duration = 60; // 60 seconds
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Active scene
  const activeScene = SCENES.find(
    (s) => currentTime >= s.timeRange[0] && currentTime < s.timeRange[1]
  ) || SCENES[SCENES.length - 1];

  useEffect(() => {
    if (!isPlaying) {
      lastTimeRef.current = null;
      return;
    }

    const updatePlay = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setCurrentTime((prev) => {
        const next = prev + delta * playbackSpeed;
        if (next >= duration) {
          setIsPlaying(false);
          return 0;
        }
        return next;
      });

      animationFrameRef.current = requestAnimationFrame(updatePlay);
    };

    animationFrameRef.current = requestAnimationFrame(updatePlay);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, playbackSpeed, duration]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const jumpToScene = (scene: Scene) => {
    setCurrentTime(scene.timeRange[0]);
    setIsPlaying(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#E8E8E8] shadow-card overflow-hidden">
      {/* Video Header / Browser-Style Frame */}
      <div className="bg-[#F8F8F8] border-b border-[#E8E8E8] px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E8E8] border border-[#D2D4D7]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E8E8] border border-[#D2D4D7]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E8E8] border border-[#D2D4D7]"></span>
          </div>
          <span className="text-[#8A8D93] mx-1">|</span>
          <span className="font-mono text-[11px] text-[#64676D]">
            percixpert://lifecycle-engine.demo/v1.4
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-[#E8E8E8] text-[11px] font-medium text-[#292A2E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
            Interactive Product Film (01:00)
          </span>
        </div>
      </div>

      {/* Main 16:9 Screen Canvas */}
      <div className="relative aspect-video bg-[#FFFFFF] overflow-hidden select-none flex flex-col justify-between p-6 sm:p-10">
        {/* Subtle grid background to emulate Auctor & Linear light mode canvas */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#E8E8E8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top Watermark & Scene Indicator */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-[#292A2E]">percipere.</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-[#0D5CE5] rounded border border-blue-100">
              PerciXpert
            </span>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8D93]">
              Active Scene
            </span>
            <div className="text-xs font-semibold text-[#292A2E]">
              {activeScene.title}
            </div>
          </div>
        </div>

        {/* Dynamic Scene Visual Presentation */}
        <div className="relative z-10 my-auto w-full max-w-4xl mx-auto">
          {/* SCENE 1: THE CHALLENGE (0-7s) */}
          {activeScene.id === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
              <div className="bg-[#F8F8F8] border border-[#E8E8E8] p-4 rounded-xl shadow-subtle transform -rotate-1">
                <div className="text-[10px] uppercase font-mono text-[#8A8D93] mb-1">Spreadsheet_v14.xlsx</div>
                <div className="text-xs font-semibold text-[#292A2E]">Undocumented Legacy Rules</div>
                <div className="mt-2 space-y-1">
                  <div className="h-1.5 w-full bg-[#E8E8E8] rounded"></div>
                  <div className="h-1.5 w-3/4 bg-[#E8E8E8] rounded"></div>
                  <span className="text-[10px] text-red-500 font-medium">⚠️ Manual process risks</span>
                </div>
              </div>

              <div className="bg-[#F8F8F8] border border-[#E8E8E8] p-4 rounded-xl shadow-subtle transform translate-y-2">
                <div className="text-[10px] uppercase font-mono text-[#8A8D93] mb-1">Workshop_Notes.docx</div>
                <div className="text-xs font-semibold text-[#292A2E]">Scattered Meeting Notes</div>
                <div className="mt-2 space-y-1">
                  <div className="h-1.5 w-4/5 bg-[#E8E8E8] rounded"></div>
                  <div className="h-1.5 w-2/3 bg-[#E8E8E8] rounded"></div>
                  <span className="text-[10px] text-amber-600 font-medium">⚠️ Missed requirements</span>
                </div>
              </div>

              <div className="bg-[#F8F8F8] border border-[#E8E8E8] p-4 rounded-xl shadow-subtle transform rotate-1">
                <div className="text-[10px] uppercase font-mono text-[#8A8D93] mb-1">Legacy ERP Export</div>
                <div className="text-xs font-semibold text-[#292A2E]">Inconsistent Data Formats</div>
                <div className="mt-2 space-y-1">
                  <div className="h-1.5 w-full bg-[#E8E8E8] rounded"></div>
                  <div className="h-1.5 w-1/2 bg-[#E8E8E8] rounded"></div>
                  <span className="text-[10px] text-red-500 font-medium">⚠️ Manual data cleanup</span>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 2: REQUIREMENTS CAPTURE (7-15s) */}
          {activeScene.id === 2 && (
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-5 shadow-card animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F0F0] mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                  <span className="text-xs font-semibold text-[#292A2E]">
                    Digital Scope Tracking • Every Requirement Logged
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded">
                  Traceability: 100%
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8]">
                  <div className="flex items-center justify-between text-[11px] font-medium text-[#64676D] mb-1">
                    <span>FINANCE REQUIREMENT</span>
                    <span className="text-[#10B981]">Linked to SAP Standard</span>
                  </div>
                  <p className="text-xs text-[#292A2E] font-medium">
                    Automate 3-way invoice matching for external suppliers.
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#8A8D93]">
                    <span>Source: Workshop transcript</span>
                    <span>•</span>
                    <span className="text-[#0D5CE5]">Audit verified</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8]">
                  <div className="flex items-center justify-between text-[11px] font-medium text-[#64676D] mb-1">
                    <span>SUPPLY CHAIN REQUIREMENT</span>
                    <span className="text-[#10B981]">Linked to SAP Standard</span>
                  </div>
                  <p className="text-xs text-[#292A2E] font-medium">
                    Automatic alerts for batch expiry and quarantine routing.
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#8A8D93]">
                    <span>Source: Operations session</span>
                    <span>•</span>
                    <span className="text-[#0D5CE5]">Audit verified</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 3: STANDARD FIT CHECK (15-25s) */}
          {activeScene.id === 3 && (
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-5 shadow-card animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F0F0] mb-3">
                <span className="text-xs font-semibold text-[#292A2E]">
                  Standard SAP Feature Matcher • Avoid Custom Code
                </span>
                <span className="text-[11px] text-[#64676D]">Instant Evaluation</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8] text-xs">
                  <span className="font-mono text-[#292A2E]">Customer Returns & Refunds</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Standard Fit (Zero Custom Code)
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8] text-xs">
                  <span className="font-mono text-[#292A2E]">Subcontractor Serial Tracking</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                    Configurable Setting
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#F8F8F8] rounded-lg border border-[#E8E8E8] text-xs">
                  <span className="font-mono text-[#292A2E]">Custom Pricing Formula</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-[#0D5CE5] border border-blue-200">
                    Extension Blueprint Generated
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 4: DATA MIGRATION & INTEGRATION (25-37s) */}
          {activeScene.id === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
              <div className="bg-white border border-[#E8E8E8] p-4 rounded-xl shadow-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#292A2E]">Legacy Data → SAP Format</span>
                  <span className="text-[10px] text-[#10B981] font-mono">Automated</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="p-1.5 bg-[#F8F8F8] rounded flex justify-between">
                    <span className="text-[#64676D]">Old Item Codes</span>
                    <span className="text-[#0D5CE5]">→ SAP Product Master</span>
                  </div>
                  <div className="p-1.5 bg-[#F8F8F8] rounded flex justify-between">
                    <span className="text-[#64676D]">Old Units of Measure</span>
                    <span className="text-[#0D5CE5]">→ SAP Standard Units</span>
                  </div>
                  <div className="p-1.5 bg-[#F8F8F8] rounded flex justify-between">
                    <span className="text-[#64676D]">Customer & Supplier IDs</span>
                    <span className="text-[#0D5CE5]">→ SAP Business Partner</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8E8] p-4 rounded-xl shadow-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#292A2E]">API Connections Pre-Tested</span>
                  <span className="text-[10px] text-[#0D5CE5] font-mono">Simulated</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="p-1.5 bg-[#F8F8F8] rounded flex justify-between">
                    <span className="text-[#292A2E]">Customer & Partner Sync</span>
                    <span className="text-[#10B981]">Ready</span>
                  </div>
                  <div className="p-1.5 bg-[#F8F8F8] rounded flex justify-between">
                    <span className="text-[#292A2E]">Purchase Orders</span>
                    <span className="text-[#10B981]">Ready</span>
                  </div>
                  <div className="p-1.5 bg-[#F8F8F8] rounded flex justify-between">
                    <span className="text-[#292A2E]">Sales Orders</span>
                    <span className="text-[#10B981]">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 5: AUTO-BLUEPRINT (37-47s) */}
          {activeScene.id === 5 && (
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-5 shadow-card max-w-2xl mx-auto animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F0F0] mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0D5CE5]" />
                  <span className="text-xs font-semibold text-[#292A2E]">
                    System Blueprint Auto-Generated
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#10B981] bg-emerald-50 px-2 py-0.5 rounded">
                  Complete & Auditable
                </span>
              </div>
              <div className="space-y-2 text-xs text-[#64676D]">
                <div className="p-2.5 bg-[#F8F8F8] rounded flex items-center justify-between">
                  <span>1. Full Configuration Settings & Field Rules</span>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                </div>
                <div className="p-2.5 bg-[#F8F8F8] rounded flex items-center justify-between">
                  <span>2. System Integrations & Data Mappings</span>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                </div>
                <div className="p-2.5 bg-[#F8F8F8] rounded flex items-center justify-between">
                  <span>3. Knowledge Handover (Compressed from months to days)</span>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                </div>
              </div>
            </div>
          )}

          {/* SCENE 6: TWO WAYS TO DEPLOY (47-55s) */}
          {activeScene.id === 6 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-300">
              <div className="bg-white border-2 border-[#0D5CE5] p-4 rounded-xl shadow-card">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50 px-2 py-0.5 rounded">
                  Option 1
                </span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-2">
                  New Implementations
                </h4>
                <p className="text-xs text-[#64676D] mt-1">
                  From initial workshop to go-live blueprint — with automated scoping and data migration.
                </p>
                <div className="mt-3 text-[11px] font-mono text-[#10B981]">
                  ✓ Scoping in weeks, not months
                </div>
              </div>

              <div className="bg-white border-2 border-[#292A2E] p-4 rounded-xl shadow-card">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#292A2E] bg-[#F4F5F6] px-2 py-0.5 rounded">
                  Option 2
                </span>
                <h4 className="text-sm font-semibold text-[#292A2E] mt-2">
                  System Health Check
                </h4>
                <p className="text-xs text-[#64676D] mt-1">
                  For existing systems or project handovers — audits live configurations to surface gaps and undocumented code.
                </p>
                <div className="mt-3 text-[11px] font-mono text-[#0D5CE5]">
                  ✓ Eliminates handover risk
                </div>
              </div>
            </div>
          )}

          {/* SCENE 7: BRAND END FRAME (55-60s) */}
          {activeScene.id === 7 && (
            <div className="text-center py-6 animate-in zoom-in-95 duration-400">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-serif text-3xl font-bold tracking-tight text-[#292A2E]">
                  percipere.
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E85D04]"></span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#292A2E]">
                Start with facts. Deliver with confidence.
              </h3>
              <p className="text-sm text-[#64676D] mt-2 max-w-md mx-auto">
                AI-Driven Precision for Enterprise SAP S/4HANA Implementations.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D5CE5] text-white text-xs font-semibold rounded-lg shadow-subtle">
                Discover PerciXpert Delivery
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </div>

        {/* Captions / Editorial Text Overlay (Bottom of Screen) */}
        {showCaptions && (
          <div className="relative z-10 bg-white/95 backdrop-blur-sm border border-[#E8E8E8] rounded-xl p-3 max-w-xl mx-auto text-center shadow-card transition-all">
            <p className="text-xs sm:text-sm font-semibold text-[#292A2E]">
              {activeScene.overlay}
            </p>
            {activeScene.subOverlay && (
              <p className="text-[11px] sm:text-xs text-[#64676D] mt-0.5">
                {activeScene.subOverlay}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Video Playback & Timeline Controls */}
      <div className="bg-[#F8F8F8] border-t border-[#E8E8E8] p-3 sm:p-4">
        {/* Scrubber Progress Bar */}
        <div className="relative w-full h-2 bg-[#E8E8E8] rounded-full overflow-hidden cursor-pointer mb-3"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const pct = clickX / rect.width;
            setCurrentTime(Math.min(duration, Math.max(0, pct * duration)));
          }}>
          <div
            className="h-full bg-[#0D5CE5] transition-all"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        {/* Controls row */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center text-[#292A2E] hover:text-[#0D5CE5] hover:border-blue-200 transition-colors shadow-subtle"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <button
              onClick={() => {
                setCurrentTime(0);
                setIsPlaying(true);
              }}
              className="w-8 h-8 rounded-lg bg-white border border-[#E8E8E8] flex items-center justify-center text-[#64676D] hover:text-[#292A2E] transition-colors"
              aria-label="Replay"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <span className="font-mono text-xs text-[#64676D] ml-1">
              {formatTime(currentTime)} / 01:00
            </span>
          </div>

          {/* Quick Scene Selectors */}
          <div className="hidden lg:flex items-center gap-1">
            {SCENES.map((scene) => (
              <button
                key={scene.id}
                onClick={() => jumpToScene(scene)}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${activeScene.id === scene.id
                    ? "bg-[#0D5CE5] text-white"
                    : "bg-white border border-[#E8E8E8] text-[#64676D] hover:text-[#292A2E]"
                  }`}
              >
                {scene.title.split(". ")[1]}
              </button>
            ))}
          </div>

          {/* Options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCaptions(!showCaptions)}
              className={`px-2 py-1 rounded border text-[11px] font-medium transition-colors ${showCaptions
                  ? "bg-blue-50 border-blue-200 text-[#0D5CE5]"
                  : "bg-white border-[#E8E8E8] text-[#8A8D93]"
                }`}
            >
              CC {showCaptions ? "ON" : "OFF"}
            </button>

            <button
              onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.5 : 1)}
              className="px-2 py-1 rounded bg-white border border-[#E8E8E8] text-[11px] font-mono text-[#64676D] hover:text-[#292A2E]"
            >
              {playbackSpeed}x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
