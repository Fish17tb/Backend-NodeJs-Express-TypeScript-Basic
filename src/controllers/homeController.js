const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUD.Service");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  // console.log("check-result:", results);
  return res.render("home.ejs", { listUsers: results });
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

  // use connection with call back function
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
  console.log("check-results:", results), res.send("Created user success!");
};

const getPageCreate = async (req, res) => {
  res.render("create.ejs");
};

const getPageUpdate = async (req, res) => {
  res.render("edit.ejs");
};

const updateUser = () => {};

module.exports = {
  getHomePage,
  getName,
  getInfor,
  createUser,
  getPageCreate,
  updateUser,
  getPageUpdate,
};
