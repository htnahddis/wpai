"use client";

import React from "react";
import { CornerDownLeft, Paperclip, AtSign, Monitor, Shuffle } from "lucide-react";

export default function AuctorPromptBox() {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-[#9EB6FF] via-[#BDD1FF] to-[#D5E1FF] p-5 flex items-center justify-center shadow-inner group">
      {/* Floating Prompt Box (White Card) */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 space-y-3.5 group-hover:scale-[1.02] transition-transform duration-500">
        {/* Prompt Text with interactive pills */}
        <div className="text-xs font-sans text-zinc-700 leading-relaxed">
          <span>Based on </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#F4F4F6] border border-zinc-200 text-[10px] font-mono text-zinc-800 font-medium align-baseline shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-2xs bg-emerald-500" />
            <span>Weekly Feedback Sync</span>
          </span>
          <span> and </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#F4F4F6] border border-zinc-200 text-[10px] font-mono text-zinc-800 font-medium align-baseline shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-2xs bg-blue-500" />
            <span>Scope Agreement</span>
          </span>
          <span> create a...</span>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
          <div className="flex items-center gap-2 text-zinc-400">
            <Paperclip className="w-3.5 h-3.5 hover:text-zinc-600 transition-colors cursor-pointer" />
            <AtSign className="w-3.5 h-3.5 hover:text-zinc-600 transition-colors cursor-pointer" />
            <Monitor className="w-3.5 h-3.5 hover:text-zinc-600 transition-colors cursor-pointer" />
            <Shuffle className="w-3.5 h-3.5 hover:text-zinc-600 transition-colors cursor-pointer" />
          </div>

          {/* Green Enter Button */}
          <div className="w-6 h-6 rounded-md bg-[#507D67] text-white flex items-center justify-center shadow-xs group-hover:bg-[#3D6652] transition-colors cursor-pointer">
            <CornerDownLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
}
