"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface MondayWorkInContextSectionProps {
  onOpenModal: () => void;
}

export default function MondayWorkInContextSection({ onOpenModal }: MondayWorkInContextSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const baseAssetPath = "/The%20AI%20Workspace%20for%20People%20%26%20Agents%20_%20monday.com_files/";

  const cards = [
    {
      id: "integrations",
      title: "Integrations",
      src: `${baseAssetPath}6a2fc220d9056a8af1484a1e_home-test-integrations-image.png`,
      className: "top-[3%] left-[3%] sm:left-[6%] w-[180px] sm:w-[220px] lg:w-[260px] z-20",
      delay: "0s",
      svgTarget: { x: 220, y: 130 },
      color: "#6366F1",
    },
    {
      id: "dashboards",
      title: "Dashboards",
      src: `${baseAssetPath}6a2fca759de8309709de287e_home-test-dashboards-image.png`,
      className: "top-[3%] right-[3%] sm:right-[6%] w-[200px] sm:w-[240px] lg:w-[280px] z-20",
      delay: "1s",
      svgTarget: { x: 980, y: 130 },
      color: "#4F46E5",
    },
    {
      id: "docs",
      title: "Docs",
      src: `${baseAssetPath}6a2fca0942d710cf0199c562_home-test-docs-image.png`,
      className: "top-[40%] right-[0%] sm:right-[0%] lg:right-[0%] w-[170px] sm:w-[200px] lg:w-[240px] z-10 opacity-95",
      delay: "2s",
      svgTarget: { x: 1050, y: 380 },
      color: "#059669",
    },
    {
      id: "files",
      title: "Files",
      src: `${baseAssetPath}6a2fc21f9689ac7d6794e327_home-test-files-image.svg`,
      className: "bottom-[23%] left-[6%] sm:left-[10%] lg:left-[12%] w-[150px] sm:w-[180px] lg:w-[210px] z-20",
      delay: "1.5s",
      svgTarget: { x: 260, y: 470 },
      color: "#0284C7",
    },
    {
      id: "conversations",
      title: "Conversations",
      src: `${baseAssetPath}6a2fc2200183fdb4f4d36d37_home-test-conversation-image.png`,
      className: "bottom-[3%] left-[2%] sm:left-[4%] w-[160px] sm:w-[190px] lg:w-[220px] z-30",
      delay: "2.5s",
      svgTarget: { x: 160, y: 580 },
      color: "#9333EA",
    },
    {
      id: "data",
      title: "Data records",
      src: `${baseAssetPath}6a2fc2216c38dc1440e74255_home-test-data-image.png`,
      className: "bottom-[23%] right-[6%] sm:right-[10%] lg:right-[12%] w-[160px] sm:w-[190px] lg:w-[220px] z-10 opacity-95",
      delay: "0.5s",
      svgTarget: { x: 920, y: 470 },
      color: "#D97706",
    },
    {
      id: "updates",
      title: "Updates",
      src: `${baseAssetPath}6a2fc220527b67e08cd99377_home-test-updates-image.png`,
      className: "bottom-[3%] right-[2%] sm:right-[4%] w-[170px] sm:w-[200px] lg:w-[230px] z-30",
      delay: "3s",
      svgTarget: { x: 1000, y: 580 },
      color: "#DB2777",
    },
  ];

  const coreCenter = { x: 600, y: 350 };

  return (
    <section className="relative w-full overflow-hidden text-[#191923] pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-[#F1F5F9]">
      {/* 1. Header: Centered Layout (As Requested) */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-8 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium tracking-tight text-[#191923] leading-[1.08] mb-4">
          Work in context
        </h2>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-6">
          <strong className="text-[#191923] font-semibold">AI agents are only as good as their context.</strong> Agents have the context they need before they act — ensuring enterprise workflows are carried out confidently and accurately.
        </p>

        <button
          type="button"
          onClick={onOpenModal}
          className="inline-flex items-center gap-2.5 text-sm sm:text-base px-8 py-3.5 bg-[#191923] hover:bg-[#140F4D] text-white rounded-full font-medium transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Scattered & Connected Constellation Stage */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 min-h-[600px] sm:min-h-[660px] lg:min-h-[700px] flex items-center justify-center">
        {/* SVG Neural Connection Web */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="beamGradIdle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Delicate Outer Orbit Guides */}
          <circle
            cx={coreCenter.x}
            cy={coreCenter.y}
            r="160"
            fill="none"
            stroke="rgba(99, 102, 241, 0.08)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx={coreCenter.x}
            cy={coreCenter.y}
            r="260"
            fill="none"
            stroke="rgba(99, 102, 241, 0.05)"
            strokeWidth="1"
            strokeDasharray="6 6"
          />

          {/* Smooth Curved Beams Connecting Core to Each Card */}
          {cards.map((card) => {
            const isHovered = hoveredCard === card.id;

            const dx = card.svgTarget.x - coreCenter.x;
            const dy = card.svgTarget.y - coreCenter.y;
            const controlX = coreCenter.x + dx * 0.45;
            const controlY = coreCenter.y + dy * 0.45 + (dx > 0 ? -25 : 25);
            const pathData = `M ${coreCenter.x} ${coreCenter.y} Q ${controlX} ${controlY} ${card.svgTarget.x} ${card.svgTarget.y}`;

            return (
              <g key={card.id}>
                {/* Connection Path */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={isHovered ? card.color : "url(#beamGradIdle)"}
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  strokeDasharray={isHovered ? "none" : "3 3"}
                  className="transition-all duration-300"
                  opacity={isHovered ? 1 : 0.6}
                />

                {/* Micro Vertex Terminal Dot */}
                <circle
                  cx={card.svgTarget.x}
                  cy={card.svgTarget.y}
                  r={isHovered ? "5" : "3.5"}
                  fill={isHovered ? card.color : "#94A3B8"}
                  className="transition-all duration-300"
                  opacity={isHovered ? 1 : 0.6}
                />
              </g>
            );
          })}
        </svg>

        {/* 3. Centerpiece: AI Neural Core */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center pointer-events-auto"
          style={{ top: "50%" }}
        >
          {/* Rotating Geometric Aura */}
          <div className="relative flex items-center justify-center">
            {/* Outer Slow Ambient Halo Ring */}
            <div
              className="absolute w-[220px] h-[220px] rounded-full border border-indigo-200/35 pointer-events-none"
              style={{
                animation: "spin 50s linear infinite",
                borderStyle: "dashed",
              }}
            />

            {/* Mid Gyroscopic Orbit Ring */}
            <div
              className="absolute w-[160px] h-[160px] rounded-full border border-indigo-300/25 pointer-events-none"
              style={{
                animation: "spin 30s linear infinite reverse",
              }}
            >
              {/* Little Orbiting Light Satellite */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#6366F1] shadow-[0_0_8px_#6366F1]" />
            </div>

            {/* Inner Glow Ripple */}
            <div
              className="absolute w-[120px] h-[120px] rounded-full bg-indigo-500/10 blur-xl pointer-events-none animate-pulse"
              style={{ animationDuration: "3s" }}
            />

            {/* The 3D Luminous Neural Sphere */}
            <div
              onClick={onOpenModal}
              className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full cursor-pointer transition-all duration-500 hover:scale-105 select-none flex flex-col items-center justify-center"
              style={{
                background: "radial-gradient(circle at 35% 28%, #818CF8 0%, #6366F1 32%, #4338CA 68%, #1E1B4B 100%)",
                boxShadow:
                  "0 18px 40px -10px rgba(67, 56, 202, 0.4), 0 0 30px rgba(99, 102, 241, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.55), inset 0 -4px 10px rgba(15, 23, 42, 0.5)",
              }}
            >
              {/* Realistic 3D Specular Highlight Crescent */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 38% 22%, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.12) 30%, transparent 60%)",
                }}
              />

              {/* Embossed PerciCore Center Wordmark */}
              <span className="relative z-10 text-white font-bold text-xs tracking-wider drop-shadow-sm select-none">
                Perciverse
              </span>
            </div>
          </div>
        </div>

        {/* 4. The 7 Scattered Context Cards */}
        {cards.map((card) => {
          const isHovered = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute transition-all duration-300 transform select-none cursor-pointer ${card.className}`}
              style={{
                animation: `floatAmbient 6s ease-in-out infinite`,
                animationDelay: card.delay,
              }}
            >
              <div
                className={`relative rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md border transition-all duration-300 ${
                  isHovered
                    ? "scale-105 shadow-2xl border-indigo-400/50 -translate-y-1.5"
                    : "shadow-md hover:shadow-xl border-[#E2E8F0]"
                }`}
                style={{
                  boxShadow: isHovered
                    ? "0 22px 44px -8px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(99, 102, 241, 0.15)"
                    : "0 10px 25px -4px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02)",
                }}
              >
                <img
                  src={card.src}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-auto block select-none pointer-events-none"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Ambient CSS Keyframes */}
      <style jsx>{`
        @keyframes floatAmbient {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
