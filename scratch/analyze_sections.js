const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const expertPos = content.indexOf('Expert agents');
console.log('Expert agents pos:', expertPos);

const sub = content.slice(expertPos);

// Match all taglines
const taglineRegex = /class=\\"agents-tagline\\">([^<]+)<\/div>/g;
let m;
const taglines = [];
while ((m = taglineRegex.exec(sub)) !== null) {
  taglines.push(m[1]);
}
console.log('Taglines found:', taglines);

// Match all h2s and h3s
const headingRegex = /<(h[234]|div)[^>]*class=\\"[^\\"]*(?:agents_h2|agents_h3|agents-tagline)[^\\"]*\\">([^<]+)<\/\1>/g;
const headings = [];
while ((m = headingRegex.exec(sub)) !== null) {
  headings.push({ tag: m[1], text: m[2] });
}
console.log('Headings found:', headings);

// Find any links (href)
const hrefRegex = /href=\\"([^\\"]+)\\"/g;
const hrefs = new Set();
while ((m = hrefRegex.exec(sub)) !== null) {
  hrefs.add(m[1]);
}
console.log('Hrefs found in sections:', Array.from(hrefs));

// Find any remaining monday mentions
const mondayRegex = /monday/gi;
const mondayMatches = [];
while ((m = mondayRegex.exec(sub)) !== null) {
  const start = Math.max(0, m.index - 30);
  const end = Math.min(sub.length, m.index + 60);
  mondayMatches.push(sub.slice(start, end).replace(/\n/g, ' '));
}
console.log('Monday matches count:', mondayMatches.length);
mondayMatches.forEach((s, i) => console.log(i + ': ' + s));
