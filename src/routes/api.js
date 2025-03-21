const express = require("express");
const {
  getUsersAPI,
  createUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
  UploadSingleFileAPI,
  UploadMultipleFilesAPI,
} = require("../controllers/apiControlller");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  res.status(200).json({
    data: "Display all list users",
  });
});

routerAPI.get("/abc", (req, res) => {
  res.send("Hello my name is Express");
});

routerAPI.get("/users", getUsersAPI);

routerAPI.post("/users", createUserAPI);

routerAPI.put("/users", UpdateUserAPI);

routerAPI.delete("/users", DeleteUserAPI);

routerAPI.post("/file", UploadSingleFileAPI);

routerAPI.post("/files", UploadMultipleFilesAPI);

module.exports = routerAPI;
