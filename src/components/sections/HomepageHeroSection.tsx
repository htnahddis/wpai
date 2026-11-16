// "use client";

// import React from "react";
// import { ArrowRight } from "lucide-react";
// import PerciVerseOrbitalEcosystem from "@/components/PerciVerseOrbitalEcosystem";

// interface HomepageHeroSectionProps {
//   onOpenModal: () => void;
// }

// export default function HomepageHeroSection({ onOpenModal }: HomepageHeroSectionProps) {
//   return (
//     <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center max-w-[1240px] mx-auto px-6 py-6 lg:py-0">
//       <div data-nav-cta-sentinel="" className="w-full">
//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
//           {/* Left: Text Content (5 columns for ample copy width) */}
//           <div className="lg:col-span-5 text-left py-4">
//             {/* Main Headline with Magenta & Indigo Keyword Accents */}
//             <h1 className="font-sans text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] tracking-tight text-[#191923] max-w-lg">
//              <span className="text-[#FF00B7]"> Accelerating </span>
//                <span className="text-[#1B1466]">  ERP Journey By Connected Systems</span>.
//             </h1>

//             {/* Subtext and Action Buttons */}
//             <div className="mt-4 sm:mt-6">
            

//               <div className="flex flex-wrap items-center gap-3.5 mt-6 sm:mt-8">
//                 <button
//                   type="button"
//                   onClick={onOpenModal}
//                   className="button-primary inline-flex items-center gap-2 text-xs sm:text-sm px-6 py-3 shadow-sm bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium transition-all hover:scale-[1.02] cursor-pointer"
//                 >
//                   <span>Book a Consultation</span>
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </button>
//                 <a
//                   href="#offerings"
//                   className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium py-3 px-6 rounded-full border border-[#E9E9EF] text-[#191923] hover:bg-[#F8F8FA] transition-colors"
//                 >
//                   <span>Explore Solutions</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right: Enlarged PerciVerse Orbital Ecosystem (7 columns for expansive visual scale) */}
//           <div className="hidden lg:flex lg:col-span-7 items-center justify-center overflow-visible">
//             <div className="relative w-full h-[500px] lg:h-[560px] xl:h-[600px] flex items-center justify-center overflow-visible">
//               <PerciVerseOrbitalEcosystem />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ColorBends from "@/components/ColorBends";

import PerciVerseOrbitalEcosystem from "@/components/PerciVerseOrbitalEcosystem";

interface HomepageHeroSectionProps {
  onOpenModal: () => void;
}

export default function HomepageHeroSection({ onOpenModal }: HomepageHeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] lg:min-h-[680px] overflow-hidden bg-white flex flex-col"
    >
      {/* ===== Background: ColorBends (magenta palette) ===== */}
      <div className="absolute inset-0 z-0 opacity-50">
        <ColorBends
          colors={["#ff00b7", "#d946a0", "#8a5cff"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
        />
      </div>

      {/* Soft white wash (top-left) so the headline stays readable over the bends */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/80 via-white/35 to-transparent" />

      {/* ===== Top-left: text content ===== */}
      <div
        data-nav-cta-sentinel=""
        className="relative z-20 w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-10 sm:pt-14 lg:pt-16 xl:pt-20"
      >
        <div className="max-w-2xl xl:max-w-3xl text-left">
          <h1 className="font-sans font-normal tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[84px]">
            <span className="text-[#FF00B7]">Accelerating </span>
            <span className="text-[#1B1466]">ERP Journey By Connected Systems</span>
            <span className="text-[#1B1466]">.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10 lg:mt-12">
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center gap-2.5 text-sm sm:text-base lg:text-lg px-8 py-4 bg-[#1B1466] hover:bg-[#140F4D] text-white rounded-full font-medium shadow-lg transition-all hover:scale-[1.03] cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>

            <a
              href="#offerings"
              className="inline-flex items-center gap-2 text-sm sm:text-base lg:text-lg font-medium px-8 py-4 rounded-full border border-[#1B1466]/20 bg-white/70 backdrop-blur-sm text-[#191923] hover:bg-white transition-colors"
            >
              <span>Explore Solutions</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== Bottom-right: large orbital ===== */}
    {/* ===== Bottom-right: large orbital ===== */}
<div
  className="
    relative z-10 mt-8 w-full max-w-[560px] mx-auto px-4
    lg:mt-0 lg:px-0 lg:max-w-none lg:absolute lg:bottom-0 lg:right-6 xl:right-12
    lg:w-[min(58vw,calc(100vh-5rem))]
  "
>
  <PerciVerseOrbitalEcosystem />
</div>
    </section>
  );
}