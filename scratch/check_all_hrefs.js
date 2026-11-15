const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const regex = /href=\\"([^\\"]+)\\"/g;
let m;
const hrefs = [];
while ((m = regex.exec(content)) !== null) {
  hrefs.push(m[1]);
}
console.log('Total href attributes:', hrefs.length);
const uniqueHrefs = Array.from(new Set(hrefs));
console.log('Unique hrefs:', uniqueHrefs);
