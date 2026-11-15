const fs = require('fs');

const personalizedHtml = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/percipere_personalized_wrapper.html', 'utf8');

const componentCode = `/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-css-tags */
"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import ConsultationModal from "@/components/ConsultationModal";

const PERCIPERE_AGENT_STUDIO_HTML = ${JSON.stringify(personalizedHtml)};

export default function MondayAgentStudioClonedView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState({
    gsap: false,
    scrollTrigger: false,
    swiper: false,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<any>(null);

  // Initialize interactive components
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Interactive Tab Switching for all Webflow Tab components
    const handleTabClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".w-tab-link");
      if (!target) return;

      e.preventDefault();
      const tabTarget = target.getAttribute("data-w-tab");
      if (!tabTarget) return;

      const tabsParent = target.closest(".w-tabs");
      if (!tabsParent) return;

      // Update link active state
      const links = tabsParent.querySelectorAll(".w-tab-link");
      links.forEach((link) => {
        link.classList.remove("w--current");
        link.setAttribute("aria-selected", "false");
        link.setAttribute("tabindex", "-1");
      });
      target.classList.add("w--current");
      target.setAttribute("aria-selected", "true");
      target.setAttribute("tabindex", "0");

      // Update pane active state
      const panes = tabsParent.querySelectorAll(".w-tab-pane");
      panes.forEach((pane) => {
        if (pane.getAttribute("data-w-tab") === tabTarget) {
          pane.classList.add("w--tab-active");
          (pane as HTMLElement).style.display = "block";
        } else {
          pane.classList.remove("w--tab-active");
          (pane as HTMLElement).style.display = "none";
        }
      });
    };

    container.addEventListener("click", handleTabClick);

    // 2. Intercept signup & demo links to open Percipere Consultation Modal
    const handleCtaClick = (e: MouseEvent) => {
      const cta = (e.target as HTMLElement).closest(
        'a[href*="#contact"], a[href*="#trust"], [data-button-type="signup"], [data-signup-flow]'
      );
      if (cta) {
        e.preventDefault();
        setModalOpen(true);
      }
    };

    container.addEventListener("click", handleCtaClick);

    // 3. Initialize Swiper 3D Coverflow Carousel
    const initSwiper = () => {
      const SwiperClass = (window as any).Swiper;
      if (!SwiperClass || swiperInstanceRef.current) return;

      const swiperEl = container.querySelector(".agents-carousel");
      if (!swiperEl) return;

      try {
        swiperInstanceRef.current = new SwiperClass(swiperEl, {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          loop: true,
          watchSlidesProgress: true,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 270,
            modifier: 1,
            slideShadows: false,
          },
          autoplay: {
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          },
          speed: 600,
          slideToClickedSlide: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          on: {
            slideChange: function (this: any) {
              const activeSlide = this.slides[this.activeIndex];
              if (!activeSlide) return;

              // Play active video and pause others
              container.querySelectorAll("video.ai-vid-tar").forEach((v: any) => {
                v.pause();
                v.currentTime = 0;
              });

              const activeVideo = activeSlide.querySelector("video.ai-vid-tar");
              if (activeVideo) {
                activeVideo.play().catch(() => {});
              }
            },
          },
        });
      } catch (err) {
        console.warn("Swiper initialization notice:", err);
      }
    };

    // 4. Initialize GSAP Symmetrical System Fleet Animation (Zero human characters)
    const initAvatars = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      try {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
          const avatars = gsap.utils.toArray(container.querySelectorAll(".agen-avatar"));
          if (!avatars.length) return;

          const mid = 6;
          const innerGap = 85;
          const outerGap = 55;

          gsap.set(avatars, {
            position: "absolute",
            left: "50%",
            top: "50%",
            yPercent: -50,
            xPercent: -50,
            x: 0,
          });

          gsap.to(avatars, {
            x: (i: number) => {
              const diff = i - mid;
              if (diff === 0) return 0;
              const absDiff = Math.abs(diff);
              const direction = diff > 0 ? 1 : -1;
              if (absDiff <= 2) {
                return direction * (absDiff * innerGap);
              } else {
                return direction * (2 * innerGap + (absDiff - 2) * outerGap);
              }
            },
            scrollTrigger: {
              trigger: container.querySelector(".agents_avatars-wrapper"),
              start: "top 85%",
              end: "+=240",
              scrub: 0.2,
              fastScrollEnd: true,
              onLeave: (self: any) => self.animation && self.animation.progress(1),
            },
          });
        });
      } catch (err) {
        console.warn("GSAP avatar notice:", err);
      }
    };

    // Attempt init
    initSwiper();
    initAvatars();

    const timer = setTimeout(() => {
      initSwiper();
      initAvatars();
    }, 400);

    return () => {
      clearTimeout(timer);
      container.removeEventListener("click", handleTabClick);
      container.removeEventListener("click", handleCtaClick);
      if (swiperInstanceRef.current && swiperInstanceRef.current.destroy) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, [scriptsLoaded]);

  return (
    <div className="percipere-agent-studio-wrapper relative w-full overflow-hidden bg-white">
      {/* 1. Official Page Stylesheets */}
      <link
        rel="stylesheet"
        href="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/websitepages.shared.97086266a.min.css"
      />
      <link
        rel="stylesheet"
        href="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/swiper-bundle.min.css"
      />
      <link
        rel="stylesheet"
        href="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/monday-agent-studio-head.css"
      />

      {/* 2. Interactive Scripts via next/script */}
      <Script
        src="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/swiper-bundle.min.js.download"
        strategy="afterInteractive"
        onLoad={() => setScriptsLoaded((prev) => ({ ...prev, swiper: true }))}
      />
      <Script
        src="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/gsap.min.js.download"
        strategy="afterInteractive"
        onLoad={() => setScriptsLoaded((prev) => ({ ...prev, gsap: true }))}
      />
      <Script
        src="/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/ScrollTrigger.min.js.download"
        strategy="afterInteractive"
        onLoad={() => setScriptsLoaded((prev) => ({ ...prev, scrollTrigger: true }))}
      />

      {/* 3. Personalized Percipere Agent Studio HTML Main Wrapper */}
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: PERCIPERE_AGENT_STUDIO_HTML }}
        className="percipere-main-content-root"
      />

      {/* 4. Percipere Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="Percipere Agent Studio Architecture Review"
      />
    </div>
  );
}
`;

fs.writeFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/src/components/views/MondayAgentStudioClonedView.tsx', componentCode);
console.log('Successfully regenerated MondayAgentStudioClonedView.tsx with personalized Percipere content');
