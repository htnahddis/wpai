const fs = require('fs');
const html = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const styles = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
console.log('Total style tags in HTML:', styles.length);
styles.forEach((s, idx) => {
  if (s.includes('swiper') || s.includes('agents-carousel') || s.includes('splide-inner-card') || s.includes('active')) {
    console.log(`--- Style Tag ${idx} ---`);
    console.log(s.slice(0, 500));
  }
});
