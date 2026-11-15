const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const backticks = (html.match(/`/g) || []).length;
const dollarBrace = (html.match(/\$\{/g) || []).length;
console.log('Backticks count:', backticks);
console.log('Dollar-brace count:', dollarBrace);
