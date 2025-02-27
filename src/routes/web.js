const express = require("express");
const {
  getHomePage,
  getName,
  getInfor,
  createUser,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)
router.get("/", getHomePage);

router.get("/abc", getName);

router.get("/test", getInfor);

router.post("/create-user", createUser);

module.exports = router;
