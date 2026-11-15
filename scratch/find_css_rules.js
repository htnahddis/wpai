const fs = require('fs');
const path = require('path');

const cssDir = 'public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files';
const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

const keywords = [
  'agents-carousel',
  'swiper-agents-comp',
  'for-agents',
  'splide-inner-card',
  'carousel-button-style-v1',
  'agent-card-title',
  'agent-01',
  'agent-02',
  'agent-03',
  'agent-04',
  'ai-agent-vid-26',
  'splide-agents-content-card'
];

files.forEach(f => {
  const content = fs.readFileSync(path.join(cssDir, f), 'utf8');
  keywords.forEach(kw => {
    if (content.includes(kw)) {
      console.log(`Found "${kw}" in ${f}`);
      // Find rules
      const regex = new RegExp(`[^{}]*${kw}[^{}]*\\{[^{}]*\\}`, 'g');
      let m;
      let count = 0;
      while ((m = regex.exec(content)) !== null && count < 5) {
        console.log(`  Rule: ${m[0].trim().replace(/\s+/g, ' ').slice(0, 200)}`);
        count++;
      }
    }
  });
});
