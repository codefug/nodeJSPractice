const fs = require('fs').promises;

(async function main() {
    let data = await fs.readFile('../../practice.md')
    console.log("1",data);
    data = await fs.readFile('../../practice.md')
    console.log("2",data);
    data = await fs.readFile('../../practice.md')
    console.log("3",data);
    data = await fs.readFile('../../practice.md')
    console.log("4",data);
    data = await fs.readFile('../../practice.md')
    console.log("5",data);
    data = await fs.readFile('../../practice.md')
    console.log("6",data);
})()