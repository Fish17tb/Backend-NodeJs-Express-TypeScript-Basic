const express = require("express"); // commonjs
const path = require('path'); // commonjs

const app = express();
const port = 3030;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.render("sample.ejs")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
