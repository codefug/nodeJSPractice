const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { MongoClient, ObjectId } = require('mongodb');
let db;
const url = 'mongodb+srv://myAtlasDBUser:myAtlasDBUser@myatlasclusteredu.coc8o3e.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client) => {
    console.log('DB연결 성공');
    db = client.db('forum');
    app.listen(8080, () => {
        console.log('http://localhost:8080 에서 서버 실행중');
    })
}).catch((err) => {
    console.log(err);
})
app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname + '/index.html');
})
app.get('/URL', (요청, 응답) => {
    응답.send('오늘 비옴');
})
app.get('/shop', (요청, 응답) => {
    응답.send('쇼핑페이지임');
})
app.get('/about', (요청, 응답) => {
    응답.sendFile(__dirname + '/index2.html')
})
app.get('/news', async (요청, 응답) => {
    응답.send('오늘 비옴')
})
app.get('/list', async (요청, 응답) => {
    let result = await db.collection('post').find().toArray()
    console.log(result)
    응답.send('DB에 있던 게시물')
});
app.get('/write', (요청, 응답) => {
    const 글목록 = [
        { title: '글1', content: '내용1' },
        { title: '글2', content: '내용2' },
        { title: '글3', content: '내용3' },
    ];

    응답.render('write.ejs', { 글목록 })
})
app.post('/add', async (요청, 응답) => {
    console.log(요청.body)

    try {
        if (요청.body.title == '') {
            응답.send('제목입력안했는데?')
        } else {
            await db.collection('post').insertOne({
                title: 요청.body.title, content
                    : 요청.body.conent
            })
        }
    } catch (e) {
        console.log(e)
        응답.status(500).send('서버에러남')
    }
    응답.redirect('/list')
})

app.get('/detail/:aaaa', async (요청, 응답) => {
    let result = await db.collection('post').findOne({ _id: new ObjectId() })
    console.log(요청.params)
    응답.render('detail.ejs')
})

app.get('/detail/:id/:id2/:id3', async (요청, 응답) => {
    let result = await db.collection('post').findOne({
        _id: 요청.
            params.id
    });
    console.log(요청.params)
    응답.render('detail.ejs',{result})
})

app.post('/edit', async (요청,응답)=>{
    await db.collection('post').updateOne({ _id : 1 },
        {$set : { title: 요청.body.title, content : 요청.body.content}})
    console.log(요청.body)
})