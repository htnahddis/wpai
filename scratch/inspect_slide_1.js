const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const cIndex = file.indexOf('agents-carousel');
const cEnd = file.indexOf('carousel-controls-center', cIndex);
const carouselHtml = file.substring(cIndex, cEnd);

const parts = carouselHtml.split('<li class=\\"swiper-slide');
console.log('=== Slide 1 ===');
console.log(parts[1].slice(0, 1500));
