const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const s = content.indexOf('agents-bg-section');
const e = content.indexOf('agents-faq');
console.log(content.slice(s - 50, e));
