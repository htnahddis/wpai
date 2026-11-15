const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const cIndex = file.indexOf('agents-carousel');
const cEnd = file.indexOf('</ul>', cIndex);
const carouselHtml = file.substring(cIndex, cEnd);

// Split into slides
const slides = carouselHtml.split('<li class=\\"swiper-slide for-agents');
console.log('Total slides in carousel:', slides.length - 1);

slides.slice(1).forEach((slide, idx) => {
  const titleMatch = slide.match(/<div class=\\"agent-card-title[^>]*><div>([^<]+)<\/div>/);
  const hoverHMatch = slide.match(/<h4[^>]*class=\\"agent-hover-h[^>]*>([^<]+)<\/h4>/);
  const innerCardClass = slide.match(/class=\\"splide-inner-card ([^"]+)\\"/);
  console.log(`Slide ${idx + 1}: Title="${titleMatch ? titleMatch[1] : ''}", HoverH="${hoverHMatch ? hoverHMatch[1] : ''}", CardClass="${innerCardClass ? innerCardClass[1] : ''}"`);
});
