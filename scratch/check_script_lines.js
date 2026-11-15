const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const lines = file.split('\n');
console.log('Total lines:', lines.length);
// print around Script tags
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<Script') || lines[i].includes('initSwiper')) {
    console.log(`Line ${i}: ${lines[i]}`);
  }
}
