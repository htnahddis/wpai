const fs = require('fs');
const file = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const startIdx = file.indexOf('Ready-made agents');
const endIdx = file.indexOf('</section>', startIdx);
console.log('Original Ready-made section HTML:');
const sectionHtml = file.substring(startIdx - 100, endIdx + 10);
const cards = sectionHtml.match(/class="[^"]*agents_readymade-card[^"]*"/g) || [];
console.log('Cards found in orig HTML:', cards.length);
cards.forEach(c => console.log(' -', c));

const h3s = sectionHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>|<div class="agents_h3">([\s\S]*?)<\/div>/g) || [];
console.log('Headings in orig:');
h3s.forEach(h => console.log(' -', h));
