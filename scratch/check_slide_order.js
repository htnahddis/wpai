const fs = require('fs');

const origHtml = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

// List titles in swiper
const cIndex = origHtml.indexOf('agents-carousel');
const cHtml = origHtml.substring(cIndex, cIndex + 30000);

const titles = [];
const regex = /<div class=\"agent-card-title[^\"]*\">\s*<div>([^<]+)<\/div>/g;
let m;
while ((m = regex.exec(cHtml)) !== null) {
  titles.push(m[1]);
}
console.log('Original slide titles in carousel:', titles);
