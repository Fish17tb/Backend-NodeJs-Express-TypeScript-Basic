const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = []
  connection.query("SELECT * FROM Users", function (err, results, fields) {
    users = results
    console.log("check-results", results); // results contains rows returned by server
    // console.log("check-fields", fields); // fields contains extra meta data about results, if available
    console.log("check-users:", users)
    res.send(JSON.stringify(users))
    res.send("This is Home Page!!!");
  });
};

const getName = (req, res) => {
  res.send("Hoang Nguyen Vu");
};

const getInfor = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getName, getInfor };
