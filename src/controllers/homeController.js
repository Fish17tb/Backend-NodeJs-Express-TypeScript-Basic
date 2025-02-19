const getHomePage = (req, res) => {
  res.send("This is Home Page!!!");
};

const getName = (req, res) => {
  res.send("Hoang Nguyen Vu");
};

const getInfor = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getName, getInfor };
