const fs = require('fs');
const content = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

function findRules(sel) {
  console.log(`\n=== Rules matching ${sel} ===`);
  const regex = new RegExp(`[^{}]*${sel}[^{}]*\\{[^{}]*\\}`, 'gi');
  let m;
  let count = 0;
  while ((m = regex.exec(content)) !== null && count < 10) {
    console.log(m[0].trim());
    count++;
  }
}

findRules('carousel-controls-center');
findRules('arrow-for-agents');
