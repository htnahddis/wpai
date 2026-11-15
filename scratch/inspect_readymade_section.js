const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const startIdx = file.indexOf('Enterprise agents');
console.log('Context from Enterprise agents:');
const sectionHtml = file.substring(startIdx - 150, startIdx + 8000);
console.log(sectionHtml.slice(0, 4000));
