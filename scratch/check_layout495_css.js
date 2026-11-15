const fs = require('fs');
const css = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

function findRules(prefix) {
  let pos = 0;
  while ((pos = css.indexOf(prefix, pos)) !== -1) {
    const start = Math.max(0, pos - 20);
    const end = Math.min(css.length, pos + 150);
    console.log(css.slice(start, end));
    pos += prefix.length;
  }
}

console.log('=== CSS rules for layout495 ===');
findRules('layout495');

console.log('=== CSS rules for w-tab ===');
findRules('w--tab-active');
