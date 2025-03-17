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

const UpdateUserAPI = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  let userId = req.body.userId;

  let user = await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const DeleteUserAPI = async (req, res) => {
  let userId = req.body.userId;
  let result = await User.deleteOne({_id: userId})
  return res.status(200).json({
    errorCode: 0,
    data: result
  })
};

module.exports = {
  getUsersAPI,
  createUserAPI,
  UpdateUserAPI,
  DeleteUserAPI,
};
