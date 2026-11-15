const fs = require('fs');
const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const cStart = html.indexOf('<div class="swiper agents-carousel">');
const cControls = html.indexOf('<div class="carousel-controls-center', cStart);
const cEnd = html.lastIndexOf('</ul>', cControls) + 5;

const carouselHtml = html.substring(cStart, cEnd);
const splits = carouselHtml.split('<li class="swiper-slide for-agents"');
console.log('Real slide count:', splits.length - 1);
