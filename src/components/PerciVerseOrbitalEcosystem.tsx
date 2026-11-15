'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

interface SuiteData {
  id: string;
  name: string;
  color: string;
  category: string;
  description: string;
  logo?: string | null;
}

const suites: SuiteData[] = [
  {
    id: 'percixpert',
    name: 'PerciXpert',
    color: '#1B1466',
    category: 'IMPLEMENTATION SUITE',
    description: 'AI-assisted S/4HANA delivery | Greenfield & Brownfield | Spans across all 7 project phases.',
    logo: '/perciXpert.png'
  },
  {
    id: 'percihub',
    name: 'PerciHub',
    color: '#D946A0',
    category: 'BUSINESS SUITE',
    description: 'Industry-specific agents | Built on Joule Studio | Sector-tailored Processes.',
    logo: null
  },
  {
    id: 'perciserve',
    name: 'PerciServe',
    color: '#9475D8',
    category: 'SUPPORT SUITE',
    description: 'AMS Journey Enhancement | Deflect L1 Tickets | Accelerate L2 and L3 Resolution.',
    logo: null
  },
  {
    id: 'percisuite',
    name: 'PerciSuite',
    color: '#00B7FF',
    category: 'PRODUCT SUITE',
    description: 'Industry-specific products | Portfolio: PerciDesk, PerciPlan, PerciBOT, PerciServe, PerciEstimate.',
    logo: '/percibot.png'
  }
];

const SAMPLES = 720;
const FRONT_GROW = 0.4;
const BACK_SHRINK = 0.5;
const BACK_DIM = 0.6;
const DRAG_THRESHOLD = 5;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const wrapSigned = (value: number) => value - Math.round(value);

