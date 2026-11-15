const fs = require('fs');

// Read the current TSX
let tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

// 1. Extract PERCIPERE_AGENT_STUDIO_HTML
const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
if (!match) {
  console.error('Could not find PERCIPERE_AGENT_STUDIO_HTML');
  process.exit(1);
}

let html = JSON.parse('"' + match[1] + '"');

console.log('Original HTML length:', html.length);

// Let's verify we can find the carousel slides
const slideSplit = html.split('<li class="swiper-slide');
console.log('Slide count found:', slideSplit.length - 1);

// Let's verify we can find the Enterprise agents section
const eaIndex = html.indexOf('Enterprise agents');
console.log('Enterprise agents found at:', eaIndex);
