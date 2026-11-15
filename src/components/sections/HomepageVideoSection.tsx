"use client";

import React from "react";
import LazyVideo from "@/components/auctor/LazyVideo";

export default function HomepageVideoSection() {
  return (
    <section className="max-width">
      <div className="fullbleed-asset my-4">
        <div className="mux-media-slot desktop max-h-[85vh] flex flex-col">
          <div className="bg-[#0E0F13] text-white rounded-2xl overflow-hidden border border-[#23242B] shadow-2xl flex flex-col h-full">
            {/* Workspace Header Toolbar */}
            <div className="px-5 py-3 bg-[#15161C] border-b border-[#23242B] flex items-center justify-between text-xs font-mono shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></span>
                </div>
                <div className="h-4 w-[1px] bg-[#2A2B35]"></div>
                <span className="text-[#8E8E93]">Platform:</span>
                <span className="font-semibold text-white">Percipere Product Suite &amp; Delivery Engine</span>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#00B7FF] animate-pulse"></span>
                <span className="text-[#00B7FF] font-medium">Live Showcase</span>
              </div>
            </div>

            {/* Homepage Product Video Player */}
            <div className="relative w-full aspect-video max-h-[75vh] bg-[#090A0E] overflow-hidden flex items-center justify-center">
              <LazyVideo
                src="/homepage_video.mp4"
                className="w-full h-full object-contain"
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
