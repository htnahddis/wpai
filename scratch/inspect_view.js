const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const regex = /<img[^>]+src=\\?"([^"\\\\]+)\\?"/g;
let m;
const imgs = [];
while ((m = regex.exec(content)) !== null) {
  imgs.push(m[1]);
}
console.log('Total img elements:', imgs.length);
imgs.forEach((src, i) => console.log(i + ': ' + decodeURIComponent(src)));
