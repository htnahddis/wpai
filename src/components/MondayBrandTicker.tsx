"use client";

import React from "react";

interface ClientBrand {
  name: string;
  category: string;
  svg: React.ReactNode;
}

export const ENTERPRISE_BRANDS: ClientBrand[] = [
  // 1. Travelopia (Global PE-backed travel leader)
  {
    name: "Travelopia",
    category: "Global Travel Group (PE-Backed)",
    svg: (
      <svg
        viewBox="0 0 160 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* Dynamic Compass / Horizon Arc Glyph */}
        <path
          d="M6 18C6 11.373 11.373 6 18 6C22.6 6 26.5 8.6 28.4 12.4L24.8 14.1C23.5 11.5 20.9 9.8 18 9.8C13.5 9.8 9.8 13.5 9.8 18C9.8 22.5 13.5 26.2 18 26.2C21 26.2 23.7 24.5 25 21.8L28.6 23.4C26.7 27.3 22.7 30 18 30C11.373 30 6 24.627 6 18Z"
          fill="#18181B"
        />
        <circle cx="18" cy="18" r="3.2" fill="#FF4400" />
        {/* Travelopia Wordmark */}
        <text
          x="36"
          y="24"
          fill="#18181B"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="18.5"
          fontWeight="800"
          letterSpacing="-0.03em"
        >
          travelopia
        </text>
        <circle cx="147" cy="13" r="2.8" fill="#FF4400" />
      </svg>
    ),
  },

  // 2. OS Doors (PE-backed manufacturer)
  {
    name: "OS Doors",
    category: "Precision Manufacturing",
    svg: (
      <svg
        viewBox="0 0 150 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* Architectural Doorway Isometric Glyph */}
        <rect x="4" y="6" width="22" height="24" rx="2" fill="none" stroke="#18181B" strokeWidth="2.4" />
        <path d="M12 6V30M4 18H12" stroke="#18181B" strokeWidth="2" />
        <circle cx="15.5" cy="18" r="1.5" fill="#18181B" />
        {/* OS DOORS Bold Wordmark */}
        <text
          x="34"
          y="23"
          fill="#18181B"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="18"
          fontWeight="900"
          letterSpacing="0.04em"
        >
          OS DOORS
        </text>
      </svg>
    ),
  },

  // 3. Renewable Power Capital (RPC) (European renewable energy backed by CPPIB)
  {
    name: "Renewable Power Capital",
    category: "Renewable Energy (CPPIB)",
    svg: (
      <svg
        viewBox="0 0 155 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* Triple Wind Turbine / Solar Helix */}
        <g transform="translate(16, 18)">
          <path d="M0 -12 C4 -8, 7 -3, 0 0 C-2 -4, -1 -9, 0 -12Z" fill="#18181B" />
          <path d="M10.4 6 C7 4, 2 3, 0 0 C4 -1, 9 0, 10.4 6Z" fill="#18181B" />
          <path d="M-10.4 6 C-7 4, -2 3, 0 0 C-4 -1, -9 0, -10.4 6Z" fill="#18181B" />
          <circle cx="0" cy="0" r="2.2" fill="#10B981" />
        </g>
        {/* RPC + Subtitle */}
        <text
          x="38"
          y="23"
          fill="#18181B"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="22"
          fontWeight="900"
          letterSpacing="0.05em"
        >
          RPC
        </text>
        <text
          x="88"
          y="15"
          fill="#71717A"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="7.5"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          ENERGY
        </text>
        <text
          x="88"
          y="23"
          fill="#71717A"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="6.5"
          fontWeight="600"
          letterSpacing="0.05em"
        >
          CPPIB BACKED
        </text>
      </svg>
    ),
  },

  // 4. Advanz Pharma (Global specialty pharma)
  {
    name: "Advanz Pharma",
    category: "Global Specialty Pharma",
    svg: (
      <svg
        viewBox="0 0 175 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* Pharmaceutical Hexagonal Molecular Core */}
        <g transform="translate(4, 7)">
          <path
            d="M11 2L20 7.2V17.6L11 22.8L2 17.6V7.2L11 2Z"
            fill="none"
            stroke="#18181B"
            strokeWidth="2.2"
          />
          <path d="M11 7V18M6.5 9.5L15.5 15.5M6.5 15.5L15.5 9.5" stroke="#18181B" strokeWidth="1.4" />
        </g>
        {/* ADVANZ PHARMA Wordmark */}
        <text
          x="34"
          y="22"
          fill="#18181B"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="16.5"
          fontWeight="800"
          letterSpacing="0.08em"
        >
          ADVANZ
        </text>
        <text
          x="109"
          y="22"
          fill="#71717A"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="16.5"
          fontWeight="500"
          letterSpacing="0.05em"
        >
          PHARMA
        </text>
      </svg>
    ),
  },

  // 5. J.C. Flowers & Co. (Asset reconstruction & private equity)
  {
    name: "J.C. Flowers & Co.",
    category: "Private Equity & Finance",
    svg: (
      <svg
        viewBox="0 0 185 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* Financial Heraldic Four-Leaf Flower Crest */}
        <g transform="translate(14, 18)">
          <circle cx="0" cy="-6" r="4" fill="#18181B" opacity="0.85" />
          <circle cx="6" cy="0" r="4" fill="#18181B" opacity="0.85" />
          <circle cx="0" cy="6" r="4" fill="#18181B" opacity="0.85" />
          <circle cx="-6" cy="0" r="4" fill="#18181B" opacity="0.85" />
          <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
        </g>
        {/* Wall Street Classic Serif Typography */}
        <text
          x="32"
          y="22"
          fill="#18181B"
          fontFamily="Georgia, Garamond, serif"
          fontSize="16"
          fontWeight="700"
          letterSpacing="0.06em"
        >
          J.C. FLOWERS &amp; CO.
        </text>
      </svg>
    ),
  },

  // 6. Fulcrum Digital (Enterprise digital transformation)
  {
    name: "Fulcrum Digital",
    category: "Digital Transformation",
    svg: (
      <svg
        viewBox="0 0 170 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* The Fulcrum Lever Triangles */}
        <g transform="translate(4, 9)">
          <polygon points="0,18 9,0 18,18" fill="#18181B" />
          <polygon points="12,18 18,6 24,18" fill="#71717A" />
        </g>
        {/* fulcrum digital Typography */}
        <text
          x="34"
          y="22"
          fill="#18181B"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="800"
          letterSpacing="-0.02em"
        >
          fulcrum
        </text>
        <text
          x="97"
          y="22"
          fill="#71717A"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="400"
          letterSpacing="-0.01em"
        >
          digital
        </text>
      </svg>
    ),
  },

  // 7. Carrefour (Retail & distribution) - Authentic Iconic Diamond Cutout
  {
    name: "Carrefour",
    category: "Global Retail & Distribution",
    svg: (
      <svg
        viewBox="0 0 160 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* Official Carrefour Negative Space "C" Emblem */}
        <g transform="translate(8, 6)">
          {/* Left Arrow Blade */}
          <path
            d="M12 0C7.2 4.8 4.5 11.2 4.5 18C4.5 24.8 7.2 31.2 12 36L1.5 25.5C-0.5 21.2 -0.5 14.8 1.5 10.5L12 0Z"
            fill="#18181B"
          />
          {/* Right Arrow Blade */}
          <path
            d="M15 0C19.8 4.8 22.5 11.2 22.5 18C22.5 24.8 19.8 31.2 15 36L25.5 25.5C27.5 21.2 27.5 14.8 25.5 10.5L15 0Z"
            fill="#18181B"
          />
        </g>
        {/* Carrefour Wordmark */}
        <text
          x="44"
          y="24"
          fill="#18181B"
          fontFamily="Georgia, Garamond, serif"
          fontSize="19"
          fontWeight="700"
          letterSpacing="0.02em"
        >
          Carrefour
        </text>
      </svg>
    ),
  },

  // 8. SAP Gold Partner (Certified enterprise cloud architecture) - Official SAP Block Badge
  {
    name: "SAP Gold Partner",
    category: "Certified Enterprise Architecture",
    svg: (
      <svg
        viewBox="0 0 170 36"
        className="h-7 sm:h-8 w-auto text-[#18181B] shrink-0"
        fill="currentColor"
      >
        {/* Official SAP Trapezoid Logo Block */}
        <path d="M4 6H38L30 30H4V6Z" fill="#18181B" />
        {/* SAP Cutout Text in White */}
        <text
          x="8.5"
          y="23"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="15"
          fontWeight="900"
          letterSpacing="0.04em"
        >
          SAP
        </text>
        {/* Gold Partner Wordmark & Divider */}
        <line x1="44" y1="9" x2="44" y2="27" stroke="#D4D4D8" strokeWidth="1.5" />
        <text
          x="52"
          y="17"
          fill="#18181B"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="9.5"
          fontWeight="800"
          letterSpacing="0.08em"
        >
          GOLD
        </text>
        <text
          x="52"
          y="26"
          fill="#71717A"
          fontFamily="Figtree, system-ui, -apple-system, sans-serif"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.06em"
        >
          PARTNER
        </text>
      </svg>
    ),
  },
];

