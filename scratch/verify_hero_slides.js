const fs = require('fs');
const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const cStart = html.indexOf('<div class="swiper agents-carousel">');
const cControls = html.indexOf('<div class="carousel-controls-center', cStart);
const cEnd = html.lastIndexOf('</ul>', cControls) + 5;

const carouselHtml = html.substring(cStart, cEnd);
const splits = carouselHtml.split('<li class="swiper-slide for-agents"');

splits.slice(1).forEach((s, idx) => {
  const t = s.match(/<div class="agent-card-title[^>]*><div>([^<]+)<\/div>/);
  const h = s.match(/<h4[^>]*class="agent-hover-h[^>]*>([^<]+)<\/h4>/);
  console.log(`Slide ${idx + 1}: Title="${t ? t[1] : ''}", Hover="${h ? h[1] : ''}"`);
});
