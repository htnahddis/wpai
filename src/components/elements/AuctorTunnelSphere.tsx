"use client";

import React from "react";

export default function AuctorTunnelSphere() {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#125866] via-[#10707F] to-[#0A3A42] flex items-center justify-center p-6 shadow-inner group">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#1CB5CC]/20 via-transparent to-transparent pointer-events-none" />

      {/* SVG Concentric 3D Tunnel Portal */}
      <svg
        viewBox="0 0 200 200"
        className="w-[85%] h-[85%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
      >
        <defs>
          <radialGradient id="tunnelGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1B1466" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#007285" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#04323A" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="tunnelGrad2" cx="45%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#00B7FF" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#0A5060" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#03242A" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="tunnelCore" cx="40%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#10DFDF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#008A9E" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1B1466" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Ring 1 (Outer) */}
        <circle cx="100" cy="100" r="88" fill="url(#tunnelGrad1)" opacity="0.6" />

        {/* Ring 2 (Shifted slightly top-left for 3D depth) */}
        <circle cx="94" cy="94" r="72" fill="url(#tunnelGrad2)" opacity="0.75" />

        {/* Ring 3 */}
        <circle cx="89" cy="89" r="56" fill="url(#tunnelGrad1)" opacity="0.85" />

        {/* Ring 4 */}
        <circle cx="84" cy="84" r="42" fill="url(#tunnelGrad2)" opacity="0.95" />

        {/* Ring 5 (Inner Core) */}
        <circle cx="80" cy="80" r="28" fill="url(#tunnelCore)" />

        {/* Center Glow Dot */}
        <circle cx="78" cy="78" r="14" fill="#00B7FF" opacity="0.9" filter="blur(2px)" />
        <circle cx="78" cy="78" r="8" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  );
}
