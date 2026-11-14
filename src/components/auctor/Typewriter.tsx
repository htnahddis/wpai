"use client";

import React, { useEffect, useState } from "react";

interface TypewriterProps {
  prefix: string;
  phrases: string[];
  dot?: React.ReactNode;
}

type Phase = "hold" | "deleting" | "gap" | "typing";

interface TypewriterState {
  phase: Phase;
  index: number;
  shown: string;
}

const randomRange = ([min, max]: [number, number]) =>
  min + Math.floor(Math.random() * (max - min + 1));

const PHASE_DELAYS = {
  hold: () => 1400,
  deleting: () => randomRange([20, 36]),
  gap: () => 800,
  typing: () => randomRange([38, 78]),
};

export default function Typewriter({ prefix, phrases, dot }: TypewriterProps) {
  const initialText = phrases[0] ?? "";
  const [state, setState] = useState<TypewriterState>({
    phase: "hold",
    index: 0,
    shown: initialText,
  });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const delay = PHASE_DELAYS[state.phase]();
    const timer = setTimeout(() => {
      setState((prev) => {
        if (prev.phase === "hold") {
          return { ...prev, phase: "deleting" };
        }
        if (prev.phase === "deleting") {
          return prev.shown.length > 1
            ? { ...prev, shown: prev.shown.slice(0, -1) }
            : { ...prev, shown: "", phase: "gap" };
        }
        if (prev.phase === "gap") {
          return {
            phase: "typing",
            index: (prev.index + 1) % phrases.length,
            shown: "",
          };
        }
        // "typing"
        const target = phrases[prev.index] ?? "";
        const nextSlice = target.slice(0, prev.shown.length + 1);
        return nextSlice.length === target.length
          ? { ...prev, shown: nextSlice, phase: "hold" }
          : { ...prev, shown: nextSlice };
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [state, phrases]);

  const isTypingOrDeleting = state.phase === "typing" || state.phase === "deleting";

  return (
    <div
      className={`deliverable-typewriter${isTypingOrDeleting ? " is-typing" : ""}`}
      data-deliverable-typewriter=""
    >
      {dot && (
        <div className="deliverable-typewriter__dot" aria-hidden="true">
          {dot}
        </div>
      )}
      <div className="deliverable-typewriter__body">
        <p className="typeanimation deliverable-typewriter__line">
          <span className="deliverable-typewriter__inner">
            <span className="deliverable-typewriter__prefix font-serif">{prefix}</span>
            <span className="deliverable-typewriter__dynamic font-serif" aria-live="polite">
              {state.shown}
            </span>
            <span className="deliverable-typewriter__caret" aria-hidden="true"></span>
          </span>
        </p>
      </div>
    </div>
  );
}

