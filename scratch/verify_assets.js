const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/scratch/extracted_main_wrapper.html', 'utf8');

const baseDir = 'c:/Users/Aditya/Desktop/Code/CLIENT/percipere/wpai/public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files';

const matches = [...html.matchAll(/(?:\/Free(?:%20|\s)AI(?:%20|\s)Agent(?:%20|\s)Builder(?:%20|\s)_(?:%20|\s)Build(?:%20|\s)your(?:%20|\s)Agents(?:%20|\s)with(?:%20|\s)AI(?:%20|\s)_(?:%20|\s)monday\.com_files\/)([^"',]+)/gi)]
  .map(m => decodeURIComponent(m[1].split(' ')[0])); // handle srcset with ' 500w'

const allMatches = [];
for (const m of html.matchAll(/(?:\/Free(?:%20|\s)AI(?:%20|\s)Agent(?:%20|\s)Builder(?:%20|\s)_(?:%20|\s)Build(?:%20|\s)your(?:%20|\s)Agents(?:%20|\s)with(?:%20|\s)AI(?:%20|\s)_(?:%20|\s)monday\.com_files\/)([^"',\n]+)/gi)) {
  let val = m[1].trim();
  // if it's in srcset like "filename.png 712w", split off descriptor
  if (val.match(/\s+\d+w$/)) {
    val = val.replace(/\s+\d+w$/, '');
  }
  allMatches.push(decodeURIComponent(val));
}

console.log('Total extracted assets:', allMatches.length);

const missing = [];
const existing = [];

for (const file of new Set(allMatches)) {
  const fullPath = path.join(baseDir, file);
  if (fs.existsSync(fullPath)) {
    existing.push(file);
  } else {
    missing.push(file);
  }
}

console.log('Existing distinct files:', existing.length);
console.log('Missing distinct files:', missing.length);
if (missing.length > 0) {
  console.log('Missing:', missing);
}
