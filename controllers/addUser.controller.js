const modelAddUser = require("../models/addUser.model")
const uuid = require("uuid")
//
//add
const getAddUser = ("/add-users", (req, res) => {
    res.render("addUser");
  })

  //data
  // const dataUser = [];

  //post method
  const postAddUser = (req, res) => {
    // dataUser.push({ username: req.body.username, userage: req.body.userage });
    const uid = uuid.v4();
    const dataUser = new modelAddUser ( uid,req.body.username, req.body.userage)
    dataUser.save()
    res.redirect("/");
    // console.log(dataUser);
  }

module.exports = {getAddUser, postAddUser, } 
// module.exports = {getAddUser, postAddUser, dataUser} //dataUser to listUserController