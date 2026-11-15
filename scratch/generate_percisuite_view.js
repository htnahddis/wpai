const fs = require('fs');

const html = fs.readFileSync('public/monday.com _ Dashboards & Reporting.html', 'utf-8');
const startTag = '<section class="m_main-wrapper">';
const startIdx = html.indexOf(startTag);
const endIdx = 245915;

let raw = html.substring(startIdx, endIdx) + '</section>';

// Replace asset paths
raw = raw.replace(/\.\/monday\.com _ Dashboards &(?:amp;)? Reporting_files\//g, '/percisuite/');
raw = raw.replace(/monday\.com _ Dashboards &(?:amp;)? Reporting_files\//g, '/percisuite/');

// Replace links to monday signup with javascript:void(0) and trigger class
raw = raw.replace(/href="https:\/\/auth\.monday\.com\/users\/sign_up_new[^"]*"/g, 'href="#contact" data-modal-trigger="true"');
raw = raw.replace(/href="https:\/\/mondaystaging\.com\/w\/customer-stories\/mcdonalds"/g, 'href="#contact" data-modal-trigger="true"');

// Replace monday text with PerciSuite / Percipere
raw = raw.replace(/monday\.com/g, 'PerciSuite');
raw = raw.replace(/monday sidekick/g, 'PerciBOT &amp; Joule');
raw = raw.replace(/monday for agents/g, 'PerciSuite for Enterprise');
raw = raw.replace(/Buisness-wide/g, 'Business-wide');

// Let's create the TSX file
const tsx = `/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-css-tags */
"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import ConsultationModal from "@/components/ConsultationModal";

const PERCISUITE_DASHBOARDS_HTML = ${JSON.stringify(raw)};

export default function PerciSuiteClonedView() {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Attach modal trigger click handlers to all signup/action buttons inside the cloned markup
  useEffect(() => {
    if (!containerRef.current) return;

    const handleActionClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[data-modal-trigger="true"], a[href="#contact"], a[data-button-type="signup"], a.m_button');
      if (target) {
        e.preventDefault();
        setModalOpen(true);
      }
    };

    const root = containerRef.current;
    root.addEventListener("click", handleActionClick);
    return () => root.removeEventListener("click", handleActionClick);
  }, []);

  return (
    <div
      className="percisuite-dashboards-root relative w-full overflow-x-clip bg-white"
      suppressHydrationWarning
    >
      {/* 1. Official Shared & Splide Stylesheets */}
      <link
        rel="stylesheet"
        href="/percisuite/websitepages.shared.97086266a.min.css"
      />
      <link
        rel="stylesheet"
        href="/percisuite/splide-core.min.css"
      />
      <link
        rel="stylesheet"
        href="/percisuite/percisuite-dashboards.css"
      />

      {/* 2. Interactive Scripts via next/script */}
      <Script
        src="/percisuite/splide.min.js.download"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Splide) {
            try {
              const el = document.getElementById("splide01");
              if (el && !(el as any)._splide) {
                new (window as any).Splide(el, {
                  type: "slide",
                  perPage: 3,
                  gap: "1.5rem",
                  pagination: true,
                  arrows: true,
                  breakpoints: {
                    991: { perPage: 2, gap: "1rem" },
                    479: { perPage: 1, gap: "1rem" },
                  },
                }).mount();
              }
            } catch (err) {
              console.warn("Splide init notice:", err);
            }
          }
        }}
      />

      {/* 3. Render Cloned Main Wrapper */}
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: PERCISUITE_DASHBOARDS_HTML }}
        className="percisuite-main-content-root"
        suppressHydrationWarning
      />

      {/* 4. Consultation Booking Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="PerciSuite Enterprise Accelerators & Dashboards"
      />
    </div>
  );
}
`;

fs.writeFileSync('src/components/views/PerciSuiteClonedView.tsx', tsx, 'utf-8');
console.log('PerciSuiteClonedView.tsx generated successfully!');
