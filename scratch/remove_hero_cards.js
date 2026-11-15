const fs = require('fs');

let tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
if (!match) {
  console.error('Could not find PERCIPERE_AGENT_STUDIO_HTML');
  process.exit(1);
}

let html = JSON.parse('"' + match[1] + '"');

const compStart = html.indexOf('<div style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="swiper-agents-comp">');

if (compStart === -1) {
  console.error('Could not find compStart');
  process.exit(1);
}

const notifIdx = html.indexOf('<span class="swiper-notification"', compStart);
const compEnd = html.indexOf('</div>', notifIdx) + 6;

console.log('Removing from', compStart, 'to', compEnd);
html = html.substring(0, compStart) + '<div class="m_spacer-3rem"></div>' + html.substring(compEnd);

const encodedHtml = JSON.stringify(html).slice(1, -1);
tsx = tsx.replace(
  /const PERCIPERE_AGENT_STUDIO_HTML = "[\s\S]*?";\s*export default function/,
  `const PERCIPERE_AGENT_STUDIO_HTML = "${encodedHtml}";\n\nexport default function`
);

fs.writeFileSync('src/components/views/MondayAgentStudioClonedView.tsx', tsx, 'utf8');
console.log('Successfully removed hero carousel cards from MondayAgentStudioClonedView.tsx!');
