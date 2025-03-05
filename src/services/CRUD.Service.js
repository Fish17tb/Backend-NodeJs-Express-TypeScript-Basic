const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const updateUserById = async (name, email, city, userId) => {
  let [results, fields] = await connection.query(
    `UPDATE Users
         SET name = ?, email= ?, city= ?
         WHERE id = ?`,
    [name, email, city, userId]
  );
};
module.exports = { getAllUsers, updateUserById };
