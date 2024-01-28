const dotenv = require("dotenv");
dotenv.config();

// const port = 3000;
// const express = require("express");
// const app = express();
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");

// app.use(morgan("dev"));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//       httpOnly: true,
//     },
//   })
// );

// app.get("/", (req, res) => {
//   req.signedCookies;
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@cluster0.tfhjsuj.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("criteria");
    const movies = database.collection("exam");

    const query = { name: "TOEIC",type: "야간", condition: [500]};
    const movie = await movies.insertOne(query);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);