"use client";

import React from "react";

export default function AuctorVisualSphere() {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-[#2E68F8] to-[#123EAF] flex items-center justify-center p-6 shadow-inner group">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Outer ambient blur ring */}
      <div className="w-[72%] h-[72%] rounded-full bg-[#1850E5] shadow-[0_0_60px_rgba(255,255,255,0.35)] blur-md group-hover:scale-105 transition-transform duration-700 ease-out" />

      {/* Main concentric glowing sphere */}
      <div className="absolute w-[64%] h-[64%] rounded-full bg-gradient-to-tr from-[#0F3DBF] via-[#2764F5] to-[#558DFF] shadow-[inset_0_-12px_24px_rgba(10,30,100,0.6),0_15px_35px_rgba(0,0,0,0.3)] flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-500 ease-out">
        {/* Soft specular highlight reflection */}
        <div className="w-[35%] h-[35%] rounded-full bg-white/25 blur-xs -translate-y-3 -translate-x-3 pointer-events-none" />
      </div>

      {/* Floating subtle pulse rings */}
      <div className="absolute w-[80%] h-[80%] rounded-full border border-white/15 animate-ping duration-3000 pointer-events-none opacity-20" />
    </div>
  );
}
