const fs = require('fs');
const sharedCss = fs.readFileSync('public/The AI Workspace for People & Agents _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

const targetClasses = [
  'hp-agents_section',
  'hp-agents_h-wrapper',
  'is-context',
  'hp-agents_h2',
  'is-work-in-context',
  'is-test',
  'hp-agents_subtitle-wrapper',
  'hp-agents_h-subtitle',
  'hp-agents-context_track',
  'hp-agents-context_wrapper',
  'hp-agents-context_animation-area',
  'hp-agents-context_center-agent',
  'hp-agents-content_center-agent',
  'hp-agents-content_center-agent-color',
  'hp-agents-context_floating-item'
];

// Split sharedCss by } to get rules
const rawRules = sharedCss.split('}');
const matchedRules = [];

rawRules.forEach(r => {
  const trimmed = r.trim();
  if (!trimmed) return;
  for (const c of targetClasses) {
    if (trimmed.includes('.' + c)) {
      matchedRules.push(trimmed + '}');
      break;
    }
  }
});

console.log('Matched rules count:', matchedRules.length);
fs.writeFileSync('scratch/work_in_context.css', matchedRules.join('\n'), 'utf8');
console.log('Saved to scratch/work_in_context.css');
