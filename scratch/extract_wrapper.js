const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const mainWrapperStart = html.indexOf('<section class="m_main-wrapper">');
const faqIndex = html.indexOf('class="agents-faq"');
const faqSectionEnd = html.indexOf('</section>', faqIndex);
// The main wrapper ends right after </section></section>
const mainWrapperEnd = html.indexOf('</section>', faqSectionEnd + 10) + 10;

console.log('Main wrapper from', mainWrapperStart, 'to', mainWrapperEnd);

let mainContent = html.slice(mainWrapperStart, mainWrapperEnd);
console.log('Main content length:', mainContent.length);

// Replace relative paths './Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/' with '/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/'
mainContent = mainContent.split('./Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/').join('/Free%20AI%20Agent%20Builder%20_%20Build%20your%20Agents%20with%20AI%20_%20monday.com_files/');

fs.writeFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', mainContent);
console.log('Saved scratch/extracted_main_wrapper.html');
