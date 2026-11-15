const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const sIdx = file.indexOf('}, [');
console.log('dependency array:');
console.log(file.substring(sIdx, sIdx + 100));
