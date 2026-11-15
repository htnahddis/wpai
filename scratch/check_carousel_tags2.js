const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const idx = file.indexOf('agents-carousel');
console.log('agents-carousel at', idx);
console.log(file.substring(idx - 50, idx + 400));
