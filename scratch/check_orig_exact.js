const fs = require('fs');

const origHtml = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

// 1. Inspect hero top before H1
const h1Idx = origHtml.indexOf('heading-style-h1 for-agents');
console.log('=== Original Hero before H1 ===');
console.log(origHtml.substring(h1Idx - 500, h1Idx + 100));

// 2. Inspect Ready-made agents section in origHtml
const rmIdx = origHtml.indexOf('Ready-made agents');
console.log('=== Original Ready-made agents section ===');
const rmSectionStart = origHtml.lastIndexOf('<section', rmIdx);
const rmSectionEnd = origHtml.indexOf('</section>', rmIdx) + 10;
console.log(origHtml.substring(rmSectionStart, rmSectionEnd));
