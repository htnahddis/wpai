const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const regex = /<section[^>]*>/g;
let m;
while ((m = regex.exec(content)) !== null) {
  const start = m.index;
  const snippet = content.slice(start, start + 300);
  // find first heading inside this section
  const hMatch = snippet.match(/<(h[1-6]|div)[^>]*class=\\"[^\\"]*(?:agents_h[1-6]|agents-tagline|heading-style-h1)[^\\"]*\\">([^<]+)<\/\1>/);
  console.log('SECTION tag:', m[0]);
  if (hMatch) {
    console.log('   Heading:', hMatch[2]);
  } else {
    // peek first 100 chars
    console.log('   Snippet:', snippet.slice(0, 100).replace(/\n/g, ' '));
  }
}
