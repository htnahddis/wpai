const fs = require('fs');
const file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const sIdx = file.indexOf('initSwiper();');
console.log('initSwiper index:', sIdx);
if (sIdx !== -1) {
  console.log(file.substring(sIdx - 100, sIdx + 400));
} else {
  console.log('initSwiper() is NEVER called or called differently');
  const allInit = file.match(/initSwiper/g);
  console.log('matches:', allInit);
}
