require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8386;
const hostname = process.env.HOST_NAME;

// console.log(process.env);

configViewEngine(app);

// khai báo route
app.use("/router", webRoutes);

// test connection
// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// A simple SELECT query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log("check-results", results); // results contains rows returned by server
  console.log("check-fields", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
