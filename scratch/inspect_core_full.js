const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const s = content.indexOf('Core capabilities');
const e = content.indexOf('AI you can trust');
const coreSection = content.slice(s - 200, e);

console.log('=== CORE CAPABILITIES FULL HTML ===');
console.log(coreSection);
