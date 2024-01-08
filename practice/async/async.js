const fs = require('fs');

fs.readFile('../../readme.md',(err,data)=>{ 
    if (err){
        throw err;
    }
    console.log(data); // 바이너리 형식으로 데이터를 받습니다.
    console.log(data.toString());
});
fs.readFile('../../readme.md',(err,data)=>{ 
    if (err){
        throw err;
    }
    console.log(data); // 바이너리 형식으로 데이터를 받습니다.
    console.log(data.toString());
});
//앞에가 먼저일지 뒤에가 먼저일지 모른다