const connection = require("../config/database");
const {
  getAllUsers,
  updateUserById,
  getUserById,
  deleteUserById,
} = require("../services/CRUD.Service");
const User = require("../models/User");

const getHomePage = async (req, res) => {
  let results = [];
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
  // create user in database mySQL
  // let [results, fields] = await connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `,
  //   [email, name, city]
  // );
  // console.log("check-results:", results),

  // create user in database mongoDB
  // await User.create({
  //   email: email,
  //   name: name,
  //   city: city,
  // });
  await User.create({
    email,
    name,
    city,
  });

  res.send("Created user success!");
};

const getPageCreate = async (req, res) => {
  res.render("create.ejs");
};

const getPageUpdate = async (req, res) => {
  const userId = req.params.id;
  // console.log("ck-reqParams", req.params, userId)
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const updateUser = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(name, email, city, userId);
  // res.send("updated user success!")
  res.redirect("/");
};

const deleteUser = async (req, res) => {
  // res.send("Delete user success!")
  let userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userDelete: user });
};

const handleRemoveUser = async (req, res) => {
  let userId = req.body.userId;
  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getName,
  getInfor,
  createUser,
  getPageCreate,
  updateUser,
  getPageUpdate,
  deleteUser,
  handleRemoveUser,
};
