const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const swiperIndex = html.indexOf('agents-carousel');
console.log('Original Swiper snippet:');
console.log(html.slice(swiperIndex - 200, swiperIndex + 2500));
