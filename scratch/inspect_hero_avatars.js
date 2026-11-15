const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/clean_main_wrapper.html', 'utf8');

const avatarWrapIndex = html.indexOf('class="agents_avatars-wrapper"');
console.log('avatarWrapIndex:', avatarWrapIndex);

const avatarWrapContent = html.slice(avatarWrapIndex, avatarWrapIndex + 3000);
console.log('Avatar wrap preview:');
console.log(avatarWrapContent.slice(0, 1500));
