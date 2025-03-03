const express = require("express");
const {
  getHomePage,
  getName,
  getInfor,
  createUser,
  getPageCreate,
  getPageUpdate,
  updateUser
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)
router.get("/", getHomePage);

router.get("/abc", getName);

router.get("/test", getInfor);

router.get("/create", getPageCreate);

router.get("/update/:id", getPageUpdate);

router.post("/create-user", createUser);

router.post("/create-user", createUser);

router.put("update-user", updateUser)

module.exports = router;
