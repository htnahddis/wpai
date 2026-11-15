const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

function inspectSection(title, length = 3000) {
  const pos = content.indexOf(title);
  console.log(`\n=================== SECTION: ${title} (pos: ${pos}) ===================`);
  if (pos !== -1) {
    console.log(content.slice(pos, pos + length));
  } else {
    console.log('NOT FOUND');
  }
}

inspectSection('Build powerful AI agents in just a few steps', 2500);
inspectSection('Agents for every team', 4000);
inspectSection('The foundation behind every agent', 3000);
inspectSection('AI you can trust', 2500);
inspectSection('Frequently asked questions', 2500);
