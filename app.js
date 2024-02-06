// const dotenv = require("dotenv");
// dotenv.config();

// const { MongoClient } = require("mongodb");

// // // Replace the uri string with your connection string.
// const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.tfhjsuj.mongodb.net/?retryWrites=true&w=majority`;

// const client1 = new MongoClient(uri);
// const client2 = new MongoClient(uri);
// 시험 추가에 쓴 코드
// async function run() {
//   try {
//     const database = client.db("criteria");
//     const movies = database.collection("exam");
//     const name_list = ["TOEIC","TOEIC('IBT')","NEW TEPS","IELTS","TOEIC SPEAKING","TOEIC WRITING","OPIC"];
//     const condition_listj = [["600"],["68"],["227"],["5.5"],["110"],["120"],["IL","IM","IH","AL"]];
//     const condition_listy = [["500"],["53"],["195"],["4.5"],["100"],["105"],["NH", "IL","IM","IH","AL"]];
//     const type_list = ["주간","야간"];
//     let add;
//     for (const type of type_list) {
//         if (type=="주간"){
//             for (const name of name_list){
//                 add = await movies.insertOne({"name":name,"type":type,"condition":condition_listj[name_list.indexOf(name)]});
//             }
//         }
//         else{
//             for (const name of name_list) {
//               add = await movies.insertOne({
//                 name: name,
//                 type: type,
//                 condition: condition_listy[name_list.indexOf(name)],
//               });
//             }
//         }
//     }

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// 몽고디비랑 연결해서 user데이터 뽑아봤음.
// async function run() {
//   try {
//     const database = client1.db("userData");
//     const movies = database.collection("users");
//     const database2 = client2.db("timeTable");
//     const movies2 = database2.collection("2019_1");
//     const l = [[],[],[],[]];

//     const subjects = movies2.find();
//     for await (const subject of subjects){
//         l[0].push(subject);
//         console.log(subject)
//     }
//     const movie = await movies.insertOne({"name":"firstuser","article":l});

//     console.log(movie);
//   } finally {
//     await client1.close();
//     await client2.close();
//   }
// }
// run().catch(console.dir);

// const nodemailer = require('nodemailer');

// const {
//   OAUTH_USER,
//   OAUTH_CLIENT_ID,
//   OAUTH_CLIENT_SECRET,
//   OAUTH_REFRESH_TOKEN,
// } = process.env;
// console.log(OAUTH_CLIENT_ID);
// async function main(receiverEmail) {

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.google.com',
//     port: 587,
//     secure: true,
//     auth: {
//       type: 'OAuth2',
//       user: `${OAUTH_USER}`,
//       clientId: `${OAUTH_CLIENT_ID}`,
//       clientSecret: `${OAUTH_CLIENT_SECRET}`,
//       refreshToken: `${OAUTH_REFRESH_TOKEN}`,
//     },
//   });

//   const message = {
//     from: OAUTH_USER,
//     to: receiverEmail,
//     subject: '제발..',
//     html: `
//       <h1>
//         Nodemailer X Gmail OAuth 2.0 테스트 메일
//       </h1>
//       <hr />
//       <br />
//       <p>한시름 놓았어..<p/>
//       <p>그만 하자 이제 제발. .. </p>
//       <br />
//       <hr />
//       <p>이 메일은 Gmail API를 써보고 싶은 정신나간 개발자에 의해서 발송되었습니다.</p>
//       <p>이 메일을 요청한 적이 없으시다면 무시하시기 바랍니다.</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(message);
//     console.log('메일을 성공적으로 발송했습니다.');
//   } catch (e) {
//     console.log(e);
//   }

// }

// main("robot9917@naver.com");