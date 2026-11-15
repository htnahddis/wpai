const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const cIndex = file.indexOf('agents-carousel');
const cEnd = file.indexOf('</ul>', cIndex);
const carouselHtml = file.substring(cIndex, cEnd);

const matches = carouselHtml.match(/<li[\s\S]*?<\/li>/g) || [];
console.log('Total <li> in carousel:', matches.length);
matches.forEach((li, idx) => {
  const title = li.match(/<div class=\\"agent-card-title[^>]*><div>([^<]+)<\/div>/);
  console.log(`Li ${idx + 1}: ${title ? title[1] : 'no title'}`);
});
