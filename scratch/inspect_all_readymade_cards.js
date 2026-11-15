const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const startIdx = file.indexOf('Enterprise agents');
const endIdx = file.indexOf('</section>', startIdx);
const sectionHtml = file.substring(startIdx - 100, endIdx + 10);

const cards = sectionHtml.match(/agents_readymade-card[^"\\]*/g) || [];
console.log('Cards found in this section:', cards.length);
cards.forEach(c => console.log(' -', c));

// Print text of each card
const h3s = sectionHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>|<div class=\\"agents_h3\\">([\s\S]*?)<\/div>/g) || [];
console.log('Headings found:');
h3s.forEach(h => console.log(' -', h));
