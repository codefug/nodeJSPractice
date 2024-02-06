const express = require('express')
const path = require('path');
const app = express()

app.set('port', process.env.PORT || 3000);

app.use((req,res,next)=>{
    console.log('모든 요청으로부터 실행');
    next();
})

app.get('/', (req, res) => {/*
root URL(route)와 연결
req, res는 Node 환경에서 제공해주는 것과 같다. 따라서 req.pipe(), 
req.on('data', callback)과 같은 것을 호출할 수 있다.
*/
    res.send('Hello World!') // Hello World!라는 데이터 전송
})

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`)
})