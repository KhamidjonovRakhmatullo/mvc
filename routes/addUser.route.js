const { Router } = require("express");
const { getAddUser, postAddUser } = require("../controllers/addUser.controller");
//
const router = Router();

router.get("/add-users", getAddUser);

// const dataUser = [];

router.post("/usersPost", postAddUser);

module.exports = {router};
