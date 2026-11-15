const fs = require('fs');

const publicPrefix = 'public/The AI Workspace for People & Agents _ monday.com_files/';
const assets = [
  '6a2f0575298f7a56a1eb7395_hp-context-agent-before.avif',
  '6a2f0576ff6ee0eb74038059_hp-context-agent-after.avif',
  '6a2fc220d9056a8af1484a1e_home-test-integrations-image.png',
  '6a2fca0942d710cf0199c562_home-test-docs-image.png',
  '6a2fca759de8309709de287e_home-test-dashboards-image.png',
  '6a2fc2200183fdb4f4d36d37_home-test-conversation-image.png',
  '6a2fc21f9689ac7d6794e327_home-test-files-image.svg',
  '6a2fc2216c38dc1440e74255_home-test-data-image.png',
  '6a2fc220527b67e08cd99377_home-test-updates-image.png'
];

assets.forEach(a => {
  const exists = fs.existsSync(publicPrefix + a);
  console.log(a, exists ? 'OK' : 'MISSING');
});
