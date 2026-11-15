const fs = require('fs');
const css = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/websitepages.shared.97086266a.min.css', 'utf8');

// Find all CSS rules matching splide-inner-card or agents-carousel
const rules = css.match(/[^{}]*(?:splide-inner-card|agents-carousel|swiper-agents|agent-card)[^{]*\{[^}]*\}/gi);
console.log('Matching rules count:', rules ? rules.length : 0);
if (rules) {
  console.log(rules.slice(0, 20).join('\n\n'));
}
