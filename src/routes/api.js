const express = require("express");
const { getUsersAPI } = require("../controllers/apiControlller");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
 res.status(200).json({
    data: "Display all list users"
 })
});

routerAPI.get("/abc", (req, res) => {
  res.send("Hello my name is Express");
});

routerAPI.get("/users", getUsersAPI)



module.exports = routerAPI;
