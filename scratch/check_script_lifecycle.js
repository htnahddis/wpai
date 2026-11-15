const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const sIdx = file.indexOf('const [scriptsLoaded');
console.log(file.substring(sIdx, sIdx + 1200));
