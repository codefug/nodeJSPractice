const fs = require('fs');
const file = fs.createWriteStream('../big.txt');

for (let i =0;i<=10_000;i++){
    file.write('ㅎㅇ');
}
file.end();