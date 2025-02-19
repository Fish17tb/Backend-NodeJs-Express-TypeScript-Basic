const express = require("express");
const router = express.Router();

router.get("/abc", (req, res) => {
  res.send("Hello World! Nguyen");
});

router.get("/test", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
