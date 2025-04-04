require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
// const Kitten = require("./models/Kitten");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 8386;
const hostname = process.env.HOST_NAME;

// console.log(process.env);

// config file upload
app.use(fileUpload());

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

configViewEngine(app);

// khai báo route
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

// // create new a document
// const cat = new Kitten({ name: "new user" });
// console.log("my-document:", cat.name); // 'cat'
// cat.save();

// anonymous function to handle logic run order
(async () => {
  try {
    // using mongoose
    // test connection
    // await connection();

    // using mongodb
    // Connection URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("drivers");

    // embedded (nested)
    collection.insertOne({
      name: "Trần Bình",
      address: [
        {
          province: "Hà Nội",
          country: {
            name: "Việt Nam",
            code: 1000,
          },
        },
        {
          province: "New York",
          country: {
            name: "USA",
            code: 2001,
          },
        },
      ],
    });

    // const insertOne = await collection.insertOne({ name: "Hoàng Nguyên Vũ" });
    // const insert = await collection.insertOne({ address: "Thái Bình" });
    // console.log("insertOne:", insertOne);

    const findOne = await collection.findOne({ address: "Thái Bình" });
    console.log("findOne", findOne);

    // listen
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to DB:", error);
  }
})();
