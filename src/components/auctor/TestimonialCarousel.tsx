"use client";

import React, { useState, useEffect } from "react";

export interface TestimonialItem {
  key: string | number;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
  className?: string;
}

export default function TestimonialCarousel({
  items,
  className = "",
}: TestimonialCarouselProps) {
  const [state, setState] = useState({ index: 0, run: 0 });
  const activeIdx = state.index;

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prev) => ({
        index: (prev.index + 1) % items.length,
        run: prev.run + 1,
      }));
    }, 8000);

    return () => clearTimeout(timer);
  }, [state, items.length]);

  const handleSelect = (idx: number) => {
    setState((prev) => ({
      index: idx,
      run: prev.run + 1,
    }));
  };

  return (
    <div className={`testimonial-carousel ${className}`.trim()}>
      <div className="collection-list-wrapper w-dyn-list">
        <ul className="testimonial-list w-dyn-items list-none p-0 m-0">
          {items.map((item, a) => {
            const isActive = a === activeIdx;
            return (
              <li
                key={item.key}
                className={`testimonial-item w-dyn-item ${isActive ? "active" : ""}`}
                aria-hidden={!isActive}
                style={{ display: isActive ? "block" : "none" }}
              >
                <div className="testimonial-slide min-h-[220px] flex flex-col justify-between">
                  <div className="quote-container">
                    <h2 className="heading-3 quote font-serif text-2xl sm:text-3xl lg:text-[34px] leading-snug font-normal text-[#171717] max-w-4xl">
                      {item.quote}
                    </h2>
                    <div className="label mt-8">
                      <div className="body-text-1 medium text-lg font-semibold text-[#171717]">
                        {item.author}
                      </div>
                      <div className="paragraph-1 card text-sm text-[#737373] mt-0.5">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Auctor Testimonial Progress Bars */}
      <div className="code-embed w-embed w-script">
        <div className="testimonial-bars">
          {items.map((item, a) => (
            <button
              key={item.key}
              type="button"
              className="t-bar"
              aria-label={`Show testimonial ${a + 1}`}
              aria-pressed={a === activeIdx}
              onClick={() => handleSelect(a)}
            >
              <div
                className={`t-bar-fill${
                  a < activeIdx ? " is-done" : a === activeIdx ? " is-running" : ""
                }`}
                key={a === activeIdx ? state.run : "idle"}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

