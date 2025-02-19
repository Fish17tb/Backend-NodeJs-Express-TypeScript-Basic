const express = require("express");
const {
  getHomePage,
  getName,
  getInfor,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)
router.get("/", getHomePage);

router.get("/abc", getName);

router.get("/test", getInfor);

module.exports = router;
