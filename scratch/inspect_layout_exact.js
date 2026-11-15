const fs = require('fs');
const content = fs.readFileSync('src/components/PerciVerseOrbitalEcosystem.tsx', 'utf8');

const s = content.indexOf('const layout = () => {');
const e = content.indexOf('const sample = (u: number)', s);
console.log(content.slice(s, e));
