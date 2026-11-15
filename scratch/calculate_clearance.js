// Test script to calculate exact coordinates with different scale factors
const containerW = 1100;
const containerH = 550; // aspect 2/1

const baseWidth = 800;
const radiusX = 480;
const radiusY = 200;
const rotation = -8;
const itemSize = 130;
const depth = 0.7;
const FRONT_GROW = 0.35;
const hoverScale = 1.15;

const origin = baseWidth / 2;
const margin = (itemSize / 2) * (1 + depth * FRONT_GROW) * Math.max(1, hoverScale) + 2;

// Let's test inner scales: 1.0 (current), 0.75, 0.72, 0.70
[1.0, 0.75, 0.72, 0.70].forEach(factor => {
  console.log(`\n=== SCALE FACTOR: ${factor} ===`);
  const bx0 = origin - radiusX - margin;
  const bx1 = origin + radiusX + margin;
  const by0 = origin - radiusY - margin;
  const by1 = origin + radiusY + margin;
  
  const rawScale = Math.min(containerW / (bx1 - bx0), containerH / (by1 - by0));
  const effectiveScale = rawScale * factor;
  
  const spanX = (radiusX * 2) * effectiveScale;
  const spanY = (radiusY * 2) * effectiveScale;
  
  console.log(`Inner Orbit Width Span: ${spanX.toFixed(1)}px (Container: ${containerW}px)`);
  console.log(`Inner Orbit Height Span: ${spanY.toFixed(1)}px (Container: ${containerH}px)`);
  
  const outerWidthSpan = (580 * 2 / 1200) * containerW;
  const outerHeightSpan = (290 * 2 / 700) * containerH;
  
  console.log(`Outer Ring Width Span: ${outerWidthSpan.toFixed(1)}px`);
  console.log(`Outer Ring Height Span: ${outerHeightSpan.toFixed(1)}px`);
  
  const horizontalClearance = (outerWidthSpan - spanX) / 2;
  const verticalClearance = (outerHeightSpan - spanY) / 2;
  
  console.log(`Horizontal Clearance per side: ${horizontalClearance.toFixed(1)}px`);
  console.log(`Vertical Clearance per side: ${verticalClearance.toFixed(1)}px`);
});
