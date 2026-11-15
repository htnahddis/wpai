const fs = require('fs');
const content = fs.readFileSync('src/components/PerciVerseOrbitalEcosystem.tsx', 'utf8');

const s = content.indexOf('const build = () => {');
const e = content.indexOf('const step = () => {');
console.log(content.slice(s, e));
