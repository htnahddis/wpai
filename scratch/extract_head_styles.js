const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
if (headMatch) {
  const head = headMatch[1];
  
  // Extract all style tags
  const styles = [...head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
  console.log('Head styles count:', styles.length);
  
  // Save combined head styles to a css file
  fs.writeFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/head_styles.css', styles.join('\n\n'));
  console.log('Saved head_styles.css, size:', styles.join('\n\n').length);
}
