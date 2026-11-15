const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const cIndex = file.indexOf('agents-carousel');
const cEnd = file.indexOf('carousel-controls-center', cIndex);
const carouselHtml = file.substring(cIndex, cEnd);

const parts = carouselHtml.split('<li class=\\"swiper-slide');
console.log('Total swiper-slide split count:', parts.length - 1);

parts.slice(1).forEach((p, idx) => {
  const title = p.match(/<div class=\\"agent-card-title[^>]*><div>([^<]+)<\/div>/);
  console.log(`Slide ${idx + 1}: ${title ? title[1] : 'no title'}`);
});
