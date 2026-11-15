const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const startIdx = file.indexOf('Enterprise agents');
const endIdx = file.indexOf('</section>', startIdx);
console.log(file.substring(startIdx - 100, endIdx + 10));
