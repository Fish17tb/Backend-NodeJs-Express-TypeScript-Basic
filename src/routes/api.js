const express = require("express");
const {
  getUsersAPI,
  createUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
  UploadSingleFileAPI,
  UploadMultipleFilesAPI,
} = require("../controllers/apiControlller");
const {
  CreateCustomerAPI,
  CreateArrayCustomerAPI,
  getCustomersAPI,
  UpdateCustomerAPI,
  DeleteCustomerAPI,
  DeleteArrayCustomerAPI,
} = require("../controllers/customerController");

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

routerAPI.post("/customers", CreateCustomerAPI);
routerAPI.post("/customers-many", CreateArrayCustomerAPI);
routerAPI.get("/customers", getCustomersAPI);
routerAPI.put("/customers", UpdateCustomerAPI);
routerAPI.delete("/customers", DeleteCustomerAPI);
routerAPI.delete("/customers-many", DeleteArrayCustomerAPI);

module.exports = routerAPI;
