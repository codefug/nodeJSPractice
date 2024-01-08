// const fs = require('fs');

// fs.readFile('../../readme.md',(err,data)=>{
//     if (err){
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// });

const fs = require('fs').promises;

fs.writeFile('../../practice.md', '글이 입력됩니다.')
    .then(() => {
        return fs.readFile('../../practice.md');
    })
    .then((data)=>{
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });