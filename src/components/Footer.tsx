"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "./ConsultationModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="black">
        {/* Black CTA Bottom Container */}
        <div className="max-width">
          <div className="black-cta-bottom-container">
            <div className="cta-container black">
              <div className="text-container-large-center narrow">
                <h2 className="heading-2 center white">
                  Run every SAP implementation on one platform
                </h2>
                <div className="text-button-center">
                  <div className="paragraph-1 center white text-[#E9E9EF]">
                    Discover how Percipere transforms your SAP S/4HANA migration, planning, and operations into a predictable, automated system of action.
                  </div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="button-primary w-button bg-white text-[#1B1466] hover:bg-[#F8F8FA] font-medium transition-colors"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider _60"></div>

        {/* Technical Footer */}
        <div className="max-width _2">
          <section id="footer" className="footer">
            <div className="row-container parent">
              <div className="row-container">
                <div className="technical white-60">© 2026 Percipere AI</div>
              </div>

              <div className="row-container flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="row-container">
                  <div className="link-list flex flex-wrap gap-4 text-xs font-mono">
                    <Link className="text-link white hover:text-[#00B7FF]" href="/percixpert">
                      PerciXpert
                    </Link>
                    <Link className="text-link white hover:text-[#00B7FF]" href="/perciserve-support-suite">
                      PerciServe
                    </Link>
                    <Link className="text-link white hover:text-[#00B7FF]" href="/percihub-business-suite">
                      PerciHub
                    </Link>
                    <Link className="text-link white hover:text-[#00B7FF]" href="/what-we-do/intelligence-enterprise-offerings/xpa-epm">
                      xP&amp;A / EPM
                    </Link>
                    <Link className="text-link white hover:text-[#00B7FF]" href="/sap-business-ai">
                      SAP Business AI
                    </Link>
                    <Link className="text-link white hover:text-[#00B7FF]" href="/what-we-do/intelligence-enterprise-offerings/ai-acceleration">
                      AI Acceleration
                    </Link>
                  </div>
                </div>

                <div className="row-container">
                  <div className="link-list">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="text-link white hover:text-[#00B7FF] bg-transparent border-none p-0 cursor-pointer"
                    >
                      Contact
                    </button>
                    <a
                      href="https://www.linkedin.com/company/percipere"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link white hover:text-[#00B7FF]"
                    >
                      LinkedIn
                    </a>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="text-link white hover:text-[#00B7FF] bg-transparent border-none p-0 cursor-pointer"
                    >
                      Login
                    </button>
                    <a
                      href="https://x.com/percipere"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link white hover:text-[#00B7FF]"
                    >
                      X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Monolithic Brand Wordmark */}
            <div className="w-full mt-12 pt-6 flex justify-center items-center overflow-hidden">
              <svg
                viewBox="0 0 1400 240"
                className="w-full max-h-[160px] select-none text-white/90"
                fill="currentColor"
                aria-label="Percipere"
              >
                <text
                  x="50%"
                  y="62%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  fontWeight="bold"
                  fontSize="220"
                  letterSpacing="-0.04em"
                  className="fill-white"
                >
                  percipere
                </text>
                <circle cx="1275" cy="115" r="14" fill="#FF00B7" />
              </svg>
            </div>
          </section>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic="Enterprise Implementation System"
      />
    </>
  );
}
