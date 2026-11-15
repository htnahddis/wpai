const fs = require('fs');
const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');
const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const idx = html.indexOf('swiper-agents-comp');
console.log('Context before:');
console.log(html.substring(idx - 300, idx));

// Find the end of swiper-agents-comp
// It starts with <div ... class="swiper-agents-comp">
const compStart = html.lastIndexOf('<div', idx);
console.log('compStart at', compStart);
console.log(html.substring(compStart, compStart + 200));

// Find where swiper-agents-comp ends
// Look for what comes after swiper-agents-comp
const nextSection = html.indexOf('</section>', idx);
console.log('Next section at', nextSection);
console.log(html.substring(nextSection - 300, nextSection + 300));
