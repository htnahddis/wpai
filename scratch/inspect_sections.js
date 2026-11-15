const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

// Where does the hero container start?
const heroStart = html.indexOf('class="container-agents-hero"');
console.log('heroStart index:', heroStart);

// Let's find the element containing heroStart
const beforeHero = html.slice(heroStart - 500, heroStart + 100);
console.log('Before hero:', beforeHero);

// Where does the FAQ end or footer start?
const faqIndex = html.indexOf('class="agents-faq"');
console.log('faqIndex:', faqIndex);

const footerIndex = html.indexOf('class="footer_component"');
console.log('footerIndex:', footerIndex);

const afterFaq = html.slice(faqIndex, faqIndex + 4000);
console.log('After faq preview:', afterFaq.slice(0, 500));
