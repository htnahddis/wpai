const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const s = content.indexOf('background-color-black');
const e = content.indexOf('</section>', s) + 10;
console.log('Core section length:', e - s);
console.log(content.slice(s, s + 1500));
