require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require('express-fileupload');
// const Kitten = require("./models/Kitten");

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
    // test connection
    await connection();
    // listen
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to DB:", error);
  }
})();
