const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const s = content.indexOf('export default function');
console.log(content.slice(s));
