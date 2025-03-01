const express = require("express");
const {
  getHomePage,
  getName,
  getInfor,
  createUser,
  getPageCreate,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)
router.get("/", getHomePage);

router.get("/abc", getName);

router.get("/test", getInfor);

router.get("/create", getPageCreate);

router.post("/create-user", createUser);

module.exports = router;
