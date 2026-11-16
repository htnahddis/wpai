"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PerciVerseProductsScrollSectionProps {
  onOpenModal: () => void;
}

interface ProductItem {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  href: string;
  color: string;
  accentColor: string;
  logo?: string;
}

const products: ProductItem[] = [
  {
    id: "percixpert",
    name: "PerciXpert",
    category: "IMPLEMENTATION SUITE",
    headline: "Automate SAP S/4HANA delivery across all 7 project phases",
    description:
      "Turns workshop discussions into audit-ready Solution Design Documents (SDD), verified Clean Core scope items, and automated cutover schedules in seconds.",
    href: "/percixpert",
    color: "#1B1466",
    accentColor: "#FF00B7",
    logo: "/perciXpert.png",
  },
  {
    id: "percibot",
    name: "PerciBot",
    category: "BUSINESS SUITE",
    headline: "Autonomous business process agents built on Joule Studio",
    description:
      "Sector-tailored autonomous agents that execute multi-system transactions, resolve vendor discrepancies, and automate financial reconciliations across SAP modules.",
    href: "/percibot-business-suite",
    color: "#D946A0",
    accentColor: "#9475D8",
  },
  {
    id: "perciserve",
    name: "PerciServe",
    category: "SUPPORT & REPORTING SUITE",
    headline: "Deflect L1 tickets & accelerate L2/L3 resolution with deep telemetry & live dashboards",
    description:
      "Turn SAP work data into real-time clarity. Continuous diagnostics, predictive error detection, and automated root-cause resolution for enterprise ERP landscapes.",
    href: "/perciserve-support-suite",
    color: "#9475D8",
    accentColor: "#6161FF",
   
  },

  {
    id: "agentic-studio",
    name: "Agentic Studio",
    category: "AGENTIC SUITE",
    headline: "Build and deploy autonomous agents across your enterprise",
    description:
      "Create intelligent, self-operating agents that can navigate complex business processes, interact with multiple systems, and make decisions in real-time.",
    href: "/agentic-studio",
    color: "#9475D8",
    accentColor: "#6161FF",
    
  },
];

