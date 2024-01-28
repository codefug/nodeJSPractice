// const dotenv = require("dotenv");
// dotenv.config();

// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri =
//   `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.tfhjsuj.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri);

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