export default function MondayBrandTicker() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 select-none overflow-hidden border-b border-zinc-100">
      <div className="w-full max-w-7xl mx-auto px-6 text-center">
        {/* Monday.com Clean Eyebrow Headline */}
        <p className="text-sm sm:text-base font-normal text-[#676879] tracking-tight mb-8 sm:mb-10">
          Trusted by fast-growing enterprises and global market leaders
        </p>

        {/* Marquee Track Container with Smooth Edge Fades */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Left & Right Edge Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

          {/* Continuous Loop Track */}
          <div className="flex w-max animate-ticker hover:[animation-play-state:paused] items-center">
            {/* Set 1 */}
            <div className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20 shrink-0">
              {ENTERPRISE_BRANDS.map((brand, i) => (
                <div
                  key={`brand-1-${i}`}
                  className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-default"
                  title={`${brand.name} — ${brand.category}`}
                >
                  {brand.svg}
                </div>
              ))}
            </div>

            {/* Set 2 (Clone for infinite seamless marquee) */}
            <div className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20 shrink-0" aria-hidden="true">
              {ENTERPRISE_BRANDS.map((brand, i) => (
                <div
                  key={`brand-2-${i}`}
                  className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-default"
                  title={`${brand.name} — ${brand.category}`}
                >
                  {brand.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
