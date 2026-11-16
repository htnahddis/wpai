'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SuiteData {
  id: string;
  name: string;
  color: string;
  category: string;
  description: string;
  logo?: string | null;
  ring: number;      // radius in viewBox units (viewBox = 1000)
  speed: number;     // degrees per second
  startAngle: number;
}

const suites: SuiteData[] = [
  {
    id: 'percihub',
    name: 'PerciHub',
    color: '#D946A0',
    category: 'BUSINESS SUITE',
    description: 'Industry-specific agents | Built on Joule Studio | Sector-tailored Processes.',
    logo: null,
    ring: 170,
    speed: 11,
    startAngle: 40,
  },
  {
    id: 'percixpert',
    name: 'PerciXpert',
    color: '#1B1466',
    category: 'IMPLEMENTATION SUITE',
    description: 'AI-assisted S/4HANA delivery | Greenfield & Brownfield | Spans across all 7 project phases.',
    logo: '/perciXpert.png',
    ring: 270,
    speed: 7,
    startAngle: 200,
  },
  {
    id: 'perciserve',
    name: 'PerciServe',
    color: '#9475D8',
    category: 'SUPPORT SUITE',
    description: 'AMS Journey Enhancement | Deep Telemetry | Live Dashboards & Automated Deflection.',
    logo: '/percibot.png',
    ring: 370,
    speed: 4.5,
    startAngle: 320,
  },
];

const VIEW = 1000;
const C = VIEW / 2;
const OUTER_R = 450;                 // FUTUROOT band
const INNER_RINGS = [370, 270, 170];
const CORE_R = 70;                   // visual radius of the core (core is 14% wide)
const HOVER_SPEED = 0.15;

const FallbackIcon: React.FC<{ id: string; color: string }> = ({ id, color }) => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    {id === 'percihub' ? (
      <>
        <circle cx="20" cy="20" r="16" stroke="#191923" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="8" fill="#191923" />
        <circle cx="20" cy="20" r="4" fill={color} />
      </>
    ) : (
      <>
        <circle cx="20" cy="20" r="16" stroke="#191923" strokeWidth="2.5" />
        <path d="M13 20 Q20 12 27 20 Q20 28 13 20" stroke="#191923" strokeWidth="2.5" fill="none" />
        <circle cx="20" cy="20" r="3" fill="#191923" />
      </>
    )}
  </svg>
);

