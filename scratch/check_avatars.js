const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/clean_main_wrapper.html', 'utf8');

const avatarMatches = [...html.matchAll(/class=["'][^"']*agen-avatar[^"']*["']/gi)].map(m => m[0]);
console.log('Avatar elements count:', avatarMatches.length);
console.log('Sample avatar class matches:', avatarMatches.slice(0, 5));