const cubicBezier = (x1: number, y1: number, x2: number, y2: number) => {
  const sample = (a1: number, a2: number, t: number) =>
    ((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t * t + 3 * a1 * t;
  const slope = (a1: number, a2: number, t: number) =>
    3 * (1 - 3 * a2 + 3 * a1) * t * t + 2 * (3 * a2 - 6 * a1) * t + 3 * a1;
  return (x: number) => {
    if (x <= 0 || x >= 1) return x;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const s = slope(x1, x2, t);
      if (Math.abs(s) < 1e-6) break;
      t = clamp(t - (sample(x1, x2, t) - x) / s, 0, 1);
    }
    return sample(y1, y2, t);
  };
};

const EASINGS: Record<string, (t: number) => number> = {
  linear: (t: number) => t,
  easeIn: cubicBezier(0.42, 0, 1, 1),
  easeOut: cubicBezier(0, 0, 0.58, 1),
  easeInOut: cubicBezier(0.42, 0, 0.58, 1)
};

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

interface OrbitItemState {
  el: HTMLElement;
  t: string;
  o: string;
  z: string;
}

interface Drag {
  id: number;
  x: number;
  y: number;
  active: boolean;
  samples: [number, number][];
  rate: number;
  anchor: number;
  manual: number;
}

interface Seek {
  from: number;
  delta: number;
  t: number;
  dur: number;
}

interface EngineState {
  lut: Float32Array | null;
  length: number;
  front: number;
  yMid: number;
  yHalf: number;
  bbox: [number, number, number, number];
  width: number;
  height: number;
  scale: number;
  size: number;
  items: OrbitItemState[];
  lap: number;
  manual: number;
  glide: number;
  speed: number;
  drag: Drag | null;
  seek: Seek | null;
  hovered: boolean;
  hoverIndex: number;
  suppressUntil: number;
  introStart: number;
  introDone: boolean;
  visible: boolean;
  reduced: boolean;
  raf: number;
  last: number;
  destroyed: boolean;
}

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const PerciVerseOrbitalEcosystem: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeSuite, setActiveSuite] = useState<string | null>(null);
  const [hoveredSuite, setHoveredSuite] = useState<string | null>(null);
  
  const engineRef = useRef<{
    refresh: () => void;
    wake: () => void;
    destroy: () => void;
  } | null>(null);

  const baseWidth = 800;
  const radiusX = 450;
  const radiusY = 215;
  const rotation = -8;
  const duration = 50;
  const itemSize = 120;
  const depth = 0.7;
  const hoverScale = 1.15;
  const hoverSpeed = 0.2;
  const easing = 'easeInOut';

  const center = baseWidth / 2;

  const path = useMemo(() => {
    return `M ${center - radiusX} ${center} A ${radiusX} ${radiusY} 0 1 0 ${center + radiusX} ${center} A ${radiusX} ${radiusY} 0 1 0 ${center - radiusX} ${center}`;
  }, [center, radiusX, radiusY]);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const query = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

    const st: EngineState = {
      lut: null,
      length: 0,
      front: 0,
      yMid: 0,
      yHalf: 1,
      bbox: [0, 0, 1, 1],
      width: 0,
      height: 0,
      scale: 0,
      size: 0,
      items: [],
      lap: 0,
      manual: 0,
      glide: 0,
      speed: 1,
      drag: null,
      seek: null,
      hovered: false,
      hoverIndex: -1,
      suppressUntil: 0,
      introStart: -1,
      introDone: false,
      visible: typeof IntersectionObserver === 'undefined',
      reduced: !!query?.matches,
      raf: 0,
      last: 0,
      destroyed: false
    };

    st.speed = st.reduced ? 0 : 1;

    const collect = () => {
      st.items = Array.from(root.querySelectorAll('[data-orbit-item]') as NodeListOf<HTMLElement>).map(el => ({
        el,
        t: '',
        o: '',
        z: ''
      }));
    };

    const build = () => {
      const pathEl = root.querySelector('[data-orbit-path]') as SVGPathElement | null;
      let length = 0;
      try {
        length = pathEl ? pathEl.getTotalLength() : 0;
      } catch {
        length = 0;
      }
      if (!pathEl || !length || !isFinite(length)) {
        st.lut = null;
        return;
      }
      const lut = new Float32Array(SAMPLES * 2);
      const angle = (rotation * Math.PI) / 180;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const origin = baseWidth / 2;
      let x0 = Infinity;
      let x1 = -Infinity;
      let y0 = Infinity;
      let y1 = -Infinity;
      let front = 0;
      for (let i = 0; i < SAMPLES; i++) {
        const point = pathEl.getPointAtLength((i / SAMPLES) * length);
        const dx = point.x - origin;
        const dy = point.y - origin;
        const x = origin + dx * cos - dy * sin;
        const y = origin + dx * sin + dy * cos;
        lut[i * 2] = x;
        lut[i * 2 + 1] = y;
        x0 = Math.min(x0, x);
        x1 = Math.max(x1, x);
        y0 = Math.min(y0, y);
        y1 = Math.max(y1, y);
        if (y > lut[front * 2 + 1] + 1e-6) front = i;
      }
      st.lut = lut;
      st.length = length;
      st.front = front / SAMPLES;
      st.yMid = (y0 + y1) / 2;
      st.yHalf = Math.max(1e-3, (y1 - y0) / 2);
      const margin = (itemSize / 2) * (1 + depth * FRONT_GROW) * Math.max(1, hoverScale) + 2;
      st.bbox = [x0 - margin, y0 - margin, x1 + margin, y1 + margin];
    };

    const layout = () => {
      st.width = root.clientWidth;
      st.height = root.clientHeight;
      if (!st.lut) return;
      const [bx0, by0, bx1, by1] = st.bbox;
      // Generous inner orbit scale so revolving logos do not collide with the outer ring or FUTUROOT pill
      const innerOrbitScale = 0.72;
      const rawScale = Math.min(st.width / (bx1 - bx0), st.height / (by1 - by0));
      const scale = rawScale * innerOrbitScale;
      st.scale = scale > 0 && isFinite(scale) ? scale : 0;
      st.size = Math.round(itemSize * rawScale * 0.95);
      for (const it of st.items) {
        it.el.style.width = `${st.size}px`;
        it.el.style.height = `${st.size}px`;
      }
      if (!st.scale) return;
      const vw = st.width / st.scale;
      const vh = st.height / st.scale;
      const cx = (bx0 + bx1) / 2;
      const cy = (by0 + by1) / 2;
      root.querySelectorAll('[data-orbit-svg]').forEach(svg => {
        (svg as SVGElement).setAttribute('viewBox', `${cx - vw / 2} ${cy - vh / 2} ${vw} ${vh}`);
      });
    };

    const sample = (u: number): [number, number] => {
      const f = (((u % 1) + 1) % 1) * SAMPLES;
      const i0 = Math.floor(f) % SAMPLES;
      const i1 = (i0 + 1) % SAMPLES;
      const t = f - Math.floor(f);
      const lut = st.lut as Float32Array;
      return [lut[i0 * 2] + (lut[i1 * 2] - lut[i0 * 2]) * t, lut[i0 * 2 + 1] + (lut[i1 * 2 + 1] - lut[i0 * 2 + 1]) * t];
    };

    const progress = () => {
      const ease = EASINGS[easing] || EASINGS.linear;
      const whole = Math.floor(st.lap);
      return (whole + ease(st.lap - whole)) + st.manual;
    };

    const offsetOf = (index: number, count: number) => {
      return index / Math.max(1, count);
    };

    const write = (it: OrbitItemState, key: 't' | 'o' | 'z', prop: 'transform' | 'opacity' | 'zIndex', value: string) => {
      if (it[key] !== value) {
        it[key] = value;
        it.el.style[prop] = value;
      }
    };

    const render = (now: number) => {
      if (!st.lut || !st.scale) return;
      const p = progress();
      const count = st.items.length;
      const [bx0, by0, bx1, by1] = st.bbox;
      const cx = (bx0 + bx1) / 2;
      const cy = (by0 + by1) / 2;
      const half = st.size / 2;
      const introRunning = st.introStart >= 0;
      const elapsed = introRunning ? (now - st.introStart) / 1000 : 0;
      const spread = introRunning ? easeOutQuint(clamp(elapsed / 1.3, 0, 1)) : 1;
      const appear = introRunning ? clamp(elapsed / 0.45, 0, 1) : 1;

      for (let i = 0; i < count; i++) {
        const it = st.items[i];
        let u = p + offsetOf(i, count);
        if (introRunning) u = st.front + wrapSigned(u - st.front) * spread;
        const [x, y] = sample(u);
        const d = clamp((y - st.yMid) / st.yHalf, -1, 1);
        const w = (d + 1) / 2;
        let scale = 1 + depth * (FRONT_GROW * w - BACK_SHRINK * (1 - w));
        let opacity = 1 - depth * BACK_DIM * (1 - w);
        if (introRunning) {
          scale *= 0.7 + 0.3 * appear;
          opacity *= appear * appear * (3 - 2 * appear);
        }
        const sx = (x - cx) * st.scale + st.width / 2 - half;
        const sy = (y - cy) * st.scale + st.height / 2 - half;
        let z = depth > 0 ? (d <= 0 ? 10 + Math.round((d + 1) * 80) : 110 + Math.round(d * 80)) : 1;
        if (i === st.hoverIndex) z += 200;
        write(
          it,
          't',
          'transform',
          `translate3d(${sx.toFixed(2)}px, ${sy.toFixed(2)}px, 0px) scale(${scale.toFixed(4)})`
        );
        write(it, 'o', 'opacity', opacity > 0.999 ? '' : opacity.toFixed(3));
        write(it, 'z', 'zIndex', String(z));
      }
    };

    const frame = (now: number) => {
      st.raf = 0;
      if (st.destroyed) return;
      const dt = st.last ? clamp((now - st.last) / 1000, 0, 0.1) : 0;
      st.last = now;
      let busy = false;

      if (st.lut && st.scale && st.introStart === -1 && !st.introDone && st.visible) {
        if (!st.reduced) {
          st.introStart = now;
        } else {
          st.introDone = true;
        }
        root.removeAttribute('data-intro');
      }

      if (st.introStart >= 0) {
        if ((now - st.introStart) / 1000 >= 1.3) {
          st.introStart = -2;
          st.introDone = true;
        } else {
          busy = true;
        }
      }

      const want = st.hovered ? clamp(hoverSpeed, 0, 1) : 1;
      if (st.speed !== want) {
        st.speed += (want - st.speed) * (1 - Math.exp(-dt / 0.35));
        if (Math.abs(st.speed - want) < 0.002) st.speed = want;
        busy = true;
      }

      if (st.speed > 0 && duration > 0) {
        st.lap += (dt * st.speed) / duration;
        busy = true;
      }

      if (st.drag?.active) {
        busy = true;
      } else if (st.seek) {
        st.seek.t = Math.min(1, st.seek.t + dt / st.seek.dur);
        const e = st.seek.t < 0.5 ? 4 * st.seek.t ** 3 : 1 - Math.pow(-2 * st.seek.t + 2, 3) / 2;
        st.manual = st.seek.from + st.seek.delta * e;
        if (st.seek.t >= 1) st.seek = null;
        busy = true;
      } else if (st.glide) {
        st.manual += st.glide * dt;
        st.glide *= Math.exp(-dt / 0.7);
        if (Math.abs(st.glide) < 0.0004) st.glide = 0;
        busy = true;
      }

      render(now);
      const whole = Math.floor(st.lap);
      if (whole) st.lap -= whole;
      if (!st.drag && !st.seek) st.manual -= Math.floor(st.manual);
      if (busy && st.visible && !st.destroyed) st.raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (st.raf || st.destroyed || !st.visible) return;
      st.last = 0;
      st.raf = requestAnimationFrame(frame);
    };

    const local = (e: PointerEvent): [number, number] => {
      const r = root.getBoundingClientRect();
      const k = root.offsetWidth ? r.width / root.offsetWidth || 1 : 1;
      return [(e.clientX - r.left) / k, (e.clientY - r.top) / k];
    };

    const dragRate = () => {
      if (!st.lut || !st.scale) return 0;
      const a = sample(st.front - 3 / SAMPLES);
      const b = sample(st.front + 3 / SAMPLES);
      const along = ((b[0] - a[0]) / (6 / SAMPLES)) * st.scale;
      const floor = st.length * st.scale * 0.35;
      return Math.abs(along) < floor ? Math.sign(along || 1) * floor : along;
    };

    const itemIndex = (target: EventTarget | null) => {
      const el = target instanceof Element ? target.closest('[data-orbit-item]') : null;
      return el && root.contains(el) ? Number(el.getAttribute('data-orbit-item')) : -1;
    };

    const onEnter = () => {
      st.hovered = true;
      wake();
    };

    const onLeave = () => {
      st.hovered = false;
      st.hoverIndex = -1;
      wake();
    };

    const onOver = (e: PointerEvent) => {
      const index = itemIndex(e.target);
      if (index !== st.hoverIndex) {
        st.hoverIndex = index;
        if (st.lut) render(performance.now());
      }
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target instanceof Element && e.target.closest('[data-orbit-center]')) return;
      const [x, y] = local(e);
      st.drag = { id: e.pointerId, x, y, active: false, samples: [], rate: dragRate(), anchor: 0, manual: 0 };
    };

    const onMove = (e: PointerEvent) => {
      const d = st.drag;
      if (!d || e.pointerId !== d.id) return;
      const [x, y] = local(e);
      const along = x - d.x;
      if (!d.active) {
        if (Math.abs(along) < DRAG_THRESHOLD) return;
        if (Math.abs(y - d.y) > Math.abs(along)) {
          st.drag = null;
          return;
        }
        d.active = true;
        d.anchor = along;
        d.manual = st.manual;
        st.seek = null;
        st.glide = 0;
        try {
          root.setPointerCapture(e.pointerId);
        } catch {}
        root.setAttribute('data-dragging', '');
      }
      if (d.rate) st.manual = d.manual + (along - d.anchor) / d.rate;
      const now = performance.now();
      d.samples.push([now, along]);
      while (d.samples.length > 2 && now - d.samples[0][0] > 100) d.samples.shift();
      wake();
    };

    const endDrag = (e: PointerEvent, cancelled: boolean) => {
      const d = st.drag;
      if (!d || e.pointerId !== d.id) return;
      st.drag = null;
      if (!d.active) return;
      root.removeAttribute('data-dragging');
      try {
        root.releasePointerCapture(e.pointerId);
      } catch {}
      const now = performance.now();
      st.suppressUntil = now + 400;
      const s = d.samples;
      if (!cancelled && s.length > 1 && d.rate) {
        const [t0, a0] = s[0];
        const [t1, a1] = s[s.length - 1];
        if (t1 > t0 && now - t1 < 80) st.glide = clamp((((a1 - a0) / (t1 - t0)) * 1000) / d.rate, -3, 3);
      }
      wake();
    };

    const onUp = (e: PointerEvent) => endDrag(e, false);
    const onCancel = (e: PointerEvent) => endDrag(e, true);

    const onClick = (e: MouseEvent) => {
      if (performance.now() < st.suppressUntil) {
        e.preventDefault();
        e.stopPropagation();
        st.suppressUntil = 0;
        return;
      }
      const index = itemIndex(e.target);
      if (index >= 0) {
        setActiveSuite(suites[index].id);
      }
    };

    const onMotion = () => {
      st.reduced = !!query?.matches;
      wake();
    };

    root.addEventListener('pointerenter', onEnter);
    root.addEventListener('pointerleave', onLeave);
    root.addEventListener('pointerover', onOver);
    root.addEventListener('pointerdown', onDown);
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerup', onUp);
    root.addEventListener('pointercancel', onCancel);
    root.addEventListener('lostpointercapture', onCancel);
    root.addEventListener('click', onClick);
    query?.addEventListener?.('change', onMotion);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        layout();
        render(performance.now());
        wake();
      });
      resizeObserver.observe(root);
    }

    let intersection: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      intersection = new IntersectionObserver(
        entries => {
          st.visible = entries[entries.length - 1].isIntersecting;
          if (st.visible) wake();
        },
        { threshold: 0.05 }
      );
      intersection.observe(root);
    }

    const onVisibility = () => {
      if (!document.hidden) wake();
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', wake);

    const refresh = () => {
      collect();
      build();
      layout();
      render(performance.now());
      wake();
    };

    const destroy = () => {
      st.destroyed = true;
      if (st.raf) cancelAnimationFrame(st.raf);
      root.removeEventListener('pointerenter', onEnter);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('pointerover', onOver);
      root.removeEventListener('pointerdown', onDown);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerup', onUp);
      root.removeEventListener('pointercancel', onCancel);
      root.removeEventListener('lostpointercapture', onCancel);
      root.removeEventListener('click', onClick);
      query?.removeEventListener?.('change', onMotion);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', wake);
      resizeObserver?.disconnect();
      intersection?.disconnect();
    };

    engineRef.current = { refresh, wake, destroy };

    refresh();

    return () => {
      destroy();
    };
  }, [path, rotation, baseWidth, itemSize, depth, hoverScale, hoverSpeed, easing, duration]);

  useEffect(() => {
    engineRef.current?.wake();
  });

  return (
    <div className="w-full h-full bg-white flex items-center justify-center p-2 overflow-visible">
      <div
        ref={rootRef}
        className="relative w-full max-w-[1100px] aspect-[1.9/1] select-none cursor-grab active:cursor-grabbing mx-auto transform scale-95 sm:scale-100 lg:scale-108 xl:scale-112 origin-center transition-transform duration-300"
        data-intro=""
        data-draggable=""
      >
        {/* SVG Orbital Path */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          data-orbit-svg=""
          preserveAspectRatio="none"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <path
            data-orbit-path=""
            d={path}
            fill="none"
            stroke="rgba(91, 53, 177, 0.2)"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${rotation} ${center} ${center})`}
          />
        </svg>

        {/* FUTUROOT Outer Ring */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* FUTUROOT orbital ring */}
            <ellipse
              cx="600"
              cy="350"
              rx="585"
              ry="295"
              fill="none"
              stroke="rgba(27, 20, 102, 0.4)"
              strokeWidth="4"
              strokeDasharray="16 8"
              transform={`rotate(${rotation} 600 350)`}
            />
            
            {/* FUTUROOT Label - positioned on the outer ring */}
            <g>
              <g style={{ animation: 'floatLabel 6s ease-in-out infinite' }}>
                <rect
                  x="470"
                  y="5"
                  width="260"
                  height="80"
                  rx="40"
                  fill="rgba(255, 255, 255, 0.98)"
                  stroke="rgba(27, 20, 102, 0.3)"
                  strokeWidth="2"
                />
                <text x="600" y="55" fontSize="28" fontWeight="bold" fill="#1B1466" textAnchor="middle">
                  FUTUROOT
                </text>
                <text x="600" y="78" fontSize="14" fill="#777783" textAnchor="middle">
                  Text & Intelligence Layer
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* Central PerciVerse Core */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center"
          style={{
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle at 35% 25%, #7B5FE6, #5B35B1)',
            boxShadow: '0 12px 40px rgba(91, 53, 177, 0.4), inset 0 0 30px rgba(255,255,255,0.15)',
            zIndex: 50,
          }}
          data-orbit-center=""
        >
          {/* Animated inner glow */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)',
              animation: 'innerPulse 3s ease-in-out infinite',
            }}
          />
          
          <span className="text-white font-bold text-sm relative z-10 tracking-wide">PerciVerse</span>
        </div>

        {/* Orbiting Planets */}
        {suites.map((suite, index) => {
          const isActive = activeSuite === suite.id || hoveredSuite === suite.id;
          const isOtherHovered = hoveredSuite && hoveredSuite !== suite.id;
          
          return (
            <div
              key={suite.id}
              data-orbit-item={index}
              className="absolute left-0 top-0 will-change-[transform,opacity] cursor-pointer group"
              style={{
                width: `${itemSize}px`,
                height: `${itemSize}px`,
              }}
              onMouseEnter={() => setHoveredSuite(suite.id)}
              onMouseLeave={() => setHoveredSuite(null)}
              onClick={() => setActiveSuite(activeSuite === suite.id ? null : suite.id)}
            >
              <div
                className="relative w-full h-full flex flex-col items-center justify-center transition-all duration-500"
                style={{
                  background: 'transparent',
                  boxShadow: 'none',
                  opacity: isOtherHovered ? 0.3 : 1,
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {/* Suite Icon/Logo */}
                {suite.logo ? (
                  <img 
                    src={suite.logo}
                    alt={suite.name}
                    className="w-auto h-16 mb-2 relative z-10 object-contain"
                  />
                ) : (
                  <svg 
                    className="w-14 h-14 mb-1 relative z-10"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    {suite.id === 'percihub' && (
                      <>
                        <circle cx="20" cy="20" r="16" stroke="#191923" strokeWidth="2" opacity="0.8"/>
                        <circle cx="20" cy="20" r="8" fill="#191923" opacity="0.9"/>
                        <circle cx="20" cy="20" r="4" fill={suite.color}/>
                      </>
                    )}
                    {suite.id === 'perciserve' && (
                      <>
                        <circle cx="20" cy="20" r="16" stroke="#191923" strokeWidth="2" opacity="0.8"/>
                        <path d="M14 20 Q20 14 26 20 Q20 26 14 20" stroke="#191923" strokeWidth="2" fill="none"/>
                        <circle cx="20" cy="20" r="3" fill="#191923"/>
                      </>
                    )}
                  </svg>
                )}
                
                <span className="text-[#191923] font-bold text-xs relative z-10 tracking-wide">{suite.name}</span>
                
                {/* Description Panel on Hover */}
                {isActive && (
                  <div
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-lg p-4 shadow-lg border z-50"
                    style={{ 
                      borderColor: suite.color,
                      minWidth: '200px',
                      maxWidth: '280px',
                    }}
                  >
                    <div className="text-xs font-semibold mb-1" style={{ color: suite.color }}>
                      {suite.category}
                    </div>
                    <div className="text-[11px] text-gray-700 leading-relaxed">
                      {suite.description}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Legend */}
      <div className="lg:hidden mt-8 grid grid-cols-2 gap-3 w-full max-w-[800px]">
        {suites.map((suite) => (
          <div
            key={suite.id}
            className="p-3 rounded-lg border bg-white"
            style={{ borderColor: suite.color }}
          >
            <div className="text-xs font-bold mb-1" style={{ color: suite.color }}>
              {suite.category}
            </div>
            <div className="text-sm font-semibold text-gray-900">{suite.name}</div>
            <div className="text-xs text-gray-600 mt-1">{suite.description}</div>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes innerPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @keyframes particlePulse {
          0%, 100% {
            opacity: 0.2;
            r: 2;
          }
          50% {
            opacity: 0.5;
            r: 4;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @keyframes floatLabel {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp,
          [style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PerciVerseOrbitalEcosystem;
