const fs = require('fs');
const tsx = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');
const match = tsx.match(/const PERCIPERE_AGENT_STUDIO_HTML = "([\s\S]*?)";\s*export default function/);
const html = JSON.parse('"' + match[1] + '"');

const compStart = html.indexOf('<div style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="swiper-agents-comp">');

// Find where swiper-notification is
const notifIdx = html.indexOf('<span class="swiper-notification"', compStart);
const compEnd = html.indexOf('</div>', notifIdx) + 6;

console.log('compStart:', compStart);
console.log('compEnd:', compEnd);
console.log('Snippet right after compEnd:');
console.log(html.substring(compEnd, compEnd + 200));
