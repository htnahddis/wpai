const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const regex = /(background-color-black|bg-black|#000|black)/gi;
let m;
const matches = [];
while ((m = regex.exec(content)) !== null) {
  const s = Math.max(0, m.index - 40);
  const e = Math.min(content.length, m.index + 60);
  matches.push({ pos: m.index, text: content.slice(s, e).replace(/\n/g, ' ') });
}

console.log('Matches for black:', matches.length);
matches.forEach((m, i) => console.log(i + ': ' + m.text));
