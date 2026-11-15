const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const mainWrapperStart = html.indexOf('<section class="m_main-wrapper">');
console.log('mainWrapperStart:', mainWrapperStart);

const footerStart = html.indexOf('<footer');
console.log('footerStart:', footerStart);

const bodyEnd = html.indexOf('</body>');
console.log('bodyEnd:', bodyEnd);

// Let's find what's after faqIndex
const faqIndex = html.indexOf('class="agents-faq"');
// Let's look for the closing of m_main-wrapper
const afterMain = html.slice(faqIndex);
console.log('From FAQ to end length:', afterMain.length);

// Let's see what's after FAQ in the last 5000 chars of HTML
console.log('End of file preview:', html.slice(bodyEnd - 1500, bodyEnd));
