const User = require("../models/User");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const createUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let user = await User.create({ email, name, city });
  return res.status(201).json({
    errorCode: 0,
    data: user,
  });
};

module.exports = {
  getUsersAPI,
  createUserAPI,
};