export default function PerciVerseProductsScrollSection({
  onOpenModal,
}: PerciVerseProductsScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyStageRef = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const isAnimatingRef = useRef<boolean>(false);

  // Smoothly transition to a specific product
  const goToProduct = useCallback((targetIdx: number) => {
    if (targetIdx < 0 || targetIdx >= products.length || !sectionRef.current) return;
    isAnimatingRef.current = true;
    setActiveIdx(targetIdx);

    const rect = sectionRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable > 0) {
      const targetScrollY =
        window.scrollY +
        rect.top +
        (totalScrollable * targetIdx) / (products.length - 1);
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    }

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 650);
  }, []);

  // 1. Single Smooth Scroll Wheel Control
  // Intercepts wheel events only while the stage is pinned/sticky
  useEffect(() => {
    const stage = stickyStageRef.current;
    if (!stage) return;

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Is the section currently pinned to the viewport?
      const isPinned = rect.top <= 25 && rect.bottom >= window.innerHeight - 25;
      if (!isPinned) return;

      // Ignore micro-scroll jitter
      if (Math.abs(e.deltaY) < 18) return;

      if (e.deltaY > 0) {
        // User scrolling DOWN
        if (activeIdx < products.length - 1) {
          e.preventDefault();
          if (isAnimatingRef.current) return;
          goToProduct(activeIdx + 1);
        }
        // If at last product (index 3), allow native scroll to advance to the next section
      } else {
        // User scrolling UP
        if (activeIdx > 0) {
          e.preventDefault();
          if (isAnimatingRef.current) return;
          goToProduct(activeIdx - 1);
        }
        // If at first product (index 0), allow native scroll to advance up to previous section
      }
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      stage.removeEventListener("wheel", handleWheel);
    };
  }, [activeIdx, goToProduct]);

  // 2. Touch gesture support for mobile / tablets
  useEffect(() => {
    const stage = stickyStageRef.current;
    if (!stage) return;

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!sectionRef.current || isAnimatingRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isPinned = rect.top <= 25 && rect.bottom >= window.innerHeight - 25;
      if (!isPinned) return;

      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;

      if (Math.abs(diff) > 45) {
        if (diff > 0 && activeIdx < products.length - 1) {
          e.preventDefault();
          goToProduct(activeIdx + 1);
          touchStartY = touchY;
        } else if (diff < 0 && activeIdx > 0) {
          e.preventDefault();
          goToProduct(activeIdx - 1);
          touchStartY = touchY;
        }
      }
    };

    stage.addEventListener("touchstart", handleTouchStart, { passive: true });
    stage.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      stage.removeEventListener("touchstart", handleTouchStart);
      stage.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeIdx, goToProduct]);

  // 3. Fallback sync for manual scrollbar dragging
  useEffect(() => {
    const handleScroll = () => {
      if (isAnimatingRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScrolled / totalScroll));
      const calculatedIdx = Math.min(
        products.length - 1,
        Math.max(0, Math.round(rawProgress * (products.length - 1)))
      );
      if (calculatedIdx !== activeIdx) {
        setActiveIdx(calculatedIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIdx]);

  const activeProduct = products[activeIdx];

  // Mathematical Dial Geometry:
  // Crown (Top Apex) is at 270 deg.
  // Base angles for the 4 products:
  // Product 0: 270 deg (Starts at Crown)
  // Product 1: 0 deg (Right)
  // Product 2: 90 deg (Bottom)
  // Product 3: 180 deg (Left)
  // Rotating by -activeIdx * 90 deg brings each product seamlessly to the Crown!
  const rotationAngle = -activeIdx * 90;

  const orbitRadius = 410; // px (extended horizontally for an expansive, uncluttered arch)
  const dialDiameter = orbitRadius * 2; // 820px

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[320vh] bg-white text-[#191923]"
    >
      {/* Sticky 100vh Fullscreen Stage */}
      <div
        ref={stickyStageRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-white via-[#FCFBFE] to-[#F5F2FD]"
      >
        {/* Soft Ambient Background Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[980px] h-[450px] rounded-full opacity-25 blur-3xl pointer-events-none transition-colors duration-700"
          style={{
            background: `radial-gradient(circle, ${activeProduct.color}25 0%, ${activeProduct.accentColor}12 50%, transparent 70%)`,
          }}
        />

        {/* 1. TOP: Clean, Expansive Product Presentation (Comfortably Below Navbar) */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 pt-20 sm:pt-24 lg:pt-28 text-center flex flex-col items-center">
          {/* Prominent Product Logo */}
          <div
            key={`logo-${activeProduct.id}`}
            className="mb-3.5 h-16 flex items-center justify-center animate-fade-in"
          >
            {activeProduct.logo ? (
              <img
                src={activeProduct.logo}
                alt={activeProduct.name}
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-md select-none"
              />
            ) : activeProduct.id === "percihub" ? (
              <div className="w-14 h-14 rounded-2xl bg-[#D946A0]/10 border border-[#D946A0]/20 flex items-center justify-center shadow-xs">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="16" stroke="#D946A0" strokeWidth="2.5" opacity="0.9" />
                  <circle cx="20" cy="20" r="8" fill="#D946A0" />
                </svg>
              </div>
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-[#9475D8]/10 border border-[#9475D8]/20 flex items-center justify-center shadow-xs">
                <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="15" stroke="#9475D8" strokeWidth="2" opacity="0.8" />
                  <ellipse cx="20" cy="20" rx="9" ry="5" stroke="#9475D8" strokeWidth="2" />
                  <circle cx="20" cy="20" r="3" fill="#9475D8" />
                </svg>
              </div>
            )}
          </div>

          {/* Product Category */}
          <p
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 font-mono transition-colors duration-300"
            style={{ color: activeProduct.color }}
          >
            {activeProduct.category}
          </p>

          {/* Product Headline & Description (Extended Horizontally: max-w-4xl & max-w-3xl) */}
          <div
            key={`text-${activeProduct.id}`}
            className="animate-fade-in transition-all duration-300 max-w-4xl lg:max-w-5xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#191923] leading-[1.18] mb-3 text-balance">
              <span className="font-semibold text-[#191923]">{activeProduct.name}</span>
            
              
            </h2>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl sm:max-w-3xl mx-auto mb-5 text-balance">
              {activeProduct.headline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href={activeProduct.href}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#191923] hover:bg-[#140F4D] text-white rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore {activeProduct.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E2E8F0] bg-white hover:bg-[#F8F8FA] text-[#191923] text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer"
            >
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        {/* 2. BOTTOM: Planetary Dial Arch (Moved Lower Down with Clean Spacing) */}
        <div className="relative z-10 w-full h-[320px] sm:h-[360px] lg:h-[400px] flex items-start justify-center overflow-hidden pointer-events-none select-none">
          <div
            className="absolute top-12 sm:top-16 lg:top-20 left-1/2 -translate-x-1/2 pointer-events-auto"
            style={{
              width: `${dialDiameter}px`,
              height: `${dialDiameter}px`,
            }}
          >
            {/* Concentric Double Purple Boundary Rims */}
            <div className="absolute inset-0 rounded-full border-[3px] border-[#5B35B1] opacity-75 shadow-[0_15px_50px_rgba(91,53,177,0.3)] pointer-events-none" />
            <div className="absolute inset-2 rounded-full border-[1.5px] border-[#9475D8]/40 pointer-events-none" />

            {/* Inner Dashed Orbital Ring */}
            <div className="absolute inset-[65px] rounded-full border border-dashed border-[#5B35B1]/30 pointer-events-none" />

            {/* Central PerciVerse Nucleus Orb */}
            <div
              onClick={onOpenModal}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center text-white z-40 pointer-events-auto cursor-pointer transition-transform hover:scale-105"
              style={{
                width: "120px",
                height: "120px",
                background:
                  "radial-gradient(circle at 35% 25%, #7B5FE6 0%, #5B35B1 60%, #1B1466 100%)",
                boxShadow:
                  "0 12px 40px rgba(91, 53, 177, 0.45), 0 0 30px rgba(123, 95, 230, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)",
                  animationDuration: "3s",
                }}
              />
              <span className="font-bold text-sm sm:text-base tracking-wide text-white drop-shadow-sm">
                PerciVerse
              </span>
              <span className="text-[9px] text-white/70 font-mono mt-0.5">Core Ecosystem</span>
            </div>

            {/* Rotating Solar Ring with 650ms Spring Ease */}
            <div
              className="absolute inset-0 rounded-full will-change-transform"
              style={{
                transform: `rotate(${rotationAngle}deg)`,
                transition: "transform 650ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {products.map((product, index) => {
                const baseAngles = [270, 0, 90, 180];
                const angleDeg = baseAngles[index];
                const angleRad = (angleDeg * Math.PI) / 180;
                const nodeRadius = orbitRadius - 65; // Sits right on the dashed circle
                const x = orbitRadius + nodeRadius * Math.cos(angleRad);
                const y = orbitRadius + nodeRadius * Math.sin(angleRad);

                const isActive = index === activeIdx;

                return (
                  <div
                    key={product.id}
                    onClick={() => goToProduct(index)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group pointer-events-auto"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                    }}
                  >
                    {/* Counter-rotation to keep each product node upright */}
                    <div
                      className="flex flex-col items-center justify-center transition-all duration-500"
                      style={{
                        transform: `rotate(${-rotationAngle}deg) ${
                          isActive ? "scale(1.15)" : "scale(0.88)"
                        }`,
                        opacity: isActive ? 1 : 0.65,
                      }}
                    >
                      {/* Product Sphere / Emblem */}
                      <div
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? "shadow-2xl ring-4 ring-[#6161FF]/40 -translate-y-2"
                            : "shadow-md hover:scale-105"
                        }`}
                        style={{
                          background:
                            product.id === "percixpert"
                              ? "radial-gradient(circle at 35% 25%, #2B237C, #1B1466)"
                              : product.id === "percihub"
                              ? "radial-gradient(circle at 35% 25%, #FF45B5, #D946A0)"
                              : product.id === "perciserve"
                              ? "radial-gradient(circle at 35% 25%, #B397F2, #9475D8)"
                              : "radial-gradient(circle at 35% 25%, #40CCFF, #00B7FF)",
                        }}
                      >
                        {/* Glow halo when active */}
                        {isActive && (
                          <div
                            className="absolute -inset-2 rounded-full blur-md opacity-50 animate-pulse pointer-events-none"
                            style={{ backgroundColor: product.color }}
                          />
                        )}

                        {/* Product Icon */}
                        {product.logo ? (
                          <img
                            src={product.logo}
                            alt={product.name}
                            className="w-14 h-14 sm:w-16 sm:h-16 object-contain select-none pointer-events-none drop-shadow-md"
                          />
                        ) : product.id === "percihub" ? (
                          <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="16" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />
                            <circle cx="20" cy="20" r="8" fill="#FFFFFF" />
                          </svg>
                        ) : (
                          <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="15" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
                            <ellipse cx="20" cy="20" rx="9" ry="5" stroke="#FFFFFF" strokeWidth="2" />
                            <circle cx="20" cy="20" r="3" fill="#FFFFFF" />
                          </svg>
                        )}
                      </div>

                      {/* Product Name Label */}
                      <span
                        className={`mt-2 text-xs sm:text-sm tracking-wide transition-colors ${
                          isActive
                            ? "text-[#191923] font-bold"
                            : "text-[#64748B] font-medium"
                        }`}
                      >
                        {product.name}
                      </span> 
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.35s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
