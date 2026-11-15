const fs = require('fs');

const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

// Check swiper initialization
const initIndex = file.indexOf('new Swiper');
if (initIndex !== -1) {
  console.log('--- Swiper Init Code ---');
  console.log(file.substring(initIndex - 100, initIndex + 600));
} else {
  console.log('Swiper init NOT found in tsx');
}

// Check if swiper bundle css or js is imported
const imports = file.split('\n').filter(l => l.includes('swiper') || l.includes('css') || l.includes('Script'));
console.log('--- Imports / Scripts ---');
console.log(imports.join('\n'));

// Check agents-carousel markup
const cIndex = file.indexOf('agents-carousel');
if (cIndex !== -1) {
  console.log('--- Carousel markup snippet in TSX ---');
  console.log(file.substring(cIndex - 100, cIndex + 600));
}
