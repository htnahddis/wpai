const fs = require('fs');

const files = [
  '69886985c5608f06ea18418f_Group 2147204020.avif',
  '698869a1465b61765c4158c7_Group 2147203924.avif',
  '698869b3c1b394830bb662c2_Group 2147204023.avif',
  '698866ff856055bb42190ab8_Group 2147204022.avif',
  '69849af7b2f1d686b69038a6_Group 2147203997.png'
];

files.forEach(f => {
  const p = 'public/Free AI Agent Builder _ Build your Agents with AI _ monday.com_files/' + f;
  console.log(f, 'size:', fs.existsSync(p) ? fs.statSync(p).size : 'MISSING');
});
