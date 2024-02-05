const express = require('express')
const app = express()
const port = 3000

app.use('/:id',(req, res, next) => {
  console.log(`${req.params.id} 노드 버드 프로젝트를 시작합니다.`);
  next();
})

app.get('/', (req, res) => {/*
root URL(route)와 연결
req, res는 Node 환경에서 제공해주는 것과 같다. 따라서 req.pipe(), 
req.on('data', callback)과 같은 것을 호출할 수 있다.
*/
  res.send('Hello World!') // Hello World!라는 데이터 전송
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})// 3000 포트와 연결