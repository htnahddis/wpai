// Test concentric clearance between inner and outer orbits
const outerRx = 580;
const outerRy = 290; // Aspect 2.0

// Inner orbit scaled in the 1200x700 viewBox coordinates:
// Outer ellipse is cx=600, cy=350, rx=580, ry=290
// Let's test inner orbit with rx = 410, ry = 200 (aspect 2.05, ~71% of outer)
const innerRx = 410;
const innerRy = 200;

console.log('Outer rx, ry:', outerRx, outerRy);
console.log('Inner rx, ry:', innerRx, innerRy);

[0, 45, 90, 135, 180, 225, 270, 315].forEach(deg => {
  const rad = deg * Math.PI / 180;
  const outerX = outerRx * Math.cos(rad);
  const outerY = outerRy * Math.sin(rad);
  const outerDist = Math.sqrt(outerX * outerX + outerY * outerY);

  const innerX = innerRx * Math.cos(rad);
  const innerY = innerRy * Math.sin(rad);
  const innerDist = Math.sqrt(innerX * innerX + innerY * innerY);

  const clearance = outerDist - innerDist;
  console.log(`Angle ${deg}°: Outer dist = ${outerDist.toFixed(1)}px, Inner dist = ${innerDist.toFixed(1)}px -> Clearance = ${clearance.toFixed(1)}px`);
});
