require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

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

// test connection
connection()

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
