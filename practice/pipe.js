const fs = require('fs');
const zlib = require('zlib'); 

const readStream = fs.createReadStream('../practice.md',{highWaterMark:16});
const writeStream = fs.createWriteStream('../practice2.md');
const zlibStream = zlib.createGzip();
readStream.pipe(zlibStream).pipe(writeStream);