"use client";

import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
      <div className={`mb-12 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-xl"} ${className}`}>
        {eyebrow && (
        <span className="block text-[11px] font-mono uppercase tracking-widest text-[#64676D] mb-3">
          {eyebrow}
        </span>
        )}
          <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#191923] tracking-tight">
            {title}
          </h2>
          {description && (
              <p className="mt-3 text-sm sm:text-base text-[#64676D] font-normal leading-relaxed text-balance">
                {description}
              </p>
      )}
            </div>
          );
}
