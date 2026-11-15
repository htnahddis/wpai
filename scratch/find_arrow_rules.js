const fs = require('fs');
const content = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

const regex = /[^{}]*arrow-for-agents[^{}]*\{[^{}]*\}/gi;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(m[0].trim());
}
