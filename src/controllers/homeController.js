const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getName = (req, res) => {
  res.send("Hoang Nguyen Vu");
};

const getInfor = (req, res) => {
  res.render("sample.ejs");
};

const createUser = (req, res) => {
  // console.log("check-reqUser", req.body)

  let { email, name, city } = req.body;
  console.log("email = ", email, "name = ", name, "city = ", city);

  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("abdcsdfsdf")
    }
  );
};

module.exports = { getHomePage, getName, getInfor, createUser };
