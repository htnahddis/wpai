const fs = require('fs');
const content = fs.readFileSync('src/data/agentStudio.data.ts', 'utf8');

const regex = /name:\s*"([^"]+)",[\s\S]*?categoryLabel:\s*"([^"]+)",[\s\S]*?tagline:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)"/g;
let m;
let count = 0;
while ((m = regex.exec(content)) !== null) {
  console.log(`${count + 1}. [${m[1]}] (${m[2]})`);
  console.log(`   Tagline: ${m[3]}`);
  console.log(`   Description: ${m[4].slice(0, 120)}...`);
  count++;
}
