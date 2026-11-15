const fs = require('fs');
const html = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const prevIdx = html.indexOf('swiper-button-prev');
console.log('prevIdx:', prevIdx);
if (prevIdx !== -1) {
  console.log(html.substring(prevIdx - 200, prevIdx + 400));
}
