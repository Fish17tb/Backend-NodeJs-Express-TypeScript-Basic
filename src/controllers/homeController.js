const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs")
};

const getName = (req, res) => {
  res.send("Hoang Nguyen Vu");
};

const getInfor = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getName, getInfor };
