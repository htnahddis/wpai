const fs = require('fs');
const cssPath = 'c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/websitepages.shared.97086266a.min.css';
const css = fs.readFileSync(cssPath, 'utf8');
console.log('First 500 chars of CSS:', css.slice(0, 500));
