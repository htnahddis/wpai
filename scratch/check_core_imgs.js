const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const s = content.indexOf('Core capabilities');
const e = content.indexOf('AI you can trust');
const core = content.slice(s, e);

// Find all img tags in core
const imgRegex = /<img[^>]+src=\\"([^\\"]+)\\"[^>]*>/g;
let m;
while ((m = imgRegex.exec(core)) !== null) {
  console.log('IMG in Core:', decodeURIComponent(m[1]));
}
