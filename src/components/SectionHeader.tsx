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
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0D5CE5] bg-blue-50/80 rounded-full mb-3.5 border border-blue-100/50`}>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] font-normal text-[#292A2E] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#64676D] font-normal leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
