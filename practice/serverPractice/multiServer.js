// 한번에 여러번 서버를 실행 할 수 있다.

const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server</p>');
})
.listen(8080,()=>{
    console.log('8080번 포트에서 서버 대기중입니다.')
});

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node2</h1>');
    res.end('<p>Hello Server!</p>');
})

.listen(8080,()=>{
    console.log('8080 포트입니다.');
})

// 여러 주소로 서버 생성