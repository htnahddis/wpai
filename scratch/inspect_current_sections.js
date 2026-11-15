const fs = require('fs');
const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');
const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const idx = html.indexOf('percipere-scroll-stack');
console.log('=== percipere-scroll-stack snippet ===');
console.log(html.substring(idx - 100, idx + 1200));

// Check hero section carousel
const cIdx = html.indexOf('agents-carousel');
console.log('=== agents-carousel snippet ===');
console.log(html.substring(cIdx - 100, cIdx + 400));
