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

const createUser = async (req, res) => {
  // console.log("check-reqUser", req.body)

  let { email, name, city } = req.body;
  console.log("email = ", email, "name = ", name, "city = ", city);

  // use connection with call back
  // connection.query(
  //   ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results, fields) {
  //     console.log("check-result",results);
  //     res.send("Create user success!");
  //   }
  // );

  // use connection with async await
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `,
    [email, name, city]
  );
  console.log("check-results:", results),
  res.send("Created user success!");
};

const getPageCreate = (req, res) => {
  res.render("create.ejs");
};

module.exports = { getHomePage, getName, getInfor, createUser, getPageCreate };
