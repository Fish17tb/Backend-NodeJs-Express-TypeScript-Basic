require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8386;
const hostname = process.env.HOST_NAME;

// console.log(process.env);

configViewEngine(app);

// khai báo route
app.use("/router", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
