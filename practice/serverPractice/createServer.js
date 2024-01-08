const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html; charsettt=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('HI');
})
.listen(80,()=>{
    console.log('80번 포트에서 대기중입니다.');
})