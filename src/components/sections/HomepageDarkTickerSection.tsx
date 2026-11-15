"use client";

import React from "react";
import { INVESTOR_LOGOS } from "@/data/homepage.data";

export default function HomepageDarkTickerSection() {
  return (
    <section className="dark-grey">
      <div className="max-width">
        <div className="primary-container even-padding center-vertical dark text-center">
          <div className="small-paragraph-stretch fixed-padding max-w-2xl mx-auto mb-8">
            <div className="text-container mobile-narrow">
              {/* No eyebrows, clean title and subtitle */}
              <h3 className="heading-3 white text-2xl sm:text-3xl font-sans font-normal text-white mb-2">
                Backed by the <span className="text-[#00B7FF]">SAP Partner Network</span>
              </h3>
              <p className="paragraph-1 mobile-center text-sm sm:text-base font-normal text-[#E9E9EF]/80">
                Certified by leading global enterprise ecosystems &amp; governance frameworks
              </p>
            </div>
          </div>

          {/* Dark Ticker with White Logos */}
          <div className="logo-ticker-final">
            <div className="_wf-logo-ticker">
              <div className="wf-logo-ticker__track">
                {/* Set 1 */}
                <div className="_wf-logo-ticker__list">
                  {INVESTOR_LOGOS.map((name, i) => (
                    <div key={`inv-1-${i}`} className="_wf-logo-ticker__item">
                      <span className="font-sans text-xl sm:text-2xl font-medium tracking-tight text-white/90 hover:text-white transition-colors select-none">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Set 2 (Clone for seamless loop) */}
                <div className="_wf-logo-ticker__list" aria-hidden="true">
                  {INVESTOR_LOGOS.map((name, i) => (
                    <div key={`inv-2-${i}`} className="_wf-logo-ticker__item">
                      <span className="font-sans text-xl sm:text-2xl font-medium tracking-tight text-white/90 hover:text-white transition-colors select-none">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
