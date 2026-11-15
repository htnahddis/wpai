const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const faqIndex = html.indexOf('class="agents-faq"');
// Find where the FAQ closing tag is
const faqSectionEnd = html.indexOf('</section>', faqIndex);
console.log('FAQ section starts at:', faqIndex, 'ends at:', faqSectionEnd);

const afterFaqSection = html.slice(faqSectionEnd, faqSectionEnd + 2000);
console.log('After FAQ section:', afterFaqSection);
