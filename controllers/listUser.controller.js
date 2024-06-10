// const { dataUser } = require("../controllers/addUser.controller"); ///from addUserController
const modelAddUser = require("../models/addUser.model")

const getListUser = (req, res) => {
  const dataUser = modelAddUser.findAll()
  // res.render("listUser", { dataUser });
  res.render("listUser", { dataUser });
  // console.log(dataUser);
};

module.exports = { getListUser };
