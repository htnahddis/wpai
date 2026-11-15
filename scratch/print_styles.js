const fs = require('fs');
const html = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const styles = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
[14, 15, 16].forEach(idx => {
  if (styles[idx]) {
    console.log(`\n================ Style Tag ${idx} ================`);
    console.log(styles[idx]);
  }
});
