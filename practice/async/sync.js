const fs = require('fs');
const data = fs.readFileSync('../../practice.md');
console.log('1번',data.toString());