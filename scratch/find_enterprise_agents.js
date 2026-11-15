const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

let pos = 0;
while ((pos = file.toLowerCase().indexOf('enterprise agents', pos)) !== -1) {
  console.log('Found "enterprise agents" at', pos);
  console.log(file.substring(Math.max(0, pos - 200), pos + 600));
  pos += 18;
}
