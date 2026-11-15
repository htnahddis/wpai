const fs = require('fs');
const html = fs.readFileSync('public/Free AI Agent Builder _ Build your Agents with AI _ monday.com.html', 'utf8');

const match = html.match(/class="[^"]*swiper-slide-active[^"]*"[^>]*style="([^"]*)"/);
if (match) console.log('Active slide style:', match[1]);

const match2 = html.match(/class="[^"]*swiper-slide-next[^"]*"[^>]*style="([^"]*)"/);
if (match2) console.log('Next slide style:', match2[1]);

const match3 = html.match(/class="[^"]*swiper-slide-prev[^"]*"[^>]*style="([^"]*)"/);
if (match3) console.log('Prev slide style:', match3[1]);
