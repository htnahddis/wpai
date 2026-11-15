const fs = require('fs');

const origHtml = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

// Find carousel scripts
const scripts = origHtml.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('Total scripts in orig:', scripts.length);
scripts.forEach((s, idx) => {
  if (s.toLowerCase().includes('agents-carousel') || s.toLowerCase().includes('coverflow') || s.toLowerCase().includes('swiper')) {
    console.log(`--- Script ${idx} ---`);
    console.log(s);
  }
});

// Let's also find the markup of agents-carousel in origHtml
const cIndex = origHtml.indexOf('agents-carousel');
if (cIndex !== -1) {
  console.log('--- Carousel markup context ---');
  console.log(origHtml.substring(cIndex - 200, cIndex + 800));
}
