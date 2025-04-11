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
const {
  CreateProjectAPI,
  GetProjectAPI,
  UpdateProjectAPI,
  DeleteProjectAPI,
  DeleteUserFromProjectAPI,
} = require("../controllers/projectController");

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

routerAPI.post("/projects", CreateProjectAPI);
routerAPI.get("/projects", GetProjectAPI);
routerAPI.put("/projects", UpdateProjectAPI);
routerAPI.delete("/projects", DeleteProjectAPI);
routerAPI.delete("/projects-user", DeleteUserFromProjectAPI);

// req.query (Used to transmit a lot of information (dependency on data you have))
// no need to declare additional routes, existing routes can be reused
routerAPI.get("/req-query", (req, res) => {
  console.log("check-query", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

// req.params (You need to define a new route when using it)
// only suitable for dynamic data queries with a small payload
routerAPI.get("/req-params/:name/:address", (req, res) => {
  console.log("check-query", req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
