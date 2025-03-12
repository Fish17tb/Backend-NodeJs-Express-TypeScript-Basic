require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8386;
const hostname = process.env.HOST_NAME;

// console.log(process.env);

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({ name: "abcd" });
console.log("my-document:", cat.name); // 'cat'
cat.save();

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
