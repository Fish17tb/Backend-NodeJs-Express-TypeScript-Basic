const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id= ?`,
    [userId]
  );
  // console.log("check-results:", results);

  let user = results && results.length > 0 ? results[0] : {};
  // console.log("ck-user", user);
  return user;
};

const updateUserById = async (name, email, city, userId) => {
  let [results, fields] = await connection.query(
    `UPDATE Users
         SET name = ?, email= ?, city= ?
         WHERE id = ?`,
    [name, email, city, userId]
  );
};

const deleteUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id= ?`,
    [userId]
  );
};
module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById };
