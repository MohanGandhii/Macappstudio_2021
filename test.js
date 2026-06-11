const fs = require('fs');
const code = fs.readFileSync('src/app/resources/_components/03_ChallengesAndSquads.tsx', 'utf8');
console.log(code.match(/className="shrink-0 w-\[\d+px\]/g));
