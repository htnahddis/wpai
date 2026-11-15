const fs = require('fs');
const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const tabMenus = [...html.matchAll(/class=["']([^"']*tab-menu[^"']*)["']/gi)].map(m => m[1]);
console.log('Tab menus:', tabMenus);

const tabLinks = [...html.matchAll(/<a[^>]+data-w-tab=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)]
  .map(m => ({ dataWTab: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() }));
console.log('Tab links count:', tabLinks.length);
console.log('Tab links:', tabLinks);

const tabPanes = [...html.matchAll(/<div[^>]+data-w-tab=["']([^"']*)["'][^>]*class=["']([^"']*)["']/gi)]
  .map(m => ({ dataWTab: m[1], class: m[2] }));
console.log('Tab panes count:', tabPanes.length);
console.log('Tab panes:', tabPanes);
