const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const start = content.indexOf('Build powerful AI agents in just a few steps');
const end = content.indexOf('Agents for every team');
console.log(content.slice(start, end));
