const fs = require('fs');
const content = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

function printRange(name, startStr, endStr) {
  const start = content.indexOf(startStr);
  const end = endStr ? content.indexOf(endStr, start) : start + 3000;
  console.log(`\n============================= ${name} =============================`);
  console.log(content.slice(start, end !== -1 ? end : start + 3000));
}

printRange('1. BUILD IN A FEW STEPS', 'Build powerful AI agents in just a few steps', 'Agents for every team');
printRange('2. AGENTS FOR EVERY TEAM', 'Agents for every team', 'Core capabilities');
printRange('3. CORE CAPABILITIES', 'Core capabilities', 'AI you can trust');
printRange('4. AI YOU CAN TRUST', 'AI you can trust', 'Ready to amplify your enterprise impact');