const PerciVerseOrbitalEcosystem: React.FC = () => {
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coreLineRefs = useRef<(SVGLineElement | null)[]>([]);
  const outerLineRefs = useRef<(SVGLineElement | null)[]>([]);
  const meshLineRefs = useRef<(SVGLineElement | null)[]>([]);
  const outerDotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const corePulseRefs = useRef<(SVGCircleElement | null)[]>([]);
  const outerPulseRefs = useRef<(SVGCircleElement | null)[]>([]);

  const [activeSuite, setActiveSuite] = useState<string | null>(null);
  const [hoveredSuite, setHoveredSuite] = useState<string | null>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const angles = suites.map((s) => s.startAngle);
    let speedFactor = 1;
    let last = 0;
    let raf = 0;
    let clock = 0;

    const set = (el: Element | null, attrs: Record<string, number>) => {
      if (!el) return;
      for (const k in attrs) el.setAttribute(k, attrs[k].toFixed(2));
    };

    const place = () => {
      const pts: [number, number][] = [];

      suites.forEach((s, i) => {
        const rad = (angles[i] * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const x = C + s.ring * cos;
        const y = C + s.ring * sin;
        pts.push([x, y]);

        const el = nodeRefs.current[i];
        if (el) {
          el.style.left = `${(x / VIEW) * 100}%`;
          el.style.top = `${(y / VIEW) * 100}%`;
        }

        // core -> suite
        const cx0 = C + CORE_R * cos;
        const cy0 = C + CORE_R * sin;
        set(coreLineRefs.current[i], { x1: cx0, y1: cy0, x2: x, y2: y });

        // suite -> FUTUROOT band
        const ox = C + OUTER_R * cos;
        const oy = C + OUTER_R * sin;
        set(outerLineRefs.current[i], { x1: x, y1: y, x2: ox, y2: oy });
        set(outerDotRefs.current[i], { cx: ox, cy: oy });

        // travelling pulses
        const t1 = (clock / 2.2 + i * 0.33) % 1;
        set(corePulseRefs.current[i], { cx: cx0 + (x - cx0) * t1, cy: cy0 + (y - cy0) * t1 });
        const t2 = (clock / 2.6 + i * 0.41 + 0.5) % 1;
        set(outerPulseRefs.current[i], { cx: x + (ox - x) * t2, cy: y + (oy - y) * t2 });
      });

      // suite <-> suite mesh
      for (let i = 0; i < 3; i++) {
        const a = pts[i];
        const b = pts[(i + 1) % 3];
        set(meshLineRefs.current[i], { x1: a[0], y1: a[1], x2: b[0], y2: b[1] });
      }
    };

    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
      last = now;
      clock += dt;
      const target = hoveredRef.current ? HOVER_SPEED : 1;
      speedFactor += (target - speedFactor) * (1 - Math.exp(-dt / 0.3));
      suites.forEach((s, i) => {
        angles[i] = (angles[i] + s.speed * speedFactor * dt) % 360;
      });
      place();
      raf = requestAnimationFrame(tick);
    };

    place();
    if (!reduced) raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="relative w-full aspect-square select-none"
        style={{ containerType: 'inline-size' }}
        onMouseEnter={() => (hoveredRef.current = true)}
        onMouseLeave={() => {
          hoveredRef.current = false;
          setHoveredSuite(null);
        }}
      >
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <linearGradient id="bandGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#FFD6F3" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.55" />
            </linearGradient>
          </defs>

          {/* ===== FUTUROOT connection band (outermost) ===== */}
          <circle cx={C} cy={C} r={OUTER_R} fill="none" stroke="url(#bandGrad)" strokeWidth="34" />
          <circle cx={C} cy={C} r={OUTER_R} fill="none" stroke="#fff" strokeWidth="10" opacity="0.4" filter="url(#whiteGlow)" />
          <circle cx={C} cy={C} r={OUTER_R + 17} fill="none" stroke="#fff" strokeWidth="2.5" />
          <circle cx={C} cy={C} r={OUTER_R - 17} fill="none" stroke="#fff" strokeWidth="2.5" />

          {/* small network nodes slowly circling the band */}
          <g>
            {Array.from({ length: 16 }).map((_, i) => {
              const a = (i / 16) * Math.PI * 2;
              return (
                <circle
                  key={i}
                  cx={C + OUTER_R * Math.cos(a)}
                  cy={C + OUTER_R * Math.sin(a)}
                  r={i % 4 === 0 ? 7 : 4}
                  fill="#fff"
                  opacity={i % 4 === 0 ? 1 : 0.8}
                />
              );
            })}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${C} ${C}`}
              to={`360 ${C} ${C}`}
              dur="80s"
              repeatCount="indefinite"
            />
          </g>

          {/* ===== Inner orbit rings (white) ===== */}
          {INNER_RINGS.map((r) => (
            <g key={r}>
              <circle cx={C} cy={C} r={r} fill="none" stroke="#fff" strokeWidth="9" opacity="0.4" filter="url(#whiteGlow)" />
              <circle cx={C} cy={C} r={r} fill="none" stroke="#fff" strokeWidth="3.5" opacity="0.95" />
            </g>
          ))}

          {/* ===== Connections (live, follow the suites) ===== */}
          {/* suite <-> suite */}
          {[0, 1, 2].map((i) => (
            <line
              key={`m${i}`}
              ref={(el) => { meshLineRefs.current[i] = el; }}
              stroke="#fff"
              strokeWidth="2"
              opacity="0.45"
              strokeLinecap="round"
            />
          ))}
          {suites.map((s, i) => (
            <g key={s.id}>
              {/* core -> suite */}
              <line
                ref={(el) => { coreLineRefs.current[i] = el; }}
                stroke="#fff"
                strokeWidth="3"
                opacity="0.75"
                strokeLinecap="round"
              />
              {/* suite -> FUTUROOT */}
              <line
                ref={(el) => { outerLineRefs.current[i] = el; }}
                stroke="#fff"
                strokeWidth="3"
                opacity="0.75"
                strokeLinecap="round"
              />
              {/* connector hub on the band */}
              <circle
                ref={(el) => { outerDotRefs.current[i] = el; }}
                r="13"
                fill="#fff"
                stroke={s.color}
                strokeWidth="4"
              />
              {/* pulses */}
              <circle ref={(el) => { corePulseRefs.current[i] = el; }} r="6" fill="#FF00B7" />
              <circle ref={(el) => { outerPulseRefs.current[i] = el; }} r="6" fill="#8A5CFF" />
            </g>
          ))}
        </svg>

        {/* ===== FUTUROOT pill ===== */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] text-center rounded-full border-2 border-white bg-white/95 backdrop-blur-md shadow-[0_10px_40px_rgba(27,20,102,0.25)]"
          style={{
            top: `${((C - OUTER_R) / VIEW) * 100}%`,
            padding: '0.8cqw 2.6cqw',
          }}
        >
          <div className="font-extrabold text-[#1B1466] tracking-wider" style={{ fontSize: '2.8cqw', lineHeight: 1.1 }}>
            FUTUROOT
          </div>
          <div className="text-[#555566]" style={{ fontSize: '1.3cqw' }}>
            Connecting Everything
          </div>
        </div>

        {/* ===== PerciVerse core ===== */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          style={{ width: '14%', aspectRatio: '1 / 1' }}
        >
          <span className="pv-pulse" />
          <span className="pv-pulse pv-pulse-2" />
          <div
            className="absolute rounded-full"
            style={{
              inset: '-22%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,0,183,0.28) 45%, transparent 70%)',
              filter: 'blur(6px)',
            }}
          />
          <div
            className="absolute rounded-full pv-spin"
            style={{
              inset: '-7%',
              background:
                'conic-gradient(from 0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 18%, rgba(255,0,183,0.7) 32%, rgba(255,255,255,0) 50%, rgba(138,92,255,0.8) 78%, rgba(255,255,255,0) 100%)',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px))',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px))',
            }}
          />
          <div
            className="relative w-full h-full rounded-full flex flex-col items-center justify-center overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 32% 24%, #C9B8FF 0%, #8A5CFF 32%, #5B35B1 68%, #2A1670 100%)',
              boxShadow:
                '0 18px 46px rgba(91,53,177,0.6), 0 0 60px rgba(255,0,183,0.4), inset 0 -10px 24px rgba(20,10,80,0.55), inset 0 5px 18px rgba(255,255,255,0.35)',
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: '7%', left: '16%', width: '46%', height: '28%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0))',
                filter: 'blur(2px)',
                transform: 'rotate(-18deg)',
              }}
            />
            <div
              className="absolute inset-0 rounded-full pv-breathe"
              style={{ background: 'radial-gradient(circle at 50% 55%, rgba(255,255,255,0.3), transparent 65%)' }}
            />
            <span
              className="relative text-white font-extrabold tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
              style={{ fontSize: '1.9cqw', lineHeight: 1.1 }}
            >
              PerciVerse
            </span>
          </div>
        </div>

        {/* ===== Suites: badge sits exactly on its ring ===== */}
        {suites.map((suite, index) => {
          const isOpen = activeSuite === suite.id || hoveredSuite === suite.id;
          const dimmed = hoveredSuite && hoveredSuite !== suite.id;

          return (
            <div
              key={suite.id}
              ref={(el) => { nodeRefs.current[index] = el; }}
              className="absolute cursor-pointer"
              style={{
                width: '9%',
                aspectRatio: '1 / 1',
                transform: 'translate(-50%, -50%)',
                zIndex: isOpen ? 80 : 40,
                opacity: dimmed ? 0.45 : 1,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={() => setHoveredSuite(suite.id)}
              onMouseLeave={() => setHoveredSuite(null)}
              onClick={() => setActiveSuite(activeSuite === suite.id ? null : suite.id)}
            >
              {/* badge */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center bg-white border-2"
                style={{
                  borderColor: suite.color,
                  boxShadow: `0 8px 24px ${suite.color}55, 0 0 0 4px rgba(255,255,255,0.7)`,
                  transform: isOpen ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div style={{ width: '62%', height: '62%' }}>
                  {suite.logo ? (
                    <img src={suite.logo} alt={suite.name} className="w-full h-full object-contain" draggable={false} />
                  ) : (
                    <FallbackIcon id={suite.id} color={suite.color} />
                  )}
                </div>
              </div>

              {/* name (absolute, so it never shifts the badge off the line) */}
              <span
                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-[#191923] rounded-full bg-white/90 px-[0.8cqw]"
                style={{ top: '112%', fontSize: '1.5cqw', lineHeight: 1.5 }}
              >
                {suite.name}
              </span>

              {isOpen && (
                <div
                  className="absolute left-1/2 bottom-full -translate-x-1/2 bg-white rounded-xl shadow-2xl border pointer-events-none"
                  style={{
                    marginBottom: '14%',
                    width: '26cqw',
                    padding: '1.6cqw',
                    borderColor: suite.color,
                  }}
                >
                  <div className="font-bold mb-1" style={{ color: suite.color, fontSize: '1.4cqw' }}>
                    {suite.category}
                  </div>
                  <div className="text-gray-700 leading-snug" style={{ fontSize: '1.3cqw' }}>
                    {suite.description}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <style jsx>{`
          .pv-pulse {
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            border: 2px solid rgba(255, 255, 255, 0.85);
            animation: pvPulse 3.6s ease-out infinite;
            pointer-events: none;
          }
          .pv-pulse-2 { animation-delay: 1.8s; }
          .pv-spin { animation: pvSpin 9s linear infinite; }
          .pv-breathe { animation: pvBreathe 3s ease-in-out infinite; }
          @keyframes pvPulse {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.9); opacity: 0; }
          }
          @keyframes pvSpin { to { transform: rotate(360deg); } }
          @keyframes pvBreathe {
            0%, 100% { opacity: 0.4; transform: scale(0.96); }
            50% { opacity: 0.9; transform: scale(1.04); }
          }
          @media (prefers-reduced-motion: reduce) {
            .pv-pulse, .pv-spin, .pv-breathe { animation: none; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PerciVerseOrbitalEcosystem;