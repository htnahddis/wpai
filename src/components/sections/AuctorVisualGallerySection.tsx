"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { AUCTOR_FEATURES } from "@/data/homepage.data";
import AuctorVisualSphere from "@/components/elements/AuctorVisualSphere";
import AuctorDocumentMock from "@/components/elements/AuctorDocumentMock";
import AuctorPromptBox from "@/components/elements/AuctorPromptBox";
import AuctorTunnelSphere from "@/components/elements/AuctorTunnelSphere";

export default function AuctorVisualGallerySection({ onOpenModal }: { onOpenModal: () => void }) {
  const renderVisual = (type: string) => {
    switch (type) {
      case "sphere":
        return <AuctorVisualSphere />;
      case "document":
        return <AuctorDocumentMock />;
      case "prompt":
        return <AuctorPromptBox />;
      case "tunnel":
        return <AuctorTunnelSphere />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-[#E9E9EF]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* 4-Column Visual Feature Showcase matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {AUCTOR_FEATURES.map((feat) => {
            // Render title with Magenta keyword highlight
            const parts = feat.title.split(feat.highlightKeyword);

            return (
              <div key={feat.id} className="flex flex-col space-y-4 group">
                {/* Visual Asset Card */}
                {renderVisual(feat.visualType)}

                {/* Typography Block: No eyebrows, clean editorial format */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="font-sans text-[15px] sm:text-[16px] font-medium text-[#191923] tracking-tight leading-snug">
                    {parts[0]}
                    <span className="text-[#FF00B7]">{feat.highlightKeyword}</span>
                    {parts[1]}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#777783] font-normal leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Pill Button: Learn More */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#000000] hover:bg-[#1B1466] text-white text-xs sm:text-sm font-medium rounded-full transition-all shadow-sm hover:scale-[1.02]"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
