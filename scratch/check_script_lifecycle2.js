const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const sIdx = file.indexOf('if (!SwiperClass');
console.log(file.substring(sIdx - 200, sIdx + 1200));
