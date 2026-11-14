"use client";

import React, { useRef, useEffect } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

/**
 * LazyVideo: Auctor's IntersectionObserver lazy-loaded video player (Module 71449).
 * Defers loading and playing until within 25% viewport margin for optimal performance.
 */
export default function LazyVideo({ src, poster, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          el.src = src;
          el.play().catch(() => {
            // Autoplay policies or user interaction gates silently handled
          });
        }
      },
      {
        rootMargin: "25% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      preload="none"
      poster={poster}
      muted
      playsInline
      loop
      autoPlay
      className={className}
      {...props}
    />
  );
}

