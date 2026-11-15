const fs = require('fs');
const content = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

let pos = 0;
while ((pos = content.indexOf('arrow-for-agents', pos)) !== -1) {
  console.log('--- Context at', pos, '---');
  console.log(content.substring(Math.max(0, pos - 150), pos + 150));
  pos += 16;
}
